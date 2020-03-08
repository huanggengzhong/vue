<!--
* description: 业务岗位管理-新增、修改弹窗
* author: liyanm
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
            :text="formField[comp.textField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
          ></component>
          <!-- <el-col :span="8" ref="truecompKey3">
            <lableName curLabelName="非组件所属组织" :isShowLabel="true" :isRequire="true"></lableName>
            <el-input
              v-model="orgName"
              suffix-icon="el-icon-search"
              placeholder="请选择"
              size="small"
              @focus="checkBox"
            />
            <validateFormate curLabelName="非组件所属组织" :validrule="validrule"></validateFormate>
          </el-col>-->
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
    <!-- <edit @changeCode="getComponentCode1"></edit> -->
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import deptName from "@/components/org/commonInput";
import { orgApis } from "@/api/graphQLApiList/org";
// import Edit from "./deptName";
import lableName from "@/components/lableName";
import validateFormate from "@/components/validateFormate";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  components: {
    lableName, //标题溢出样式组件
    validateFormate //校验提示样式组件
  },

  props: {
    deptName: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 表单校验规则
      validrule: { type: Object, default: () => {} },
      // 保存API配置对象
      apiConfig: orgApis.mdmOrgStationMutationSaveById,
      // curDeptName: this.deptName,
      spanCom: 8,
      disabledCom: true,
      orgName: "",
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
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
          labelName: "业务岗位编码",
          codeField: "stationCode",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey2",
          labelName: "业务岗位名称",
          codeField: "stationName",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
          disabled: this.popupsState == "edit" ? true : false
        },
        {
          compKey: "compKey5",
          labelName: "所属组织",
          codeField: "deptId",
          textField: "deptName",
          isRequire: true,
          component: () => import("@/components/ve/orgName/orgNameInput"),
          type: "propus",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "是否启用",
          codeField: "isEnable",
          isRequire: true,
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true
        }
      ],
      editRowData: {},
      // 标题
      textMap: {
        edit: "修改",
        add: "新增"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        deptId: "",
        stationName: "",
        stationId: "",
        stationCode: "",
        deptName: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },
  watch: {
    "formField.updateControlId"(val) {
      if (val !== "") {
        this.orgName = this.editRowData.deptName;
      }
    }

    // // 传入需校验数据
    // orgName(curVal, oldVal) {
    //   this.$utils.validataMoth(this, "validpopup");
    // }
  },
  methods: {
    save() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        const saveFormField = JSON.parse(JSON.stringify(this.formField));
        saveFormField.deptName = undefined;
        this.saveForm(saveFormField);
      }
    }
    // checkBox() {
    //   this.$children[1].curPopupsVisible = true;
    // },
    // getComponentCode1() {
    //   this.$children[1].curPopupsVisible = false;
    //   if (this.$children[1].sendData) {
    //     this.orgName = this.$children[1].sendData.name;
    //     this.formField.deptId = this.$children[1].sendData.orgCode;
    //   }
    // }
  }
};
</script>
