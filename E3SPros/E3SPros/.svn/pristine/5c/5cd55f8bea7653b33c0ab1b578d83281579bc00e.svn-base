<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="textQuery(1)">查询</el-button>
      <el-button size="small">导出</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>经销商</label>
              <el-input
                v-model="listQuery.dlrShortName"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
                @focus="getDlrName"
              />
            </el-col>
            <seCommonQueryChooseDlr
              ref="seCommonQueryChooseDlr"
              :isMul="isMul"
              :seComQueChoDlrVisible="seComQueChoDlrVisible"
              @sentCode="getComQueCho"
              @close="closeComQueCho"
            />
            <el-col :span="6">
              <label>订单号</label>
              <el-input
                v-model="listQuery.purOrderCode"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>备件号</label>
              <el-input
                v-model="listQuery.partNo"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>备件名称</label>
              <el-input
                v-model="listQuery.partName"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:2001">
          <el-row>
            <el-col :span="6">
              <label>订货日期</label>
              <el-date-picker v-model="listQuery.beginPurDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker v-model="listQuery.endPurDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-col>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="orderStatus"
              :lookuptype="lookuptype.orderStatus"
              :labelName="lookupValuelable.orderStatus"
              @changeCode="getOrderStatus"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="receiptsBrand"
              :lookuptype="lookuptype.receiptsBrand"
              :labelName="lookupValuelable.receiptsBrand"
              @changeCode="getReceiptsBrand"
            />

            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="purOrderType"
              :lookuptype="lookuptype.orderType"
              :labelName="lookupValuelable.orderType"
              @changeCode="orderType"
            />
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title">订单主表</div>
    <el-table
      v-loading="listLoading"
      height="170"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
    >
      <el-table-column label="序号" width="60" type="index" align="center" fixed></el-table-column>
      <el-table-column prop="dlrCode" label="经销商编码" width="100" align="center" fixed></el-table-column>
      <el-table-column prop="dlrShortName" label="经销商名称" width="130" align="center" fixed></el-table-column>
      <el-table-column prop="purOrderCode" label="订单号" width="150" align="center" fixed>
        <template slot-scope="scope">
          <el-button type="text" @click="getOrderDetails(scope)">{{scope.row.purOrderCode}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="purOrderType" label="订单类型" align="center" width="120"></el-table-column>
      <el-table-column prop="purDate" label="订货日期" width="150" align="center"></el-table-column>
      <el-table-column prop="purAmount" label="订货金额" width="120" align="center"></el-table-column>
      <el-table-column prop="orderVariety" label="订货品种" width="120" align="center"></el-table-column>
      <el-table-column prop="orderStatus" label="订单状态" width="120" align="center"></el-table-column>
      <el-table-column prop="transportTypeCode" label="运输方式" width="120" align="center"></el-table-column>
      <el-table-column prop="createdName" label="创建人" width="120" align="center"></el-table-column>
      <el-table-column prop="createdDate" label="创建时间" width="150" align="center"></el-table-column>
      <el-table-column prop="orderSource" label="订单来源" width="120" align="center"></el-table-column>
      <el-table-column prop="oemAuditDate" label="主机厂审核日期" width="150"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?pageTotal:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <div class="filter-container filter-title">订单明细</div>
    <el-table
      height="165"
      :data="bottomList"
      element-loading-text="Loading"
      border
      fit
      stripe
    >
      <el-table-column label="序号" width="60" type="index" align="center" fixed></el-table-column>
      <el-table-column prop="partBrandCode" label="备件品牌" width="100" align="center" fixed></el-table-column>
      <el-table-column prop="partNo" label="备件号" width="160" align="center" fixed></el-table-column>
      <el-table-column prop="partName" label="备件名称" width="150" align="center"></el-table-column>
      <el-table-column prop="purPackQty" label="SNP" align="center" width="80"></el-table-column>
      <el-table-column prop="purQty" label="订货数" width="80" align="center"></el-table-column>
      <el-table-column prop="purPrice" label="单价" width="120" align="center"></el-table-column>
      <el-table-column prop="unit" label="单位" width="120" align="center"></el-table-column>
      <el-table-column prop="purAmount" label="总额" width="120" align="center"></el-table-column>
      <el-table-column prop="oemAuditor" label="有效欠拨数" width="120" align="center"></el-table-column>
      <el-table-column prop="auditDate" label="无效欠拨数" width="120" align="center"></el-table-column>
      <el-table-column prop="modelName" label="欠拨金额" width="120" align="center"></el-table-column>
      <el-table-column prop="modelName" label="派工订单" width="120" align="center"></el-table-column>
      <el-table-column prop="vin" label="VIN码" width="170" align="center"></el-table-column>
      <el-table-column prop="remark" label="维修缺件数量" width="120" align="center"></el-table-column>
      <el-table-column prop="remark" label="维修缺件金额" width="120" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import SingleDatePicker from "@/components/pa/singleDateSelect";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue";
import seCommonQueryChooseDlr from "@/components/se/seCommonQueryChooseDlr";

export default {
  components: {
    SingleDatePicker,
    LookupValue,
    seCommonQueryChooseDlr
  },

  data() {
    return {
      pageTotal: 0,
      isMul: false,
      isShowLabel: true,
      lookupValuelable: {
        orderStatus: "订单状态",
        orderType: "订单类型",
        receiptsBrand: "单据品牌"
      },
      lookuptype: {
        orderStatus: "PA0036",
        receiptsBrand: "PA0016",
        orderType: "PA0025"
      },
      seComQueChoDlrVisible: false,
      list: null,
      bottomList: null,
      listLoading: true,
      submitSelectData: null,
      cleanData: false,
      toggleParam: false,

      pageIndex: 1,
      pageSize: 10,
      limit: 20,
      purOrderType: "", //订单类型
      orderStatus: "", //订单状态
      receiptsBrand: "", //单据品牌
      listQuery: {
        dlrShortName: "", //经销商名称
        purOrderCode: "", //订单号
        partNo: "", //备件号
        partName: "", //备件名称
        beginPurDate: "", //订单开始时间
        endPurDate: "" //至
      },
      buttomListQuery: {
        purOrderCode: ""
      }
    };
  },
  created() {
    this.textQuery();
  },
  methods: {
    getDlrName() {
      this.seComQueChoDlrVisible = true;
    },
    getOrderDetails(scope) {
      this.buttomListQuery.purOrderCode = scope.row.purOrderCode;
      this.bottomTextQuery();
    },
    //获取经销商名称
    getComQueCho(val) {
      this.listQuery.dlrShortName = val.dlrShortName;
      this.seComQueChoDlrVisible = false;
    },
    //点击弹框右上角关闭弹窗，不传递数据
    closeComQueCho(val) {
      this.seComQueChoDlrVisible = val;
    },
    orderType(val) {
      this.listQuery.purOrderType = val;
      this.purOrderType = this.listQuery.purOrderType;
    },
    getReceiptsBrand(val) {
      this.listQuery.receiptsBrand = val;
      this.receiptsBrand = this.listQuery.receiptsBrand;
    },
    getOrderStatus(val) {
      this.listQuery.orderStatus = val;
      this.orderStatus = this.listQuery.orderStatus;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.textQuery();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQuery();
    },

    getChangeCode(val) {
      //日期
      this.listQuery.singleDate = val;
    },
    textQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.paBuPurOrderQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "purOrderCode",
              "purOrderType",
              "orderStatus",
              "purDate",
              "purAmount",
              "orderVariety",
              "transportTypeCode",
              "supplierId",
              "supplierShortName",
              "dlrId",
              "dlrCode",
              "dlrShortName",
              "dlrAuditor",
              "dlrAuditDate",
              "createdName",
              "createdDate",
              "orderSource",
              "oemAuditDate",
              "oemCode",
              "groupCode",
              "oemId",
              "groupId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.paBuPurOrderQueryFindAll.ServiceCode].result ===
            "1" &&
          response.data[paApis.paBuPurOrderQueryFindAll.ServiceCode].rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[paApis.paBuPurOrderQueryFindAll.ServiceCode].records;
          that.list =
            response.data[paApis.paBuPurOrderQueryFindAll.ServiceCode].rows;
        }
      });
    },
    bottomTextQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.paBuPurOrderDQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "partBrandCode",
              "partNo",
              "partName",
              "isCanLack",
              "purQty",
              "unit",
              "purPrice",
              "purAmount",
              "freeQty",
              "lackQty",
              "vin",
              "carLicense",
              "purPackQty",
              "oweQty",
              "validLackQty",
              "invalidOweQty",
              "assignWorkCode",
              "lackNum",
              "lackAmount",
              "oemCode",
              "groupCode",
              "oemId",
              "groupId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.buttomListQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.paBuPurOrderDQueryFindAll.ServiceCode].result ===
            "1" &&
          response.data[paApis.paBuPurOrderDQueryFindAll.ServiceCode].rows != ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[paApis.paBuPurOrderDQueryFindAll.ServiceCode].records;
          that.bottomList =
            response.data[paApis.paBuPurOrderDQueryFindAll.ServiceCode].rows;
        }
      });
    },

    reset() {
      this.purOrderType = ""; //订单类型
      this.orderStatus = ""; //订单状态
      this.receiptsBrand = ""; //单据品牌
      this.listQuery = {};
    },

    select(selection) {
      this.submitSelectData = selection;
    },

    //更多
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getLookupValue(val) {
      this.listQuery.orderType = val;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>