<template>
  <el-form label-position="right" label-width="80px">
    <!-- <el-row>
        <el-col :span="14">
          <QuestionType :QuestionType="form"></QuestionType>
        </el-col>
    </el-row>-->
    <el-row>
      <el-col :span="24">
        <el-form-item label="题目名称">
          <el-input v-model="form.input" placeholder="请输入"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16">
        <el-form-item label="题目选项">
          <el-select v-model="form.value" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="16">
        <el-form-item label="是否启用">
          <el-select v-model="form.value1" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" @click="save">保存题目</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
import QuestionType from "@/components/crm/Select/Common/Questionnaire/QuestionType";
import TitleName from "@/components/crm/textbox/Public/Questionnaire/TitleName";
import op_QuestionOptions from "@/components/crm/Select/Common/Questionnaire/op_QuestionOptions";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
export default {
  name: "tp_judge",
  components: {
    QuestionType,
    TitleName,
    op_QuestionOptions,
    EnableOrDisable,
    // IntentionalModel,
    // Descripts,
    Remarks
  },
  props: {
    judge: {
      input: {
        type: String,
        default: ""
      },
      desc: {
        type: String,
        default: ""
      },
      value: {
        type: String,
        default: ""
      },
      value1: {
        type: String,
        default: ""
      }
    }
  },
  data() {
    return {
      form: {
        input: this.judge.input,
        value: this.judge.value,
        desc: this.judge.desc,
        value1: this.judge.value1
      }
    };
  },
  methods: {
    getData(){
      let that=this
      for(let key in that.form){
        that.form[key]=this.judge[key]
      }
    }
  }
};
</script>
<style scoped>
.el-form-item .el-form-item__content {
  margin-left: 0px;
}
</style>

