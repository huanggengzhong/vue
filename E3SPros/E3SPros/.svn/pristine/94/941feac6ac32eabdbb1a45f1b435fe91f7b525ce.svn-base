<!--
* description: 用户小区设置
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
  name: "userVillageSet",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
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
      apiConfig: veApis.userAreaQueryByPage,

      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.synchronyAll(),
          text: this.$t("sys.button.allSync")
        }, //全部同步
        {
          compKey: "btnKey2",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        }, //查询

        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony("smallAreaId,areaName"),
          text: this.$t("sys.button.sync")
        }, //同步
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        }, //保存
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        }, //重置
        {
          compKey: "btnKey8",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export")
        } //导出
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
                labelName: this.$t("org.label.carBrandCn"),
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                isRequire: true,
                type: "dropdownList",
                isMust: true
              }, // 品牌
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.UserName"),
                codeField: "userId",
                textField: "userName",
                component: () => import("@/components/org/userSelect"),
                type: "propus",
                isMust: true
              }, //用户名称
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.smallAreaName"),
                codeField: "smallAreaId",
                textField: "smallAreaName",
                component: () => import("@/components/org/villageChoose"),
                type: "propus",
                isMust: true
              } //小区
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
                width: 150,
                align: "center"
              }, //品牌名称
              {
                prop: "orgName",
                label: this.$t("org.label.orgName"),
                width: 150,
                align: "center"
              }, //所属组织
              {
                prop: "userName",
                label: this.$t("org.label.UserName"),
                width: 150,
                align: "center"
              }, //用户名称
              {
                prop: "loginName",
                label: this.$t("org.label.logInName"),
                width: 150,
                align: "center"
              }, //登录名
              {
                prop: "userType",
                label: this.$t("org.label.UserClass"),
                width: 150,
                align: "center"
              }, //用户类别
              {
                prop: "areaName",
                label: this.$t("org.label.regionName"),
                width: 150,
                align: "center"
              }, //区域
              {
                prop: "smallAreaName",
                label: this.$t("org.label.smallAreaName") + "+", //小区+
                width: null,
                align: "center",
                isComponent: true,
                isMul: true,
                comps: [
                  {
                    compKey: "propKey1",
                    isShowLabel: false,
                    codeField: "carHouseCode",
                    type: "propus",
                    clickEvent: () => null,
                    component: () => import("@/components/org/villageChoose")
                  }
                ]
              },
              {
                prop: "carBrandCode",
                label: "品牌编码",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "empId",
                label: "员工",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "areaId",
                label: "区域Id",
                width: null,
                align: "center",
                hidden: true
              },
              {
                prop: "areaType",
                label: "区域类型",
                width: null,
                align: "center",
                hidden: true
              },
            ],
      //表单查询数据
      formField: {
        empId: "",
        areaId: "",
        carBrandCode: ""
      }
    };
  },
  methods: {
    // // 全部同步
    // synchronyAll() {
    //   const that = this;
    //   if (that.$utils.isEmpty(that.formField.CarBrandcode)) {
    //     that.$message({
    //       message: "全部同步成功",
    //       type: "success",
    //       duration: 2000
    //     });
    //     return;
    //   }
    //   //全部同步表单
    //   this.synchronyAllForm();
    // },
    // 保存
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";

      const selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择可分配仓库数据",
          type: "warning",
          duration: 2000
        });
        return;
      }
      for (var k in selectData) {
        const queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.userAreaMutation,
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              empId: selectData[k].empId,
              areaId: selectData[k].areaId,
              areaType: selectData[k].areaType
            }
          }
        };

        // 转换了中台请求格式数据
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
