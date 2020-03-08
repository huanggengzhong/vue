<!--
* description: 接触方式
* author: hejin
* createdDate: 2019-09-12
-->
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

    <el-dialog title="查看短信回复" :visible.sync="dialogVisible" width="1000px" append-to-body center >
      <div class="filter-container filter-params-crm">
        <el-form ref="form">
          <div class="filter-container-crm filter-params-crm">
            <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField2" />
          </div>
          <one-table-template1
            ref="multipleTable1"
            :dynamicButtons="tableButtons1"
            :dynamicComponents="tableComponents1"
            :dynamicApiConfig="apiConfig1"
            :dynamicTableCols="tableCols1"
            :dynamicFormFields="formField1"
            :dynamicIsShowSelect="false"
            :dynamicIsInitTable="true"
            :dynamicIsColumnDrop="false"
        />
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
//请求crm
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from "@/cache/configCache/index";
import OneTableTemplate1 from "@/components/templates/popupsOneTable";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";

export default {
  name: "crmMessageSendQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    OneTableTemplate1,
    crmGroupForm
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.csBuMessSendQueryFindAll,
      searchField:'服务单号',
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: "查询"
        // },
        // {
        //   compKey: "btnKey2",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: "重置"
        // }
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
                codeField: "serverOrder",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "客户名称",
                codeField: "custName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "电话",
                codeField: "phone",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "短息发送日期",
                codeField: "beginTime,endTime",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "",
                isMust: false,
                dateOptionsType: '0',
              },
              {
                compKey: "compKey5",
                labelName: "短信内容",
                codeField: "msgContent",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false,
              },

            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              // { prop: 'controlBtn', label: '操作', codeField: 'controlBtn', width: 120, align: 'center', fixed: true }, isComponent: true,
              //   comps: [
              //     {compKey: 'propKey0', labelName: '编辑', compareField: 'isEnable', compareValue: '1', codeField: 'editControlBtn', clickEvent: this.edit, component: () => import('@/components/org/linkButton')},
              //     {compKey: 'propKey1', labelName: '删除', compareField: 'isEnable', compareValue: '0', codeField: 'delControlBtn', clickEvent: this.del, component: () => import('@/components/org/linkButton')}
              //   ]
              // },
              {
                prop: "controlBtn",
                label: "查看回复",
                width: 100,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey0",
                    labelName: '查看回复',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: (index) => this.edit(index),
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "serverOrder",
                label: "服务单号",
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
                prop: "msgContent",
                label: "短信内容",
                width: null,
                align: "center"
              },
              {
                prop: "sendTime",
                label: "短信发送时间",
                width: null,
                align: "center"
              },
              {
                prop: "applyCode",
                label: "发送申请码",
                width: null,
                align: "center"
              } ,{
                prop: "status",
                label: "发送状态",
                width: null,
                align: "center"
              } ,
              {
                prop: "sendResult",
                label: "平台发送结果",
                width: null,
                align: "center",
              }, 
              
            ],
      // 表单查询数据
      formField: {
        serverOrder: "",
        custName: "",
        phone:"",
        beginTime:"",
        endTime:"",
        msgContent:"",
        // handleCode:1,
        // statusArray: ["10", "20", "21", "30", "31", "40", "50"],
      },

      dialogVisible:false,
      // 保存API配置对象
      apiConfig1: crmApis.csBuMessReceiveQueryFindAll,
      // 动态组件-按钮
      tableButtons1: [

      ],
      // 动态组件-查询条件
      tableComponents1: [
        // {
        //   compKey: "compKey1",
        //   labelName: "电话",
        //   codeField: "phone",
        //   component: () => import("@/components/crm/textbox/crmTextInput"),
        //   type: "inputText",
        //   isMust: true,
        //   disabled:true,
        // },
        // {
        //   compKey: "compKey2",
        //   labelName: "发送内容",
        //   codeField: "applyCode",
        //   component: () => import("@/components/crm/textbox/crmTextInput"),
        //   type: "inputText",
        //   isMust: true,
        //   inputType:"textarea",
        //   disabled:true,
        //   span:16,

        // }
      ],
      tableCols1: [
        {
          prop: "receiveContent",
          label: "回复内容",
          width: null,
          align: "center",
        },
        {
          prop: "backtime",
          label: "回复时间",
          width: null,
          align: "center"
        }
      ],
      // 表单数据（无需赋值，由混入对象赋值）
      formField1: {
        
      },
      infoComponents: [
        {
          title: "基本信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "电话",
              codeField: "phone",
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "发送内容",
              codeField: "msgContent",
              isMust: true,
              disabled:true,
              inputType:'textarea',
              span:12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        }],
      formField2: {
        phone:"",
        msgContent:"",
      },  
    };
  },

  methods:{
    edit(index){
      console.log(this.$refs.multipleTable.list[index]);
      this.formField2.phone=this.$refs.multipleTable.list[index].phone;
      this.formField2.msgContent=this.$refs.multipleTable.list[index].msgContent;
      this.dialogVisible=true;
    }
  }
};
</script>
