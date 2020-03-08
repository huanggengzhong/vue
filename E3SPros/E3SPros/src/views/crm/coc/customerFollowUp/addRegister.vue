/*
 * @Author: xgz 
 * @Date: 2019-09-24 09:26:19 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-09-24 19:22:33
 */

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="saveRegister">保存</el-button>
    </div>

        <div style="width:19%;float:left">
          <div class="filter-container filter-title-crm" >来店人数</div>
          <div class="filter-params-crm">
            <el-row>
              <el-col style="text-align: left;">
                <el-radio-group v-model="radioRS" size="medium" @change="handleLDRS">
                  <el-radio-button v-for="itm in radList" 
                  :label="itm" 
                  :key="itm">{{itm}}</el-radio-button>
                </el-radio-group>
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-title-crm" >来店目的</div>
          <div class="filter-params-crm">
            <el-row>
              <el-col style="text-align: left;">
                <el-radio-group v-model="radioMD" size="small" @change="handleLDMD">
                  <el-radio-button v-for="itm in radListLDMD" 
                  :label="itm.lookupValueName" 
                  :key="itm.lookupValueCode">{{itm.lookupValueName}}</el-radio-button>
                </el-radio-group>
              </el-col>
            </el-row>
          </div>
        </div>
        <div style="width:80%;float:right">
          <div class="filter-container filter-title-crm">意向车系</div>
          <div class="filter-params-crmtab" style="overflow:auto">
            <el-row>
              <el-col style="text-align: left;">
              <el-tabs v-model="editableTabsValue" class="tabs" type="card" @tab-click="show_upsPage">
                  <el-tab-pane :key="item.carBrandCode"
                    v-for="item in editableTabs"
                    :label="item.carBrandCn"
                    :name="item.carBrandCode">
                    <el-checkbox-group v-model="chkYYCX" @change="handleChange" size="mini" style="width:100%">
                      <el-checkbox-button v-for="itm in yxcx" 
                      :label="itm.carSeriesCn" 
                      :key="itm.carSeriesCode">
                      {{itm.carSeriesCn}}
                      </el-checkbox-button>
                    </el-checkbox-group>
                  </el-tab-pane>
              </el-tabs>
              </el-col>
              <el-col style="text-align: left;">
                <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
              </el-tag>
              </el-col>
            </el-row>
          </div>
          <div class="filter-container filter-title-crm">来店详情</div>
          <div class="filter-params-crm">
            <el-form>
              <el-row>
                <el-col :span="6" class="crm-label-required">
                  <el-form-item label="来店日期">
                    <el-date-picker 
                    v-model="ldDate"  
                    type="date" 
                    placeholder="选择日期时间"
                    value-format="yyyy-MM-dd"
                    prefix-icon="none"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="crm-label-required">
                  <el-form-item label="到店时间">
                    <el-time-select
                    v-model="ddTime"
                    :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30'
                    }"
                    placeholder="选择时间">
                  </el-time-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6" class="crm-label-required">
                  <el-form-item label="离店时间">
                    <el-time-select
                    v-model="ldTime"
                    :picker-options="{
                      start: '08:30',
                      step: '00:15',
                      end: '18:30'
                    }"
                    placeholder="选择时间">
                  </el-time-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="6" class="crm-label-required">
                  <CustomerSource :CustomerSource="CustomerSourceMain" ref="CustomerSourceMainRef" />
                </el-col>
                <el-col :span="6" >
                  <Remarks :Remarks="RemarksMain" ref="RemarksMainRef" />
                </el-col>
              </el-row>
              <el-row>
              </el-row>
            </el-form>
          </div>
        </div>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import Agent from "@/components/crm/EjectWindows/Agent"; //网点多选
import swd_SalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant"; //销售顾问
import ComingPurpose from "@/components/crm/Select/CallCenterClue/ComingPurpose"; //来店目的
import ArrivalStatus from "@/components/crm/Select/Common/Customer/ArrivalStatus"; //来店状态
import ReachShopTimes from "@/components/crm/Time/ReachShopTimes"; //到店时间
import LeaveShopTimes from "@/components/crm/Time/LeaveShopTimes"; //离店时间
import CustomerSource from "@/components/crm/Select/Common/Customer/CustomerSource"; //客户来源
import salesCampaign from "@/components/crm/Select/Common/Customer/salesCampaign"; //营销活动
import Remarks from "@/components/crm/textbox/Complaint/Remarks"; //备注
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import WhetherKeepAFile from "@/components/crm/Select/Whether/WhetherKeepAFile"; //是否已留档
import clueInfoPop from "@/components/crm/EjectWindows/clueInfoPop";
import ResponsibleAgent from "@/components/crm/EjectWindows/ResponsibleAgent";

