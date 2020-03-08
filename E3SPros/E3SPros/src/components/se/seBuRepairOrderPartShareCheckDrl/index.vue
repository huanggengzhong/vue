<!--
* description: 维修施工单-备件分摊
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="备件分摊"
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
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmCarBrandBizSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "确认"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: "重置"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "备件编号",
          codeField: "partNo",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "备件名称",
          codeField: "partName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          span: 16,
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "备件数量",
          codeField: "partQty",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "单价",
          codeField: "partPrice",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "合计金额",
          codeField: "dueAmount",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "厂家付费单价",
          codeField: "otherPrice",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey8",
          labelName: "厂家比例(%)",
          codeField: "otherDiscount",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "厂家承担金额",
          codeField: "otherAmount",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "客户付费单价",
          codeField: "custPrice",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey11",
          labelName: "客户比例(%)",
          codeField: "custDiscount",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey12",
          labelName: "客户承担金额",
          codeField: "custAmount",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey13",
          labelName: "付费性质",
          codeField: "payKindName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey14",
          labelName: "业务类别",
          codeField: "businessTypeName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        }
      ],

      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        partNo: "",
        partName: "",
        partQty: "",
        dueAmount: "",
        otherDiscount: "",
        custPrice: "",
        custDiscount: "",
        payKindName: "",
        businessTypeName: "",
        partPrice: "",
        otherPrice: "",
        custAmount: "",
        otherAmount: ""
      }
    };
  },
  created() {
    // 赋值formField
    if (this.isUseRowData) {
      for (var key in this.formField) {
        if (this.editRowData[key]) {
          this.formField[key] = this.editRowData[key];
        } else {
          this.formField[key] = "";
          // 两层处理
          for (var rKey in this.editRowData) {
            if (rKey.indexOf(".") > -1) {
              var tmpKey = rKey.split(".")[1];
              if (tmpKey === key) {
                this.formField[tmpKey] = this.editRowData[rKey];
                break;
              }
            }
          }
        }
      }
    }
    // 备份fromField（用于重置）
    this.backFormField = JSON.parse(JSON.stringify(this.formField));
  },
  methods: {
    //保存
    save() {
      const that = this;
      if (
        that.$utils.isEmpty(that.formField.otherDiscount) ||
        that.formField.otherDiscount === ""
      ) {
        that.$message({
          message: "请输入厂家比例(%)",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (
        that.$utils.isEmpty(that.formField.custDiscount) ||
        that.formField.custDiscount === ""
      ) {
        that.$message({
          message: "请输入客户比例(%)",
          type: "warning",
          duration: 2000
        });
        return;
      }
      this.toNumber(this.formField);
      //保存表单
    },
    // 获取组件回传值
    // val:值, codeField:绑定formField的字段名称, comType:组件类型（预留）
    getComponentCode(val, txt, codeField, comType, popupsKey) {
      if (comType === "propus" && !this.$utils.isEmpty(popupsKey)) {
        // 弹窗赋值
        // 根据popupsKey找到对应的弹窗key的弹窗组件
        var dynamicPopup = this.dynamicComponents.filter(
          o => o.compKey === popupsKey
        );
        if (dynamicPopup.length > 0) {
          if (dynamicPopup[0].popups && dynamicPopup[0].popups.state) {
            // 弹窗状态不是为已打开才进行计算
            dynamicPopup[0].popups.state = false;
            dynamicPopup[0].popups.key = codeField + this.$utils.generateId();
          }
        }
        this.formField[codeField] = val;
        console.log(codeField);
        this.changeProportion(val, codeField);
      } else {
        // 普通赋值
        this.formField[codeField] = val;
        console.log(codeField);
        this.changeProportion(val, codeField);
      }
    },
    changeProportion(code, codeField) {
      let num = Number(code);
      if (num > 100) {
        this.$message({
          message: "比例不能大于100！",
          type: "warning",
          duration: 2000
        });
        this.formField[codeField] = "";
        return;
      } else {
        let str = null;
        str = 100 - num;
        if (codeField === "otherDiscount") {
          this.formField["custDiscount"] = str.toString();
        } else {
          this.formField["otherDiscount"] = str.toString();
        }
        this.changeDueAmount();
      }
    },
    changeDueAmount() {
      let num1 =
        (Number(this.formField["otherDiscount"]) *
          Number(this.formField["partPrice"])) /
        100;
      this.formField["otherPrice"] = num1.toFixed(2);
      let num2 =
        (Number(this.formField["otherDiscount"]) *
          Number(this.formField["dueAmount"])) /
        100;
      this.formField["otherAmount"] = num2.toFixed(2);
      let num3 =
        (Number(this.formField["custDiscount"]) *
          Number(this.formField["partPrice"])) /
        100;
      this.formField["custPrice"] = num3.toFixed(2);
      let num4 =
        (Number(this.formField["custDiscount"]) *
          Number(this.formField["dueAmount"])) /
        100;
      this.formField["custAmount"] = num4.toFixed(2);

      // let num5 = Number(this.formField['custAmount']) * Number(this.formField['memDiscount']) / 100
      // this.formField['discountAmount'] = num5.toFixed(2)
      // let num6 = Number(this.formField['custAmount']) - Number(this.formField['discountAmount'])
      // this.formField['custDueAmount'] = num6.toFixed(2)
    },
    open(editRowData) {
      this.curPopupsVisible = true;
      this.initFreeData(editRowData);
      // 备份fromField（用于重置）
      this.backFormField = JSON.parse(JSON.stringify(this.formField));
    },
    initFreeData(editRowData) {
      for (let i in editRowData) {
        let str = editRowData[i].toString();
        editRowData[i] = str;
      }
      this.editRowData = editRowData;
      if (this.isUseRowData) {
        for (var key in this.formField) {
          if (this.editRowData[key]) {
            this.formField[key] = this.editRowData[key];
          } else {
            this.formField[key] = "";
            // 两层处理
            for (var rKey in this.editRowData) {
              if (rKey.indexOf(".") > -1) {
                var tmpKey = rKey.split(".")[1];
                if (tmpKey === key) {
                  this.formField[tmpKey] = this.editRowData[rKey];
                  break;
                }
              }
            }
          }
        }
      }
    },
    toNumber(obj) {
      console.log(obj);
      let obj1 = {};
      obj1.partQty = Number(obj.partQty);
      obj1.partPrice = Number(obj.partPrice);
      obj1.dueAmount = Number(obj.dueAmount);
      obj1.otherPrice = Number(obj.otherPrice);
      obj1.otherAmount = Number(obj.otherAmount);
      obj1.custAmount = Number(obj.custAmount);
      obj1.otherDiscount = Number(obj.otherDiscount);
      obj1.otherDueAmount = Number(obj.otherDueAmount);
      obj1.custPrice = Number(obj.custPrice);
      obj1.custDiscount = Number(obj.custDiscount);
      obj1.custDueAmount = Number(obj.custDueAmount);
      obj1.discountAmount = Number(obj.discountAmount);
      obj1.partNo = obj.partNo;
      obj1.partName = obj.partName;
      obj1.payKindName = obj.payKindName;
      obj1.businessTypeName = obj.businessTypeName;
      this.$emit("changeCode", obj1);
      this.curPopupsVisible = false;
    }
  }
};
</script>
