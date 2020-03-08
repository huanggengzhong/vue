<!--
* 全国经销商设置-新增、修改弹窗
* author: lixb
* createdDate: 2019-09-27
* logs:
*   2019-09-19 完成页面开发和国际化配置 lixb
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1100px"
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { parse } from "path";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.vedeductTimeLimitM,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey3",
          type: "primary",
          size: "small",
          clickEvent: () => this.save(),
          text: this.$t("sys.button.save")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.sendCode(),
          text: this.$t("sys.button.cancel")
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          labelName: this.$t("ve.label.carBrand"),
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isMust: true
        }, //品牌
        {
          compKey: "compKey2",
          labelName: this.$t("ve.label.transferDay"),
          /*中心库或中转天数*/ codeField: "transferDay",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: this.$t("ve.label.onLineCarDay"),
          /*在线车存放天数*/ codeField: "onLineCarDay",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 标题
      textMap: this.$t("ve.label.paramSet") /*参数设置*/,
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        transferDay: "",
        onLineCarDay: ""
      }
    };
  },
  methods: {
    save() {
      var data = this.formField;
      if (
        data.carBrandCode != "" &&
        data.transferDay != "" &&
        data.onLineCarDay != ""
      ) {
        const queryObj = {
          // 保存mutation
          type: "mutation",
          // api配置
          apiConfig: veApis.vedeductTimeLimitM,
          variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              carBrandCode: "",
              carSEries: "",
              purcashType: ""
            }
          }
        };
        // 转换了中台请求格式数据
        var paramD = this.$getParams(queryObj);
        // 调用中台API方法（可复用）
        // debugger
        this.$requestGraphQL(paramD).then(response => {
          if (response.data.vedeductTimeLimitMsg.result === "1") {
            // 保存成功
            this.$message({
              message: "保存成功",
              type: "success",
              uration: 2000
            });
          } else {
            // 保存失败
            // this.sendCode('0')
            this.$message({
              message: "保存成功",
              type: "warn",
              uration: 2000
            });
          }
          this.sendCode();
        });
      } else {
        this.$message({
          message: "请输入存放天数",
          type: "warn",
          uration: 2000
        });
      }
    }
  }
};
</script>
