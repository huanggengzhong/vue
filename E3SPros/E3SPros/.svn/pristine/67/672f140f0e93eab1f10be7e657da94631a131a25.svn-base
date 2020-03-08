<template>
  <div class="app-container app-container-table filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="save">保存</el-button>
    </div>

    <div class="filter-container filter-title-crm">基本客户信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <CustomersNameAdd :CustomersName_Add="form.custName" @CatData="choosecust" ref="custadd"
            ></CustomersNameAdd>
          </el-col>
          <el-col :span="6">
              <PhoneNumber :PhoneNumber="zyKHDH" ref="PhoneNumber"></PhoneNumber>
          </el-col>
          <el-col :span="6">
            <IntentionLevel :IntentionLevel="zyLvl" ref="IntentionLevel"></IntentionLevel>
          </el-col>
          <el-col :span="6">
            <el-form-item label="赠送礼品数">
              <el-input v-model="cxGroup" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">试乘试驾信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <TestDrvType :TestDrvType="zySource" ref="TestDrvType" />
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <swd_SalesConsultant :swd_SalesConsultant="zyConsult" ref="swd_SalesConsultant" />
          </el-col>
          <el-col :span="6">
            <TestDrvModel :TestDrvModel="zyHP" ref="TestDrvModel"></TestDrvModel>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="crm-label-required">
            <el-form-item label="开始时间">
              <el-date-picker 
              v-model="ksDate"  
              type="datetime" 
              placeholder="选择时间"
              prefix-icon="none"
              value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6" class="crm-label-required">
            <el-form-item label="结束时间">
              <el-date-picker 
              v-model="jsDate"  
              type="datetime" 
              placeholder="选择时间"
              prefix-icon="none"
              value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="开始里程">
              <el-input v-model="ksMile" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="结束里程">
              <el-input v-model="jsMile" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><CarBrandNumber ref="CarBrandNumber" :CarBrandNumber="tcBrand"></CarBrandNumber></el-col>
          <el-col :span="6"><VINCode ref="VINCode" :VINCode='tcVin'></VINCode></el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <Remarks :Remarks="form.remark" ref="rema"></Remarks>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">用车人信息</div>
    <div class="filter-container filter-params-crm filter-params-sub">
        <el-form label-position="right">
          <el-row>
            <el-col :span="6" class="crm-label-required">
              <sct_Related ref="sct_Related" :sct_Related="lxGXMS"/>
            </el-col>
            <el-col :span="6">
              <UseCarName :UseCarName="form.useCustName" ref="useCustName"></UseCarName>
            </el-col>
            <el-col :span="6">
              <UseCarPhone :UseCarPhone="form.usePhone" ref="usePhone"></UseCarPhone>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" class="crm-label-required">
              <LicenseType ref="LicenseType" :LicenseType="lxProvice"/>
            </el-col>
            <el-col :span="6">
              <el-form-item label="驾驶证号码">
                <el-input v-model="cxGroup" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="驾驶证附件" style="text-align:left">
                <el-upload
                  class="upload-demo"
                  ref="upload"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :file-list="fileList"
                  :auto-upload="false"
                >
                  <el-button slot="trigger" type="primary" size="small">选取文件</el-button>
                  <el-button style="margin-left: 10px;" size="small" @click="submitUpload">上传</el-button>
                </el-upload>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-table :data="tabledatas.tableData" highlight-current-row ref="table"
            :style="{width:'100%',height:tableHeight+'px'}" v-loading.body="false" element-loading-text="Loading" border fit>
            <el-table-column type="index" label="序号" width="55"></el-table-column>
            <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
            <el-table-column label="评价结果" align="center" width="300">
              <template slot-scope="scope">
                <el-rate v-model="scope.row.addQty" show-text :texts="pfsz" @change="getpf"></el-rate>
              </template>
            </el-table-column>
            <el-table-column label="备注" align="center" width="500">
              <template slot-scope="scope">
                <el-input size="small" v-model="scope.row.custRequirement" @blur="handleDlrPrice(scope.row)" text-aling="center"/>
              </template>
            </el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
    </div>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import IntentionLevel from "@/components/crm/Select/Common/Customer/IntentionLevel";//意向级别
