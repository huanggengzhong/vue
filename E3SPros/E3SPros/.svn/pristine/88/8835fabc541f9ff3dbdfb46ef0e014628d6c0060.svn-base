<!--
* description: 客户销退申请弹框
* author: ydche
* createdDate: 2019-08-04
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      width="1000px"
    >
    <div
      class="filter-container filter-title"
      ref="resultTitleHeight"
    >{{$t('ve.label.customerInfo')/*客户信息*/}}</div>
    <!-- 客户信息 -->
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in cusTableComponents.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :isMul="comp.isMul"
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
          ></component>
        </el-row>
      </div>
      <div
      class="filter-container filter-title"
      ref="resultTitleHeight"
    >{{$t('ve.label.contractInfo')/*合同信息*/}}</div>
    <!-- 合同信息 -->
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in conTableComponents.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :isMul="comp.isMul"
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
          ></component>
        </el-row>
      </div>
      <div
      class="filter-container filter-title"
      ref="resultTitleHeight"
    >{{$t('ve.label.salesInfo')/*销退信息*/}}</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in retTableComponents.filter(o => o.isMust === true)"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :isMul="comp.isMul"
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
import { requestGraphQL } from "@/api/commonRequest";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veStockPlaceSave,
      carPlaceNameTemp:"",
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.submit(),
          text: "提交"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "打印"
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.close('0'),
          text: "取消"
        }
      ],
      // 动态组件-查询条件
      cusTableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t('ve.label.clientName')/*客户名称*/,
          disabled: true,
          codeField: "curName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          disabled:true,
          labelName: this.$t('ve.label.phone')/*联系电话*/,
          codeField: "phone",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      conTableComponents: [
        {
          compKey: "compKey3",
          disabled:true,
          labelName:this.$t('ve.label.contractReceivableAmount')/*合同应收金额*/ ,
          codeField: "estimatedCost",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          disabled:true,
          labelName:this.$t('ve.label.phone')/*合同已收金额*/ ,
          codeField: "insurance",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: this.$t('ve.label.fineCollection')/*精品应收*/,
          disabled:true,
          codeField: "send",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t('ve.label.alipayPayment')/*支付宝支付额*/,
          disabled:true,
          codeField: "packageFare",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName:this.$t('ve.label.weChatPayment')/*微信支付额*/ ,
          disabled:true,
          codeField: "specialAmount",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: this.$t('ve.label.guaranteedReceivable')/*保验应收*/,
          disabled:true,
          codeField: "currentPrice",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
      ],
      retTableComponents: [
        { compKey: "compKey9",
          labelName: this.$t('ve.label.retreatReason')/*销退原因*/,
          lookuptype: "VE0230",
          isMul:false,
          codeField: "retirementType",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: this.$t('ve.label.fine')/*罚金*/,
          codeField: "discountAmount",
        //   isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey11",
          labelName: this.$t('ve.label.retreatAmount')/*销退金额*/,
          codeField: "targetAmount",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey12",
          labelName:this.$t('ve.label.remark')/*备注*/ ,
          codeField: "remark",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: this.$t('ve.label.retirementDetails')/*销退详细信息*/,
        add: " "
      },
      //发送记录条数
      count:0,
      isBothNoNull:false,
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        curName:"",
        phone: "",
        estimatedCost: "",
        sellingPrice: "",
        retirementType: "",
        estimatedCost: "",
        insurance:"",
        send: "",
        packageFare: "",
        specialAmount: "",
        currentPrice: "",
        discountAmount: "",
        targetAmount: "",
        remark: "",
      },
      wareHouseInfo:[],
      wareAreaInfo:[],
      carBrandCode:this.$store.getters.orgInfo.BRAND_CODE || '1'
    };
  },
  created(){
  },
  methods: {
   submit(){
       //do submit
        this.$message({
            message: this.$t('sys.tips.esTip5')/*保存成功*/,
            type: 'success',
            duration: 2000,
        });
        this.close('1')
   },
   // 关闭
    close(type) {
        this.curPopupsVisible = false
        this.sendCode(type)
    },
  }
};
</script>
