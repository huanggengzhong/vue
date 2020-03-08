<!--
* description: 车辆产品价格补贴设置新增
* author: liyanm
* createdDate: 2019-08-06
-->
<template>
  <section class="editsettingPrice">
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
            :text="formField[comp.textField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :format="comp.format"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :parentFileds="comp.parentFileds"
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
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins, valueObjectMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.veBuDlrSubsidyMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.close(),
          text: "取消"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "品牌",
          codeField: "carBrandCode",
          isRequire: true,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          parentFileds: "disabled:carConfigId-carBrandCode",
          disabled: null,
          isMul: false,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "经销商",
          codeField: "dlrId",
          textField: "dlrShortName",
          isRequire: true,
          parentFileds: "value:carBrandCode,disabled:carConfigId-dlrId",
          disabled: null,
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey3",
          labelName: "车型配置",
          codeField: "carConfigId",
          textField: "carConfigCode",
          //parentFileds: "carBrandCode",
          parentFileds: "value:carBrandCode,disabled:carConfigId-carConfigId",
          disabled: null,
          isRequire: true,
          isMul: false,
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "国家补贴",
          codeField: "countrySubsidy",
          isRequire: false,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "地方补贴",
          codeField: "areaSubsidy",
          isRequire: false,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "其他调减",
          codeField: "otherSubsidy",
          isRequire: false,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "有效日期始",
          codeField: "priceValidBeginDate",
          isRequire: true,
          format:"yyyy-MM-dd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "有效日期止",
          codeField: "priceValidEndDate",
          isRequire: true,
          format:"yyyy-MM-dd",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "补贴设置",
        add: "添加补贴设置"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        carConfigId: "",
        carConfigCode:"",
        carConfigCn:"",
		    dlrId: "",
		    dlrShortName:"",
        countrySubsidy: 0,
        areaSubsidy: 0,
        otherSubsidy: 0,
        priceValidBeginDate:"",
        priceValidEndDate:"",
        dlrSubsidyId: '',
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
      //修改/编辑日期统一
      this.formField.priceValidBeginDate = this.formField.priceValidBeginDate.substring(0,11)
      this.formField.priceValidEndDate = this.formField.priceValidEndDate.substring(0,11)
      //保存表单
      var saveObj = {
        carBrandCode: this.formField.carBrandCode,
        carConfigId: this.formField.carConfigId,
        dlrId: this.formField.dlrId || "1",
        dlrSubsidyId:this.formField.dlrSubsidyId,
        countrySubsidy: parseFloat(this.formField.countrySubsidy),
        areaSubsidy: parseFloat(this.formField.areaSubsidy),
        otherSubsidy: parseFloat(this.formField.otherSubsidy),
        priceValidBeginDate: this.formField.priceValidBeginDate + " 00:00:00",
        priceValidEndDate: this.formField.priceValidEndDate + " 00:00:00",
        updateControlId: this.formField.updateControlId
      };

      if(saveObj.priceValidBeginDate > saveObj.priceValidEndDate){
           this.$message({
              message:
                "有效开始日期不能大于有效结束日期",
              type: "warn",
              uration: 2000
            });
        return
      }

      this.$utils.validataMoth(this, "validpopup");

       if (this.valid) {
        //保存表单
        // this.formField = saveObj;

        this.saveForm(saveObj);
      }
    }
  }
};
</script>
