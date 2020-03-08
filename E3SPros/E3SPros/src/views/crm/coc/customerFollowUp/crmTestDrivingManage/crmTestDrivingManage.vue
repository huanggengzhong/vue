<!--
* description: 试乘试驾管理
* author: zouzx
* createdDate: 2019-10-9
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

      <handle
        :dynamicEditRowData="historyRowData"
        :popupsVisible="historyPopupsVisible"
        :key="historyPopupsKey"
        :popupsState="historyPopupsState"
        @close="historyclose"
      ></handle>

      <!-- <upload
        :popupsVisible="DRPopupsVisible"
        :key="DRPopupsKey"
        :popupsState="DRPopupsState"
        @close="DRclose"
      ></upload> -->

      <pic
        :dynamicEditRowData="TPRowData"
        :popupsVisible="TPPopupsVisible"
        :key="TPPopupsKey"
        :popupsState="TPPopupsState"
        @close="picclose"
      ></pic>

  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import handle from "./handle";
import pic from "./pic";
import { CacheConfig } from '@/cache/configCache/index'

export default {
  name:"crmTestDrivingManage",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    handle,
    pic
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("异步 start");
        resolve("异步 end");
      }, 1000);
    });
    console.log("同步 start");
    return {
      searchField:"客户名称/电话",
      // 网格查询API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.addTestDriving(),
          text: "新增"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.toCarManage(),
          text: "车辆管理"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.addTestDrvRPT(),
          text: "统计查询"
        }
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
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "电话",
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "销售顾问",
                codeField: "userId",
                textField: "empName",
                component: () => import("@/components/crm/crmEjectWindows/crmSalesConsultant/index"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "试乘试驾类型",
                codeField: "",
                lookuptype: "VE0059",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey5",
                labelName: "试乘试驾车型",
                codeField: "carConfigId",
                textField: "carConfigCode",
                component: () => import("@/components/crm/crmEjectWindows/crmCartype/index"),
                type: "propus",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey6",
                labelName: "试乘试驾日期",
                codeField: "",
                component: () => import("@/components/crm/Time/crmdtDatePicker"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey7",
                labelName: "VIN码",
                codeField: "",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: false
              }
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
                width: 123,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '修改',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: this.editTestDriving,
                    component: () => import("@/components/org/linkButton")
                  },
                  // {
                  //   compKey: "propKey2",
                  //   labelName: '反馈',
                  //   codeField: 'editControlBtn',
                  //   align: "center",
                  //   isShowLabel:true,
                  //   isShow:true,
                  //   clickEvent: this.historyedit,
                  //   component: () => import("@/components/org/linkButton")
                  // },
                  {
                    compKey: "propKey3",
                    labelName: '查看附件',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: this.picedit,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "",
                label: "销售顾问",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "试乘试驾单号",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "试乘试驾类型",
                width: null,
                align: "center"
              },
              {
                prop: "isEnableName",
                label: "客户名称",
                width: null,
                align: "center"
              },
              {
                prop: "createdName",
                label: "电话",
                width: null,
                align: "center"
              },
              {
                prop: "createdDate",
                label: "线索来源",
                width: null,
                align: "center"
              },
              {
                prop: "modifyName",
                label: "试驾人",
                width: null,
                align: "center",
              },
              {
                prop: "lastUpdatedDate",
                label: "VIN码",
                width: null,
                align: "center",
              },
              {
                prop: "nodeGroupId",
                label: "备注",
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: "意向车系",
                width: null,
                align: "center"
              },
              {
                prop: "serverType",
                label: "意向车型编码",
                width: null,
                align: "center"
              },
              {
                prop: "groupType",
                label: "意向车型名称",
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: "试乘试驾车系",
                width: null,
                align: "center"
              },
              {
                prop: "oemCode",
                label: "试乘试驾车型编码",
                width: null,
                align: "center"
              },
              {
                prop: "groupCode",
                label: "试乘试驾车型",
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: "车牌号",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "试乘试驾日期",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "开始里程",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "结束里程",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "开始时间",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "结束时间",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "驾驶证号",
                width: null,
                align: "center"
              },
              {
                prop: "",
                label: "驾驶证路径",
                width: null,
                align: "center"
              }
            ],
      // 表单查询数据
      formField: {
        oemCode:"1",
        groupCode: "1"
      },
      historyPopupsVisible: false,
      DRPopupsVisible:false,
      TPPopupsVisible:false,
      // 新增、编辑弹窗Key
      historyPopupsKey: "history1",
      DRPopupsKey: "upload",
      TPPopupsKey: "pic",
      // 新增、编辑弹窗状态（add/edit/view）
      historyPopupsState: "",
      DRPopupsState: "",
      TPPopupsState: "",
      // 新增、编辑行对象
      historyRowData: {},
      TPRowData: {}
    };
  },
  methods: {
    addTestDriving() {
      let that = this
      that.$crmcf.jumpDetailTag(that,'TestDrivingedit','/TestDrivingedit',null)
    },
    addTestDrvRPT() {
      let that = this
      that.$crmcf.jumpDetailTag(that,'TestDrvStatistics','/TestDrvStatistics',null)
    },
    toCarManage(){
      this.$router.push('/crmModule/crmyxmodule/crmclueMange/testDrivingManage')
    },
    editTestDriving(index) {
      var curIndex = index;
      const that = this.$refs.multipleTable;
      if (curIndex === undefined || curIndex === null) {
        var currentRow;
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection;
          if (selectData.length > 0) {
            currentRow = selectData[0];
          }
        } else {
          // 单选
          currentRow = that.currentRow;
        }
        if (currentRow) {
          curIndex = currentRow.index;
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert("请选择需要修改的数据", "提示");
        return;
      }
      this.$crmcf.jumpDetailTag(this,'TestDrivingedit','/TestDrivingedit',that.list[curIndex])
    },
    historyedit(index) {
      var curIndex = index;
      const that = this.$refs.multipleTable;
      if (curIndex === undefined || curIndex === null) {
        var currentRow;
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection;
          if (selectData.length > 0) {
            currentRow = selectData[0];
          }
        } else {
          // 单选
          currentRow = that.currentRow;
        }
        if (currentRow) {
          curIndex = currentRow.index;
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert("请选择需要修改的数据", "提示");
        return;
      }

      this.historyRowData = that.list[curIndex];
      this.showhistoryEdit("edit");
    },
    picedit(index) {
      var curIndex = index;
      const that = this.$refs.multipleTable;
      if (curIndex === undefined || curIndex === null) {
        var currentRow;
        if (that.isMul === true) {
          // 多选
          var selectData = that.selection;
          if (selectData.length > 0) {
            currentRow = selectData[0];
          }
        } else {
          // 单选
          currentRow = that.currentRow;
        }
        if (currentRow) {
          curIndex = currentRow.index;
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert("请选择需要修改的数据", "提示");
        return;
      }

      this.TPRowData = that.list[curIndex];
      this.showpicEdit("edit");
    },
    upload(){
      debugger
      this.DRPopupsState = "edit";
      this.DRPopupsVisible = true;
      this.DRPopupsKey = this.$utils.generateId();
    },
    // 显示新增、修改弹窗
    showhistoryEdit(type) {
      this.historyPopupsState = type;
      this.historyPopupsVisible = true;
      this.historyPopupsKey = this.$utils.generateId();
    },
    showpicEdit(type) {
      this.TPPopupsState = type;
      this.TPPopupsVisible = true;
      this.TPPopupsKey = this.$utils.generateId();
    },
    // 关闭设置历史弹窗
    historyclose(type) {
      this.historyPopupsVisible = false;
      this.historyPopupsKey = this.$utils.generateId();
    },
    picclose(type) {
      this.TPPopupsVisible = false;
      this.TPPopupsKey = this.$utils.generateId();
    },
    DRclose(type) {
      this.DRPopupsVisible = false;
      this.DRPopupsKey = this.$utils.generateId();
    }
  }
};
</script>
