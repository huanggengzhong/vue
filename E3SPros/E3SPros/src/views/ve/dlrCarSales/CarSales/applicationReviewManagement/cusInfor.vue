<!--
* description: 查看客户信息
* author: ydche1
* createdDate: 2019-08-07
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
      <component
        v-for="comp in tableComponents.filter(o => o.type === 'popupsInput')"
        :key="comp.popups.key"
        :codeField="comp.codeField"
        :popupsVisible="comp.popups.state"
        :comType="comp.popups.type"
        :is="comp.popups.component"
        :popupsKey="comp.compKey"
        :code="formField[comp.codeField]"
        @changeCode="getComponentCode"
      ></component>
      <div slot="footer" class="dialog-footer">
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
  props:{
    initData:{
      type:Object,
      default:function(){
        return {}
      }
    }
  },
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmOrgProvinceMutationSave,
      // 动态组件-按钮
      tableButtons: [
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName:'客户名称' /*客户名称*/,
          codeField: "comName",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey2",
          labelName: '联系方式' /*联系方式*/,
          codeField: "phone",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey3",
          labelName: '证件类型' /*证件类型*/,
          codeField: "typeName",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey4",
          labelName: '证件号码'/*证件号码*/,
          codeField: "moveIn",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey5",
          labelName: '省份' /*省份*/,
          codeField: "province",disabled:true,
         component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey6",
          labelName:'城市'/*城市*/,
          codeField: "city",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey7",
          labelName: '县区' /*县区*/,
          codeField: "county",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey8",
          labelName: 'E-mail' /*E-mail*/,
          codeField: "Email",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey9",
          labelName: '客户性别' /*客户性别*/,
          codeField: "sex",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey10",
          labelName: '详细地址' /*详细地址*/,
          codeField: "address",disabled:true,
          span:24,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey11",
          labelName: '出生日期' /*出生日期*/,
          codeField: "doneDate",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey12",
          labelName: '首选联系方式' /*首选联系方式*/,
          codeField: "phone",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey13",
          labelName: '传真号码' /*传真号码*/,
          codeField: "phone",disabled:true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
      ],
      // 标题
      textMap: {
        edit: this.$t("org.label.edit") /*修改*/,
        add: this.$t("org.label.add") /*添加*/
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: this.dynamicEditRowData
    };
  },
  watch(){
  },
  methods: {
    save() {
      const that = this;
      this.saveForm();
    }
  }
};
</script>
<style scoped>
/deep/ .el-col-24 label {
  width: 8.5%;
  margin-right: 10px;
}
/deep/ .el-col-24 input {
  width: 134%;
}
</style>
