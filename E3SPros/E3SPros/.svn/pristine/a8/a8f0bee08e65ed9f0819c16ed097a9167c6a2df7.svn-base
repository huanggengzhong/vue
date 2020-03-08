<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="exportData()">导出</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <txt_CustomerName :txt_CustomerName="txt_CustomerName" ref="txt_CustomerName" />
              </el-col>
              <el-col :span="6">
                <PhoneNumber :PhoneNumber="PhoneNumber" ref="PhoneNumber"></PhoneNumber>
              </el-col>
              <el-col :span="6">
                <IntentionalCar :IntentionalCar = "IntentionalCar" ref="IntentionalCar" />
              </el-col>
              <el-col :span="6">
                <IntentionLevel :IntentionLevel ="IntentionLevel" ref="IntentionLevel" />
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
                <ClueNumber :ClueNumber="ClueNumber" ref="ClueNumber"></ClueNumber>
              </el-col>
              <el-col :span="6">
              <dt_RetentionTimes :dt_RetentionTimes="dt_RetentionTimes" ref="dt_RetentionTimes"></dt_RetentionTimes>
              </el-col>
              
              
              <!-- <el-col :span="6">
                <ContactWay :ContactWay="ContactWay" ref="ContactWay"/>
              </el-col>
              <el-col :span="6">
                <ChannelBigClass :ChannelBigClass="ChannelBigClass" ref="ChannelBigClass"></ChannelBigClass>
              </el-col> -->
              <el-col :span="6">
                <ContactWay :ContactWay="ContactWay" ref="ContactWay" @changeCode="change"></ContactWay>
              </el-col>
              <el-col :span="6">
                <ChannelBigClass  :ChannelBigClass="ChannelBigClass" ref="ChannelBigClass"></ChannelBigClass>
              </el-col>

              <!-- 第三行 -->
              <el-col :span="6">
                <dt_BuildMenuDates :dt_BuildMenuDates="dt_BuildMenuDates" ref="dt_BuildMenuDates"></dt_BuildMenuDates>
              </el-col>
              
              <el-col :span="6">
                <ReceiptStatus :ReceiptStatus="ReceiptStatus" ref="ReceiptStatus" />
              </el-col>
              <el-col :span="6">
                <IntentionalBrand :IntentionalBrand="IntentionalBrand" ref="IntentionalBrand"></IntentionalBrand>
              </el-col>
              <el-col :span="6">
                <FirstReturnVisitOrNot :FirstReturnVisitOrNot="FirstReturnVisitOrNot" ref="FirstReturnVisitOrNot"/>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <div class="filter-container filter-title-crm">查询结果</div>
    <!-- <Table :tabledatas="tabledatas"></Table> -->
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      ref="table"
       :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="detail(scope.$index, scope.row)">{{(scope.row.processingAction=='0')?'抢单':'处理'}}</el-button>
        </template>
        <!-- 抢单 -->
      </el-table-column>

      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" 
  :total="tabledatas.total?tabledatas.total:0"
        :page-size="tabledatas.pageSize?tabledatas.pageSize:this.$crmcf.PAGE_SIZE"
        :current-page="tabledatas.pageIndex?tabledatas.pageIndex:this.$crmcf.PAGE_INDEX"
            @prev-click="prev" @next-click="next" @current-change="changepage">
        </el-pagination>
  </div>
</template>
<script>
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName"
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber.vue"
import IntentionalCar from "@/components/crm/EjectWindows/IntentionalCar.vue"
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel.vue"
import dt_RetentionTimes from "@/components/crm/Time/dt_RetentionTimes.vue"
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber.vue"
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass.vue"
import dt_BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates.vue"
import ContactWay from "@/components/crm/Select/Common/ContactWay.vue"
import ReceiptStatus from "@/components/crm/Select/Clue/ReceiptStatus_clue.vue"
import IntentionalBrand from "@/components/crm/Select/Common/Customer/IntentionalBrand.vue"
import FirstReturnVisitOrNot from "@/components/crm/Select/Whether/FirstReturnVisitOrNot.vue"

