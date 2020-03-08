<!--
* description: 车系权限-新增、修改弹窗
* author: luojx
* createdDate: 2019-08-04
-->
<template>
  <section class="editCarSeries">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      :key="popupsTableKey"
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
            :text="formField[comp.textField]"
            @changeCode="getComponentCode"
            @focusCode="getFocusCode"
            :disabled="comp.disabled"
            :isRequire="comp.isRequire"
            :isMul="comp.isMul"
            :span="comp.span || 8"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :parentFileds="comp.parentFileds"
            :dateOptionsType="comp.dateOptionsType"
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
import { valueObjectMixins } from "@/components/mixins/valueObjectMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins,valueObjectMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veUserSeriesMutationSave,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        } /*保存*/,
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        } /*重置*/,
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        } /*取消*/
      ],
      // 动态组件-查询条件
      tableComponents: [
        /*品牌*/
        {
          compKey: "compKey1",
          isRequire: true,
          labelName: this.$t("org.label.carBrand"),
          isMul: false,
          codeField: "carBrandCode",
          isMul: false,
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        },
        /*用户名称*/
        {
          compKey: "compKey2",
          isRequire: true,
          labelName: this.$t("org.label.UserName"),
          isMul: false,
          codeField: "userId",
          textField: "userName",
          parentFileds: "carBrandCode",
          component: () => import("@/components/org/userSelect"),
          type: "propus",
          isMust: true
        },
        /*功能名称*/
        {
          compKey: "compKey11",
          isRequire: true,
          labelName: this.$t("ve.label.functionName"),
          isMul: false,
          lookuptype: "VE0336",
          codeField: "funCode",
          component: () => import("@/components/org/LookupValue"),
          isMul: false,
          type: "dropdownList",
          isMust: true
        },
        /*车系*/
        {
          compKey: "compKey3",
          isRequire: true,
          labelName: this.$t("org.label.carSerise"),
          isMul: false,
          codeField: "seriesId",
          parentFileds: "carBrandCode",
          textField: "carSeriesCn",
          component: () => import("@/components/org/CarCode"),
          type: "dropdownList",
          isMust: true
        }
      ],
      // 标题
      textMap: {
        /*修改车系权限信息*/

        edit: this.$t("ve.label.userCarSeriesJurisdiction_editTitle"),
        /*增加车系权限信息*/

        add: this.$t("ve.label.userCarSeriesJurisdiction_addTitle")
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        userId: "",
        seriesId: "",
        funCode: "",
        userSeriesId: "",
        updateControlId: "",
        userName: ""
      }
    };
  },
  // watch:{
  //   "formField.userId"(val){
  //     console.log(val)
  //     debugger
  //   }
  // },
  methods: {
    //保存
    save() {
      let saveobj = this.formField
      const that = this;
      saveobj.userName = undefined
      this.$utils.validataMoth(this, "validpopup");

      if (this.valid) {
        //保存表单
        // this.formField.userName = undefined;
        const queryObj = {
          // 保存mutation
          type: "mutation",
          typeParam: "($dataInfo:[InputVeUserSeries])",
          // api配置
          apiConfig: this.apiConfig,
          apiServices: [
            {
              apiServiceParam: "(dataInfo:$dataInfo)"
            }
          ],
          // 条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo:saveobj
          }
        };
        // 转换了中台请求格式数据
        var paramD = this.$getParams(queryObj);
        // 调用中台API方法（可复用）
        this.$requestGraphQL(paramD).then(response => {
          if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
            this.sendCode("1");
            this.$message({
              // 保存成功
              message: this.$t("sys.tips.esTip5"),
              type: "success",
              uration: 2000
            });
          } else {
            // 保存失败
            // this.sendCode('0')
            this.$message({
              message:
                this.$t("sys.tips.esTip5") +
                response.data[queryObj.apiConfig.ServiceCode].msg,
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
