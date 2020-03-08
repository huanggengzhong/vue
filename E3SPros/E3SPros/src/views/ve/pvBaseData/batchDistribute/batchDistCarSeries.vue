<!--
* description: 批次分配车系设置
* createdDate: 2019-07-31
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
      :dynamicIsInitTable="true"
      :dynamicIsColumnDrop="true"
    />

     <openSetting
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></openSetting>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import openSetting from './openSetting'
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "batchDistCarSeries",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    openSetting
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
      apiConfig: veApis.veDbBatchBaseSeriesQueryFindAll,
      //弹框
      orgManageVisible: false,
      //开关保存数据
      onOffSavaData: { purcashTypeId: "" },
      //开关标签
      radio: "1",

      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        }, //查询

        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony("dlrId,dlrShortName"),
          text: this.$t("sys.button.sync")
        }, //同步
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        }, //保存
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.showEdit("edit"),
          text: this.$t("sys.button.switchSet")
        }
      ], //开关设置
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrandCn"),
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                isRequire: true,
                type: "dropdownList",
                isMust: true
              }, //品牌
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carSerise"),
                codeField: "carSeriesId",
                parentFileds: "carBrandCode-carBrandCode",
                component: () => import("@/components/org/CarCode"),
                type: "dropdownList",
                isMust: true
              }//车系
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "carBrandCn",
                label: this.$t("org.label.carBrandCn"),
                width: null,
                align: "center"
              }, //品牌名称
              {
                prop: "carSeriesCn",
                label: this.$t("org.label.carSerise"),
                width: null,
                align: "center"
              }, //车系

              {
                prop: "carBrandCode",
                label: "品牌ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "dlrShortName",
                label: "经销商名称",
                width: 0,
                align: "center",
                hidden: true
              },
              {
                prop: "dlrId",
                label: this.$t("org.label.dlrName")+"+",//"经销商+",
                width: null,
                align: "center",
                width: 250,
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
                prop: "carSeriesId",
                label: "批次分配车系ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "baseSeriesId",
                label: "车系ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "dlrId",
                label: "经销商ID",
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
              },
              {
                prop: "batchSeriesId",
                label: "主键ID",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "updateControlId",
                label: "主键ID",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        carSeriesId: ""
      }
    };
  },
  methods: {
    //开关设置
    onOffSet() {
      this.orgManageVisible = true;
      this.radio = "1";
    },
    onOffChange(val) {
      this.onOffSavaData.purcashTypeId = val;
    },
    // 取消
    cancle() {
      this.orgManageVisible = false;
    },
    //保存
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: this.$t("org.message.moreOneData") /*请至少选择一条数据*/,
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
          apiConfig: veApis.batchBaseSeriesMutationSave,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: "1",
              dlrId: selectData[k].dlrId,
              carSeriesId: selectData[k].carSeriesId,
              updateControlId: selectData[k].updateControlId
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        that.$requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
            response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            this.orgManageVisible = false;
            this.$message({
              message: this.$t("sys.tips.esTip5") /*保存成功*/,
              type: "success",
              duration: 1000
            });
            that.queryTable(1);
          }
        });
      }
    },
    //保存开关
    saveOrg() {
      const that = this.$refs.multipleTable;

      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.purOrderFreezeOnOffMutaionUpdate,
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.onOffSavaData
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      that.$requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          this.orgManageVisible = false;
          this.$message({
            message: this.$t("sys.tips.esTip5") /*保存成功*/,
            type: "success",
            duration: 1000
          });
          that.queryTable(1);
        }
      });
    }
  }
};
</script>
<style scoped>
.onOffPart {
  text-align: left;
}