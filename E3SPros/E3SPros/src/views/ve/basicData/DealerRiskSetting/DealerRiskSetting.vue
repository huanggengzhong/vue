<!--
* description: 经销商风险店设置
* author: yangsq
* createdDate: 2019-09-20
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
      :dynamicIsShowSelect="false"
      :dynamicIsShowMoreBtn="false"
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { CacheConfig } from "@/cache/configCache/index";
import Edit from "./edit";
export default {
  name: "veDealerRiskSetting",
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
      apiConfig: veApis.veDbDlrRiskSetQueryFindAll,
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
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add"), //新增
          name: "add",
          position: "left"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export"), //导出
          name: "export",
          position: "left"
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey1",
                labelName: this.$t("ve.label.carBrandCode"), //品牌
                codeField: "carBrandCode",
                isMul: false,
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isRequire: true,
                isMust: true
              },
              //  {
              //   compKey: "compKey2",
              //   labelName: this.$t("org.label.dlrShortName"),//经销商简称
              //   codeField: "dlrId",
              //   component: () => import("@/components/org/orgDlr"),
              //   type: "propus",
              //   isMul:false,
              //   isMust: true
              // },
              {
                compKey: "compKey3",
                labelName: this.$t("ve.label.RiskIdentification"), //风险标识
                codeField: "riskFlag",
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMul: false,
                isMust: true
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "controlBtn",
                label: this.$t("ve.label.operating"), //操作
                codeField: "controlBtn",
                width: null,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: this.$t("org.label.edit"), //编辑
                    align: "center",
                    codeField: "editControlBtn",
                    clickEvent: () => this.edit(),
                    component: () => import("@/components/org/linkButton")
                  }
                ]
              },
              {
                prop: "carBrandCode",
                label: this.$t("ve.label.carBrandCode"), //品牌
                codeField: "carBrandCode",
                width: null,
                hidden: true,
                align: "center"
              },
              {
                prop: "carBrandCn",
                label: this.$t("ve.label.carBrandCode"), //品牌
                codeField: "carBrandCode",
                width: null,
                align: "center"
              },
              // {
              //   prop: "dlrShortName",
              //   label: this.$t("org.label.dlrShortName"),//经销商名称
              //   width: null,
              //   align: "center",
              // },
              {
                prop: "dlrId",
                label: this.$t("org.label.dlrShortName"), //经销商ID
                width: null,
                align: "center",
                hidden: false
              },
              {
                prop: "dlrRiskSetId",
                label: this.$t("org.label.dlrShortName"), //主键Id
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "riskFlag",
                label: this.$t("ve.label.RiskIdentification"), //风险标识
                width: null,
                hidden: true,
                align: "center"
              },
              {
                prop: "isEnable",
                label: this.$t("ve.label.RiskIdentification"), //风险标识
                width: null,
                align: "center"
              },
              {
                prop: "limitUserId",
                label: this.$t("ve.label.RestrictingPeople"), //限制人
                width: null,
                hidden: false,
                align: "center"
              },
              {
                prop: "limitUserName",
                label: this.$t("ve.label.RestrictingPeople"), //限制人
                width: null,
                align: "center"
              },
              {
                prop: "limitDate",
                label: this.$t("ve.label.RestrictingDate"), //限制时间
                width: null,
                align: "center",
                isComponent: true
              },
              {
                prop: "cancelLimitUserId",
                label: this.$t("ve.label.RemovalRestrictor"), //解除限制人Id
                width: null,
                hidden: false,
                align: "center"
              },
              {
                prop: "cancelLimitUserName",
                label: this.$t("ve.label.RemovalRestrictor"), //解除限制人
                width: null,
                align: "center"
              },
              {
                prop: "cancelLimitDate",
                label: this.$t("ve.label.RemovalRestrictorDate"), //解除限制时间
                width: null,
                align: "center"
              },
              {
                prop: "updateControlId",
                label: this.$t("org.label.isEnable") /*并发控制Id*/,
                width: null,
                hidden: true,
                align: "center"
              }
            ],
      formField: {
        carBrandCode: "",
        dlrRiskSetId: "",
        dlrId: "",
        riskFlag: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //新增
    save() {
      const that = this;
      //获取选择行的值    this.$refs.multipleTable获取网格  需要在网格添加ref="multipleTable"
      let selectData = that.$refs.multipleTable.selection;
      var selectIndexSort = [];
      for (var k in selectData) {
        selectIndexSort.push(selectData[k].index);
      }
      //选择行重新排序
      selectIndexSort.sort(function(a, b) {
        return a > b ? 1 : -1;
      });
      for (var i = 1; i < selectIndexSort.length; i++) {
        //将选择第一行的某个字段数据赋给其他选择行, 可以多个
        that.list[selectIndexSort[i]].carTypeConfig =
          that.list[selectIndexSort[0]].carTypeConfig;
        that.list[selectIndexSort[i]].editDate =
          that.list[selectIndexSort[0]].editDate;
        that.list[selectIndexSort[i]].isEnable = String(
          that.list[selectIndexSort[0]].isEnable
        );
        that.list[selectIndexSort[i]].carColor = String(
          that.list[selectIndexSort[0]].carColor
        );
      }
    },
    save() {
      const that = this;

      //保存
      this.saveForm();
    }
  }
};
</script>
