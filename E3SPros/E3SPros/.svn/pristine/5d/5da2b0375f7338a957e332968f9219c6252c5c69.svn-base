<!--
* description: 库存管理
* author: yxyan
* createdDate: 2019-09-24
-->
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsColumnDrop="true"
    />
    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
    <!-- <div class="app-container app-container-table" style="margin-top: 0px">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="批次分配原则设置" name="first">
          <one-table-template
            ref="multipleTableSec"
            :dynamicButtons="tableButtonsSec"
            :dynamicComponents="tableComponentsSec"
            :dynamicApiConfig="apiConfigSec"
            :dynamicTableCols="tableColsSec"
            :dynamicFormFields="formFieldSec"
            :dynamicIsShowSelect="false"
          />
        </el-tab-pane>
        <el-tab-pane label="批次分配原则优先顺序设置" name="second"></el-tab-pane>
      </el-tabs>
    </div> -->
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";

export default {
  name: "vebackIntoStorage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  created() {},
  mounted() {},
  data() {
    return {
    //   // 下方第一个页签的内容
    //   activeName: '',
    //   tableButtonsSec: [],
    //   tableComponentsSec: [
    //
    //   ],
    //   apiConfigSec: orgApis.orgconfigurablePageComponentsManagement,
    //   tableColsSec: [],
    //   formFieldSec: {},
      // 网格查询API配置对象
      apiConfig: orgApis.orgconfigurablePageComponentsManagement,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        },

        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        },
         {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.export(),
          text: "导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
         {compKey: 'compKey1', labelName: this.$t('org.label.carBrandCn'), codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), isRequire: true, type: 'dropdownList', isMust: true},//品牌
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.carConfig'),/*车型配置*/
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true,
        },

        {compKey: 'compKey3',
          labelName: '库存状态',//this.$t('org.label.orgTypeName')库存状态
           lookuptype: 'VE0188',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList', isMust: true
        },
         {compKey: 'compKey4',
          labelName: this.$t('ve.label.vin')/*VIN码*/,
          codeField: 'vin',
          component: () => import('@/components/org/commonInput'),
          type: 'inputText',
          isMust: true
        },
         {compKey: 'compKey5',
          labelName: '库存类型',//this.$t('org.label.orgTypeName')库存类型
           lookuptype: 'VE0188',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList', isMust: false
        },
         {compKey: 'compKey6',
          labelName: '配车状态',//this.$t('org.label.orgTypeName')配车状态
           lookuptype: 'VE0188',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList',isMust: false
        },
        {
          compKey: "compKey7",
          labelName: this.$t('org.label.carColor')/*车身颜色*/,
          codeField: "carColorId",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: false
        },
        {
          compKey: "compKey8",
          labelName: this.$t('org.label.carIncolor')/*内饰色*/,
          codeField: "carIncolorId",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
         isMust: false
        },
       { compKey: "compKey9",
          labelName: '网点名称',//this.$t('org.label.carSerise'),//网点名称
          codeField: "carSeriesCode",
          parentFileds:'carBrandCode-carBrandCode',
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: false
        },
         {
          compKey: "compKey10",
          labelName: "入库日期",
          codeField: "assignDateBegin",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        {
          compKey: "compKey11",
          labelName: "至",
          codeField: "assignDateBegin",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        },
        { compKey: "compKey12",
          labelName: '入库仓库',//this.$t('org.label.carSerise'),//入库仓库
          codeField: "carSeriesCode",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: false
        },

      ],
      // 动态生成网格列
      tableCols: [
          {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 80,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "库存明细",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {
          prop: "carBrandCode",
          label: "经销商",
          width: null,
          align: "center"
        },
        {
          prop: "carBrandCode",
          label: "品牌",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable1",
          label: "VIN码",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable2",
          label: "库存状态",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable2",
          label: "配车状态",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable3",
          label: "收款状态",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable4",
          label: "车系",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable5",
          label: "车型编码",
          width: null,
          align: "center"
        },
         {
          prop: "isEnable5",
          label: "车型名称",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable5",
          label: "车型配置",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable6",
          label: "车身颜色",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable7",
          label: "内饰色",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable8",
          label: "选装包",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable9",
          label: "含税车身价",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable10",
          label: "车身颜色价",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable11",
          label: "入库日期",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable12",
          label: "入库仓库",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable13",
          label: "储区",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable14",
          label: "储位",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable15",
          label: "订单号",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "isEnable14",
          label: "合同号",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable15",
          label: "客户名称",
          width: null,
          align: "center",
          hidden: true
        },
          {
          prop: "isEnable14",
          label: "销售顾问",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable15",
          label: "配车时间",
          width: null,
          align: "center",
          hidden: true
        },
          {
          prop: "isEnable14",
          label: "钥匙号",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable15",
          label: "发动机号",
          width: null,
          align: "center",
          hidden: true
        },
          {
          prop: "isEnable14",
          label: "合格证",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable15",
          label: "车牌号",
          width: null,
          align: "center",
          hidden: true
        },
          {
          prop: "isEnable14",
          label: "主机厂入库日期",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable15",
          label: "主机厂出货确认日期",
          width: null,
          align: "center",
          hidden: true
        },
         {
          prop: "isEnable15",
          label: "是否非直营二网仓库",
          width: null,
          align: "center",
          hidden: true
        },
          {
          prop: "isEnable14",
          label: "验收说明",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable15",
          label: "库存备注",
          width: null,
          align: "center",
          hidden: true
        },

      ],
      tableHeight: 310,
      //表单查询数据
      formField: {
        VINCode: "",
        returnListNum: "",
        dealNum: ""
      }
    };
  },
  methods: {
    // 点击切换页签事件
    handleClick(tab, event) {
      this.tab = tab;
      this.event = event;
      const that = this.$refs.multipleTable;
      if (tab.name == "second") {
      }
    },
    queryTable(page, cb) {
      this.$refs.multipleTable.currentRow = null;
      this.$refs.multipleTable.listLoading = true;
      const queryObj = {
        // api配置
        apiConfig: this.$refs.multipleTable.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: this.$refs.multipleTable.apiQueryRow
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: this.$refs.multipleTable.listQuery.pageSize,
          pageIndex: this.$refs.multipleTable.listQuery.pageIndex,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.formField
        }
      };
      // 防止闪现
      this.formField.pageName = this.$route.query.pageName;
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        // 返回json
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        ) {
          if (page) {
            // 查询完返回指定的page页数
            this.$refs.multipleTable.listQuery.pageIndex = page;
          }
          this.$refs.multipleTable.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          var tmpLst = this.$refs.multipleTable.$utils.changeToOneDeepArray(
            response.data[queryObj.apiConfig.ServiceCode].rows
          );
          for (var i = 0; i < tmpLst.length; i++) {
            if (!tmpLst[i].index) {
              tmpLst[i].index = i;
            }
          }
          this.$refs.multipleTable.list = tmpLst;
        }
        if (typeof cb === "function") {
          cb.call(this, response);
        }
        this.$refs.multipleTable.listLoading = false;
      });
    },
    queryTableNew() {
      if (this.formField.lang != "") {
        delete this.formField.pageName;
        this.queryTable(1, function() {
          this.formField.pageName = this.$route.query.pageName;
        });
      }
    },
    addNew() {
      var newFormField = {
        pageName: this.formField.pageName,
        pageId: this.formField.pageId
      };
      this.add(newFormField);
    }
  }
};
</script>
<style>
