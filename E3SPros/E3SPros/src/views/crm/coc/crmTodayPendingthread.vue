<!--
* 描述: 本人当日待回访线索
* 创建人: dxuem
* 创建时间: 2019-07-15 11:44
* 记录：
*  20190803 新建 hejin
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="query(1)">查询</el-button>
      <el-button size="small" @click="query(2)">导出</el-button>
      <el-button size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <txt_CustomerName :txt_CustomerName="Ftxt_CustomerName" ref="Ftxt_CustomerName"></txt_CustomerName>
              </el-col>
              <el-col :span="6">
                <PhoneNumber :PhoneNumber="FPhoneNumber" ref="FPhoneNumber"></PhoneNumber>
              </el-col>
              <el-col :span="6">
                <ServiceMenuNumber :ServiceMenuNumber="FServiceMenuNumber" ref="FServiceMenuNumber"></ServiceMenuNumber>
              </el-col>
              <el-col :span="6">
                <NextReturnVisitTimes
                  :NextReturnVisitTimes="FNextReturnVisitTimes"
                  ref="FNextReturnVisitTimes"
                ></NextReturnVisitTimes>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam">更多</el-button>
          </el-col>

          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <!--第二行-->
            <el-row style="border:none">
              <el-col :span="6">
                <ContactWay
                  :ContactWay="FContactWay"
                  ref="FContactWay"
                  @changeCode="contactWayChange"
                ></ContactWay>
              </el-col>
              <el-col :span="6">
                <ChannelBigClass
                  :ChannelBigClass="FChannelBigClass"
                  ref="FChannelBigClass"
                  @changeCode="channelBigClassChange"
                ></ChannelBigClass>
              </el-col>
              <el-col :span="6">
                <FirstReturnVisitOrNot
                  :FirstReturnVisitOrNot="FFirstReturnVisitOrNot"
                  ref="FFirstReturnVisitOrNot"
                ></FirstReturnVisitOrNot>
              </el-col>
              <el-col :span="6">
                <dt_BuildMenuDates :dt_BuildMenuDates="Fdt_BuildMenuDates" ref="Fdt_BuildMenuDates"></dt_BuildMenuDates>
              </el-col>
              
            </el-row>
            <el-row style="border:none">
              <el-col :span="6">
                <IntentionalCar :IntentionalCar="FIntentionalCar" ref="FIntentionalCar"></IntentionalCar>
              </el-col>
              <el-col :span="6">
                <IntentionalBrand :IntentionalBrand="FIntentionalBrand" ref="FIntentionalBrand"></IntentionalBrand>
              </el-col>
              <el-col :span="6">
                <IntentionLevel :IntentionLevel="FIntentionLevel" ref="FIntentionLevel"></IntentionLevel>
              </el-col>
              <el-col :span="6">
                <ReceiptType :ReceiptType="FReceiptType" ref="FReceiptType"></ReceiptType>
              </el-col>
            </el-row>
            <el-row style="border:none">
              <el-col :span="6">
                <JobStatus :JobStatus="FJobStatus" ref="FJobStatus"></JobStatus>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">查询结果</div>
    <!--数据表格-->
    <el-table
      :data="tabledatas.tabledata"
      :stripe="tabledatas.flag"
      highlight-current-row
      style="width: 100%;height:390px;overflow:auto"
      v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope" align="center">
          <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">处理</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tabledatas.total"
      :page-size="tabledatas.pageSize"
      :current-page="tabledatas.pageIndex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>

