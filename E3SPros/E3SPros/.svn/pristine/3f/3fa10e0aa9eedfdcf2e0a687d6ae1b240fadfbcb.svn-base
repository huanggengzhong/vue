<!--专营店备件出库查询-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData(1)">查询</el-button>
      <el-button size="small" @click="getExcel()">导出</el-button>
      <el-button size="small" @click="printf()">打印</el-button>
      <el-button size="small" @click="reduction()">重置</el-button>
    </div>

    <!--<div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>-->
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22" class="table-col">
          <LookupValue
            :span="6"
            :isMul="isMul"
            :isShowLabel="isshow"
            :code="listQuery.billType"
            :lookuptype="lookuptype"
            :labelName="lookupValuelable"
            @changeCode="getLookupValue"
          />
          <el-col :span="6">
            <label>出库单号</label>
            <el-input v-model="listQuery.outStoreCode" placeholder="请输入" size="small"></el-input>
          </el-col>
           <el-col :span="6">
              <label class="demonstration">出库时间</label>
              <el-date-picker
                v-model="orderDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                size="small"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>客户名称</label>
              <el-input v-model="listQuery.custName" placeholder="请输入" size="small"></el-input>
            </el-col>
          
        </el-col>

        <el-col :span="2" class="moreBtn" v-if="isShowMoreBtn">
          <el-button :icon="moreBtnIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>

        <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:2000">
          <el-row>

            <el-col :span="6">
              <label>VIN</label>
              <el-input v-model="listQuery.vin" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>关联单号</label>
              <el-input v-model="listQuery.relateOrderCode" placeholder="请输入" size="small"></el-input>
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
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click="detailsQuery"
      :height="tableHeight"
    >
      <el-table-column label="序号" align="center" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column label="经销商简称" align="center" width="100" prop="dlrShortName">
        <template slot-scope="scope">{{ scope.row.dlrShortName }}</template>
      </el-table-column>
      <el-table-column label="出库类型" align="center" prop="billType">
        <template slot-scope="scope">{{ scope.row.billType }}</template>
      </el-table-column>
      <el-table-column label="出库单号" align="center" width="150" prop="outStoreCode">
        <span
          slot-scope="scope"
          @click="dataDialogVisible(scope.row.outStoreCode)"
          class="outStoreCode"
        >{{ scope.row.outStoreCode }}</span>
        <!-- <template slot-scope="scope">
          <a style="color:#00F" @click="dataDialogVisible">{{ scope.row.outStoreCode }}</a>
        </template>-->
      </el-table-column>
      <el-table-column label="关联单号" align="center" width="150" prop="relateOrderCode">
        <template slot-scope="scope">{{ scope.row.relateOrderCode }}</template>
      </el-table-column>
      <el-table-column label="客户名称" align="center" prop="custName">
        <template slot-scope="scope">{{ scope.row.custName }}</template>
      </el-table-column>
      <el-table-column label="出库时间" align="center" width="150" prop="outStoreDate">
        <template slot-scope="scope">{{ scope.row.outStoreDate }}</template>
      </el-table-column>
      <el-table-column label="品种数" align="center" prop="partVariety">
        <template slot-scope="scope">{{ scope.row.partVariety }}</template>
      </el-table-column>
      <el-table-column label="出库总数量" align="center" width="100" prop="outStoreQty">
        <template slot-scope="scope">{{ scope.row.outStoreQty }}</template>
      </el-table-column>
      <el-table-column label="出库总金额" align="center" width="100" prop="saleAmount">
        <template slot-scope="scope">{{ scope.row.saleAmount }}</template>
      </el-table-column>
      <el-table-column label="成本总价(不含税)" align="center" prop="storeCostAmount">
        <template slot-scope="scope">{{ scope.row.storeCostAmount }}</template>
      </el-table-column>
      <el-table-column label="成本总价(含税)" align="center" prop="storePriceAmount">
        <template slot-scope="scope">{{ scope.row.storePriceAmount }}</template>
      </el-table-column>
      <el-table-column label="利润" align="center" prop="partProfit">
        <template slot-scope="scope">{{ scope.row.partProfit }}</template>
      </el-table-column>
      <el-table-column label="车牌号" align="center" width="150" prop="carLicense">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="VIN码" align="center" width="170" prop="vin">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="备注" align="center" prop="remark">
        <template slot-scope="scope">{{ scope.row.remark }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      ref="paginationHeight"
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?listRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
    <el-dialog title="出库单明细" :visible.sync="dialogVisible" width="70%" :append-to-body="true">
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <label>出库类型</label>
            <el-input size="small" v-model="billType" :disabled="dataDisabled"></el-input>
          </el-col>
          <el-col :span="8">
            <label>出库单号</label>
            <el-input size="small" v-model="outStoreCode" :disabled="dataDisabled"></el-input>
          </el-col>
        </el-row>
      </div>

      <el-table
        v-loading="listLoading"
        :data="list1"
        element-loading-text="Loading"
        border
        fit
        stripe
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
      >
        <el-table-column label="序号" align="center" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="备件编码" align="center" width="150">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column label="备件名称" align="center" width="150">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column label="出库数量" align="center">
          <template slot-scope="scope">{{ scope.row.outStoreQty }}</template>
        </el-table-column>
        <el-table-column label="出库单价" align="center">
          <template slot-scope="scope">{{ scope.row.salePrice }}</template>
        </el-table-column>
        <el-table-column label="出库总金额" align="center" width="130">
          <template slot-scope="scope">{{ scope.row.saleAmount }}</template>
        </el-table-column>
        <el-table-column label="经销商价" align="center">
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
        <el-table-column label="建议零售价" align="center" width="100">
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
        <el-table-column label="零售价" align="center">
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
        <el-table-column label="成本零售价(不含税)" align="center" width="100">
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
        <el-table-column label="成本总价(不含税)" align="center" width="100">
          <template slot-scope="scope">{{ scope.row.storeCostAmount }}</template>
        </el-table-column>
        <el-table-column label="成本零售价(含税)" align="center" width="100">
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
        <el-table-column label="成本总价(含税)" align="center" width="100">
          <template slot-scope="scope">{{ scope.row.storePriceAmount }}</template>
        </el-table-column>
        <el-table-column label="利润" align="center">
          <template slot-scope="scope">{{ scope.row.partProfit }}</template>
        </el-table-column>
        <el-table-column label="仓库名称" align="center">
          <template slot-scope="scope">{{ scope.row.warehouseName }}</template>
        </el-table-column>
        <el-table-column label="仓位编码" align="center" width="150">
          <template slot-scope="scope">{{ scope.row.placeCode }}</template>
        </el-table-column>
        <el-table-column label="备件品牌" align="center">
          <template slot-scope="scope">{{ scope.row.partBrandName }}</template>
        </el-table-column>
        <el-table-column label="车系" width="400px" align="center">
          <template slot-scope="scope">{{ scope.row.seriesName }}</template>
        </el-table-column>
        <el-table-column label="备件类别" align="center">
          <template slot-scope="scope">{{ scope.row.partTypeName }}</template>
        </el-table-column>
        <el-table-column label="备件属性" align="center">
          <template slot-scope="scope">{{ scope.row.partPropertyName }}</template>
        </el-table-column>
        <el-table-column label="车辆品牌" align="center">
          <template slot-scope="scope">{{ scope.row.remark }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog title="出库单打印" 
        :visible.sync="printfDialogVisible" 
        width="80%" 
        :append-to-body="true"
        :close-on-click-modal="false">
      <div style="height:465px;overflow-y:auto;width:100%">
        <div ref="print">
          <el-row :gutter="26">
            <el-col :span="24" align="center">
              <label style="font-size:20px">备件出库单统计</label>
            </el-col>
            <el-col :span="10">
              <label style="font-size:10px">广州风日</label>
            </el-col>
            <el-col :span="12" align="right">
              <label>出库时间：</label>
              <label>{{this.orderDate[0]}}</label>
              <label>至</label>
              <label>{{this.orderDate[1]}}</label>
            </el-col>
          </el-row>
          <br />
          <div>
            <el-row class="textCenter">
              <el-col :span="2" aglin="center" class="border1 height line-height">序号</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">出库类型</el-col>
              <el-col :span="3" aglin="center" class="border1 height line-height">出库单号</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">客户名称</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">出库时间</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">品种数</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">出库总数量</el-col>
              <el-col :span="3" aglin="center" class="border1 height line-height">出库总金额</el-col>
              <el-col :span="4" aglin="center" class="border1 height line-height">成本总价(不含税)</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">利润</el-col>
            </el-row>
            <el-row class="textCenter" v-for="(item, index) in list" :key="index">
              <el-col :span="2" aglin="center" class="border1 height line-height">{{index + 1 }}</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">{{item.billType}}</el-col>
              <el-col
                :span="3"
                aglin="center"
                class="border1 height line-height"
              >{{item.outStoreCode}}</el-col>
              <el-col :span="2" aglin="center" class="border1 height line-height">{{item.custName}}</el-col>
              <el-col :span="2" aglin="center" class="border1 height">{{item.outStoreDate}}</el-col>
              <el-col
                :span="2"
                aglin="center"
                class="border1 height line-height"
              >{{item.partVariety}}</el-col>
              <el-col
                :span="2"
                aglin="center"
                class="border1 height line-height"
              >{{item.outStoreQty}}</el-col>
              <el-col
                :span="3"
                aglin="center"
                class="border1 height line-height"
              >{{item.saleAmount}}</el-col>
              <el-col
                :span="4"
                aglin="center"
                class="border1 height line-height"
              >{{item.storeCostAmount}}</el-col>
              <el-col
                :span="2"
                aglin="center"
                class="border1 height line-height"
              >{{item.partProfit}}</el-col>
            </el-row>
          </div>
          <br />
          <el-row :gutter="26">
            <el-col :span="10">
              <label>制表人：</label>
            </el-col>
            <el-col :span="12" align="right">
              <label>制表时间：</label>
              <label>{{this.nowTime}}</label>
            </el-col>
          </el-row>
        </div>
      </div>
      <span slot="footer" class="dialog-footer" style="position">
        <el-button size="small" @click="printf2()">打印</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { paBuDlrOutStoreQueryFindAll } from "@/api/pa/outManage/paBuDlrOutStore";
import { paBuDlrOutStoreDQueryFindAll } from "@/api/pa/outManage/paBuDlrOutStoreD";
import LookupValue from "@/components/org/LookupValue/index";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  name: "menu0-1",
  components: {
    LookupValue
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      isMul: false,
      isshow: true,
      toggleParam: false,
      isShowMoreBtn: true,
      code: "1",
      orderDate:[],
      list:null,
      list1: null,
      lookupValuelable: "出库类型",
      lookuptype: "PA0022",
      listLoading: true,
      dialogVisible: false,
      printfDialogVisible: false,
      dataDisabled: true,
      billType: "",
      outStoreCode: "",
      pageSize: 10,
      pageIndex: 1,
      listRecords:'',
      nowTime: "",
      listQuery: {
        oemCode: "",
        groupCode: "",
        outStoreCode: "",
        billType: "",
        outStoreDateS: "",
        outStoreDateE: "",
        custName: "",
        relateOrderCode: "",
        vin: "",
        dlrId: "202"//查询传202
      },
      listQuery1: {
        // oemCode: "",
        // groupCode: "",
        outStoreCode: ""
      },
      moreBtnIcon: "",
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    // this.fetchData();
    this.listLoading = false;
  },
  computed: {},
  methods: {
    resetTime() {
      let startTime = new Date();
      console.log(startTime.toLocaleString());
      return startTime.toLocaleString();
    },
    fetchData(page,dataType) {
      this.listLoading = true;
      this.listQuery.outStoreDateS = this.orderDate[0]
      this.listQuery.outStoreDateE = this.orderDate[1]

      var pageSize = dataType == 'excel' ? 99999 : this.pageSize
      var tableColumns = this.$refs.multipleTable == null?null:this.$refs.multipleTable.columns
      paBuDlrOutStoreQueryFindAll(
        page || this.pageIndex,
        pageSize,
        this.listQuery,
        dataType,
        '经销商备件出库列表导出',
        '经销商备件出库列表',
        tableColumns
      ).then(response => {
        
         if(dataType == 'excel'){//导出excel查询
            this.$utils.downloadFile(response, '经销商备件出库查询导出.xlsx')
            this.listLoading = false}
         else if(
          response.data[paApis.paBuDlrOutStoreQueryFindAll.ServiceCode].result === "1"
        ) {
          this.list =response.data[paApis.paBuDlrOutStoreQueryFindAll.ServiceCode].rows;
          this.listRecords = response.data[paApis.paBuDlrOutStoreQueryFindAll.ServiceCode].records;
          this.listLoading = false;
        } else {
          this.listLoading = false;
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.fetchData();
    },
    reduction() {
      this.listQuery.outStoreCode = "";
      this.listQuery.billType = "";
      this.orderDate = [];
     
      this.listQuery.custName = "";
      this.listQuery.relateOrderCode = "";
      this.listQuery.vin = "";
      this.listQuery.dlrId = "";
    },
    getLookupValue(val) {
      this.listQuery.billType = val;
    },
    detailsQuery(row) {
      this.billType = row.billType;
      this.outStoreCode = row.outStoreCode;
    },
    dataDialogVisible(val) {
      this.listQuery1.outStoreCode = val;
      this.dialogVisible = true;
      paBuDlrOutStoreDQueryFindAll("1000", "1", this.listQuery1).then(
        response => {
          if (response.data[paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode].result === "1" &&
            response.data[paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode].rows != "") {
            this.list1 = response.data[paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode].rows;
          }
        }
      );
    },
    printf() {
      this.printfDialogVisible = true;
      this.nowTime = this.resetTime();
    },
    printf2() {
      this.$print(this.$refs.print);
    },
    getExcel() {
      this.fetchData(1,'excel')
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      console.log(this.toggleParam);
      if (this.toggleParam) {
        this.moreBtnIcon = "el-icon-minus";
      } else {
        this.moreBtnIcon = "el-icon-plus";
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.textCenter {
  text-align: center;
}
.paddingB10 {
  padding-bottom: 10px;
}
.height {
  height: 50px;
}
.line-height {
  line-height: 50px;
}
.paddingB5 {
  padding-bottom: 5px;
}
/deep/ .border1 {
  border: 1px solid #797979 !important;
}
.lineHeight32.el-row {
  line-height: 24px;
}
/deep/ .outStoreCode {
  color: blue;
  cursor: pointer;
}
</style>
