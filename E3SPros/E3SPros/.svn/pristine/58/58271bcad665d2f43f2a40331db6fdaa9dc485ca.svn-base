
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicSearchField="searchField"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="false"
      />

    <!-- 意向客户跟进_维护 -->
    <el-dialog title="意向客户跟进_维护" :visible.sync="dialogVisible" width="1000px" append-to-body center >
      <div class="filter-container filter-params-crm">
        <el-form ref="form">
          <div class="filter-container filter-title-crm" style="background-color: #f5f5f5;">基本客户信息</div>
          <div style="margin:10px 0">
            <el-row style="margin-bottom:10px;">
            <lookupvalue
              compKey="compKey1"
              :isMul="false"
              labelName="客户类型"
              lookuptype="APPVE0006"
              codeField="custClassCode"
              :code="custClassCode"
              :span="8"
            ></lookupvalue>
            <crmTextInput
              compKey="compKey2"
              labelName="客户名称"
              :code="custName"
              codeField="custName"
              :isRequire="true"
              :span="8"
            ></crmTextInput>
            <crmTextInput
              compKey="compKey3"
              labelName="电话"
              :code="phone"
              codeField="phone"
              :isRequire="true"
              :span="8"
            ></crmTextInput>
          </el-row>

          <el-row style="margin-bottom:10px;">
            <lookupvalue
              compKey="compKey4"
              :isMul="false"
              labelName="证件类型"
              lookuptype="APP0005"
              codeField="credTypeCode"
              :code="credTypeCode"  
              :span="8"
            ></lookupvalue>
            <crmTextInput
              compKey="compKey5"
              labelName="证件号码"
              :code="credNo"
              codeField="credNo"
              :isRequire="false"
              :span="8"
            ></crmTextInput>
            <lookupvalue
              compKey="compKey6"
              :isMul="false"
              labelName="性别"
              lookuptype="LX010"
              :code="genderCode"
              codeField="genderCode"
              :span="8"
            ></lookupvalue>
          </el-row>

          <el-row style="margin-bottom:10px;">
            <el-col :span="8" class="crm-label-required">
              <Province @changeCode="prochange" ref="province" :Province="province"></Province>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <City @changeCode="citychange" :City="City" ref="city"></City>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <District :District="District" ref="district"></District>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="24" class="crm-label-required">
              <el-form-item label="详细地址">
                <el-input v-model="addrStreet" placeholder="请输入" size="small" class="long-textarea-style" />
              </el-form-item>
            </el-col>
          </el-row>
          </div>

          <div class="filter-container filter-title" style="background-color: #f5f5f5;">联系人信息</div>
          <div style="margin:10px 0;">
            <el-row>
            <lookupvalue
              compKey="compKey7"
              :isMul="false"
              labelName="与车主关系"
              lookuptype="1016"
              codeField="custName"
              :isRequire="true"
              :code="custName"
              :span="8"
            ></lookupvalue>
            <crmTextInput
              compKey="compKey8"
              labelName="联系人姓名"
              :code="custName"
              codeField="custName"
              :isRequire="false"
              :span="8"
            ></crmTextInput>
            <crmTextInput
              compKey="compKey9"
              labelName="电话"
              :code="custName"
              codeField="custName"
              :isRequire="false"
              :span="8"
            ></crmTextInput>
          </el-row>
          </div>

          <div class="filter-container filter-title" style="background-color: #f5f5f5;">意向信息</div>
          <div style="margin:10px 0;">
            <el-row style="margin-bottom:10px;">
              <lookupvalue
                compKey="compKey10"
                :isMul="false"
                labelName="意向级别"
                lookuptype="APPVE0001"
                codeField="intentLevel"
                :isRequire="true" 
                :code="intentLevel"
                :span="8"
              ></lookupvalue>
              <lookupvalue
                compKey="compKey11"
                :isMul="false"
                labelName="信息来源"
                lookuptype="LX046"
                codeField="custName"
                :code="custName"
                :span="8"
              ></lookupvalue>
              <lookupvalue
                compKey="compKey12"
                :isMul="false"
                labelName="车辆用途"
                lookuptype="APPVE0001"
                codeField="custName"
                :code="custName"
                :span="8"
              ></lookupvalue>
            </el-row>
            <el-row>
              <lookupvalue
                compKey="compKey13"
                :isMul="false"
                labelName="客户期望"
                lookuptype="UC0022"
                codeField="custName"
                :code="custName"
                :span="8"
              ></lookupvalue>
              <el-col :span="8" class="crm-label-required">
                <SalesConsultant :swd_SalesConsultant="swd_SalesConsultant" ref="swd_SalesConsultant" @CatData="getarr" />
              </el-col>
              <el-col :span="8" style="text-align:right;">
                <el-button size="small" type="primary" @click="savegz('form')">保存</el-button>
              </el-col>
            </el-row>
          </div>

          <div class="filter-container filter-title" style="background-color: #f5f5f5;">车辆信息</div>
          <Table :tabledatas="tabledatas" ref="table" />
          
        </el-form>
      </div>
    </el-dialog>
      
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import crmTextInput from "@/components/crm/textbox/crmTextInput";
import crmdatePicker from "@/components/crm/Time/crmdatePicker";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import District from "@/components/crm/Select/Common/District";
import Table from "@/components/crm/table/Table";
import SalesConsultant from "@/components/crm/EjectWindows/swd_SalesConsultant";

