<!--
*  -新增、修改弹窗
* xulfan
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
        <el-row :gutter="26" ref="vailComponentList">
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
            :isMul="false"
            :parentFileds="comp.parentFileds"
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
import { veApis } from "@/api/graphQLApiList/ve";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { CacheConfig } from "@/cache/configCache/index";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veDbReplaceCarConfigMutationSave,
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
                labelName: this.$t("org.label.carBrandCn") /*品牌*/,
                codeField: "carBrandCode",
                component: () => import("@/components/org/carBrand/carBrand"),
                type: "dropdownList",
                isRequire: true,
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "替代顺序号" /*替代顺序号*/,
                codeField: "replaceLevel",
                component: () =>
                  import("@/components/org/commonInput/numberInput"),
                type: "inputText",
                // isRequire: true,
                // isMust: true,
                hidden: true
                //   disabled: !this.isAdd()
              },
              // {
              //   compKey: "compKey3",
              //   labelName: this.$t("org.label.carConfig") /*车型配置*/,
              //   codeField: "carConfigId",
              //   component: () => import("@/components/org/carTypeConfig"),
              //   type: "propus",
              //   isRequire: true,
              //   isMust: true
              // }
              {
                compKey: "compKey3",
                labelName: this.$t("org.label.carConfig"),
                codeField: "carConfigId",
                returnCodeField: "carConfigId",
                parentFileds: "carBrandCode",
                component: () => import("@/components/org/carTypeConfig"),
                type: "propus",
                isMust: true
              }
              // {
              //   compKey: "compKey3",
              //   labelName: this.$t("org.label.carConfig"), // 车型配置
              //   codeField: "carConfigId",
              //   parentFileds: "carBrandCode",
              //   //修改
              //   component: () => import("@/components/org/carTypeConfig"),
              //   type: "propus",
              //   isMust: true,
              //   isMul: false
              // }
              // {
              //   compKey: "compKey4",
              //   labelName: this.$t("org.label.carConfigCode") /*车型配置ID*/,
              //   codeField: "carConfigId",
              //   component: () => import("@/components/org/commonInput"),
              //   type: "inputText",
              //   isRequire: true,
              //   isMust: true
              // }
            ],
      // 标题
      textMap: {
        add: this.$t("sys.button.edit")
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        replaceLevel: "0",
        carConfigId: "", //错误
        // replaceCarConfigId:""
        carConfigCode: ""
        // updateControlId:""
      }
    };
  },
  // watch: {
  //   "formField.carConfigId"(val) {
  //     //这个没错
  //     console.log(this.$refs);
  //     if (val == this.$refs.truecompKey3[0].modelCode) {
  //       //这里设置carConfigId8
  //       this.formField.carConfigCode = this.$refs.truecompKey3[0].modelText;
  //     }
  //   }
  // },
  methods: {
    //保存
    save() {
      // debugger;
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        const that = this;
        this.saveForm();
      }
    }
  }
};
</script>
