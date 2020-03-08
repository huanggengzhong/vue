<!--
* description: 上传文件输入框
* author: ydche
* createdDate: 2019-09-19
-->
<template>
    <section>
      <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>

      <el-input :placeholder="$t('sys.button.selFile')/*选择文件*/" v-model="filePath" readonly>
        <el-upload slot="append"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        class="upload-demo" :auto-upload="false" :on-change="handleChange">
        <el-button size="small" type="primary">{{$t('sys.button.clickUpload')/*点击上传*/}}</el-button>
        </el-upload>
        </el-input>

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
      curLabelName: this.labelName === '' ? this.$t('sys.button.selFile')/*选择文件*/ : this.labelName,
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
</style>
