<!--
* description: 订单缺件原因
* author: chchhui
* createdDate: 2019-10-09
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="textQuery(1)">查询</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="24">
        <el-col :span="6">
          <label>备件号</label>
          <el-input
            size="small"
            v-model="queryParams.dataInfo.partNo"
            @focus="getPartNo"
            suffix-icon="el-icon-search"
          />
        </el-col>
        <partsChoose
          ref="dlrMoreChoose"
          :paChoosePartVisible="paChoosePartVisible"
          :type="0"
          @close="closeVisible"
          @seChoosePartData="getParts"
        />
        <el-col :span="6">
          <label>备件名称</label>
          <el-input
            size="small"
            v-model="queryParams.dataInfo.partName"
            suffix-icon="el-icon-edit"
          />
        </el-col>
        <el-col :span="6">
          <label class="demonstration">欠拨日期</label>
          <el-date-picker
            v-model="qianbodate"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd HH:mm:ss"
            size="small"
          ></el-date-picker>
        </el-col>
        <LookupValue
          :span="6"
          :isMul="false"
          :isShowLabel="true"
          :code="queryParams.dataInfo.orderType"
          :lookuptype="lookuptype.orderTypeName"
          :labelName="lookupValuelable.orderTypeName"
          @changeCode="getOrderType"
        />
        <!-- <LookupValue
          :options="orderTypeList"
          :span="6"
          :isMul="false"
          :isShowLabel="true"
          labelName="订单类型"
          @changeCode="getOrderType"
          :code="queryParams.dataInfo.orderType"
        />-->
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
import partsChoose from "@/components/se/paChoosePart";
import { doQueryMdsLookupValueByPage } from "@/api/pa/basedata/queryLookupValue";
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
      lookupValuelable: {
        orderTypeName: "订单类型"
      },
      lookuptype: {
        orderTypeName: "PA0025"
      },
      cols: [
        { label: "备件品牌", codeField: "partBrandCn" },
        { label: "紧急程度", codeField: "jinjichengdu" },
        { label: "订单类型", codeField: "orderType" },
        { label: "备件号", codeField: "partNo" },
        { label: "备件名称", codeField: "partName" },
        {
          label: "欠拨修改原因",
          codeField: "qianboyuanyin",
          width: 150,
          isEdit: "true",
          align: "center",
          isComponent: false,
          comps: {
            type: "inputTxt",

            clickEvent: () => null
          }
        },
        { label: "频次", codeField: "pinci" },
        { label: "订货数量", codeField: "dinghuoshuliang" },
        { label: "缺件数量", codeField: "quejianshuliang" },
        { label: "库存", codeField: "kucun" },
        { label: "欠拨仓库", codeField: "qianbocangku" },
        { label: "欠拨生产日期", codeField: "qianbodate" }
      ],
      queryParams: {
        APIUrl: paApis.paOrderShortPartsQuery.APIUrl,
        InputType: paApis.paOrderShortPartsQuery.InputType,
        ServiceCode: paApis.paOrderShortPartsQuery.ServiceCode,
        dataInfo: {
          partNo: "",
          partName: "",
          startTime: "",
          endTime: "",
          orderType: ""
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
          "kucun",
          "qianbocangku",
          "qianbodate"
        ]
      }
    };
  },
  created() {
    this.queryValue();
  },
  methods: {
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
    getPartNo() {
      this.paChoosePartVisible = true;
    },
    getParts(val) {
      this.queryParams.dataInfo.partNo = val.partNo;
      this.queryParams.dataInfo.partName = val.partName;
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
        orderType: ""
      };
    }
  }
};
</script>
<style lang="scss" scoped>
</style>