import TestDrvModel from "@/components/crm/EjectWindows/TestDrvModel";//试乘试驾车型
import swd_SalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant"; //销售顾问
import TestDrvType from "@/components/crm/Select/Clue/CallCenterClue/TestDrvType"; //试乘试驾类型
import sct_Related from "@/components/crm/Select/ONEID/sct_Related";//与车主关系
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";//车牌号
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";//VIN码
import UseCarName from "@/components/crm/textbox/Public/customerInfos/UseCarName";
import UseCarPhone from "@/components/crm/textbox/Public/customerInfos/UseCarPhone";
import LicenseType from "@/components/crm/Select/Clue/CallCenterClue/LicenseType";//驾照类型
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";//电话
import CustomersNameAdd from "@/components/crm/EjectWindows/CustomersName_Add";

//单据信息
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
export default {
  name: "TestDrivingedit",
  components: {
    Table,
    IntentionLevel,
    TestDrvModel,
    swd_SalesConsultant,
    TestDrvType,
    LicenseType,
    PhoneNumber,
    sct_Related,
    CustomersNameAdd,
    VINCode,
    UseCarName,
    UseCarPhone,
    CarBrandNumber,
    Remarks
  },
  data() {
    return {
        pfsz:['垃圾', '失望', '一般', '满意', '惊喜'],
        ksDate:"",
        jsDate:"",
        ksMile:"",
        jsMile:"",
        fileList: [],
        form:{
            vCartypeDesc: {
            input: ""
            },
            carBrandCn: {
            input: ""
            },
            engineNo: {
            input: ""
            },
            vin: {
            input: ""
            },
            carLicense: {
            input: ""
            },
            vCarseriesDesc: {
            input: ""
            },
            backupTel: {
            input: ""
            },
            usePhone: {
            input: ""
            },
            useCustName: {
            input: ""
            },
            useBackupTel: {
            input: ""
            },
            contactTel: {
            input: ""
            },
            custName: {
            input: ""
            },
            gender: {
            value: ""
            },
            useGenderCode: {
            value: ""
            },
            serverOrder: {
            input: ""
            },
            createdDate: {
            value: ""
            },
            serverSourceCode: {
            value: ""
            },
            addQty: {
            input: ""
            },
            linkBillCode: {
            input: "",
            dialogVisible:false
            },
            faultDate: {
            value: ""
            },
            faultMileage: {
            input: ""
            },
            mileage: {
            input: ""
            },
            serverFullClassName: {
            input: "",
            dialogVisible:false
            },
            baseSeriesName: {
            input: "",
            dialogVisible:false
            },
            dutyDlrName: {
            input: "",
            dialogVisible:false
            },
            nextDealOrgName: {
            input: "",
            dialogVisible:false
            },
            nextDealEmpName: {
            input: "",
            dialogVisible:false
            },
            nextDealPhone: {
            input: ""
            },
            serverLevel: {
            value: ""
            },
            serverUrgency: {
            value: ""
            },
            distRemark: {
            input: ""
            },
            remark: {
            input: ""
            }
        },
        tabledatas: {
            colnames: [
              { label: "评价类型", value: "serverTitle" },
              { label: "评价项", value: "complainDesc" },
              // { label: "评价结果", value: "addQty" },
              // { label: "评价时间", value: "createdDate" },
              // { label: "评价人", value: "dutyPersonName" },
              // { label: "备注", value: "custRequirement" }
            ],
            tableData: [],
            queryObj: {
            // .查询条件缺少责任人(姓名)  网格列也缺少责任人(姓名)
            apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
            apiQueryRow: [
                "createdDate",
                "serverTitle",
                "custRequirement",
                "complainDesc",
                "serverAnswer",
                "addQty"
            ],
            params: {
                //oemCode:"",
                //groupCode:"",
                //serverType:"",
                //nodeCode:"",
                //carBrandCode:"",
                //accountId:"",
                //isEnable:""
                //dutyPersonName
            }
            },
            pagesize: 10,
            pageindex: 1,
            total: 0
        }
    };
  },
  mounted:function(){
    this.$nextTick(function(){
      this.initData("TS19092700001")
    });
  },
  methods: {
    getpf(val){
      let that=this;
      debugger
      var str=val;
    },
    handleDlrPrice(val) {
      // if(!Number(val.beforeDlrPrice)){
      //   this.$message({
      //     message: '请输入正确的数字格式',
      //     type: 'warn',
      //     uration: 2000
      //   })
      // } else if (Number(val.beforeDlrPrice) > Number(val.beforeUserPrice) ||Number(val.beforeDlrPrice) < 0) {
      //   this.$message({
      //     message: '未来网点价不能大于建议零售价或未来网点价不能小于0',
      //     type: 'warn',
      //     uration: 2000
      //   })
      // }
      // val.beforeDlrPrice = 0
      return false
    },
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
    handleSizeChange(val) {
      this.tabledatas.pagesize = val;
      this.query();
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getarr(val){
      
      let redata={}
      redata=val
      this.xzUserId=redata[0].userId
    },
    initData(fwdh){
      debugger
      let that = this;
      if(fwdh==undefined)
      {
        return;
      }
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
              "carBrandCn",
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
              "custTag",
              "dealDlrCode",
              "dealDlrName",
              "distRemark",
              "dutyDlrCode",
              "dutyDlrName",
              "dutyObj",
              "empName",
              "engineNo",
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
            oemCode:"1",
            groupCode:"1",
            serverOrder:fwdh
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          
          // let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          // that.TSserverId=results["serverId"]
          // that.TSserverOrder=results["serverOrder"]
          // that.crruNode=results["crruNode"]
          // that.carBrandCode=results["carBrandCode"]
          // that.bigClassCode=results["bigClassCode"]
          // for (let key in that.form) {
          //   if("input" in that.form[key]){
          //     if(results.hasOwnProperty(key))
          //     {
          //       that.form[key].input = results[key];
          //       that.$refs[key].getData()
          //     }
          //   }else{
          //     if(results.hasOwnProperty(key)){
          //       that.form[key].value = results[key];
          //       that.$refs[key].getData()
          //     }
          //   }
          // }
          debugger
          that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;
        }else{
          that.$crmcf.showMessages(that,"error",response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
    },
    applyHF: function() {
      this.getNextInfo("TS_PVSQJA");
    },
    reviewJA: function() {
      this.save("TS_JA");
    },
    getPlanMonth(code) {
      
      this.valueList = code;
    },
    getNextInfo(val){
      ;
      let that = this;
      that.isJaFlag=""
      var saveObj={}
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "carBrandCode", that.carBrandCode);
      that.$set(saveObj, "serverClassCode", that.bigClassCode);
      that.$set(saveObj, "nodeCode", val);
      let queryObj = {
        // api配置
        type: "query",
        apiConfig: crmApis.getNextDutyPerson,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "dutyEmpId",
              "dutyEmpName",
              "dutyOrgId",
              "dutyOrgName",
              "dutyUserId",
              "dutyUserMobile",
              "dutyUserName"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObj
        }
      };

      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          if(results==undefined)
          {
            var html=`<div>找不到下一步处理人</div>`
            if (html != "") {
              this.$notify.error({
                title: "校验项",
                dangerouslyUseHTMLString: true,
                message: html
              });
              return
            }
          }else{
            //给下一责任组件赋值
            that.nextDealUserId=results["dutyUserId"];
            that.nextDealUserName=results["dutyUserName"];
            that.nextDealEmpId=results["dutyEmpId"];
            that.nextDealEmpName=results["dutyEmpName"];
            that.nextDealOrgId=results["dutyOrgId"];
            that.nextDealOrgName=results["dutyOrgName"];
            this.save(val)
          }
        }else{
          that.$crmcf.showMessages(that,"error",response.data[queryObj.apiConfig.ServiceCode].msg)
        }
      });
    },
    save(val){
      
      let that = this
      //校验
      var html=""
      if(1==1)
      {
        html = html + `<div>请填写审核意见</div>`
      }
      if (html != "") {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      //赋值
      var saveObj={}
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverType", "2");
      that.$set(saveObj, "custName", that.$refs.custName.input);
      that.$set(saveObj, "contactTel", that.$refs.contactTel.input);
      that.$set(saveObj, "serverId", that.TSserverId);
      that.$set(saveObj, "serverOrder", that.TSserverOrder);
      that.$set(saveObj, "crruNode", val.toString()=="[object MouseEvent]"?that.crruNode:val);
      that.$set(saveObj, "dealTitle", "厂家审核");
      that.$set(saveObj, "nextDealUserId", that.nextDealUserId);
      that.$set(saveObj, "nextDealUserName", that.nextDealUserName);
      that.$set(saveObj, "nextDealEmpId", that.nextDealEmpId);
      that.$set(saveObj, "nextDealEmpName", that.nextDealEmpName);
      that.$set(saveObj, "nextDealOrgId", that.nextDealOrgId);
      that.$set(saveObj, "nextDealOrgName", that.nextDealOrgName);
      that.$set(saveObj, "closeResult", that.dcjg);
      var empstr = "";//批量添加
      that.checkList.forEach(item => {
        empstr+=item+","
      });
      if(empstr!="")
      {
        empstr=empstr.substr(0, empstr.length - 1)
      }
      that.$set(saveObj, "dutyObj", empstr);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csBuComplaintOrderMutationDealTS,
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
          that.dialogVisible = false
          that.$crmcf.showMessages(that,"success","操作成功")
          that.$crmcf.crmcloseView(that,"crmMyToBe")
          }else{
            that.$crmcf.showMessages(that,"error",response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    },
    refuse: function() {
      this.save("TS_PVSHBH");
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    applyXZ: function() {
      let that = this;
      that.dialogVisible = true;
      that.xzUserId="";
      if(that.$refs.serverOrder.input==""||that.$refs.serverOrder.input==null)
      {
        return;
      }
      that.tabledatasXZ.queryObj.params.serverOrder = that.$refs.serverOrder.input;
      setTimeout(function () {
        
        if (that.$refs.tableXZ!=undefined){
          that.$refs.tableXZ.getData();
        }
      }, 100)
    },
    applyHP: function() {
      
      let that = this
      //校验
      var html=""
      if(that.xzUserId=="")
      {
        html = html + `<div>请选择协助人</div>`
      }
      if(that.xzreason=="")
      {
        html = html + `<div>请填写申请协助说明</div>`
      }
      if (html != "") {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      //赋值
      var saveObj={}
      that.$set(saveObj, "oemCode", "1");
      that.$set(saveObj, "groupCode", "1");
      that.$set(saveObj, "serverId", that.TSserverId);
      that.$set(saveObj, "serverOrder", that.TSserverOrder);
      that.$set(saveObj, "helpPersonId", that.xzUserId);
      that.$set(saveObj, "helpDes", that.xzreason);

      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.complaintHelpMutationSave,
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
          that.dialogVisible = false
          that.$crmcf.showMessages(that,"success","协助申请成功")
          }else{
            that.$crmcf.showMessages(that,"error",response.data[queryObj.apiConfig.ServiceCode].msg)
          }
      })
    }
  }
};
</script>
<style>
/* .filter-params .el-form-item__label {
  margin-right: 0px;
}
.filter-params-crm .el-col {
  margin-bottom: -10px;
}
.filter-params .long-col .el-input {
  width: 85%;
}
.filter-params .long-col label {
  width: 15%;
}
.filter-params .long-col .el-textarea {
  width: 85%;
}
.app-main[data-v-078753dd] {
  overflow: scroll;
} */
</style>
