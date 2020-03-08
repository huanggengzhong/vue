<!--
* description: 车型维护-新增、修改弹窗
* author: zhhx
* createdDate: 2019-08-08
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
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :parentFileds="comp.parentFileds"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>

      <component
        v-for="comp in tableComponents.filter(o => o.type === 'popupsInput')"
        :key="comp.popups.key"
        :codeField="comp.codeField"
        :popupsVisible="comp.popups.state"
        :comType="comp.popups.type"
        :is="comp.popups.component"
        :popupsKey="comp.compKey"
        :code="formField[comp.codeField]"
        @changeCode="getComponentCode"
      ></component>

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
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { throws } from 'assert';
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmSmallCarTypeMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("org.label.carBrand"),
          codeField: "carBrandCode",
          isRequire: true,
          isMul: false,
          parentFileds: "disabled:carSeriesId-carBrandCode",
          disabled: null,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.carSeriesId"),
          codeField: "carSeriesId",
          parentFileds: "value:carBrandCode,disabled:carSeriesId-carSeriesId",
          disabled: null,
          isRequire: true,
          isMul: false,
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.carTypeCode"),
          isRequire: true,
          parentFileds: "value:carBrandCode,disabled:smallCarTypeCode-smallCarTypeCode",
          disabled: null,
          codeField: "smallCarTypeCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.carTypeName"),
          isRequire: true,
          codeField: "smallCarTypeCn",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },

        {
          compKey: "compKey5",
          labelName: this.$t("org.label.smallCarTypeEn"),
          codeField: "smallCarTypeEn",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t("org.label.isEnable"),
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.carTypeMatinTextMap.edit"),
        add: this.$t("org.label.carTypeMatinTextMap.add")
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        smallCarTypeId: "",
        stdCarId: "",
        smallCarTypeCode: "",
        smallCarTypeCn: "",
        smallCarTypeEn: "",
        carBrandCode: "",
        isEnable: "",
        carSeriesId: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
        this.$utils.validataMoth(this, "validpopup");
       if (this.valid) {
        //保存表单
        this.saveForm();
      }
    }
  }
};
</script>
