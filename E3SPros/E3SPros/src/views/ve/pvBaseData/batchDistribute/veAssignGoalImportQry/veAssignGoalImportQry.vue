<!--
* description: 分配达成率目标导入
* author: xulfan
* createdDate: 2019-09-20
* logs:
*   2019-09-19 完成页面开发和国际化配置 xulfan
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
      :dynamicIsShowMoreBtn="true"
    />
    <certificatImportDialog @visible="handDialogVisibleFunc" :dialogVisible="dialogVisible" />
    <el-dialog
      :title=" $t('sys.button.switchSet') "
      :visible.sync="infoDialogVisible"
      width="400px"
      height="200px"
      center
      @close="sendCode"
      class="orgManageDialog"
      :append-to-body="true"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <div class="onOffPart">
            <span>请确认自定义车型划分与车系关系是否正确，确认是否覆盖已有数据</span>
          </div>
          <div class="filter-container filter-button orgManageBtn">
            <el-button type="primary" size="small" @click="saveConfirm()">确认</el-button>
            <el-button size="small" @click="cancel()">取消</el-button>
          </div>
        </el-row>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
import LangSelect from "@/components/LangSelect";
import certificatImportDialog from "./dialog";
export default {
  name: "veAssignGoalImportQry",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    LangSelect,
    certificatImportDialog
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      infoDialogVisible: false,

      dialogVisible: false,
      // 网格查询API配置对象
      apiConfig: veApis.veAssignGoalImportQry,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query") //查询
        },
        {
          compKey: "btnKey2",
          size: "small",
          clickEvent: () => this.readGoal(),
          text: this.$t("org.label.readGoal") //读取目标量
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.importFile(),
          text: this.$t("sys.button.import") //导入
        },
        {
          compKey: "btnKey5",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") /*保存*/
        },
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //导出
        }
      ],
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 动态组件-查询条件
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn"), //品牌名称
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.dlrName"), //经销商
                codeField: "dlrCode",
                component: () => import("@/components/org/secDlr"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.carSerise"), //车系
                codeField: "carSeriesCode",
                parentFileds: "carBrandCode-carBrandCode",
                component: () => import("@/components/org/CarCode"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.assignMonthBegin"), //考核年月起
                codeField: "assignMonthBegin",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.assignMonthEnd"), //考核年月止
                codeField: "assignMonthEnd",
                component: () =>
                  import("@/components/org/datePicker/datePicker"),
                type: "dropdownList",
                isMust: false
              },
              {
                compKey: "compKey6",
                codeField: "file",
                component: () =>
                  import("@/components/ve/downloadImportTemplate"),
                type: "inputText",
                isMust: false,
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCn"), //品牌
                width: null,
                align: "center"
              },
              {
                prop: "dlrShortName",
                label: this.$t("org.label.dlrName"), //经销商
                width: null,
                align: "center"
              },
              {
                prop: "carSeriesCn",
                label: this.$t("org.label.carSerise"), //车系
                width: null,
                align: "center"
              },
              {
                prop: "assignMonth",
                label: this.$t("org.label.assignMonth"), //考核月份
                width: null,
                align: "center"
              },
              {
                prop: "goalAmount",
                label: this.$t("org.label.goalAmount"), //目标量
                width: null,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "goalAmount",
                    clickEvent: "",
                    component: () => import("@/components/org/commonInput")
                  }
                ]
              },

              {
                prop: "createdDate",
                label: this.$t("org.label.creationTime"), //创建时间
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: this.$t("org.label.updateControlId"), //并发控制Id
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        dlrCode: "",
        carSeriesCode: "",
        assignMonthBegin: "",
        assignMonthEnd: ""
      }
    };
  },
  methods: {
    save() {
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t("org.message.selSaveData") /*请选择需要保存的数据*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veAssignGoalImportSave,
          // 条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCn: selectData[k].carBrandCn,
              dlrShortName: selectData[k].dlrShortName,
              carSeriesCn: selectData[k].carSeriesCn,
              assignMonth: selectData[k].assignMonth,
              goalAmount: selectData[k].goalAmount,
              createdDate: selectData[k].createdDate,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        // 转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        this.$requestGraphQL(paramD).then(response => {
          that.$message({
            message: this.$t("sys.tips.esTip5") /*保存成功*/,
            type: "success",
            duration: 2000
          });
          that.queryTable(1);
        });
      }
    },
    saveConfirm() {
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        this.infoDialogVisible = false;
        that.$message({
          message: this.$t("org.message.selSaveData") /*请选择需要保存的数据*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veAssignGoalImportSave,
          // 条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCn: selectData[k].carBrandCn,
              dlrShortName: selectData[k].dlrShortName,
              carSeriesCn: selectData[k].carSeriesCn,
              assignMonth: selectData[k].assignMonth,
              goalAmount: selectData[k].goalAmount,
              createdDate: selectData[k].createdDate,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        // 转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        this.$requestGraphQL(paramD).then(response => {
          that.$message({
            message: this.$t("sys.tips.esTip5") /*保存成功*/,
            type: "success",
            duration: 2000
          });
          this.infoDialogVisible = false;
          that.queryTable(1);
        });
      }
    },
    handDialogVisibleFunc(val) {
      this.dialogVisible = val;
    },
    importFile() {
      this.dialogVisible = true;
    },
    //读取目标量
    readGoal() {
      this.infoDialogVisible = true;
    },
    cancel() {
      this.infoDialogVisible = false;
    },
    sendCode(val) {
      this.infoDialogVisible = val;
    }
  }
};
</script>
<style scoped>
.onOffPart {
  height: 50px;
  text-align: left;
}
</style>
