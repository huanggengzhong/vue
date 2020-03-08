<!--
* description: 车系下拉框（多选，单选）,支持搜索
* author: ydche
* createdDate: 2019-07-27
* 增加文字溢出效果 liyam: 2019-08-5
*  2019-08-09 修改文字溢出效果-封装/校验效果 liyanm
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
          :key="item.carSeriesCode"
          :label="item.carSeriesCn"
          :value="item.carSeriesCode"
        >{{item.carSeriesCn}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      ></validateFormate>
    </el-col>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
import { seApis } from "@/api/graphQLApiList/se";

export default {
  name: "carBrand",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labenName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      curLabelName: this.labelName === "" ? "车系" : this.labelName,
      // API配置对象
      apiConfig: seApis.seChooseCarSeriesQueryFind,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "beginDate",
        "brandType",
        "carBrandCode",
        "carSeriesCn",
        "carSeriesCode",
        "carSeriesEn",
        "carSeriesId",
        "createdDate",
        "createdName",
        "creator",
        "endDate",
        "gdsname",
        "groupCode",
        "groupId",
        "isEnable",
        "lastUpdatedDate",
        "modifier",
        "modifyName",
        "mycatOpTime",
        "oemCode",
        "oemId",
        "orderNo",
        "partBrandCode",
        "partSeriesCode",
        "partSeriesId",
        "sCarseriesCode",
        "sCarseriesDesc",
        "sdpOrgId",
        "sdpUserId",
        "updateControlId"
      ] /* ,
      listQuery: {
        isEnable: '1',
        carBrandCode:''
      } */
    };
  },

  mothods: {}
};
</script>