import { CacheConfig } from '@/cache/configCache/index'


export default {
  name:"crmNodeGroup",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    crmTextInput,
    crmdatePicker,
    lookupvalue,
    Province,
    City,
    District,
    Table,
    SalesConsultant
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    
    return {
      searchField:"搜索条件",
      // 网格查询API配置对象
      apiConfig: crmApis.mdmDlrCustIntentQueryFlow,
      // 动态组件-按钮
      tableButtons: [
        
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.toList(),
          text: "转订单"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.toDriving(),
          text: "试乘试驾"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        },
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "客户名称",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "电话",
                codeField: "phone",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              
              {
                compKey: "compKey3",
                labelName: "客户类型",
                codeField: "custClassCode",
                lookuptype: "APPVE0006",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey4",
                labelName: "意向级别",
                codeField: "intentLevel",
                lookuptype: "APPVE0001",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey5",
                labelName: "网点",
                codeField: "dlrId",
                component: () => import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
                type: "propus",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey6",
                labelName: "销售顾问",
                codeField: "caEmpId",
                component: () => import("@/components/crm/crmEjectWindows/crmSalesConsultant/index"),
                type: "propus",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey7",
                labelName: "客户来源",
                codeField: "customerSource",
                lookuptype: "CRM0012",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey8",
                labelName: "是否大客户",
                codeField: "isVip",
                lookuptype: "APPVE9527_03",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey9",
                labelName: "接触方式",
                codeField: "infoSource",
                lookuptype: "DB0015",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey10",
                labelName: "意向车系",
                codeField: "seriesCode",
                component: () => import("@/components/crm/crmEjectWindows/crmIntenCarSeries/index"),
                type: "propus",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey11",
                labelName: "意向车型",
                codeField: "carType",
                component: () => import("@/components/crm/crmEjectWindows/crmCartype/index"),
                type: "propus",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey12",
                labelName: "号牌状态",
                codeField: "carLicenseStatus",
                lookuptype: "DB0061",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey13",
                labelName: "建档日期",
                codeField: "startDate,endDate",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey14",
                labelName: "预计回访截止日期",
                codeField: "visitEndDate",
                component: () => import("@/components/crm/Time/crmdatePicker"),
                type: "inputText",
                isMust: false
              },
              
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] && 
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "controlBtn",
                label: "操作",
                width: 130,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '维护',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: () => this.edit(),
                    // clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  },
                  {
                    compKey: "propKey2",
                    labelName: '活动跟踪',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: () => this.activityFollow(),
                    // clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  },
                  
                ]
              },
              
              {
                prop:"",
                label: "回访标识",
                width: null,
                align: "center",
                className:"el-icon-phone-outline",
                iconTitle:"预计回访时间今明后三天的客户",
                iconColor:"#00f",
              },
              {
                prop: "intentTypeName",
                label: "意向类型",
                width: null,
                align: "center"
              },
              {
                prop: "custName",
                label: "客户名称",
                width: null,
                align: "center"
              },
              {
                prop: "phone",
                label: "电话",
                width: null,
                align: "center"
              },
              {
                prop: "credNo",
                label: "证件号码",
                width: null,
                align: "center",
              },
              {
                prop: "addr",
                label: "联系地址",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "custClassName",
                label: "客户类型",
                width: null,
                align: "center"
              },
              {
                prop: "isVipName",
                label: "是否大客户",
                width: null,
                align: "center"
              },
              {
                prop: "brandName",
                label: "意向品牌",
                width: null,
                align: "center"
              },
              {
                prop: "seriesCode",
                label: "意向车系编码",
                width: null,
                align: "center",
              },
              {
                prop: "seriesName",
                label: "意向车系",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "",
                label: "意向车型编码",
                width: null,
                align: "center"
              },
              {
                prop: "carType",
                label: "意向车型",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "意向配置编码",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "意向配置名称",
                width: null,
                align: "center",
              },
              {
                prop: "",
                label: "是否有驾驶证",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "infoSourceName",
                label: "信息来源",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "交通工具",
                width: null,
                align: "center"
              },
              {
                prop: "intentLevel",
                label: "意向级别",
                width: null,
                align: "center"
              },
              {
                prop: "dlrName",
                label: "网点",
                width: null,
                align: "center",
              },
              {
                prop: "caName",
                label: "销售顾问",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "nextVisitDate",
                label: "预计回访日期",
                width: null,
                align: "center"
              },
              {
                prop: "lastVisitDate",
                label: "最近接洽日期",
                width: null,
                align: "center"
              },
              {
                prop: "createdDate",
                label: "建档日期",
                width: null,
                align: "center"
              },
              {
                prop: "customerSourceName",
                label: "接触方式",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "carLicenseStatusName",
                label: "号牌状态",
                width: null,
                align: "center"
              },
              {
                prop: "carnumDeadline",
                label: "预计回访截止日期",
                width: null,
                align: "center"
              },
              {
                prop: "dlrCustomerCode",
                label: "销售线索编码",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "订单编号",
                width: null,
                align: "center",
              },
              {
                prop: "isFromCoc",
                label: "是否潜客",
                width: null,
                align: "center",
                // hidden:true
              },
              
            ],
      // 表单查询数据--重置查询条件
      formField: {
        oemCode:"1",
        groupCode: "1",
        custName:"",
        phone:"",
        custClassCode:"",
        // intentLevel:"",//意向等级
        dlrId:"",
        // caEmpId:"",//销售顾问
        customerSource:"",
        isVip:"",
        infoSource:"",
        seriesCode:"",
        carType:"",
        carLicenseStatus:"",
        visitEndDate:"",
        startDate:"",
        endDate:"",
        // searchValue:"",//搜素字段
      },
      //弹框字段
      tabledatas: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          
          // { label: "车辆品牌", value: "dealType" },
          { label: "车辆品牌", value: "" },
          { label: "VIN码", value: "" },
          { label: "车牌号", value: "" },
          { label: "车身颜色", value: "" },
          { label: "车辆类别", value: "" },
          { label: "车辆型号", value: "" },
          { label: "发动机号", value: "" },
          { label: "排量", value: "" },
          { label: "行驶里程", value: "" },
          { label: "车辆性质", value: "" },
          { label: "车辆类型", value: "" },
          { label: "产地", value: "" },
          { label: "首次登记日期", value: "" },
          { label: "生产日期", value: "" },
          { label: "车辆价格", value: "" },
          { label: "客户期望价格", value: "" },
          
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryWholeNetAction,
          apiQueryRow: [
            // "createdDate",
            // "dealType",
            // "carSeriesCn",
            // "clueLevelCode",
            // "hfPerson",
            // "actionDesc",
            // "actionName"
          ],
          params: {
            
          }
        }
      },
      dialogVisible:false,
      redata:{},
      province: {
        value: ""
      },
      City: {
        value: "",
        pcode: ""
      },
      District: {
        value: "",
        pcode: ""
      },
      swd_SalesConsultant:{
        input:""
      },
      custName:"",
      custClassCode:"",
      phone:"",
      genderCode:"",
      credNo:"",
      credTypeCode:"",
      intentLevel:"",
      addrStreet:"",
    };
  },
  methods: {
    //维护
    edit(){
      this.dialogVisible=true;
      console.log(this.$refs.multipleTable);
    },
    //转订单
    toList(){
      this.dialogVisible=true;
    },
    //活动跟踪
    activityFollow(index){
      console.log(index,this.$refs.multipleTable.list)
       this.$crmcf.jumpDetailTag(this,'ActivityTracking','/ActivityTracking',this.$refs.multipleTable.list[index])
      // that.$router.push({ name: "ActivityTracking", params: this.$refs.multipleTable.curIndex });
    },
    //试乘试驾
    toDriving(){
      this.$router.push('/crmModule/crmyxmodule/crmcustFollow/crmTestDrivingManage')
    },
    // 省市县联动
    prochange(val) {
      let that = this;
      that.City.pcode = val;
      if (that.$refs.city == undefined) {
      } else {
        that.$refs.city.getData();
      }
    },
    citychange(val) {
      let that = this;
      that.District.pcode = val;
      if (that.$refs.district == undefined) {
      } else {
        that.$refs.district.getData();
      }
    },
    //销售顾问选择的数据
    getarr(val) {
      this.redata = val;
      console.log(this.redata)
    },
    //保存
    savegz(){
      
      //校验
      var html=""
      // if(this.custName==''){
      //   html = html + `<div>客户名称不能为空</div>`
      // }
      // if(this.phone==''){
      //   html = html + `<div>电话不能为空</div>`
      // }
      if(this.$refs.province.value==''){
        html = html + `<div>省份不能为空</div>`
      }
      if(this.$refs.city.value==''){
        html = html + `<div>城市不能为空</div>`
      }
      if(this.$refs.district.value==''){
        html = html + `<div>县区不能为空</div>`
      }
      if(this.addrStreet==''){
        html = html + `<div>详细地址不能为空</div>`
      }
      // if(this.intentLevel==''){
      //   html = html + `<div>意向级别不能为空</div>`
      // }
      if(this.$refs.swd_SalesConsultant.input==''){
        html = html + `<div>销售顾问不能为空</div>`
      }
      if (html != '') {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return
      }

    },
  }
};
</script>
