<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData(1)">查询</el-button>
      <el-button size="small" @click="getExcel()">导出</el-button>
      <el-button size="small" @click="printf()">打印</el-button>
      <el-button size="small" @click="reduction()">重置</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22" class="table-col">
          <!-- <LookupValue :span="6" :isMul="isMul" :isShowLabel="isshow"  :code="listQuery.dlrShortName" :lookuptype="lookuptype[0].type" :labelName='lookupValuelable[0].lable' @changeCode="getLookupValue1" /> -->
          <seComQueChoDropDownList
            :isMul="isMul"
            :span="6"
            :labelName="labelName"
            @changeCode="getComQueChoDrop"
            :code="listQuery.dlrShortName"
          />

          <LookupValue
            :span="6"
            :isMul="isMul"
            :isShowLabel="isshow"
            :code="listQuery.billType"
            :lookuptype="lookuptype[1].type"
            :labelName="lookupValuelable[1].lable"
            @changeCode="getLookupValue2"
          />

          <el-col :span="6">
            <label>出库单号</label>
            <el-input v-model="listQuery.outStoreCode" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>施工单号</label>
            <el-input v-model="listQuery.relateOrderCode" placeholder="请输入" size="small"></el-input>
          </el-col>
        </el-col>

        <el-col :span="2" class="moreBtn" v-if="isShowMoreBtn">
          <el-button :icon="moreBtnIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>

        <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:2000">
          <el-row>
            <el-col :span="6">
              <label>备件编码</label>
              <el-input v-model="listQuery.partNo" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>备件名称</label>
              <el-input v-model="listQuery.partName" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>出库时间</label>
              <el-date-picker
                v-model="listQuery.outStoreDateB"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                @blur="checkDateB"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker
                v-model="listQuery.outStoreDateE"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd HH:mm:ss"
                @blur="checkDateE"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input v-model="listQuery.carLicense" placeholder="请输入" size="small"></el-input>
            </el-col>

            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.businessType"
              :lookuptype="lookuptype[2].type"
              :labelName="lookupValuelable[2].lable"
              @changeCode="getLookupValue3"
            />

            <el-col :span="6">
              <label>客户名称</label>
              <el-input v-model="listQuery.custName" placeholder="请输入" size="small"></el-input>
            </el-col>

            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.payKind"
              :lookuptype="lookuptype[3].type"
              :labelName="lookupValuelable[3].lable"
              @changeCode="getLookupValue4"
            />

            <el-col :span="6">
              <label>VIN码</label>
              <el-input v-model="listQuery.vin" placeholder="请输入" size="small"></el-input>
            </el-col>

            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.repairType"
              :lookuptype="lookuptype[4].type"
              :labelName="lookupValuelable[4].lable"
              @changeCode="getLookupValue5"
            />

            <seCommonQueryServiceSaDDL
              :span="6"
              :isMul="isMul"
              :labelName="seName"
              @changeCode="getServiceSaDDL"
              :code="listQuery.applierName"
            />

            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.balanceStatus"
              :lookuptype="lookuptype[5].type"
              :labelName="lookupValuelable[5].lable"
              @changeCode="getLookupValue6"
            />
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      v-loading="listLoading"
      :data="list"
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
      <el-table-column label="出库类型" align="center" prop="billTypeName">
        <template slot-scope="scope">{{ scope.row.billTypeName }}</template>
      </el-table-column>
      <el-table-column label="出库单号" align="center" width="155" prop="outStoreCode">
        <template slot-scope="scope">{{ scope.row.outStoreCode }}</template>
      </el-table-column>
      <el-table-column label="关联单号" align="center" width="130" prop="relateOrderCode">
        <template slot-scope="scope">{{ scope.row.relateOrderCode }}</template>
      </el-table-column>
      <el-table-column label="服务代表" align="center" prop="applierName">
        <template slot-scope="scope">{{ scope.row.applierName }}</template>
      </el-table-column>
      <el-table-column label="客户名称" align="center" prop="custName">
        <template slot-scope="scope">{{ scope.row.custName }}</template>
      </el-table-column>
      <el-table-column label="出库时间" align="center" width="150" prop="outStoreDate">
        <template slot-scope="scope">{{ scope.row.outStoreDate }}</template>
      </el-table-column>
      <el-table-column label="车牌号" align="center" width="130" prop="carLicense">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="备件编码" align="center" width="150" prop="partNo">
        <template slot-scope="scope">{{ scope.row.partNo }}</template>
      </el-table-column>
      <el-table-column label="备件名称" align="center" width="130" prop="partName">
        <template slot-scope="scope">{{ scope.row.partName }}</template>
      </el-table-column>
      <el-table-column label="单位" align="center" prop="unit">
        <template slot-scope="scope">{{ scope.row.unit }}</template>
      </el-table-column>
      <el-table-column label="业务类别" align="center">
        <template slot-scope="scope">{{  }}</template>
      </el-table-column>
      <el-table-column label="维修类别" align="center" prop="repairTypeName">
        <template slot-scope="scope">{{ scope.row.repairTypeName }}</template>
      </el-table-column>
      <el-table-column label="付费性质" align="center" prop="payKindName">
        <template slot-scope="scope">{{ scope.row.payKindName }}</template>
      </el-table-column>

      <el-table-column label="出库数量" align="center" prop="outStoreQty">
        <template slot-scope="scope">{{ scope.row.outStoreQty }}</template>
      </el-table-column>
      <el-table-column label="出库单价" align="center" prop="salePrice">
        <template slot-scope="scope">{{ scope.row.salePrice }}</template>
      </el-table-column>
      <el-table-column label="折扣率" align="center" prop="outStoreQty">
        <template slot-scope="scope">{{ scope.row.outStoreQty }}</template>
      </el-table-column>
      <el-table-column label="出库总金额" align="center" width="100" prop="partDiscount">
        <template slot-scope="scope">{{ scope.row.partDiscount }}</template>
      </el-table-column>
      <el-table-column label="成本单价(不含税)" align="center">
        <!-- <template slot-scope="scope">
          {{ scope.row.storeCostAmount }}
        </template>-->
      </el-table-column>
      <el-table-column label="成本单价(含税)" align="center">
        <!-- <template slot-scope="scope">
          {{ scope.row.storePriceAmount }}
        </template>-->
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
      <el-table-column label="仓库名称" align="center" prop="warehouseName">
        <template slot-scope="scope">{{ scope.row.warehouseName }}</template>
      </el-table-column>
      <el-table-column label="仓库编码" align="center" prop="warehouseCode">
        <template slot-scope="scope">{{ scope.row.warehouseCode }}</template>
      </el-table-column>
      <el-table-column label="备件品牌" align="center" prop="partBrandName">
        <template slot-scope="scope">{{ scope.row.partBrandName }}</template>
      </el-table-column>
      <el-table-column label="备件类别" align="center" prop="partTypeCode">
        <template slot-scope="scope">{{ scope.row.partTypeCode }}</template>
      </el-table-column>
      <el-table-column label="备件属性" align="center" prop="partPropertyName">
        <template slot-scope="scope">{{ scope.row.partPropertyName }}</template>
      </el-table-column>
      <el-table-column label="车辆品牌" align="center">
        <!-- <template slot-scope="scope">
          {{ scope.row.vin }}
        </template>-->
      </el-table-column>
      <el-table-column label="备件品种分类" align="center" prop="partVarietyName">
        <template slot-scope="scope">{{ scope.row.partVarietyName }}</template>
      </el-table-column>
      <el-table-column label="结算状态" align="center" prop="balanceStatusName">
        <template slot-scope="scope">{{ scope.row.balanceStatusName }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?list.length:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      ref="paginationHeight"
    />

    <el-dialog title="出库单明细打印" :visible.sync="printfDialogVisible" width="80%">
      <div style="height:465px;overflow-y:auto;width:100%">
        <div ref="print">
          <el-row :gutter="26">
            <el-col :span="24" align="center">
              <label style="font-size:20px">维修出库单统计</label>
            </el-col>
            <el-col :span="10">
              <label style="font-size:10px">广州风日</label>
            </el-col>
            <el-col :span="12" align="right">
              <label>出库时间：</label>
              <label>{{this.listQuery.outStoreDateB}}</label>
              <label>至</label>
              <label>{{this.listQuery.outStoreDateE}}</label>
            </el-col>
          </el-row>
          <br />
          <el-row class="textCenter">
            <el-col :span="1" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">单据编号</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">出库时间</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">备件编码</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">备件名称</el-col>
            <el-col :span="1" aglin="center" class="border1 height line-height">单位</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">客户名称</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">销售单价</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">折扣率</el-col>
            <el-col :span="1" aglin="center" class="border1 height line-height">数量</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">销售总价</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">销售成本</el-col>
            <el-col :span="1" aglin="center" class="border1 height line-height">利润</el-col>
          </el-row>
          <el-row class="textCenter" v-for="(item, index) in list" :key="index">
            <el-col :span="1" aglin="center" class="border1 height line-height">{{index + 1 }}</el-col>
            <el-col
              :span="4"
              aglin="center"
              class="border1 height line-height"
            >{{item.outStoreCode}}</el-col>
            <el-col
              :span="2"
              aglin="center"
              class="border1 height line-height2"
            >{{item.outStoreDate}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height2">{{item.partNo}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height2">{{item.partName}}</el-col>
            <el-col :span="1" aglin="center" class="border1 height line-height">{{item.unit}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.custName}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.salePrice}}</el-col>
            <el-col
              :span="2"
              aglin="center"
              class="border1 height line-height"
            >{{item.partDiscount}}</el-col>
            <el-col :span="1" aglin="center" class="border1 height line-height">{{item.outStoreQty}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.saleAmount}}</el-col>
            <el-col
              :span="2"
              aglin="center"
              class="border1 height line-height"
            >{{item.storePriceAmount}}</el-col>
            <el-col :span="1" aglin="center" class="border1 height line-height">{{item.partProfit}}</el-col>
          </el-row>

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
import { paBuDlrOutStoreDQueryFindAll } from "@/api/pa/outManage/paBuDlrOutStoreD";
import LookupValue from "@/components/org/LookupValue/index";
import seComQueChoDropDownList from "@/components/se/seComQueChoDropDownList/index";
import seCommonQueryServiceSaDDL from "@/components/se/seCommonQueryServiceSaDDL";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  name: "menu0-1",
  components: {
    LookupValue,
    seCommonQueryServiceSaDDL,
    seComQueChoDropDownList
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

      list: null,
      list1: null,
      toggleParam: false,
      isShowMoreBtn: true,

      labelName: "经销商简称",

      lookupValuelable: [
        {
          lable: "经销商简称"
        },
        {
          lable: "出库类型"
        },
        {
          lable: "业务类别"
        },
        {
          lable: "付费性质"
        },
        {
          lable: "维修类别"
        },
        {
          lable: "结算状态"
        }
      ],
      lookuptype: [
        {
          type: ""
        },
        {
          type: ""
        },

        {
          type: "SE0005"
        },
        {
          type: "SE0010"
        },
        {
          type: "SE0022"
        },
        {
          type: ""
        }
      ],
      listLoading: true,
      dialogVisible: false,
      printfDialogVisible: false,
      dataDisabled: true,
      billType: "",
      outStoreCode: "",
      pageSize: "",
      pageIndex: "",
      nowTime: "",
      seName: "服务代表",
      listQuery: {
        outStoreCode: "",
        billType: "",
        outStoreDateB: "",
        outStoreDateE: "",
        custName: "",
        relateOrderCode: "",
        vin: "",
        repairType: "",
        businessType: "",
        dlrShortName: "",
        partNo: "",
        partName: "",
        carLicense: "",
        partTypeName: "",
        carBrandCode: "",
        partPropertyName: "",
        payKind: "",
        applierName: "",
        balanceStatus: ""
      },
      listQuery1: {
        oemCode: "",
        groupCode: "",
        outStoreCode: ""
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    // this.fetchData()
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
      var pageSize = dataType == 'excel' ? 99999:this.pageSize
      var tableColumns = this.$refs.multipleTable == null?null:this.$refs.multipleTable.columns
      paBuDlrOutStoreDQueryFindAll(
        page || this.pageIndex,
        pageSize,
        this.listQuery,
        dataType,
        '维修出库查询列表导出',
        '维修出库查询列表',
        tableColumns
      ).then(response => {
        if(dataType == 'excel'){
          this.$utils.downloadFile(response, '维修出库查询导出.xlsx')
            this.listLoading = false
        }
        else if (
          response.data[paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode].rows !=
            ""
        ) {
          this.list =
            response.data[paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode].rows;
          this.listLoading = false;
        } else {
          this.listLoading = false;
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    reduction() {
      this.listQuery.outStoreCode = "";
      this.listQuery.billType = "";
      this.listQuery.outStoreDateB = "";
      this.listQuery.outStoreDateE = "";
      this.listQuery.custName = "";
      this.listQuery.relateOrderCode = "";
      this.listQuery.vin = "";
      this.listQuery.repairType = "";
      this.listQuery.businessType = "";
      this.listQuery.dlrShortName = "";
      this.listQuery.partNo = "";
      this.listQuery.partName = "";
      this.listQuery.carLicense = "";
      this.listQuery.payKind = "";
      this.listQuery.applierName = "";
      this.listQuery.balanceStatus = "";
    },
    getLookupValue1(val) {
      this.listQuery.dlrShortName = val;
    },
    getLookupValue2(val) {
      this.listQuery.billType = val;
    },
    getLookupValue3(val) {
      this.listQuery.businessType = val;
    },
    getLookupValue4(val) {
      this.listQuery.payKind = val;
    },
    getLookupValue5(val) {
      this.listQuery.repairType = val;
    },
    getLookupValue6(val) {
      this.listQuery.balanceStatus = val;
    },
    detailsQuery(row) {
      this.billType = row.billType;
      this.outStoreCode = row.outStoreCode;
    },

    printf() {
      this.printfDialogVisible = true;
      this.nowTime = this.resetTime();
    },
    checkDateB() {
      console.log(this.listQuery.outStoreDateB);
      console.log(this.listQuery.outStoreDateE);
      if (
        this.listQuery.outStoreDateB > this.listQuery.outStoreDateE &&
        this.listQuery.outStoreDateE != ""
      ) {
        alert("错误");
        this.listQuery.outStoreDateB = "";
      }
    },
    checkDateE() {
      if (
        this.listQuery.outStoreDateE < this.listQuery.outStoreDateB &&
        this.listQuery.outStoreDateB != ""
      ) {
        console.log(this.listQuery.outStoreDateB);
        console.log(this.listQuery.outStoreDateE);
        alert("错误");
        this.listQuery.outStoreDateE = "";
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (this.toggleParam) {
        this.moreBtnIcon = "el-icon-minus";
      } else {
        this.moreBtnIcon = "el-icon-plus";
      }
    },
    getServiceSaDDL(val) {
      this.listQuery.applierName = val;
    },
    printf2() {
      this.$print(this.$refs.print);
    },
    getComQueChoDrop(val) {
      this.listQuery.dlrShortName = val;
    },
    getExcel(){
      this.fetchData(1,'excel')
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
.line-height2 {
  line-height: 25px;
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
</style>