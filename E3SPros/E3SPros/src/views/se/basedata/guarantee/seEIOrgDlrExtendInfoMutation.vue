<template>
  <div class="filter-container filter-params-crm nedistan">
    <mix-form
      :span="8"
      ref="squotietyMutationTogether"
      :dynamicFormFields="squotietyMutationFormFields"
      :dynamicFieldsData="quotietyMutationFieldsData"
    ></mix-form>
    <div class="filter-container filter-params">
      <mix-button name="saveAndClose" :dynamicButtons="btns"></mix-button>
    </div>
  </div>
</template>

<script>
/**
 * decription: 经销商售后拓展信息>结算系数批量维护
 * by wbhuwy
 */
import mixButton from "@/components/basicComponent/mixButton";
import mixForm from "@/components/basicComponent/mixForm";
export default {
  components: {
    mixForm,
    mixButton
  },
  data() {
    return {
      // 表单控制显示的数据
      squotietyMutationFormFields: [
        {
          label: "新车地区系数",
          codeField: "preQuotiety",
          type: "inputTxt",
          span: 8,
          rules: {
            required: true,
            message: "请输入新车地区系数",
            trigger: "blur"
          }
        },
        {
          label: "保修工时系数",
          codeField: "repairQuotiety",
          type: "inputTxt",
          span: 8,
          rules: {
            required: true,
            message: "请输入保修工时系数",
            trigger: "blur"
          }
        },
        {
          label: "保养地区系数",
          codeField: "mtainQuotiety",
          type: "inputTxt",
          span: 8,
          rules: {
            required: true,
            message: "请输入保养地区系数",
            trigger: "blur"
          }
        },
        {
          label: "备件限用额度",
          codeField: "limitJe",
          type: "inputTxt",
          span: 8,
          rules: {
            required: true,
            message: "请输入备件限用额度",
            trigger: "blur"
          }
        },
        {
          label: "备件结算系数1",
          codeField: "squotiety1",
          type: "inputTxt",
          span: 8,
          rules: {
            required: true,
            message: "请输入备件结算系数1",
            trigger: "blur"
          }
        },
        {
          label: "备件结算系数2",
          codeField: "squotiety2",
          type: "inputTxt",
          span: 8,
          rules: {
            required: true,
            message: "请输入备件结算系数2",
            trigger: "blur"
          }
        },
        {
          label: "税率",
          codeField: "taxRate",
          type: "inputTxt",
          span: 8,
          rules: { required: true, message: "请输入税率", trigger: "blur" }
        },
        {
          label: "备注",
          codeField: "remark",
          type: "inputTxt",
          span: 8
        }
      ],
      // 表单保存的数据
      quotietyMutationFieldsData: {
        preQuotiety: "",
        repairQuotiety: "",
        mtainQuotiety: "",
        limitJe: "",
        squotiety1: "",
        squotiety2: "",
        taxRate: "",
        remark: ""
      },
      // 按钮组控制
      btns: {
        left: [],
        right: [
          { name: "save", label: "保存", event: "saveForm" },
          { name: "close", label: "返回", event: "closeForm" }
        ]
      }
    };
  },
  methods: {
    // 关闭会话框
    closeForm() {
      console.log(11);
      this.$emit("closeDL");
    },
    // 保存表单
    saveForm() {
      this.$refs["squotietyMutationTogether"].$children[0].validate(valid => {
        if (valid) {
          console.log(this.quotietyMutationFieldsData);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style>
</style>