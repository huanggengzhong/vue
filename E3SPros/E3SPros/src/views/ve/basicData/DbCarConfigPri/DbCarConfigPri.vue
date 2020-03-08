
/**
* description: 经销商车型优先分配设置
* author: linwm
* createdDate: 2019-07-23
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
      :dynamicIsShowMoreBtn="false"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "DbCarConfigPri",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
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
      apiConfig: veApis.veDbCarConfigPriQueryFindAll,
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
          type: "",
          size: "small",
          clickEvent: () => this.synchrony("dlrId,dlrShortName"),
          text: this.$t("sys.button.sync") //同步
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.save") //保存
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export") //"导出"
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
                labelName: this.$t("org.label.carBrand"), //"品牌"
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.dlrName"), //"经销商"
                codeField: "dlrId",
                component: () => import("@/components/org/orgDlr/index"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                parentFileds: "carBrandCode",
                labelName: this.$t("org.label.carConfig"), //"车型配置"
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.carType1"), //"车型分类",
                lookuptype: "VE0621",
                codeField: "carType",
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "configPriorityId",
                label: "车型配置Id（主键Id）",
                hidden: true
              },
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCn"), //"品牌名称",
                width: 200,
                align: "center"
              },
              {
                prop: "carSeriesCode",
                label: this.$t("org.label.carSeriesCode"), //"车系编码",
                width: 150,
                align: "center"
              },
              {
                prop: "smallCarTypeCode",
                label: this.$t("ve.label.configPriority"), //"优选车型",
                width: 180,
                align: "center"
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carConfigCode"), //"车型配置编码",
                width: 250,
                align: "center"
              },
              {
                prop: "carConfigId",
                label: this.$t("org.label.carConfigId"), //"车型配置Id",
                hidden: true
              },
              {
                prop: "dlrId",
                label: this.$t("org.label.dlr"), //"经销商名称",
                width: 0,
                align: "center",
                hidden: true
              },
              {
                prop: "dlrShortName",
                label: this.$t("org.label.dlrName") + "+", //"经销商+",
                expLabel: this.$t("org.label.dlr"), //“经销商名称” (导出名称)
                width: null,
                align: "center",
                width: 350,
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "dlrId",
                    textField: "dlrShortName",
                    clickEvent: () => null,
                    component: () => import("@/components/org/orgDlr/index"),
                    type: "propus",
                    isMust: false
                  }
                ]
              },
              {
                prop: "updateControlId",
                label: "并发控制",
                width: 0,
                align: "center",
                hidden: true
              }
            ],
      formField: {
        carBrandCode: "",
        dlrId: "",
        carConfigId: "",
        carType: ""
      }
    };
  },

  methods: {
    add() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要保存的经销商车型优先分配数据",
          type: "warning",
          duration: 2000
        });
        return;
      }
      var saveObjList = [];
      for (var index in selectData) {
        var saveObj = {
          configPriorityId: selectData[index].configPriorityId,
          carConfigId: selectData[index].carConfigId,
          dlrId: selectData[index].dlrId,
          updateControlId: selectData[index].updateControlId
        };
        saveObjList.push(saveObj);
      }
      const queryObj = {
        // 保存mutation
        type: "mutation",
        typeParam: "($dataInfo:[InputVeDbCarConfigPri])",
        // api配置
        apiConfig: veApis.veDbCarConfigPriMutationUpdate,
        apiServices: [
          {
            apiServiceParam: "(dataInfo:$dataInfo)"
          }
        ],
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: saveObjList
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
          that.queryTable(1);
        } else {
          saveState = false;
          msg = response.data[queryObj.apiConfig.ServiceCode].msg;
          that.$message({
            message: msg,
            type: "warning",
            duration: 2000
          });
        }
      });
    }
  }
};
</script>
