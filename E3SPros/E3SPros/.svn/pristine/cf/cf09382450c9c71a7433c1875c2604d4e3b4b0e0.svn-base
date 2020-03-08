/**
* description: 整车 > 主机厂基础数据 > 框架规则 > 采购单类型品牌设置
* author: liyanm
* createdDate: 2019-07-23
*/
/**
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
      :dynamicIsColumnDrop="true"
    />
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
import { isNumber } from "util";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  name: "vepurchasingOrderType",
  // 组件混入对象
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
      apiConfig: veApis.veDbOrderTypeBrandQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          isSort: true,
          clickEvent: () => this.synchrony("carOutPriortiy,orderNo,isEnable,"),
          text: "同步"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: "导出"
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // {
              //   compKey: "compKey1",
              //   labelName: "品牌名称",
              //   codeField: "carBrandCode",
              //   component: () => import("@/components/org/commonInput"),
              //   type: "inputText",
              //   isMust: true
              // },
              {
                compKey: "compKey1",
                labelName: "品牌",
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "采购单类型",
                codeField: "orderTypeId",
                parentFileds: "carBrandCode-carBrandCode",
                lookuptype: "VE0004",
                component: () => import("@/components/org/LookupValue"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: "是否启用",
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
                prop: "carBrandName",
                label: "品牌名称",
                width: null,
                align: "center"
              },
              {
                prop: "orderTypeName",
                label: "采购单类型",
                width: null,
                align: "center"
              },
              {
                prop: "isEnable",
                label: "是否启用",
                width: null,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "isEnable",
                    clickEvent: () => null,
                    component: () =>
                      import("@/components/org/isEnable/isEnable")
                  }
                ]
              },
              {
                prop: "orderNo",
                label: "分配顺序+",
                width: 150,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "orderNo",
                    // lookuptype: "VE0166",
                    clickEvent: () => null,
                    component: () => import("@/components/org/commonInput")
                  }
                ]
              },
              {
                prop: "carOutPriortiy",
                label: "自动出货确认顺序+",
                width: 200,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "carOutPriortiy",
                    // lookuptype: "VE0166",
                    clickEvent: () => null,
                    component: () => import("@/components/org/commonInput")
                  }
                ]
              },
              {
                prop: "isBatchStatus",
                label: "是否参与批次分配",
                width: null,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "isBatchStatus",
                    clickEvent: () => null,
                    component: () =>
                      import("@/components/org/isEnable/isEnable")
                  }
                ]
              },
              {
                prop: "isOnlineStatus",
                label: "是否参与实时分配  ",
                width: null,
                align: "center",
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "isOnlineStatus",
                    clickEvent: () => null,
                    component: () =>
                      import("@/components/org/isEnable/isEnable")
                  }
                ]
              },
              {
                prop: "updateControlId",
                label: "并发控制",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "orderTypeBrandId",
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
              },
              {
                prop: "orderTypeId",
                label: "采购单类型ID",
                width: null,
                align: "center",
                hidden: true
              }
            ],
      //表单查询数据
      formField: {
        carBrandCode: "",
        orderTypeId: "",
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
          message: "请选择需要保存的采购单信息",
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        console.log(selectData);
        if (selectData[k].orderNo === "") {
          that.$message({
            message: "请输入分配顺序",
            type: "warning",
            duration: 2000
          });
          return false;
        }
        if (selectData[k].carOutPriortiy === "") {
          that.$message({
            message: "请输入自动出货确认顺序",
            type: "warning",
            duration: 2000
          });
          return false;
        }
        let obj = {};
        obj = {
          carBrandCode: selectData[k].carBrandCode,
          orderTypeId: selectData[k].orderTypeId,
          isEnable: selectData[k].isEnable,
          orderTypeBrandId: selectData[k].orderTypeBrandId,
          orderNo: selectData[k].orderNo,
          // disOrder: Number(selectData[k].disOrder),
          // caroutOrder: Number(selectData[k].caroutOrder),
          carOutPriortiy: selectData[k].carOutPriortiy,
          isOnlineStatus: selectData[k].isOnlineStatus,
          isBatchStatus: selectData[k].isBatchStatus,
          updateControlId: selectData[k].updateControlId
        };
        let queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.veDbOrderTypeBrandMutationUpdate,
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: obj
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
              message: "保存成功",
              type: "success",
              duration: 2000
            });
            that.queryTable(1);
          }
        });
      }
    }
  }
};
</script>
