<!--
* 描述: 客户维护编辑页面  维护客户信息
* 创建人: zouzx
* 创建时间: 2019-08-07
* 记录：
*  20190807 新建 zouzx
-->
<template>
<div class="app-container app-container-table">
  <div class="filter-container filter-button">
    <el-button type="primary" @click="save">保存</el-button>
    <el-button @click="showdialog2">添加车辆</el-button>
  </div>
  <div class="filter-container filter-title">客户信息</div>
  <div class="filter-container filter-params-crm filter-params-sub">
    <el-form label-position="right">
        <el-row>
          <el-col :span="6" class="crm-label-required"><txt_CustomerName ref="txt_CustomerName" :txt_CustomerName='whCustName'/></el-col>
          <el-col :span="6"><Sex ref="Sex" :Sex="whSex"/></el-col>
          <el-col :span="6"><Birthday ref="Birthday" :Birthday="whBirthday"/></el-col>
          <el-col :span="6"><ITCard ref="ITCard" :ITCard='whITCard'/></el-col>
        </el-row>
        <el-row>
          <el-col :span="6" class="crm-label-required"><PhoneNumber ref="PhoneNumber" :PhoneNumber='whPhone'/></el-col>
          <!-- <el-col :span="6"><MobilePhone ref="MobilePhone" :MobilePhone='whMobile'/></el-col> -->
          <el-col :span="6"><HomePhone ref="HomePhone" :HomePhone='whJTPhone'/></el-col>
          <el-col :span="6"><OfficePhone ref="OfficePhone" :OfficePhone='whBGPhone'/></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><Province ref="Province" :Province="whProvice" @changeCode="changesf"/></el-col>
          <el-col :span="6"><City ref="City" :City="whCity" @changeCode="changecs"/></el-col>
          <el-col :span="6"><District ref="District" :District="whDistrict" @changeCode="changeqx"/></el-col>
          <el-col :span="6"><EMS ref="EMS" :EMS='whEMS'/></el-col>
        </el-row>
        <el-row>
          <el-col :span="6"><txt_DetailAddress ref="txt_DetailAddress" :txt_DetailAddress="whAddr"/></el-col>
        </el-row>
      </el-form>
    </div>
    <el-dialog :visible.sync="dialogVisible3" :append-to-body="true" style="height:580px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" width="900px" class="dialog" title="添加车辆" >
      <div class="filter-container filter-title-crm">
        <el-form label-position="right">
          <el-row>
            <el-col :span="14" class="long-col">
              <el-input :disabled="true" v-model="cruCust" style=""></el-input>
            </el-col>
            <el-col :span="10" class="long-col">
              <div class="filter-container filter-button">
              <el-button type="primary" @click="query2">查询</el-button>
              <el-button @click="updateCZ">变更车主</el-button>
              <el-button @click="addYCR">新增用车人</el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="8"><CarBrandNumber ref="CarBrandNumber" :CarBrandNumber="tcBrand"></CarBrandNumber></el-col>
          <el-col :span="8"><VINCode ref="VINCode" :VINCode='tcVin'></VINCode></el-col>
          <el-col :span="8"><EngineNumber ref="EngineNumber" :EngineNumber='tcEngine'></EngineNumber></el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-table
              :data="tabledatas2.tableData"
              highlight-current-row
              style="width: 100%;height:350px"
              max-height="350px"
              v-loading.body="false"
              element-loading-text="Loading"
              border
              fit
            >
              <el-table-column type="index" label="序号" width="55"></el-table-column>
              <el-table-column
                v-for="item in tabledatas2.colnames"
                :key="item.value"
                :label="item.label"
                :prop="item.value"
                align="center"
              ></el-table-column>
            </el-table>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="tabledatas2.total" 
              :page-size="tabledatas2.pagesize"
              :current-page="tabledatas2.pageindex"
              @prev-click="prev2" 
              @next-click="next2" 
              @current-change="changepage2"
            ></el-pagination>
          </el-col>
        </el-row>
      </el-form>
      </div>
    </el-dialog>
  <div class="filter-container filter-title">车辆信息</div>
  <el-table
    :data="tabledatas.tableData"
    highlight-current-row
    style="width: 100%;height:350px"
    max-height="350px"
    v-loading.body="false"
    element-loading-text="Loading"
    border
    fit
  >
    <el-table-column type="index" label="序号" width="55"></el-table-column>
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
    :page-size="tabledatas.pagesize"
    :current-page="tabledatas.pageindex"
    @prev-click="prev" 
    @next-click="next" 
    @current-change="changepage"
  ></el-pagination>
