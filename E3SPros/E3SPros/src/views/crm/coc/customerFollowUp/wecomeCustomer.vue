/*
 * @Author: xgz 
 * @Date: 2019-09-24 09:26:19 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-09-24 19:22:33
 */

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="save">保存</el-button>
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
      <div class="filter-params-crmtab">
        <el-row>
          <el-col style="text-align: left;">
          <el-tabs v-model="editableTabsValue" class="tabs" type="card" @tab-click="show_upsPage">
              <el-tab-pane :key="item.carBrandCode"
                v-for="item in editableTabs"
                :label="item.carBrandCn"
                :name="item.carBrandCode">
                <el-checkbox-group :min="0" :max="3" v-model="chkYYCX" @change="handleChange" size="mini" style="width:100%">
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
      <div class="filter-container filter-title-crm">销售顾问</div>
      <div  class="filter-params-crm">
        <el-row>
          <el-col style="text-align: left;">
            <el-radio-group v-model="radioGW" size="small" @change="handleXSGW">
              <el-radio-button v-for="itm in radListXSGW" 
              :label="itm.empName" 
              :key="itm.userId">{{itm.empName}}</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
      </div>
      <div  class="filter-params-crm">
        <el-form label-position="right">
          <el-row>
            <el-col :span="6">
              <Remarks :Remarks="remark" ref="remark" />
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Agent from "@/components/crm/EjectWindows/Agent"; //网点多选
import swd_SalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant"; //销售顾问
import ComingPurpose from "@/components/crm/Select/CallCenterClue/ComingPurpose"; //来店目的
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable"; //是否启用
import ReachShopTimes from "@/components/crm/Time/ReachShopTimes"; //到店时间
import LeaveShopTimes from "@/components/crm/Time/LeaveShopTimes"; //离店时间
import CustomerSource from "@/components/crm/Select/Common/Customer/CustomerSource"; //客户来源
import salesCampaign from "@/components/crm/Select/Common/Customer/salesCampaign"; //营销活动
import Remarks from "@/components/crm/textbox/Complaint/Remarks"; //备注

import WhetherKeepAFile from "@/components/crm/Select/Whether/WhetherKeepAFile"; //是否已留档
export default {
  name: "wecomeCustomer",
  components: {
    Agent,
    swd_SalesConsultant,
    ComingPurpose,
    EnableOrDisable,
    ReachShopTimes,
    LeaveShopTimes,
    CustomerSource,
    salesCampaign,
    Remarks,
    WhetherKeepAFile
  },
  data() {
    return {
      remark:{
        input:""
      },
      activeName:"first",
      editableTabsValue:"1",
      ldlb:true,
      xzdj:false,
      radioRS:"1",
      ldDate:this.getDateStr(),
      ddTime:"",
      ldTime:"",
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
      radioGW:"",
      radListLDMD:this.getDrpList(),
      radListXSGW:this.getXSGW(),
      editableTabs:this.getBrdList(),
      yxcx:this.getYXCX("1"),
      dynamicTags: [],
      chkYYCX:[],
      BCldrs:"1",
      BCldmd:"看车",
      BCyxcx:"",
      BCxsgw:"",
      loadFlag: false, //加载动画
      toggleParam: false, //隐藏查询条件
      dialogVisible: false,
      AgentMain: {
        input: ""
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
          { label: "来店人数", value: "serverClassCode" },
          { label: "意向车系", value: "serverClassCode1" },
          { label: "来店目的", value: "serverClassCode2" },
          { label: "来店时间", value: "serverClassCode3" },
          { label: "离店时间", value: "serverClassCode4" },
          { label: "客户来源", value: "serverClassCode5" },
          { label: "销售顾问", value: "serverClassCode6" },
          { label: "是否启用", value: "serverClassCode7" },
          { label: "客户名称", value: "serverClassCode8" },
          { label: "电话", value: "serverClassCode9" },
          { label: "是否首次来店", value: "serverClassCode10" },
          { label: "备注", value: "serverClassCode11" }
        ],
        tableData: [
          {
            serverClassCode: "早睡保平安！"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.serverClassQueryFindAll,
          apiQueryRow: [
            "serverClassCode",
            "serverClassName",
            "isEnable",
            "parentCode",
            "parentName",
            "classLevel",
            "serverType",
            "createdDate",
            "lastUpdatedDate",
            "serverTypeName",
            "isEnableName",
            "classLevelName",
            "updateControlId"
          ],
          params: {
            serverClassCode: "",
            serverClassName: "",
            classLevel: "",
            parentCode: "",
            serverType: "",
            isEnable: "",
            createdDateStart: "",
            createdDateEnd: "",
            parentName: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
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
    handleXSGW(val) {
      let that=this
      that.BCxsgw=val
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
    getXSGW: function() {
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdsSysPositionQueryEmpList,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["userId","empName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {isEnable:"1",dlrCode:"H2902"}//positionCode:"VE0001",
        }
      };
      let paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.radListXSGW=response.data[queryObj.apiConfig.ServiceCode].rows
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
    // 迎宾
    save(){
      let that = this
      //校验
      var html=""
      if(that.BCyxcx==""||that.BCyxcx.length==0)
      {
        html = html + `<div>请选择意向车系</div>`
      }
      if(that.BCxsgw=="")
      {
        html = html + `<div>请选择销售顾问</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      debugger
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
      var stremp="";
      for (var j = 0; j < that.radListXSGW.length; j++) {
        if (that.radListXSGW[j].empName == that.BCxsgw) {
          stremp=that.radListXSGW[j].userId
        }
      }
      //赋值
      var saveObj={}
      that.$set(saveObj, "humanQty", that.BCldrs);
      that.$set(saveObj, "inteSeriesInfo", strcx.substr(0, strcx.length - 1));
      that.$set(saveObj, "comePurposeId", strmd);
      that.$set(saveObj, "caEmpId", stremp);
      that.$set(saveObj, "remark", that.$refs.remark.input);
      
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.mdmBuComeOrderMutationWelcome,
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
          that.$crmcf.showMessages(that,'success','操作成功')
          }else{
            that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    }
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
