<!--
* 物流运输时限设置-新增、修改弹窗
* author: xulfan
* createdDate: 2019-09-21
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.logTransTimeLimitSetSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.confirm")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey1",
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
          labelName: this.$t("org.label.departure") /*出发地*/,
          codeField: "departureCode",
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "propus",
          isRequire: true,
          isMust: true,
          disabled: !this.isAdd()
        },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.destinationType") /*目的地类型*/,
          lookuptype: "VE0079",
          codeField: "destinationTypeCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("org.label.destination") /*目的地（主机厂弹窗）*/,
          codeField: "warDestinationCode",
          component: () =>
            import("@/components/ve/hostFatoryWareHouse/wareHouseInput"),
          type: "propus",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.destination") /*目的地（经销商弹窗）*/,
          codeField: "dlrDestinationCode",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.transportType") /*运输方式*/,
          lookuptype: "VE0079",
          codeField: "transportTypeCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t(
            "org.label.logisticsTransCompany"
          ) /*物流运输公司*/,
          lookuptype: "VE0079",
          codeField: "transCompanyCode",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: this.$t("org.label.transportDate") /*运输天数*/,
          lookuptype: "VE0079",
          codeField: "transportDate",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: this.$t("org.label.isEnable") /*状态*/,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isRequire: true,
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t(
          "org.label.EditLogTransTimeLimSet"
        ) /*物流运输时限设置修改*/,
        add: this.$t("org.label.AddLogTransTimeLimSet") /*物流运输时限设置新增*/
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        departureCode: "",
        departureTypeCode: "",
        destinationTypeCode: "",
        warDestinationCode: "",
        dlrDestinationCode: "",
        transportTypeCode: "",
        transCompanyCode: "",
        transportDate: "",
        isEnable: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.departureCode)) {
        that.$message({
          message: this.$t("org.label.selDeparture") /*请选择出发地*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.destinationTypeCode)) {
        that.$message({
          message: this.$t("org.label.selDestinationType") /*请选择目的地类型*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.destinationCode)) {
        that.$message({
          message: this.$t("org.label.selDestination") /*请选择目的地*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.transportTypeCode)) {
        that.$message({
          message: this.$t("org.label.selTransportType") /*运输方式*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.transCompanyCode)) {
        that.$message({
          message: this.$t("org.label.selLogTransCompany") /*物流运输公司*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.transportDate)) {
        that.$message({
          message: this.$t("org.label.selTransportDate") /*运输天数*/,
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: this.$t("org.label.selEnableSituation") /*请选择启用状态*/,
          type: "warning",
          duration: 2000
        });
        return;
      }

      //保存表单
      this.saveForm();
    }
  }
};
</script>
