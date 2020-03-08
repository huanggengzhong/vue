<!--
* description: 仓库信息维护
* author: linsy
* createdDate: 2019-08-12
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
    />
    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
    <imports @visible="handDialogVisibleFunc" :dialogVisible="dialogVisible" />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
import { orgApis } from "@/api/graphQLApiList/org";
import imports from "./import";

export default {
  name: "veWarehouseUphold",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit,
    imports
  },
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDbCarStockHouseQueryFindAll,
      dialogVisible: false,

      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.import(),
          text: this.$t("sys.button.import")
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export")
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn") /*品牌*/,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.warnHome") /*仓库*/,
                codeField: "carStockHouseId",
                component: () =>
                  import("@/components/ve/wareHouseMulti/wareHouseMulti"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.dlrName") /*经销商*/,
                codeField: "dlrId",
                component: () => import("@/components/org/orgDlr"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: "仓库类型",
                lookuptype: "VE0015",
                codeField: "carHouseType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.isEnable") /*是否启用*/,
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols: this.getCols(),
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "1",
        carStockHouseId: "",
        carHouseType:'',
        dlrId: "",
        isEnable: ""
      }
    };
  },

  methods: {
    //驳回
    import() {
      this.dialogVisible = true;
    },
    handDialogVisibleFunc(val) {
      this.dialogVisible = val;
    },
    // 审核
    examine() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t("org.message.selCheckCar") /*请选择需要审核的车辆*/,
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
          apiConfig: veApis.veStockDiscardQry,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              vin: selectData[k].vinCode,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            saveCount++;
          } else {
            saveState = false;
            msg = response.data[queryObj.apiConfig.ServiceCode].msg;
            that.$message({
              message: msg,
              type: "warning",
              duration: 2000
            });
          }
          if (saveCount == selectData.length) {
            that.$message({
              message: this.$t("sys.tips.esTip12") /*审核成功*/,
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    },
    getCols() {
      var cols = [
        {
          prop: "controlBtn",
          label: this.$t("sys.content.operate") /*操作*/,
          codeField: "controlBtn",
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: this.$t("sys.button.edit") /*编辑*/,
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            },
            {
              compKey: "propKey1",
              labelName: this.$t("sys.button.delete") /*删除*/,
              codeField: "delControlBtn",
              clickEvent: this.del,
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
            prop: "carBrandCn",
            label: this.$t("org.label.carBrandCn") /*品牌*/,
            width: null,
            align: "center"
          },
          {
            prop: "carHouseCode",
            label: this.$t("org.label.warnHomeCode") /*仓库编码*/,
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "carHouseName",
            label: this.$t("org.label.warnHomeName") /*仓库名称*/,
            width: null,
            align: "center"
          },
          {
            prop: "carHouseType",
            label: "仓库类别",
            width: null,
            align: "center"
          },
          {
            prop: "dlrShortName",
            label: this.$t("org.label.dlrShortName") /*经销商简称*/,
            width: null,
            align: "center"
          },
          {
            prop: "dlrId",
            label: this.$t("org.label.dlrId") /*经销商id*/,
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "answerCode",
            label: this.$t("org.label.answerCode") /*仓库ANSWER*/,
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "carHouseAddr",
            label: this.$t("org.label.carHouseAddr") /*仓库地址*/,
            width: null,
            align: "center"
          },
          {
            prop: "carHouseFax",
            label: this.$t("org.label.carHouseFax") /*仓库传真*/,
            width: null,
            align: "center"
          },
          {
            prop: "carHouseTel",
            label: this.$t("org.label.carHouseTel") /*仓库电话*/,
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "carHouseManager",
            label: this.$t("org.label.carHouseManager") /*仓库管理者*/,
            width: null,
            align: "center"
          },
          {
            prop: "isEnable",
            label: this.$t("org.label.isEffective"),
            width: null,
            align: "center"
          } /*是否有效*/,
          {
            prop: "updateControlId",
            label: "并发控制",
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "carStoreClass",
            label: "仓库分类",
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "carStockHouseId",
            label: "主键ID",
            width: null,
            align: "center",
            hidden: true
          },
          {
            prop: "carBrandCode",
            label: "品牌编码",
            width: null,
            align: "center",
            hidden: true
          }
        ]);
      }
      return cols;
    },
    //删除
    del(index) {
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
        this.$alert(this.$t("org.message.selDelData")); /*请选择需要删除的数据*/
        return;
      }
      var editRowData = that.list[curIndex];
      debugger;
      let obj = {};
      obj.updateControlId = editRowData.updateControlId;
      obj.carStockHouseId = editRowData.carStockHouseId;

      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        // api配置
        apiConfig: veApis.veStockHouseDel,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //  pageSize: 1000,
          //  pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[veApis.veStockHouseDel.ServiceCode].result === "1") {
          //通关如果的状态确认是编辑还是添加
          this.$message({
            message: this.$t("sys.tips.esTip14"),
            type: "success"
          });
          this.queryTable(1);
        } else {
          this.$message({
            message: response.data[veApis.veStockHouseDel.ServiceCode].msg
          });
        }
      });
    }
  }
};
</script>
<style scoped>
/deep/ a {
  color: #409eff;
}
</style>
