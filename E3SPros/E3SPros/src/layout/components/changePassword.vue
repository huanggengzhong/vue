<!--
* description: 修改密码
* author: yxyan
* createdDate: 2019-10-11
-->
<template>
  <section class="changePassword">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="385px"
    >
      <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :inputType="comp.inputType"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { validUsername } from "@/utils/validate";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.sysRoleMutationGlobalSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "原密码",//this.$t("org.label.roleCode"),
          codeField: "oldpassword",
          isRequire: true,
          inputType:"password",
           span: 20,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //原密码
        {
          compKey: "compKey2",
          labelName:  "新密码",//this.$t("org.label.roleName"),
          codeField: "newpassword",
          isRequire: true,
          inputType:"password",
          span: 20,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //新密码
    
        {
          compKey: "compKey5",
          labelName:  "确认新密码",// this.$t("org.label.roleDesc"),
          codeField: "newpassword1",
          span: 20,
          inputType:"password",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } //确认新密码
      ],
     
      // 标题
      textMap: {
        edit:'修改密码', //修改弹框名字
        add: this.$t("org.label.addRole") //新增弹框名字
      },
   
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
       newpassword:'',
       oldpassword:'',
       newpassword1:'',
       r:''

      },
       infos: {
          l0200300002:"密码修改成功",
          l0200300003:"密码修改失败",
          l0200300004:"旧密码验证错误",
          l0200300005:"旧密码不能和新密码相同",
          l0200300006:"获取菜单树失败!",
          l0200300007:"加载系统设置成功",
          l0200300008:"加载系统设置失败",
          l0200300009:"保存系统设置成功",
          l0200300010:"保存系统设置失败",
          l0200300011:"密码不符合密码规则",
          l0200300012:"新密码不能与最近三次设置的密码相同",
      },
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        if(this.formField.newpassword!=this.formField.newpassword1){
          that.$message({
          message: "两次输入的新密码不相同，请重新输入!" ,//this.$t('org.message.inputOrgType'),//'请选择组织类型',
          type: 'warning',
          duration: 2000
        });
        return;
        }
         if(this.formField.oldpassword==this.formField.newpassword){
          that.$message({
          message: "新密码和旧密码不能相同，请重新输入!" ,//this.$t('org.message.inputOrgType'),//'请选择组织类型',
          type: 'warning',
          duration: 2000
        });
        return;
        }
       this.$store
       .dispatch("user/modifyPassword",this.formField)
       .then((response) => {
           debugger
             if(response.result=='1'){
               that.$message({
                message: "修改成功",
                type: "success",
                duration: 2000
              });
             that.curPopupsVisible = false;
             
             }else{
              let errInfo = "修改失败,请重试";
              if (that.infos[response.msg]) {
                errInfo = that.infos[response.msg];
              }
               that.$message({
                message: errInfo,
                type: "warning",
                duration: 2000
              });
             }
            })
       .catch(response => {
              let errInfo = "修改失败,请重试";
              if (that.infos[response.msg]) {
                errInfo = that.infos[response.msg];
              }
              // if (response.vcode !== "" && response.vcode) {
              //   this.loginForm.clientid = response.clientid;
              //   this.vcode = response.vcode;
              // }
              that.$message({
                message: errInfo,
                type: "warning",
                duration: 2000
              });
              that.loading = false;
            });
       ;
       


      }
    }
  }
};
</script>
