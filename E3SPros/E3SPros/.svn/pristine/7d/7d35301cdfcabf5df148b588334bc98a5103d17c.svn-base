<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>

      <!-- <el-button size="small" @click="printf()">打印</el-button> -->
      <el-button size="small" @click="reduction()">重置</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight">查询条件</div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22" class="table-col">
          <el-col :span="6">
            <lableName curLabelName="退料申请单号" :isShowLabel="true" :isRequire="false"></lableName>
            <el-input v-model="listQuery.returnApplyOrderCode" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>派工单号</label>
            <el-input v-model="listQuery.sourceCode" placeholder="请输入" size="small"></el-input>
          </el-col>
          <el-col :span="6">
            <label>单据日期</label>
            <el-date-picker
              v-model="listQuery.applyDateS"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              @blur="checkDateB"
            ></el-date-picker>
          </el-col>
          <el-col :span="6">
            <label>至</label>
            <el-date-picker
              v-model="listQuery.applyDateE"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              @blur="checkDateE"
            ></el-date-picker>
          </el-col>
        </el-col>

        <el-col :span="2" class="moreBtn" v-if="isShowMoreBtn">
          <el-button :icon="moreBtnIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>

        <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:2000">
          <el-row>
            <el-col :span="6">
              <label>客户名称</label>
              <el-input v-model="listQuery.custName" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>服务代表</label>
              <el-input v-model="listQuery.applyEmpName" placeholder="请输入" size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>车牌号</label>
              <el-input v-model="listQuery.carLicense" placeholder="请输入" size="small"></el-input>
            </el-col>

            <el-col :span="6">
              <label>VIN码</label>
              <el-input v-model="listQuery.vin" placeholder="请输入" size="small"></el-input>
            </el-col>
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
      <el-table-column label="退料申请单号" align="center">
        <template slot-scope="scope">
          <a style="color:#00F" @click="dataDialogVisible">{{ scope.row.returnApplyOrderCode }}</a>
        </template>
      </el-table-column>
      <el-table-column label="派工单号" align="center">
        <template slot-scope="scope">{{ scope.row.sourceCode }}</template>
      </el-table-column>
      <el-table-column label="退库申请日期" align="center">
        <template slot-scope="scope">{{ scope.row.applyDate }}</template>
      </el-table-column>
      <el-table-column label="车牌号" align="center">
        <template slot-scope="scope">{{ scope.row.carLicense }}</template>
      </el-table-column>
      <el-table-column label="客户名称" align="center">
        <template slot-scope="scope">{{ scope.row.custName }}</template>
      </el-table-column>
      <el-table-column label="VIN码" align="center">
        <template slot-scope="scope">{{ scope.row.vin }}</template>
      </el-table-column>
      <el-table-column label="出库单号" align="center">
        <template slot-scope="scope">{{ scope.row.outStoreCode }}</template>
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
    <el-dialog title="施工单明细" :visible.sync="dialogVisible" width="80%">
      <div class="filter-container filter-params">
        <el-row :gutter="24">
          <el-col :span="8">
            <div class="filter-container filter-params">
              <LookupValue
                :span="24"
                :isMul="isMul"
                :isShowLabel="isshow"
                :code="listQuery.billType"
                :lookuptype="lookuptype"
                :labelName="lookupValuelable"
                @changeCode="getLookupValue"
              />
            </div>
          </el-col>
          <el-col :span="16">
            <div class="filter-container filter-button">
              <el-button size="small" @click="saveData">保存</el-button>
              <el-button size="small" @click="printf()">打印</el-button>
            </div>
          </el-col>
        </el-row>
      </div>

      <el-table
        v-loading="listLoading"
        :data="list1"
        element-loading-text="Loading"
        ref="multipleTable"
        border
        fit
        stripe
        height="300"
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        :row-class-name="tableRowClassName"
        @row-click="getRow"
      >
        <el-table-column label="序号" align="center" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column label="选择" type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="备件编码" align="center" width="160">
          <template slot-scope="scope">{{ scope.row.partNo }}</template>
        </el-table-column>
        <el-table-column label="备件名称" align="center" width="130">
          <template slot-scope="scope">{{ scope.row.partName }}</template>
        </el-table-column>
        <el-table-column label="电池包编码+" align="center" width="150">
          <template slot-scope="scope">
            <el-input size="small"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="旧电池包/模组编码+" align="center" width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.salePrice" size="small"></el-input>
          </template>
        </el-table-column>

        <el-table-column label="单位" align="center">
          <template slot-scope="scope">{{ scope.row.unit }}</template>
        </el-table-column>
        <el-table-column label="退库数量+" width="120px" align="center">
          <template slot-scope="scope">
            <el-input v-model="scope.row.outStoreQty" size="small" @blur="number($event)"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="退库单价" align="center">
          <template slot-scope="scope">{{ scope.row.salePrice }}</template>
        </el-table-column>

        <el-table-column label="退库金额" align="center">
          <template slot-scope="scope">{{ scope.row.saleAmount }}</template>
        </el-table-column>

        <el-table-column label="仓库名称" align="center">
          <template slot-scope="scope">{{ scope.row.warehouseName }}</template>
        </el-table-column>
        <el-table-column label="仓位编码" align="center">
          <template slot-scope="scope">{{ scope.row.placeCode }}</template>
        </el-table-column>
        <el-table-column label="维修类别" align="center">
          <template slot-scope="scope">{{ scope.row.repairTypeName }}</template>
        </el-table-column>
        <el-table-column label="业务类别" align="center">
          <template slot-scope="scope">{{ scope.row.businessTypeName }}</template>
        </el-table-column>
        <el-table-column label="备件品牌" align="center">
          <template slot-scope="scope">{{ scope.row.partBrandName }}</template>
        </el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog :visible.sync="printfDialogVisible" width="80%">
      <div class="filter-container filter-params">
        <el-row :gutter="24">
          <el-col :span="6">
            <LookupValue
              :span="24"
              :isMul="isMul"
              :isShowLabel="isshow"
              :code="listQuery.billType"
              :lookuptype="lookuptype"
              :labelName="lookupValuelable1"
              @changeCode="getLookupValue1"
            />
          </el-col>
          <el-col :span="6">
            <label>出库日期</label>
            <el-date-picker
              v-model="listQuery3.applyDateS"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              @blur="checkDateB1"
            ></el-date-picker>
          </el-col>
          <el-col :span="6">
            <label>至</label>
            <el-date-picker
              v-model="listQuery3.applyDateE"
              type="date"
              placeholder="选择日期"
              value-format="yyyy-MM-dd HH:mm:ss"
              @blur="checkDateE1"
            ></el-date-picker>
          </el-col>
        </el-row>
      </div>

      <div style="height:465px;overflow-y:auto;width:100%">
        <div ref="print">
          <el-row :gutter="26">
            <el-col :span="24" align="center">
              <label style="font-size:20px">备件维修出库单</label>
            </el-col>
          </el-row>
          <br />
          <el-row :gutter="26">
            <el-col :span="6">
              <label>出库退库单号:</label>
              <label>{{this.list3.OUT_STORE_CODE}}</label>
            </el-col>
            <el-col :span="6">
              <label>客户名称:</label>
              <label>{{this.list3.custName}}</label>
            </el-col>
            <el-col :span="6">
              <label>出库单号：</label>
              <label>{{this.list3.OUT_STORE_CODE}}</label>
            </el-col>

            <el-col :span="6">
              <label>出库时间：</label>
              <label>{{this.list3.OUT_STORE_DATE}}</label>
            </el-col>
          </el-row>
          <br />

          <el-row class="textCenter">
            <el-col :span="2" aglin="center" class="border1 height line-height">序号</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件编码</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">备件名称</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">备件品牌</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">单位</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">数量</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">单价</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">总价</el-col>
            <el-col :span="4" aglin="center" class="border1 height line-height">仓库名称</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">仓位编码</el-col>
          </el-row>
          <el-row class="textCenter" v-for="(item, index) in list2" :key="index">
            <el-col :span="2" aglin="center" class="border1 height line-height">{{index + 1 }}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.PART_NO}}</el-col>
            <el-col :span="3" aglin="center" class="border1 height line-height">{{item.PART_NAME}}</el-col>
            <el-col
              :span="2"
              aglin="center"
              class="border1 height line-height"
            >{{item.storeCostAmount}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.UNIT}}</el-col>
            <el-col
              :span="2"
              aglin="center"
              class="border1 height line-height"
            >{{item.OUT_STORE_QTY}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.SALE_PRICE}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.SALE_AMOUNT}}</el-col>
            <el-col
              :span="4"
              aglin="center"
              class="border1 height line-height"
            >{{item.WAREHOUSE_NAME}}</el-col>
            <el-col :span="2" aglin="center" class="border1 height line-height">{{item.PLACE_CODE}}</el-col>
          </el-row>

          <br />
          <el-row :gutter="24">
            <el-col :span="24" algin="right">
              <label>估价合计：</label>
              <label>{{this.SALE_AMOUNT}}</label>
            </el-col>
          </el-row>
          <br />
          <el-row :gutter="26">
            <el-col :span="8">
              <label>仓库人员：</label>
              <label>{{this.WAREHOUSE_USER}}</label>
            </el-col>
            <el-col :span="8">
              <label>制表人：</label>
            </el-col>
            <el-col :span="8">
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
import {
  seBuReturnApplyOrderQueryFindAll,
  seBuReturnApplyOrderDQueryFindAll,
  paBuDlrOutStoreMutationSave,
  RepairOutReturnService004
} from "@/api/pa/outManage/BuReturnApplyOrderQueryFindAll";