</div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";//客户名称
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";//电话
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";//车牌号
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";//VIN码
import EngineNumber from '@/components/crm/textbox/Public/customerInfos/EngineNumber';//发动机号
import Sex from '@/components/crm/Select/Common/Customer/Sex';//性别
import Birthday from "@/components/crm/Time/Birthday";
import ITCard from '@/components/crm/textbox/Public/customerInfos/ITCard';//身份证
import MobilePhone from '@/components/crm/textbox/Public/customerInfos/MobilePhone';//移动电话
import HomePhone from '@/components/crm/textbox/Public/customerInfos/HomePhone';//家庭电话
import OfficePhone from '@/components/crm/textbox/Public/customerInfos/OfficePhone';//办公电话
import Province from '@/components/crm/Select/Common/Province';//省份
import City from '@/components/crm/Select/Common/City';//城市
import District from '@/components/crm/Select/Common/District';//区县
import EMS from '@/components/crm/textbox/Public/customerInfos/EMS';//邮政编码
import txt_DetailAddress from '@/components/crm/textbox/txt_DetailAddress';//详细地址
export default {
  name: "crmCustomerInfoEdit",
  components: {
    txt_CustomerName,
    PhoneNumber,
    CarBrandNumber,
    VINCode,
    EngineNumber,
    Sex,
    Birthday,
    ITCard,
    MobilePhone,
    HomePhone,
    OfficePhone,
    Province,
    City,
    District,
    EMS,
    txt_DetailAddress
  },
  data() {
    return {
      provinceName:"",
      cityName:"",
      countyName:"",
      custNo:"",
      dlrCustNo:"",
      custClassCode:"",
      oldDlrCustNo:"",
      vin:"",
      carBrandCode:"",
      cruCust:{
        input:""
      },
      whCustName:{
        input:''
      },
      whSex:{
        value:''
      },
      whBirthday:{
        value:''
      },
      whITCard:{
        input:''
      },
      whPhone:{
        input:''
      },
      whMobile:{
        input:''
      },
      whJTPhone:{
        input:''
      },
      whBGPhone:{
        input:''
      },
      whProvice:{
        value:''
      },
      whCity:{
        value:''
      },
      whDistrict:{
        value:''
      },
      whEMS:{
        input:''
      },
      whAddr:{
        input:''
      },
      tcBrand:{
        input:''
      },
      tcVin:{
        input:''
      },
      tcEngine:{
        input:''
      },
      input: "",
      toggleParam: false,
      width: "900px",
      dialogVisible3: false,
      form: {
        task: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        colnames: [
          // { label: "客户名称", value: "custName" },
          // { label: "电话", value: "phone" },
          // { label: "备用电话", value: "backTel" },
          // { label: "性别", value: "genderName" },
          { label: "是否车主", value: "isCarowner" },
          { label: "车辆品牌", value: "carBrandName" },
          { label: "车系", value: "seCarSeriesName" },
          { label: "车型名称", value: "seCarTypeName" },
          { label: "车牌号", value: "carLicenseNo" },
          { label: "VIN码", value: "vin" },
          { label: "发动机号", value: "engineNo" },
          // { label: "省份", value: "addrProvince" },
          // { label: "城市", value: "addrCity" },
          // { label: "区县", value: "addrCounty" }
        ],
        tableData:[
        ],
        queryObj: {
          apiConfig: crmApis.mdmDlrCustInfoQuery,
          apiQueryRow: [
            'custNo',
            'dlrCustNo',
            'custName',
            'phone',
            'backTel',
            'isCarowner',
            'genderName',
            'carBrandName',
            'seCarSeriesName',
            'seCarTypeName',
            'carLicenseNo',
            'vin',
            'engineNo',
            'addrProvince',
            'addrCity',
            'addrCounty'
          ],
          params: {
          //  oemCode:'1',
          //  groupCode:'1',
          //  custName:'',
          //  phone:'',
          //  carLicenseNo:'',
          //  vin:'',
          //  engineNo:'',
          //  isPV800:"0"
          }
        },
        pagesize:10,
        pageindex:1,
        total: 0
      },
      tabledatas2: {
        colnames: [
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "phone" },
          { label: "备用电话", value: "backTel" },
          { label: "性别", value: "genderName" },
          { label: "是否车主", value: "isCarowner" },
          { label: "车辆品牌", value: "carBrandName" },
          { label: "车系", value: "seCarSeriesName" },
          { label: "车型名称", value: "seCarTypeName" },
          { label: "车牌号", value: "carLicenseNo" },
          { label: "VIN码", value: "vin" },
          { label: "发动机号", value: "engineNo" },
          { label: "省份", value: "addrProvince" },
          { label: "城市", value: "addrCity" },
          { label: "区县", value: "addrCounty" }
        ],
        tableData:[
        ],
        queryObj: {
          apiConfig: crmApis.mdmDlrCustInfoQuery,
          apiQueryRow: [
            'custNo',
            'dlrCustNo',
            'custName',
            'phone',
            'backTel',
            'isCarowner',
            'genderName',
            'carBrandName',
            'seCarSeriesName',
            'seCarTypeName',
            'carLicenseNo',
            'vin',
            'engineNo',
            'addrProvince',
            'addrCity',
            'addrCounty',
            //'carBrandCode'
          ],
          params: {
          //  oemCode:'1',
          //  groupCode:'1',
          //  custName:'',
          //  phone:'',
          //  carLicenseNo:'',
          //  vin:'',
          //  engineNo:'',
          //  isPV800:"0"
          }
        },
        pagesize:10,
        pageindex:1,
        total: 0
      }
    };
  },
  mounted: function() {
    this.$nextTick(function(){
      this.initData(this.$route.params.dlrCustNo)
    });
  },
  methods: {
    //加载数据
    initData(custid){
      
      let that = this;
      if(custid==undefined)
      {
        return;
      }
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmDlrCustInfoQuery,
        // 需要调用的API服务配置
        apiServices: [
          {
              //表格中台返回网格的字段
              apiQueryRow: [
              "addr",
              "addrCity",
              "addrCounty",
              "addrProvince",
              "addrStreet",
              "addrZip",
              "backNumber",
              "backTel",
              "birthDate",
              "cCreatedDate",
              "carBrandName",
              "carColorName",
              "carLicenseNo",
              "carSeriesCn",
              "carSeriesCode",
              "cardDegreeName",
              "cardDegreeNamePv",
              "classLevel",
              "convTimeCode",
              "convTimeName",
              "credNo",
              "credTypeCode",
              "credTypeName",
              "custClassCode",
              "custClassName",
              "custName",
              "custNo",
              "degreeCode",
              "degreeName",
              "deliveryDate",
              "distributeDate",
              "dlrCustNo",
              "dlrName",
              "donntCall",
              "donntEmail",
              "donntSms",
              "driverTimeCode",
              "driverTimeName",
              "driverTypeCode",
              "driverTypeName",
              "engineNo",
              "familyIncomeCode",
              "freshLevel",
              "genderCode",
              "genderName",
              "hobby",
              "homeTel",
              "icCardNo",
              "incomeName",
              "insureComp",
              "invoiceDate",
              "isCarowner",
              "isEtptCar",
              "isMemberName",
              "isNrepair",
              "isVip",
              "jobCode",
              "jobName",
              "lastRepairDate",
              "lastRepairMan",
              "lastRepairManTel",
              "marriagedCode",
              "marriagedName",
              "mileage",
              "officeTel",
              "personEn",
              "phone",
              "remark",
              "saName",
              "saleDlrName",
              "seCarSeriesCode",
              "seCarSeriesName",
              "seCarTypeName",
              "smallCarTypeCn",
              "tradeCode",
              "tradeName",
              "uid",
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
            oemCode:'1',
            groupCode:'1',
            dlrCustNo:custid,
            isPV800:"1"
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
          
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          that.custNo=results["custNo"];
          that.dlrCustNo=results["dlrCustNo"];
          that.custClassCode=results["custClassCode"];
          //客户信息
          that.whCustName.input=results["custName"];
          that.$refs.txt_CustomerName.getData();
          that.whSex.value=results["genderCode"];
          that.$refs.Sex.getData();
          that.whBirthday.value=results["birthDate"];
          that.$refs.Birthday.getData();
          that.whITCard.input=results["credNo"];
          that.$refs.ITCard.getData();
          that.whPhone.input=results["phone"];
          that.$refs.PhoneNumber.getData();
          // that.whMobile.input=results["phone"];
          // that.$refs.MobilePhone.getData();
          that.whJTPhone.input=results["homeTel"];
          that.$refs.HomePhone.getData();
          that.whBGPhone.input=results["officeTel"];
          that.$refs.OfficePhone.getData();
          that.whProvice.value=results["addrProvince"];
          that.provinceName=results["addrProvince"];
          that.$refs.Province.getData();
          that.whCity.value=results["addrCity"];
          that.cityName=results["addrCity"];
          that.$refs.City.getData();
          that.whDistrict.value=results["addrCounty"];
          that.countyName=results["addrCounty"];
          that.$refs.District.getData();
          that.whEMS.input=results["addrZip"];
          that.$refs.EMS.getData();
          that.whAddr.input=results["addrStreet"];
          that.$refs.txt_DetailAddress.getData();

          that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;

        }
      });
    },
    query:function(){
      
      let that = this;
      that.tabledatas.queryObj.params={}
      that.$set(that.tabledatas.queryObj.params, 'oemCode', "1");
      that.$set(that.tabledatas.queryObj.params, 'groupCode', "1");
      that.$set(that.tabledatas.queryObj.params, 'isPV800', "1");
      that.$set(that.tabledatas.queryObj.params, 'dlrCustNo', that.dlrCustNo);
      
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
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    changesf(val,name) {
      
      let that = this;
      that.whCity.pcode=val
      that.provinceName=name
      debugger
      if(that.$refs.City!=undefined){
        that.$refs.City.getData();
      }
      this.changecs()
    },
    changecs(val,name) {
      let that = this;
      that.whDistrict.pcode=val
      that.cityName=name
      debugger
      if(that.$refs.District!=undefined){
        that.$refs.District.getData();
      }
    },
    changeqx(val,name){
      let that=this
      that.countyName=name
      debugger
    },
    showdialog2: function() {
      let that = this;
      that.cruCust =
          "当前客户名称:" +
          this.$refs.txt_CustomerName.input +
          " 当前电话:" +
          this.$refs.PhoneNumber.input;
      that.dialogVisible3 = true;

      //window.opener = null;
      //window.open(" ", "_top").close()
      //this.$router.go(-1)
    },
    query2:function(){
      
      let that = this;
      that.tabledatas2.queryObj.params={}
      that.$set(that.tabledatas2.queryObj.params, 'oemCode', "1");
      that.$set(that.tabledatas2.queryObj.params, 'groupCode', "1");
      that.$set(that.tabledatas2.queryObj.params, 'isPV800', "1");
      if(that.$refs.CarBrandNumber!=undefined)
      {
        if(that.$refs.CarBrandNumber.input!="")
        {
          that.$set(that.tabledatas2.queryObj.params, 'carLicenseNo', that.$refs.CarBrandNumber.input);
        }
      }
      if(that.$refs.VINCode!=undefined)
      {
        if(that.$refs.VINCode.input!="")
        {
          that.$set(that.tabledatas2.queryObj.params, 'vin', that.$refs.VINCode.input);
        }
      }
      if(that.$refs.EngineNumber!=undefined)
      {
        if(that.$refs.EngineNumber.input!="")
        {
          that.$set(that.tabledatas2.queryObj.params, 'engineNo', that.$refs.EngineNumber.input);
        }
      }
      var html=""
      if((that.$refs.EngineNumber.input==""||that.$refs.EngineNumber.input==null)&&
      (that.$refs.VINCode.input==""||that.$refs.VINCode.input==null)&&
      (that.$refs.CarBrandNumber.input==""||that.$refs.CarBrandNumber.input==null))
      {
        html = html + `<div>车牌号，VIN，发动机号必须填写一个，且为精确查询条件</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      
      let queryObj = {
        // api配置
        apiConfig: that.tabledatas2.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas2.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatas2.pagesize,
          pageIndex: that.tabledatas2.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas2.queryObj.params
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
          var cxjg=response.data[queryObj.apiConfig.ServiceCode].rows;
          var vinstr = "";
          cxjg.forEach(item => {
            if(item.isCarowner=="是")
            {
              that.oldDlrCustNo=item.dlrCustNo;
              that.carBrandCode="1";
            }
            if(vinstr=="")
            {
              vinstr=item.vin
            }
            if(vinstr!=item.vin&&vinstr!="")
            {
              this.$message({
                message: "不允许变更多辆车的车主",
                type: "warning",
                duration: 1000
              });
              return;
            }
          });
          that.vin=vinstr;
          that.tabledatas2.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas2.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas2.total =response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    save() {
      let that = this;
      let reg = that.$crmcf.crmRegExp("tel")
      let reg2 = that.$crmcf.crmRegExp("phone")
      let reg3 = that.$crmcf.crmRegExp("idCard")
      let reg4 = that.$crmcf.crmRegExp("ip")
      var html=""
      if(that.$refs.txt_CustomerName.input==""||that.$refs.txt_CustomerName.input==null)
      {
        html = html + `<div>客户名称不能为空</div>`
      }
      if(that.$refs.ITCard.input!=""&&that.$refs.ITCard.input!=null)
      {
        if (!reg3.test(that.$refs.ITCard.input)) 
        {
          html = html + `<div>身份证格式不正确</div>`
        }
      }
      if(that.$refs.PhoneNumber.input==""||that.$refs.PhoneNumber.input==null)
      {
        html = html + `<div>电话不能为空</div>`
        
      }else{
        var istg="0"
        if (reg.test(that.$refs.PhoneNumber.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.PhoneNumber.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>电话格式不正确</div>`
        }
      }
      if(that.$refs.HomePhone.input!=""&&that.$refs.HomePhone.input!=null)
      {
        var istg="0"
        if (reg.test(that.$refs.HomePhone.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.HomePhone.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>家庭电话格式不正确</div>`
        }
      }
      if(that.$refs.OfficePhone.input!=""&&that.$refs.OfficePhone.input!=null)
      {
        var istg="0"
        if (reg.test(that.$refs.OfficePhone.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.OfficePhone.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>办公电话格式不正确</div>`
        }
      }
      if(that.$refs.EMS.input!=""&&that.$refs.EMS.input!=null)
      {
        if (!reg4.test(that.$refs.EMS.input)) 
        {
          html = html + `<div>邮政编码格式不正确</div>`
        }
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      
      var saveObj={}
      //客户信息
      that.$set(saveObj, "dlrCustNo", that.dlrCustNo);
      that.$set(saveObj, "custClassCode", that.custClassCode==""?"0":that.custClassCode);
      that.$set(saveObj, "custName", that.$refs.txt_CustomerName.input);
      that.$set(saveObj, "custFullName", that.$refs.txt_CustomerName.input);
      that.$set(saveObj, "genderCode", that.$refs.Sex.value);
      that.$set(saveObj, "birthDate", that.$refs.Birthday.value);
      that.$set(saveObj, "credTypeCode", "1");
      that.$set(saveObj, "credTypeName", "身份证");
      that.$set(saveObj, "credNo", that.$refs.ITCard.input);
      that.$set(saveObj, "phone", that.$refs.PhoneNumber.input);
      that.$set(saveObj, "homeTel", that.$refs.HomePhone.input);
      that.$set(saveObj, "officeTel", that.$refs.OfficePhone.input);
      that.$set(saveObj,"addrProvince",that.provinceName)
      that.$set(saveObj, "provinceId", that.$refs.Province.value);
      that.$set(saveObj,"addrCity",that.cityName)
      that.$set(saveObj, "cityId", that.$refs.City.value);
      that.$set(saveObj,"addrCounty",that.countyName)
      that.$set(saveObj, "countyId", that.$refs.District.value);
      that.$set(saveObj, "addrZip", that.$refs.EMS.input);
      that.$set(saveObj, "addrStreet", that.$refs.txt_DetailAddress.input);
      
      let queryObj = {
        type: "mutation",
        // api配置
        apiConfig: crmApis.createdOneIdMutationSaveCust, //专营店新建客户
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["dlrCustNo"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            custInfo: saveObj,
            custModifyScence: "201"
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
          that.dlrCustNo=response.data[queryObj.apiConfig.ServiceCode].rows.dlrCustNo;
          this.$message({
            message: "保存成功",
            type: "success",
            duration: 1000
          });
          this.query();
        }else{
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warning",
            duration: 1000
          });
        }
      });
    },
    updateCZ(){
      let that = this;
      let reg = that.$crmcf.crmRegExp("tel")
      let reg2 = that.$crmcf.crmRegExp("phone")
      let reg3 = that.$crmcf.crmRegExp("idCard")
      let reg4 = that.$crmcf.crmRegExp("ip")
      var html=""
      if(that.$refs.txt_CustomerName.input==""||that.$refs.txt_CustomerName.input==null)
      {
        html = html + `<div>客户名称不能为空</div>`
      }
      if(that.$refs.Sex.value=="")
      {
        html = html + `<div>性别不能为空</div>`
      }
      if(that.$refs.ITCard.input==""||that.$refs.ITCard.input==null)
      {
        html = html + `<div>身份证不能为空</div>`
      }
      else{
        if (!reg3.test(that.$refs.ITCard.input)) 
        {
          html = html + `<div>身份证格式不正确</div>`
        }
      }
      if(that.$refs.PhoneNumber.input==""||that.$refs.PhoneNumber.input==null)
      {
        html = html + `<div>电话不能为空</div>`
      }else{
        var istg="0"
        if (reg.test(that.$refs.PhoneNumber.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.PhoneNumber.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>电话格式不正确</div>`
        }
      }
      if(that.$refs.HomePhone.input!=""&&that.$refs.HomePhone.input!=null)
      {
        var istg="0"
        if (reg.test(that.$refs.HomePhone.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.HomePhone.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>家庭电话格式不正确</div>`
        }
      }
      if(that.$refs.OfficePhone.input!=""&&that.$refs.OfficePhone.input!=null)
      {
        var istg="0"
        if (reg.test(that.$refs.OfficePhone.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.OfficePhone.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>办公电话格式不正确</div>`
        }
      }
      if(that.$refs.Province.value=="")
      {
        html = html + `<div>省份不能为空</div>`
      }
      if(that.$refs.City.value=="")
      {
        html = html + `<div>城市不能为空</div>`
      }
      if(that.$refs.District.value=="")
      {
        html = html + `<div>区县不能为空</div>`
      }
      if(that.$refs.txt_DetailAddress.input==""&&that.$refs.txt_DetailAddress.input!=null)
      {
        html = html + `<div>详细地址不能为空</div>`
      }
      if(that.$refs.EMS.input!=""&&that.$refs.EMS.input!=null)
      {
        if (!reg4.test(that.$refs.EMS.input)) 
        {
          html = html + `<div>邮政编码格式不正确</div>`
        }
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      var saveObj={}
      //客户信息
      that.$set(saveObj, "dlrCustNo", that.dlrCustNo);
      that.$set(saveObj, "custClassCode", that.custClassCode==""?"0":that.custClassCode);
      that.$set(saveObj, "custName", that.$refs.txt_CustomerName.input);
      that.$set(saveObj, "custFullName", that.$refs.txt_CustomerName.input);
      that.$set(saveObj, "genderCode", that.$refs.Sex.value);
      that.$set(saveObj, "credTypeCode", "1");
      that.$set(saveObj, "credTypeName", "身份证");
      that.$set(saveObj, "credNo", that.$refs.ITCard.input);
      that.$set(saveObj, "phone", that.$refs.PhoneNumber.input);
      that.$set(saveObj, "homeTel", that.$refs.HomePhone.input);
      that.$set(saveObj, "officeTel", that.$refs.OfficePhone.input);
      that.$set(saveObj, "provinceId", that.$refs.Province.value);
      that.$set(saveObj,"addrProvince",that.provinceName)
      that.$set(saveObj, "cityId", that.$refs.City.value);
      that.$set(saveObj,"addrCity",that.cityName)
      that.$set(saveObj, "countyId", that.$refs.District.value);
      that.$set(saveObj,"addrCounty",that.countyName)

      that.$set(saveObj, "addrZip", that.$refs.EMS.input);
      that.$set(saveObj, "addrStreet", that.$refs.txt_DetailAddress.input);
      
      var saveObj2={}
      //客户信息
      that.$set(saveObj2, "vin", that.vin);
      that.$set(saveObj2, "carBrandCode", that.carBrandCode);

      let queryObj = {
        type: "mutation",
        // api配置
        apiConfig: crmApis.createdOneIdMutationChangeCarOnwer, //专营店新建客户
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["dlrCustNo"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            custInfo: saveObj,
            carInfo: saveObj2,
            custModifyScence: "204",
            oldDlrCustNo:that.oldDlrCustNo
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
          that.dlrCustNo=response.data[queryObj.apiConfig.ServiceCode].rows.dlrCustNo;
          this.$message({
            message: "变更成功",
            type: "success",
            duration: 1000
          });
          this.dialogVisible3=false;
          //this.query();
        }else{
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
        }
      });
    },
    addYCR() {
      let that = this;
      
      let reg = that.$crmcf.crmRegExp("tel")
      let reg2 = that.$crmcf.crmRegExp("phone")
      let reg3 = that.$crmcf.crmRegExp("idCard")
      let reg4 = that.$crmcf.crmRegExp("ip")
      var html=""
      if(that.$refs.txt_CustomerName.input==""||that.$refs.txt_CustomerName.input==null)
      {
        html = html + `<div>客户名称不能为空</div>`
      }
      if(that.$refs.ITCard.input!=""&&that.$refs.ITCard.input!=null)
      {
        if (!reg3.test(that.$refs.ITCard.input)) 
        {
          html = html + `<div>身份证格式不正确</div>`
        }
      }
      if(that.$refs.PhoneNumber.input==""||that.$refs.PhoneNumber.input==null)
      {
        html = html + `<div>电话不能为空</div>`
      }else{
        var istg="0"
        if (reg.test(that.$refs.PhoneNumber.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.PhoneNumber.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>电话格式不正确</div>`
        }
      }
      if(that.$refs.HomePhone.input!=""&&that.$refs.HomePhone.input!=null)
      {
        var istg="0"
        if (reg.test(that.$refs.HomePhone.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.HomePhone.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>家庭电话格式不正确</div>`
        }
      }
      if(that.$refs.OfficePhone.input!=""&&that.$refs.OfficePhone.input!=null)
      {
        var istg="0"
        if (reg.test(that.$refs.OfficePhone.input)) 
        {
          istg="1";
        }
        else if (reg2.test(that.$refs.OfficePhone.input)) 
        {
          istg="1";
        }
        if(istg=="0")
        {
          html = html + `<div>办公电话格式不正确</div>`
        }
      }
      if(that.$refs.Province.value=="")
      {
        html = html + `<div>省份不能为空</div>`
      }
      if(that.$refs.City.value=="")
      {
        html = html + `<div>城市不能为空</div>`
      }
      if(that.$refs.District.value=="")
      {
        html = html + `<div>区县不能为空</div>`
      }
      if(that.$refs.txt_DetailAddress.input==""||that.$refs.txt_DetailAddress.input==null)
      {
        html = html + `<div>详细地址不能为空</div>`
      }
      if(that.$refs.EMS.input!=""&&that.$refs.EMS.input!=null)
      {
        if (!reg4.test(that.$refs.EMS.input)) 
        {
          html = html + `<div>邮政编码格式不正确</div>`
        }
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }
      
      var saveObj={}
      //客户信息
      that.$set(saveObj, "dlrCustNo", that.oldDlrCustNo);

      var saveObj2={}
      //客户信息
      that.$set(saveObj2, "vin", that.vin);
      that.$set(saveObj2, "carBrandCode", that.carBrandCode);

      var saveObj3={}
      //客户信息
      that.$set(saveObj3, "dlrCustNo", that.dlrCustNo);
      that.$set(saveObj3, "custClassCode", that.custClassCode==""?"0":that.custClassCode);
      that.$set(saveObj3, "custName", that.$refs.txt_CustomerName.input);
      that.$set(saveObj3, "custFullName", that.$refs.txt_CustomerName.input);
      that.$set(saveObj3, "genderCode", that.$refs.Sex.value);
      that.$set(saveObj3, "birthDate", that.$refs.Birthday.value);
      that.$set(saveObj3, "credTypeCode", "1");
      that.$set(saveObj3, "credTypeName", "身份证");
      that.$set(saveObj3, "credNo", that.$refs.ITCard.input);
      that.$set(saveObj3, "phone", that.$refs.PhoneNumber.input);
      that.$set(saveObj3, "homeTel", that.$refs.HomePhone.input);
      that.$set(saveObj3, "officeTel", that.$refs.OfficePhone.input);
      that.$set(saveObj3, "addrProvince", that.$refs.Province.value);
      that.$set(saveObj3, "addrCity", that.$refs.City.value);
      that.$set(saveObj3, "addrCounty", that.$refs.District.value);
      that.$set(saveObj3, "addrZip", that.$refs.EMS.input);
      that.$set(saveObj3, "addrStreet", that.$refs.txt_DetailAddress.input);
      that.$set(saveObj3, "custRelationCode", "6");
      that.$set(saveObj3, "relationTypeCode", "01");
      
      let queryObj = {
        type: "mutation",
        // api配置
        apiConfig: crmApis.createdOneIdMutationSaveCust, //专营店新建客户
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["dlrCustNo"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            custInfo: saveObj,
            carInfo: saveObj2,
            custInfoRelation:saveObj3,
            custModifyScence: "205"
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
          that.dlrCustNo=response.data[queryObj.apiConfig.ServiceCode].rows.dlrCustNo;
          this.$message({
            message: "新增用车人成功",
            type: "success",
            duration: 1000
          });
          this.dialogVisible3=false;
        }else{
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warning",
            duration: 1000
          });
        }
      });
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
    changepage(index){
      let that=this
      that.tabledatas.pageindex=index
      this.query()
    },
    prev2() {
      let that = this;
      if (this.tabledatas2.pageindex > 1) {
          that.tabledatas2.pageindex = this.tabledatas2.pageindex - 1;
          this.query2();
      }
    },
    next2() {
      let that = this;
      if (true) {
          that.tabledatas2.pageindex = this.tabledatas2.pageindex + 1;
          this.query2();
      }
    },
    changepage2(index){
      let that=this
      that.tabledatas2.pageindex=index
      this.query2()
    }
  },
};
</script>
<style scoped>
/* .filter-params-sub .el-col {
  margin-bottom: -10px;
} */
</style>