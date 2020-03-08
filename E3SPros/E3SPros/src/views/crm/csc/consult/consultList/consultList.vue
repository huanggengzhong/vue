
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

      <el-dialog title="单据详情" :visible.sync="dialogVisible" width="1200px" append-to-body center >
        <div class="filter-container filter-params-crm">
          <el-form ref="form">
            <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
            <div class="filter-container-crm filter-params-crm">
              <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
            </div>
            <div class="filter-container-crm filter-title-crm">{{infoComponents[1].title}}</div>
            <div class="filter-container-crm filter-params-crm">
              <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
              <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
            </div>
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
// import { formMixins } from "@/components/mixins/formMixins";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import { CacheConfig } from '@/cache/configCache/index'

import Table from "@/components/crm/table/Table";

export default {
  name:"consultList",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    crmGroupForm,
    // crmTextInput,
    // crmdatePicker,
    // lookupvalue,
    Table,
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
                labelName: "建单日期",
                codeField: "startDate,endDate",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false,
                isRequire:true,
              },
              {
                compKey: "compKey2",
                labelName: "结案日期",
                codeField: "visitEndDate",
                component: () => import("@/components/crm/Time/crmdatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "单据状态",
                codeField: "custClassCode",
                lookuptype: "LX006",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey4",
                labelName: "服务单号",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey5",
                labelName: "服务大类",
                codeField: "custClassCode",
                lookuptype: "DB0061",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey6",
                labelName: "服务中类",
                codeField: "custClassCode",
                lookuptype: "DB0061",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey7",
                labelName: "服务小类",
                codeField: "custClassCode",
                lookuptype: "DB0061",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey8",
                labelName: "客户名称",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              
              {
                compKey: "compKey9",
                labelName: "车牌号",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey10",
                labelName: "VIN码",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey11",
                labelName: "电话",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey12",
                labelName: "责任网点",
                codeField: "dlrId",
                component: () => import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
                type: "propus",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey13",
                labelName: "建单人",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
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
                label: "详情",
                width: 60,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '详情',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: () => this.edit(),
                    // clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  },
                  
                ]
              },
              
              {
                prop: "intentTypeName",
                label: "建单日期",
                width: null,
                align: "center"
              },
              {
                prop: "custName",
                label: "结案日期",
                width: null,
                align: "center"
              },
              {
                prop: "phone",
                label: "服务单号",
                width: null,
                align: "center"
              },
              {
                prop: "credNo",
                label: "服务大类",
                width: null,
                align: "center",
              },
              {
                prop: "addr",
                label: "服务中类",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "custClassName",
                label: "服务小类",
                width: null,
                align: "center"
              },
              {
                prop: "isVipName",
                label: "客户名称",
                width: null,
                align: "center"
              },
              {
                prop: "brandName",
                label: "电话",
                width: null,
                align: "center"
              },
              {
                prop: "seriesCode",
                label: "摘要",
                width: null,
                align: "center",
              },
              {
                prop: "seriesName",
                label: "客户要求",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "seriesName",
                label: "车牌号",
                width: null,
                align: "center"
              },
              {
                prop: "carType",
                label: "VIN码",
                width: null,
                align: "center"
              },
              {
                prop: "seriesName",
                label: "服务类别",
                width: null,
                align: "center"
              },
              {
                prop: "carType",
                label: "单据状态",
                width: null,
                align: "center"
              },
              {
                prop: "carType",
                label: "动作",
                width: null,
                align: "center"
              },
              {
                prop: "seriesName",
                label: "销售网点",
                width: null,
                align: "center"
              },
              {
                prop: "carType",
                label: "建单人",
                width: null,
                align: "center"
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
      
      dialogVisible:false,
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
          { label: "日期", value: "" },
          { label: "摘要", value: "" },
          { label: "客户要求", value: "" },
          { label: "咨询内容", value: "" },
          { label: "坐席反馈", value: "" },
          { label: "附件", value: "" },
         
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
      infoComponents: [
        {
          title: "客户车辆信息",
          tableComponents: [
            // {
            //   compKey: "compKey1",
            //   labelName: "UID",
            //   codeField: "uid",
            //   code: "",
            //   isRequire: true,
            //   isMust: true,
            //   component: () => import("@/components/crm/textbox/crmTextInput")
            // },
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "性别",
              codeField: "genderCode",
              isMul: false,
              lookuptype: "DB0022",
              disabled:true,
              component: () =>import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey3",
              labelName: "电话",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "备用电话",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "用车人名称",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "用车人性别",
              codeField: "genderCode",
              isMul: false,
              lookuptype: "DB0022",
              disabled:true,
              component: () =>import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey7",
              labelName: "用车人电话",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey8",
              labelName: "备用名称",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "车系",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey10",
              labelName: "车牌号",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey11",
              labelName: "VIN码",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey12",
              labelName: "发动机号",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "车辆品牌",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey14",
              labelName: "车型",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey15",
              labelName: "号码归属地",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },
        {
          title:"单据信息",
          tableComponents:[
            {
              compKey: "compKey16",
              labelName: "服务单号",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "咨询日期",
              codeField: "birthDate",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey18",
              labelName: "信息来源",
              codeField: "genderCode",
              isMul: false,
              lookuptype: "DB0022",
              disabled:true,
              component: () =>import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey19",
              labelName: "咨询次数",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey20",
              labelName: "服务类别",
              codeField: "custName",
              isMust: true,
              disabled:true,
              span:12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey21",
              labelName: "相关基准车系",
              codeField: "custName",
              isMust: true,
              disabled:true,
              span:12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey22",
              labelName: "责任网点",
              codeField: "custName",
              isMust: true,
              disabled:true,
              span:12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey23",
              labelName: "责任部门",
              codeField: "custName",
              isMust: true,
              disabled:true,
              span:12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey24",
              labelName: "责任人",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey25",
              labelName: "责任人电话",
              codeField: "custName",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            
          ]
        },
         {
          title:"",
          tableComponents:[
            {
              compKey: "compKey26",
              labelName: "派工说明",
              codeField: "custName",
              isMust: true,
              disabled:true,
              inputType:"textarea",
              span:12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey27",
              labelName: "备注",
              codeField: "custName",
              isMust: true,
              disabled:true,
              inputType:"textarea",
              span:12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
         },
        ],
      custName:"",
      custClassCode:"",
      phone:"",
    };
  },
  methods: {
    //详情
    edit(){
      this.dialogVisible=true;
      console.log(this.$refs.multipleTable);
    },
    
  }
};
</script>
