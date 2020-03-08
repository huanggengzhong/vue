<!--
* description: 表单组
* author: tfy
* createdDate: 2019-10-08
-->
<template>
<div style="margin: 5px 0px;">
 <div style="display: grid;" v-for="(item,index) in $crmcf.__group(tableComponents,4)" :key="index">
<el-row> 
    <component
      v-for="comp in item"
      :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
      :span="comp.span"
      :key="comp.compKey"
      :labelName="comp.labelName"
      :codeField="comp.codeField"
      :textField="comp.textField"
      :disabled="comp.disabled"
      :class="comp.isRequireUpload&&comp.isUpload?'crm-label-required choosefile':'choosefile'"
      :is="comp.component"
      :isMust="comp.isMust"
      :isRequire="comp.isRequire"
      :style="comp.hiden?'display:none':'display:block'"
      :inputType="comp.inputType"
      :code="formField[comp.codeField]?formField[comp.codeField]:''"
      :lookuptype="comp.lookuptype"
      @changeCode="comp.changeCode"
      @sendChangeCode="sendChangeCode"
      :changeCodeArray="comp.changeCodeArray"
    ></component>
</el-row>
</div>
</div>
</template>
<script>
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
export default { 
  name: "crmGroupForm",
  mixins: [dropdownMixins],
  props: {
    dynamicComponentss: {
      type: Array,
      default: function() {
        return [];
      }
    },
    values:{
      type:Object,
      default: function() {
        return {};
      }
    }
  },
  created(){
    var that =this
  },
  data() {
    return {
      tableComponents: this.dynamicComponentss,
       formField: this.values
    };
  },
  watch:{
  },
  methods:{
    sendChangeCode(code, text){
      this.formField[text]=code
    },
    // changeCode(code,text){
    // this.formField[text]=code
    // }
  }
};
</script>
