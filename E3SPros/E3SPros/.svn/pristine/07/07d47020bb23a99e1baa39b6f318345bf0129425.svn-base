<template>
  <section class="carType">
    <el-dialog
      title="从缺件生成订单"
      :visible.sync="missPaVisible"
      width="900px"
      center
      :close-on-click-modal="false"
      :append-to-body="true"
      @close="sendCode"
    >
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <lableName curLabelName="紧急类型" :isShowLabel="true" :isRequire="false"></lableName>
            <el-select
              collapse-tags
              filterable
              v-model="listQuery.urgentLevel"
              placeholder="请选择"
              clearable
              size="small"
            >
              <el-option value="1">一般紧急</el-option>
              <el-option value="2">三包紧急</el-option>
            </el-select>
          </el-col>
          <el-col :span="8">
            <label>派工单号</label>
            <el-input v-model="listQuery.relateOrderCode" placeholder="请输入" size="small" />
          </el-col>
          <el-col :span="8">
            <label>VIN码</label>
            <el-input v-model="listQuery.vin" placeholder="请输入" size="small" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="8">
            <lableName curLabelName="客户名称" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.custName" placeholder="请选择" size="small" />
          </el-col>
          <el-col :span="8">
            <lableName curLabelName="车牌" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.carLicense" placeholder="请选择" size="small" />
          </el-col>
          <el-col :span="8">
            <lableName curLabelName="客户电话" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.cusTel" placeholder="请选择" size="small" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="8">
            <lableName curLabelName="备件号" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.partNo" placeholder="请选择" size="small" />
          </el-col>
          <el-col :span="8">
            <lableName curLabelName="备件名称" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.partName" placeholder="请选择" size="small" />
          </el-col>
          <el-col :span="8">
            <lableName curLabelName="备件品牌" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.partBrandCode" placeholder="请选择" size="small" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <!-- <el-col :span="8">
            <el-input v-model="listQuery.supplierCode" placeholder="请选择" size="small" />
          </el-col>-->
          <el-col :span="8">
            <lableName curLabelName="缺件审核时间" :isShowLabel="true" :isRequire="false"></lableName>
            <el-date-picker
              v-model="createdDate"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              size="small"
            ></el-date-picker>
          </el-col>
          <el-col :span="8">
            <label>收货人</label>
            <el-input
              suffix-icon="el-icon-search"
              placeholder="请选择"
              size="small"
              v-model="listQuery.receiver"
              @focus="showConsignee"
            />
          </el-col>
          <el-col :span="8">
            <lableName curLabelName="联系电话" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.linkTel" placeholder="请选择" size="small" />
          </el-col>
        </el-row>
        <el-row :gutter="26">
          <el-col :span="8">
            <lableName curLabelName="收货地址" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.receiptAddr" placeholder="请选择" size="small" />
          </el-col>
          <el-col :span="16">
            <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
            <el-button size="small" @click="reset()">重置</el-button>
            <el-button size="small" @click="confirm()">选择</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <mix-table
        ref="tableList"
        :queryParams="queryParams"
        :dynamicTableCols="cols"
        :isShowSelect="true"
        :isPaging="true"
        :isDialog="true"
      />
      <consignee
        :consigneeVisible="consigneeVisible"
        @changeCode="getConsigneeCode"
        @selectConsignee="selectConsignee"
      ></consignee>
    </el-dialog>
  </section>
