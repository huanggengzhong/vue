<!--
* description: 资金类型下拉框（多选，单选）,支持搜索
* author: liyanm
* createdDate: 2019-07-18
 *   2019-08-05 加入文字溢出效果 liyanm
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
        :filterable="filterable"
        v-model="modelCode"
         :placeholder="placeholder"
        @clear="clearCode"
        :clearable="clearable"
        @change="sendCode"
        :disabled="disabled"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.purcashTypeId"
          :label="item.purcashTypeName"
          :value="item.purcashTypeId"
        >{{item.purcashTypeName}}</el-option>
      </el-select>
      <validateFormate
        :curLabelName="curLabelName"
        :validrule="validrule"
      >
      </validateFormate>
    </el-col>
  </section>
</template>
<script>
import { veApis } from "@/api/graphQLApiList/ve";
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
export default {
  name: "PurcashType",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },
  data() {
    return {
      placeholder: this.$t("sys.tips.esTip0"),
      curLabelName:
        this.labelName === ""
          ? this.$suit.globalLabel.CAPITAL_TYPE
          : this.labelName,
      // API配置对象
      apiConfig: veApis.veDbOrgPurcashTypeQueryFindAll,
      // 表格中台返回网格的字段
      apiQueryRow: [
        "purcashTypeId",
        "purcashTypeName",
        "cancelDay",
        "orderNo",
        // "carOurPriortiy",
        "isOnlineStatus",
        "isBatchStatus",
        "isEnable"
      ],
      curOptionDatas: [],
          // 下拉查询条件
      listQuery: {
        isEnable: "1",
        carBrandCode: this.$store.getters.orgInfo.BRAND_CODE
      }
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