export default {
  name: "addRegister",
  components: {
    Table,
    //Agent,
    ResponsibleAgent,
    swd_SalesConsultant,
    ComingPurpose,
    ArrivalStatus,
    ReachShopTimes,
    LeaveShopTimes,
    CustomerSource,
    Remarks,
    txt_CustomerName,
    PhoneNumber,
    WhetherKeepAFile,
    clueInfoPop
  },
  data() {
    return {
      rowData: {
        dlrCode: "",
        ldid: ""
      },
      form: {
        custName: {
          input: ""
        },
        contactTel: {
          input: ""
        }
      },
      clueInfoPop:{
        input:""
      },
      salesCampaignMain:{
        value:""
      },
      cxDlrCode:"",
      cxCaEmpId:"",
      ldPhone:"",
      activeName:"first",
      editableTabsValue:"1",
      ldlb:true,
      xzdj:false,
      radioRS:"1",
      ldDate:this.getDateStr(),
      ddTime:"",
      ldTime:"",
      ddTimeQR:"",
      ldTimeQR:"",
      radList: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ],
      radioMD:"看车",
      radioMDQR:"看车",
      radListLDMD:this.getDrpList(),
      editableTabs:this.getBrdList(),
      yxcx:this.getYXCX("1"),
      dynamicTags: [],
      chkYYCX:[],
      BCldrs:"1",
      BCldmd:"看车",
      BCyxcx:"",
      loadFlag: false, //加载动画
      toggleParam: false, //隐藏查询条件
      dialogVisible: false,
      dialogVisible2:false,
      AgentMain: {
        input: "",
        labelname:"网点"
      },
      swd_SalesConsultantMain: {
        input: ""
      },
      CustomerSourceMain: {
        value: ""
      },
      salesCampaign: {
        value: ""
      },
      ComingPurposeMain: {
        value: ""
      },
      RemarksMain: {
        input: ""
      },
      EnableOrDisableMain: {
        value: ""
      },
      ReachShopTimesMain: {
        value: ""
      },
      LeaveShopTimesMain: {
        value: ""
      },
      WhetherKeepAFileMain: {
        value: ""
      },

      input: "",
      updateControlId: "",
      tableHeight: "",
      tabledatas: {
        colnames: [
          { label: "来店人数", value: "humanQty" },
          { label: "意向车系", value: "" },
          { label: "来店目的", value: "comePurposeId" },
          { label: "来店时间", value: "comeTime" },
          { label: "离店时间", value: "leaveDate" },
          { label: "客户来源", value: "custSource" },
          { label: "销售顾问", value: "caEmpId" },
          { label: "来店状态", value: "comeState" },
          { label: "客户名称", value: "" },
          { label: "电话", value: "" },
          { label: "是否首次来店", value: "" },
          { label: "备注", value: "remark" }
        ],
        tableData: [
          {
            serverClassCode: "早睡保平安！"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csMdmBuComeOrderQueryFindAll,
          apiQueryRow: [
            "humanQty",
            "comePurposeId",
            "comeTime",
            "leaveDate",
            "custSource",
            "caEmpId",
            "comeState",
            "remark"
          ],
          params: {
            dlrId: "",
            caEmpId: "",
            comePurposeId: "",
            comeState: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      tabledatasXZ: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        pagesize:10,
        pageindex:1,
        colnames: [
          { label: "客户姓名", value: "applyPersonName" },
          { label: "联系电话", value: "applyDate" },
          { label: "销售顾问", value: "helpDes" },
          { label: "意向级别", value: "helpPersonName" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintHelpQueryFindAll,
          apiQueryRow: [
            "applyPersonName",
            "applyDate",
            "helpDes",
            "helpPersonName",
            "helpTime",
            "dealDes"
          ],
          params: {
            oemCode:"1",
            groupCode:"1",
            serverOrder:"",
          }
        }
      },
    };
  },
  // created(){
  //   this.getDrpList();
  // },
  mounted() {
    // this.$nextTick(() => {
    //   // 页面渲染完成后的回调
    //   let that = this;
    //   this.$crmcf.__setAutoTableStyle(that);
    // });
  },
  methods: {
    getWD(val){
      let redata={}
      redata=val
      this.cxDlrCode=redata[0].dlrCode
    },
    getXSGW(val) {
      let redata = {};
      redata = val;
      this.cxCaEmpId = redata[0].userId;
    },
    SelectH: function(row) {
      let that = this;
      that.rowData.dlrCode = row.serverClassCode;
      that.rowData.ldid = row.serverClassCode;
    },
    show_upsPage(tab,event) {
      let that=this
      that.yxcx =that.getYXCX(tab.name)
    },
    handleLDRS(val) {
      let that=this
      that.BCldrs=val
    },
    handleLDMD(val) {
      let that=this
      that.BCldmd=val
    },
    handleChange(val) {
      let that=this
      that.dynamicTags=[]
      val.forEach(function(item) {
        that.dynamicTags.push(item);
      })
      that.BCyxcx=that.dynamicTags
    },
    handleClose(tag) {
      let that=this
      that.dynamicTags.splice(that.dynamicTags.indexOf(tag), 1);
      that.BCyxcx=that.dynamicTags
    },
    getDrpList: function() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdsLookupValueQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["lookupValueCode","lookupValueName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {lookupTypeCode:"DB0060"}//值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.radListLDMD=response.data[queryObj.apiConfig.ServiceCode].rows
        }
      });
    },
    getBrdList: function() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmCarBrandQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["carBrandCode","carBrandCn"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {isEnable:"1"}//值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.editableTabs=response.data[queryObj.apiConfig.ServiceCode].rows
        }
      });
    },
    getYXCX(val) {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmVeCarSeriesQueryListForPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["carSeriesCode","carSeriesCn","carBrandCode","mdmCarBrandExtend.carBrandCn"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {isEnable:"1",carBrandCode:val}//值列表编码
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.yxcx=response.data[queryObj.apiConfig.ServiceCode].rows
        }
      });
    },
    getDateStr: function() {
      let dd = new Date();
      dd.setDate(dd.getDate());
      let y = dd.getFullYear();
      let m = dd.getMonth() + 1;
      let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      return (
        y +
        "-" +
        (m < 10 ? "0" + m : m) +
        "-" +
        d
      );
    },
    handleClick(tab, event) {
      let that = this;
      if (tab.name == "second") {
        that.xzdj = true;
        that.ldlb = false;
      } else {
        that.xzdj = false;
        that.ldlb = true;
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    //(optype=1查询，optype=2导出)
    query: function(optype) {
      let that = this;
      debugger;
      //that.loadFlag = true;//加载动画
      // 查询参数
      that.tabledatas.queryObj.params.dlrId = (that.cxDlrCode==""?undefined:that.cxDlrCode);
      that.tabledatas.queryObj.params.caEmpId = (that.cxCaEmpId==""?undefined:that.cxCaEmpId);
      that.tabledatas.queryObj.params.comePurposeId = that.$refs.ComingPurposeMainRef.value;
      that.tabledatas.queryObj.params.comeState = that.$refs.EnableOrDisableMainRef.value;

      // if (that.$refs.ReachShopTimesMain.value[0] == undefined) {
      //   that.tabledatas.queryObj.params.createdDateStart = that.$refs.ReachShopTimesMain.value[0];
      //   that.tabledatas.queryObj.params.createdDateEnd = that.$refs.ReachShopTimesMain.value[1];
      // } else {
      //   that.tabledatas.queryObj.params.createdDateStart = that.$refs.ReachShopTimesMain.value[0] + " " + "00:00:00";
      //   that.tabledatas.queryObj.params.createdDateEnd = that.$refs.ReachShopTimesMain.value[1] + " " + "23:59:59";
      // }

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
          pageSize: optype == "2" ? 99999 : that.tabledatas.pagesize,
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      if (optype == "2") {
        that.buildExportParam(queryObj, paramD);
      }
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (optype == "2") {
          debugger;
          that.loadFlag = false;
          that.$utils.downloadFile(response, paramD.excelName);
          that.loadFlag = false;
        } else {
          if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
            that.loadFlag = false;
            that.tabledatas.tableData =
              response.data[queryObj.apiConfig.ServiceCode].rows;
            that.tabledatas.pageindex =
              response.data[queryObj.apiConfig.ServiceCode].pageindex;
            that.tabledatas.total =
              response.data[queryObj.apiConfig.ServiceCode].records;
          } else {
            that.loadFlag = false;
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
        paramsObj.excelName = "来店列表导出"
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
    // 客户留档
    customerRemian: function() {
      let that = this;
      var html=""
      if(that.rowData.ldid=="")
      {
        html = html + `<div>请至少选择一条数据</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      that.dialogVisible2=true;
      //that.$crmcf.jumpDetailTag(that, "customerRemian", "/customerRemian");
    },
    KHLD:function(){
      let that=this
      that.dialogVisible2=false
      that.$crmcf.jumpDetailTag(that, "customerRemian", "/customerRemian");
    },
    // 新增登记
    addRegister: function() {
      let that = this;
      that.dialogVisible = true;
    },
    //新增登记保存
    saveRegister(){
      let that = this
      debugger
      //校验
      var html=""
      if(that.BCyxcx==""||that.BCyxcx.length==0)
      {
        html = html + `<div>请选择意向车系</div>`
      }
      if(that.ldDate=="")
      {
        html = html + `<div>请选择来店日期</div>`
      }
      if(that.ddTime=="")
      {
        html = html + `<div>请选择到店时间</div>`
      }
      if(that.ldTime=="")
      {
        html = html + `<div>请选择离店时间</div>`
      }
      if(that.ldDate!=""&&that.ddTime!=""&&that.ldTime!="")
      {
        var timeStr = that.ldDate+" "+that.ddTime;
        var time1 = new Date(timeStr).getTime();
        let dd = new Date();
        var timeStr2 = that.ldDate+" "+that.ldTime;
        var time2 = new Date(timeStr2).getTime();
        if (time1 > time2) {
          html = html + `<div>离店时间不能小于到店时间</div>`
        }
      }
      if(that.$refs.CustomerSourceMainRef.value==""||that.$refs.CustomerSourceMainRef.value==null)
      {
        html = html + `<div>请选择客户来源</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      var strcx="";
      for (var i = 0; i < that.BCyxcx.length; i++) {
        for (var j = 0; j < that.yxcx.length; j++) {
          if (that.yxcx[j].carSeriesCn == that.BCyxcx[i]) {
            strcx+=(that.yxcx[j].carBrandCode+","+that.yxcx[j].mdmCarBrandExtend.carBrandCn+","+that.yxcx[j].carSeriesCode+","+that.yxcx[j].carSeriesCn+"&")
          }
        }
      }
      var strmd="";
      for (var j = 0; j < that.radListLDMD.length; j++) {
        if (that.radListLDMD[j].lookupValueName == that.BCldmd) {
          strmd=that.radListLDMD[j].lookupValueCode
        }
      }
      //赋值
      var saveObj={}
      that.$set(saveObj, "humanQty", that.BCldrs);
      that.$set(saveObj, "inteSeriesInfo", strcx.substr(0, strcx.length - 1));
      that.$set(saveObj, "comePurposeId", strmd);
      that.$set(saveObj, "comeTime", that.ldDate+" "+that.ddTime+":00");
      that.$set(saveObj, "leaveDate", that.ldDate+" "+that.ldTime+":00");
      that.$set(saveObj, "custSource", that.$refs.CustomerSourceMainRef.value);
      that.$set(saveObj, "saleActionId", "");
      //that.$set(saveObj, "phone", "");
      that.$set(saveObj, "remark", that.$refs.RemarksMainRef.input);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.mdmBuComeOrderMutationNewRegister,
        // 需要调用的API服务配置
        apiServices: [{
            //表格中台返回网格的字段
            apiQueryRow:[]
        }],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObj
        }
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response =>{
        if(
          response.data[queryObj.apiConfig.ServiceCode].result === "1"  
          //&&response.data[queryObj.apiConfig.ServiceCode].rows!=""
          ){
          //this.dialogVisible = false
          that.$crmcf.showMessages(that,'success','操作成功')
          //that.$crmcf.crmcloseView(that,'crmMyToBe')
          }else{
            that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    },
    // 主页面重置
    reset: function() {
      let that = this;
      that.$refs.AgentMainRef.reset();
      that.$refs.swd_SalesConsultantMainRef.reset();
      that.$refs.ComingPurposeMainRef.reset();
      that.$refs.EnableOrDisableMainRef.reset();
      that.$refs.ReachShopTimesMainRef.reset();
      //that.$refs.WhetherKeepAFileMainRef.reset();
      that.cxDlrCode="";
      that.cxCaEmpId=""
    },
    // 分页
    prev() {
      let that = this;
      if (this.tabledatas.pageIndex > 1) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    }
    // 分页结束
  }
};
</script>
<style>
.filter-params-crmtab .el-col label {
  width: 12%;
}
.el-radio-button--medium .el-radio-button__inner{
  width:100%;
}
.el-radio-button--small .el-radio-button__inner{
  width:100%;
}
.el-checkbox-button--mini .el-checkbox-button__inner{
  width:100%;
}
</style>
