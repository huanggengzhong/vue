<!--
* description: 服务代表下拉框（多选，单选）,支持搜索
* author: ydche
* createdDate: 2019-08-7
-->
<template>
  <section>
    <el-col :span="span">
      <label v-if="isShowLabel">
        <span v-if="isRequire" class="iconRequired"></span>
        {{curLabelName | ellipsis}}
      </label>
      <div class="ellipsisshowName" v-show="ellipsisshow">
        <span></span>
        {{curLabelName}}
      </div>
      <el-select
        :multiple="isMul"
        collapse-tags
        filterable
        v-model="modelCode"
        placeholder="请选择"
        clearable
        @change="sendCode"
        size="small"
      >
        <el-option
          v-for="item in optionDatas"
          :key="item.empId"
          :label="item.empName"
          :value="item.empId"
        >{{item.empName}}</el-option>
      </el-select>
    </el-col>
  </section>
</template>
<script>
import { dropdownMixins } from "@/components/mixins/dropdownMixins";
import { seApis } from "@/api/graphQLApiList/se";

export default {
  name: "CarState",
  // 组件混入对象：{props[span,isShowLabel,code,isMul,labelName] data[modelCode,optionDatas,listQuery] methods[queryTable,sendCode]}
  mixins: [dropdownMixins],
  props: {
    initData: {
      type: Object,
      default: {
        isEnable: "",
        positionCode: "",
        deptId: "",
        stationId: ""
      }
    },
    // 获取组件中的名称，如：textField="carBrandCode"
    codeField: { type: String, default: "empId" },
    // 获取组件中的名称，如：textField="carBrandName"
    textField: { type: String, default: "empName" }
  },
  data() {
    return {
      curLabelName: this.labelName === "" ? "服务代表" : this.labelName,
      // API配置对象
      apiConfig: seApis.seCommonQueryServiceSa,
      // 表格中台返回网格的字段
      apiQueryRow: ["empId", "empName"]
    };
  },
  created() {
    // 初始化数据
    this.listQuery.isEnable = this.initData.isEnable || "";
    this.listQuery.positionCode = this.initData.positionCode || "";
    this.listQuery.deptId = this.initData.deptId || "";
    this.listQuery.stationId = this.initData.stationId || "";
    if (
      this.apiConfig !== null &&
      this.apiQueryRow.length > 0 &&
      this.optionDatas.length === 0
    ) {
      this.queryTable(this.apiConfig, this.apiQueryRow);
    }
  },
  methods: {
    reset() {
      this.modelCode = "";
    }
    // initData(obj){
    // 	console.log(obj)
    // 	this.listQuery.isEnable = obj.isEnable||""
    // 	this.listQuery.positionCode = obj.positionCode||""
    // 	this.listQuery.deptId = obj.deptId||""
    // 	this.listQuery.stationId = obj.stationId||""
    // 	this.queryTable(this.apiConfig, this.apiQueryRow)
    // },
  }
};
</script>