import LookupValue from "@/components/org/LookupValue/index";
import dataPicker from "@/views/pa/outManage/paDataPicker";
import lableName from "@/components/lableName";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import { log } from "util";
import { parse } from "path";
import { the_Height } from "@/components/se/seMixins/makeHeight";

export default {
  mixins: [the_Height],
  name: "menu0-1",
  components: {
    LookupValue,
    dataPicker,
    lableName
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
      code: "1",
      WAREHOUSE_USER: "",
      list: null,
      list1: null,
      list2: null,
      list3: {
        OUT_STORE_CODE: "",
        custName: "",
        OUT_STORE_DATE: "",
        vin: "",
        sourceCode: ""
      },
      row: null,
      multipleTable: [],
      lookupValuelable: "领料人",
      lookupValuelable1: "出库单号",
      lookuptype: "PA0022",
      listLoading: true,
      dialogVisible: false,
      printfDialogVisible: false,
      dataDisabled: true,
      billType: "",
      outStoreCode: "",
      pageSize: "",
      pageIndex: "",
      nowTime: "",
      SALE_AMOUNT: "", //合价统计
      toggleParam: false,
      isShowMoreBtn: true,
      listQuery: {
        oemCode: "",
        groupCode: "",
        returnApplyOrderCode: "",
        sourceCode: "",
        applyDateS: "",
        applyDateE: "",
        custName: "",
        applyEmpName: "",
        carLicense: "",
        vin: "",
        dlrId:"202"
      },
      listQuery1: {
        // oemCode: "",
        // groupCode: "",
        returnApplyOrderCode: "",
        sourceCode: "",
        applyDateS: "",
        applyDateE: "",
        custName: "",
        applyEmpName: "",
        carLicense: "",
        vin: ""
      },
      listQuery2: {
        dataInfo1: {
          pickingPersonName: ""
        },

        dataInfo2: []
      },
      listQuery3: {
        OEM_CODE: "",
        GROUP_CODE: "",
        DATE_BEGIN: "",
        DATE_END: "",
        OUT_STORE_CODE: ""
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
    fetchData() {
      this.listLoading = true;
      seBuReturnApplyOrderQueryFindAll(
        this.pageIndex,
        this.pageSize,
        this.listQuery
      ).then(response => {
        if (
          response.data[paApis.seBuReturnApplyOrderQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.seBuReturnApplyOrderQueryFindAll.ServiceCode]
            .rows != ""
        ) {
          this.list =
            response.data[
              paApis.seBuReturnApplyOrderQueryFindAll.ServiceCode
            ].rows;
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
      this.listQuery.sourceCode = "";
      this.listQuery.applyEmpName = "";
      this.listQuery.applyDateS = "";
      this.listQuery.applyDateE = "";
      this.listQuery.custName = "";
      this.listQuery.PART_NO = "";
      this.listQuery.PART_NAME = "";
      this.listQuery.vin = "";
      this.listQuery.returnApplyOrderCode = "";
      this.listQuery.carLicense = "";
    },
    getLookupValue(val) {
      this.listQuery2.dataInfo1.pickingPersonName = val;
    },
    getLookupValue1(val) {
      var saleAmount = "0";
      this.listQuery3.OUT_STORE_CODE = val;
      RepairOutReturnService004(this.listQuery3).then(response => {
        if (
          response.data[paApis.RepairOutReturnService004.ServiceCode].result ===
            "1" &&
          response.data[paApis.RepairOutReturnService004.ServiceCode].rows != ""
        ) {
          this.list2 =
            response.data[paApis.RepairOutReturnService004.ServiceCode].rows;
          this.WAREHOUSE_USER = this.list2[0].WAREHOUSE_USER;
          this.list3 =
            response.data[paApis.RepairOutReturnService004.ServiceCode].rows[0];
          for (var i = 0; i < this.list2.length; i++) {
            saleAmount =
              parseFloat(saleAmount) + parseFloat(this.list2[i].SALE_AMOUNT);
          }
          this.SALE_AMOUNT = saleAmount;
        }
      });
    },
    detailsQuery(row) {
      this.billType = row.billType;
      this.outStoreCode = row.outStoreCode;
    },
    dataDialogVisible() {
      this.listQuery1.outStoreCode = this.listQuery.outStoreCode;
      this.dialogVisible = true;
      seBuReturnApplyOrderDQueryFindAll(this.listQuery1).then(response => {
        if (
          response.data[paApis.seBuReturnApplyOrderDQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.seBuReturnApplyOrderDQueryFindAll.ServiceCode]
            .rows != ""
        ) {
          this.list1 =
            response.data[
              paApis.seBuReturnApplyOrderDQueryFindAll.ServiceCode
            ].rows;
        }
      });
    },
    printf() {
      this.printfDialogVisible = true;
      this.nowTime = this.resetTime();
    },
    printf2() {
      this.$print(this.$refs.print);
    },
    checkDateB() {
      if (
        this.listQuery.applyDateS > this.listQuery.applyDateE &&
        this.listQuery.applyDateE != ""
      ) {
        alert("错误");
        this.listQuery.applyDateS = "";
      }
    },
    checkDateE() {
      if (
        this.listQuery.applyDateE < this.listQuery.applyDateS &&
        this.listQuery.applyDateS != ""
      ) {
        alert("错误");
        this.listQuery.applyDateE = "";
      }
    },
    checkDateB1() {
      if (
        this.listQuery3.applyDateS > this.listQuery3.applyDateE &&
        this.listQuery3.applyDateE != ""
      ) {
        alert("错误");
        this.listQuery3.applyDateS = "";
      }
    },
    checkDateE1() {
      if (
        this.listQuery3.applyDateE < this.listQuery3.applyDateS &&
        this.listQuery3.applyDateS != ""
      ) {
        alert("错误");
        this.listQuery3.applyDateE = "";
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
    number(e) {
      var count = e.target.value;
      let boolean = new RegExp("^[1-9][0-9]*$").test(e.target.value);
      if (!boolean) {
        this.$message.warning("请输入数字");
      }
      this.list1[this.row.index].saleAmount = (
        parseFloat(e.target.value) *
        parseFloat(this.list1[this.row.index].salePrice)
      ).toFixed(2);
      console, log(this.list1[this.row.index].saleAmount);
    },
    getRow(val) {
      (this.row = val), console.log(this.row);
    },
    tableRowClassName({ row, rowIndex }) {
      //把每一行的索引放进row
      row.index = rowIndex;
    },
    saveData() {
      var arr = this.$refs.multipleTable.selection;
      this.listQuery2.dataInfo2 = arr;
      console.log(arr.length);
      if (arr.length == "0") {
        this.$message.warning("请至少选中一行");
        return false;
      }
      if (this.listQuery2.dataInfo1.pickingPersonName == "") {
        this.$message.warning("领料人不能为空");
        return false;
      }

      paBuDlrOutStoreMutationSave(this.listQuery2).then(response => {
        if (
          response.data[paApis.paBuDlrOutStoreMutationSave.ServiceCode]
            .result === "1"
        ) {
          this.$message.success(
            response.data[paApis.paBuDlrOutStoreMutationSave.ServiceCode].msg
          );
        }
      });
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
