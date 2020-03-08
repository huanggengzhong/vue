<!--
* description: 报备申请弹窗
* author: yangsq
* createdDate: 2019-09-21
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="申请详情"
      :append-to-body="true"
      :dynamicApiConfig="apiConfig"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      :key="popupsTableKey"
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
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 6"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
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
      <el-tabs
        type="card"
        v-model="activeName"
        class="filter-container"
      >
        <el-tab-pane
          label="采购车辆"
          name="first"
        >
          <one-table-template
            ref="multipleTable1"
            :data="tableData1"
            :dynamicButtons="tableButtons1"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableCols"
            :dynamicFormFields="formField"
            :dynamicIsShowSelect="false"
            :dynamicIsColumnDrop="true"
            :dynamicTableOtherHeight="60"
          />
        </el-tab-pane>
        <el-tab-pane
          label="竞品车"
          name="second"
        >
          <one-table-template
            ref="multipleTable1"
            :dynamicButtons="tableButtons2"
            :dynamicApiConfig="apiConfig"
            :dynamicTableCols="tableCols2"
            :dynamicFormFields="formField"
            :dynamicIsShowSelect="false"
          />
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      @close="close"
      @changeCode="aaa"
    ></edit>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import Edit from "./edit1";
import OneTableTemplate from "@/components/templates/oneTable";
export default {
  // 组件混入对象
  mixins: [formMixins,oneTableWithViewTemplateMixins],
  components: {
    Edit,
    OneTableTemplate
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {
    CacheConfig.initData(to.path, function() {
      next();
    });
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veApplicationForFiling,
      Edit,
      paChoosePartVisible: false,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: "取消"
        }
      ],
      tableData1: [],
      tableButtons1: [
        {
          compKey: "btnKey1",
          size: "small",
          type: "primary",
          clickEvent: () => this.add(),
          text: "新增车型"
        },
        {
          compKey: "btnKey5",
          type: "",
          size: "small",
          clickEvent: () => this.edit(),
          text: "删除车型"
        }
      ],
      tableButtons2: [
        {
          compKey: "btnKey6",
          type: "primary",
          size: "small",
          clickEvent: () => this.addRow(),
          text: "新增行"
        },
        {
          compKey: "btnKey7",
          type: "",
          size: "small",
          clickEvent: () => this.deleteT(),

          text: "删除行"
        }
      ],
      // 动态组件-查询条件
      tableCols: [
        { prop: "carSerise", label: this.$t('org.label.carSerise'), align: "center" },
        { prop: "carTypeCode", label: "车型", align: "center" },
        { prop: "inteCarType", label: "意向车型", align: "center" },
        { prop: "policyType", label: "意向车型名称", align: "center" },
        { prop: "marktPrice", label: "市场指导价", align: "center" },
        { prop: "thisPrice", label: "本次报价", align: "center" },
        { prop: "marginPreference", label: "优惠幅度", align: "center" }
      ],
      tableCols2: [
        { prop: "compCartypeCn", label: "竞品车型", align: "center" },
        { prop: "compMarkPrice", label: "竞品市场指导价", align: "center" },
        { prop: "policyType", label: "竞品报价", align: "center" },
        { prop: "marginPreference", label: "优惠幅度", align: "center" }
      ],
      tableComponents: [],
      // popupsState:"申请详情",
      // 静态组件-查询条件
      staticTableComponents: [
        {
          compKey: "compKey1",
          labelName: "客户选择",
          isRequire: true,
          codeField: "cust",
          component: () => import("@/components/org/BigCustomers"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "客户类型",
          isRequire: true,
          codeField: "custType",
          lookuptype: "APPVE0006",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "证件号码",
          isRequire: true,
          codeField: "credNo",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "政策类型",
          isRequire: true,
          codeField: "policyType",
          lookuptype: "VE0192",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "使用单位名称",
          isRequire: true,
          codeField: "useUnitName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "采购单位地址",
          isRequire: true,
          codeField: "purchasingUnitAddress",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "经办人姓名",
          isRequire: true,
          codeField: "personInChargeName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "经办人职务",
          isRequire: true,
          codeField: "personInChargePost",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "经办人手机号",
          isRequire: true,
          codeField: "personInChargePhoneNumber",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },

        {
          compKey: "compKey10",
          labelName: "经办人座机",
          isRequire: true,
          codeField: "personInChargeLandline",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey11",
          labelName: "决策者姓名",
          codeField: "decisionMakerName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },

        {
          compKey: "compKey12",
          labelName: "决策者职务",
          codeField: "decisionMakerPost",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },

        {
          compKey: "compKey13",
          labelName: "决策者手机号",
          codeField: "decisionMakerphoneNumber",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey14",
          labelName: "决策者座机",
          codeField: "decisionMakerLandline",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey15",
          labelName: "本次采购数量",
          isRequire: true,
          codeField: "thisTimePurchaseNumber",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey16",
          labelName: "预计采购日期",
          isRequire: true,
          codeField: "estimatePurchaseDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          isMust: true
        },
        {
          compKey: "compKey17",
          labelName: "年度采购总量",
          isRequire: true,
          codeField: "thisYearPurchaseNumber",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey18",
          labelName: "经营范围",
          codeField: "businessScope",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey19",
          labelName: "被访问者",
          codeField: "beVisitedPeople",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey20",
          labelName: "职务",
          codeField: "beVisitedPeoplePost",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },

        {
          compKey: "compKey21",
          labelName: "访问方式",
          codeField: "visitedType",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey22",
          labelName: "访问日期",
          codeField: "visitedDate",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "datePicker",
          isMust: true
        },
        {
          compKey: "compKey23",
          labelName: "商谈结果",
          codeField: "negotiationResults",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey24",
          labelName: "上牌城市",
          codeField: "RiskIdentification",
          component: () => import("@/components/org/CityQuery"),
          type: "propus",
          isMust: true
        }
      ],
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        email: ""
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        cust: "",
        custType: "",
        credNo: "",
        policyType: "",
        useUnitName: "",
        purchasingUnitAddress: "",
        personInChargeName: "",
        personInChargePost: "",
        personInChargePhoneNumber: "",
        personInChargeLandline: "",
        decisionMakerName: "",
        decisionMakerPost: "",
        decisionMakerphoneNumber: "",
        decisionMakerLandline: "",
        thisTimePurchaseNumber: "",
        estimatePurchaseDate: "",
        thisYearPurchaseNumber: "",
        businessScope: "",
        beVisitedPeople: "",
        beVisitedPeoplePost: "",
        visitedType: "",
        visitedDate: "",
        negotiationResults: "",
        carSerise:"", //车系
        carTypeCode:"",
        inteCarType:"",
        inteCarTypeName:"",
        marktPrice:"",
        thisPrice:"",
        marginPreference:"",
        compCartypeCn:"",
        compMarkPrice:"",
        compPrice:"",
        marginPreference:"",
        RiskIdentification: ""
      },
      settingMothRowData: {},
      settingMothPopupsVisible: false, //是否显示历史价格弹窗
      // 新增、编辑弹窗Key
      veApplicationForilingKey: "settingMoth",
      // 新增、编辑弹窗状态（add/edit/view）
      veApplicationForilingState: "",
      listLoading: false,
      activeName: "first",
      thimeTitle: "asdadsd",
      handleClick: "",
      paChoosePartVisible: ""
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
      //保存表单
      this.saveForm();
    },
    // // 经销商启用开关弹窗
    // showFilingEdit(type) {
    //   this.veApplicationForilingState = type;
    //   this.veApplicationForilingVisible = true;
    //   this.veApplicationForilingKey = this.$utils.generateId();
    // },
    // // 关闭经销商启用开关弹窗
    // Failingclose(type) {
    //   this.veApplicationForilingVisible = false;
    //   this.veApplicationForilingKey = this.$utils.generateId();
    // },
    // // 经销商启用开关事件
    // adds(index) {
    //   const that = this.$refs.multipleTable;
    //   this.showFilingEdit("edit");
    // },
    aaa(code,text){
      debugger
    this.code= this.formField.carSerise
    },

      addRow () {
        var rows = {
          compCartypeCn: "",
          compMarkPrice: "",
          policyType: "",
          marginPreference: ""
          }
        this.tableCols2.push(rows);
      },
        showEdit(type) {
      this.editPopupsState = type
      this.editPopupsVisible = true
      this.editPopupsKey = this.$utils.generateId()
    },
  }
};
</script>
<style scoped>
/deep/ .el-dialog {
  height: 100%;
}

/deep/ .el-table {
  max-height:130px;
  overflow-y: scroll;
}
/deep/
.el-table--striped {
 max-height: 115px;
}
/deep/
.filter-params-e3s .el-table--small{
  height: 145px !important;

}
</style>
