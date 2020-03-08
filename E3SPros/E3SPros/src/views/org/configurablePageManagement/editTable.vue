<!--
* description: 可配置页面网格列管理-新增、修改弹窗
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
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
            :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :textField="comp.textField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            :text="formField[comp.textField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :isMul="comp.isMul"
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
      apiConfig: orgApis.proConfigColumnMutationSave,
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
          labelName: "所属页面",
          isRequire: true,
          codeField: "pageName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          disabled: !this.isAdd()
        },
        {
          compKey: "compKey2",
          labelName: "标签名称",
          isRequire: true,
          codeField: "langLabelName",
          textField: "label",
          component: () =>
            import("@/views/org/configurablePageManagement/propus"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "对应数据字段",
          isRequire: true,
          codeField: "prop",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "列宽",
          isRequire: true,
          codeField: "width",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "排序",
          isRequire: true,
          codeField: "sort",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "是否隐藏",
          codeField: "hidden",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey7",
          labelName: "对齐方式",
          codeField: "align",
          component: () => import("@/components/org/LookupValue"),
          lookuptype: "VE0189",
          type: "dropdownList",
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey8",
          labelName: "是否可用",
          isRequire: true,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey9",
          labelName: "是否可排序",
          codeField: "sortable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey10",
          labelName: "是否组件",
          codeField: "isComponent",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "可配置页面网格列维护",
        add: "可配置页面网格列维护"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        colsId:"",
        pageName: this.$parent.$route.query.pageName,
        pageId: this.$parent.$route.query.pageId,
        label: "",
        langLabelName:"",
        prop: "",
        hidden:"",
        width: "",
        sort: "",
        align: "",
        isEnable: "",
        sortable: "",
        isComponent: "",
        updateControlId:""
      }
    };
  },
  methods: {
    //保存
    save() {
      this.$utils.validataMoth(this, 'validpopup')
      if (this.valid) {
      var saveObj = JSON.parse(JSON.stringify(this.formField));
      saveObj.pageName = undefined;
      //保存表单
      this.saveForm(saveObj);
      }
    }
  }
};
</script>
