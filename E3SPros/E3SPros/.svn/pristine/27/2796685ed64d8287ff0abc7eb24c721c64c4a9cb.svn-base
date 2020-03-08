<!--
* description: 品牌管理-新增、修改弹窗
* author: luojx
* createdDate: 2019-08-04
-->
<template>
  <section class="editWholeRoleManage">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26" ref="vailComponentList">
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
      apiConfig: veApis.veSaleOrdMutation,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          // text: this.$t("sys.button.save")
          text: "确定"
        } // '保存'
        // {
        //   compKey: "btnKey2",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: this.$t("sys.button.reset")
        // } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "订单制作日期",
          /*订单制作日期*/
          codeField: "saleContractDateBegin",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker'",
          dateOptionsType: "0",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "合同制作日期",
          codeField: "saleContractDateBegin",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker'",
          dateOptionsType: "0",
          isMust: true
        }, //合同制作日期
        {
          compKey: "compKey3",
          labelName: "收款日期",
          // isRequire: true,
          // lookuptype: "BASE0003",
          codeField: "saleContractDateEnd",
          isMul: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker'",
          dateOptionsType: "0",
          isMust: true
        }, //收款日期
        {
          compKey: "compKey4",
          labelName: "开票日期",
          codeField: "saleContractDateBegin",
          // isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker'",
          dateOptionsType: "0",
          isMust: true
        }, //开票日期
        {
          compKey: "compKey5",
          labelName: "出库日期",
          codeField: "roleDesc",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker'",
          dateOptionsType: "0",
          isMust: true
        }, //出库日期
        {
          compKey: "compKey6",
          labelName: "交车日期",
          codeField: "roleDesc",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker'",
          dateOptionsType: "0",
          isMust: true
        } //交车日期
      ],
      // 标题
      textMap: {
        // edit: this.$t("org.label.editRole"), //修改弹框名字
        edit: "订单交期明细", //修改弹框名字
        add: this.$t("org.label.addRole") //新增弹框名字
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        // roleCode: "",
        // roleName: "",
        // enabled: "",
        // roleId: "",
        // roleOrgType: "",
        roleDesc: "",
        saleContractDateBegin: "",
        preDeliveryDate: "",
        createDateBegin: "",
        saleContractDateEnd: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      // if (that.$utils.isEmpty(that.formField.roleCode)) {
      //   that.$message({
      //     message:this.$t('org.message.inputRoleCode'),//请输入角色编码
      //     type: 'warning',
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.formField.roleName)) {
      //   that.$message({
      //     message: this.$t('org.message.inputRoleName'),//'请输入角色名称',
      //     type: 'warning',
      //     duration: 2000
      //   });
      //   return;
      // }
      // if (that.$utils.isEmpty(that.formField.roleOrgType)) {
      //   that.$message({
      //     message: this.$t('org.message.inputOrgType'),//'请选择组织类型',
      //     type: 'warning',
      //     duration: 2000
      //   });
      //   return;
      // }
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        //保存表单
        this.saveForm();
      }
    }
  }
};
</script>
