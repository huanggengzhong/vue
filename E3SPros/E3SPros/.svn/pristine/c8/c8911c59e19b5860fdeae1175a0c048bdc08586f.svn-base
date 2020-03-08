<!--
* description: 值列表查询组件（多选，单选）,支持搜索
* author: liyanm
* createdDate: 2019-07-27
 *   2019-08-05 加入文字溢出效果 liyanm
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
*  2019-10-19 增加sendCode方法 dxuem
-->
<template>
  <section>
    <el-col :span="span">
      <div class="comwidth">
        <lableName
          :curLabelName="curLabelName"
          :isShowLabel="isShowLabel"
          :isRequire="isRequire"
        ></lableName>

        <el-select
          :multiple="isMul"
          collapse-tags
          :filterable="filterable"
          v-model="modelCode"
          placeholder="请选择"
          @clear="clearCode"
          :clearable="clearable"
          @change="sendCode"
          :disabled="disabled"
          :readonly="readonly"
          size="small"
        >
          <el-option
            v-for="item in optionDatas"
            :key="item.lookupValueCode"
            :label="item.lookupValueName"
            :value="item.lookupValueCode"
          >{{item.lookupValueName}}</el-option>
        </el-select>
        <validateFormate
          :curLabelName="curLabelName"
          :validrule="validrule"
        ></validateFormate>
      </div>

    </el-col>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { crmApis } from "@/api/graphQLApiList/crm";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "orgLookupValue",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  props: {
    // 值列表类型编码
    lookuptype: { type: String, default: "_is_null_code_" },
    // 获取组件中的名称，如：textField="carBrandCode"
    codeField: { type: String, default: "lookupValueCode" },
    // 获取组件中的名称，如：textField="carBrandName"
    textField: { type: String, default: "lookupValueName" }
  },
  data() {
    return {
      // API配置对象
      apiConfig: crmApis.mdsLookupValueQueryByPage,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "oemCode",
        "groupCode",
        "lookupTypeCode",
        "lookupValueCode",
        "lookupValueName"
      ],
      // 下拉查询条件
      listQuery: {
        isEnable: "",
        lookupTypeCode: this.lookuptype
      }
      //   curLabelName: this.label
    };
  },
  methods:{
    sendCode(){
      let val=this.modelCode;
      let text=this.codeField
      this.$emit("changeCode", val,text);
      this.$emit("sendChangeCode", val,text);
    }
  }

};
</script>
