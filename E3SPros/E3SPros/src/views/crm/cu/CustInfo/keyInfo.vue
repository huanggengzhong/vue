<!--
* description: 修改关键信息
* author: dxuem
* createdDate: 2019-10-21
-->
<template>
  <section class="editChangeOwnerAudit">
    <el-dialog
      :close-on-click-modal="false"
      title="修改关键信息"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="900px"
    >
      <div class="filter-container filter-title-crm">修改关键信息明细</div>
      <div class="filter-container-crm filter-params-crm">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents1.filter(o => o.isMust === true)"
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
            :inputType="comp.type"
            :isMul="comp.isMul"
          ></component>
        </el-row>
      </div>
      <div class="filter-container-crm filter-title-crm">原信息</div>
      <div class="filter-container-crm filter-params-crm">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents2.filter(o => o.isMust === true)"
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
            :inputType="comp.type"
            :isMul="comp.isMul"
          ></component>
        </el-row>
      </div>
      <div class="filter-container-crm filter-title-crm">新信息</div>
      <div class="filter-container-crm filter-params-crm">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents3.filter(o => o.isMust === true)"
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
            :inputType="comp.type"
            :isMul="comp.isMul"
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
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: crmApis.createdOneIdMutationUpdateKeyValue, //关键信息修改
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "提交"
        }
        // {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
      ],
      // 动态组件-查询条件
      tableComponents1: [
        {
          compKey: "compKey1",
          labelName: "信息核实途径",
          lookuptype: "1004",
          codeField: "uid",
          code: "",
          isRequire: false,
          isMust: true,
          component: () => import("@/components/crm/lookupValue/lookupvalue")
        },
        {
          compKey: "compKey2",
          labelName: "客户名称",
          codeField: "custName",
          isRequire: false,
          isMust: true,
          disabled: true,
          component: () => import("@/components/crm/textbox/crmTextInput")
        }
      ],
      tableComponents2: [
        {
          compKey: "compKey3",
          labelName: "电话",
          codeField: "phone",
          isMul: false,
          disabled:true,
          isMust:true,
          component: () => import("@/components/crm/textbox/crmTextInput")
        },
        {
          compKey: "compKey4",
          labelName: "证件类型",
          codeField: "credTypeCode",
          lookuptype: "1004",
          isRequire: false,
          isMust: true,
          disabled:true,
          component: () => import("@/components/crm/lookupValue/lookupvalue")
        },
        {
          compKey: "compKey5",
          labelName: "证件号码",
          codeField: "credNo",
          isRequire: false,
          isMust: true,
          disabled:true,
          component: () => import("@/components/crm/textbox/crmTextInput")
        },
        {
          compKey: "compKey6",
          labelName: "详细地址",
          codeField: "addrStreet",
          isRequire: false,
          isMust: true,
          disabled: true,
          component: () => import("@/components/crm/textbox/crmTextInput")
        }
      ],
      tableComponents3: [
        {
          compKey: "compKey7",
          labelName: "电话",
          codeField: "phone",
          isMul: false,
          isRequire:true,
          isMust:true,
          component: () => import("@/components/crm/textbox/crmTextInput")
        },
        {
          compKey: "compKey8",
          labelName: "证件类型",
          codeField: "credTypeCode",
          lookuptype: "1004",
          isRequire:true,
          isMust: true,
          component: () => import("@/components/crm/lookupValue/lookupvalue")
        },
        {
          compKey: "compKey9",
          labelName: "证件号码",
          codeField: "credNo",
          isRequire:true,
          isMust: true,
          component: () => import("@/components/crm/textbox/crmTextInput")
        },
        {
          compKey: "compKey10",
          labelName: "省份",
          codeField: "provinceId",
          textField: "addrProvince",
          isRequire:true,
          isMust: true,
          isMul: false,
          component: () => import("@/components/crm/Select/Common/mix_Province")
        },
        {
          compKey: "compKey11",
          labelName: "城市",
          codeField: "cityId",
          textField: "addrCity",
          isRequire:true,
          isMust: true,
          isMul: false,
          component: () => import("@/components/crm/Select/Common/mix_City")
        },
        {
          compKey: "compKey12",
          labelName: "区县",
          codeField: "countyId",
          textField: "addrCounty",
          isRequire:true,
          isMust: true,
          isMul: false,
          component: () => import("@/components/crm/Select/Common/mix_District")
        },
        {
          compKey: "compKey13",
          labelName: "详细地址",
          codeField: "addrStreet",
          isRequire:true,
          isMust: true,
          component: () => import("@/components/crm/textbox/crmTextInput")
        }
      ],
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        custName: "",
        phone: "",
        credTypeCode: "",
        credNo: "",
        provinceId: "",
        cityId: "",
        countyId: ""
      }
    };
  },
  methods: {
    //保存
  }
};
</script>
