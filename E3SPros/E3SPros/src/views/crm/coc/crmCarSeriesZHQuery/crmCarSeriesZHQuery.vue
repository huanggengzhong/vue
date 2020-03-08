<!--
* description: 车系中文对照关系
* author: zouzx
* createdDate: 2019-09-25
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
      :dynamicIsColumnDrop="false"/>

      <Edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"/>

      <Detail
      :dynamicEditRowData="DTRowData"
      :popupsVisible="DTPopupsVisible"
      :key="DTPopupsKey"
      :popupsState="DTPopupsState"
      @close="DTclose"/>

  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import Edit from "./edit";
import Detail from "./detail";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name:"crmCarSeriesZHQuery",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    Detail
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {

    var p = new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("异步 start");
        resolve("异步 end");
      }, 1000);
    });
    console.log("同步 start");
    return {
      searchField:"车系",
      // 网格查询API配置对象
      apiConfig: crmApis.csDbMediaCarServiceQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: "查询"
        // },
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
        // {
        //   compKey: "btnKey3",
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
                labelName: "车辆品牌",
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: false,
                isMul:false
              },
              {
                compKey: "compKey2",
                labelName: "车系",
                codeField: "carServiceCode",
                component: () => import("@/components/crm/crmEjectWindows/crmIntenCarSeries/index"),
                type: "propus",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "是否启用",
                codeField: "isEnable",
                component: () => import("@/components/crm/Select/crmIsEnable"),
                type: "dropdownList",
                isMust: false,
                isMul: false,
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
                    compKey: "propKey0",
                    labelName: '修改',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  },
                  {
                    compKey: "propKey1",
                    labelName: '校对明细',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: this.detail,
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "carBrandCn",
                label: "车辆品牌",
                width: null,
                align: "center"
              },
              {
                prop: "carServiceCode",
                label: "车系编码",
                width: null,
                align: "center"
              },
              {
                prop: "carSeriesCn",
                label: "车系",
                width: null,
                align: "center"
              },
              {
                prop: "infoChanDName",
                label: "来源垂直媒体",
                width: null,
                align: "center"
              },
              {
                prop: "mediaCartypeCode",
                label: "垂直媒体车系编码",
                width: null,
                align: "center"
              },
              {
                prop: "mediaCartypeName",
                label: "垂直媒体车系名称",
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: "是否启用",
                width: null,
                align: "center"
              },
              {
                prop: "remake",
                label: "备注",
                width: null,
                align: "center",
              },
              {
                prop: "createdDate",
                label: "创建时间",
                width: null,
                align: "center",
              },
              {
                prop: "lastUpdatedDate",
                label: "修改时间",
                width: null,
                align: "center",
              },
              {
                prop: "id",
                label: "主键",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "mediaCode",
                label: "垂直媒体编码",
                width: null,
                align: "center",
                hidden: true
              },
            ],
      // 表单查询数据
      formField: {
        carBrandCode:"",
        carServiceCode:"",
        isEnable:""
      },
      dialogVisible: false,
      sysMsgModuleObjProp: {
        id: ""
      },
      // 新增、编辑行对象
      DTRowData: {},
      DTPopupsVisible:false,
      DTPopupsKey: "",
      // 新增、编辑弹窗状态（add/edit/view）
      DTPopupsState: ""
    };
  },
  methods: {
    detail(index){
      debugger
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
          this.$alert("请选择需要留档的数据", "提示");
          return;
      }
      this.DTRowData = that.list[curIndex];
      this.showDTEdit("edit");
    },
    showDTEdit(type) {
      this.DTPopupsState = type;
      this.DTPopupsVisible = true;
      this.DTPopupsKey = this.$utils.generateId();
    },
    DTclose(type) {
      this.DTPopupsVisible = false;
      this.DTPopupsKey = this.$utils.generateId();
    }
  }
};
</script>
