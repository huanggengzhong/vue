<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="exportData()">导出</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right" >
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <txt_CustomerName :txt_CustomerName="txt_CustomerName" ref="txt_CustomerName" />
              </el-col>
              
              <el-col :span="6">
                <PhoneNumber :PhoneNumber="PhoneNumber" ref="PhoneNumber" />
              </el-col>

              <el-col :span="6">
                <IntentionalCar :IntentionalCar="IntentionalCar" ref="IntentionalCar" />
              </el-col>
              
              <el-col :span="6">
                <IntentionLevel :IntentionLevel="IntentionLevel" ref="IntentionLevel" />
              </el-col>
            </el-row>
          </el-col>

          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <!-- 第二行 -->
              <el-col :span="6">
                <ServiceMenuNumber :ServiceMenuNumber="ServiceMenuNumber" ref="ServiceMenuNumber" />
              </el-col>

              

              <el-col :span="6">
                <ContactWay :ContactWay="ContactWay" ref="ContactWay" @changeCode="change"></ContactWay>
              </el-col>
                
              <el-col :span="6">
                <ChannelBigClass :ChannelBigClass="ChannelBigClass" ref="ChannelBigClass" @changeCode="changeBig"></ChannelBigClass>
                <!-- <ChannelBigClass @changeCode="changeBig"  :ChannelBigClass="ChannelBigClass" ref="ChannelBigClass" /> -->
              </el-col>

              <el-col :span="6">
                <ChannelSmallClass_sct :ChannelSmallClass_sct = "ChannelSmallClass_sct" ref="ChannelSmallClass_sct"></ChannelSmallClass_sct>
              </el-col>
              

              <!-- 第三行 -->
              <el-col :span="6">
                <ReturnVisitStatus :ReturnVisitStatus = "ReturnVisitStatus" ref="ReturnVisitStatus"/>
              </el-col>
              
              <el-col :span="6" >
                <NextReturnVisitTimes :NextReturnVisitTimes="NextReturnVisitTimes" ref="NextReturnVisitTimes" />
              </el-col>

              <el-col :span="6">
              <IntentionalBrand :IntentionalBrand="IntentionalBrand" ref="IntentionalBrand" />
              </el-col>

              <el-col :span="6">
                <dt_RetentionTimes :dt_RetentionTimes="dt_RetentionTimes" ref="dt_RetentionTimes" />
              </el-col>
              

            </el-row>
          </el-col>


        </el-row>


      </el-form>
    </div>

    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:360px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="处理" width="100" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="detail(scope.$index, scope.row)">处理</el-button>
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
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize"
            :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage">
        </el-pagination>
  </div>
</template>
<script>
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName.vue"
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber.vue"
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue"
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel.vue"
import NextReturnVisitTimes from "@/components/crm/Time/NextReturnVisitTimes.vue"
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber.vue"
import ReturnVisitStatus from "@/components/crm/Select/Clue/ReturnVisit/ReturnVisitStatus.vue"
import IntentionalBrand from "@/components/crm/Select/Common/Customer/IntentionalBrand.vue"
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue"
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue"
import dt_RetentionTimes from "@/components/crm/Time/dt_RetentionTimes.vue"
import ChannelSmallClass from "@/components/crm/EjectWindows/ChannelSmallClass.vue"
import ChannelSmallClass_sct from "@/components/crm/Select/Common/ChannelSmallClass_sct"


