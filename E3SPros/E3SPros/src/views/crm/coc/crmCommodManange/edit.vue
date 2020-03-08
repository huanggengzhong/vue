<!--
    *商品查询或新增
-->
<template>
  <section class="editChangeOwnerAudit">
    <el-dialog
      :close-on-click-modal="true"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="660px"
    >
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <component
            v-for="comp in tableComponents"
            :validrule="comp.validrule"
            :key="comp.compKey"
            :codeField="comp.codeField"
            :popupsKey="comp.compKey"
            :is="comp.component"
            :code="formField[comp.codeField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
            :inputType="comp.type"
            :span="comp.span"
            :isRequire="comp.isRequire"
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
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: '',
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
        //   clickEvent: () => this.save(),
          text: "确认"
        }
      ],
      // 动态组件-查询条件
      tableComponents:
       [
        {
            compKey: "compKey1",
            labelName: "商品类型",
            span: 12,
            codeField: "commodType",
            isRequire: true,
            lookuptype:"LX183",
            component: () =>
            import("@/components/crm/lookupValue/lookupvalue"),
            type: "",
            isMust: false
        },
        {
            span: 12,
            compKey: "compKey2",
            labelName: "商品名称",
            codeField: "commodId",
            isRequire: true,
            component: () =>
                import("@/components/crm/textbox/crmTextInput"),
            type: "inputText",
            isMust: false
        },
        {
            span: 12,
            compKey: "compKey3",
            labelName: "商品编码",
            codeField: "commodCode",
            isRequire: true,
            component: () =>
                import("@/components/crm/textbox/crmTextInput"),
            type: "inputText",
            isMust: false
        },
        {
            span: 12,
            compKey: "compKey4",
            labelName: "是否启用",
            isRequire: true,
            codeField: "isUsering",
            lookuptype:"LX003",
            component: () =>
                import("@/components/crm/lookupValue/lookupvalue"),
            type: "",
            isMust: false
        }
       ],
      // 标题
      textMap: {
        edit: "商品维护",
        add: "商品维护"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        commodType:'',
        commodId: '',
        commodCode: '',
        isUsering: ''
      }
    };
  },
  methods: {
    //确认
  }
};
</script>
