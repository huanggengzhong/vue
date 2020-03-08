<!--
* description: 扣款时限设置
* author:
* createdDate: 2019-09-23
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
      :dynamicIsColumnDrop="true"
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
  name: "orgfundTimeSetting",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  created() {},
  mounted() {},
  data() {
    return {
      beforeRouteEnter(to, from, next) {
        CacheConfig.initData(to.path, function() {
          next();
        });
      },
      // 网格查询API配置对象
      apiConfig: veApis.veDeductTimeLimitQry,
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
          compKey: "btnKey7",
          type: "",
          size: "small",
          clickEvent: () => this.setParam(),
          text: this.$t("ve.label.paramSet")
        },//参数设置
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.synchronyAll(),
          text: this.$t("ve.label.synchronyAll")
        },//全部同步
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.synchrony("deductDay"),
          text: this.$t("ve.label.synchronization")
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
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.exportExcel(),
          text: this.$t("sys.button.export")
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        // 联动
        {
          compKey: "compKey2",
          labelName: "车系",
          parentFileds: "carBrandCode-carBrandCode",
          codeField: "carSeriesId",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "资金类型",
          codeField: "purcashTypeId",
          component: () => import("@/components/ve/PurcashType"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "carBrandCn",
          label: "品牌",
          width: null,
          align: "center"
        },
        {
          prop: "carSeriesCode",
          label: "车系",
          width: null,
          align: "center"
        },
        {
          prop: "purcashTypeName",
          label: "资金类型",
          width: null,
          align: "center"
        },
        {
          prop: "deductDay",
          label: "周期（天）+",
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              codeField: "deductDay",
              clickEvent: () => null,
              component: () => import("@/components/org/commonInput")
            }
          ]
        },
        {
          prop: "carBrandCode",
          label: "品牌ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "carSeriesId",
          label: "车系ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "purcashTypeId",
          label: "资金类型ID",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "updateControlId",
          label: this.$t("org.label.updateControlId"), //并发控制Id
          width: null,
          align: "center",
          hidden: true
        }
      ],
      tableHeight: 310,
      //表单查询数据
      formField: {
        carBrandCode: "",
        carSeriesId: "",
        purcashTypeId: ""
      }
    };
  },
  methods: {
    save() {
      const that = this.$refs.multipleTable;
      let saveState = true;
      let saveCount = 0;
      let msg = "";
      const selectData = that.$refs.multipleTable.selection;
      if (selectData.length < 1) {
        that.$message({
          message: "请选择需要保存的订单",
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
          apiConfig: veApis.vedeductTimeLimitM,
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: "",
              carSEries: "",
              purcashType: ""
            }
          }
        };
        // 转换了中台请求格式数据
        var paramD = this.$getParams(queryObj);
        // 调用中台API方法（可复用）
        // debugger
        this.$requestGraphQL(paramD).then(response => {
          if (response.data.vedeductTimeLimitMsg.result === "1") {
            // 保存成功
            this.$message({
              message: "保存成功",
              type: "success",
              uration: 2000
            });
          } else {
            // 保存失败
            // this.sendCode('0')
            this.$message({
              message: "保存失败" + "请选择需要保存的订单",
              type: "warn",
              uration: 2000
            });
          }
          this.queryTable(1);
        });
      }
    },
    setParam() {
      this.showEdit();
    },
    synchronyAll() {
      const that = this;
      if (that.$utils.isEmpty(that.formField.CarBrandcode)) {
        that.$message({
          message: "全部同步成功",
          type: "success",
          duration: 2000
        });
        return;
      }
      //全部同步表单
      this.synchronyAllForm();
    }
  }
};
</script>