</template>
<script>
import { mdmOrgdlrQueryByPage } from "@/api/pa/paBuPurOrder";
import lableName from "@/components/lableName";
import mixTable from "@/components/basicComponent/mixTable";
import consignee from "@/views/pa/storepurchaseorder/creatOrder/consignee.vue";
import { seApis } from "@/api/graphQLApiList/se";
export default {
  components: {
    lableName,
    mixTable,
    consignee
  },
  props: {
    missPaVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      listLoading: true,
      codeInside: "",
      list: [],
      optionDatas: [],
      selectData: null,
      createdDate: [],
      listQuery: {
        urgentLevel: "", //紧急类型
        relateOrderCode: "", //派工单号
        vin: "", //VIN码
        custName: "", //客户名称
        carLicense: "", //车牌
        cusTel: "", //客户电话
        partNo: "", //备件号
        partName: "", //备件名称
        partBrandCode: "", //备件品牌
        createdDateBeg: "", //缺件审核开始时间
        createdDateEnd: "", //缺件审核结束时间
        receiver: "", //收货人
        linkTel: "", //联系电话
        receiptAddr: "" //收货地址
      },
      pageSize: "10",
      pageIndex: "1",
      consigneeVisible: false,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      cols: [
        {
          label: "可欠拨+",
          codeField: "isCanLack",
          width: 120
          /* comps: {
            type: "isEnable"
          } */
        },
        {
          label: "申请直送类型+",
          codeField: "applyDirDeliverType",
          width: 120,
          align: "center",
          isComponent: true,
          comps: {
            compKey: "propKey2",
            isMul: false,
            isShowLabel: false,
            lookuptype: "VE0016",
            codeField: "distributeMode",
            clickEvent: () => null,
            component: () => import("@/components/org/LookupValue")
          }
        },
        // { label: "派工单号", codeField: "assignWorkCode", width: 120 },
        // { label: "备件号", codeField: "partNo", width: 120 },
        // { label: "备件名称", codeField: "partName", width: 120 },

        { label: "派工单号", codeField: "carBrandCn", width: 120 },
        { label: "备件号", codeField: "carSeriesCn", width: 120 },
        { label: "备件名称", codeField: "carTypeCn", width: 120 },

        { label: "应订数", codeField: "mayOrderQty", width: 120 },
        { label: "单位", codeField: "unit", width: 120 },
        { label: "网点价", codeField: "dlrPrice", width: 120 },
        { label: "订货数", codeField: "purQty", width: 120 },
        { label: "订货金额", codeField: "purAmount", width: 120 },
        { label: "VIN码+", codeField: "vin", width: 120 },
        { label: "车牌号+", codeField: "carLicense", width: 120 },
        { label: "客户名称+", codeField: "custName", width: 120 },
        { label: "客户电话+", codeField: "custTel", width: 120 },
        { label: "发动机号+", codeField: "engineNo", width: 120 },
        { label: "18位码+", codeField: "column1", width: 120 },
        { label: "登记人", codeField: "register", width: 120 },
        { label: "库存数", codeField: "factQty", width: 120 },
        { label: "可用库存", codeField: "freeQty", width: 120 },
        { label: "在途数", codeField: "wayQty", width: 120 },
        { label: "有效欠拨数", codeField: "oweQty", width: 120 },
        { label: "业务类型", codeField: "businissTypeName", width: 120 },
        { label: "订货开关", codeField: "purchaseStateName", width: 120 },
        { label: "OEM库存状态", codeField: "stockStateName", width: 120 },
        { label: "备件状态", codeField: "partStateName", width: 120 },
        { label: "运输限制", codeField: "isSpecTran", width: 120 },
        { label: "大总成", codeField: "assemblyName", width: 120 },
        { label: "希望到货日", codeField: "hopeReceiveDate", width: 120 },
        { label: "预计到货日", codeField: "intendReceiveDate", width: 120 }
      ],
      queryParams: {
        APIUrl: seApis.seChooseCarTypeQueryFind.APIUrl,
        InputType: seApis.seChooseCarTypeQueryFind.InputType,
        ServiceCode: seApis.seChooseCarTypeQueryFind.ServiceCode,
        dataInfo: {
          carBrandCode: "",
          carSeriesCode: "",
          carTypeCode: ""
        },
        apiQueryRow: [
          "carBrandCn",
          "carBrandCode",
          "carSeriesCn",
          "carSeriesCode",
          "carTypeCn",
          "carTypeCode"
        ]
      }
    };
  },
  created() {
    // this.fetchData();
    this.listLoading = false;
  },
  watch: {
    missPaVisible(newValue, oldValue) {
      if (newValue) {
        //清空查询条件
        this.reset();
      }
      this.selectData = null;
      // this.fetchData();
      this.list = [];
    }
  },
  methods: {
    fetchData() {
      this.$refs.tableList.queryList();
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    sendCode() {
      this.$emit("changeCode", this.codeInside);
    },
    getorderCode(val) {
      this.listQuery.orderCode = val;
    },
    getregion(val) {
      this.listQuery.bigAreaId.push(val);
    },
    select(selection) {
      this.selectData = selection;
    },
    showConsignee() {
      this.consigneeVisible = true;
    },
    confirm() {
      this.selectData = this.$refs.tableList.currentRow;
      if (this.selectData == null || this.selectData.length == 0) {
        this.$message({
          message: "请选中一条经销商数据",
          type: "warning",
          duration: 2000
        });
      } else if (this.selectData.length > 1) {
        /* this.$alert("只能选择一条经销商数据！", "信息提示", {
          confirmButtonText: "确定",
          type: "warning",
          callback: action => {}
        }); */
        this.$message({
          message: "只能选择一条经销商数据",
          type: "warning",
          duration: 2000
        });
      } else {
        this.$emit("selectDealer", this.selectData);
      }
    },
    quit() {
      this.missPaVisible = false;
    },
    reset() {
      this.listQuery.supplierCode = undefined;
      this.listQuery.supplierName = undefined;
      this.listQuery.isBlockUp = false;
    },
    getConsigneeCode(val) {
      this.consigneeVisible = false;
    },
    selectConsignee(val) {
      // this.listQuery.dlrShortName = val[0].dlrShortName;
      this.dealerVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__wrapper .el-dialog {
  height: 610px;
}
</style>