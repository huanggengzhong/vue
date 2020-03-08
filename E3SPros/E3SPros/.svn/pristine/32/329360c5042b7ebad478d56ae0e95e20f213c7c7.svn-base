<!--
* description: 储区维护-新增、修改弹窗
* author: luojx
* createdDate: 2019-08-04
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            :text="formField[comp.textField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veStockAreaSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") /*保存*/
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //重置
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode("0"),
          text: this.$t("sys.button.cancel") //取消
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // {
        //   compKey: "compKey1",
        //   labelName: this.$t("ve.label.WarnHomeName") /*仓库*/,
        //   isRequire: true,
        //   codeField: "carHouseCode",
        //   textField: "carHouseName",
        //   isMul: false,
        //   component: () =>
        //     import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
        //   type: "propus",
        //   isMust: true
        // },
        {
          compKey: "compKey1",
          labelName:  this.$t('org.label.warnHome'),
          codeField: "carStockHouseId",
          textField:"carHouseName",
          isRequire: true,
          component: () =>
            import("@/components/ve/wareHouseMulti/wareHouseMulti"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("ve.label.CarAreaName") /*储区名称*/,
          codeField: "carAreaName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.Manger") /*管理人*/,
          codeField: "carAreaManager",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("ve.label.situation") /*状态*/,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("ve.label.remark") /*备注*/,
          codeField: "remark",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改储区信息",
        add: "添加储区信息"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carStockAreaId: "",
        carAreaCode:"",
        carHouseName: "",
        carHouseCode: "",
        carStockHouseId:"",
        carAreaName: "",
        carAreaManager: "",
        isEnable: "",
        remark: "",
        updateControlId: "",
        dlrId:"1",
        carStockHouseId:""
      },
      wareHouseInfo: []
    };
  },
  created(){
    this.formField.carAreaCode = this.$utils.guid();
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    //查询仓库信息
    fetchData() {
      let obj = {};
      obj.carBrandCode = this.$store.getters.orgInfo.BRAND_CODE || "1";
      const queryObj = {
        // api配置
        apiConfig: veApis.veDbCarStockHouseQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: [
              "carStockHouseId",
              "dlrId",
              "carHouseName",
              "carHouseCode",
              "carStoreClass"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 100,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: obj
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）

      this.$requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        ) {
          this.wareHouseInfo =
            response.data[queryObj.apiConfig.ServiceCode].rows;
        }
      });
    },
    getCarStockHouseIdName() {
      for (let i of this.wareHouseInfo) {
        if (this.formField.carStockHouseId === i.carStockHouseId) {
          this.formField.carHouseCode = i.carHouseCode;
          this.formField.dlrId = i.dlrId;
          this.formField.carHouseName = i.carHouseName;
          this.saveForm();
          return;
        }
      }
    },
    //保存
    save() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        debugger
        if (this.popupsState === "add") {
          this.getCarStockHouseIdName();
        } else {
          this.saveForm();
        }
      }
    }
  }
};
</script>
