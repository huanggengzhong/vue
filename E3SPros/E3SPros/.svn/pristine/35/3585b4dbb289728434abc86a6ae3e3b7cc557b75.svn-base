<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="QueryList(1)">查询</el-button>
      <el-button size="small" @click="selectData">反结算</el-button>
      <el-button size="small" @click="getExcel()">导出</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <carBrand
              :span="6"
              :isMul="true"
              :code="listQuery.dataInfo.carBrandCode"
              @changeCode="getBrandCode"
            ></carBrand>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.dataInfo.dateType"
              :lookuptype="lookuptype.dateType"
              :labelName="lookupValuelable.dateType"
              @changeCode="getDateType"
            />
            <el-col :span="6">
              <label class="demonstration">查询日期</label>
              <el-date-picker
                v-model="balanceDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                size="small"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>派工单号</label>
              <el-input
                size="small"
                v-model="listQuery.dataInfo.repairOrderCode"
                placeholder="请输入"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button :icon="toggleParamIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
          <el-row>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input size="small" v-model="listQuery.dataInfo.carLicense" placeholder="请输入" />
            </el-col>
            <el-col :span="6">
              <label>报修人</label>
              <el-input size="small" v-model="listQuery.dataInfo.repairMan" placeholder="请输入" />
            </el-col>
            <el-col :span="6">
              <label>报修电话</label>
              <el-input size="small" v-model="listQuery.dataInfo.repairTel" placeholder="请输入" />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      ref="multipleTable"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
      :height="tableHeight"
      @row-click="chooseRow"
      @row-dblclick="makeBalance"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="估价单号" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairOrderCode }}</template>
      </el-table-column>
      <el-table-column label="车牌号" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="VIN码" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="报修人" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairMan }}</template>
      </el-table-column>
      <el-table-column label="报修人电话" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairTel }}</template>
      </el-table-column>
      <el-table-column label="报修时间" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.repairTime }}</template>
      </el-table-column>
      <el-table-column label="结算时间" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.balanceDate }}</template>
      </el-table-column>
      <el-table-column label="服务顾问名称" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.saName }}</template>
      </el-table-column>
      <el-table-column label="结算单号" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.balanceOrderCode }}</template>
      </el-table-column>
      <el-table-column label="工时应收费" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.wiAmount }}</template>
      </el-table-column>
      <el-table-column label="备件应收费" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.partAmount }}</template>
      </el-table-column>
      <el-table-column label="其他应收费" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.otherAmount }}</template>
      </el-table-column>
      <el-table-column label="应收总费" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.totalAmount }}</template>
      </el-table-column>
      <el-table-column label="反结算人员" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.cancelEmpName }}</template>
      </el-table-column>
      <el-table-column label="反结算时间" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.cancelDate }}</template>
      </el-table-column>
      <el-table-column label="反结算原因" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.cancelReason }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?pageTotal:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <div>
      <el-dialog
        title="反结算"
        :append-to-body="true"
        :visible.sync="dialogFormVisible"
        center
        width="30%"
        style="height:450px;"
      >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
          <el-form-item label="反结算原因" prop="reason">
            <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="ruleForm.reason"></el-input>
          </el-form-item>
          <el-form-item label="反结算责任人" prop="person">
            <el-input v-model="ruleForm.person"></el-input>
          </el-form-item>
          <el-form-item label="应退金额" prop="price">
            <el-input v-model="ruleForm.price"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelData">取 消</el-button>
          <el-button type="primary" @click="saveData('ruleForm')">反结算</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import LookupValue from "@/components/org/LookupValue/index";
