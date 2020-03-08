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
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponents.length > 0"
      >客户信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :inputType="comp.inputType"
            :valueObject="comp.curValueObject"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
        </el-row>
      </div>
      <div
        class="filter-container filter-title"
        ref="conTitleHeight"
        v-if="tableComponents1.length > 0"
      >订单信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents1.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :inputType="comp.inputType"
            :valueObject="comp.curValueObject"
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.disNumSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.lookRecode(),
          text: "查看修订记录"
        }, // '查看修订记录'
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } //重置
      ],
      //上半部分-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "客户名称",
          codeField: "roleCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        }, //客户名称
        {
          compKey: "compKey2",
          labelName: "联系电话",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //联系电话
        {
          compKey: "compKey3",
          labelName: "意向品牌",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //意向品牌
        {
          compKey: "compKey4",
          labelName: "意向车型",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //意向车型
        {
          compKey: "compKey5",
          labelName: "详细地址",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } //详细地址
      ],
      //下半部分-查询条件
      tableComponents1: [
        {
          compKey: "compKey1",
          labelName: "购车形态",
          lookuptype: "VE0188",
          codeField: "roleOrgType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //购车形态
        {
          compKey: "compKey2",
          labelName: "购车方式",
          isRequire: true,
          lookuptype: "VE0188",
          codeField: "roleOrgType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //购车方式
        {
          compKey: "compKey3",
          labelName: "贷款机构",
          lookuptype: "VE0188",
          codeField: "roleOrgType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //贷款机构
        {
          compKey: "compKey4",
          labelName: "购车用途",
          lookuptype: "VE0188",
          codeField: "roleOrgType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //购车用途
        {
          compKey: "compKey5",
          labelName: "销售渠道",
          lookuptype: "VE0188",
          codeField: "roleOrgType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //销售渠道
        {
          compKey: "compKey6",
          labelName: "车系",
          lookuptype: "VE0188",
          codeField: "roleOrgType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        }, //车系

        {
          compKey: "compKey7",
          labelName: this.$t("org.label.carConfig"),
          codeField: "carConfigId",
          component: () => import("@/components/org/carTypeConfig"),
          type: "propus",
          isMust: false
        }, // 车型配置
        {
          compKey: "compKey8",
          labelName: "车身颜色",
          codeField: "carColorId",
          component: () => import("@/components/org/carColor"),
          type: "propus",
          isMust: false
        }, //车身颜色
        {
          compKey: "compKey9",
          labelName: "内饰色",
          codeField: "carIncolorId",
          component: () => import("@/components/org/TrimPopupColor"),
          type: "propus",
          isMust: false
        }, //内饰色
        {
          compKey: "compKey10",
          labelName: "厂家指导价",
          codeField: "roleCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: !this.isAdd(),
          isMust: true
        }, //厂家指导价
        {
          compKey: "compKey11",
          labelName: "销售价格",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //销售价格
        {
          compKey: "compKey12",
          labelName: "优惠价格",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //优惠价格
        {
          compKey: "compKey13",
          labelName: "车身颜色价",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //车身颜色价
        {
          compKey: "compKey14",
          labelName: "预计交车日期",
          codeField: "assignDateBegin",
          isRequire: false,
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "1",
          isMust: false
        }, //预计交车日期
        {
          compKey: "compKey15",
          labelName: "精品总金额",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //精品总金额
        {
          compKey: "compKey16",
          labelName: "应收定金",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //应收定金
        {
          compKey: "compKey17",
          labelName: "保险总金额",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //保险总金额
        {
          compKey: "compKey18",
          labelName: "金融咨询费",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //金融咨询费
        {
          compKey: "compKey19",
          labelName: "代办总金额",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //代办总金额
        {
          compKey: "compKey20",
          labelName: "总费用",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //保险总金额
        {
          compKey: "compKey21",
          labelName: "销售顾问",
          codeField: "roleCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }, //销售顾问
        {
          compKey: "compKey22",
          labelName: "政策项目优惠金额",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }, //政策项目优惠金额
        {
          compKey: "compKey23",
          labelName: "备注",
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } //备注
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.editRole"), //修改弹框名字
        add: this.$t("org.label.addRole") //新增弹框名字
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        roleCode: "",
        roleName: "",
        enabled: "",
        roleId: "",
        roleOrgType: "",
        roleDesc: ""
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

      //保存表单
      this.saveForm();
    },
    //查看修订记录
    lookRecode() {}
  }
};
</script>
