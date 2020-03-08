<template>
  <div>
    <div class="app-container app-container-table">
      <div class="filter-container filter-button" ref="searcheHeight">
        <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
        <el-button size="small" :disabled="isDisabled" @click="showDialog">结算信息</el-button>
        <el-button size="small" @click="reset">重置</el-button>
      </div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <carBrand
            :isMul="true"
            :span="6"
            :code="queryParams.dataInfo.carBrandCode"
            labelName="车辆品牌"
            :key="carBrandKey"
            ref="select_carBrandCode"
            @changeCode="getCarBrand"
          ></carBrand>
          <el-col :span="6">
            <label>销售单号</label>
            <el-input v-model="queryParams.dataInfo.acceOrderCode" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>客户名称</label>
            <el-input v-model="queryParams.dataInfo.custName" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>车牌号</label>
            <el-input v-model="queryParams.dataInfo.carLicense" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>结算日期</label>
            <el-date-picker
              v-model="jsDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              unlink-panels
              value-format="yyyy-MM-dd"
              format="yyyy-MM-dd"
              @change="getDate"
            ></el-date-picker>
          </el-col>
          <el-col :span="6">
            <label>客户电话</label>
            <el-input v-model="queryParams.dataInfo.linkManTel" placeholder="请输入" size="small"></el-input>
          </el-col>
        </el-row>
      </div>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect="false"
        :isPaging="true"
        :isDialog="false"
        @rowClick="getChangeCode"
      />
    </div>
    <el-dialog
      :title="showTitle"
      :visible.sync="dialogFormVisible"
      center
      :append-to-body="true"
      width="70%"
      :close-on-click-modal="false"
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
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="销售单号" prop="acceOrderCode">
                <el-input v-model=" listSave.acceOrderCode" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="收款单号" prop="gatheringOrdeCode">
                <el-input v-model=" listSave.gatheringOrdeCode" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="客户姓名" prop="custName">
                <el-input v-model=" listSave.custName" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="VIN码" prop="vin">
                <el-input v-model=" listSave.vin" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="应收金额" prop="gatheringAmount">
                <el-input v-model=" listSave.gatheringAmount" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="已收金额" prop="factReceivedAmount">
                <el-input v-model=" listSave.factReceivedAmount" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="使用厂家积分" prop="pvPoint">
                <el-input v-model=" listSave.pvPoint" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="使用卡金额" prop="cardAmount">
                <el-input v-model=" listSave.cardAmount" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="折扣金额" prop="discountAmount">
                <el-input v-model=" listSave.discountAmount" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="8">
              <el-form-item label="付款方式" prop="payType">
                <el-input v-model=" listSave.payType" size="small" disabled></el-input>
              </el-form-item>
            </el-col>-->
            <LookupValue
              :span="8"
              :isMul="false"
              :isshow="true"
              :code="listSave.payType"
              labelName="付款方式"
              lookuptype="FI0001"
              disabled
              @changeCode="getpayType"
            />
            <el-col :span="8">
              <el-form-item label="结算人" prop="balanceName">
                <el-input v-model=" listSave.balanceName" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="折扣原因" prop="discountReason">
                <el-input v-model=" listSave.discountReason" size="small" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="反结算原因" prop="paymentCancelReason">
                <el-input v-model=" listSave.paymentCancelReason" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item class="dialog-footer">
            <el-button type="primary" @click="showSave('ruleForm')">反结算</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import mixTable from "@/components/basicComponent/mixTable";
import LookupValue from "@/components/org/LookupValue";
import { seApis } from "@/api/graphQLApiList/se";
import config from "@/utils/config";
import { doSave } from "@/api/se/repair/sales/fiBuGatheringOrder";
import { format } from "path";

