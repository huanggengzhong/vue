<template>
  <el-dropdown
    trigger="click"
    placement="bottom"
    @command="handleSetLanguage"
    :class="[logo?'loginiconClass':'international']"
  >
    <div>
      <div v-if="logo">
        <img :src="showIcon.icon">
        <label>{{showIcon.lable}}</label>
      </div>

      <svg-icon
        v-if="!logo"
        class-name="international-icon"
        icon-class="language"
      />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        :disabled="language==='zh'"
        command="zh"
      >
        中文
      </el-dropdown-item>
      <el-dropdown-item
        :disabled="language==='en'"
        command="en"
      >
        English
      </el-dropdown-item>
      <el-dropdown-item
        :disabled="language==='fr'"
        command="fr"
      >
        Français
      </el-dropdown-item>
      <!-- <el-dropdown-item :disabled="language==='ja'" command="ja">
        日本語
      </el-dropdown-item> -->
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "language",
  props: {
    logo: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      showIcon: {
        lable: "中文简体",
        icon: require("@/assets/login/cn.png")
      }
    };
  },
  created() {
    this.showIconMoth(this.$store.getters.language);
  },
  computed: {
    language() {
      return this.$store.getters.language;
    }
  },
  watch: {
    language(newValue, oldValue) {
      this.showIconMoth(newValue);
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("app/setLanguage", lang);
      this.$message({
        message: this.$t("sys.tips.esTip1"),
        type: "success"
      });
    },
    showIconMoth(val) {
      switch (val) {
        case "zh":
          this.showIcon.lable = "中文简体";
          this.showIcon.icon = require("@/assets/login/cn.png");
          break;
        case "en":
          this.showIcon.lable = "English";
          this.showIcon.icon = require("@/assets/login/en.png");
          break;
        case "fr":
          this.showIcon.lable = "Français";
          this.showIcon.icon = require("@/assets/login/fa.png");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dropdown-menu {
  z-index: 40001 !important;
}
/deep/ .svg-icon {
  cursor: pointer;
}
.loginiconClass {
  position: absolute;
  top: 3%;
  right: 14%;
  font-size: 12px;
  font-weight: normal;
  label {
    font-weight: normal;
    position: relative;
    top: -4px;
    font-size: 12px;
  }
}
</style>
