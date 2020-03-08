<!--
* description: 节点维护
* author: zouzx
* createdDate: 2019-09-26
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
            :isMul="false"
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
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: crmApis.createdOneIdMutationSaveCust,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "关系描述",
          codeField: "",
          isRequire: true,
          lookuptype: "1016",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "联系人名称",
          codeField: "",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "联系电话",
          codeField: "",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "省份",
          codeField: "provinceId",
          textField: "addrProvince",
          isRequire: false,
          isMust: true,
          isMul: false,
          lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
          changeCode: this.changeCityByProvince,
          component: () => import("@/components/crm/lookupValue/singleDropList")
        },
        {
          compKey: "compKey5",
          labelName: "城市",
          codeField: "cityId",
          textField: "addrCity",
          isRequire: false,
          isMust: true,
          isMul: false,
          lookuptype: crmApis.mdmOrgCityQueryFindAll,
          changeCodeArray: [
            { provinceId: this.formField ? this.formField.provinceId : "" }
          ],
          changeCode: this.changeCityByProvince,
          component: () =>
            import("@/components/crm/lookupValue/secondDropList")
        },
        {
          compKey: "compKey6",
          labelName: "区县",
          codeField: "",
          textField: "addrCounty",
          isRequire: false,
          isMust: true,
          isMul: false,
          lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
          component: () =>
            import("@/components/crm/lookupValue/singleDropList")
        },
        {
          compKey: "compKey7",
          labelName: "详细地址",
          codeField: "",
          isRequire: false,
          span: 16,
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改联系人",
        add: "新增联系人"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        dlrCustNo: ""
      },
      isUseRowData: true
    };
  },
  created() {
    // 赋值formField
    debugger
    if (this.popupsState === "edit") {
      if (this.isUseRowData) {
        debugger
        this.radioMDQR = this.$attrs.dynamicEditRowData["comePurposeName"];
        this.BCldmd = this.$attrs.dynamicEditRowData["comePurposeName"];
        this.bccomeId = this.$attrs.dynamicEditRowData["comeId"];
        this.bccomeState = this.$attrs.dynamicEditRowData["comeState"];
        this.bccustSource = this.$attrs.dynamicEditRowData["custSource"];
      }
    }
  },
  methods: {
    //保存
    save() {
      debugger;
      let that = this;
      let valueList = that.formField.nodeGroupCode.split(",");
      if (valueList.length > 1) {
        that.formField.nodeGroupCode = valueList[0];
        that.formField.serverType = valueList[1];
      }
      //保存表单
      this.saveForm();
    }
  }
};
</script>
