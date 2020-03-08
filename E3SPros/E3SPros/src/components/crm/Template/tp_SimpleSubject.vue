<template>
  <el-form style="width:800px">
    <el-form-item>
      <el-row>
        <el-col :span="24">
          <el-form-item label="题目名称">
            <el-input v-model="form.input" placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form-item label="答案">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="16">
          <el-form-item label="是否启用">
            <el-select v-model="value" placeholder="请选择">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="5">
          <el-button type="primary" @click="save">保存题目</el-button>
        </el-col>
      </el-row>
    </el-form-item>
  </el-form>
</template>
<script>
import QuestionType from "@/components/crm/Select/Common/Questionnaire/QuestionType";
import QuestName from "@/components/crm/textbox/Public/Questionnaire/TitleName";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import Remarks from "@/components/crm/textbox/Complaint/Remarks";
export default {
  name: "tp_judge",
  components: {
    QuestionType,
    TitleName,
    EnableOrDisable,
    // IntentionalModel,
    // Descripts,
    Remarks
  },
  data() {
    return {
      tp_judge: {
        input: "",
        value: "",
        textarea: "",
        options: ""
      }
    };
  }
};
</script>
