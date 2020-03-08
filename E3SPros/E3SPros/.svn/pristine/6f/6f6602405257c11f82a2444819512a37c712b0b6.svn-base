<!--
* description: 可配置页面组件管理-新增、修改弹窗
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
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :isMul="comp.isMul"
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
      apiConfig: orgApis.proConfigComponentMutationSave,
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
          disabled: true
        },
        {
          compKey: "compKey2",
          labelName: "标签名称",
          isRequire: true,
          codeField: "langLabelName",
          textField:"labelName",
          component: () =>import("@/views/org/configurablePageManagement/propus"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "对应数据字段",
          isRequire: true,
          codeField: "codeField",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {compKey: "compKey4",labelName: "组件KEY",isRequire: true,codeField: "compKey",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey5",labelName: "排序",isRequire: true,codeField: "sort",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey6",labelName: "对应文本字段",codeField: "textField",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey7",labelName: "所属网格ID",/**isRequire: true ,*/ codeField: "colsId",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true,disabled: !this.isAdd()},
        {compKey: "compKey8",labelName: "组件路径",isRequire: true,codeField: "component",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey9",labelName: "组件类型",isRequire: true,codeField: "controlType",component: () => import("@/components/org/LookupValue"),lookuptype: "VE0189",type: "dropdownList",isMust: true,isMul: false},
        {compKey: "compKey10",labelName: "条件字段",codeField: "parentFields",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey11",labelName: "所属类型",isRequire: true,codeField: "compType", component: () => import("@/components/org/LookupValue"),lookuptype: "VE0189",type: "dropdownList",isMust: true,isMul: false},
        {compKey: "compKey12",labelName: "是否默认展示",codeField: "isMust",component: () => import("@/components/org/isEnable/isEnable"),type: "dropdownList",isMust: true},
        {compKey: "compKey13",labelName: "是否必填",codeField: "isRequire",component: () => import("@/components/org/isEnable/isEnable"),type: "dropdownList",isMust: true},
        {compKey: "compKey14",labelName: "行宽比例",codeField: "span",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey15",labelName: "是否可用",isRequire: true,codeField: "isEnable",component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: true},
        {compKey: "compKey16",labelName: "是否可清除",codeField: "clearable",component: () => import("@/components/org/isEnable/isEnable"),type: "dropdownList",isMust: true},
        {compKey: "compKey17",labelName: "是否可过滤",codeField: "filterable",component: () => import("@/components/org/isEnable/isEnable"),type: "dropdownList",isMust: true},
        {compKey: "compKey18",labelName: "是否多选",codeField: "isMul",component: () => import("@/components/org/isEnable/isEnable"),type: "dropdownList",isMust: true},
        {compKey: "compKey19",labelName: "是否显示标签",codeField: "isShowLabel",component: () => import("@/components/org/isEnable/isEnable"), type: "dropdownList",isMust: true},
        {compKey: "compKey20",labelName: "日期类型",codeField: "dateType",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey21",labelName: "日期选项类型",codeField: "dateOptionsType",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey22",labelName: "日期格式", codeField: "format",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey23",labelName: "输入类型",codeField: "inputType",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey24",labelName: "值列表类型",codeField: "lookupType",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey25", labelName: "点击事件",codeField: "clickEvent", component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey26",labelName: "比较字段",codeField: "compareField",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey27",labelName: "比较值",codeField: "compareValue",component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey28",labelName: "计算表达式", codeField: "contWay", component: () => import("@/components/org/commonInput"),type: "inputText",isMust: true},
        {compKey: "compKey29",labelName: "是否系统组件",isRequire: true,codeField: "isSys",component: () => import("@/components/org/isEnable/isEnable"),type: "dropdownList",isMust: true},
      ],
      // 标题
      textMap: {
        edit: "可配置页面组件维护",
        add: "可配置页面组件维护"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        compId:"",
        pageName: this.$parent.$route.query.pageName,
        pageId:  this.$parent.$route.query.pageId,
        langLabelName: "",
        labelName:"",
        codeField: "",
        compKey: "",
        sort: "",
        textField: "",
        colsId: "",
        component: "",
        parentFields: "",
        sort: "",
        isMust: "",
        isRequire: "",
        span: "",
        isEnable: "",
        compType:"",
        controlType:"",
        clearable: "",
        filterable: "",
        isMul: "",
        isShowLabel: "",
        dateType: "",
        dateOptionsType: "",
        format: "",
        inputType: "",
        lookupType: "",
        clickEvent: "",
        compareField: "",
        compareValue: "",
        contWay: "",
        isSys:"",
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
      debugger
      //保存表单
      this.saveForm(saveObj);
    }
    }
  }
};
</script>
