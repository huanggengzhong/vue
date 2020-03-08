<!--
* description: 维修施工单-换件补差校验
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="换件补差价"
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
import { seApis } from "@/api/graphQLApiList/se";
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
        //{compKey: 'compKey1', labelName: '备件编号', codeField: 'partNo', isRequire: true, component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {
          compKey: "compKey1",
          labelName: "备件编号",
          codeField: "partNo",
          component: () => import("@/components/se/sePaChoosePart"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "备件名称",
          codeField: "partName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "数量",
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
          compKey: "compKey5",
          labelName: "付费性质",
          codeField: "payKindName",
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
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "厂家承担金额",
          codeField: "otherDueAmount",
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
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey12",
          labelName: "客户承担金额",
          codeField: "custDueAmount",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey13",
          labelName: "业务类别",
          codeField: "businessTypeName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        },
        {
          compKey: "compKey14",
          labelName: "折扣额",
          codeField: "discountAmount",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          disabled: true,
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "服务车型维护",
        add: "添加品牌信息"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        partNo: "",
        partName: "",
        partQty: "",
        partPrice: "",
        payKindName: "",
        dueAmount: "",
        otherPrice: "",
        otherDiscount: "",
        otherDueAmount: "",
        custPrice: "",
        custDiscount: "",
        custDueAmount: "",
        discountAmount: "",
        businessTypeName: ""
      },
      partNoId: "",
      partNoDatas: ""
    };
  },
  created: function() {
    let num =
      this.formField[this.tableComponents[5].codeField] -
      this.formField[this.tableComponents[8].codeField] -
      this.formField[this.tableComponents[11].codeField];
    this.formField[this.tableComponents[13].codeField] = num.toString();
    this.countDiscountAmount();
  },
  watch: {
    code(val) {
      this.modelCode = val;
      this.partNoDatas = val;
      console.log(this.modelCode);
    }
  },
  methods: {
    //保存
    save(obj) {
      const that = this;
      if (
        that.$utils.isEmpty(that.formField.partNo) ||
        that.formField.partNo === ""
      ) {
        that.$message({
          message: "请输入备件编号",
          type: "warning",
          duration: 2000
        });
        return;
      }
      //保存表单
      this.toNumber(that.formField);
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
        console.log(this.formField[codeField]);
        this.queryData();
        this.countDiscountAmount();
      } else {
        // 普通赋值
        this.formField[codeField] = val;
        console.log(this.formField[codeField]);
        this.queryData();
      }
    },
    queryData() {
      //更改备件号后查询备件信息
      const queryObj = {
        // 保存mutation
        type: "query",
        // api配置
        apiConfig: this.apiConfig,
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: this.formField
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        console.log("this.formField[codeField]");

        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          // this.formField = response.data[queryObj.apiConfig.ServiceCode].rows
          this.countDiscountAmount();
        } else {
          // 查询失败
          this.sendCode("0");
          this.$message({
            message:
              "查询失败：" + response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    open(obj) {
      this.curPopupsVisible = true;
      console.log(obj);
      this.initFreeData(obj);
    },
    countDiscountAmount() {
      let num1 = Number(this.formField["dueAmount"]);
      let num2 = Number(this.formField["otherDueAmount"]);
      let num3 = Number(this.formField["custDueAmount"]);
      let str = num1 - num2 - num3;
      this.formField["discountAmount"] = str.toString();
    },
    initFreeData(obj) {
      console.log(obj);
      for (let i in obj) {
        let str = obj[i].toString();
        obj[i] = str;
      }
      this.editRowData = obj;
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
