
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

      <el-dialog title="救援单明细" :visible.sync="dialogVisible" width="1200px" append-to-body center >
        <div class="filter-container filter-params-crm">
          <el-form ref="form">
            <div class="filter-container filter-title-crm">客户车辆信息</div>
            <el-row >
              <crmTextInput
                compKey="compKey1"
                labelName="客户名称"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <lookupvalue
                compKey="compKey2"
                :isMul="false"
                labelName="客户性别"
                lookuptype="APPVE0006"
                codeField="custClassCode"
                :code="custClassCode"
                :disabled="true"
              ></lookupvalue>
              <crmTextInput
                compKey="compKey3"
                labelName="电话"
                :code="phone"
                codeField="phone"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey4"
                labelName="备用电话"
                :code="phone"
                codeField="phone"
                :disabled="true"
              ></crmTextInput>
            </el-row>
            <el-row >
              <crmTextInput
                compKey="compKey5"
                labelName="用车人姓名"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <lookupvalue
                compKey="compKey6"
                :isMul="false"
                labelName="用车人性别"
                lookuptype="APPVE0006"
                codeField="custClassCode"
                :code="custClassCode"
                :disabled="true"
              ></lookupvalue>
              <crmTextInput
                compKey="compKey7"
                labelName="用车人电话"
                :code="phone"
                codeField="phone"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey8"
                labelName="备用电话"
                :code="phone"
                codeField="phone"
                :disabled="true"
              ></crmTextInput>
            </el-row>
            <el-row >
              <crmTextInput
                compKey="compKey9"
                labelName="车系"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey10"
                labelName="车牌号"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey11"
                labelName="VIN码"
                :code="phone"
                codeField="phone"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey12"
                labelName="发动机号"
                :code="phone"
                codeField="phone"
                :disabled="true"
              ></crmTextInput>
            </el-row>
             <el-row >
              <crmTextInput
                compKey="compKey13"
                labelName="车辆品牌"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey14"
                labelName="车型"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey15"
                labelName="号码归属地"
                :code="phone"
                codeField="phone"
                :disabled="true"
              ></crmTextInput>
            </el-row>
            <div class="filter-container filter-title-crm">服务信息</div>
            <el-row >
              <crmTextInput
                compKey="compKey16"
                labelName="服务单号"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey17"
                labelName="救援类型"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey18"
                labelName="救援地点"
                :code="phone"
                codeField="phone"
                :disabled="true"
                :span="12"
              ></crmTextInput>
            </el-row>
            <el-row >
              <crmTextInput
                compKey="compKey19"
                labelName="所在地标志物"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
            </el-row>
            <el-row >
              <el-col :span="12">
                <label style="width:15%;vertical-align: top;">故障描述</label>
                <el-input type="textarea" disabled style="width:85%;" resize="none"></el-input>
              </el-col>
              <el-col :span="12">
                <label style="width:15%;vertical-align: top;">客户要求</label>
                <el-input type="textarea" disabled style="width:85%;" resize="none"></el-input>
              </el-col>
            </el-row>
            <el-row >
                <el-col :span="12">
                  <label style="width:15%;vertical-align: top;">坐席回答</label>
                  <el-input type="textarea" disabled style="width:85%;" resize="none"></el-input>
                </el-col>
                <el-col :span="12">
                  <label style="width:15%;vertical-align: top;">派工说明</label>
                  <el-input type="textarea" disabled style="width:85%;" resize="none"></el-input>
                </el-col>
              </el-row>
            <el-row>
              <el-col :span="12">
                <label style="width:15%;vertical-align: top;">备注</label>
                <el-input type="textarea" disabled style="width:85%;" resize="none"></el-input>
              </el-col>
            </el-row>
            <div class="filter-container filter-title-crm">处理信息</div>
            <el-row >
              <crmTextInput
                compKey="compKey20"
                labelName="救援车牌"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey21"
                labelName="救援车系"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey22"
                labelName="救援车型"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey23"
                labelName="救援次数"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
            </el-row>
            <el-row>
              <crmdatePicker compKey="compKey24" labelName="处理时间" :code="custName"  codeField="custName" :disabled="true"></crmdatePicker>
              <crmTextInput
                compKey="compKey25"
                labelName="责任网点"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmdatePicker compKey="compKey26" labelName="出车时间" :code="custName"  codeField="custName" :disabled="true"></crmdatePicker>
              <crmdatePicker compKey="compKey27" labelName="到达时间" :code="custName"  codeField="custName" :disabled="true"></crmdatePicker>
            </el-row>
            <el-row>
              <crmTextInput
                compKey="compKey28"
                labelName="救援总里程"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey29"
                labelName="故障车辆里程"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <lookupvalue
                compKey="compKey30"
                :isMul="false"
                labelName="故障原因"
                lookuptype="APPVE0006"
                codeField="custClassCode"
                :code="custClassCode"
                :disabled="true"
              ></lookupvalue>
              <lookupvalue
                compKey="compKey31"
                :isMul="false"
                labelName="解决方式"
                lookuptype="APPVE0006"
                codeField="custClassCode"
                :code="custClassCode"
                :disabled="true"
              ></lookupvalue>
            </el-row>
            <el-row>
              <crmTextInput
                compKey="compKey32"
                labelName="出车费"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey33"
                labelName="吊车费用"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey34"
                labelName="其它费用"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
              <crmTextInput
                compKey="compKey35"
                labelName="合计费用"
                :code="custName"
                codeField="custName"
                :disabled="true"
              ></crmTextInput>
            </el-row>
            <el-row>
              <el-col :span="12">
                <label style="width:15%;vertical-align: top;">处理内容</label>
                <el-input type="textarea" disabled style="width:85%;" resize="none"></el-input>
              </el-col>
            </el-row>
            <div class="filter-container filter-title-crm">督办记录</div>
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

