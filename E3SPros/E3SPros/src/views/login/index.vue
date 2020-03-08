<template>
  <div
    id="login-container"
    class="login-container"
    :style="note"
  >
    <lang-select
      :logo="true"
      class="right-menu-item hover-effect lang"
    />
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
      :inline-message=true
    >
      <div class="title-container">
        <h3 class="title">{{$t('sys.login.title')}}<span class="icon">|</span><span class="titleright">{{$t('sys.login.titleright')}}</span></h3>
      </div>

      <el-form-item prop="username">
        <!-- <span class="svg-container">
          <svg-icon icon-class="user" />
        </span> -->
        <el-input
          ref="username"
          v-model="loginForm.username"
          :placeholder="$t('sys.login.username')"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <!-- <span class="svg-container">
          <svg-icon icon-class="password" />
        </span> -->
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          :placeholder="$t('sys.login.password')"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <el-form-item
        prop="vcode"
        v-if="vcode !== '' && vcode"
      >
        <el-input
          ref="vcode"
          v-model="loginForm.vcode"
          placeholder="请输入验证码"
          name="vcode"
          type="text"
          tabindex="3"
          auto-complete="on"
          class="val-input"
        />
        <img
          :src="vcode"
          class="val-img"
          @click="getVCode"
        />
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        @click.native.prevent="handleLogin"
      >{{$t('sys.login.logIn')}}</el-button>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import LangSelect from "@/components/LangSelect";
export default {
  name: "Login",
  components: {
    LangSelect
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(this.$message({
            message: this.$t("sys.login.promptUser"),
            type: "warning",
            duration: 2000
          }));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 1) {
        callback(this.$message({
            message: this.$t("sys.login.promptPass"),
            type: "warning",
            duration: 2000
          }));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: "",
        vcode: "",
        clientid: ""
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
      note: {
        backgroundImage:
          "url(" + require("@/assets/login/dongfeng-login.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundColor: " #f5f7fa"
      },
      infos: {
        l0100100001: "用户名不能为空",
        l0100100002: "用户不存在",
        l0100100003: "用户禁用，请联系管理员",
        l0100100004: "用户名密码错误",
        l0100100006: "操作异常，请联系管理员",
        l0100100007:
          "登录失败超过限制次数，请联系管理员；或通过找回密码功能重置密码后再登录",
        l0100100008: "密码已过期,请通过【找回密码】重置",
        l0100100009: "用户已失效，请联系管理员",
        l0100100010: "用户未激活，请联系管理员",
        l0100100019: "验证码不能为空",
        l0100100020: "验证码失效",
        l0100100024: "验证码错误"
      },
      vcode: "",
      // 验证码是否第一次显示,进行提示判断
      boolInfo:true
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || "/" });
              this.loading = false;
            })
            .catch(response => {
              var errInfo = "登陆失败，请重试";
              if (this.infos[response.msg]) {
                errInfo = this.infos[response.msg];
              }
              if (response.vcode !== "" && response.vcode) {
                this.loginForm.clientid = response.clientid;
                this.vcode = response.vcode;
              }
              if(errInfo===this.infos["l0100100019"] && this.boolInfo ){
                  this.boolInfo=false
              }else{
                this.$message({
                message: errInfo,
                type: "warning",
                duration: 2000
              })
              }

              this.loading = false;
            });
        } else {
          this.$message({
            message: "账号和密码不能为空.",
            type: "warning",
            duration: 2000
          });
          return false;
        }
      });
    },
    // 获取验证码
    getVCode() {
        this.$store.dispatch("user/login", this.loginForm).catch(response => {
        if (response.vcode !== "" && response.vcode) {
          this.loginForm.clientid = response.clientid;
          this.vcode = response.vcode;
        }
      });
    }
  }
};
</script>


