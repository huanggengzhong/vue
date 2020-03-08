<!--
* description: 备件采购入库退货
* author: chchhui
* createdDate: 2019-0-24
* logs：
*  20190720 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="textQurey(1)">查询</el-button>
      <el-button size="small" @click="submitSave">保存</el-button>
      <el-button size="small">打印</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.billType"
              :lookuptype="lookuptype.billType"
              :labelName="lookupValuelable.billType"
              @changeCode="billType"
            />
            <el-col :span="6">
              <label>入库单号</label>
              <el-input
                v-model="listQuery.inStoreCode"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>入库时间</label>
              <el-date-picker
                v-model="listQuery.beginInStoreDate"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
                @blur="checkDateB"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <label>至</label>
              <el-date-picker
                v-model="listQuery.endInStoreDate"
                type="date"
                placeholder="选择日期"
                value-format="yyyy-MM-dd"
                @blur="checkDateE"
              ></el-date-picker>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam" style="z-index:2001">
          <el-row>
            <el-col :span="6">
              <label>关联单号</label>
              <el-input
                v-model="listQuery.relateOrderCode"
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
              />
            </el-col>
            <el-col :span="6">
              <label>供应商</label>
              <el-input
                v-model="listQuery.supplierId"
                suffix-icon="el-icon-search"
                placeholder="请选择"
                size="small"
              />
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title">入库单主表</div>
    <el-table
      height="170"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
    >
      <el-table-column label="序号" width="60" type="index" align="center" fixed></el-table-column>
      <el-table-column prop="billType" label="入库类型" width="100" align="center" fixed></el-table-column>
      <el-table-column prop="inStoreCode" label="入库单号" width="170" align="center" fixed>
        <template slot-scope="scope">
          <el-button type="text" @click="getOrderDetails(scope)">{{scope.row.inStoreCode}}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="inStoreDate" label="入库时间" width="150" align="center"></el-table-column>
      <el-table-column prop="sourceOrderCode" label="原始单据编码" width="130" align="center"></el-table-column>
      <el-table-column prop="inStoreAmount" label="入库金额(含税)" align="center" width="110"></el-table-column>
      <el-table-column prop="taxRate" label="入库税率" width="80" align="center"></el-table-column>
      <el-table-column prop="storeCostAmount" label="入库金额(不含税)" width="130" align="center"></el-table-column>
      <el-table-column prop="inStoreVarietyNum" label="入库品种" width="80" align="center"></el-table-column>
      <el-table-column prop="supplierShortName" label="供应商名称" width="100" align="center"></el-table-column>
      <el-table-column prop="relateOrderCode" label="关联单号" align="center"></el-table-column>
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
    />
    <div class="filter-container filter-title">订单明细</div>
    <el-table
      height="165"
      :data="bottomList"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
    >
      <el-table-column label="序号" width="60" type="index" align="center" fixed></el-table-column>
      <el-table-column prop="partBrandCode" label="备件品牌" width="100" align="center" fixed></el-table-column>
      <el-table-column prop="partNo" label="备件号" width="160" align="center" fixed></el-table-column>
      <el-table-column prop="unit" label="单位" width="60" align="center"></el-table-column>
      <el-table-column prop="hasReturnQty" label="已退数量" align="center" width="80"></el-table-column>

      <el-table-column prop="storeQty" label="库存数量" width="80" align="center"></el-table-column>
      <el-table-column prop="canReturnQty" label="可退数量" width="80" align="center"></el-table-column>
      <el-table-column prop="warehouseName" label="仓库名称" width="100" align="center"></el-table-column>
      <el-table-column prop="placeCode" label="仓位编码" width="80" align="center"></el-table-column>
      <el-table-column prop="returnQty" label="本次退货数量+" width="110" align="center">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.returnQty"
            size="small"
            align="center"
            @blur="number($event)"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="inStorePrice" label="退货单价" width="80" align="center"></el-table-column>
      <el-table-column prop="inStoreAmount" label="退货金额" width="90" align="center"></el-table-column>
      <el-table-column prop="storePrice" label="库存成本单价(含税)" width="140" align="center"></el-table-column>
      <el-table-column prop="storePriceAmount" label="本次库存成本总价(含税)" width="160" align="center"></el-table-column>
      <el-table-column prop="storeCost" label="库存成本单价(不含税)" width="160" align="center"></el-table-column>
      <el-table-column prop="storeCostAmount" label="本次库存成本总价(不含税)" width="170" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue";
