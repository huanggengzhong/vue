<!--
* description: 备件采购入库
* author: chchhui
* createdDate: 2019-08-24
* logs：
*  20190824 新增页面功能
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button size="small" type="primary">保存</el-button>
      <el-button size="small" @click="printInWearReady">打印入库准备单</el-button>
      <el-button size="small">打印入库单</el-button>
    </div>
    <printPage :printVisible="printVisible" @changeCode="changeCode" />
    <el-row :gutter="24">
      <el-col :span="6" class="leftContent">
        <div class="filter-container filter-title">查询关联单据</div>
        <div class="filter-container filter-params">
          <el-row :gutter="24">
            <el-col :span="24">
              <label>关联单号</label>
              <el-input
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
                class="fristInput"
                v-model="listQuery.purOrderCode"
              />
            </el-col>
            <!-- <LookupValue
              :span="24"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.billType"
              :lookuptype="lookuptype.billType"
              :labelName="lookupValuelable.billType"
              @changeCode="billType"
            />-->
          </el-row>
        </div>
        <div class="filter-container filter-title">入库关联单据列表</div>
        <div class="filter-container filter-params">
          <el-row>
            <el-aside class="side">
              <el-tree
                :data="treeData"
                :props="defaultProps"
                accordion
                @node-click="handleTreeNodeClick"
              ></el-tree>
            </el-aside>
          </el-row>
        </div>
      </el-col>
      <el-col :span="18" class="rightContent">
        <div class="filter-container filter-title">入库关联信息</div>
        <div class="filter-container filter-params">
          <el-row :gutter="24">
            <el-col :span="8">
              <label>供应商</label>
              <el-input
                suffix-icon="el-icon-search"
                placeholder="请输入"
                size="small"
                disabled="true"
                v-model="formCode.supplierShortName"
              />
            </el-col>
            <el-col :span="8">
              <label>入库汇率(%)</label>
              <el-input
                placeholder="请输入"
                size="small"
                v-model="formCode.taxRate"
                disabled="formCode.taxRate=='' ? 'false' : 'true'"
              />
            </el-col>
            <el-col :span="8">
              <label>备注</label>
              <el-input placeholder="请输入" size="small" v-model="remark" />
            </el-col>
          </el-row>
        </div>
        <div class="filter-container filter-title">入库备件信息</div>
        <el-table
          :data="list"
          element-loading-text="Loading"
          border
          fit
          stripe
          :header-cell-style="tableHeaderRowClassName"
        >
          <el-table-column label="序号" width="60" type="index" align="center" fixed></el-table-column>
          <el-table-column prop="relateOrderCode" label="总部出库单号" width="140" align="center" fixed></el-table-column>
          <el-table-column prop="partBrandCode" label="备件编码" width="150" align="center"></el-table-column>
          <el-table-column prop="partName" label="备件名称" width="100" align="center"></el-table-column>
          <el-table-column prop="unit" label="单位" width="80" align="center"></el-table-column>
          <el-table-column prop="warehouseName" label="仓库名称+" align="center" width="120"></el-table-column>
          <el-table-column prop="placeCode" label="仓位编码+" width="100" align="center"></el-table-column>
          <el-table-column prop="canInQty" label="可入库数量" width="100" align="center"></el-table-column>
          <el-table-column prop="inQty" label="入库数量+" width="100" align="center"></el-table-column>
          <el-table-column prop="inPrice" label="入库单价+" width="100" align="center"></el-table-column>
          <el-table-column prop="supplierShortName" label="网点价" width="80" align="center"></el-table-column>
          <el-table-column prop="inAmount" label="入库金额" width="90" align="center"></el-table-column>
          <el-table-column prop="storePriceAmount" label="入库成本总价(含税)" width="160" align="center"></el-table-column>
          <el-table-column prop="storeCostAmount" label="入库成本总价(不含税)" width="170" align="center"></el-table-column>
          <el-table-column prop="partBrandName" label="备件品牌" width="100" align="center"></el-table-column>
          <el-table-column prop="supplierShortName" label="备件类型" width="100" align="center"></el-table-column>
          <el-table-column prop="pubCarTypeName" label="适用车型" width="100" align="center"></el-table-column>
          <el-table-column prop="sourceOrderCode" label="订单号" width="160" align="center"></el-table-column>
          <el-table-column prop="supplierShortName" label="主机厂出货数量" width="160" align="center"></el-table-column>
          <el-table-column prop="supplierShortName" label="已入库数量" width="160" align="center"></el-table-column>
          <el-table-column prop="supplierShortName" label="原件号" width="160" align="center"></el-table-column>
          <el-table-column prop="supplierShortName" label="原件名称" width="160" align="center"></el-table-column>
          <el-table-column prop="supplierShortName" label="原件数量" width="160" align="center"></el-table-column>
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
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { doQueryMdsLookupValueByPage } from "@/api/se/process/workorder/repairWorkOrderEdit";
import { orgApis } from "@/api/graphQLApiList/org";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue";
import printPage from "./printPage";
export default {
  components: {
    LookupValue,
    printPage
  },

  data() {
    return {
      isMul: false,
      printVisible: false,
      isShowLabel: true,
      lookupValuelable: {
        billType: "入库类型"
      },
      lookuptype: {
        billType: "PA0020"
      },
      list: [],
      bottomList: null,
      listLoading: true,
      submitSelectData: null,
      cleanData: false,
      toggleParam: false,
      pageIndex: 1,
      pageSize: 10,
      limit: 20,
      remark: "",
      formCode: {
        supplierShortName: "",
        taxRate: ""
      },
      arr: [
        {
          label: ""
        }
      ],
      orderQuery: {
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        billType: "",
        relateOrderId: ""
      },
      listQuery: {
        dlrId: this.$store.getters.orgInfo.DLR_ID,
        billType: "",
        purOrderCode: ""
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      treeData: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  created() {
    this.queryValue();
  },
  methods: {
    // 获取值列表
    queryValue() {
      doQueryMdsLookupValueByPage(9999, 1, {
        isEnable: "1",
        lookupTypeCode: "PA0020"
      }) //值类型编码
        .then(response => {
          var retData =
            response.data[orgApis.mdsLookupValueQueryByPage.ServiceCode];
          if (retData.result === "1" && retData.rows !== "") {
            const tempList = retData.rows;
            var tempOptions = [];
            tempList.forEach(row => {
              tempOptions.push({
                orderTypeCode: row.lookupValueCode,
                label: row.lookupValueName,
                children: this.arr
              });
            });
            this.treeData = tempOptions; //下拉列表赋值
            //console.log(this.transitTypeChoose);
          }
        });
    },
    printInWearReady() {
      this.printVisible = true;
    },
    handleTreeNodeClick(data) {
      console.log(data);
      if (data.orderTypeCode) {
        this.orderQuery.billType = data.orderTypeCode;
        this.listQuery.billType = data.orderTypeCode;
        this.outStoreQuery();
        return;
      }
      if (!data.billType) {
        this.orderQuery.relateOrderId = data.relateOrderId;
        this.orderDetailQuery();
        this.supplierQuery();
        console.log(this.orderQuery);
      }
    },
    changeCode(val) {
      this.printVisible = false;
    },
    billType(val) {
      this.listQuery.billType = val;
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    //供应商查询
    supplierQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.paBuOemOutStoreQueryFindSupplier,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["supplierId", "supplierShortName"]
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
        //console.log(response);
        if (
          response.data[paApis.paBuOemOutStoreQueryFindSupplier.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuOemOutStoreQueryFindSupplier.ServiceCode]
            .rows != ""
        ) {
          let obj =
            response.data[paApis.paBuOemOutStoreQueryFindSupplier.ServiceCode]
              .rows;
          that.listQuery.supplierShortName = obj.supplierShortName;
        }
      });
    },
    //明细查询
    orderDetailQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.paBuOemOutStoreDQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "partId",
              "partNo",
              "partName",
              "partBrandCode",
              "unit",
              "partType",
              "dlrPrice",
              "warehouseId",
              "warehouseName",
              "placeCode",
              "placeId",
              "oldWarehouseId",
              "outStoreQty",
              "hasInQty",
              "canInQty",
              "wellQty",
              "badnessQty",
              "badnessReson",
              "inQtyTemp",
              "inPrice",
              "inAmount",
              "storePriceAmount",
              "storeCostAmount",
              "oldPartNo",
              "oldPartName",
              "oldPartQty",
              "sourceOrderCode",
              "relateOrderDId",
              "taxRate",
              "relateOrderCode",
              "consignBillNo",
              "relateOrderId",
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
          dataInfo: that.orderQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      //console.log(paramD)
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        //console.log(response);
        if (
          response.data[paApis.paBuOemOutStoreDQueryFindAll.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuOemOutStoreDQueryFindAll.ServiceCode].rows !=
            ""
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.list =
            response.data[paApis.paBuOemOutStoreDQueryFindAll.ServiceCode].rows;
        }
      });
    },
    //采购单号查询
    outStoreQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.paBuOemOutStoreQueryFindAllOrderCode,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "purOrderCode",
              "purOrderType",
              "relateOrderCode",
              "relateOrderId",
              "updateControlId"
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
        //console.log(response);
        if (
          response.data[paApis.paBuOemOutStoreQueryFindAllOrderCode.ServiceCode]
            .result === "1" &&
          response.data[paApis.paBuOemOutStoreQueryFindAllOrderCode.ServiceCode]
            .rows != ""
        ) {
          var arr =
            response.data[
              paApis.paBuOemOutStoreQueryFindAllOrderCode.ServiceCode
            ].rows;
          const list = arr;
          var listArr = [];
          list.forEach(item => {
            listArr.push({
              label: item.purOrderCode,
              relateOrderId: item.relateOrderId
            });
          });
          console.log(listArr);
          for (var i = 0; i < that.treeData.length; i++) {
            if (that.listQuery.billType == that.treeData[i].orderTypeCode) {
              that.treeData[i].children = listArr;
            }
          }
          console.log(that.treeData);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>