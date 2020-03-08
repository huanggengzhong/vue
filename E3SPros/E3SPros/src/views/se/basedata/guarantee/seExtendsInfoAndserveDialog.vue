<template>
  <!-- 修改会话框+维修经销商信息+服务考核系数 by wbhuwy-->
  <el-dialog
    :visible="isDialogVisible"
    :title="diaLogTitle"
    center
    width="70%"
    :append-to-body="true"
    @close="closeDialog"
    :close-on-click-modal="false"
  >
    <el-tabs @tab-click="handleClick" value="维修经销商信息">
      <el-tab-pane label="维修经销商信息" name="维修经销商信息">
        <div class="filter-container filter-params-crm">
          <mix-form
            ref="repairDLRInfo"
            :dynamicFormFields="repairDLRInfoDynamicFormFields"
            :dynamicFieldsData="repairDLRInfoDynamicFieldsData"
          ></mix-form>
          <div class="filter-container filter-params-crm">
            <mix-button name="saveAndClose" :dynamicButtons="btns"></mix-button>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="服务考核系数" name="服务考核系数">
        <div class="filter-container filter-params-crm">
          <mix-form
            ref="serviecAssess"
            :dynamicFormFields="serverAndAssessFormFields"
            :dynamicFieldsData="serverAndAssessFieldsData"
          ></mix-form>
          <div class="filter-container filter-params-crm">
            <mix-button name="saveAndCloseAndDelete" :dynamicButtons="seAndAssessBtns"></mix-button>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script>
/**
 * by wbhuwy
 */
