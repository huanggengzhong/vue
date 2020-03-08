<!--
* description: lableName模块
* author: liyanm
* createdDate: 2019-08-09
-->
<template>
  <label
    @mouseenter="ellipsvisible"
    @mouseleave="ellipsinvisible"
    v-if="isShowLabel"
  >
    <i
      v-if="isRequire"
      class="iconRequired"
    ></i>
    <span
      class="ellipsisshowName"
      v-show="ellipsisshow"
    >{{curLabelName}}<i></i></span>
    <span class="curName">{{curLabelName}}</span></label>
</template>
<script>
export default {
  name: "lableName",
  props: {
    // 是否显示标签
    isShowLabel: { type: Boolean, default: true },
    // 控件label名称
    curLabelName: { type: String, default: "" },
    // 是否不填/选
    isRequire: { type: Boolean, default: false }
  },
  data() {
    return {
      // 是否显示字数溢出提示
      ellipsisshow: false
    };
  },
  methods: {
    // 是否溢出显示
    ellipsvisible() {
      //判断超过4个字的显示溢出效果
      if (this.curLabelName.length > 4) {
        this.ellipsisshow = true;
      } else {
        this.ellipsisshow = false;
      }
    },
    ellipsinvisible() {
      this.ellipsisshow = false;
    }
  }
};
</script>
