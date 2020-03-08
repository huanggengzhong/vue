<!--
* description: 车辆产品价格维护-新增、修改弹窗
* author: liyanm
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
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire + comp.compKey : comp.compKey"
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
            :parentFileds="comp.parentFileds"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :isMul="comp.isMul"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{ comp.text }}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { watchMixins } from "@/components/mixins/watchMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins, watchMixins],
  data() {
    return {
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save1(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        },
        //修改
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
          parentFileds:
            "disabled:mdmVeCarConfigExtend.carConfigId-carBrandCode",
          disabled: null,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMul: false,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "车系",
          parentFileds:
            "value:carBrandCode,disabled:mdmVeCarConfigExtend.carConfigId-mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesId",
          disabled: null,
          codeField: "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesId",
          isRequire: true,
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMul: false,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "车型配置",
          codeField: "mdmVeCarConfigExtend.carConfigId",
          textField: "mdmVeCarConfigExtend.carConfigCode",
          parentFileds:
            "value:carBrandCode,disabled:mdmVeCarConfigExtend.carConfigId-mdmVeCarConfigExtend.carConfigId",
          disabled: null,
          isRequire: true,
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "市场指导价",
          codeField: "carSalePrice",
          isRequire: true,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "经销商采购价",
          codeField: "dlrPurPrice",
          isRequire: false,
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "价格有效开始日期",
          codeField: "priceValidBeginDate",
          // component: () => import("@/components/org/datePicker/datePicker"),
          // format: "yyyy-MM-dd HH:mm:ss",
          // type: "datePicker",
          component: () => import("@/components/org/datePicker/dateTimePick"),
          format: "yyyy-MM-dd HH:mm:ss",
          type: "datePicker",
          //修改
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "价格有效结束日期",
          codeField: "priceValidEndDate",
          // component: () => import("@/components/org/datePicker/datePicker"),
          // format: "yyyy-MM-dd HH:mm:ss",
          // type: "datePicker",
          component: () => import("@/components/org/datePicker/dateTimePick"),
          format: "yyyy-MM-dd HH:mm:ss",
          type: "datePicker",
          //修改
          isRequire: true,
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改车辆产品价格",
        add: "添加车辆产品价格"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesId": "",
        "mdmVeCarConfigExtend.carConfigId": "",
        "mdmVeCarConfigExtend.carConfigCn": "",
        "mdmVeCarConfigExtend.carConfigCode": "",
        carSalePrice: 0,
        dlrPurPrice: 0,
        priceValidBeginDate: "",
        priceValidEndDate: "",
        updateControlId: "",
        carConfigPriceId: ""
      }
    };
  },
  methods: {
    save1() {
      //修改

      if (this.valid) {
        const queryObj = {
          // 保存mutation
          type: "mutation",
          // 保存API配置对象
          apiConfig: orgApis.mdmVeCarConfigPriceMutationSave,
          // 条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: this.formField.carBrandCode,
              carSeriesId: this.formField[
                "mdmVeCarConfigExtend.mdmVeCarSeriesExtend.carSeriesId"
              ],
              carConfigId: this.formField["mdmVeCarConfigExtend.carConfigId"],
              carSalePrice: parseFloat(this.formField.carSalePrice),
              dlrPurPrice: parseFloat(this.formField.dlrPurPrice),
              carConfigPriceId: this.formField.carConfigPriceId,
              updateControlId: this.formField.updateControlId,
              isEnable: "1",
              priceValidBeginDate: this.formField.priceValidBeginDate,
              priceValidEndDate: this.formField.priceValidEndDate

              // priceValidBeginDate: !this.isAdd()
              //   ? this.formField.priceValidBeginDate
              //   : this.formField.priceValidBeginDate + " 00:00:00",
              // priceValidEndDate: !this.isAdd()
              //   ? this.formField.priceValidEndDate
              //   : this.formField.priceValidEndDate + " 00:00:00"
            }
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