export default {
  name: "ToDoTask_ClueCultivation",
  components: {
    ApplyExtensionTimes,
    
    Table,
    txt_CustomerName,
    PhoneNumber,
    IntentionalCar,
    IntentionLevel,
    NextReturnVisitTimes,
    ServiceMenuNumber,
    ReturnVisitStatus,
    IntentionalBrand,
    ChannelBigClass,
    ContactWay,
    dt_RetentionTimes,
    ChannelSmallClass,
    ChannelSmallClass_sct,
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
      tabledatas: {
        // 操作列
        isoperat: true,
        havedistrbute: true,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "客户姓名", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "号码归属地", value: "phoneForAttr" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "上次回访时间", value: "factReviewDate" },
          { label: "下次回访时间", value: "nextCallbackDate" },
          { label: "留资时间", value: "remainDataDate" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "意向品牌", value: "carBrandName" },
          // { label: "回访状态", value: "CALLBACK_TYPE" },
          { label: "单据状态", value: "statusName" },
          // { label: "任务号", value: "" },//
          { label: "服务单号", value: "serverOrder" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" },
          { label: "渠道小类", value: "infoChanDName" },
          // { label: "销售顾问", value: "CSR" },
          { label: "回访人员", value: "csr" },
          { label: "建单人", value: "createdName" },
          { label: "建单时间", value: "createdDate" },
          // { label: "作业类型", value: "ZUOYETYPENAME" },
          
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryFromDlr,
          apiQueryRow: ['custName',
           'contactTel',
           'phoneForAttr',
           'carBrandName',
           'carSeriesCn',
           'cantactWayName',
           'infoChanMName',
           'createdDate',
            'nextCallbackDate',
            'remainDataDate',
       'serverOrder',
           'clueLevelCode',
           'statusName',
            'assignDate',
           'csr',
           //隐藏字段
          //  'inteSeriesCode',
           ],
          params:{handleCode:"0",statusArray: ["20","21","30","31"]}
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      applyEx:{
        value:''
      },
      serviceMenu:{
        input:''
      },
      txt_CustomerName:{
        input:''
      },
      PhoneNumber:{
        input:''
      },
      IntentionalCar:{
        input:''
      },
      IntentionLevel:{
        value:''
      },
      
      ServiceMenuNumber:{
        input:''
      },
      
      dt_RetentionTimes:{
        value:''
      },
      
      ContactWay:{
        value:''
      },
      
      ChannelBigClass:{
        value:'',
        pcode:""
      },

       ChannelSmallClass_sct:{
        value:'',
        pcode:""
      },

      ChannelSmallClass:{
        value:''
      },
      
      dt_BuildMenuDates:{
        value:''
      },
      
      ReceiptStatus:{
        value:''
      },

      IntentionalBrand:{
        value:''
      },

      FirstReturnVisitOrNot:{
        value:''
      },
      ReturnVisitStatus :{
        value:''
      },
      
      NextReturnVisitTimes :{
        value:''
      },
    };
  },
  methods: {
    change(val) {
      let that = this;
      that.ChannelBigClass.pcode=val
      if(that.$refs.ChannelBigClass==undefined){
      }else{
        that.$refs.ChannelBigClass.getData();
        that.$refs.ChannelSmallClass_sct.value = '';
        // that.$refs.ChannelSmallClass_sct.reset();
      }
    },
    changeBig(val) {
      debugger
      let that = this;
      that.ChannelSmallClass_sct.pcode=val
      if(that.$refs.ChannelSmallClass_sct==undefined){
      }else{
        that.$refs.ChannelSmallClass_sct.getData();
      }
    },
    detail:function(index,rowData){
      let that=this
      //that.$router.push({name:'crmThreadReturn',params:rowData})
      that.$crmcf.jumpDetailTag(that,'crmThreadReturn','/crmThreadReturn',rowData)
      //that.dialogVisible = true;
    },
    query: function() {
      
      let that = this;

      that.tabledatas.queryObj.params.custName=this.$refs.txt_CustomerName.input  //传空字符串查询不出数据
      that.tabledatas.queryObj.params.contactTel=this.$refs.PhoneNumber.input  
      // debugger
      that.tabledatas.queryObj.params.inteSeriesCode = this.$refs.IntentionalCar.rowData.carBrandCode;
      that.tabledatas.queryObj.params.clueLevelCode=this.$refs.IntentionLevel.value  
      that.tabledatas.queryObj.params.serverOrder=this.$refs.ServiceMenuNumber.input
      if(that.$refs.ContactWay==undefined&&
      that.$refs.ChannelBigClass==undefined&&
      that.$refs.ChannelSmallClass_sct==undefined){
        that.tabledatas.queryObj.params.cantactWayCode="";
        that.tabledatas.queryObj.params.infoChanMCode="";
        that.tabledatas.queryObj.params.infoChanDCode="";
      }else{
        that.tabledatas.queryObj.params.cantactWayCode=this.$refs.ContactWay.value;
        that.tabledatas.queryObj.params.infoChanMCode=this.$refs.ChannelBigClass.value;
        that.tabledatas.queryObj.params.infoChanDCode=this.$refs.ChannelSmallClass_sct.value;
        
      }
      that.tabledatas.queryObj.params.reviewStatus=this.$refs.ReturnVisitStatus.value
      // 回访时间
         if (this.$refs.NextReturnVisitTimes.value[0] == undefined) {
                that.tabledatas.queryObj.params.nextCallbackDateStart = this.$refs.NextReturnVisitTimes.value[0];
                that.tabledatas.queryObj.params.nextCallbackDateEnd = this.$refs.NextReturnVisitTimes.value[1];
            } else if (this.$refs.NextReturnVisitTimes.value[0] != undefined) {
                let timegz1 = this.$refs.NextReturnVisitTimes.value[0];
                let timegz2 = this.$refs.NextReturnVisitTimes.value[1];
                that.tabledatas.queryObj.params.nextCallbackDateStart =
                    timegz1 + " " + "00:00:00";
                that.tabledatas.queryObj.params.nextCallbackDateEnd =
                    timegz2 + " " + "23:59:59";
            }
          that.tabledatas.queryObj.params.carBrandCode=this.$refs.IntentionalBrand.value

     // 留资时间
         if (this.$refs.dt_RetentionTimes.value[0] == undefined) {
                that.tabledatas.queryObj.params.remainDataDateStart = this.$refs.dt_RetentionTimes.value[0];
                that.tabledatas.queryObj.params.remainDataDateEnd = this.$refs.dt_RetentionTimes.value[1];
            } else if (this.$refs.dt_RetentionTimes.value[0] != undefined) {
                let timegz1 = this.$refs.dt_RetentionTimes.value[0];
                let timegz2 = this.$refs.dt_RetentionTimes.value[1];
                that.tabledatas.queryObj.params.remainDataDateStart =
                    timegz1 + " " + "00:00:00";
                that.tabledatas.queryObj.params.remainDataDateEnd =
                    timegz2 + " " + "23:59:59";
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
          pageSize: that.tabledatas.pagesize,
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          //请求成功后，设置网格的值
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;

          that.tabledatas.pageindex =
                        response.data[queryObj.apiConfig.ServiceCode].pageindex;
                    that.tabledatas.total =
                        response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    
    },

     //导出
     exportData(){
       var optype = '2';
     let that = this;

      that.tabledatas.queryObj.params.custName=this.$refs.txt_CustomerName.input  //传空字符串查询不出数据
      that.tabledatas.queryObj.params.contactTel=this.$refs.PhoneNumber.input  
      // debugger
      that.tabledatas.queryObj.params.inteSeriesCode = this.$refs.IntentionalCar.rowData.carBrandCode;
      that.tabledatas.queryObj.params.clueLevelCode=this.$refs.IntentionLevel.value  
      that.tabledatas.queryObj.params.serverOrder=this.$refs.ServiceMenuNumber.input
      if(that.$refs.ContactWay==undefined&&
      that.$refs.ChannelBigClass==undefined&&
      that.$refs.ChannelSmallClass_sct==undefined){
        that.tabledatas.queryObj.params.cantactWayCode="";
        that.tabledatas.queryObj.params.infoChanMCode="";
        that.tabledatas.queryObj.params.infoChanDCode="";
      }else{
        that.tabledatas.queryObj.params.cantactWayCode=this.$refs.ContactWay.value;
        that.tabledatas.queryObj.params.infoChanMCode=this.$refs.ChannelBigClass.value;
        that.tabledatas.queryObj.params.infoChanDCode=this.$refs.ChannelSmallClass_sct.value;
        
      }
      that.tabledatas.queryObj.params.reviewStatus=this.$refs.ReturnVisitStatus.value
      // 回访时间
         if (this.$refs.NextReturnVisitTimes.value[0] == undefined) {
                that.tabledatas.queryObj.params.nextCallbackDateStart = this.$refs.NextReturnVisitTimes.value[0];
                that.tabledatas.queryObj.params.nextCallbackDateEnd = this.$refs.NextReturnVisitTimes.value[1];
            } else if (this.$refs.NextReturnVisitTimes.value[0] != undefined) {
                let timegz1 = this.$refs.NextReturnVisitTimes.value[0];
                let timegz2 = this.$refs.NextReturnVisitTimes.value[1];
                that.tabledatas.queryObj.params.nextCallbackDateStart =
                    timegz1 + " " + "00:00:00";
                that.tabledatas.queryObj.params.nextCallbackDateEnd =
                    timegz2 + " " + "23:59:59";
            }
          that.tabledatas.queryObj.params.carBrandCode=this.$refs.IntentionalBrand.value

     // 留资时间
         if (this.$refs.dt_RetentionTimes.value[0] == undefined) {
                that.tabledatas.queryObj.params.remainDataDateStart = this.$refs.dt_RetentionTimes.value[0];
                that.tabledatas.queryObj.params.remainDataDateEnd = this.$refs.dt_RetentionTimes.value[1];
            } else if (this.$refs.dt_RetentionTimes.value[0] != undefined) {
                let timegz1 = this.$refs.dt_RetentionTimes.value[0];
                let timegz2 = this.$refs.dt_RetentionTimes.value[1];
                that.tabledatas.queryObj.params.remainDataDateStart =
                    timegz1 + " " + "00:00:00";
                that.tabledatas.queryObj.params.remainDataDateEnd =
                    timegz2 + " " + "23:59:59";
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
          pageSize: (optype=="2"?99999:that.tabledatas.pagesize),
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      if(optype=="2"){
        this.buildExportParam(queryObj, paramD);
      }
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if(optype=="2")
        {
          this.$utils.downloadFile(response, paramD.excelName)
        }else{
          if (response.data[queryObj.apiConfig.ServiceCode].result == "1" 
              //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
            ) {
              that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
              that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
              that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;
            }
        }
      });
    },
    buildExportParam(queryObj, paramsObj) {
        var excelCols = {}
        for (var i = 0; i < this.tabledatas.colnames.length; i++) {
          excelCols[this.tabledatas.colnames[i].value] = this.tabledatas.colnames[i].label
        }
        // 数据类型
        paramsObj.dataType = 'excel'
        // excel文件名称
        paramsObj.excelName = "待办任务_线索培育导出"
        // 根据请求API描述excel数据对象
        paramsObj.excels = [{
          // excel sheet名称
          title: "Sheet1",
          // 对应API服务编码
          actionName: queryObj.apiConfig.ServiceCode,
          // excel列
          columns: excelCols
      }]
    },


    reset: function() {
      this.delayreason=''
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.IntentionalCar.input = '';
      this.$refs.IntentionLevel.reset();
      this.$refs.ServiceMenuNumber.reset();
      this.$refs.ContactWay.reset();
      this.$refs.ChannelBigClass.reset();
      this.$refs.ChannelSmallClass_sct.reset();
      this.$refs.ReturnVisitStatus.reset();
      this.$refs.NextReturnVisitTimes.reset();
      this.$refs.IntentionalBrand.reset();
      this.$refs.dt_RetentionTimes.reset();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    // 分页的三个方法
        prev() {
            let that = this;
            if (this.tabledatas.pageindex > 1) {
                that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
                this.query();
            }
        },
        next() {
            let that = this;
            if (true) {
                that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
                this.query();
            }
        },
        changepage(index) {
            let that = this;
            that.tabledatas.pageindex = index;
            this.query();
        },
  }
};
</script>