export default {
  components: {
    LookupValue
  },

  data() {
    return {
      isMul: false,
      isShowLabel: true,
      lookupValuelable: {
        billType: "入库类型"
      },
      lookuptype: {
        billType: "VE0052"
      },
      list: null,
      bottomList: null,
      row: undefined,
      rowCode: undefined,
      listLoading: true,
      submitSelectData: null,
      cleanData: false,
      toggleParam: false,
      pageIndex: 1,
      pageSize: 10,
      bottomListQuery: {
        inStoreId: undefined
      },
      listQuery: {
        billType: undefined,
        inStoreCode: undefined,
        relateOrderCode: undefined,
        supplierId: undefined,
        beginInStoreDate: undefined,
        endInStoreDate: undefined
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    //this.textQurey();
  },
  methods: {
    checkDateB() {
      if (
        this.listQuery.beginInStoreDate > this.listQuery.endInStoreDate &&
        this.listQuery.endInStoreDate != ""
      ) {
        alert("错误");
        this.listQuery.beginInStoreDate = "";
      }
    },
    checkDateE() {
      if (
        this.listQuery.endInStoreDate < this.listQuery.beginInStoreDate &&
        this.listQuery.beginInStoreDate != ""
      ) {
        alert("错误");
        this.listQuery.endInStoreDate = "";
      }
    },
    tableRowClassName({ row, rowIndex }) {
      //把每一行的索引放进row
      row.index = rowIndex;
    },
    number(e) {
      var count = e.target.value;
      let boolean = new RegExp("^[1-9][0-9]*$").test(e.target.value);
      if (!boolean) {
        this.$message.warning("请输入数字");
      }
      this.bottomList[this.row.index].inStoreAmount = (
        parseFloat(e.target.value) *
        parseFloat(this.list1[this.row.index].inStorePrice)
      ).toFixed(2);
      console, log(this.list1[this.row.index].inStoreAmount);
    },
    getOrderDetails(scope) {
      this.rowCode = scope.row;
      this.bottomListQuery.inStoreId = scope.row.inStoreId;
      this.orderDetailQurey();
    },

    billType(val) {
      this.listQuery.billType = val;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.textQurey();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQurey();
    },

    //主表数据请求
    textQurey(page) {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: paApis.paBuDlrInStoreQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "billType",
              "billTypeName",
              "inStoreId",
              "inStoreCode",
              "inStoreDate",
              "sourceOrderCode",
              "relateOrderId",
              "warehouseEmpName",
              "remark",
              "inStoreAmount",
              "storeCostAmount",
              "taxRate",
              "inStoreVarietyNum",
              "supplierId",
              "supplierShortName",
              "relateOrderCode",
              "updateControlId",
              "oemId",
              "groupId",
              "oemCode",
              "groupCode"
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
          response.data[paApis.paBuDlrInStoreQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuDlrInStoreQueryFindAll.ServiceCode].rows !=
            ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.paBuDlrInStoreQueryFindAll.ServiceCode
            ].records;
          that.list =
            response.data[paApis.paBuDlrInStoreQueryFindAll.ServiceCode].rows;
        }
        that.listLoading = false;
      });
    },

    //订单详细查询
    orderDetailQurey(page) {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: paApis.paBuDlrInStoreDQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "partBrandCode",
              "partId",
              "partNo",
              "partName",
              "unit",
              "inStoreQty",
              "hasReturnQty",
              "storeQty",
              "canReturnQty",
              "returnQty",
              "inStorePrice",
              "inStoreAmount",
              "storePrice",
              "storePriceAmount",
              "storeCost",
              "storeCostAmount",
              "warehouseName",
              "placeCode",
              "oemId",
              "groupId",
              "oemCode",
              "groupCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.bottomListQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response)
        if (
          response.data[paApis.paBuDlrInStoreDQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuDlrInStoreDQueryFindAll.ServiceCode].rows !=
            ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.paBuDlrInStoreDQueryFindAll.ServiceCode
            ].records;
          that.bottomList =
            response.data[paApis.paBuDlrInStoreDQueryFindAll.ServiceCode].rows;
        }
        that.listLoading = false;
      });
    },

    //退货详细保存
    submitSave() {
      const that = this;
      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        typeParam:
          "($dataInfo:InputPaBuDlrInStore,$dataInfoD:[InputPaBuDlrInStoreDExt])",
        // api配置
        apiConfig: paApis.paBuDlrInStoreMutationSave,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiServiceParam: "(dataInfo:$dataInfo,dataInfoD:$dataInfoD)"
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.rowCode,
          dataInfoD: that.bottomList
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (
          response.data[paApis.paBuDlrInStoreMutationSave.ServiceCode]
            .result === "1"
        ) {
          // 通过后提示保存成功信息
          this.$message({ message: "保存成功", type: "success" });
        }
      });
    },
    reset() {
      this.listQuery.billType = undefined;
      this.listQuery.inStoreCode = undefined;
      this.listQuery.relateOrderCode = undefined;
      this.listQuery.supplierId = undefined;
      this.listQuery.beginInStoreDate = undefined;
      this.listQuery.endInStoreDate = undefined;
    },

    cellClick(row, column, cell, event) {
      //再次查询刷新网格
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
/deep/ .tableInput {
  width: 90px;
}
/deep/ .el-table {
  height: 174px;
}
/deep/ .part {
  color: blue;
  cursor: pointer;
}
/deep/ .margin-r-0 {
  margin-right: 0;
}
/deep/ .margin-b-0 {
  margin-bottom: 0;
}
/deep/ .margin-t-8 {
  margin-top: 8px;
}
/* /deep/ .filter-button {
  width: 1000px;
  float: right;
} */
</style>