import { apiRepairBalanceApply, apiSeBalance } from "@/api/graphQLApiList/se";
import {
  doQueryList,
  doSave
} from "@/api/se/basedata/repair/seBuAntiRepairBalance";
import carBrand from "@/components/org/carBrand/carBrand";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  components: {
    LookupValue,
    carBrand
  },
  data() {
    return {
      ruleForm: {
        reason: "",
        person: "",
        price: 0
      },
      rules: {
        reason: [
          { required: true, message: "请填写反结算原因", trigger: "blur" }
        ],
        person: [
          { required: true, message: "请输入责任人", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        price: [{ type: "number", message: "必须为数字值", trigger: "blur" }]
      },
      currentRow: "",
      toggleParamIcon: "el-icon-minus",
      toggleParam: false,
      dialogFormVisible: false,
      listLoading: false,
      pic: true,
      isMul: false,
      isShowLabel: true,
      list: null,
      balanceDate: [],
      lookupValuelable: {
        dateType: "日期类型"
      },
      lookuptype: {
        dateType: "SE0190"
      },
      listQuery: {
        pageSize: 10,
        pageIndex: 1,
        dataInfo: {
          dateType: "", //日期类型
          dlrId: "202", //经销商编号
          repairOrderCode: "", //派工单号
          repairMan: "", //报修人
          repairTel: "", //报修人电话
          carLicense: "", //车牌号
          repairTimeBeg: "", //开始日期
          repairTimeEnd: "", //结束日期
          carBrandCode: "", //车辆品牌编号
          queryType: "4000404", //查询场景
          isAccurate: "0" //是否精确查询：1-精确查询  0-模糊查询
        }
      },
      listQuery2: {
        dataInfo: {
          dlrId: this.$store.getters.orgInfo.DLR_ID,
          dlrCode: this.$store.getters.orgInfo.DLR_CODE,
          cancelReason: "",
          repairOrderId: "",
          updateControlId: "",
          repairGatheringId: ""
        }
      }
    };
  },
  created() {
    //this.QueryList(1);
  },
  mounted() {
    this.listQuery.dataInfo.carBrandCode == "";
  },
  methods: {
    //获取品牌值
    getBrandCode(val) {
      this.listQuery.dataInfo.carBrandCode = val;
    },
    QueryList(page, dataType) {
      this.listLoading = true;
      this.listQuery.dataInfo.repairTimeBeg = this.balanceDate[0];
      this.listQuery.dataInfo.repairTimeEnd = this.balanceDate[1];
      const that = this;

      var pageSize = dataType == "excel" ? 99999 : this.pageSize;
      var tableColumns =
        this.$refs.multipleTable == null
          ? null
          : this.$refs.multipleTable.columns;

      doQueryList(
        that.listQuery.pageSize,
        page || that.listQuery.pageIndex,
        that.listQuery.dataInfo,
        "反结算列表导出",
        "反结算列表",
        tableColumns
      ).then(response => {
        if (dataType == "excel") {
          this.$utils.downloadFile(response, "反结算查询导出.xlsx");
          this.listLoading = false;
        } else if (response.data.seBuRepairBalanceQueryMain.result === "1") {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              apiSeBalance.seBuRepairBalanceQueryMain.ServiceCode
            ].records;
          that.list =
            response.data[
              apiSeBalance.seBuRepairBalanceQueryMain.ServiceCode
            ].rows;
          that.listLoading = false;
        } else {
          let msg =
            response.data[apiSeBalance.seBuRepairBalanceQueryMain.ServiceCode]
              .msg;
          this.$message.error(msg);
          that.list = [];
          that.listLoading = false;
        }
      });
    },
    getExcel() {
      this.QueryList(1, "excel");
    },
    getDateType(val) {
      this.listQuery.dataInfo.dateType = val;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (!this.toggleParam) {
        this.toggleParamIcon = "el-icon-minus";
      } else {
        this.toggleParamIcon = "el-icon-plus";
      }
    },
    reset() {
      (this.listQuery.dataInfo.carBrandCode = ""),
        (this.balanceDate = []),
        (this.listQuery.dataInfo.repairTimeBeg = ""),
        (this.listQuery.dataInfo.repairTimeEnd = ""),
        (this.listQuery.dataInfo.carLicense = ""),
        (this.listQuery.dataInfo.repairMan = ""),
        (this.listQuery.dataInfo.repairTel = ""),
        (this.listQuery.dataInfo.dateType = "");
      this.listQuery.dataInfo.repairOrderCode = "";
    },
    getBalanceDate(val) {
      this.listQuery.dataInfo.balanceDateBegin = val[0];
      this.listQuery.dataInfo.balanceDateEnd = val[1];
    },
    chooseRow(val) {
      this.currentRow = val;
    },
    makeBalance(val) {
      this.currentRow = val;
      this.selectData();
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.QueryList();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.QueryList();
    },
    selectData() {
      if (this.currentRow == "") {
        this.$alert("请选择一行数据", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        this.dialogFormVisible = true;
        this.ruleForm.person = this.currentRow.cancelEmpName;
        this.ruleForm.price = parseInt(this.currentRow.totalAmount);
      }
    },
    saveData(formName) {
      this.listQuery2.dataInfo.repairOrderId = this.currentRow.repairOrderId;
      this.listQuery2.dataInfo.updateControlId = this.currentRow.updateControlId;
      this.listQuery2.dataInfo.repairGatheringId = this.currentRow.repairGatheringId;
      this.listQuery2.dataInfo.cancelReason = this.ruleForm.reason;
      this.$confirm("是否确认反结算, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$refs[formName].validate(valid => {
            if (valid) {
              doSave(this.listQuery2.dataInfo).then(response => {
                this.listLoading = false;
                if (
                  response.data[
                    apiRepairBalanceApply.fiBuRepairGatheringMutationAntiSave
                      .ServiceCode
                  ].result === "1" &&
                  response.data[
                    apiRepairBalanceApply.fiBuRepairGatheringMutationAntiSave
                      .ServiceCode
                  ].rows != ""
                ) {
                  this.dialogFormVisible = false;
                  this.$message({
                    message: "保存成功",
                    type: "success"
                  });
                  this.ruleForm.reason = "";
                  this.QueryList(1);
                }
              });
            } else {
              console.log("error submit!!");
              return false;
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消反结算"
          });
        });
    },
    cancelData() {
      this.dialogFormVisible = false;
      this.ruleForm.reason = "";
    }
  }
};
</script>

