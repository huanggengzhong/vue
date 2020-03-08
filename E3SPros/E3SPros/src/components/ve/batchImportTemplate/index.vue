<!--
* description: 上传文件输入框
* author: ydche
* createdDate: 2019-09-19
-->
<template>
    <section>
      <el-col :span="span">
        <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        multiple
        :limit="3"
        :file-list="fileList">
        <a size="small" type="">批量导入模板</a>
        </el-upload>

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
        fileList:null,
        filePath:"",
        file:{},
      curLabelName: this.labelName === '' ? '' : this.labelName,
    }
  },
  mounted(){

  },
  methods:{
    handleChange(file, fileList)
    {
      this.file = file
      this.filePath=file.name;
    }
  }
}
</script>
<style scoped>
/deep/.el-input-group__append, .el-input-group__prepend {
    border: 0;
}
/deep/a {
    line-height: 28px;
    color: #3a8ee6;
}
</style>