import mixForm from "@/components/basicComponent/mixForm";
import mixButton from "@/components/basicComponent/mixButton";
import { mdmOrgDlrExtendInfoMutationSave,mdmOrgDlrAssessCoefficientQueryList } from "@/api/se/basedata/guarantee/seExtendsInfo";
import { apiMOrgDlr } from "@/api/graphQLApiList/se";
export default {
  components: {
    mixForm,
    mixButton
  },
  props: {
    rowData: {
      type: Object,
      default: {}
    },
    isDialogVisible: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    let validatorRules = {
      validator: (rule, value, callback) => {
        let reg = /^\d{0,8}\.{0,1}(\d{1,2})?$/;

        if (!reg.test(parseFloat(value))) {
          callback(new Error("请输入小数位不超过2位的数值！"));
        } else {
          callback();
        }
      },
      trigger: "blur"
    };
    return {
      // 服务考核系数的form控制
      serverAndAssessFormFields: [
        {
          label: "网点编码",
          codeField: "dlrCode",
          type: "inputTxt",
          span: 8,
          readonly: true
        },
        {
          label: "服务考核系数",
          codeField: "assessCoefficient",
          span: 8,
          type: "inputTxt"
        },
        {
          label: "生效日期",
          codeField: "evalidDate",
          span: 8,
          type: "inputDate"
        }
      ],
      // 服务考核系数的form数据保存
      serverAndAssessFieldsData: {
        dlrCode: "",
        assessCoefficientId: "",
        dlrId: "",
        evalidDate: "",
        assessCoefficient: "",
        updateControlId: ""
      },
      // 服务考核系数的按钮组
      seAndAssessBtns: {
        left: [
          {
            name: "saveServiceForm",
            label: "保存",
            event: this.saveSeAndAssessForm
          },
          {
            name: "deleteServiceForm",
            label: "删除",
            event: this.saveRepairForm
          },
          {
            name: "closeRepairForm",
            label: "返回",
            event: this.closeRepairForm
          }
        ],
        right: []
      },
      // 维修经销商信息的form控制
      repairDLRInfoDynamicFormFields: [
        {
          label: "经销商状态",
          codeField: "dlrStatus",
          type: "dropdownList",
          span: 8,
          disabled: true
        },
        {
          label: "税率",
          codeField: "taxRate",
          type: "inputNumber",
          span: 8,
          rules: validatorRules
        },
        {
          label: "新车地区系数",
          codeField: "preQuotiety",
          type: "inputNumber",
          span: 8,
          rules: validatorRules
        },
        {
          label: "保修工时系数",
          codeField: "repairQuotiety",
          type: "inputNumber",
          span: 8,
          rules: validatorRules
        },
        {
          label: "保养地区系数",
          codeField: "mtainQuotiety",
          type: "inputNumber",
          span: 8,
          rules: validatorRules
        },
        {
          label: "备件限用额度",
          codeField: "limitJe",
          type: "inputNumber",
          span: 8,
          rules: validatorRules
        },
        {
          label: "备件结算系数1",
          codeField: "squotiety1",
          type: "inputNumber",
          span: 8,
          rules: validatorRules
        },
        {
          label: "备件结算系数2",
          codeField: "squotiety2",
          type: "inputNumber",
          span: 8,
          rules: validatorRules
        },
        {
          label: "备注",
          codeField: "remark",
          type: "inputTxt",
          span: 8
        }
      ],
      // 表单保留的数据
      repairDLRInfoDynamicFieldsData: {
        dlrStatus: "",
        extendInfoId: "",
        dlrId: "",
        taxRate: "",
        preQuotiety: "",
        repairQuotiety: "",
        mtainQuotiety: "",
        limitJe: "",
        squotiety1: "",
        squotiety2: "",
        remark: "",
        updateControlId: ""
      },
      // 会话框的标题
      diaLogTitle: "维修经销商信息",
      // 按钮组控制
      btns: {
        left: [],
        right: [
          { name: "saveRepairForm", label: "保存", event: this.saveRepairForm },
          {
            name: "closeRepairForm",
            label: "返回",
            event: this.closeRepairForm
          }
        ]
      }
    };
  },
  methods: {
    // 关闭维修经销商信息
    closeDialog() {
      // this.isDialogVisible = false
      let feat = false;
      this.$emit("closeDialogIS", feat);
    },
    // 切换tab栏
    handleClick(el) {
      // console.log(el.name)
      console.log(el.name)
      if(el.name==="服务考核系数"){
        mdmOrgDlrAssessCoefficientQueryList()
      }
      this.diaLogTitle = el.name;
    },
    // 保存维修经销商信息
    saveRepairForm() {
      let that = this
      this.$refs["repairDLRInfo"].$children[0].validate(valid => {
        if (valid) {
          delete this.repairDLRInfoDynamicFieldsData.dlrStatus;
          console.log(this.repairDLRInfoDynamicFieldsData);
          mdmOrgDlrExtendInfoMutationSave(
            this.repairDLRInfoDynamicFieldsData
          ).then(res => {
            if (res.result === "1") {
              this.$alert("修改成功", "成功", {
                confirmButtonText: "确定",
                callback(){
                   that.closeRepairForm();
                }
              });
            } else {
               this.$alert("服务器异常", "失败", {
                confirmButtonText: "确定",
                callback(){
                   that.closeRepairForm();
                }
              });
            }
          });
        } else {
          this.$alert("数据输入有误,请确认再试");
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 关闭保存维修经销商信息
    closeRepairForm() {
      this.closeDialog();
    },
    // 渲染维修经销商信息的数据封装
    getDLRData() {
      // if (!this.rowData.index) {
      //   return;
      // }
      this.repairDLRInfoDynamicFieldsData.dlrStatus = this.rowData.dlrStatus;
      this.repairDLRInfoDynamicFieldsData.dlrId = this.rowData.dlrId;
      this.repairDLRInfoDynamicFieldsData.extendInfoId = this.rowData.extendInfoId;
      this.repairDLRInfoDynamicFieldsData.updateControlId = this.rowData.updateControlId;
    },
    // 提交系数按钮
    saveSeAndAssessForm() {
      console.log(this.serverAndAssessFieldsData);
      console.log(this.$refs.serviecAssess.fieldsData);
    }
  },
  watch: {
    rowData() {
      this.getDLRData();
    }
  },
  mounted() {
    this.getDLRData();
  }
};
</script>

<style>
</style>