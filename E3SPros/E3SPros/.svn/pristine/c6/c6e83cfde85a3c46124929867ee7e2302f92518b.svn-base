<!--
* description: 车型配置与颜色关系维护-内饰色-新增、修改弹窗
* author: xulfan
* createdDate: 2019-08-07
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      title="内饰色-新增"
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
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.mdmCarTypeIncolorMutationSave,
      options: [
        {
          codeField: "carIncolorId",
          size: "small",
          labelName: this.$t("org.label.carIncolor") /*内饰色*/
        }
      ],
      value: "",
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.save1(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      // 动态组件-各种下拉框和输入框
      tableComponents: [
        //品牌
        // {
        //   compKey: "compKey1",
        //   labelName: this.$t("org.label.carBrandCn"),
        //   codeField: "carBrandCode",
        //   component: () => import("@/components/org/carBrand/carBrand"),
        //   isRequire: true,
        //   type: "dropdownList",
        //   isMust: true
        // },
        {
          compKey: "compKey2",
          labelName: this.$t("org.label.carConfig") /*车型配置*/,
          codeField: "carConfigCode",
          // parentFileds: "value:carBrandCode",
          disabled: true,
          component: () => import("@/components/org/commonInput"),
          isRequire: true,
          type: "propus",
          isMust: true
        },
        {
        compKey: 'compKey3', 
        labelName: this.$t('org.label.carIncolor'), 
        codeField: 'carIncolorId', 
        parentFileds: 'carConfigId', 
        mustFields: 'carConfigId', 
        component: () => import('@/components/org/InColor'),
        type: 'dropdownList', 
        filterable: true, 
        isRequire: true,
        isMust: true
        }, // 内饰色
        {
          compKey: "compKey5",
          labelName: this.$t("org.label.isEnableCn") /*启用状态*/,
          codeField: "isEnable",
          component: () => import("@/components/org/isEnable/isEnable"),
          isRequire: true,
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: this.$t("org.label.inColorPrice") /*内饰价*/,
          codeField: "supplyColorPrice",
          component: () => import("@/components/org/commonInput/numberInput"),
          isRequire: true,
          type: "inputText",
          isMust: true
        }
      ],
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        // carBrandCode: "",
        carConfigId: "",
        carConfigCode: "",
        supplyColorPrice: 0,
        carIncolorId: "",
        isEnable: ""
      }
    };
  },
  created(){
     for (var key in this.formField) {
            if (this.dynamicEditRowData[key]) {
              this.formField[key] = this.dynamicEditRowData[key]
            } else {
              if (typeof this.formField[key] === 'number') {
                this.formField[key] = 0
              } else if (typeof this.formField[key] === 'string') {
                this.formField[key] = ''
              }

              // 两层处理
              for (var rKey in this.dynamicEditRowData) {
                if (rKey.indexOf('.') > -1) {
                  var tmpKey = rKey.split('.')[1]
                  if (tmpKey === key) {
                    this.formField[tmpKey] = this.dynamicEditRowData[rKey]
                    break
                  }
                }
              }
            }
          }
  },
  methods: {
    //保存
    // 保存表单
    
    save1() {
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        const that = this;
      const queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: orgApis.mdmCarTypeIncolorMutationSave,
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            carConfigId: this.formField.carConfigId,
            carIncolorId:this.formField.carIncolorId,
            supplyColorPrice: this.formField.supplyColorPrice,
            isEnable: this.formField.isEnable
          }
        }
      };
      // 转换了中台请求格式数据
      var paramD = this.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          // 保存成功
          this.sendCode("1");
          this.$message({
            message: "保存成功",
            type: "success",
            uration: 2000
          });
        } else {
          // 保存失败
          // this.sendCode('0')
          this.$message({
            message:
              "保存失败：" + response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    }
    }
  }
};
</script>

