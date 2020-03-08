<!--
* description: 车主变更弹窗
* author: wangcx
* createdDate: 2019-10-22
-->
<template>
  <section class="editWholeRoleManage">
    <el-dialog
      :close-on-click-modal="false"
      title="增加工时"
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
        :dynamicIsShowMoreBtn="false"
      />
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";

export default {
  // 组件混入对象
  mixins: [formMixins],
  components: {
    OneTableTemplate
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
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: "查询"
        }, // '保存'
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        }, // '保存'
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.close(),
          text: "取消"
        } //重置
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "工时编码",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span:8,
          isMust: true
        },
        {
          compKey: "compKey1",
          labelName: "维修内容",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span:8,
          isMust: true
        },
        {
          compKey: "compKey1",
          labelName: "车型",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span:8,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "主凶件号",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span:8,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "收款方式",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span:8,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "工时大类",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span:8,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "工时小类",
          codeField: "vin",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span:8,
          isMust: true
        },
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
          label: "工时编码",
          align: "center"
        }, //账户名称
        {
          prop: "pvAccount",
          label: "维修内容",
          align: "center"
        }, //账户名称
        {
          prop: "pvAccount",
          label: "车型",
          align: "center"
        }, //账户名称
        {
          prop: "pvAccount",
          label: "维修工时",
          align: "center"
        }, //账户名称
        {
          prop: "pvAccount",
          label: "派工工时",
          align: "center"
        }, //账户名称
        {
          prop: "pvAccount",
          label: "维修大类",
          align: "center"
        }, //账户名称
        {
          prop: "pvAccount",
          label: "维修小类",
          align: "center"
        }, //账户名称
        // {
        //     prop: "agentProject",
        //     label: "代办费用" /*收款方式*/,
        //     align: "center",
        //     isComponent: true,
        //     comps: [
        //        {
        //         compKey: "propKey2",
        //         isShowLabel: false,
        //         codeField: "carAgentItemCost",
        //         component: () => import("@/components/org/commonInput"),
        //         clickEvent: () => "",
        //         type: "inputText"
        //       }
        //     ]
        //   },
      ];
      return cols;
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
