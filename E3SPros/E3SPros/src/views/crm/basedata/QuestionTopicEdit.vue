<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" size="small" @click="fetchData()">题目库</el-button>
      <el-button size="small" @click="saveBJ()">保存</el-button>
    </div>
    <div class="filter-container filter-title-crm">问卷信息</div>
    <div class="filter-container filter-params-crm  query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <QuestionnaireName :QuestionnaireName="QuesName" ref="QuesName"></QuestionnaireName>
              </el-col>
              <el-col :span="6">
                <BusinessCategory :BusinessCategory="BusinessCategory" ref="BusinessCategory" />
              </el-col>
              <el-col :span="6">
                <QuestionType :QuestionType="QuesType" ref="QuesType1" />
              </el-col>
              <el-col :span="6">
                <EnableOrDisable :EnableOrDisable="enableordisable" ref="EnableOrDisable" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <ValidOrInvalid :ValidOrInvalid="ValidOrInvalid" ref="ValidOrInvalid" />
              </el-col>
              <el-col :span="6">
                <QuestionnaireVerNum
                  :QuestionnaireVersionNumber="QuestionnaireVerNum"
                  ref="QuestionnaireVerNum"
                />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-params-crm query-params kaoyou">
      <div>
        <el-button type="primary" size="small" @click="singleTopic">单选题</el-button>
        <el-button type="primary" size="small" @click="mutiTopic">多选题</el-button>
        <el-button type="primary" size="small" @click="judgeTopic">判断题</el-button>
        <el-button type="primary" size="small" @click="simpleTopic">简答题</el-button>
      </div>
      <div v-for="(item,index) in dynamicTopic" :key="index" class="topic">
        <div v-if="item.subType==1">
          <div class="title">{{index+1+'.'+item.subjectTopic}}</div>
          <el-radio
            v-model="radio"
            v-for="key in item.pcBuQySubjectExtend"
            :key="key.subSn"
            :label="key.subListId"
          >{{key.subSnName}}</el-radio>
        </div>
        <div v-if="item.subType==2">
          <div class="title">{{index+1+'.'+item.subjectTopic}}</div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox
              v-for="key in item.pcBuQySubjectExtend"
              :key="key.subSn"
              :label="key.subListId"
            >{{key.subSnName}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div v-if="item.subType==3">
          <div class="title">{{index+1+'.'+item.subjectTopic}}</div>
          <el-radio
            v-model="radio1"
            v-for="key in item.pcBuQySubjectExtend"
            :key="key.subSn"
            :label="key.subListId"
          >{{key.subSnName}}</el-radio>
        </div>
        <div v-if="item.subType==4">
          <div class="title">{{index+1+'.'+item.subjectTopic}}</div>
        </div>
        <div>
          <el-button type="primary" size="small" @click="TopicBJ(item)">编辑</el-button>
          <el-button type="primary" size="small" @click="TopicUp(index)">上移</el-button>
          <el-button type="primary" size="small" @click="TopicDown(index)">下移</el-button>
          <el-button type="primary" size="small" @click="TopicTop(index)">最上</el-button>
          <el-button type="primary" size="small" @click="TopicBottom(index)">最下</el-button>
          <el-button type="primary" size="small" @click="TopicDel(index)">删除</el-button>
        </div>
      </div>
    </div>
    <!-- 单选题弹窗 -->
    <el-dialog title="编辑" :visible.sync="dialogVisible" style="height:500px" width="700px" center>
      <el-row>
        <el-col :span="12">
          <SingleChoice :SingleChoice="SingleChoice" ref="SingleChoice" />
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 多选题弹窗 -->
    <el-dialog title="编辑" :visible.sync="dialogmuti" style="height:500px" width="700px" center>
      <el-row>
        <el-col :span="12">
          <DoubleChoice :DoubleChoice="DoubleChoice" ref="DoubleChoice" />
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 判断题弹窗 -->
    <el-dialog title="编辑" :visible.sync="dialogjudge" style="height:500px" width="700px" center>
      <el-row>
        <el-col :span="12">
          <judge :judge="judge" ref="judge" />
        </el-col>
      </el-row>
    </el-dialog>
    <!-- 问答题 -->
    <el-dialog title="编辑" :visible.sync="dialogask" style="height:500px" width="700px" center>
      <el-row>
        <el-col :span="12">
          <SingleChoice :SingleChoice="SingleChoice" ref="SingleChoice" />
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import QuestionnaireName from "@/components/crm/Select/Common/Questionnaire/QuestionnaireName";
import BusinessCategory from "@/components/crm/Select/Common/BusinessCategory";
import QuestionType from "@/components/crm/Select/Common/Questionnaire/QuestionType";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import ValidOrInvalid from "@/components/crm/Select/Whether/ValidOrInvalid";
import QuestionnaireVerNum from "@/components/crm/textbox/Public/Questionnaire/QuestionnaireVersionNumber";
import SingleChoice from "@/components/crm/Template/SingleChoice";
import DoubleChoice from "@/components/crm/Template/tp_DoubleChoice"
import judge from "@/components/crm/Template/tp_Judge"
export default {
  name: "TopicEdit",
  components: {
    QuestionnaireName,
    BusinessCategory,
    QuestionType,
    EnableOrDisable,
    ValidOrInvalid,
    QuestionnaireVerNum,
    SingleChoice,
    DoubleChoice,
    judge
  },
  data() {
    return {
      dynamicTopic: [
        {
          subjectTopic: "最喜欢的运动？",
          subType: "1",
          pcBuQySubjectExtend: [
            { subSn: "a", subSnName: "足球", subListId: "001" },
            { subSn: "b", subSnName: "篮球", subListId: "002" },
            { subSn: "c", subSnName: "排球", subListId: "003" },
            { subSn: "d", subSnName: "网球", subListId: "004" }
          ]
        }
      ],
      radio: "",
      radio1:"",
      dialogVisible: false,
      dialogmuti: false,
      dialogjudge: false,
      dialogask: false,
      checkList: "",
      toggleParam: false,
      QuesName: {
        value: ""
      },
      QuestionnaireVerNum: {
        input: ""
      },
      ValidOrInvalid: {
        value: ""
      },
      BusinessCategory: {
        value: ""
      },
      enableordisable: {
        value: ""
      },
      QuesType:{
        value:""
      },
      SingleChoice: {
        input: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        pulsor: "",
        desc: "",
        value: ""
      },
      DoubleChoice:{
        input: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        pulsor: "",
        desc: "",
        value: ""
      },
      judge:{
        input: "",
        value1:"",
        desc: "",
        value: ""
      }
    };
  },
  mounted(){
    this.$nextTick(function(){
      this.init()
    })
  },
  methods: {
    init(){
      let that=this
      if(this.$route.params){
        let data=this.$route.params
        that.QuesName.value=data.questionType
        that.$refs.QuesName.getNewData()
        that.BusinessCategory.value=data.questionName
        that.$refs.BusinessCategory.getNewData()
        that.QuestionnaireVerNum.input=data.questionId
        that.$refs.QuestionnaireVerNum.getData()
      }
    },
    singleTopic() {
      let that = this;
      let singgle = {
        subjectTopic: "请编辑题目",
        subType: "1",
        pcBuQySubjectExtend: [
          { subSn: "a", subSnName: "选项1", subListId: "001" },
          { subSn: "b", subSnName: "选项2", subListId: "002" },
          { subSn: "c", subSnName: "选项3", subListId: "003" },
          { subSn: "d", subSnName: "选项4", subListId: "004" }
        ]
      };
      that.dynamicTopic.push(singgle);
    },
    mutiTopic() {
      let that = this;
      let muti = {
        subjectTopic: "请编辑题目",
        subType: "2",
        pcBuQySubjectExtend: [
          { subSn: "a", subSnName: "选项1", subListId: "001" },
          { subSn: "b", subSnName: "选项2", subListId: "002" },
          { subSn: "c", subSnName: "选项3", subListId: "003" },
          { subSn: "d", subSnName: "选项4", subListId: "004" }
        ]
      };
      that.dynamicTopic.push(muti);
    },
    judgeTopic(){
      let that = this;
      let judge = {
        subjectTopic: "请编辑题目",
        subType: "3",
        pcBuQySubjectExtend: [
          { subSn: "a", subSnName: "是", subListId: "1" },
          { subSn: "b", subSnName: "否", subListId: "0" },
        ]
      };
      that.dynamicTopic.push(judge);
    },
    simpleTopic(){},
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    TopicBJ(obj) {
      let that = this;
      if (obj.subType == 1) {
        that.dialogVisible = true;
        that.SingleChoice.input = obj.subjectTopic;
        that.SingleChoice.option1 = obj.pcBuQySubjectExtend[0].subSnName;
        that.SingleChoice.option2 = obj.pcBuQySubjectExtend[1].subSnName;
        that.SingleChoice.option3 = obj.pcBuQySubjectExtend[2].subSnName;
        that.SingleChoice.option4 = obj.pcBuQySubjectExtend[3].subSnName;
        this.$refs.SingleChoice.getData();
      } else if (obj.subType == 2) {
        that.dialogmuti = true;
        that.DoubleChoice.input = obj.subjectTopic;
        that.DoubleChoice.option1 = obj.pcBuQySubjectExtend[0].subSnName;
        that.DoubleChoice.option2 = obj.pcBuQySubjectExtend[1].subSnName;
        that.DoubleChoice.option3 = obj.pcBuQySubjectExtend[2].subSnName;
        that.DoubleChoice.option4 = obj.pcBuQySubjectExtend[3].subSnName;
        this.$refs.DoubleChoice.getData();
      } else if (obj.subType == 3) {
        that.dialogjudge = true;
        that.judge.input = obj.subjectTopic;
        that.judge.value = obj.pcBuQySubjectExtend[0].subListId;
        this.$refs.judge.getData();
      } else if (obj.subType == 4) {
        that.dialogask = true;
      }
    },
    TopicDel(index) {
      let that = this;
      that.dynamicTopic.splice(index, 1);
    },
    TopicUp(index) {
      let that = this;
      if (index > 0) {
        that.dynamicTopic[index] = that.dynamicTopic.splice(
          index - 1,
          1,
          that.dynamicTopic[index]
        )[0];
      }
    },
    TopicDown(index) {
      let that = this;
      if (index < that.dynamicTopic.length - 1) {
        that.dynamicTopic[index] = that.dynamicTopic.splice(
          index + 1,
          1,
          that.dynamicTopic[index]
        )[0];
      }
    },
    TopicTop(index) {
      let that = this;
      that.dynamicTopic.unshift(that.dynamicTopic.splice(index, 1)[0]);
    },
    TopicBottom(index) {
      let that = this;
      that.dynamicTopic.push(that.dynamicTopic.splice(index, 1)[0]);
    }
  }
};
</script>
<style>
.topic {
  margin-top: 10px;
}
.kaoyou{
  text-align: left;
}
</style>
