<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <txtCustomerName :txt_CustomerName="form.custName" ref="custName"></txtCustomerName>
            </el-col>
            <el-col :span="6">
              <ContactWay
                :ContactWay="form.cantactWayCode"
                @changeCode="cwchange"
                ref="cantactWayCode"
              ></ContactWay>
            </el-col>
            <el-col :span="6">
              <ChannelBigClass :ChannelBigClass="form.infoChanMCode" ref="infoChanMCode"></ChannelBigClass>
            </el-col>
            <el-col :span="6">
              <ChannelSmalTypeName :ChannelSmalTypeName="form.infoChanDName" ref="infoChanDName"></ChannelSmalTypeName>
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <PhoneNumber :PhoneNumber="form.contactTel" ref="contactTel"></PhoneNumber>
              </el-col>
              <el-col :span="6">
                <BuildMenuDates :dt_BuildMenuDates="build" ref="Build"></BuildMenuDates>
              </el-col>
              <el-col :span="6">
                <sctCarBrand :sct_CarBrand="form.carBrandCode" ref="carBrandCode"></sctCarBrand>
              </el-col>
              <el-col :span="6">
                <NumberOfCleanings :NumberOfCleanings="form.cleanQty" ref="cleanQty"></NumberOfCleanings>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <ClueNumber :ClueNumber="form.serverOrder" ref="serverOrder"></ClueNumber>
              </el-col>
              <el-col :span="6">
                <IntentionLevel :IntentionLevel="form.clueLevelCode" ref="clueLevelCode"></IntentionLevel>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm" ref="resultTitleHeight">查询结果</div>
    <el-row class="table">
      <el-table
      ref="table"
      :style="{width:'100%',height:tableHeight+'px'}"
        :data="tabledatas.tableDatas"
        :stripe="tabledatas.flag"
        highlight-current-row
        v-loading.body="listLoading"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column label="操作" width="100" align="center">
          <!-- scope.row:选中的一行数据 -->
          <!-- 打开线索详情（带值） -->
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handle(scope.$index, scope.row)">处理</el-button>
          </template>
        </el-table-column>
        <!-- 打开线索跟进历史查询（带值） -->
        <el-table-column
          v-for="item in tabledatas.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          :width="item.width"
          align="center"
        ></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tabledatas.total"
        :page-size="tabledatas.pagesize"
        :current-page="tabledatas.pageindex"
        @prev-click="prev"
        @next-click="next"
        @current-change="changepage"
      ></el-pagination>
    </el-row>
  </div>
