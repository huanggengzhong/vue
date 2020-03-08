<template>
  <el-dialog
    title="故障原因码-选择"
    :visible.sync="faultReasonCodeDialogVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog"
  >
    <div class="filter-container filter-params">
      <el-form
        :model="queryParams.dataInfo"
        ref="recallForm"
        class="demo-maintainParamChangesdata"
        :inline-message="true"
      >
        <el-row :gutter="26">
          <el-col :span="8">
            <label>故障部位</label>
            <el-select
              v-model="rowData.faultPartCode"
              placeholder="请选择"
              @change="getRecallStatu"
              clearable
            >
              <el-option label="全部" value=""></el-option>
              <el-option label="引擎机械" value="0"></el-option>
              <el-option label="废气排放控制" value="1"></el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <label>CT码</label>
            <el-input v-model="queryParams.dataInfo.csCtCode"></el-input>
          </el-col>
          <el-col :span="8">
            <label>说明</label>
            <el-input v-model="queryParams.dataInfo.csCtMark"></el-input>
          </el-col>
        </el-row>
        <el-form-item class="dialog-footer">
          <el-button type="primary" @click="fetchData">查询</el-button>
          <el-button @click="select">选择</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        @rowClick="rowClick"
        :isShowSelect="false"
        :isPaging="false"
        :isDialog="true"
      />
    </div>
  </el-dialog>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import { seApis } from "@/api/graphQLApiList/se";
import { requestGraphQL } from "@/api/commonRequest";
import { format } from "path";
export default {
  components: {
    mixTable
  },
  props: {

    faultReasonCodeDialogVisible: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    rowData: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      ruleForm: {
        recallCaseCode: "",
        topic: "",
        recallCaseType: "",
        pfpCode: "",
        startOperDate: "",
        endOperDate: ""
      },

      rowClickData: [],
      saveInfo: {
        applyStartTime: "",
        applyEndTime: "",
        salesNo: "",
        retreatNo: "",
        carBrandCode: "",
        carNo: "",
        VIN: "",
        applyNameNo: "",
        detailList: []
      },
      cols: [
        { label: "故障现象原因码", codeField: "csCtCode" },
        { label: "故障现象原因说明", codeField: "csCtMark" }
      ],
      queryParams: {
        APIUrl: seApis.seDbCsCtQueryFindAll.APIUrl,
        InputType: seApis.seDbCsCtQueryFindAll.InputType,
        ServiceCode: seApis.seDbCsCtQueryFindAll.ServiceCode,
        dataInfo: {
          carBrandCode: "",
          csCtType: "",
          csCtCode: "",
          csCtMark: "",
          faultPartCode: ""
        },
        apiQueryRow: [
          "csCtId",
          "carBrandCode",
          "csCtType",
          "csCtCode",
          "csCtMark"
        ]
      }
    };
  },
  methods: {
   
    //查询
    fetchData() {
      
      this.queryParams.dataInfo.faultPartCode = this.rowData.faultPartCode;
      this.queryParams.dataInfo.carBrandCode = this.rowData.carBrandCode;
      this.$refs.tableList.queryList();
    },
    rowClick(val) {
      this.rowClickData = val;
    },
    //选择
    select() {
      if (this.rowClickData.length < 1) {
        this.$message({
          type: "warning",
          message: "暂无数据选中！"
        });
        return;
      }
      this.$emit("changeCode", this.rowClickData);
      this.faultReasonCodeDialogVisible = false;
      this.$refs.tableList.tableData = "";
      this.rowClickData = '';
    },
    //重置
    reset() {
      this.queryParams.dataInfo.faultPartCode = "";
      this.queryParams.dataInfo.csCtCode = "";
      this.queryParams.dataInfo.csCtMark = "";
    },
    closeDialog() {
      this.$emit("close", false);
      this.rowClickData = '';
    },
    getRecallStatu(val) {
      this.queryParams.dataInfo.faultPartCode = val;
    }
  }
};
</script>