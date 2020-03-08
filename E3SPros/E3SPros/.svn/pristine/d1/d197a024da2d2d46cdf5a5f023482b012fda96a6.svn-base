<template>
<!-- 新增弹框 -->
  <el-dialog
    title="新增/修改"
    :visible.sync="newDataVisible"
    center
    :append-to-body="true"
    :close-on-click-modal="false"
    width="70%"
    @close="closeDialog"
  >
    <div class="filter-container filter-params">
      <!-- 表单组件 -->
      <mix-form
        ref="detailForm"
        :isSearch="true"
        :dynamicFormFields="detailFields"
        :dynamicFieldsData="detailFieldsData"
      ></mix-form>
      <!-- 公告车型组件 -->
      <CarTypeModal :isMul="true" ref="multiCarType" />
      <!-- 按钮 -->
      <mix-button name="Btns" :dynamicButtons="btns"></mix-button>
    </div>
  </el-dialog>
</template>

<script>
import mixForm from "@/components/basicComponent/mixForm";
import mixButton from "@/components/basicComponent/mixButton";
import CarTypeModal from "@/components/se/CarTypeModal/CarTypeModal";

export default {
  name: "seMaintenanceAdd",
  components: {
    mixForm,
    mixButton,
    CarTypeModal
  },
  props: {
    newDataVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },

  data() {
    
    return {
      // 创建按钮的参数
      btns:[
        {name:"dataSave",text:'保存',position:"right",clickEvent:"",argument:{type:'dataSave'}},
        {name:"closeDL",text:"关闭",position:"right",clickEvent:"",argument:{type:'closeDL'}}
      ],
      detailFields: [
        {
          label: "公告车型:",
          span: 8,
          codeField: "CarTypeModal",
          type: "inputTxt",
          suffixIcon: "el-icon-search",
          sendCode: () => null,
          focusCode: () => null,
          rules: {
            required: true,
            message: "公告车型不能为空",
            trigger: "blur"
          },
          event: this.openCarType
        },
        {
          label: "启用日期:",
          codeField: "beginEnableDate",
          type: "inputDate",
          span: 8,
          rules: { required: true, message: "请输入日期", trigger: "blur" }
        }
      ],

      detailFieldsData: {}
    };
  },
  methods: {
    openCarType() {
      // 调用出公告弹框组件
      this.$refs.multiCarType.open();
    },
    //保存
    dataSave() {},



    closeDialog() {
      this.newDataVisible=false;
      
      this.$emit("closeAddDl", false);
    }
  }
};
</script>

<style>
</style>