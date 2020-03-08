<!--
* description: 服务大类下拉框（多选，单选）,支持搜索
* author: zxuan
*
-->
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
          :key="item.serverClassCode"
          :label="item.serverClassName"
          :value="item.serverClassCode"
        >{{item.serverClassName}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { dropdownMixins } from "@/components/crm/mixins/crmdropdownMix";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "processnode",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      curLabelName:
        this.labelName === ""
          ? this.$suit.globalLabel.CAPITAL_TYPE
          : this.labelName,
      // API配置对象
      apiConfig: crmApis.serverClassQueryFindAll,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "serverClassCode",
        "serverClassName"
      ],
      //curOptionDatas: []
    };
  },
  // watch: {
  //   optionDatas() {
  //     var valiList = [];
  //     for (var item in this.optionDatas) {
  //       //去重
  //       if (!valiList.includes(item.purcashTypeName)) {
  //         valiList.push(item.purcashTypeName);
  //         var curOptionData = {};
  //         curOptionData["purcashTypeName"] = this.optionDatas[
  //           item
  //         ].purcashTypeName;
  //         curOptionData["purcashTypeId"] = this.optionDatas[item].purcashTypeId;
  //         this.curOptionDatas.push(curOptionData);
  //       }
  //     }
  //   }
  // },
  methods: {}
};
</script>
