<!--
* description: 不参与在线库存分配车型设置
* author: xulfan
* createdDate: 2019-09-19
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
      :dynamicIsShowMoreBtn="false"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
import LangSelect from "@/components/LangSelect";
export default {
  name: "veNoOnlineStockCarTypeSetting",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    LangSelect
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
      apiConfig: veApis.veNoOnlineStockCarTypeSetting,
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
          clickEvent: () => this.sync(),
          text: this.$t("sys.button.sync") //同步
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey4",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") /*保存*/
        },
        {
          compKey: "btnKey5",
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
                parentFileds:'carBrandCode-carBrandCode',
                labelName: this.$t("org.label.carConfig"), //车型配置
                codeField: "carConfigId",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey3",
                // parentFileds:'carBrandCode-carBrandCode|carConfigId-carTypeConfig',
                labelName: this.$t("org.label.carColor"), //车身颜色
                codeField: "carColor",
                component: () => import("@/components/org/carColor"),
                type: "propus",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.isEnableCn"), //状态
                codeField: "isEnable",
                component: () => import("@/components/org/isEnable/isEnable"),
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
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCn"), //品牌
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
                prop: "carTypeCode",
                label: this.$t("org.label.carType"), //车型
                width: null,
                align: "center"
              },
              {
                prop: "carConfigCode",
                label: this.$t("org.label.carConfig"), //车型配置
                width: null,
                align: "center"
              },
              {
                prop: "carColor",
                label: this.$t("org.label.carColor"), //车身颜色
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: this.$t("org.label.isEnableCn"), //状态
                width: null,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "isEnable",
                    clickEvent: "",
                    component: () =>
                      import("@/components/org/isEnable/isEnable")
                  }
                ]
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
        carConfigId: "",
        carColor: "",
        isEnable: ""
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
          apiConfig: veApis.veNoOnlineStockCarTypeSettingSave,
          // 条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCn: selectData[k].carBrandCn,
              carSeriesCn: selectData[k].carSeriesCn,
              carTypeCode: selectData[k].carTypeCode,
              carConfigCode: selectData[k].carConfigCode,
              carColor: selectData[k].carColor,
              isEnable: selectData[k].isEnable,
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
    sync() {
      const that = this;
      this.synchrony('isEnable');
    }
  }
};
</script>
