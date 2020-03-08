<!--
* description: 车辆产品价格补贴设置新增
* author: liyanm
* createdDate: 2019-08-06
-->
<template>
  <section class="editBack">
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbDlrBankMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t('ve.label.save')//保存
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text:this.$t('ve.label.reset')//重置
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t('ve.label.bankCode'),//银行编码
          codeField: "bankCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMul: false,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: this.$t('ve.label.bankName'),
          codeField: "bankName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),//银行名称
          type: "inputText",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey3",
          labelName:this.$t('ve.label.bankAddr'),
          codeField: "bankAddr",
          isRequire: true,
          isMul: false,
          component: () => import("@/components/org/commonInput"),//银行地址
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName:this.$t('ve.label.bankTypeName'),
          codeField: "bankTypeName",
          lookuptype: "VE0403",
          isRequire: true,
          component: () => import("@/components/org/LookupValue"),//银行类型名称
          type: "dropdownList",
          isMul:false,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t('ve.label.financeOrgTypeName'),
          lookuptype: "VE0498",
          codeField: "financeOrgTypeName",
          isRequire: true,
          component: () => import("@/components/org/LookupValue"),//金融机构名称
          type: "dropdownList",
          isMul:false,
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t('ve.label.orderNo'),
          codeField: "orderNo",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t('ve.label.bankInformationEdit'),//银行信息-编辑
        add:  this.$t('ve.label.bankInformationAdd')//银行信息-新增
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        bankId: "",
        carBrandCode: "",
        // carBrandCn: "",
        dlrId: "",
        // dlrCode: "",
        // dlrShortName: "",
        bankCode: "",
        bankName: "",
        bankAddr: "",
        bankTypeId: "",
        // bankTypeName: "",
        financeOrgTypeId: "",
        financeOrgTypeName: "",
        orderNo: "",
        // isEnable: "",
        // isEnableName: "",
        // creator: "",
        // createdDate: "",
        // modifyName: "",
        // lastUpdateDate: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.carBrandCode)) {
        that.$message({
          message: "请输入品牌",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.bankCode)) {
        that.$message({
          message: "请输入银行编码",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.bankName)) {
        that.$message({
          message: "请输入银行名称",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.orderNo)) {
        that.$message({
          message: "请输入顺序号",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.financeOrgTypeName)) {
        that.$message({
          message: "请选择金融机构名称",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.bankTypeName)) {
        that.$message({
          message: "请选择银行类型名称",
          type: "warning",
          duration: 2000
        });
        return;
      }
      // 保存表单
      var saveObj = {
        bankId: this.formField.bankId,
        carBrandCode: this.formField.carBrandCode,
        dlrId: this.formField.dlrId,
        bankCode: this.formField.bankCode,
        bankName: this.formField.bankName,
        bankAddr: this.formField.bankAddr,
        bankTypeName: this.formField.bankTypeName,
        bankTypeId: this.formField.bankTypeId,
        financeOrgTypeId: this.formField.financeOrgTypeId,
        orderNo: this.formField.orderNo,
        isEnable: this.formField.isEnable,
        creator: this.formField.creator,
        financeOrgTypeName: this.formField.financeOrgTypeName,
        updateControlId: this.formField.updateControlId
      };
      this.saveForm();
    }
  }
};
</script>
