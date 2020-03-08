<!--
*  -新增、修改弹窗
* xulfan
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
        <el-row :gutter="26">
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
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
            :dateType="comp.dateType"
            :format="comp.dateFormat"
            :isMul="false"
          ></component>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
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
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save1(),
          text: this.$t("sys.button.save") /**确认 */
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /**重置 */
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel") /**取消 */
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.carBrandCn") /*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isRequire: true,
          isMust: true,
          parentFileds: "disabled:carSeriesId-carBrandCode",
          disabled: null
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.carSeriesCode") /*车系编码*/,
          codeField: "carSeriesCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true,
          parentFileds: "disabled:carSeriesId-carSeriesCode",
          disabled: null
        },
        {
          compKey: "compKey12",
          labelName: this.$t("org.label.carSeriseID") /*车系Id*/,
          codeField: "carSeriesId",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          // isRequire: true,
          isMust: false,
          parentFileds: "disabled:carSeriesId-carSeriesId",
          disabled: null
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.carSeriesCn") /*车系名称*/,
          codeField: "carSeriesCn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.carSeriesEn") /*车系英文名称*/,
          codeField: "carSeriesEn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("ve.label.sapCarseriesCode") /**SAP车系编码*/,
          codeField: "sapCarseriesCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t("ve.label.sCarseriesCode") /**售后车系编码 */,
          codeField: "sCarseriesCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: this.$t("ve.label.sCarseriesName") /**售后车系名称 */,
          codeField: "sCarseriesDesc",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: this.$t("ve.label.beginDate") /**投产日期 */,
          codeField: "beginDate",
          component: () =>
            import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          // dateOptionsType: "0",
          dateType: "datetime",
          dateFormat: 'yyyy-MM-dd HH:mm:ss',
          // isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: this.$t("ve.label.endDate") /**停产日期 */,
          codeField: "endDate",
          component: () =>
            import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateFormat: 'yyyy-MM-dd HH:mm:ss',
          // dateOptionsType: "0",
          dateType: "datetime",
          // isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: this.$t("org.label.isEnable"),
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        // {
        //   compKey: "compKey11",
        //   labelName: this.$t("org.label.updateControllId"),
        //   codeField: "updateControllId",
        //   isRequire: true,
        //   component: () => import("@/components/org/commonInput"),
        //   type: "inputText",
        //   isMust: false
        // }
      ],
      // 标题
      textMap: {
        edit: this.$t("ve.label.veCarSeriesQryEdit") /**修改车系信息 */,
        add: this.$t("ve.label.veCarSeriesQryAdd") /**添加车系信息 */
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        carSeriesCode: "",
        carSeriesId: "",
        carSeriesCn: "",
        carSeriesEn: "",
        sapCarseriesCode: "",
        sCarseriesCode: "",
        sCarseriesDesc: "",
        beginDate: "",
        endDate: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save1() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        const that = this;

        const saveObj = {
          carBrandCode: this.formField.carBrandCode,
          carSeriesCode: this.formField.carSeriesCode,
          carSeriesCn: this.formField.carSeriesCn,
          carSeriesEn: this.formField.carSeriesEn,
          sapCarseriesCode: this.formField.sapCarseriesCode,
          sCarseriesCode: this.formField.sCarseriesCode,
          sCarseriesDesc: this.formField.sCarseriesDesc,
          isEnable: this.formField.isEnable,
          beginDate: this.formField.beginDate,
          endDate: this.formField.endDate
        };
        // if (!this.isAdd()) {
        //   if (this.formField.beginDate == "") {
        //     saveObj.beginDate = "";
        //   } else if (this.formField.beginDate.length === 10) {
        //     saveObj.beginDate = this.formField.beginDate + " 00:00:00";
        //   } else {
        //     saveObj.beginDate = this.formField.beginDate;
        //   }
        // }
        // if (!this.isAdd()) {
        //   if (this.formField.endDate == "") {
        //     saveObj.endDate = "";
        //   } else if (this.formField.endDate.length === 10) {
        //     saveObj.endDate = this.formField.endDate + " 00:00:00";
        //   } else {
        //     saveObj.endDate = this.formField.endDate;
        //   }
        // }

        if (!this.isAdd()) {
          saveObj.updateControlId = this.formField.updateControlId;
          saveObj.carSeriesId = this.formField.carSeriesId;
        }
        const queryObj = {
          // 保存mutation
          type: "mutation",
          // 保存API配置对象
          apiConfig: orgApis.mdmVeCarSeriesMutationSave,
          // 条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: saveObj
          }
        };
        // 转换了中台请求格式数据
        var paramD = this.$getParams(queryObj);
        // 调用中台API方法（可复用）
        this.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            // 保存成功
            this.sendCode("1");
            this.$message({
              message: "保存成功",
              type: "success",
              uration: 2000
            });
          } else {
            // 保存失败
            // this.sendCode('0')
            this.$message({
              message:
                "保存失败：" +
                response.data[queryObj.apiConfig.ServiceCode].msg,
              type: "warn",
              uration: 2000
            });
          }
        });
      }
    }
  }
};
</script>
