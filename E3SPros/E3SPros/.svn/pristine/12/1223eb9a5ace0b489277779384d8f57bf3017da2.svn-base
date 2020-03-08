<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click.native="fetchData(1)">查询</el-button>
      <el-button size="small" @click.native="newData()">新增</el-button>
      <el-button size="small" @click.native="modifyData()">修改</el-button>
      <el-button size="small" @click.native="resetData()">重置</el-button>
    </div>

    <!--************************************ 查询区 *********************************  -->
    <!-- <div class="filter-container filter-title" ref="conTitleHeight">查询区</div> -->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="6">
          <label>流动类别编号</label>
          <el-input v-model="flowQueryParams.dataInfo.mobileClassNumber" clearable size="small"></el-input>
        </el-col>
        <el-col :span="6">
          <label>流动类别名称</label>
          <el-input v-model="flowQueryParams.dataInfo.mobileClassName" clearable size="small"></el-input>
        </el-col>
        <LookupValue
          :span="6"
          :isMul="true"
          :isShowLabel="true"
          :code="flowQueryParams.dataInfo.orderMode"
          labelName="订货方式"
          @changeCode="getLookupValueBrand"
        />
        <LookupValue
          :span="6"
          :isMul="true"
          :isShowLabel="true"
          :code="flowQueryParams.dataInfo.available"
          labelName="状态"
          @changeCode="getLookupValueBrand"
        />
      </el-row>
    </div>
    <!--*****************************************查询结果************************************-->
    <!--网格数据查询参数、动态网格列-->
    <mix-table
      ref="flowListTable"
      :queryParams="flowQueryParams"
      :dynamicTableCols="flowCols"
      :isPaging="true"
    />
    <flowDialog ref="flowDialog" 
                :flowDialogVisible="flowDialogVisible"
                :editData="gridData"
                @close1="flowDialogClose" />
  </div>
</template>

<script>
import { the_Height } from "@/components/se/seMixins/makeHeight";
import {
  doQueryList4,
  doQueryList3,
  doQueryList8
} from "@/api/pa/orderAuditItem/orderAuditItem";
import { paApis } from "@/api/graphQLApiList/pa";
import { orgApis } from "@/api/graphQLApiList/org";
import LookupValue from "@/components/org/LookupValue/index";
import lableName from "@/components/lableName";
import mixTable from "@/components/basicComponent/mixTable";
import flowDialog from "./flowCategoryDialog"

export default {
  mixins: [the_Height],
  components: {
    LookupValue,
    lableName,
    mixTable,
    flowDialog
  },

  data() {
    return {
      flowDialogVisible: false,
      flowCols: [
        { label: "流动类别编号", codeField: "mobileClassNumber" },
        { label: "流动类别名称", codeField: "mobileClassName" },
        { label: "标准值上限", codeField: "upperStandardValue" },
        { label: "标准值下限", codeField: "lowerStandardValue" },
        { label: "系数", codeField: "coefficient" },
        { label: "订货方式", codeField: "orderModeName" },
        { label: "每月采购次数", codeField: "monthlyPurchaseFrequency" },
        { label: "可用状态", codeField: "availableName" },
        { label: "系统数据", codeField: "systemData" },
        { label: "备注", codeField: "remark" }
      ],
      flowQueryParams: {
        APIUrl: paApis.flowQueryList.APIUrl,
        InputType: paApis.flowQueryList.InputType,
        ServiceCode: paApis.flowQueryList.ServiceCode,
        dataInfo: {
          mobileClassNumber: "",
          mobileClassName: "",
          orderMode: "",
          available: ""
        },
        apiQueryRow: [
          "mobileClassId",
          "mobileClassNumber",
          "mobileClassName",
          "upperStandardValue",
          "lowerStandardValue",
          "coefficient",
          "orderModercode",
          "orderModeName",
          "monthlyPurchaseFrequency",
          "availablecode",
          "availableName",
          "systemData",
          "remark",
          "updateControlId"
        ]
      }
    };
  },

  created() {},
  methods: {
      newData(){
        this.flowDialogVisible = true;
      },
      modifyData(){
        if(this.$refs.flowListTable.currentRow.length==0){  // 获取某行数据
            this.$alert("请选择一行进行修改！", "信息提示", {
                confirmButtonText: "确定",
                type: "warning",
                callback: action => {}
        });
        }else{
           this.flowDialogVisible = true;
           this.$refs.flowDialog.setEditData(this.$refs.flowListTable.currentRow);
        }
      }
  }
};
</script>
