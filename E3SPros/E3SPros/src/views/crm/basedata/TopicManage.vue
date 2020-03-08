<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="expot()">导入</el-button>
      <el-button @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <!-- <el-col :span="6">
                <QuestionnaireName :QuestionnaireName="QuesName" ref="QuesName"></QuestionnaireName>
              </el-col> -->
              <el-col :span="6">
                <QuestionType :QuestionType="QuesType" ref="QuesType" />
              </el-col>
              <el-col :span="6">
                <TitleName :TitleName="titlename" ref="titlename" />
              </el-col>
            </el-row>
          </el-col>
          <!-- <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              
            </el-row>
          </el-col>-->
        </el-row>
      </el-form>
    </div>
    <el-dialog title="新增题目" :visible.sync="dialogVisible" append-to-body style="height:500px" width="700px" center>
      <el-row>
        <el-col :span="12">
          <el-form label-position="right" label-width="80px">
            <el-row>
              <el-col :span="16">
                <QuestionType :QuestionType="QuesType1"  ref='QuesType1'/>
              </el-col>
            </el-row>
          </el-form>
          <SingleChoice :SingleChoice="SingleChoice" @closedialog="closesingle" ref="SingleChoice" />
        </el-col>
      </el-row>
    </el-dialog>
    <el-dialog title="导入" :visible.sync="exportdialog" append-to-body modal-append-to-body >
      <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :auto-upload="false"
      >
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="submitUpload"
        >上传到服务器</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-dialog>
    <div class="filter-container filter-title">查询结果</div>
    <Table :tabledatas="tabledatas" @clickedit="edit" ref="table"></Table>
  </div>
</template>
<script>
import QuestionnaireName from "@/components/crm/Select/Common/Questionnaire/QuestionnaireName";
import QuestionType from "@/components/crm/Select/Common/Questionnaire/QuestionType";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import TitleName from "@/components/crm/textbox/Public/Questionnaire/TitleName";
import SingleChoice from "@/components/crm/Template/SingleChoice";
export default {
  name: "TopicManage",
  components: {
    QuestionnaireName,
    QuestionType,
    Table,
    TitleName,
    SingleChoice,
  },
  data() {
    return {
      toggleParam: false,
      tabledatas: {
        // 操作列
        isoperat: true,
        havedistrbute: false,
        haveEdit: true,
        haveDel: false,
        colnames: [
          // { label: "问卷名称", value: "paperName" },
          { label: "题目名称", value: "questionName" },
          { label: "选项数量", value: "maxCount" },
          { label: "题目类型", value: "questionType" },
          { label: "创建人", value: "creator" },
          { label: "创建时间", value: "createdDate" },
          { label: "修改人", value: "modifier" },
          { label: "最后修改时间", value: "lastUpdatedDate" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "paperName",
            "questionName",
            "maxCount",
            "questionType",
            "creator",
            "createdDate",
            "modifier",
            "lastUpdatedDate",
            "questionCode",
            "questionId",
            "subType"
          ],
          params: {
            //paperId: "",
            questionType: "",
            querstionName: ""
          }
        }
      },
      QuesName: {
        value: ""
      },
      QuesType: {
        value: ""
      },
       QuesType1: {
        value: ""
      },
      titlename: {
        input: ""
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
      dialogVisible: false,
      exportdialog:false,
      fileList: []
    };
  },
  methods: {
    query: function() {
      let that=this
      //this.tabledatas.queryObj.params.paperId = this.$refs.QuesName.value;
      that.tabledatas.queryObj.params.questionType = that.$refs.QuesType.value;
      that.tabledatas.queryObj.params.querstionName = that.$refs.titlename.input;
      that.$refs.table.getData();
    },
    reset: function() {
      //this.$refs.QuesName.reset();
      this.$refs.QuesType.reset();
      this.$refs.titlename.reset();
    },
    add: function() {
      let that = this;
      that.dialogVisible = true;
      that.SingleChoice.input=''
      that.$refs.SingleChoice.getData()
    },
    edit(row){
      let that=this
      that.dialogVisible = true;
      that.SingleChoice.input=row.questionName
      that.QuesType1.value=row.questionType
      that.$refs.SingleChoice.getData()
      that.$refs.QuesType1.getnewData()
    },
    closesingle(){
      let that=this
      that.dialogVisible=false
    },
    expot:function(){
      let that = this;
      that.exportdialog = true;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>
<style>

</style>
