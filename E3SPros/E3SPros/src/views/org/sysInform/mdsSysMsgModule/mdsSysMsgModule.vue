/**
* description: 系统通知模板定义
* author: linwm
* createdDate: 2019-08-04
*/
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="false"
    />
    <sysMsgModuleDialog
      @visible="handDialogVisibleFunc"
      :dialogVisible="dialogVisible"
      :sysMsgModuleObjProp="sysMsgModuleObjProp"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/oneTable";
import sysMsgModuleDialog from "./dialog";
import { CacheConfig } from "@/cache/configCache/index";

export default {
  name: "mdsSysMsgModule",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    sysMsgModuleDialog
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      isMulFlag: false,
      dialogList: null,
      // 网格查询API配置对象
      apiConfig: orgApis.mdsSysMsgModuleQueryByPage,
      formField: {
        moduleName: "",
        moduleCode: "",
        belongtoCode: ""
      },
      sysMsgModuleObjProp: {
        moduleId: "",
        moduleCode: "",
        moduleName: "",
        belongtoCode: "",
        isEnable: "",
        titleModule: "",
        contentModule: ""
      },
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text:  this.$t("sys.button.query")  //查询
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add")  //新增
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.ModuleName"), /*模板名称 */
                codeField: "moduleName",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              // 显示组件
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.ModuleCode"), /* 模板编码 */
                codeField: "moduleCode",
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              // 模块名称（值列表）
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.BelongtoCode"), /* 所属模块 */
                lookuptype: "DB0001",
                codeField: "belongtoCode",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),
      dialogVisible: false
    };
  },
  methods: {
    //新增
    add() {
      this.resetsysMsgModuleObjProp();
      this.dialogVisible = true;
    },
    //
    handDialogVisibleFunc(val) {
      this.dialogVisible = val;
    },
    resetsysMsgModuleObjProp() {
      this.sysMsgModuleObjProp = {
        moduleCode: "",
        moduleName: "",
        belongtoCode: "",
        isEnable: "",
        titleModule: "",
        contentModule: ""
      };
    },
    edit(comType) {
      var curIndex = comType;
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
          curIndex = currentRow.comType;
        }
      }

      if (curIndex === undefined || curIndex === null) {
        this.$alert("请选择需要修改的数据", "提示");
        return;
      }
      this.sysMsgModuleObjProp = {
        moduleId: that.list[curIndex].moduleId,
        moduleCode: that.list[curIndex].moduleCode,
        moduleName: that.list[curIndex].moduleName,
        belongtoCode: that.list[curIndex].module,
        titleModule: that.list[curIndex].titleModule,
        contentModule: that.list[curIndex].contentModule,
        isEnable: that.list[curIndex].isEnable
      };

      this.dialogVisible = true;
    },
    controlEnable(comType) {
      var curIndex = comType;
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
          curIndex = currentRow.comType;
        }
      }
      var row = that.list[curIndex];
      if (curIndex === undefined || curIndex === null) {
        if (row.isEnable == "1") {
          this.$alert("请选择需要禁用的数据", "提示");
          return;
        } else if ((row.isEnable = "0")) {
          this.$alert("请选择需要启用的数据", "提示");
          return;
        }
      }
      if (row.isEnable == "1") {
        this.sysMsgModuleObjProp = {
          moduleId: row.moduleId,
          moduleCode: row.moduleCode,
          moduleName: row.moduleName,
          belongtoCode: row.belongtoCode,
          titleModule: row.titleModule,
          contentModule: row.contentModule,
          isEnable: "0"
        };
      } else if ((row.isEnable = "0")) {
        this.sysMsgModuleObjProp = {
          moduleId: row.moduleId,
          moduleCode: row.moduleCode,
          moduleName: row.moduleName,
          belongtoCode: row.belongtoCode,
          titleModule: row.titleModule,
          contentModule: row.contentModule,
          isEnable: "1"
        };
      }
      this.save();
    },
    //保存
    save() {
      const that = this;

      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: orgApis.mdsSysMsgModuleMutationSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.sysMsgModuleObjProp
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
          if (that.sysMsgModuleObjProp.isEnable == "1") {
            that.$message({
              message: "启用成功",
              type: "success",
              duration: 2000
            });
          } else if (that.sysMsgModuleObjProp.isEnable == "0") {
            that.$message({
              message: "禁用成功",
              type: "success",
              duration: 2000
            });
          }
        }
      });
    },
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: this.$t("sys.content.operate"),//操作
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t("sys.button.edit"),//编辑
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey1",
              labelName: this.$t("org.label.prohibit"),//禁用
              compareField: "isEnable",
              compareValue: "1",
              codeField: "disEnableControlBtn",
              clickEvent: this.controlEnable,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey2",
              labelName: this.$t("org.label.enable"),//启用
              compareField: "isEnable",
              compareValue: "0",
              codeField: "enableControlBtn",
              clickEvent: this.controlEnable,
              component: () => import("@/components/org/linkButton")
            }
          ]
        }
      ];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "moduleId",
            label: "模板ID",
            width: 0,
            align: "center",
            hidden: true
          },
          {
            prop: "moduleCode",
            label: this.$t("org.label.ModuleCode"), /* 模板编码 */
            width: 320,
            align: "center"
          },
          {
            prop: "moduleName",
            label: this.$t("org.label.ModuleName"), /* 模板名称 */
            width: 325,
            align: "center"
          },
          {
            prop: "titleModule",
            label: this.$t("org.label.ModuleTitle"), /* 模板标题 */
            width: 0,
            align: "center",
            hidden: false
          },
          {
            prop: "contentModule",
            label: this.$t("org.label.ModuleBody"), /* 模板内容 */
            width: 0,
            align: "center",
            hidden: false
          },
          { prop: "isEnable", label:this.$t("org.label.isEnable"), width: 200, align: "center" },/* 是否启用 */
          {
            prop: "updateControlId",
            label: this.$t("org.label.concurrencyControl"),//并发控制
            width: 0,
            align: "center",
            hidden: true
          }
        ]);
      }
      return cols;
    }
  }
};
</script>
