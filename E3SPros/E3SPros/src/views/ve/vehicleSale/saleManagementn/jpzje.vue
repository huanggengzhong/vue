<!--
* description: 车主变更弹窗
* author: wangcx
* createdDate: 2019-10-22
-->
<template>
  <section class="editWholeRoleManage">
    <el-dialog
      :close-on-click-modal="false"
      title="订单精品"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCodeHandleVisible"
      width="1000px"
    >
      <!-- <div class="filter-container filter-params">
        <el-row :gutter="26" ref="vailComponentList">
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire + comp.compKey : comp.compKey"
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
      </div> -->
      <OneTableTemplate
        ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="true"
        :dynamicIsShowMoreBtn="true"
        :dynamicTableOtherHeight="260"
      />
      <div>
        <TwoTable
          ref="multipleTable"
          :rightTableObject="rightTableObject"
          :dynamicButtons="twotableButtons"
          :dynamicComponents="twotableComponents"
          :dynamicFormFields="formField"
          :dynamicTableCols="tableCols"
          :dynamicApiConfig="apiConfig"
          :dynamicIsShowMoreBtn="false"
          :dynamicTableOtherHeight="260"
        />
      </div>
      <zjtc @visible="handDialogVisibleFunczjtc" :dialogVisible="dialogVisiblezjtc" :key="zjtcKey" />
      <zjgs @visible="handDialogVisibleFunczjgs" :dialogVisible="dialogVisiblezjgs" :key="zjgsKey" />

    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
import TwoTable from "@/components/templates/twoTable";
import zjtc from "./zjtc";
import zjgs from "./zjgs";

export default {
  // 组件混入对象
  mixins: [formMixins],
  components: {
    OneTableTemplate,
    TwoTable,
    zjtc,
    zjgs
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.veContractQry,
      curPopupsVisible: this.dialogVisible,
      dialogVisiblezjtc:false,
      dialogVisiblezjgs:false,
      zjtcKey:'zjtcKey',
      zjgsKey:'zjgsKey',
      //树对象
      rightTableObject: {
        // 配置右侧网格查询API配置对象
        apiConfig: orgApis.mdsLookupValueQueryByPage,
        //设置是否显示更多按钮
        isShowRightMoreBtn: false,
        // 动态组件-按钮
        tableButtons: [],
        // 动态组件-查询条件
        tableComponents: [],
        // 动态生成网格列
        tableCols: [
          {
            prop: "lookupValueCode",
            label: "值列表编码",
            width: null,
            align: "center"
          },
          {
            prop: "lookupValueName",
            label: "值列表名称",
            width: null,
            align: "center"
          },
          { prop: "isEnable", label: "是否启用", width: null, align: "center" },
          {
            prop: "updateControlId",
            label: "并发控制",
            width: 0,
            align: "center",
            hidden: true
          }
        ],
        //表单查询数据（查询条件）
        formField: {
          lookupValueCode: "",
          lookupValueName: "",
          isEnable: "",
          lookupTypeName: "",
          lookupTypeCode: "",
          dlrId: "HOST"
        }
      },
      twotableButtons: [],
      twotableComponents: [],
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.openAddTc(),
          text: "增加套餐"
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.openAddGs(),
          text: "增加工时"
        }, // '保存'
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "删除套餐"
        }, // '保存'
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () => this.save(),
          text: "删除工时"
        }, // '保存'
        {
          compKey: "btnKey5",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        }, // '保存'
        {
          compKey: "btnKey6",
          type: "",
          size: "small",
          clickEvent: () => this.close(),
          text: "退出"
        } //重置
      ],

      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "应收金额",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span: 8,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "随车金额",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span: 8,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "总优惠金额",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span: 8,
          isMust: true
        }
      ],
      tableCols: this.getCols(),
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        roleDesc: "",
        saleContractDateBegin: "",
        preDeliveryDate: "",
        createDateBegin: "",
        saleContractDateEnd: ""
      }
    };
  },
  methods: {
    getCols() {
      var cols = [
        {
          prop: "pvAccount",
          label: "代办项目",
          align: "center"
        }, //账户名称
        {
          prop: "agentProject",
          label: "代办费用" /*收款方式*/,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey2",
              isShowLabel: false,
              codeField: "carAgentItemCost",
              component: () => import("@/components/org/commonInput"),
              clickEvent: () => "",
              type: "inputText"
            }
          ]
        }
      ];
      return cols;
    },
    //打开选择精品
    openAddTc() {
      debugger
      this.dialogVisiblezjtc = true;
      this.zjtcKey = this.zjtcKey + "1";
    },
    handDialogVisibleFunczjtc(val) {
      this.dialogVisiblezjtc = val;
      this.zjtcKey = this.zjtcKey + "1";
    },


    //增加工时
    openAddGs() {
      debugger
      this.dialogVisiblezjgs = true;
      this.zjgsKey = this.zjgsKey + "1";
    },
    handDialogVisibleFunczjgs(val) {
      this.dialogVisiblezjgs = val;
      this.zjgsKey = this.zjgsKey + "1";
    },



    //保存
    save() {
      const that = this;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        //保存表单
        this.saveForm();
      }
    },
    close() {
      this.$emit("close", "");
    },
    sendCodeHandleVisible() {
      this.$emit("visible", false);
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ #twoTable .rightElmain {
  width: 47%;
}
/deep/ .rightElmain .filter-params {
  display: none;
}
/deep/ .leftMail {
  margin-right: 0;
}
/deep/ #twoTable {
  padding: 0;
  height: 200px;
}
/deep/ .MailOne .filter-button {
  display: none;
}
</style>