export default {
  name: "shopWaitReVisClue",
  components: {
    ApplyExtensionTimes,
    ServiceMenuNumber,
    Table,
    RelatedBenchmarkCar,
    txt_CustomerName,
    PhoneNumber,
    IntentionalCar,
    IntentionLevel,
    dt_RetentionTimes,
    ClueNumber,
    ChannelBigClass,
    dt_BuildMenuDates,
    ContactWay,
    ReceiptStatus,
    IntentionalBrand,
    FirstReturnVisitOrNot,
  },
  data() {
    return {
      toggleParam: false,
      delayreason: "",
      listLoading: false,
      tableHeight:'',
      tabledatas: {
        // 操作列
        isoperat: true,
        havedistrbute: true,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "客户姓名", value: "custName" },
          { label: "联系电话", value: "contactTel" },
          { label: "号码归属地", value: "phoneForAttr" },
          { label: "意向品牌", value: "carBrandName" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类", value: "infoChanMName" },
          { label: "建单时间", value: "createdDate" },
          { label: "下次回访时间", value: "nextCallbackDate" },
          { label: "单号", value: "serverOrder" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "单据状态", value: "statusName" },
          { label: "总部下发时间", value: "assignDate" },
          { label: "回访人员", value: "csr" },
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
       'serverOrder',
           'clueLevelCode',
           'statusName',
            'assignDate',
           'csr',
           //隐藏字段
          //  'inteSeriesCode',
            'processingAction', //处理和抢单字段（0抢单，1处理）
           ],
          params:{handleCode:"1",statusArray: ["20","21","30","31"]}
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
      
      ClueNumber:{
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
       



    };
  },
    mounted() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  methods: {
    change(val) {
      let that = this;
      that.ChannelBigClass.pcode=val
      if(that.$refs.ChannelBigClass==undefined){
      }else{
        that.$refs.ChannelBigClass.getData();
      }
    },
    query: function() {
      let that = this;
      that.listLoading=true
      //查询条件
      that.tabledatas.queryObj.params.custName=this.$refs.txt_CustomerName.input  //传空字符串查询不出数据
      that.tabledatas.queryObj.params.contactTel=this.$refs.PhoneNumber.input  
      // debugger
      that.tabledatas.queryObj.params.inteSeriesCode = this.$refs.IntentionalCar.rowData.carBrandCode;
      that.tabledatas.queryObj.params.clueLevelCode=this.$refs.IntentionLevel.value  
      that.tabledatas.queryObj.params.serverOrder=this.$refs.ClueNumber.input

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
      if(that.$refs.ContactWay==undefined&&
      that.$refs.ChannelBigClass==undefined){
        that.tabledatas.queryObj.params.cantactWayCode="";
        that.tabledatas.queryObj.params.infoChanMCode="";
      }else{
        that.tabledatas.queryObj.params.cantactWayCode=this.$refs.ContactWay.value;
        that.tabledatas.queryObj.params.infoChanMCode=this.$refs.ChannelBigClass.value;
      }
      // 建单时间
         if (this.$refs.dt_BuildMenuDates.value[0] == undefined) {
                that.tabledatas.queryObj.params.createdDateStart = this.$refs.dt_BuildMenuDates.value[0];
                that.tabledatas.queryObj.params.createdDateEnd = this.$refs.dt_BuildMenuDates.value[1];
            } else if (this.$refs.dt_BuildMenuDates.value[0] != undefined) {
                let timegz1 = this.$refs.dt_BuildMenuDates.value[0];
                let timegz2 = this.$refs.dt_BuildMenuDates.value[1];
                that.tabledatas.queryObj.params.createdDateStart =
                    timegz1 + " " + "00:00:00";
                that.tabledatas.queryObj.params.createdDateEnd =
                    timegz2 + " " + "23:59:59";
            }
      that.tabledatas.queryObj.params.status=this.$refs.ReceiptStatus.value
      that.tabledatas.queryObj.params.carBrandCode=this.$refs.IntentionalBrand.value
      that.tabledatas.queryObj.params.isFirstCallback=this.$refs.FirstReturnVisitOrNot.value 
     this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tableData =data.rows;
        })
    },
    //导出
     exportData(){
      let that = this;
      //查询条件
      that.tabledatas.queryObj.params.custName=this.$refs.txt_CustomerName.input  //传空字符串查询不出数据
      that.tabledatas.queryObj.params.contactTel=this.$refs.PhoneNumber.input  
      that.tabledatas.queryObj.params.inteSeriesCode = this.$refs.IntentionalCar.rowData.carBrandCode;
      that.tabledatas.queryObj.params.clueLevelCode=this.$refs.IntentionLevel.value  
      that.tabledatas.queryObj.params.serverOrder=this.$refs.ClueNumber.input
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
      if(that.$refs.ContactWay==undefined&&
      that.$refs.ChannelBigClass==undefined){
        that.tabledatas.queryObj.params.cantactWayCode="";
        that.tabledatas.queryObj.params.infoChanMCode="";
      }else{
        that.tabledatas.queryObj.params.cantactWayCode=this.$refs.ContactWay.value;
        that.tabledatas.queryObj.params.infoChanMCode=this.$refs.ChannelBigClass.value;
      }
      // 建单时间
         if (this.$refs.dt_BuildMenuDates.value[0] == undefined) {
                that.tabledatas.queryObj.params.createdDateStart = this.$refs.dt_BuildMenuDates.value[0];
                that.tabledatas.queryObj.params.createdDateEnd = this.$refs.dt_BuildMenuDates.value[1];
            } else if (this.$refs.dt_BuildMenuDates.value[0] != undefined) {
                let timegz1 = this.$refs.dt_BuildMenuDates.value[0];
                let timegz2 = this.$refs.dt_BuildMenuDates.value[1];
                that.tabledatas.queryObj.params.createdDateStart =
                    timegz1 + " " + "00:00:00";
                that.tabledatas.queryObj.params.createdDateEnd =
                    timegz2 + " " + "23:59:59";
            }
      that.tabledatas.queryObj.params.status=this.$refs.ReceiptStatus.value
      that.tabledatas.queryObj.params.carBrandCode=this.$refs.IntentionalBrand.value 
      
      this.$crmcf.exportSimpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,"本店待回访线索导出",function(response,name){
        that.$utils.downloadFile(response, name)
        })
    },
    buildExportParam(queryObj, paramsObj) {
        var excelCols = {}
        for (var i = 0; i < this.tabledatas.colnames.length; i++) {
          excelCols[this.tabledatas.colnames[i].value] = this.tabledatas.colnames[i].label
        }
        // 数据类型
        paramsObj.dataType = 'excel'
        // excel文件名称
        paramsObj.excelName = "本店待回访线索导出"
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
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.IntentionalCar.resetgz();
      this.$refs.IntentionLevel.reset();
      this.$refs.ClueNumber.reset();
      this.$refs.dt_RetentionTimes.reset();
      this.$refs.ContactWay.reset();
      this.$refs.ChannelBigClass.reset();
      this.$refs.dt_BuildMenuDates.reset();
      this.$refs.ReceiptStatus.reset();
      this.$refs.IntentionalBrand.reset();
      this.$refs.FirstReturnVisitOrNot.reset();

      this.delayreason=''
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    //抢单调用抢单API；处理跳回访页面
    detail(index, row) {
      let that = this;
      if (row.processingAction == 0) {
        let that = this;
        let queryObj = {
          //api配置
          type: "mutation",
          //维护api缺失
          // apiConfig: crmApis.clueServerMutationGetBill,
          apiConfig: crmApis.clueServerMutationGetBill,
          //需要调用的api服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: []
            }
          ],
          //条件/实体参数（变量），根据typeprarm中的定义配置
          variables: {
            dataInfo: {
              serverOrder: row.serverOrder,
              handleCode:'0'
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
            response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            this.$message({
              message: "抢单成功",
              type: "success",
              duration: 1000
            });
             this.updateControlId="",
            this.dialogVisible = false;
            this.query();
            // this.tabledatas.tabledata =
            //   response.data[queryObj.apiConfig.ServiceCode].rows;
          } else {
            this.$message({
              message: response.data[queryObj.apiConfig.ServiceCode].msg,
              type: "fail",
              duration: 1000
            });
          }
        });
      } else {
        let that = this;
        //that.$router.push({ name: "", params: row });
        that.$crmcf.jumpDetailTag(that,'crmThreadReturn','/crmThreadReturn',row)
      }
    },
    // 分页的三个方法
        prev() {
            let that = this;
            if (this.tabledatas.pageIndex > 1) {
                that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
                this.query();
            }
        },
        next() {
            let that = this;
            if (true) {
                that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
                this.query();
            }
        },
        changepage(index) {
            let that = this;
            that.tabledatas.pageIndex = index;
            this.query();
        },
  }
};
</script>

