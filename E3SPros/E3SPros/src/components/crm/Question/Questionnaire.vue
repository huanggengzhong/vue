<template >
  <div class="app-container app-container-table">
    <div class="filter-container filter-params-crm">
      <br>
      <el-form>
        <el-row>
          <crmTextInput compKey="compKey1" labelName="联系人名称" :code="contactName" codeField="uid" :isRequire="false" :span="6"></crmTextInput>
          <lookupvalue compKey="compKey6" :isMul="false" labelName="性别" :code="gender" codeField="gender" :span="6"></lookupvalue>
          <crmTextInput compKey="compKey3" labelName="电话" :code="phone" codeField="custFullName" :isRequire="false" :span="6"></crmTextInput>
        </el-row>
      </el-form>
    </div>

    <div class="queststyle">
      <div>
        <div>Q1　是否关注具体车型（例如Q50L/QX60）？</div>
        <el-radio-group v-model="radio1">
          <el-radio :label="3">是</el-radio>
          <el-radio :label="6">否</el-radio>
        </el-radio-group>
      </div>
      <div>
        <div>Q2　如果各方面条件都合适的话，您计划在多长时间内购买车辆呢？</div>
        <el-radio-group v-model="radio2">

          <el-radio :label="3">一年后</el-radio>
          <el-radio :label="6">一年内</el-radio>
          <el-radio :label="9">三个月</el-radio>
          <el-radio :label="12">一周</el-radio>
        </el-radio-group>
      </div>
      <div>
        <div>Q3　请问您是否通过4S店或朋友那里了解和体验过呢？</div>
        <el-radio-group v-model="radio3">
          <el-radio :label="3">是</el-radio>
          <el-radio :label="6">否</el-radio>
        </el-radio-group>
      </div>
      <div>
        <div>Q4　请问如果购车的话，您是在XXX城市上牌吗？</div>
        <el-radio-group v-model="radio4">
          <el-radio :label="3">是</el-radio>
          <el-radio :label="6">否</el-radio>
        </el-radio-group>
      </div>
      <div>
        <div>Q5　请问您是否还考虑了其它品牌的车型呢？</div>
        <el-radio-group v-model="radio5">
          <el-radio :label="3">是</el-radio>
          <el-radio :label="6">否</el-radio>
        </el-radio-group>
      </div>
      <div class="questButtonlocat">
        <el-button size="small" type="primary" @click="submitQuest()">提交</el-button>
      </div>
    </div>

    <div class="overlay" v-show="isShowPrompt">
      <div class="prompt-box">
        <header>
          <span>提示</span>
          <a href="javascript:;" @click="isShowPrompt = false">&times;</a>
        </header>
        <p>{{ promptText }}</p>
        <footer>
          <span @click="isShowPrompt = false; iterator && iterator.next()">确定</span>
          <span @click="isShowPrompt = false">取消</span>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
//import Store from '../store.js';
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmTextInput from "@/components/crm/textbox/crmTextInput";
import crmdatePicker from "@/components/crm/Time/crmdatePicker";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";

export default {
  name: "Questionnaire",
  components: {
    crmTextInput,
    crmdatePicker,
    lookupvalue
  },
  data() {
    return {
      radio1: "",
      radio2: "",
      radio3: "",
      radio4: "",
      radio5: "",
      contactName: "",
      gender: "",
      phone: "",
      quData: {},
      //questions: [],
      chkList: [],
      radList: [],
      answers: {},
      promptText: "",
      isShowPrompt: false,
      questions: [
        {
          subjectCode: "TM00001",
          subjectTopic: "最喜欢的运动？",
          subType: "1",
          subTypeName: "单选题",
          isMandatory: true,
          options: [
            { subSn: "a", subSnName: "足球", subListId: "001" },
            { subSn: "b", subSnName: "篮球", subListId: "002" },
            { subSn: "c", subSnName: "排球", subListId: "003" },
            { subSn: "d", subSnName: "网球", subListId: "004" }
          ]
        },
        {
          subjectCode: "TM00002",
          subjectTopic: "最喜欢的运动2？",
          subType: "2",
          subTypeName: "多选题",
          isMandatory: false,
          options: [
            { subSn: "a", subSnName: "足球", subListId: "001" },
            { subSn: "b", subSnName: "篮球", subListId: "002" },
            { subSn: "c", subSnName: "排球", subListId: "003" },
            { subSn: "d", subSnName: "网球", subListId: "004" }
          ]
        },
        {
          subjectCode: "TM00003",
          subjectTopic: "最喜欢的运动3？",
          subType: "4",
          subTypeName: "简答题",
          isMandatory: false,
          options: []
        }
      ]
    };
  },

  methods: {}
};
</script>

<style scoped lang="scss">
.queststyle {
  background-color: #fff;
  margin-left: 6%;
  margin-top: 1%;
}
.app-container-table {
  background-color: #fff;
  height: 100%;
  line-height: 12px;
}
.questButtonlocat {
  margin-left: 29%;
}
.app-container-table {
  line-height: 26px;
  font-size: 13px;
}
.chooselocation {
  margin-left: 3px;
}
.el-radio-group {
  margin-left: 8px;
}
</style>
