<template>
  <section>
    <el-col :span="span">
      <lableName
        :curLabelName="curLabelName"
        :isShowLabel="isShowLabel"
        :isRequire="isRequire"
      ></lableName>
      <el-select
        :multiple="isMul"
        collapse-tags
        filterable
        v-model="modelCode"
        placeholder="请选择"
        @clear="clearCode"
        clearable
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.TypeCode"
          :label="item.TypedCn"
          :value="item.TypeCode"
        >{{item.TypedCn}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :valmodelCode="valmodelCode"
      ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "showType",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      curLabelName: this.labelName === "" ? "显示方式" : this.labelName,
    //   按车系显示、按基准车系显示、按车型显示、按18位码显示
      optionDatas:[{TypeCode:'1',TypedCn:'按车系显示'},{TypeCode:'2',TypedCn:'按基准车系显示'},{TypeCode:'3',TypedCn:'按车型显示'},{TypeCode:'4',TypedCn:'按18位码显示'}]
    };
  },
  methods: {}
};
</script>
