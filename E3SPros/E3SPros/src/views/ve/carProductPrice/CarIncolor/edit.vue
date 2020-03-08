<!--
* description: 内饰色维护-新增、修改弹窗
* author: linwm
* createdDate: 2019-08-04
-->
<template>
  <section class="editCarIncolor">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
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
            :isMul='false'
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
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmCarIncolorMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save") //"保存"
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") //"重置"
        },

        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: this.$t("org.label.carBrand"), //"品牌",
                codeField: "carBrandCode",
                isRequire: this.popupsState == "edit" ? true : true,
                disabled: this.popupsState == "edit" ? true : false,
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: this.$t("org.label.carIncolorCode"), //"内饰色编码",
                codeField: "carIncolorCode",
                isRequire: this.popupsState == "edit" ? true : true,
                disabled: this.popupsState == "edit" ? true : false,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.carIncolorName"), //"内饰色名称",
                codeField: "carIncolorName",
                isRequire: true,
                component: () => import("@/components/org/commonInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey4",
                labelName: this.$t("org.label.supplyStatus"), //"供应状态",
                lookuptype: "VE0014",
                codeField: "supplyStatus",
                isRequire: true,
                // disabled: this.popupsState == "edit" ? true : false,
                component: () => import("@/components/org/LookupValue"),
                type: "dropdownList",
                isMust: true
              },
              {
                compKey: "compKey5",
                labelName: this.$t("org.label.EnableSituation"), //"是否启用",
                codeField: "isEnable",
                isRequire: true,
                // disabled: this.popupsState == "edit" ? true : false,
                component: () => import("@/components/org/isEnable/isEnable"),
                type: "dropdownList",
                isMust: true
              }
            ],
      // 标题
      textMap: {
        edit: "修改内饰色信息",
        add: "添加内饰色信息"
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carIncolorId: "",
        carBrandCode: "",
        carIncolorCode: "",
        carIncolorName: "",
        supplyStatus: "",
        isEnable: "",
        updateControlId: ""
      }
    };
  },
  methods: {
    //保存
    save() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        const that = this;
        // if (that.$utils.isEmpty(that.formField.carBrandCode)) {
        //   that.$message({
        //     message: "请输选择品牌信息",
        //     type: "warning",
        //     duration: 2000
        //   });
        //   return;
        // }
        // if (that.$utils.isEmpty(that.formField.carIncolorCode)) {
        //   that.$message({
        //     message: "请输入内饰色编码",
        //     type: "warning",
        //     duration: 2000
        //   });
        //   return;
        // }
        // if (that.$utils.isEmpty(that.formField.carIncolorName)) {
        //   that.$message({
        //     message: "请输入内饰色名称",
        //     type: "warning",
        //     duration: 2000
        //   });
        //   return;
        // }
        // if (that.$utils.isEmpty(that.formField.isEnable)) {
        //   that.$message({
        //     message: "请选择是否启用",
        //     type: "warning",
        //     duration: 2000
        //   });
        //   return;
        // }
        this.saveForm();
      }
    }
  }
};
</script>
