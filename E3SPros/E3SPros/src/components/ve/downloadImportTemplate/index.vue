<!--
* description: 下载导入模板
* author: ydche
* createdDate: 2019-09-19
-->
<template>
    <section>
      <el-col :span="span"  style="text-align: center;">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="false"
        :isRequire="isRequire"
      ></lableName>
      <a class="el-link" type="primary" @click="exportExcels" >{{curLabelName}}</a>
      <validateFormate
      :curLabelName="curLabelName"
      :validrule="validrule"
    ></validateFormate>
    </el-col>
    </section>
</template>
<script>
import { veApis } from '@/api/graphQLApiList/ve'
import { dropdownMixins } from '@/components/mixins/dropdownMixins'
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: 'PurcashType',
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
        fileList:[],
        filePath:"",

      curLabelName: this.labelName === '' ? this.$t('sys.button.downloadImportTemplate')/*下载导入模板*/ : this.labelName,
    }
  },
  mounted(){

  },
  methods:{
      exportExcels(){
        this.$parent.$parent.$parent.$parent.exportExcel()
      }
  }
}
</script>
<style scoped>
/deep/.el-input-group__append, .el-input-group__prepend {
    border: 0;
}
/deep/.upload-demo {
    text-align: center;
}
/deep/.el-link {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    color: #2971ff;
    height: 28px;
    line-height:  28px;
    padding-right: 29%;
    padding-right: 0;
}
</style>
