<!--
* description: 备件仓库查询
* author: chchhui
* createdDate: 2019-10-21
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="textQuery(1)">查询</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="24">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>仓库编码</label>
              <el-input clearable placeholder="请输入" size="small" v-model="listQuery.warehouseCode"></el-input>
            </el-col>
            <el-col :span="6">
              <label>仓库名称</label>
              <el-input clearable placeholder="请输入" size="small" v-model="listQuery.warehouseName"></el-input>
            </el-col>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="isEnable"
              :lookuptype="lookuptype.isEnable"
              :labelName="lookupValuelable.isEnable"
              @changeCode="getIsEnable"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="isCenterWarehouse"
              :lookuptype="lookuptype.isCenterWarehouse"
              :labelName="lookupValuelable.isCenterWarehouse"
              @changeCode="getIsCenterWarehouse"
            />
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button :icon="toggleParamIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam">
          <el-row>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.isVirtualStore"
              :lookuptype="lookuptype.isVirtualStore"
              :labelName="lookupValuelable.isVirtualStore"
              @changeCode="getIsVirtualStore"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.isLogistic"
              :lookuptype="lookuptype.isLogistic"
              :labelName="lookupValuelable.isLogistic"
              @changeCode="getIsLogistic"
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
      highlight-current-row
    >
      <el-table-column prop="id" label="序号" type="index" width="60" align="center"></el-table-column>
      <el-table-column prop="warehouseCode" label="仓库编码" align="center" width="100"></el-table-column>
      <el-table-column prop="warehouseName" label="仓库名称" align="center" width="100"></el-table-column>
      <el-table-column prop="isCenterWarehouseDecode" label="是否中心库" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.isCenterWarehouse == "1" ? '是':'否' }}</template>
      </el-table-column>
      <el-table-column prop="isVirtualStoreDecode" label="是否虚拟库" align="center" width="100">
        <template slot-scope="scope">{{ scope.row.isVirtualStore == "1" ? '是':'否' }}</template>
      </el-table-column>
      <el-table-column prop="isLogisticDecode" label="是否物流库" align="center" width="150">
        <template slot-scope="scope">{{ scope.row.isLogistic == "1" ? '是':'否' }}</template>
      </el-table-column>
      <el-table-column prop="isEnableDecode" label="状态" align="center" width="90">
        <template slot-scope="scope">{{ scope.row.isEnable == "1" ? '启用':'停用' }}</template>
      </el-table-column>
      <el-table-column prop="warehouseAddr" label="仓库地址" align="center" width="250"></el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
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
  </div>
</template>

<script>
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import { doQueryList } from "@/api/pa/basedata/partsOemWareHouseQuery";
import LookupValue from "@/components/org/LookupValue";

export default {
  name: "pabjckcx",
  components: {
    LookupValue
  },
  data() {
    return {
      listLoading: false,
      list: [],
      toggleParam: false,
      isMul: false,
      toggleParamIcon: "el-icon-minus",
      isShowLabel: true,
      pageIndex: 1,
      pageSize: 10,
      limit: 20,
      isEnable: "",
      options: [],
      isCenterWarehouse: "",
      isVirtualStore: "",
      isLogistic: "",
      lookupValuelable: {
        isEnable: "启用状态",
        isCenterWarehouse: "是否中心库",
        isVirtualStore: "是否虚拟库",
        isLogistic: "是否物流库"
      },
      lookuptype: {
        isEnable: "VE1003",
        isCenterWarehouse: "DB0064",
        isVirtualStore: "DB0064",
        isLogistic: "DB0064"
      },
      wearQuery: {},
      listQuery: {
        warehouseCode: undefined,
        warehouseName: undefined,
        isCenterWarehouse: undefined,
        isVirtualStore: undefined,
        isLogistic: undefined,
        isEnable: undefined,
        warehouseAddr: undefined
      }
    };
  },
  created() {},
  methods: {
    textQuery(page) {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // api配置
        apiConfig: paApis.partsOemWareHouseQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "warehouseCode",
              "warehouseName",
              "isCenterWarehouse",
              "isVirtualStore",
              "isLogistic",
              "isEnable",
              "warehouseAddr",
              "remark",
              "updateControlId",
              "isCenterWarehouse",
              "isVirtualStore",
              "isLogistic",
              "isSystem",
              "warehouseId",
              "isEnable",
              "oemId",
              "groupId",
              "oemCode",
              "groupCode"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageIndex: that.pageIndex,
          pageSize: that.pageSize,
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
          response.data[paApis.partsOemWareHouseQueryFindAll.ServiceCode]
            .result === "1"
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }
          that.pageTotal =
            response.data[
              paApis.partsOemWareHouseQueryFindAll.ServiceCode
            ].records;
          that.list =
            response.data[
              paApis.partsOemWareHouseQueryFindAll.ServiceCode
            ].rows;
          that.options = that.list;
          that.listLoading = false;
        } else {
          that.listLoading = false;
        }
      });
    },

    //仓库查询
    // wearHouseQuery(page) {
    //   const that = this;
    //   let queryObj = {
    //     // api配置
    //     apiConfig: paApis.partsOemWareHouseQueryFindAll,
    //     // 需要调用的API服务配置
    //     apiServices: [
    //       {
    //         //表格中台返回网格的字段
    //         apiQueryRow: ["warehouseCode", "warehouseName", "warehouseId"]
    //       }
    //     ],
    //     //条件/实体参数（变量），根据typeParam中的定义配置
    //     variables: {
    //       pageIndex: that.pageIndex,
    //       pageSize: that.pageSize,
    //       dataInfo: that.wearQuery
    //     }
    //   };
    //   //转换了中台请求格式数据
    //   var paramD = that.$getParams(queryObj);
    //   //console.log(paramD)
    //   // 调用中台API方法（可复用）
    //   requestGraphQL(paramD).then(response => {
    //     //console.log(response)
    //     if (
    //       response.data[paApis.partsOemWareHouseQueryFindAll.ServiceCode]
    //         .result === "1"
    //     ) {
    //       that.options =
    //         response.data[
    //           paApis.partsOemWareHouseQueryFindAll.ServiceCode
    //         ].rows;
    //     }
    //   });
    // },
    getIsEnable(val) {
      this.listQuery.isEnable = val;
      this.isEnable = this.listQuery.isEnable;
    },
    getIsCenterWarehouse(val) {
      this.listQuery.isCenterWarehouse = val;
      this.isCenterWarehouse = this.listQuery.isCenterWarehouse;
    },
    getIsVirtualStore(val) {
      this.listQuery.isVirtualStore = val;
      this.isVirtualStore = this.listQuery.isVirtualStore;
    },
    getIsLogistic(val) {
      this.listQuery.isLogistic = val;
      this.isLogistic = this.listQuery.isLogistic;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (!this.toggleParam) {
        this.toggleParamIcon = "el-icon-minus";
      } else {
        this.toggleParamIcon = "el-icon-plus";
      }
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.textQuery();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQuery();
    },
    reset() {
      this.isEnable = "";
      this.isCenterWarehouse = "";
      this.isVirtualStore = "";
      this.isLogistic = "";
      this.listQuery = {};
    }
  }
};
</script>

<style lang="scss" scoped>
</style>