<!--
* description: 门店管理-新增、修改弹窗
* author: dinggf
* createdDate: 2019-10-22
-->
<template>
  <section class="editStore">
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
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
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
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmOrgDlrMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey2",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.confirm")
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        }
      ],
      tableComponents: [
        {compKey: "compKey1",labelName: '门店大类',lookuptype: 'VE0079',codeField: "orgType",isRequire: true,component: () => import("@/components/org/LookupValue"),type: "dropdownList",isMust: true},
        {compKey: "compKey2",labelName: '门店类型',lookuptype: 'VE0079',codeField: "orgTypeName",isRequire: true,component: () => import("@/components/org/LookupValue"),type: "dropdownList",isMust: true},
        {compKey: "compKey3",labelName: '上线状态',codeField: "dlrStatus",component: () => import("@/components/org/LookupValue"),type: "dropdownList",isMust: true},
        {compKey: "compKey4",labelName: '省份',codeField: "provinceName",isRequire: true,component: () => import("@/components/org/ProvinceQuery"),type: "dropdownList",isMust: true},
        {compKey: "compKey5",labelName: '城市',codeField: "cityName",isRequire: true,component: () => import("@/components/org/CitySelect"),type: "dropdownList",isMust: true},
        {compKey: "compKey6",labelName: '建店地址',codeField: "address",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey7",labelName: '区县',codeField: "countyName",component: () => import("@/components/org/ZoneQuery"),type: "dropdownList",isMust: true},
        {compKey: "compKey8",labelName: '门店代码',codeField: "dlrCode",isRequire: true,component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey9",labelName: '建店状态',codeField: "dlrStatusName",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey10",labelName: '门店名称',codeField: "dlrShortName",isRequire: true,component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey11",labelName: '门店全称',codeField: "dlrFullName",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey12",labelName: '门店级别',codeField: "dlrLevel",component: () => import("@/components/org/LookupValue"),type: "dropdownList",isMust: true},
        {compKey: "compKey13",labelName: '门店英文名',codeField: "dlrEnName",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey14",labelName: '曾用名',codeField: "greatName",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey15",labelName: '股权',codeField: "stockRight",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey16",labelName: '管理员账号',codeField: "userName",isRequire: true,component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey17",labelName: '管理员密码',codeField: "password",isRequire: true,component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey18",labelName: '管理员角色',lookuptype: 'VE0079',codeField: "roleId",isRequire: true,component: () => import("@/components/org/LookupValue"),type: "dropdownList",isMust: true},
        {compKey: "compKey19",labelName: '所属公司城市',codeField: "cityName",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey20",labelName: '气候状态',codeField: "climateStatus",component: () => import("@/components/org/LookupValue"),type: "dropdownList",isMust: true},
        {compKey: "compKey21",labelName: '是否启用',codeField: "isEnable",component: () => import("@/components/org/isEnable/isEnable"),type: "dropdownList",isMust: true},
        {compKey: "compKey22",labelName: '上线日期',codeField: "onlineTime",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true,disabled: !this.isAdd(),},
        {compKey: "compKey23",labelName: '停业日期',codeField: "closingTime",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true,disabled: !this.isAdd(),},
        {compKey: "compKey24",labelName: '注册资金',codeField: "registeredCapital",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey25",labelName: '组织结构代码',codeField: "organizationalCode",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
      ],
      textMap: {
        edit: '门店修改',
        add: '门店增加'
      },
      formField:{
        orgType: '',
        orgTypeName: '',
        dlrStatus: '',
        provinceName: '',
        cityName: '',
        compKey: '',
        countyName: '',
        dlrCode: '',
        dlrStatusName: '',
        dlrShortName: '',
        dlrFullName: '',
        dlrLevel: '',
        dlrEnName: '',
        greatName: '',
        stockRight: '',
        userName: '',
        compKey: '',
        roleId: '',
        cityName: '',
        climateStatus: '',
        isEnable: '',
        onlineTime: '',
        closingTime: '',
        registeredCapital: '',
        organizationalCode: '',
      }
    }
  },
};
</script>

<style>
</style>