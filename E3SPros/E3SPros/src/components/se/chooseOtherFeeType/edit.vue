<!--
* description: 品牌管理-新增、修改弹窗
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
      apiConfig: seApis.seDbCostTypeMutationSave,
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
          labelName: "车辆品牌",
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          isMul: false,
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "其他费用编码",
          codeField: "costTypeCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "其他费用名称",
          codeField: "costTypeName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "最大费用",
          codeField: "maxFee",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          isRequire: false,
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "状态",
          codeField: "isEnable",
          component: () =>
            import("@/components/se/chooseOtherFeeType/isEnable"),
          type: "propus",
          isMul: false,
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "来源",
          codeField: "isSystem",
          component: () =>
            import("@/components/se/chooseOtherFeeType/isSystem"),
          isMul: false,
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "备注",
          codeField: "remark",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          isRequire: false,
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改",
        add: "添加"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        costTypeCode: "",
        costTypeName: "",
        maxFee: "",
        isEnable: "",
        isSystem: "",
        remark: ""
        // dlrId: '',
        // dlrCode: '',
        // oemId: '',
        // oemCode: '',
        // groupId: '',
        // groupCode: '',
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
      if (
        that.$utils.isEmpty(that.formField.carBrandCode) ||
        that.formField.carBrandCode === ""
      ) {
        that.$message({
          message: "请输入车辆品牌",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (
        that.$utils.isEmpty(that.formField.costTypeCode) ||
        that.formField.costTypeCode === ""
      ) {
        that.$message({
          message: "请输入其他费用编码",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (
        that.$utils.isEmpty(that.formField.costTypeName) ||
        that.formField.costTypeName === ""
      ) {
        that.$message({
          message: "请输入其他费用名称",
          type: "warning",
          duration: 2000
        });
        return;
      }
      console.log(that.formField.isEnable);
      if (
        that.$utils.isEmpty(that.formField.isEnable) ||
        that.formField.isEnable === ""
      ) {
        that.$message({
          message: "请输入状态",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (
        that.$utils.isEmpty(that.formField.isSystem) ||
        that.formField.isSystem === ""
      ) {
        that.$message({
          message: "请输入来源",
          type: "warning",
          duration: 2000
        });
        return;
      }

      let maxFee = Number(this.formField.maxFee);
      this.formField.maxFee = maxFee;
      console.log(this.formField);
      //保存表单
      this.saveForm();
    }
  }
};
</script>
