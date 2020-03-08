<!--
* description: 不参与车辆分配的时间段设置
* author: wangcx
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
      :dynamicIsShowSelect="true"
      :dynamicIsShowMoreBtn="false"
    />
    <el-dialog
      title="设置节点"
      :visible.sync="dialogVisible"
      width="1000px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
    <!-- 标题 -->
      <div class="filter-container filter-title">{{$t('org.label.noPartTimeNode')}}</div>
      <!-- 设置区-->
      <div class="filter-container purCheckbox">
        <el-checkbox
          class="edialog-checkbox"
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
        >{{$t('org.label.selectAll')}}</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox
            class="edialog-checkbox"
            v-for="item in cities"
            :label="item"
            :key="item"
            :value="item"
          ></el-checkbox>
        </el-checkbox-group>
      </div>
      <el-button class="el-button el-button--primary el-button--small" @click="closeDia">保存</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/oneTable";
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins],
  name: "timeSetting",
  components: {
    OneTableTemplate
  },

  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.timePeriodSettingsInNoVehicleAssignment,
      // 保存
      dialogVisible: false,
      hisFormField: {
        dlrId: "",
        baseStockCycle: "",
        carBrandCode: ""
      },
      isIndeterminate: true,
      checkAll: false,
      cities: [],
      checkedCities: [],
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey8",
          type: "",
          size: "small",
          clickEvent: () => this.showDialog(),
          text: this.$t('org.label.setNode')//设置节点
        },
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
          clickEvent: () =>
            this.synchrony("noPartEndTime,noPartStartTime,statues"),
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
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {
          compKey: "compKey1",
          labelName: this.$t('org.label.carBrandCn'),//品牌
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t('org.label.carSerise'),//车系
          codeField: "CarCode",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.carType"), //车型
          codeField: "carTypeConfig",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t('org.label.carHouseType'),//库存类型
          lookuptype: "VE0005",
          codeField: "stockType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t('org.label.isEnable'),//是否启用
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "carBrand",
          label: this.$t("org.label.carBrandCn"), //品牌
          width: null,
          align: "center"
        },
        {
          prop: "carSeries",
          label: this.$t("org.label.carSerise"), //车系
          width: null,
          align: "center"
        },
        {
          prop: "carType",
          label: this.$t("org.label.carType"), //车型
          width: null,
          align: "center"
        },
        {
          prop: "carTypeName",
          label: this.$t("org.label.carConfig"), //车型配置
          width: 140,
          align: "center"
        },
        {
          prop: "storeType",
          label: this.$t('org.label.carHouseType'),//库存类型
          width: null,
          align: "center"
        },
        {
          prop: "statues",
          label: this.$t('org.label.isEnable'),//是否启用
          width: null,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey3",
              isShowLabel: false,
              codeField: "statues",
              clickEvent: () => null,

              component: () => import("@/components/org/isEnable/isEnable")
            }
          ]
        },
        {
          prop: "noPartStartTime",
          label: this.$t('org.label.noPartStartTime'), //不参与分配设置开始时间
          width: 200,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              codeField: "noPartStartTime",
              clickEvent: () => null,

              component: () => import("@/components/org/datePicker/datePicker")
            }
          ]
        },
        {
          prop: "noPartEndTime",
          label:this.$t('org.label.noPartEndTime'), //不参与分配设置结束时间
          width: 200,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey2",
              isShowLabel: false,
              codeField: "noPartEndTime",
              clickEvent: () => null,
              component: () => import("@/components/org/datePicker/datePicker")
            }
          ]
        }
      ],
      //表单查询数据（查询条件）
      formField: {
        carBrandCode: "1",
        isEnable: "",
        CarCode: "",
        carTypeConfig: "",
        stockType: ""
      }
    };
  },
  created() {
    this.queryCheckbox();
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    // 保存
    save() {
      const that = this.$refs.multipleTable;
      let selectData = that.$refs.multipleTable.selection;
      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: veApis.veBaseCycleStockSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: selectData
        }
      };

      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
          // that.formQuery(1);
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
          that.queryTable();
        }
      });
    },
    queryCheckbox() {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: veApis.veDbOrderTypeBrandQueryFindAll,
        // 需要调用的API服务配置
        // 表格中台返回网格的字段
        apiQueryRow: [
          "groupCode",
          "carBrandName",
          "carBrandCode",
          "orderTypeId",
          "orderTypeName",
          "orderNo",
          "isOnlineStatus",
          "isBatchStatus",
          "isEnable"
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // pageSize: that.listQuery.pageSize,
          // pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.listQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          for (
            var i = 0;
            i < response.data[queryObj.apiConfig.ServiceCode].rows.length;
            i++
          ) {
            that.cities.push(
              response.data[queryObj.apiConfig.ServiceCode].rows[i]
                .orderTypeName
            );
          }
          that.listLoading = false;
        }
      });
    },
    handleCheckAllChange(val) {
      debugger;
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      debugger;
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    closeDia() {
      this.save();
      this.dialogVisible = false;
    }
  }
};
</script>
<style scoped>
/deep/ .filter-params .table-col .el-col {
  margin-bottom: 5px;
}
/deep/ .edialog-checkbox {
  width: 20%;
  padding: 10px 0;
}
</style>
