
/**
* description: 车型分配模式设置
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
      :dynamicIsShowMoreBtn="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "carTypeAssign",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  //  阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veDbCarconfigDismodeQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query"), //查询
          name: "search", //按钮图标样式
          position: "right",
          fuzzySearch: true
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony("distributeMode"),
          text: this.$t("sys.button.sync"), //同步
          name: "synchronizeCustomerProfile",
          position: "left"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save"),
          name: "preservation",
          position: "left" //保存
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset"),
          name: "reset",
          position: "right" //重置
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export"),
          name: "export",
          position: "left" //"导出"
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
                labelName: this.$t("org.label.carBrand"),
                codeField: "carBrandCode", //"品牌"
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carConfig"), //"车型配置编码",
                codeField: "carConfigId",
                parentFileds: "carBrandCode",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.distributeModel"), // "分配模式"
                lookuptype: "VE0016",
                codeField: "distributeMode",
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
                prop: "carBrandCode",
                label: "品牌编码",
                align: "center",
                hidden: true
              },
              {
                prop: "carConfigId",
                label: "车型配置ID ",
                align: "center",
                hidden: true
              },
              {
                prop: "carconfigDismodeId",
                label: "车型分配模式ID ",
                align: "center",
                hidden: true
              },
              {
                prop: "distributeMode",
                label: "车型分配模式名称 ",
                align: "center",
                hidden: true
              },
              {
                prop: "carBrandName",
                label: this.$t("org.label.carBrandCn"), //"品牌名称",
                width: 200,
                align: "center"
              },
              {
                prop: "carSeriesCn",
                label: this.$t("org.label.carSeriesCn"), //"车系名称",
                width: 300,
                align: "center"
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carConfigCode"), //"车型配置编码",
                width: 400,
                align: "center"
              },
              {
                prop: "distributeModeName",
                label: this.$t("ve.label.distributeModel"), //"分配模式",
                width: 220,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey2",
                    isMul: false,
                    isShowLabel: false,
                    lookuptype: "VE0016",
                    codeField: "distributeMode",
                    textField: "distributeModeName",
                    clickEvent: () => null,
                    component: () => import("@/components/org/LookupValue")
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
        carConfigId: "",
        distributeMode: ""
      }
    };
  },

  methods: {
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要保存的分配模式数据",
          type: "warning",
          duration: 2000
        });
        return;
      }
      var saveObjList = [];
      for (var index in selectData) {
        var saveObj = {
          carBrandCode: selectData[index].carBrandCode,
          carConfigId: selectData[index].carConfigId,
          carconfigDismodeId: selectData[index].carconfigDismodeId,
          distributeMode: selectData[index].distributeMode,
          updateControlId: selectData[index].updateControlId
        };
        saveObjList.push(saveObj);
      }
      const queryObj = {
        // 保存mutation
        type: "mutation",
        typeParam: "($dataInfo:[InputVeDbCarconfigDismodeExt])",
        // api配置
        apiConfig: veApis.veDbCarconfigDismodeMutationSave,
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
        } else {
          saveState = false;
          msg = response.data[queryObj.apiConfig.ServiceCode].msg;
          that.$message({
            message: msg,
            type: "warning",
            duration: 2000
          });
        }
        that.queryTable(1);
      });
    }
  }
};
</script>
