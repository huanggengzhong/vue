<!--
* description: 评价项设置
* author: zouzx
* createdDate: 2019-09-26
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
            :isMul="false"
          ></component>
        </el-row>
      </div>
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
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: crmApis.csDbNodeGroupMutationSaveById,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: "保存"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "评价类型",
          codeField: "serverType",
          isRequire: true,
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "适用场景",
          codeField: "",
          isRequire: true,
          lookuptype: "LX009",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "评价项",
          codeField: "",
          isRequire: true,
          lookuptype: "VE0059",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "是否启用",
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改评价项",
        add: "新增评价项",
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        oemCode:"1",
        groupCode: "1",
        nodeGroupId: "",
        updateControlId: "",
        nodeGroupCode:"",
        groupName: "",
        serverType: "",
        groupType: "",
        isEnable: ""
      }
    };
  },
  methods: {
    //保存
    save() {
    //   let that = this;
    //   var html = "";
    //   if (that.formField.orgName == "") {
    //     html = html + `<div>组织名称不能为空</div>`;
    //   }
    //   if (html != "") {
    //     this.$notify.error({
    //       title: "校验项",
    //       dangerouslyUseHTMLString: true,
    //       message: html
    //     });
    //     return;
    //   }

      //保存表单
      this.saveForm();
    }
  }
};
</script>
