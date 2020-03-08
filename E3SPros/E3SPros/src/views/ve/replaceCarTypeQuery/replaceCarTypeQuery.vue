<!--
* 替代车型设置
* xulfan
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
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import Edit from "./edit";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "replaceCarTypeQuery",
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
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
      apiConfig: veApis.veDbReplaceCarConfigQueryFindAll,
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
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey3",
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
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn"), // 品牌
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              // {
              //   compKey: "compKey2",
              //   labelName: this.$t("ve.label.isSet"), // 车型分类
              //   lookuptype: "VE0621",
              //   codeField: "isSet",
              //   component: () => import("@/components/org/LookupValue"),
              //   type: "dropdownList",
              //   isMust: true
              // },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carConfig"), // 车型配置
                codeField: "carConfigId",
                parentFileds: "carBrandCode",
                //修改
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true,
                isMul: false
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.isEnable"), // 是否已设置
                codeField: "isEnable",
                //修改
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
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
                prop: "carBrandCode",
                // label: this.$t("org.label.carBrand") /*品牌编码*/,
                label: "品牌" /*品牌*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "carBrandCn",
                // label: this.$t("org.label.carBrand") /*品牌*/,
                label: "品牌" /*品牌*/,
                width: 120,
                align: "center"
              },
              {
                prop: "carSeriesCn",
                label: this.$t("org.label.carSerise") /*车系*/,
                width: 100,
                align: "center"
              },
              {
                prop: "smallCarTypeCode",
                label: this.$t("org.label.carType") /*车型*/,
                width: 155,
                align: "center"
              },
              {
                prop: "carConfigId",
                label: this.$t("org.label.carConfig") /*车型配置Id*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carConfigCode") /*车型配置编码*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carConfig") /*车型配置*/,
                width: 160,
                align: "center"
              },
              {
                prop: "replaceLevel",
                label: "替代顺序号" /*替代顺序号*/,
                width: 120,
                align: "center",
                hidden: true
              },
              {
                prop: "rpCarTypeCode1",
                // textField: "rpCarTypeCode1",
                label: this.$t("ve.label.rpCarCn1") /*替代车型一*/,
                width: 140,
                align: "center"
                // isComponent: true,
                // comps: [
                //   {
                //     compKey: "propKey0",
                //     // textField: "rpCarTypeCode1",
                //     isMul: false,
                //     isShowLabel: false,
                //     codeField: "rpCarTypeCode1",
                //     rowFileds: "showText-rpCarTypeCode1",
                //     clickEvent: () => null,
                //     component: () => import("@/components/org/label")
                //   }
                // ]
              },
              {
                prop: "rpCarConfigCode1",
                label: this.$t("ve.label.rpCarConfigCn1") + "一+" /*替代车型配置ID*/,
                expLabel: this.$t("ve.label.rpCarConfigCn1")  + "一",
                width: 180,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isMul: false,
                    isShowLabel: false,
                    codeField: "rpCarConfigId1",
                    textField: "rpCarConfigCode1",
                    rowFileds: "carBrandCode",
                    otherField:
                      "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode1",
                    clickEvent: () => null,
                    component: () => import("@/components/org/carTypeConfig")
                  }
                ]
              },
              {
                prop: "rpCarTypeCode2",
                label: this.$t("ve.label.rpCarCn2") /*替代车型二*/,
                width: 140,
                align: "center"
                // isComponent: true,
                // comps: [
                //   {
                //     compKey: "propKey2",
                //     textField: "rpCarTypeCode2",
                //     isMul: false,
                //     isShowLabel: false,
                //     codeField: "rpCarTypeCode2",
                //     rowFileds: "showText-rpCarTypeCode2",
                //     clickEvent: () => null,
                //     component: () => import("@/components/org/label")
                //   }
                // ]
              },
              {
                prop: "rpCarConfigCode2",
                label:
                  this.$t("ve.label.rpCarConfigCn2") + "二+" /*替代车型配置*/,
                expLabel: this.$t("ve.label.rpCarConfigCn2")  + "二",
                width: 180,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey3",
                    // textField: "rpCarConfigId2",
                    isMul: false,
                    isShowLabel: false,
                    codeField: "rpCarConfigId2",
                    textField: "rpCarConfigCode2",
                    rowFileds: "carBrandCode",
                    otherField:
                      "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode2",
                    clickEvent: () => null,
                    component: () => import("@/components/org/carTypeConfig")
                  }
                ]
              },

              {
                prop: "rpCarTypeCode3",
                label: this.$t("ve.label.rpCarCn3") /*替代车型三*/,
                width: 140,
                align: "center"
                // isComponent: true,
                // comps: [
                //   {
                //     compKey: "propKey4",
                //     // textField: "rpCarTypeCode3",
                //     isMul: false,
                //     isShowLabel: false,
                //     codeField: "rpCarTypeCode3",
                //     rowFileds: "showText-rpCarTypeCode3",
                //     clickEvent: () => null,
                //     component: () => import("@/components/org/label")
                //   }
                // ]
              },
              {
                prop: "rpCarConfigCode3",
                label:
                  this.$t("ve.label.rpCarConfigCn3") + "三+" /*替代车型配置*/,
                expLabel: this.$t("ve.label.rpCarConfigCn3")  + "三",
                width: 180,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey5",
                    isMul: false,
                    isShowLabel: false,
                    codeField: "rpCarConfigId3",
                    rowFileds: "carBrandCode",
                    textField: "rpCarConfigCode3",
                    otherField:
                      "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode3",
                    clickEvent: () => null,
                    component: () => import("@/components/org/carTypeConfig")
                  }
                ]
              },

              {
                prop: "rpCarTypeCode4",
                label: this.$t("ve.label.rpCarCn4") /*替代车型三*/,
                width: 140,
                align: "center"
                // isComponent: true,
                // comps: [
                //   {
                //     compKey: "propKey6",
                //     // textField: "rpCarTypeCode4",
                //     isMul: false,
                //     isShowLabel: false,
                //     codeField: "rpCarTypeCode4",
                //     rowFileds: "showText-rpCarTypeCode4",
                //     clickEvent: () => null,
                //     component: () => import("@/components/org/label")
                //   }
                // ]
              },
              {
                prop: "rpCarConfigCode4",
                label:
                  this.$t("ve.label.rpCarConfigCn4") + "四+" /*替代车型配置*/,
                expLabel: this.$t("ve.label.rpCarConfigCn4")  + "四",
                width: 180,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey7",
                    isMul: false,
                    isShowLabel: false,
                    codeField: "rpCarConfigId4",
                    rowFileds: "carBrandCode",
                    textField: "rpCarConfigCode4",
                    otherField:
                      "mdmSmallCarTypeExtend.smallCarTypeCode-rpCarTypeCode4",
                    clickEvent: () => null,
                    component: () => import("@/components/org/carTypeConfig")
                  }
                ]
              },

              {
                prop: "updateControlId",
                label: "并发字段",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "replaceCarConfigId",
                label: "替换车型配置设置ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "rpCarConfigId1",
                label: "替代车型1Id",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "rpCarConfigId2",
                label: "替代车型2Id",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "rpCarConfigId3",
                label: "替代车型3Id",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "rpCarConfigId4",
                label: "替代车型4Id",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //，

      formField: {
        carBrandCode: "",
        // isSet: "",
        isEnable: "",
        //修改
        carConfigId: ""
      }
    };
  },
  methods: {
    save() {
      const that = this.$refs.multipleTable;
      const selectData = that.$refs.multipleTable.selection;
      // debugger;
      for (var k in selectData) {
        const saveDate = [];
        const rep = 1;
        for (var y = 1; y <= 4; y++) {
          if (
            selectData[k]["rpCarTypeCode" + y] != null &&
            selectData[k]["rpCarTypeCode" + y] != ""
          ) {
            const dataForm = {};
            dataForm.carConfigId = selectData[k].carConfigId;
            dataForm.rpCarConfigId = selectData[k]["rpCarConfigId" + y];
            dataForm.replaceLevel = rep;
            dataForm.carBrandCode = "1";
            dataForm.carConfigCode = selectData[k]["carConfigCode"];
            dataForm.isEnable = "1";
            dataForm.updateControlId = "";
            rep = rep + 1;
            saveDate.push(dataForm);
          }
        }
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veDbReplaceCarConfigMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: saveDate
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        var num = 1;
        that.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            that.$message({
              message: this.$t("sys.tips.esTip5") /*保存成功*/,
              type: "success",
              duration: 2000
            });
            that.queryTable(this.$refs.multipleTable.listQuery.pageIndex || 1);
          }
        });
      }
    }
  }
};
</script>
