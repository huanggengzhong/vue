<template>
  <div>
    <el-tabs :tab-position="tabPosition" v-model="qqq" @tab-click="showhide" style="height: 200px;width:100%">
      <el-tab-pane label="客户视图" class="custView">
        <el-tabs v-model="actname">
          <el-tab-pane label="客户信息" name="first">
            <div class="filter-container filter-params-crm filter-params-sub">
            <el-form label-position="right">
              <el-row>
                <el-col :span="6">
                  <el-form-item label="客户姓名">
                    <el-input v-model="custName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="性别">
                    <el-input v-model="genderName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="生日">
                    <el-input v-model="birthDate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="身份证">
                    <el-input v-model="credNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="移动电话">
                    <el-input v-model="contactTel"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="家庭电话">
                    <el-input v-model="homeTel"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="办公电话">
                    <el-input v-model="officeTel"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="邮政编码">
                    <el-input v-model="addrZip"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="24" id="addr-col">
                  <el-form-item label="地址">
                    <el-input v-model="addr"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" class="user">
                  <el-form-item label="用车人姓名">
                    <el-input v-model="useCustName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="性别">
                    <el-input v-model="userGender"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="生日">
                    <el-input v-model="userbirthday"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="身份证">
                    <el-input v-model="userlinense"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="车辆信息" name="second">
            <div class="filter-container filter-params-crm filter-params-sub">
            <el-form label-position="right">
              <el-row>
                <el-col :span="6">
                  <el-form-item label="车辆品牌">
                    <el-input v-model="carBrand"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="车牌号">
                    <el-input v-model="carLicense"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="VIN码">
                    <el-input v-model="vin"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="车系">
                    <el-input v-model="carSeriesCn"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="车型名称">
                    <el-input v-model="smallCarTypeCn"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="发动机号">
                    <el-input v-model="engineNo"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="变速箱型">
                    <el-input v-model="tranType"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="排量">
                    <el-input v-model="engineCarpush"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="车身颜色">
                    <el-input v-model="carColorName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6" class="user">
                  <el-form-item label="销售经销商">
                    <el-input v-model="dlrShortName"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="交车日期">
                    <el-input v-model="saleDate"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="销售人员">
                    <el-input v-model="saler"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="保修期限">
                    <el-input v-model="baoxiuqixian"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="截止保修期">
                    <el-input v-model="jiezhibaoxiu"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            </div>
          </el-tab-pane>
          <el-tab-pane label="触点记录" name="third">
            <div><Table :tabledatas="tableDatasCD" ref="tableCD" /></div>
          </el-tab-pane>
          <el-tab-pane label="沟通记录" name="four">
            <div><Table :tabledatas="tableDatasGT" ref="tableGT" /></div>
          </el-tab-pane>
          <el-tab-pane label="处理流程" name="five">
            <div><Table :tabledatas="tableDatasLC" ref="tableLC" /></div>
          </el-tab-pane>
          <el-tab-pane label="处理状态" name="six">
            
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="话术">话术</el-tab-pane>
      <el-tab-pane label="知识库">知识库</el-tab-pane>
      <el-tab-pane label="地图查询">地图查询</el-tab-pane>
      <el-tab-pane label="投诉" class="complainView">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="处理记录" name="first">
            <div><Table :tabledatas="tableDatasCL" ref="tableCL" /></div>
          </el-tab-pane>
          <el-tab-pane label="协助记录" name="second">
            <div><Table :tabledatas="tableDatasXZ" ref="tableXZ" /></div>
          </el-tab-pane>
          <el-tab-pane label="回访记录" name="third">
            <div><Table :tabledatas="tableDatasHF" ref="tableHF" /></div>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
    <!-- <el-row>
   <el-col :span="24">
    <i class="el-icon-contactTel"></i>
   </el-col>
    </el-row>-->
  </div>
