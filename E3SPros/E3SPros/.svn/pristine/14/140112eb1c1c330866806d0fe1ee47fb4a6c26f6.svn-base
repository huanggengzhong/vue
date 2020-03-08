<!--
* description: 品牌管理-新增、修改弹窗
* author: zhhx
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
      width="1000px">
      <div
          class="filter-container filter-title"
          ref="conTitleHeight"
         v-if="tableComponents.length > 0"
            >退款单详细信息</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component v-for="comp in tableComponents.filter(o => o.isMust === true)" :key="comp.compKey" :codeField="comp.codeField" :textField="comp.textField" :popupsKey="comp.compKey"
                     :is="comp.component" :code="formField[comp.codeField]" @changeCode="getComponentCode" @focusCode="getFocusCode" :disabled="comp.disabled" :isRequire="comp.isRequire"
                     :span="comp.span || 8" :labelName="comp.labelName" :lookuptype="comp.lookuptype"   :inputType="comp.inputType" :valueObject="comp.curValueObject" :dateOptionsType="comp.dateOptionsType"></component>
        </el-row>
      </div>
      <div
          class="filter-container filter-title"
          ref="conTitleHeight"
         v-if="tableComponents1.length > 0"
            >退款</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component v-for="comp in tableComponents1.filter(o => o.isMust === true)" :key="comp.compKey" :codeField="comp.codeField" :textField="comp.textField" :popupsKey="comp.compKey"
                     :is="comp.component" :code="formField[comp.codeField]" @changeCode="getComponentCode" @focusCode="getFocusCode" :disabled="comp.disabled" :isRequire="comp.isRequire"
                     :span="comp.span || 8" :labelName="comp.labelName" :lookuptype="comp.lookuptype"   :inputType="comp.inputType" :valueObject="comp.curValueObject" :dateOptionsType="comp.dateOptionsType"></component>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button v-for="comp in tableButtons" :key="comp.compKey" :type="comp.type" @click="comp.clickEvent">{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from '@/components/mixins'
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/popupsOneTable'
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.disNumSave,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.save(), text: '退款'},// 退款
      ],
      //上半部分-查询条件
      tableComponents: [
        {compKey: 'compKey1', labelName: '客户名称', codeField: 'buyCustName',  component: () => import('@/components/org/commonInput'), type: 'inputText', parentFileds: "disabled:buyCustName-buyCustName", disabled: null, isMust: true},//客户名称
        {compKey: 'compKey2', labelName:'联系电话', codeField: 'phone',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//联系电话
        {compKey: 'compKey3', labelName:'订单号', codeField: 'saleOrderCode',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//意向品牌
        {compKey: 'compKey4', labelName:'已收金额', codeField: 'factReceivedAmount',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//意向车型
        {compKey: 'compKey5', labelName:'罚金', codeField: 'disposalAmount',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//详细地址
        {compKey: 'compKey6', labelName:'应退金额', codeField: 'gatheringAmount',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//详细地址
        {compKey: 'compKey7', labelName:'差额', codeField: 'gatheringAmount',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//详细地址
        {compKey: "compKey8",
          labelName: '销退申请时间',
          codeField: "createDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          dateOptionsType: "0",
          isMust: true},//详细地址
        {compKey: 'compKey9', labelName:'Vin', codeField: 'vin',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//详细地址
        {compKey: 'compKey10', labelName:'微信支付额', codeField: 'webChatPayAmount',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//详细地址
        {compKey: 'compKey11', labelName:'支付宝支付额', codeField: 'alipayAmount',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true}//详细地址
      ],
        //下半部分-查询条件
      tableComponents1: [
          {
          compKey: "compKey1",
          labelName: '退款方式',
          codeField: "refundStatus",
          lookuptype: 'VE0210',
          component: () => import("@/components/org/LookupValue"),
          isMust: true
        },
        {compKey: 'compKey6', labelName:'实退金额', codeField: 'factReceivedAmount',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//详细地址
        {compKey: 'compKey7', labelName:'退款人', codeField: 'gatheringEmpName',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//详细地址
        {compKey: 'compKey8', labelName:'退款备注', codeField: 'remark',  component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},//详细地址




      ],
      // 标题
      textMap: {
        edit: '退款',//修改弹框名字
        add: this.$t('org.label.addRole')//新增弹框名字
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        buyCustName: '',
        phone: '',
        saleOrderCode: '',
        factReceivedAmount:'',
        saleContractNo: '',
        disposalAmount:'',
        gatheringAmount:'',
        createDate:'',
        vin:'',
        webChatPayAmount:'',
        alipayAmount:'',
        vin:''
      }
    };
  },
  methods: {
    //保存
    save(){
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
      this.saveForm()
    }
  }
};
</script>
