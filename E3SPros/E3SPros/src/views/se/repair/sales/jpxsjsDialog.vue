<template>
  <el-dialog
    title="精品销售结算明细"
    :visible.sync="supplierDialogVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog"
  >
    <div class="filter-container filter-params">
      <el-form
        :model="listSave"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        :inline-message="true"
      >
        <div class="filter-container filter-title">收款信息</div>
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="销售单号" prop="acceOrderCode">
              <el-input size="small" v-model="listSave.acceOrderCode" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="车牌号" prop="carLicense">
              <el-input size="small" v-model="listSave.carLicense" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="应收金额" prop="gatheringAmount">
              <el-input size="small" v-model="listSave.gatheringAmount" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="实收金额" prop="factReceivedAmount">
              <el-input size="small" v-model="listSave.factReceivedAmount"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="开票金额" prop="billAmount">
              <el-input size="small" v-model="listSave.billAmount"></el-input>
            </el-form-item>
          </el-col>
          <LookupValue
            :span="8"
            :isMul="false"
            :isshow="true"
            :code="listSave.payType"
            labelName="付款方式"
            lookuptype="FI0001"
            @changeCode="getfkfs"
          />
          <el-col :span="8">
            <el-form-item label="发票号" prop="billNo">
              <el-input size="small" v-model="listSave.billNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="本次收款总额" prop="factReceivedAmount">
              <el-input size="small" v-model="listSave.factReceivedAmount" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="折扣原因" prop="discountReason">
              <el-input size="small" v-model="listSave.discountReason"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div class="filter-container filter-title">精品明细</div>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect="false"
        :isPaging="false"
        :isDialog="true"
        :listData="listData"
      />
      <div class="filter-container filter-button" ref="searcheHeight">
        <el-button
          type="primary"
          :style="{ display: visibleLine }"
          size="small"
          @click="showSave('ruleForm')"
        >结算</el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import LookupValue from "@/components/org/LookupValue";
import {
  doQueryList,
  doSave,
  doQueryListDetail
} from "@/api/se/repair/sales/jpxsjs";
import { seApis } from "@/api/graphQLApiList/se";
import { format } from "path";
export default {
  components: {
    mixTable,
    LookupValue
  },
  props: {
    supplierDialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    rowData: {
      type: Array,
      default: () => []
    },
    listData: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    supplierDialogVisible(newValue, oldValue) {
      if (newValue) {
        this.listSave.acceOrderCode = this.rowData[0].acceOrderCode;
        this.listSave.carLicense = this.rowData[0].carLicense;
        this.listSave.gatheringAmount = this.rowData[0].gatheringAmount;
        this.listSave.factReceivedAmount = this.rowData[0].factReceivedAmount;
        this.listSave.payType = this.rowData[0].payType;
        this.listSave.billNo = this.rowData[0].billNo;
        this.listSave.billAmount = this.rowData[0].billAmount;
        if (this.rowData[0].acceOrderStateName == "已结算") {
          this.visibleLine = "none";
        } else {
          this.visibleLine = "";
        }

        // this.$refs.tableList.queryList();
      }
    }
  },
  data() {
    // 发票号
    var validatePass = (rule, value, callback) => {
      if (/^(\b[0-9a-z]{8,50}\b[^0-9a-z]?)+$/.test(value) == false) {
        callback(new Error("请输入8-50位发票号，只能输入大小写字母和数字"));
      } else {
        callback();
      }
    };
    //实收金额(只能输入数字，且不能大于应收金额)
    var validateSsje = (rule, value, callback) => {
      if (/^[1-9]\d*$/.test(value) == false) {
        callback(new Error("请输入正确的金额数"));
      } else {
        callback();
      }
    };
    //开票金额(只能输入数字，且不能大于实收金额)
    var validateJspjje = (rule, value, callback) => {
      if (/^[1-9]\d*$/.test(value) == false) {
        callback(new Error("请输入正确的金额数"));
      } else {
        callback();
      }
    };
    return {
      visibleLine: "", //显示
      rules: {
        factReceivedAmount: [
          { required: true, message: "请输入金额", trigger: "blur" },
          { validator: validateSsje, trigger: "blur" }
        ],
        billAmount: [
          { required: true, message: "请输入金额", trigger: "blur" },
          { validator: validateJspjje, trigger: "blur" }
        ],
        billNo: [
          { required: true, message: "请输入发票号", trigger: "blur" },
          { validator: validatePass, trigger: "blur" }
        ]
      },
      listSave: {
        factReceivedAmount: "",
        billNo: "",
        billAmount: "",
        payType: "1",
        gatheringAmount: "",
        discountReason: "",
        
      },
      detailList: {

      },
      cols: [
        { label: "备件编码", codeField: "partNo" },
        { label: "备件名称", codeField: "partName" },
        { label: "单价", codeField: "partPrice" },
        { label: "出库数量", codeField: "outQty" },
        { label: "退货数量", codeField: "returnQty" },
        { label: "备件费用", codeField: "partAmount" },
        { label: "折扣率", codeField: "partDiscount" },
        { label: "预估费用", codeField: "preAmount" }
      ],
      queryParams: {
        APIUrl: seApis.seBuAccePartQueryFindAll.APIUrl,
        InputType: seApis.seBuAccePartQueryFindAll.InputType,
        ServiceCode: seApis.seBuAccePartQueryFindAll.ServiceCode,
        dataInfo: {
          acceOrderId: "" //精品销售单id
        },
        apiQueryRow: [
          "partNo", //备件编码
          "partName", //备件名称
          "partPrice", //单价
          "outQty", //出库数量
          "returnQty", //退货数量
          "partAmount", //备件费用
          "partDiscount", //折扣率
          "preAmount" //预估费用
        ]
      }
    };
  },
  methods: {
    closeDialog() {
      this.$emit("close", false);
    },
    //获取付款方式
    getfkfs(val) {
      this.listSave.payType = val;
    },
    //提示保存
    showSave(formName) {
      if (parseInt(this.listSave.factReceivedAmount) > parseInt(this.listSave.gatheringAmount)) {
        this.$alert("实收金额不能大于应收金额", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      } else if (
        parseInt(this.listSave.billAmount) > parseInt(this.listSave.factReceivedAmount)
      ) {
        this.$alert("开票金额不能大于实收金额", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      } else if (parseInt(this.listSave.factReceivedAmount) < parseInt(this.listSave.gatheringAmount)) {
      
        if (this.listSave.discountReason == "" || this.listSave.discountReason == null) {
          {
            this.$alert("请输入折扣原因", "提示", {
              confirmButtonText: "确定",
              type: "warning"
            });
          }
        } else {
          this.save(formName);
        }
      } else {
        this.save(formName);
      }
    },
    //保存
    save(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.detailList = this.$refs.tableList.tableData;
          doSave(this.listSave,this.detailList).then(response => {
            debugger;
            if (response.data[seApis.fiBuGatheringOrderMutationSave.ServiceCode].result === "1") {
              this.$message({
                message: "结算成功",
                type: "success"
              });
              this.$refs.tableList.queryList();
            } else {
              this.$message({
                message:
                  "结算失败：" + response.data[seApis.fiBuGatheringOrderMutationSave.ServiceCode].msg,
                type: "warn",
                uration: 2000
              });
              this.$refs.tableList.queryList();
            }
            // this.supplierDialogVisible = false;
            // this.listLoading = false;
            this.$emit("close");
          });
        } else {
          //数据校验不通过
          return false;
        }
      });
    }
  }
};
</script>