</template>
<script>
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "ExtendedInfo",
  components: {
    Table
  },
  props:{
    queryParams:{
      serverOrder:{
        type:String,
        default:""
      }
    }
  },
  data() {
    return {
      tabPosition: "right",
      qqq:'eee',
      actname:'first',
      activeName:'first',
      custName:"",
      genderName:"",
      birthDate:"",
      credNo:"",
      contactTel:"",
      homeTel:"",
      officeTel:"",
      addrZip:"",
      addr:"",
      useCustName:"",
      userGender:"",
      userbirthday:"",
      userlinense:"",

      carBrand:"",
      carLicense:"",
      vin:"",
      carSeriesCn:"",
      smallCarTypeCn:"",
      engineNo:"",
      tranType:"",
      engineCarpush:"",
      carColorName:"",
      dlrShortName:"",
      saleDate:"",
      saler:"",
      baoxiuqixian:"",
      jiezhibaoxiu:"",
      
      tableDatasCL: {
        isoperat:false,
        colnames:[
          { label: "组织", value: "orgName" },
          { label: "处理人", value: "dealPerson" },
          { label: "意见", value: "dealStatus" },
          { label: "内容", value: "remark" },
          { label: "处理时间", value: "dealTime" },
          //{ label: "附件", value: "touchStatusName" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuDealRecordQueryFindAll,
          apiQueryRow: [
            "orgName",
            "dealPerson",
            "dealTime",
            "dealStatus",
            "remark",
          ],
          params: {
            oemCode:this.$store.getters.orgInfo.OEM_CODE,
            groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:"1"
          }
        }
      },
      tableDatasXZ: {
        isoperat:false,
        colnames:[
          { label: "投诉日期", value: "createdDate" },
          { label: "摘要", value: "serverTitle" },
          { label: "客户要求", value: "custRequirement" },
          { label: "投诉内容", value: "complainDesc" },
          { label: "协助处理人", value: "factReviewDate" },
          { label: "协助处理部门", value: "touchStatusName" },
          //{ label: "回访类型", value: "reviewTypeName" },
          { label: "处理时间", value: "hfPerson" },
          { label: "处理内容", value: "serverAnswer" }
        ],
        queryObj: {
          // .查询条件缺少责任人(姓名)  网格列也缺少责任人(姓名)
          apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
          apiQueryRow: [
            "createdDate",
            "serverTitle",
            "custRequirement",
            "complainDesc",
            "serverAnswer"
          ],
          params: {
            oemCode:this.$store.getters.orgInfo.OEM_CODE,
            groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:""
          }
        },
      },
      tableDatasHF: {
        isoperat:false,
        colnames:[
          { label: "回访单号", value: "reviewCode" },
          { label: "来源单号", value: "serverOrder" },
          { label: "来源单据类型", value: "clueType" },
          { label: "联系电话", value: "contactTel" },
          { label: "接触状态", value: "touchStatusName" },
          { label: "备注", value: "remark" },
          //{ label: "回访类型", value: "reviewTypeName" },
          { label: "建单时间", value: "createdDate" },
          { label: "回访内容", value: "reviewDesc" },
          { label: "计划拜访时间", value: "nextCallbackDate" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryReviewRecord,
          apiQueryRow: [
            "reviewCode",
            "serverOrder",
            "clueType",
            "contactTel",
            "touchStatusName",
            "remark",
            "createdDate",
            "reviewDesc",
            "nextCallbackDate"
          ],
          params: {
            // oemCode:this.$store.getters.orgInfo.OEM_CODE,
            // groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:""
          }
        }
      },
      tableDatasCD:{
        isoperat:false,
        colnames:[
          { label: "接触时间", value: "reviewCode" },
          { label: "接触类型", value: "serverOrder" },
          { label: "接触方式", value: "clueType" },
          { label: "单号", value: "contactTel" },
          { label: "我方责任人", value: "touchStatusName" },
          { label: "备注", value: "remark" },
          //{ label: "回访类型", value: "reviewTypeName" },
          { label: "处理记录", value: "createdDate" },
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [
            "reviewCode",
            "serverOrder",
            "clueType",
            "contactTel",
            "touchStatusName",
            "remark",
            "createdDate",
            "reviewDesc",
            "nextCallbackDate"
          ],
          params: {
            // oemCode:this.$store.getters.orgInfo.OEM_CODE,
            // groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:""
          }
        }
      },
      tableDatasGT:{
        isoperat:false,
        colnames:[
          { label: "沟通时间", value: "reviewCode" },
          { label: "业务类别", value: "serverOrder" },
          { label: "类别", value: "clueType" },
          { label: "沟通人", value: "contactTel" },
          { label: "沟通类型", value: "touchStatusName" },
          { label: "沟通内容", value: "remark" },
          //{ label: "回访类型", value: "reviewTypeName" },
          { label: "经销商简称", value: "createdDate" },
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [
            "reviewCode",
            "serverOrder",
            "clueType",
            "contactTel",
            "touchStatusName",
            "remark",
            "createdDate",
            "reviewDesc",
            "nextCallbackDate"
          ],
          params: {
            // oemCode:this.$store.getters.orgInfo.OEM_CODE,
            // groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:""
          }
        }
      },
      tableDatasLC:{
        isoperat:false,
        colnames:[
          { label: "部门", value: "reviewCode" },
          { label: "科室", value: "serverOrder" },
          { label: "操作人", value: "clueType" },
          { label: "执行操作", value: "contactTel" },
          { label: "操作时间", value: "touchStatusName" },
          { label: "处理记录", value: "remark" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [
            "reviewCode",
            "serverOrder",
            "clueType",
            "contactTel",
            "touchStatusName",
            "remark",
            "createdDate",
            "reviewDesc",
            "nextCallbackDate"
          ],
          params: {
            // oemCode:this.$store.getters.orgInfo.OEM_CODE,
            // groupCode:this.$store.getters.orgInfo.GROUP_CODE,
            serverOrder:""
          }
        }
      },
    };
  },
  methods: {
    showhide(ele) {
      let node = document.getElementById(ele.$el.id);
      if(node.style.display == "none"){
        node.style.display = "block";
      }else{
        node.style.display = "none";
      }
    },
    initcustinfo(){
      let that=this
      let queryObj = {
        // api配置
        apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "addQty",
              "backupTel",
              "baseSeriesCode",
              "baseSeriesName",
              "bigClassCode",
              "carBrandCode",
              "carLicense",
              "caseTime",
              "closeResult",
              "complainDesc",
              "contactTel",
              "createdDate",
              "crruNode",
              "crruNodeName",
              "custAge",
              "custName",
              "custNo",
              "custRequirement",
              "dealDlrCode",
              "dealDlrName",
              "distRemark",
              "dutyDlrCode",
              "dutyDlrName",
              "dutyObj",
              "empName",
              "faultDate",
              "faultMileage",
              "gender",
              "genderName",
              "invoiceDate",
              "isAsseName",
              "lastUpdatedDate",
              "linkBillCode",
              "mileage",
              "nextDealEmpName",
              "nextDealOrgName",
              "nextDealPhone",
              "remark",
              "requOrgCode",
              "requOrgName",
              "reviewScore",
              "serverAnswer",
              "serverClassCode",
              "serverFullClassName",
              "serverId",
              "serverLevel",
              "serverLevelName",
              "serverOrder",
              "serverSourceCode",
              "serverSourceName",
              "serverTitle",
              "serverUrgency",
              "serverUrgencyName",
              "status",
              "statusName",
              "useBackupTel",
              "useCustAge",
              "useCustName",
              "useGenderCode",
              "useGenderName",
              "usePhone",
              "vCarseriesDesc",
              "vCartypeDesc",
              "vin"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            serverOrder: that.queryParams.serverOrder,
            oemCode: this.$store.getters.orgInfo.OEM_CODE,
            groupCode: this.$store.getters.orgInfo.GROUP_CODE
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          for(let key in results){
            
            that[key]=results[key]
          }
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });

       let queryObjcar = {
        // api配置
        apiConfig: crmApis.mdmDlrCarQuery,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [

              "carBrandCode",
              "carLicense",
              "carSeriesCn",
              "smallCarTypeCn",
              "engineNo",

              "tranType",
              "engineCarpush",
              "carColorName",
              "dlrShortName",
            
              "saleDate",
              "vin"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            // serverOrder: that.queryParams.serverOrder,
            // oemCode: this.$store.getters.orgInfo.OEM_CODE,
            // groupCode: this.$store.getters.orgInfo.GROUP_CODE
          }
        }
      };
      var paramDcar = that.$getParams(queryObjcar);
      requestGraphQL(paramDcar).then(response => {
        
        if (response.data[queryObjcar.apiConfig.ServiceCode].result == "1") {
          let results = response.data[queryObjcar.apiConfig.ServiceCode].rows[0];
          for(let key in results){
            that[key]=results[key]
          }
          
        }else{
          that.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });


    },
    initCL(){
      let that=this 
      that.tableDatasCL.queryObj.params.serverOrder=that.queryParams.serverOrder
      that.tableDatasXZ.queryObj.params.serverOrder=that.queryParams.serverOrder
      that.tableDatasHF.queryObj.params.serverOrder=that.queryParams.serverOrder
      that.$refs.tableCL.getData()
      that.$refs.tableXZ.getData()
      that.$refs.tableHF.getData()
    }
  }
};
</script>
<style>
.custView {
  position: relative;
}
.complainView {
  position: relative;
}
.custView > div {
  position: fixed;
  width: 900px;
  height: 300px;
  z-index: 999;
  right: 100px;
  background: white;
}
.complainView > div {
  position: fixed;
  width: 900px;
  height: 300px;
  z-index: 999;
  right: 100px;
  background: white;
  overflow: auto;
}
.hide {
  display: none;
}
.filter-params-crm #addr-col label{
  width: 7%
}
.filter-params-crm #addr-col .el-input{
  width: 93%
}
.filter-params-crm .user label{
      overflow: inherit;
}
</style>