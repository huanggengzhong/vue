<!--
* 竞品车系维护-新增、修改弹窗
* zhhx
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
            :dateType="comp.dateType"
            :isMul="false"
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
      apiConfig: orgApis.mdmCcompCarseriesMutationSave,
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
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: "取消"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "竞争品牌",
          codeField: "compBrandCode",
          isRequire: true,
          component: () => import("@/components/org/compCarBrand/compCarBrand"),
          type: "dropdownList",
          isMust: true,
          parentFileds: "disabled:compCarseriesCode-compBrandCode",
          disabled: null
        },
        {
          compKey: "compKey2",
          labelName: "竞争车系编码",
          codeField: "compCarseriesCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          parentFileds: "disabled:compCarseriesCode-compCarseriesCode",
          disabled: null
        },
        {
          compKey: "compKey3",
          labelName: "竞争车系名称",
          codeField: "compCarseriesName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "是否启用",
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改竞争车系信息",
        add: "添加竞争车系信息"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        compBrandCode: "",
        compCarseriesCode: "",
        compCarseriesName: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.formField.compBrandCode)) {
        that.$message({
          message: "请选择竞争品牌",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.compCarseriesCode)) {
        that.$message({
          message: "请输入竞争车系编码",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.compCarseriesName)) {
        that.$message({
          message: "请输入竞争车系名称",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message: "请选择启用状态",
          type: "warning",
          duration: 2000
        });
        return;
      }

      //保存表单
      this.saveForm();
    }
  }
};
</script>
