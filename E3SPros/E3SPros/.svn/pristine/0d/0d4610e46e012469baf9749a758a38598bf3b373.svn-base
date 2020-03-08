<!--
* description: 调拨量调整申请
* author: xulfan
* logs: 
*      完成开发-------2019-10-14
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
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  // 组件混入对象
  mixins: [formMixins],
  data() {
    return {
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
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset") /**重置 */
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
          labelName: this.$t("org.label.carBrandCn") /*品牌*/,
          codeField: "carBrandCode",
          component: () => import("@/components/org/carBrand/carBrand"),
          type: "dropdownList",
          isRequire: true,
          isMust: true,
          disabled: !this.isAdd()
        },
        {
          compKey: "compKey2",
          labelName: "月份" /**月份 */,
          codeField: "month",
          component: () => import("@/components/org/datePicker/datePicker"),
          type: "date",
          // dateOptionsType: "0",
          dateType: "date",
          // isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "调入经销商" /*调入经销商*/,
          codeField: "transferInDlrId",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isRequire: true,
          isMust: true,
          disabled: true
        },
        {
          compKey: "compKey4",
          labelName: "调出经销商" /*调出经销商*/,
          codeField: "transferOutDlrId",
          component: () => import("@/components/org/orgDlr"),
          type: "propus",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey5",
          labelName: "数量" /**SAP车系编码*/,
          codeField: "qty",
          component: () => import("@/components/org/commonInput/numberInput"),
          type: "inputText",
          isRequire: true,
          isMust: true
        },
        {
          compKey: "compKey6",
          labelName: this.$t("org.label.updateControllId"),
          codeField: "updateControllId",
          isRequire: true,
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: false
        }
      ],
      // 标题
      textMap: {
        edit: this.$t("ve.label.veCarSeriesQryEdit") /**修改车系信息 */,
        add: this.$t("ve.label.veCarSeriesQryAdd") /**添加车系信息 */
      },
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: "",
        month: "",
        transferInDlrId: "1",
        transferOutDlrId: "",
        qty: 0,
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
        this.saveForm();

        // const saveObj = {
        //   carBrandCode: this.formField.carBrandCode,
        //   month: this.formField.month,
        //   transferInDlrId: this.formField.transferInDlrId,
        //   transferOutDlrId: this.formField.transferOutDlrId,
        //   qty: this.formField.qty,
        // };
        // if (!this.isAdd()) {
        //   if (this.formField.beginDate == "") {
        //     saveObj.beginDate = "2019-12-12 00:00:00";
        //   } else if (this.formField.beginDate.length === 10) {
        //     saveObj.beginDate = this.formField.beginDate + " 00:00:00";
        //   } else {
        //     saveObj.beginDate = this.formField.beginDate;
        //   }
        // }
        // if (!this.isAdd()) {
        //   saveObj.updateControlId = this.formField.updateControlId;
        // }
        //     const queryObj = {
        //       // 保存mutation
        //       type: "mutation",
        //       // 保存API配置对象
        //       apiConfig: veApis.veBuTransferTargetApplyMutationApply,
        //       // 条件/实体参数（变量），根据typeParam中的定义配置
        //       variables: {
        //         // 当前中台使用的名称有dataInfo、info，具体查看API文档
        //         dataInfo: saveObj
        //       }
        //     };
        //     // 转换了中台请求格式数据
        //     var paramD = this.$getParams(queryObj);
        //     // 调用中台API方法（可复用）
        //     this.$requestGraphQL(paramD).then(response => {
        //       if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
        //         // 保存成功
        //         this.sendCode("1");
        //         this.$message({
        //           message: "保存成功",
        //           type: "success",
        //           uration: 2000
        //         });
        //       } else {
        //         // 保存失败
        //         // this.sendCode('0')
        //         this.$message({
        //           message:
        //             "保存失败：" +
        //             response.data[queryObj.apiConfig.ServiceCode].msg,
        //           type: "warn",
        //           uration: 2000
        //         });
        //       }
        //     });
      }
    }
  }
};
</script>
