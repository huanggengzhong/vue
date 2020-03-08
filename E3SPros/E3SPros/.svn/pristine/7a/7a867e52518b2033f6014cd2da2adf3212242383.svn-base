<!--
* description: 车系中文对照关系编辑页面
* author: zouzx
* createdDate: 2019-09-25
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
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/crm/Template/crmonePage";

export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: crmApis.csDbMediaCarServiceMutationSaveById,
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
          labelName: "垂直媒体",
          codeField: "mediaCode",
          isRequire: true,
          lookuptype: "LX404",
          component: () => import("@/components/org/LookupValue"),
          type: "dropdownList",
          disabled: !this.isAdd(),
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "垂直媒体车系编码",
          codeField: "mediaCartypeCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "垂直媒体车系名称",
          codeField: "mediaCartypeName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "车系",
          codeField: "carServiceCode",
          textField: "carServiceName",
          isRequire: true,
          component: () => import("@/components/crm/crmEjectWindows/crmIntenCarSeries/index"),
          type: "propus",
          disabled: !this.isAdd(),
          isMust: true,
          isMul: false
        },
        {
          compKey: "compKey5",
          labelName: "是否启用",
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/crm/Select/crmIsEnable"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: "备注",
          codeField: "remake",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        edit: "修改对照关系",
        add: "新增对照关系"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        mediaCode:"",
        mediaCartypeName:"",
        mediaCartypeCode:"",
        id:"",
        carBrandCode:"1",
        carServiceName:"",
        carServiceCode:"",
        remake:"",
        isEnable:""
      }
    };
  },
  methods: {
    //保存
    save() {
       let that = this;
       debugger
      var html = "";
      if (that.formField.mediaCode == "") {
        html = html + `<div>垂直媒体不能为空</div>`;
      }
      if (that.formField.mediaCartypeName == "") {
        html = html + `<div>垂直媒体车系编码不能为空</div>`;
      }
      if (that.formField.mediaCartypeCode == "") {
        html = html + `<div>垂直媒体车系名称不能为空</div>`;
      }
      if (that.formField.carServiceName == ""||that.formField.carServiceCode == "") {
        html = html + `<div>车系不能为空</div>`;
      }
      if (that.formField.isEnable == "") {
        html = html + `<div>是否启用不能为空</div>`;
      }
      if (html != "") {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return;
      }

      //保存表单
      this.saveForm();
    }
  }
};
</script>
