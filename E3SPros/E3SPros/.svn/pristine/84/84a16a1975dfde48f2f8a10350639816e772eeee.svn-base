<!--
* description: 提交组
* author: tfy
* createdDate: 2019-10-18
-->
<template>
<div class="filter-container filter-button filter-button-bottom-abosulte">
    <el-button
      v-for="(comp) in formSubmitButton"
      :icon="getIcon(comp)"
      :size="comp.size"
      :type="comp.type"
      :text="comp.text"
      :key="comp.compKey"
      @click="comp.clickEvent"
      :ref="comp.compKey"
      :class="formSubmitButtonClass"
      :style="comp.isShow?'display:block':'display:none'"
    >{{comp.text}}</el-button>
</div>
</template>
<script>
export default {
  name: "crmGroupSumit",
  props: {
    formSubmitButton: {
      type: Array,
      default: function() {
        return [];
      }
    },
    text:{
      type:String,
      default: function() {
        return '';
      }
    }
  },
  created(){
    var that =this
  },
  data() {
    return {
       formSubmitButtonClass:'button',
       formSubmitButton: this.formSubmitButton
    };
  },
  methods:{
     getIcon(comp) {
      switch (comp.text) {
        case "保存":
        // 初始化
        comp.type = "primary";
          return "el-icon-circle-check-outline";
          break;
        case "审核":
        comp.type = "";
          return "el-icon-zoom-in";
          break;
        case "驳回":
        comp.type = "";
          return "el-icon-zoom-out";
          break;
        default:
          break;
      }
    }
  }
  
};
</script>
