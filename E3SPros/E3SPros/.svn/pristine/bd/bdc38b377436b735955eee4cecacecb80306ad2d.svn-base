<template>
  <el-dialog
    title="新增题目"
    :visible.sync="PopupVisible"
    append-to-body
    style="height:500px"
    width="700px"
    center
  >
    <el-row>
      <el-col :span="12">
        <el-form label-position="right" label-width="80px">
          <el-row>
            <el-col :span="16">
              <QuestionType :QuestionType="QuesType1" ref="QuesType1" />
            </el-col>
          </el-row>
        </el-form>
        <SingleChoice :SingleChoice="SingleChoice" ref="SingleChoice" />
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
import QuestionType from "@/components/crm/Select/Common/Questionnaire/QuestionType";
import SingleChoice from "@/components/crm/Template/SingleChoice";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "transfer",
  components: {
    QuestionType,
    SingleChoice
  },
  props: { PopupsVisible: Boolean },
  data() {
    return {
      QuesType1: {
        value: ""
      },
      SingleChoice:{
        input:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        pulsor:'',
        desc:'',
        value:''
      },
      PopupVisible: this.PopupsVisible
    };
  },
  methods: {
    init() {
      let that = this;
      that.PopupVisible = this.PopupsVisible;
    },
    closesingle(){
      let that=this
      that.PopupsVisible=false
    },
    transfer() {}
  }
};
</script>