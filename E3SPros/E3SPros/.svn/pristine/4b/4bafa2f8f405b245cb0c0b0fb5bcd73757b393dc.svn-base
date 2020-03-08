<!--
* description: 网点对应仓库
* author: chchhui
* createdDate: 2019-08-04
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="textQurey(1)">查询</el-button>
      <el-button size="small" @click="getExcel">导出</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="10">
        <el-col :span="22">
          <el-row>
            <carBrand
              :span="6"
              :isMul="true"
              :code="listQuery.carBrandCode"
              @changeCode="getBrandCode"
            ></carBrand>
            <el-col :span="6">
              <label>经销商</label>
              <el-input
                v-model="listQuery.dlrShortName"
                suffix-icon="el-icon-search"
                @focus="openDlr"
                placeholder="请选择"
                size="small"
                clearable
              ></el-input>
            </el-col>
            <el-col :span="6">
              <label>仓库名称</label>
              <el-select size="small" placeholder="请选择" clearable v-model="listQuery.warehouseName">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.warehouseName"
                  :value="item.warehouseName"
                ></el-option>
              </el-select>
            </el-col>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :code="listQuery.isEnable"
              :lookuptype="lookuptype.isEnable"
              :labelName="lookupValuelable.isEnable"
              @changeCode="getIsEnable"
            />
          </el-row>
        </el-col>
        <el-col :span="2">
          <el-button :icon="toggleParamIcon" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam">
          <el-row>
            <provinceSelect
              :span="6"
              :isMul="false"
              :key="procinceKey"
              :code="listQuery.provinceId"
              @changeCode="getProvinceCode"
            ></provinceSelect>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <dlrChoose
      :seComQueChoDlrVisible="isShowChoose"
      @sentCode="getSentCode"
      @close="closeVisible"
      :isMul="false"
    />
    <netWareHouseCare
      :editData="wareHouseList"
      :key="showWareHouseCare"
      @changeCode="changeState"
      :netWareHouseCareVisibl="showWareHouseCare"
      @visible="handDialogVisibleFunc"
    ></netWareHouseCare>
    <div class="filter-container filter-title">查询结果</div>
    <el-table
      v-loading="listLoading"
      ref="multipleTable"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
    >
      <el-table-column label="序号" type="index" width="60" align="center"></el-table-column>
      <el-table-column prop="carBrandCn" label="经销商品牌" align="center" width="150"></el-table-column>
      <el-table-column prop="dlrCode" label="经销商编码" align="center" width="120"></el-table-column>
      <el-table-column prop="dlrShortName" label="经销商简称" align="center" width="150">
        <template slot-scope="scope">
          <el-button type="text" v-text="scope.row.dlrShortName" @click="changeWareHouse(scope)"></el-button>
        </template>
      </el-table-column>
      <el-table-column prop="provinceName" label="所属省市" align="center" width="120"></el-table-column>
      <el-table-column prop="warehouseName" label="仓库名称" align="center" width="150"></el-table-column>
      <el-table-column prop="isEnable" label="设置状态" align="center" width="90">
        <template
          slot-scope="scope"
        >{{ scope.row.isEnable == null ? '':(scope.row.isEnable =="1"?'启用':'停用') }}</template>
      </el-table-column>
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
import { doQueryList } from "@/api/pa/basedata/paNetToStore";
import carBrand from "@/components/org/carBrand/carBrand";
import provinceSelect from "@/components/org/ProvinceQuery/index";
import netWareHouseCare from "@/components/pa/netWareHouseCare";
import dlrChoose from "@/components/se/seCommonQueryChooseDlr";
import seComQueChoMu from "@/components/se/seComQueryChoDlrMul";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue";
//import { doQueryList } from "@/api/pa/basedata/paNetToStore"
import { paApis } from "@/api/graphQLApiList/pa";
export default {
  name: "pajxsdyck",
  components: {
    dlrChoose,
    carBrand,
    netWareHouseCare,
    seComQueChoMu,
    provinceSelect,
    LookupValue
  },
  data() {
    return {
      toggleParamIcon: "el-icon-plus",
      toggleParam: false,
      isShowChoose: false,
      seComQueChoDlrVisible: false,
      provinceVisible: false,
      isseComQueChoMu: false,
      isMul: false,
      listLoading: false,
      handleTitle: 0,
      dialogVisible: false,
      carBrandKey: "",
      isShowStore: false,
      showWareHouseCare: false,
      getHandleCode: "",
      selectData: "",
      pageTotal: null,
      procinceKey: "",
      list: [],
      lookupValuelable: {
        isEnable: "启用状态"
      },
      lookuptype: {
        isEnable: "VE1003"
      },
      wareHouseList: {},
      pageIndex: 1,
      pageSize: 10,
      options: [],
      listQuery: {
        isEnable: "",
        dlrId: "",
        carBrandCode: "",
        dlrShortName: "",
        provinceId: "",
        warehouseName: "",
        warehouseId: ""
      },
      wearQuery: {}
    };
  },
  created() {
    //this.textQurey();
    this.wearHouseQuery();
  },
  methods: {
    //获取状态值
    getIsEnable(val) {
      this.listQuery.isEnable = val;
    },
    //更多事件
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
      if (!this.toggleParam) {
        this.toggleParamIcon = "el-icon-plus";
      } else {
        this.toggleParamIcon = "el-icon-minus";
      }
    },
    //获取经销商名称
    getSentCode(data) {
      this.listQuery.dlrShortName = data.dlrShortName;
      this.isShowChoose = false;
    },
    openDlr() {
      this.isShowChoose = true;
      //this.seComQueChoDlrVisible = true;
    },
    getDlrCode(data) {
      let str = "";
      for (var i = 0; i < data.length; i++) {
        //alert(typeof (data[i].dlrShortName));
        str += data[i].dlrShortName + ",";
        //console.log(str)
      }
      this.listQuery.dlrShortName = str;
    },
    closeVisible(val) {
      this.isShowChoose = val;
    },

    closeSelect(val) {
      this.provinceVisible = val;
    },
    handleCode(val) {
      this.getHandleCode = val;
    },
    reset() {
      this.listQuery = {
        isEnable: "",
        carBrandCode: "",
        warehouseName: "",
        provinceId: "",
        dlrShortName: ""
      };
      this.textQurey();
    },
    getBrandCode(val) {
      this.listQuery.carBrandCode = val;
    },
    changeWareHouse(scope) {
      this.wareHouseList = scope.row;
      this.showWareHouseCare = true;
    },
    getProvinceCode(val) {
      this.listQuery.provinceId = val;
    },
    getProcince(val) {},
    //测试
    handDialogVisibleFunc(val) {
      this.textQurey();
      this.showWareHouseCare = val;
    },
    changeState() {
      this.showWareHouseCare = false;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.textQurey();
    },
    handleCurrentChange(val) {
      this.pageIndex = val;
      this.textQurey();
    },

    getExcel() {
      var tableColumns = null ? null : this.$refs.multipleTable.columns;
      this.textQurey(
        1,
        "excel",
        "网点对应仓库列表导出",
        "网点对应仓库列表",
        tableColumns
      );
    },

    //仓库查询
    wearHouseQuery(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: paApis.partsOemWareHouseQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["warehouseCode", "warehouseName", "warehouseId"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageIndex: that.pageIndex,
          pageSize: 9999,
          dataInfo: that.wearQuery
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
          that.options =
            response.data[
              paApis.partsOemWareHouseQueryFindAll.ServiceCode
            ].rows;
        }
      });
    },
    //数据查询
    textQurey(
      page,
      dataType = "",
      excelName = "",
      excelSheetName = "",
      tableColumns = null
    ) {
      const that = this;
      that.listLoading = true;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          paApis.netToStoreQueryFindAll.InputType +
          ")",
        // 请求API
        apiUrl: paApis.netToStoreQueryFindAll.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: paApis.netToStoreQueryFindAll.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            //表格中台返回网格的字段
            apiQueryRow: [
              "dlrId",
              "dlrCode",
              "dlrShortName",
              "dlrFullName",
              "provinceName",
              "warehouseId",
              "warehouseCode",
              "warehouseName",
              "remark",
              "creator",
              "createdDate",
              "updateControlId",
              "lastUpdatedDate",
              "dlrStoreId",
              "carBrandCn",
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
          pageSize: that.pageSize,
          pageIndex: page || that.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      if (dataType === "excel") {
        queryObj.variables.pageSize = 99999;
        if (tableColumns == null) tableColumns = [];
        var tmpCols = tableColumns; // .filter(o => o.hidden !== true)
        // 网格列对象转为excel列对象
        var excelCols = {};
        for (var i = 0; i < tmpCols.length; i++) {
          if (tmpCols[i].property != null)
            excelCols[tmpCols[i].property] = tmpCols[i].label;
        }
        // 数据类型
        paramD.dataType = "excel";
        // excel文件名称
        paramD.excelName = excelName;
        // 根据请求API描述excel数据对象
        paramD.excels = [
          {
            // excel sheet名称
            title: excelSheetName,
            // 对应API服务编码
            actionName: queryObj.apiServices[0].apiServiceCode,
            // excel列
            columns: excelCols
          }
        ];
      }
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        let time = new Date();
        let Y = time.getFullYear() + "-";
        let M =
          (time.getMonth() + 1 < 10
            ? "0" + (time.getMonth() + 1)
            : time.getMonth() + 1) + "-";
        let D = time.getDate() + " ";
        let h = time.getHours();
        let m = time.getMinutes();
        let s = time.getSeconds();
        if (dataType == "excel") {
          //导出excel查询
          this.$utils.downloadFile(
            response,
            "网点对应仓库列表导出" +
              Y +
              M +
              D +
              h +
              "：" +
              m +
              "：" +
              s +
              ".xlsx"
          );
          this.listLoading = false;
        } else if (
          response.data[paApis.netToStoreQueryFindAll.ServiceCode].result ===
          "1"
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.pageIndex = page;
          }

          that.pageTotal =
            response.data[paApis.netToStoreQueryFindAll.ServiceCode].records;
          that.list =
            response.data[paApis.netToStoreQueryFindAll.ServiceCode].rows;
          that.listLoading = false;
        } else {
          that.listLoading = false;
          this.$message({
            message:
              response.data[paApis.netToStoreQueryFindAll.ServiceCode].msg,
            type: "warning",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>