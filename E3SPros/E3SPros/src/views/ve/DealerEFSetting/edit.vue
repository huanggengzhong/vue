<!--
* 新增弹窗
* yangsq
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
      u      v-for="comp in tableComponents.filter(o => o.isMust === true)"
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
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmVeCarSeriesMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.confirm") /**确认 */
        },
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel") /**取消 */
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: "品牌",
          isRequire: true,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true,
        },
        {
          compKey: "compKey2",
          labelName: "经销商简称",
          isRequire: true,
          codeField: "dlrShortName",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isMust: true,
        },
        {
          compKey: "compKey",
          labelName: "是否启用",
          isRequire: true,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          type: "dropdownList",
          isMust: true,
        },
        {
          compKey: "compKey4",
          labelName: "销售顾问预警天数",
          codeField: "oneday",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey5",
          labelName: "销售经理超期天数",
          codeField: "twoday",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        },
        {
          compKey: "compKey6",
          labelName: "总经理超期天数",
          codeField: "threeday",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true,
        }
      ],
      // 标题
      textMap: {
        add: "经销商交车预警超期天数设置新增"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        dlrShortName: "",
        isEnable: "",
        oneday: "",
        twoday: "",
        threeday: "",
      }
    };
  },
  methods: {
    //保存
    save() {
      const that = this;
      if (that.$utils.isEmpty(that.formField.carBrandCode)) {
        that.$message({
          message:"品牌不能为空",
          type: "warning",
          duration: 2000
        });
        return;
      }
            if (that.$utils.isEmpty(that.formField.dlrShortName)) {
        that.$message({
          message:"经销商不能为空",
          type: "warning",
          duration: 2000
        });
        return;
      }
        if (that.$utils.isEmpty(that.formField.isEnable)) {
        that.$message({
          message:"是否启用不能为空",
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