import { CacheConfig } from '@/cache/configCache/index'
import crmTextInput from "@/components/crm/textbox/crmTextInput";
import crmdatePicker from "@/components/crm/Time/crmdatePicker";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";
import Table from "@/components/crm/table/Table";

export default {
  name:"rescueListSearch",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    crmTextInput,
    crmdatePicker,
    lookupvalue,
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
          clickEvent: () => this.outport(),
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
                labelName: "服务单号",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "建单日期",
                codeField: "startDate,endDate",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "结案日期",
                codeField: "visitEndDate",
                component: () => import("@/components/crm/Time/crmdatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "单据状态",
                codeField: "custClassCode",
                lookuptype: "DB0061",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey5",
                labelName: "救援类型",
                codeField: "intentLevel",
                component: () => import("@/components/crm/crmEjectWindows/crmServiceType/index"),
                type: "propus",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey6",
                labelName: "客户名称",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: "电话",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey8",
                labelName: "车牌号",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey9",
                labelName: "解决方式",
                codeField: "customerSource",
                lookuptype: "DB0061",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey10",
                labelName: "责任网点",
                codeField: "dlrId",
                component: () => import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
                type: "propus",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey11",
                labelName: "建单人",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey12",
                labelName: "派单方式",
                codeField: "carLicenseStatus",
                lookuptype: "DB0061",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
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
                label: "客户名称",
                width: null,
                align: "center",
              },
              {
                prop: "addr",
                label: "电话",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "custClassName",
                label: "车牌号",
                width: null,
                align: "center"
              },
              {
                prop: "isVipName",
                label: "救援类型",
                width: null,
                align: "center"
              },
              {
                prop: "brandName",
                label: "单据状态",
                width: null,
                align: "center"
              },
              {
                prop: "seriesCode",
                label: "解决方式",
                width: null,
                align: "center",
              },
              {
                prop: "seriesName",
                label: "责任网点",
                width: null,
                align: "center",
                // hidden:true
              },
              {
                prop: "seriesName",
                label: "建单人",
                width: null,
                align: "center"
              },
              {
                prop: "carType",
                label: "派单方式",
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
          { label: "服务单号", value: "" },
          { label: "客户名称", value: "" },
          { label: "呼叫结果", value: "" },
          { label: "督办人", value: "" },
          { label: "督办时间", value: "" },
          { label: "监控状态", value: "" },
          { label: "沟通内容", value: "" },
          { label: "备注", value: "" },
          
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
    outport(){
      this.dialogVisible=true;
    }
  }
};
</script>