</template>
<script>
import txtCustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates";
import sctCarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import NumberOfCleanings from "@/components/crm/textbox/Clue/CallCenterClue/NumberOfCleanings";
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmToBeCleanClue",
  components: {
    txtCustomerName,
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName,
    PhoneNumber,
    BuildMenuDates,
    sctCarBrand,
    NumberOfCleanings,
    ClueNumber,
    IntentionLevel,
    Table
  },
   mounted() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  data() {
    return {
      listLoading: false,
      toggleParam: false,
      tableHeight:'',
      build: {
        value: []
      },

      form: {
        custName: {
          input: ""
        },
        cantactWayCode: {
          value: ""
        },
        infoChanMCode: {
          value: "",
          pcode: ""
        },
        infoChanDName: {
          input: ""
        },
        contactTel: {
          input: ""
        },
        carBrandCode: {
          value: ""
        },
        cleanQty: {
          input: ""
        },
        serverOrder: {
          input: ""
        },
        clueLevelCode: {
          value: ""
        }
      },
      isdisplay: {
        ismuti: false
      },
      tabledatas: {
        flag: true,
        tableDatas: [],
        colnames: [
          { label: "客户姓名", value: "custName", width: "100" },
           { label: "客户电话", value: "contactTel", width: "100" },
          { label: "接触方式", value: "cantactWayName", width: "150" },
          { label: "渠道大类", value: "infoChanMName", width: "100" },
          { label: "渠道小类", value: "infoChanDName", width: "100" },
          { label: "意向级别", value: "clueLevelCode", width: "100" },
          { label: "意向车系", value: "carSeriesCn", width: "100" },
          { label: "意向车型", value: "inteTypeName", width: "200" },
          { label: "清洗次数", value: "cleanQty", width: "100" },
          { label: "预计回访时间", value: "nextCallbackDate", width: "200" },
          { label: "最后一次回访时间", value: "reviewTimes", width: "200" },
          { label: "车辆品牌", value: "carBrandName", width: "150" },
          { label: "线索单号", value: "serverOrder", width: "200" },
          { label: "建单时间", value: "createdDate", width: "200" },
          { label: "清洗状态", value: "cleanFlagName", width: "100" }
        ],
        queryObj: {
          apiConfig: crmApis.clueServerQueryFromHeadquarters,
          apiQueryRow: [
            "custName",
            "contactTel",
            "custId",
            "cantactWayName",
            "cantactWayCode",
            "infoChanMName",
            "infoChanMCode",
            "infoChanDName",
            "infoChanDCode",
            "clueLevelCode",
            "inteSeriesCode",
            "carSeriesCn",
            "inteTypeCode",
            "inteTypeName",
            "carBrandName",
            "cleanQty",
            "nextCallbackDate",
            "reviewTimes",
            "carBrandCode",
            "serverOrder",
            "createdDate",
            "cleanFlagName",
            "cleanFlag"
          ],
          params: {
            custName: "",
            cantactWayCode: "",
            infoChanMCode: "",
            infoChanDName: "",
            contactTel: "",
            carBrandCode: "",
            serverOrder: "",
            clueLevelCode: ""
          }
        },
        pagesize: 8,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    query() {
      let that = this;
      that.listLoading = true;
      for (let key in that.tabledatas.queryObj.params) {
        if (that.form[key] && "input" in that.form[key]) {
          that.tabledatas.queryObj.params[key] = that.$refs[key].input;
        } else if (that.form[key] && "value" in that.form[key]) {
          that.tabledatas.queryObj.params[key] = that.$refs[key].value;
        }
      }
      that.tabledatas.queryObj.params.handleCode = "0";
      that.tabledatas.queryObj.params.statusArray = ["1", "3", "4"];
      if (that.$refs.cleanQty.input != "") {
        that.tabledatas.queryObj.params.cleanQty = that.$refs.cleanQty.input;
      }
      if (that.$refs.Build.value[0]) {
        that.tabledatas.queryObj.params.createdDateStart =
          that.$refs.Build.value[0] + " 00:00:01";
        that.tabledatas.queryObj.params.createdDateStart =
          that.$refs.Build.value[1] + " 23:59:59";
      }
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableDatas = data.rows;
        }
      );
    },
    cwchange(val) {
      let that = this;
      that.form.infoChanMCode.pcode = val;
      that.$refs.infoChanMCode.getData();
    },
    prev(index) {
      let that = this;
      if (this.tabledatas.pageIndex > 1) {
        that.tabledatas.pageIndex = index;
        this.query();
      }
    },
    next(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    },
    handle: function(index, rowData) {
      let that = this;
      this.$crmcf.jumpDetailTag(
        that,
        "crmToBeCleanClueDetail",
        "/crmToBeCleanClueDetail",
        rowData
      );
      // that.$router.push({ name: "crmToBeCleanClueDetail", params: rowData });
    },
    reset: function() {
      this.$refs.custName.reset();
      this.$refs.cantactWayCode.reset();
      this.$refs.infoChanMCode.reset();
      this.$refs.infoChanDName.reset();
      this.$refs.contactTel.reset();
      this.$refs.Build.reset();
      this.$refs.carBrandCode.reset();
      this.$refs.cleanQty.reset();
      this.$refs.serverOrder.reset();
      this.$refs.clueLevelCode.reset();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }
  }
};
</script>
<style>
</style>