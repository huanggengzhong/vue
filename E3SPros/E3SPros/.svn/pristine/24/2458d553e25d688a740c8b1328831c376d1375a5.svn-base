<template>
  <el-dialog
    title="数据维护"
    :visible.sync="flowDialogVisible"
    :close-on-click-modal="false"
    width="65%"
    @close="close1('ruleForm',0)"
    :append-to-body="true"
  >
    <div class="filter-container filter-params">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="ruleForm">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="mobileClassNumber">
              <lableName curLabelName="流动类别编号" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="ruleForm.mobileClassNumber"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="mobileClassName">
              <lableName curLabelName="流动类别名称" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="ruleForm.mobileClassName"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="upperStandardValue">
              <lableName curLabelName="标准值上限" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="ruleForm.upperStandardValue"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="lowerStandardValue">
              <lableName curLabelName="标准值下限" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="ruleForm.lowerStandardValue"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="coefficient">
              <lableName curLabelName="系数" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="ruleForm.coefficient" clearable size="small" :readonly="false" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="monthlyPurchaseFrequency">
              <lableName curLabelName="每月采购次数" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input
                v-model="ruleForm.monthlyPurchaseFrequency"
                clearable
                size="small"
                :readonly="false"
              />
            </el-form-item>
          </el-col>
          <LookupValue
            :span="8"
            :isMul="false"
            :isshow="true"
            :code="ruleForm.orderModeName"
            labelName="订货方式"
            @changeCode="getRepairStatus1"
          />
          <LookupValue
            :span="8"
            :isMul="false"
            :isshow="true"
            :code="ruleForm.availableName"
            labelName="状态"
            @changeCode="getRepairStatus2"
          />
          <el-col :span="4">
            <el-checkbox v-model="ruleForm.systemData" >&nbsp;&nbsp;&nbsp;&nbsp;系统数据</el-checkbox>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item prop="remark">
              <lableName curLabelName="备注" :isShowLabel="true" :isRequire="false"></lableName>
              <el-input v-model="ruleForm.remark" clearable size="small" :readonly="false" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="24">
          <el-col :span="24">
            <el-button @click="save('ruleForm')" type="primary">保存</el-button>
            <el-button @click="close1('ruleForm',0)" type="primary">取消</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-dialog>
</template>

<script>
import LookupValue from "@/components/org/LookupValue/index";
import lableName from "@/components/lableName";

export default {
  components: {
    LookupValue,
    lableName
  },

  props: {
    flowDialogVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },

  data() {
    return {
      ruleForm: {
        mobileClassId: "",
        mobileClassNumber: "",
        mobileClassName: "",
        upperStandardValue: "",
        lowerStandardValue: "",
        coefficient: "",
        orderModercode: "",
        orderModeName: "",
        monthlyPurchaseFrequency: "",
        availablecode: "",
        availableName: "",
        systemData: "",
        remark: "",
        updateControlId: ""
      }
    };
  },

  created() {},

  methods: {
    //获得父组件的值
    setEditData(val) {   //已获得值
        this.ruleForm.mobileClassNumber = val[0].mobileClassNumber;
    },

    //选择传值给父组件
    close1(formName, a) {
      if (this.$refs[formName] !== undefined) {
        this.$refs[formName].resetFields();
      }
      var str = false + " " + a;
      // console.log("弹窗:"+str)
      this.$emit("close1", str);
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .el-dialog .el-form-item {
  margin-bottom: 0px;
}
</style>
