<!--
* description: 可配置化页面管理-新增、修改弹窗
* author: linzewen
* createdDate: 2019-09-11
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
            v-for="comp in tableComponents"
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
            :isMul="comp.isMul"
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
      apiConfig: orgApis.proConfigPageviewMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
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
          labelName: "所属模块",
          isRequire: true,
          codeField: "moduleCode",
          lookuptype:"DB0001",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMul: false
        },
        {
          compKey: "compKey2",
          labelName: "页面名称",
          isRequire: true,
          codeField: "pageName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
        },
        {
          compKey: "compKey3",
          labelName: "页面标识",
          isRequire: true,
          codeField: "pageCode",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
        },
        {
          compKey: "compKey4",
          labelName: "页面类型",
          isRequire: true,
          codeField: "pageType",
          lookuptype:"DB0001",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          isMul: false
        },
        {
          compKey: "compKey5",
          labelName: "状态",
          isRequire: true,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMul: false
        },
        {
          compKey: "compKey6",
          labelName: "页面区域",
          isRequire: true,
          codeField: "pageArea",
          component: () => import("@/components/org/commonInput/index"),
          type: "dropdownList",
          isMul: false
        }
      ],
      // 标题
      textMap: {
        edit: "可配置页面维护",
        add: "可配置页面维护"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        pageId:"",
        moduleCode: "",
        pageName: "",
        pageCode: "",
        pageType: "",
        isEnable: "",
        pageArea: "",
        updateControlId:" "
      }
    };
  },
  methods: {
 
  }
};
</script>
