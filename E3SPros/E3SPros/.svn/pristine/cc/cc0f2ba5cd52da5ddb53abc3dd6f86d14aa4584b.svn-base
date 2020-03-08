<template>
  <el-dialog
    title="选择召回专案"
    :visible.sync="recallDialogVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog"
  >
    <div class="filter-container filter-params">
      <el-form
        :model="queryParams.dataInfo"
        :rules="rules"
        ref="recallForm"
        class="demo-ruleForm"
        :inline-message="true"
      >
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="召回专案编码" prop="recallCaseCode">
              <el-input v-model="queryParams.dataInfo.recallCaseCode" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="召回专案主题" prop="topic">
              <el-input v-model="queryParams.dataInfo.topic" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="召回专案类型" prop="recallCaseType">
              <el-select v-model="queryParams.dataInfo.recallCaseType" placeholder="请选择" @change="getRecallType" clearable>
                <el-option label="全部" value=""></el-option>
                <el-option label="专案" value="1"></el-option>
                <el-option label="召回" value="0"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="主凶件编码" prop="pfpCode">
              <el-input v-model="queryParams.dataInfo.pfpCode" size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="开始日期" prop="startOperDate">
              <el-date-picker
              v-model="queryParams.dataInfo.startOperDate"
              @change="changeBeginDate"
              type="date"
              :picker-options="beginPickerOptions"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="结束日期" prop="endOperDate">
              <el-date-picker
              v-model="queryParams.dataInfo.endOperDate"
              @change="changeEndDate"
              type="date"
              :picker-options="endPickerOptions"
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              placeholder="选择日期"
              ></el-date-picker>
            </el-form-item>
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
import { doSave, doDelete } from "@/api/se/basedata/repair/partSortDetail";
import { recallApi } from "@/api/graphQLApiList/se";
import { format } from "path";
export default {
  components: {
    mixTable
  },
  props: {
    recallDialogVisible: {
      type: Boolean,
      default: function() {
        return false;
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
      beginPickerOptions: {
        disabledDate: time => {
          let endDateVal = this.queryParams.dataInfo.endOperDate;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          }
        }
      },
      endPickerOptions: {
        disabledDate: time => {
          let beginDateVal = this.queryParams.dataInfo.startOperDate;
          if (beginDateVal) {
            return time.getTime() < new Date(beginDateVal).getTime();
          }
        }
      },
      ruleForm: {
        recallCaseCode: '',
        topic: '',
        recallCaseType: '',
        pfpCode: '',
        startOperDate: '',
        endOperDate: ''
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
      rules: {
        applyStartTime: [
          { required: true, message: "请设置时间", trigger: "change" }
        ]
      },
      cols: [
        { label: "车辆品牌", codeField: "carBrandCode", hidden: true},
        { label: "车辆品牌", codeField: "carBrandCn"},
        { label: "召回专案编码", codeField: "recallCaseCode" },
        { label: "主题", codeField: "topic" },
        { label: "主凶件编码", codeField: "pfpCode" },
        { label: "召回专案状态", codeField: "caseStatus" },
        { label: "召回专案类型", codeField: "recallCaseType" }
      ],
      queryParams: {
        APIUrl: recallApi.seDbRecallCaseQueryListForPage.APIUrl,
        InputType: recallApi.seDbRecallCaseQueryListForPage.InputType,
        ServiceCode: recallApi.seDbRecallCaseQueryListForPage.ServiceCode,
        dataInfo: {
          recallCaseCode: '',
          topic: '',
          recallCaseType: '',
          pfpCode: '',
          startOperDate: '',
          endOperDate: ''
        },
        apiQueryRow: [
          "carBrandCn",
          "carBrandCode",
          "recallCaseCode",
          "topic",
          "pfpCode",
          "caseStatus",
          "recallCaseType"
        ]
      }
    };
  },

  methods: {
    //查询
    fetchData() {
      this.$refs.tableList.queryList();
    },
    rowClick(val) {
      this.rowClickData = val;
    },
    //选择
    select() {
      if (this.rowClickData.length < 1) {
         this.$message({
            type: 'warning',
            message: '暂无数据选中！'
          });
          return;
      }
      console.log("click")
      this.$emit("changeCode", this.rowClickData);
    },
    //重置
    reset() {
      this.queryParams.dataInfo.recallCaseCdoe = '';
      this.queryParams.dataInfo.topic = '';
      this.queryParams.dataInfo.recallCaseType = '';
      this.queryParams.dataInfo.pfpCode = '';
      this.queryParams.dataInfo.startOperDate = '';
      this.queryParams.dataInfo.endOperDate = '';
    },
    closeDialog() {
      this.$emit("close", false);
    },
    getRecallType(val) {
      this.queryParams.dataInfo.recallCaseType = val;
    },
    changeBeginDate(val) {
      this.queryParams.dataInfo.startOperDate = val;
    },
    changeEndDate(val) {
      this.queryParams.dataInfo.endOperDate = val;
    },
  }
};
</script>