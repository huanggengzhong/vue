<template>
  <div class="app-container app-container-table filter-params-crm filter-params-crm-scroll">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="save">保存</el-button>
    </div>
    <div class="filter-container filter-title">新车意向跟进</div>
    <div>
      <el-row :gutter="26" style="margin:0;">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 6"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
            :isMul="false"
          ></component>
        </el-row>
    </div>

    <el-tabs v-model="activeName1" class="tabs" type="card" @tab-click="handleClick1">
      <el-tab-pane label="接触记录" name="first">
        <Table :tabledatas="tabledatas1" ref="table1" />
      </el-tab-pane>
      <el-tab-pane label="全网行为" name="second">
        <Table :tabledatas="tabledatas2" ref="table2" />
      </el-tab-pane>
    </el-tabs>

    <el-tabs v-model="activeName2" class="tabs" type="card" @tab-click="handleClick2">
      <el-tab-pane label="回访信息" name="first">
        <Table :tabledatas="tabledatas1" ref="table1" />
      </el-tab-pane>
      <el-tab-pane label="回访话术" name="second">
        <el-row>
          <el-col :span="16">

            <Table :tabledatas="tabledatas" ref="table" />
          </el-col>
          <el-col :span="8">

          </el-col>
        </el-row>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from '@/cache/configCache/index'
import Table from "@/components/crm/table/Table";

export default {
    // 组件混入对象
  mixins: [formMixins],
  components:{
    OneTableTemplate,
    Table,

  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data(){
    return{
      activeName1: "first",
      activeName2: "first",
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "客户名称",
          codeField: "nodeGroupCode",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "电话",
          codeField: "groupName",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "客户来源",
          codeField: "serverType",
          isRequire: false,
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "号牌状态",
          codeField: "groupType",
          isRequire: false,
          lookuptype: "LX804",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "意向车型",
          codeField: "isEnable",
          isRequire: false,
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "意向颜色",
          codeField: "groupType",
          isRequire: false,
          lookuptype: "LX804",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "购车预算",
          codeField: "groupName",
          isRequire: false,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "意向级别",
          codeField: "groupType",
          isRequire: false,
          lookuptype: "LX804",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "购买形态",
          codeField: "groupType",
          isRequire: false,
          lookuptype: "LX804",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "是否信贷",
          codeField: "groupType",
          isRequire: false,
          lookuptype: "LX804",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey11",
          labelName: "是否大客户",
          codeField: "groupType",
          isRequire: false,
          lookuptype: "LX804",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey12",
          labelName: "大客户类型",
          codeField: "groupType",
          isRequire: false,
          lookuptype: "LX804",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
      ],
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        oemCode: "1",
        groupCode: "1",
        nodeGroupId: "",
        updateControlId: "",
        nodeGroupCode: "",
        groupName: "",
        serverType: "",
        groupType: "",
        isEnable: ""
      },

      tabledatas1: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [

          { label: "活动类型", value: "dealType" },
          { label: "销售顾问", value: "carSeriesCn" },
          { label: "计划回访日期", value: "createdDate" },
          { label: "回访内容", value: "hfPerson" },
          { label: "回访方式", value: "actionDesc" },
          { label: "活动来源", value: "actionName" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryWholeNetAction,
          apiQueryRow: [
            "createdDate",
            "dealType",
            "carSeriesCn",
            "clueLevelCode",
            "hfPerson",
            "actionDesc",
            "actionName"
          ],
          params: {
            contactTel: "1"
          }
        }
      },
      tabledatas2: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [

          { label: "活动单号", value: "dealType" },
          { label: "本次回访日期始", value: "createdDate" },
          { label: "本次回访日期止", value: "" },
          { label: "销售顾问", value: "hfPerson" },
          { label: "下次回访日期", value: "createdDate" },
          { label: "意向级别", value: "actionDesc" },
          { label: "活动场所", value: "actionName" },
          { label: "接触方式", value: "" },
          { label: "回访内容", value: "" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryWholeNetAction,
          apiQueryRow: [
            "createdDate",
            "dealType",
            "carSeriesCn",
            "clueLevelCode",
            "hfPerson",
            "actionDesc",
            "actionName"
          ],
          params: {
            contactTel: "1"
          }
        }
      },
      tabledatas: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [

          { label: "活动主题", value: "dealType" },
          { label: "话术类别", value: "carSeriesCn" },
          { label: "问题", value: "createdDate" },
          { label: "答案", value: "hfPerson" },

        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryWholeNetAction,
          apiQueryRow: [
            "createdDate",
            "dealType",
            "carSeriesCn",
            "clueLevelCode",
            "hfPerson",
            "actionDesc",
            "actionName"
          ],
          params: {
            contactTel: "1"
          }
        }
      },

    }
  },
  methods:{
    save(){

    },
    handleClick1(tab, event){
      if (tab.name == "first") {
        that.$refs.table1.getData();
      }else{
        that.$refs.table2.getData();
      }
    },
    handleClick2(tab, event){
      if (tab.name == "first") {

      }else{

      }
    }
  }
}
</script>