export default {
  components: {
    mixTable,
    carBrand,
    LookupValue
  },
  data() {
    return {
      detailList: [],
      isDisabled: true,
      displayDisabled: true,
      rowData: [],
      carBrandKey: "",
      rules: {
        paymentCancelReason: [
          {
            required: true,
            message: "请输入反结算原因",
            trigger: "change"
          }
        ]
      },
      jsDate: [],
      showTitle: "结算信息",
      listSave: {
        acceOrderCode: "",
        gatheringOrdeCode: "",
        custName: "",
        vin: "",
        gatheringAmount: "",
        factReceivedAmount: "",
        pvPoint: "",
        cardAmount: "",
        discountAmount: "",
        payType: "",
        balanceName: "",
        discountReason: "",
        paymentCancelReason: "",
        acceUpdateControlId: "",
        updateControlId: "",
        cancelBalanceState: ""
      },
      dialogFormVisible: false,
      cols: [
        { label: "车辆品牌", codeField: "carBrandCn" },
        { label: "销售单号", codeField: "acceOrderCode" },
        { label: "收款单号", codeField: "gatheringOrdeCode" },
        { label: "结算时间", codeField: "balanceDate" },
        { label: "客户姓名", codeField: "custName" },
        { label: "车牌号", codeField: "carLicense" },
        { label: "VIN码", codeField: "vin" },
        { label: "客户电话", codeField: "linkManTel" },
        { label: "结算人", codeField: "balanceName" }
      ],
      queryParams: {
        APIUrl: seApis.fiBuGatheringOrderQueryBalanceList.APIUrl,
        InputType: seApis.fiBuGatheringOrderQueryBalanceList.InputType,
        ServiceCode: seApis.fiBuGatheringOrderQueryBalanceList.ServiceCode,
        dataInfo: {
          dlrId: "", //经销商id
          balanceBegDate: "", //结算开始日期
          balanceEndDate: "", //结算结束日期
          acceOrderCode: "", //销售单号
          carLicense: "", //车牌号
          linkManTel: "", //客户电话
          custName: "", //客户名称
          carBrandCode: "", //车辆品牌
          vin: "" //VIN码
        },
        apiQueryRow: [
          "carBrandCode", //品牌编码
          "carBrandCn", //车辆品牌
          "gatheringOrdeCode", //收款单号
          "acceOrderCode", //销售单号
          "balanceDate", //结算时间
          "custName", //客户姓名
          "carLicense", //车牌号
          "vin", //VIN码
          "linkManTel", //客户电话
          "balanceName", //结算人
          "gatheringAmount", //应收金额
          "factReceivedAmount", //实收金额
          "pvPoint", //厂家积分
          "dlrPoint", //经销商积分
          "cardAmount", //卡余额
          "custCardNo", //会员卡号
          "discountAmount", //折扣金额
          "discountReason", //折扣原因
          "payType", //付款方式
          "acceOrderId", //精品销售单id
          "gatheringOrdeId", //精品收款单id
          "updateControlId", //并发id
          "oemCode", //厂商标识
          "groupCode", //集团标识
          "oemId", //厂商标识ID
          "groupId" //集团标识ID
        ]
      }
    };
  },
  mounted() {},
  created() {
    var now = new Date();
    let balanceBegDate = this.$utils.parseTime(now, "{y}-{m}-{d}");
    now.setMonth(now.getMonth() - 1);
    let balanceEndDate = this.$utils.parseTime(now, "{y}-{m}-{d}");
    this.jsDate = [];
    this.jsDate.push(balanceEndDate);
    this.jsDate.push(balanceBegDate);
  },
  methods: {
    //查询
    fetchData() {
      if (this.jsDate.length == 0) {
        this.queryParams.dataInfo.balanceBegDate = "";
        this.queryParams.dataInfo.balanceEndDate = "";
      } else {
        this.queryParams.dataInfo.balanceBegDate = this.jsDate[0];
        this.queryParams.dataInfo.balanceEndDate = this.jsDate[1];
      }
      this.$refs.tableList.queryList();
      this.isDisabled = true;
    },
    //提示反结算
    showSave(formName) {
      this.save(formName);
    },
    //反结算
    save(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let obj = {};
          obj.paymentCancelReason = this.listSave.paymentCancelReason;
          obj.acceOrderId = this.listSave.acceOrderId;
          obj.acceUpdateControlId = this.listSave.acceUpdateControlId;
          obj.gatheringOrdeId = this.listSave.gatheringOrdeId;
          obj.updateControlId = this.listSave.updateControlId;
          obj.cancelBalanceState = this.listSave.cancelBalanceState;
          doSave(obj).then(response => {
            if (
              response.data[
                seApis.fiBuGatheringOrderMutationCancelBalance.ServiceCode
              ].result === "1"
            ) {
              this.$message({
                message: "反结算成功",
                type: "success"
              });
              this.$refs.tableList.queryList();
            } else {
              this.$message({
                message:
                  "反结算失败：" +
                  response.data[
                    seApis.fiBuGatheringOrderMutationCancelBalance.ServiceCode
                  ].msg,
                type: "warn",
                uration: 2000
              });
              this.$refs.tableList.queryList();
            }
            this.dialogFormVisible = false;
            // this.listLoading = false;
          });
        } else {
          //数据校验不通过
          return false;
        }
      });
    },
    //重置
    reset() {
      this.jsDate = [];
      this.queryParams.dataInfo.balanceBegDate = "";
      this.queryParams.dataInfo.balanceEndDate = "";
      this.queryParams.dataInfo.acceOrderCode = "";
      this.queryParams.dataInfo.carLicense = "";
      this.queryParams.dataInfo.linkManTel = "";
      this.queryParams.dataInfo.custName = "";
      this.queryParams.dataInfo.carBrandCode = "";
    },
    //弹框关闭
    closeDialog() {
      this.dialogFormVisible = false;
    },
    //点击明细弹出弹框
    showDialog() {
      if (this.$refs.tableList.currentRow.length == 0) {
        this.$alert("请选中一行", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
        return;
      } else {
        this.dialogFormVisible = true;
      }

      // this.$refs.tableList2.queryList();
    },
    //查询区获取时间
    getDate(val) {
      this.queryParams.dataInfo.balanceBegDate = val[0];
      this.queryParams.dataInfo.balanceEndDate = val[1];
    },
    //获取付款方式
    getpayType(val) {
      this.listSave.payType = val;
    },
    //获取车辆品牌code
    getCarBrand(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    //获取点击行数据
    getChangeCode(row) {
      this.isDisabled = false;
      this.displayDisabled = false;
      this.rowData = row;
      this.listSave = this.rowData[0];
    }
  }
};
</script>