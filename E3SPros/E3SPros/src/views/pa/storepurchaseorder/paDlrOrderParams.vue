<!--
* description: 经销商订货参数
* author: chchhui
* createdDate: 2019-10-10
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="textQuery(1)">查询</el-button>
      <el-button size="small">导出</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="24">
        <LookupValue
          :span="6"
          :isMul="false"
          :isShowLabel="true"
          :code="queryParams.dataInfo.orderType"
          :lookuptype="lookuptype.orderTypeName"
          :labelName="lookupValuelable.orderTypeName"
          @changeCode="getOrderType"
        />
        <el-col :span="6">
          <label>经销商编码</label>
          <el-input
            size="small"
            v-model="queryParams.dataInfo.partNo"
            @focus="getPartNo"
            suffix-icon="el-icon-search"
          />
        </el-col>
        <partsChoose
          ref="dlrMoreChoose"
          :seComQueChoDlrVisible="paChoosePartVisible"
          @close="closeVisible"
          @sentCode="getParts"
        />
        <el-col :span="6">
          <label>经销商名称</label>
          <el-input
            size="small"
            v-model="queryParams.dataInfo.partName"
            suffix-icon="el-icon-edit"
          />
        </el-col>
        <LookupValue
          :options="carBrandList"
          :span="6"
          :isMul="true"
          :isShowLabel="true"
          labelName="品牌"
          @changeCode="getCarBrand"
          :code="queryParams.dataInfo.carBrandCode"
        />
      </el-row>
    </div>
    <mix-table
      ref="tableList"
      :queryParams="queryParams"
      :dynamicTableCols="cols"
      :isShowSelect="false"
      :isPaging="true"
      :isDialog="false"
    />
  </div>
</template>
<script>
import mixTable from "@/components/basicComponent/mixTable";
import mixForm from "@/components/basicComponent/mixForm";
import partsChoose from "@/components/se/seCommonQueryChooseDlr";
import { doQueryMdsLookupValueByPage } from "@/api/se/process/workorder/repairWorkOrderEdit";
import { paApis } from "@/api/graphQLApiList/pa";
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import LookupValue from "@/components/org/LookupValue";
import { type } from "os";

export default {
  components: {
    mixTable,
    mixForm,
    LookupValue,
    partsChoose
  },

  data() {
    return {
      paChoosePartVisible: false,
      orderTypeList: [],
      qianbodate: [],
      carBrandList: [],
      lookupValuelable: {
        orderTypeName: "所属仓库",
        carBrandName: "品牌"
      },
      lookuptype: {
        orderTypeName: "PA0025",
        carBrandCode: "PA0025"
      },
      cols: [
        { label: "经销商编码", codeField: "partBrandCn" },
        { label: "经销商名称", codeField: "jinjichengdu" },
        { label: "所属仓库", codeField: "orderType" },
        { label: "是否卖一买一", codeField: "partNo" },
        { label: "卖一买一月数", codeField: "partName" },
        { label: "安全库存天数", codeField: "pinci" },
        { label: "库存上下限", codeField: "dinghuoshuliang" },
        { label: "常备件月数", codeField: "quejianshuliang" },
        { label: "月最小出库数", codeField: "kucun" }
      ],
      queryParams: {
        APIUrl: paApis.paDlrOrderParamsQuery.APIUrl,
        InputType: paApis.paDlrOrderParamsQuery.InputType,
        ServiceCode: paApis.paDlrOrderParamsQuery.ServiceCode,
        dataInfo: {
          partNo: "",
          partName: "",
          startTime: "",
          endTime: "",
          orderType: "",
          carBrandCode: ""
        },
        apiQueryRow: [
          "partBrandCn",
          "jinjichengdu",
          "orderType",
          "partNo",
          "partName",
          "qianboyuanyin",
          "pinci",
          "dinghuoshuliang",
          "quejianshuliang",
          "kucun"
        ]
      }
    };
  },
  created() {
    this.queryValue();
    this.initFetchData();
  },
  methods: {
    initFetchData() {
      const that = this;
      let queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          orgApis.mdmCarBrandQueryByPage.InputType +
          ")",
        // 请求API
        apiUrl: orgApis.mdmCarBrandQueryByPage.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: orgApis.mdmCarBrandQueryByPage.ServiceCode,
            // API服务编码&参数
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: ["carBrandCn", "carBrandCode"]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 1000,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            isEnable: "1"
          }
        }
      };
      //转换了中台请求格式数据
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.result === "1") {
          that.carBrandList =
            response.data[orgApis.mdmCarBrandQueryByPage.ServiceCode].rows;
          that.carBrandList.map(function(item, i) {
            item.lookupValueCode = item.carBrandCode;
            item.lookupValueName = item.carBrandCn;
          });
        } else {
          this.$message({
            message: "查询失败：" + response.msg,
            type: "warn",
            uration: 2000
          });
        }
        that.listLoading = false;
      });
    },
    // 值列表请求
    queryValue() {
      doQueryMdsLookupValueByPage(9999, 1, {
        isEnable: "1",
        lookupTypeCode: "PA0025"
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
                orderTypeName: row.lookupValueName
              });
            });
            this.orderTypeList = tempOptions; //下拉列表赋值
            //console.log(this.transitTypeChoose);
          }
        });
    },
    getCarBrand(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    getPartNo() {
      this.paChoosePartVisible = true;
    },
    getParts(val) {
      this.queryParams.dataInfo.partNo = val.partNo;
      this.queryParams.dataInfo.partName = val.dlrShortName;
      this.paChoosePartVisible = false;
    },
    closeVisible(val) {
      this.paChoosePartVisible = val;
    },
    getOrderType(val) {
      this.queryParams.dataInfo.orderType = val;
    },
    textQuery() {
      this.queryParams.dataInfo.startTime = this.qianbodate[0];
      this.queryParams.dataInfo.endTime = this.qianbodate[1];

      this.$refs.tableList.queryList();
    },
    reset() {
      this.qianbodate = [];
      this.queryParams.dataInfo = {
        partNo: "",
        partName: "",
        startTime: "",
        endTime: "",
        orderType: "",
        carBrandCode: ""
      };
    }
  }
};
</script>
<style lang="scss" scoped>
</style>