import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber.vue";
import dt_BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates.vue";
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue";
import FirstReturnVisitOrNot from "@/components/crm/Select/Whether/FirstReturnVisitOrNot.vue";
import NextReturnVisitTimes from "@/components/crm/Time/NextReturnVisitTimes.vue";
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue";
import IntentionalBrand from "@/components/crm/Select/Common/Customer/IntentionalBrand.vue";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";
import ReceiptType from "@/components/crm/Select/Common/ReceiptType.vue";
import JobStatus from "@/components/crm/Select/Clue/JobStatus.vue";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmTodayPendingthread",
  components: {
    txt_CustomerName,
    PhoneNumber,
    ServiceMenuNumber,
    dt_BuildMenuDates,
    ContactWay,
    ChannelBigClass,
    FirstReturnVisitOrNot,
    NextReturnVisitTimes,
    IntentionalCar,
    IntentionalBrand,
    IntentionLevel,
    ReceiptType,
    JobStatus
  },
  data() {
    return {
      listLoading: false,
      toggleParam: false,
      tabledatas: {
        flag: true,
        tabledata: [],
        colnames: [
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "号码归属地", value: "phoneForAttr" },
          { label: "服务单号", value: "serverOrder" },
          { label: "建单日期", value: "createdDate" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" },
          { label: "首次回访", value: "" },
          { label: "下次回访时间", value: "nextCallbackDate" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "意向品牌", value: "carBrandName" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "单据状态", value: "statusName" },
          { label: "作业状态", value: "crruNodeName" },
          { label: "活动名称", value: "actionName" }
        ],
        queryObj: {
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: [
            "custName",
            "contactTel",
            "phoneForAttr",
            "serverOrder",
            "createdDate",
            "cantactWayName",
            "infoChanMName",
            //首次回访
            "nextCallbackDate",
            "carSeriesCn",
            "carBrandName",
            "clueLevelCode",
            "statusName",
            //缺少作业状态
            "actionName"
          ],
          params: {
            custName: "",
            contactTel: "",
            serverOrder: "",
            createdDateStart: "",
            createdDateEnd: "",
            cantactWayCode: "",
            infoChanMCode: "",
            //缺少首次回访
            nextCallbackDateStart: "",
            nextCallbackDateEnd: "",
            inteSeriesCode: "",
            carBrandCode: "",
            clueLevelCode: "",
            status: "",
            handleCode: "0",
            statusArray: []
            //缺少作业状态
          }
        },
        pageIndex: 1,
        pageSize: 9,
        total: 0
      },
      Ftxt_CustomerName: {
        input: ""
      },
      FPhoneNumber: {
        input: ""
      },
      FServiceMenuNumber: {
        input: ""
      },
      Fdt_BuildMenuDates: {
        value: ""
      },
      FFirstReturnVisitOrNot: {
        value: ""
      },
      FContactWay: {
        value: ""
      },
      FChannelBigClass: {
        value: ""
      },
      FNextReturnVisitTimes: {
        value: "",
        isdisabled:true
      },
      FIntentionalCar: {
        value: ""
      },
      FIntentionalBrand: {
        value: ""
      },
      FIntentionLevel: {
        value: ""
      },
      FReceiptType: {
        value: ""
      },
      FJobStatus: {
        value: ""
      }
    };
  },
  mounted: function() {
    let time1 = new Date().getFullYear();
    let time2 = new Date().getMonth()+1;
    if (time2 < 10) {
      time2 = "0" + time2;
    }
    let time3 = new Date().getDate();
    if (time3 < 10) {
      time3 = "0" + time3;
    }
    this.FNextReturnVisitTimes.value = [
      time1 + "-" + time2 + "-" + time3 + " 00:00:00",
      time1 + "-" + time2 + "-" + time3 + " 23:59:59"
    ];
    if (this.$refs.FNextReturnVisitTimes != undefined) {
      this.$refs.FNextReturnVisitTimes.getData();
    }
  },
  methods: {
    contactWayChange(val) {
      let that = this;
      that.FChannelBigClass.pcode = val;
      if (that.$refs.FChannelBigClass == undefined) {
      } else {
        that.$refs.FChannelBigClass.getData();
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query: function(optype) {
      if (optype == 1) {
        let that = this;
        that.listLoading = true;
        this.tabledatas.queryObj.params.custName = this.$refs.Ftxt_CustomerName.input;
        this.tabledatas.queryObj.params.contactTel = this.$refs.FPhoneNumber.input;
        this.tabledatas.queryObj.params.serverOrder = this.$refs.FServiceMenuNumber.input;
        this.tabledatas.queryObj.params.createdDateStart =
          this.$refs.Fdt_BuildMenuDates.value[0];
        this.tabledatas.queryObj.params.createdDateEnd =
          this.$refs.Fdt_BuildMenuDates.value[1];
        this.tabledatas.queryObj.params.cantactWayCode = this.$refs.FContactWay.value;
        this.tabledatas.queryObj.params.infoChanMCode = this.$refs.FChannelBigClass.value;
        //缺少首次回访
        this.tabledatas.queryObj.params.nextCallbackDateStart =
          this.$refs.FNextReturnVisitTimes.value[0];
        this.tabledatas.queryObj.params.nextCallbackDateEnd =
          this.$refs.FNextReturnVisitTimes.value[1];
        this.tabledatas.queryObj.params.inteSeriesCode = this.$refs.FIntentionalCar.value;
        this.tabledatas.queryObj.params.carBrandCode = this.$refs.FIntentionalBrand.value;
        this.tabledatas.queryObj.params.clueLevelCode = this.$refs.FIntentionLevel.value;
        this.tabledatas.queryObj.params.status = this.$refs.FReceiptType.value;
        this.tabledatas.queryObj.params.crruNode = this.$refs.FJobStatus.value;
        this.tabledatas.queryObj.params.statusArray=["20","21","30","31"];
        let queryObj = {
          // api配置
          type: "query",
          apiConfig: that.tabledatas.queryObj.apiConfig,
          // 需要调用的API服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: that.tabledatas.queryObj.apiQueryRow
            }
          ],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.tabledatas.pageSize,
            pageIndex: that.tabledatas.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.tabledatas.queryObj.params
          }
        };
        this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        
that.tabledatas.tabledata =data.rows;
      })
      } else {
        //导出按钮
        let that = this;
        that.$set(that.tabledatas.queryObj.params, "handleCode", "0"),
          that.$set(that.tabledatas.queryObj.params, "statusArray", "20"),
          (that.tabledatas.queryObj.params = {});
        if (that.$refs.Ftxt_CustomerName.input != "") {
          that.$set(
            that.tabledatas.queryObj.params,
            "custName",
            that.$refs.Ftxt_CustomerName.input
          );
        }
        if (that.$refs.FPhoneNumber.input != "") {
          that.$set(
            that.tabledatas.queryObj.params,
            "contactTel",
            that.$refs.FPhoneNumber.input
          );
        }
        if (that.$refs.FServiceMenuNumber.input != "") {
          that.$set(
            that.tabledatas.queryObj.params,
            "serverOrder",
            that.$refs.FServiceMenuNumber.input
          );
        }
        if (that.$refs.Fdt_BuildMenuDates.value != "") {
          that.$set(
            that.tabledatas.queryObj.params,
            "createdDateStart",
            that.$refs.Fdt_BuildMenuDates.value[0]
          );
          that.$set(
            that.tabledatas.queryObj.params,
            "createdDateEnd",
            that.$refs.Fdt_BuildMenuDates.value[1]
          );
        }
        if (this.$refs.FContactWay.value != "") {
          that.$set(
            this.tabledatas.queryObj.params,
            "cantactWayCode",
            this.$refs.FContactWay.value
          );
        }
        //this.tabledatas.queryObj.params.infoChanMCode = this.$refs.FChannelBigClass.value;
        if (this.$refs.FChannelBigClass.value != "") {
          that.$set(
            this.tabledatas.queryObj.params,
            "infoChanMCode",
            this.$refs.FChannelBigClass.value
          );
        }
        // this.tabledatas.queryObj.params.nextCallbackDateStart = this.$refs.FNextReturnVisitTimes.value[0];
        // this.tabledatas.queryObj.params.nextCallbackDateEnd = this.$refs.FNextReturnVisitTimes.value[1];
        if (this.$refs.FNextReturnVisitTimes.value != "") {
          that.$set(
            this.tabledatas.queryObj.params,
            "nextCallbackDateStart",
            this.$refs.FNextReturnVisitTimes[0]
          );
          that.$set(
            this.tabledatas.queryObj.params,
            "nextCallbackDateEnd",
            this.$refs.FNextReturnVisitTimes[1]
          );
        }
        // this.tabledatas.queryObj.params.inteSeriesCode = this.$refs.FIntentionalCar.value;
        if (this.$refs.FIntentionalCar.value != "") {
          that.$set(
            this.tabledatas.queryObj.params,
            "inteSeriesCode",
            this.$refs.FIntentionalCar.value
          );
        }
        // this.tabledatas.queryObj.params.carBrandCode = this.$refs.FIntentionalBrand.value;
        if (this.$refs.FIntentionalBrand.value != "") {
          that.$set(
            this.tabledatas.queryObj.params,
            "carBrandCode",
            this.$refs.FIntentionalBrand.value
          );
        }
        // this.tabledatas.queryObj.params.clueLevelCode = this.$refs.FIntentionLevel.value;
        if (this.$refs.FIntentionLevel.value != "") {
          that.$set(
            this.tabledatas.queryObj.params,
            "clueLevelCode",
            this.$refs.FIntentionLevel.value
          );
        }
        // this.tabledatas.queryObj.params.Status = this.$refs.FReceiptType.value;
        if (this.$refs.FReceiptType.value != "") {
          that.$set(
            this.tabledatas.queryObj.params,
            "status",
            this.$refs.FReceiptType.value
          );
        }
        // this.tabledatas.queryObj.params.crruNode = this.$refs.FJobStatus.value;
        if (this.$refs.FJobStatus.value != "") {
          that.$set(
            this.tabledatas.queryObj.params,
            "crruNode",
            this.$refs.FJobStatus.value
          );
        }
        let queryObj = {
          // api配置
          apiConfig: that.tabledatas.queryObj.apiConfig,
          // 需要调用的API服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: that.tabledatas.queryObj.apiQueryRow
            }
          ],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: optype == "2" ? 99999 : that.tabledatas.pageSize,
            pageIndex: that.tabledatas.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.tabledatas.queryObj.params
          }
        };

        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        if (optype == "2") {
          this.buildExportParam(queryObj, paramD);
        }
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (optype == "2") {
            this.$utils.downloadFile(response, paramD.excelName);
          } else {
            if (
              response.data[queryObj.apiConfig.ServiceCode].result == "1"
              //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
            ) {
              that.tabledatas.tabledata =
                response.data[queryObj.apiConfig.ServiceCode].rows;
              that.tabledatas.pageIndex =
                response.data[queryObj.apiConfig.ServiceCode].pageindex;
              that.tabledatas.total =
                response.data[queryObj.apiConfig.ServiceCode].records;
            }
          }
        });
      }
    },
    buildExportParam(queryObj, paramsObj) {
      var excelCols = {};
      for (var i = 0; i < this.tabledatas.colnames.length; i++) {
        excelCols[this.tabledatas.colnames[i].value] = this.tabledatas.colnames[
          i
        ].label;
      }
      // 数据类型
      paramsObj.dataType = "excel";
      // excel文件名称
      paramsObj.excelName = "本人当日待回访线索";
      // 根据请求API描述excel数据对象
      paramsObj.excels = [
        {
          // excel sheet名称
          title: "Sheet1",
          // 对应API服务编码
          actionName: queryObj.apiConfig.ServiceCode,
          // excel列
          columns: excelCols
        }
      ];
    },
    reset: function() {
      this.$refs.Ftxt_CustomerName.reset();
      this.$refs.FPhoneNumber.reset();
      this.$refs.FServiceMenuNumber.reset();
      this.$refs.Fdt_BuildMenuDates.reset();
      this.$refs.FContactWay.reset();
      this.$refs.FChannelBigClass.reset();
      //this.$refs.FNextReturnVisitTimes.reset();
      this.$refs.FIntentionalCar.reset();
      this.$refs.FIntentionalBrand.reset();
      this.$refs.FIntentionLevel.reset();
      this.$refs.FReceiptType.reset();
      this.$refs.FJobStatus.reset();
      this.$refs.FFirstReturnVisitOrNot.reset();
    },
    handleEdit(index, row) {
      let that = this;
      //跳转到线索回访
      that.$crmcf.jumpDetailTag(that,'crmThreadReturn','/crmThreadReturn',row)
    },
    // 保存
    save() {
      let that = this;
      let queryObj = {
        //api配置
        type: "mutation",
        // api配置
        apiConfig: crmApis.mdmCompBrandMutationSaveById,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //写入参数赋值
          dataInfo: {
            oemCode: this.oemCode,
            groupCode: this.groupCode,
            compBrandCode: this.$refs.Cvbc.input,
            compBrandCn: this.$refs.Cvbn2.input,
            isEnable: this.$refs.Isable1.value,
            compBrandEn: this.ENname,
            updateControlId: this.updateControlId
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
           try {
            response.data[queryObj.apiConfig.ServiceCode].result == "1";
          } catch (error) {
            that.$crmcf.showMessages(that, "error", error);
            return;
          }
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows.length> 0
        ) {
          this.tabledatas.tabledata =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          this.dialogVisible = false;
          this.query(1);
        } else {
          that.listLoading=false;
                that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    prev() {
      let that = this;
      if (this.tabledatas.pageIndex > 1) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
        this.query(1);
      }
    },
    next() {
      let that = this;
        that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
        this.query(1);
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query(1);
    }
  }
};
</script>
<style>
</style>
