<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="expot()">导入</el-button>
      <el-button @click="topicBJ(' ')">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm query-params">
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
                <QuestionType :QuestionType="QuesType" ref="QuesType" />
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
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <!-- 添加题目弹窗 -->
    <!-- <el-dialog title="添加题目" :visible.sync="dialogVisible" width="900px" center>

      <el-dialog title="选项查看" :visible.sync="dialogxx" append-to-body width="900px" center>
        <div class="filter-container filter-title-crm">题目信息</div>
        <div class="filter-container filter-params-crm">
          <el-form>
            <el-row>
              <el-col :span="8">
                <QuestionnaireName :QuestionnaireName="QuesName2" ref="QuesName2" />
              </el-col>
              <el-col :span="8">
                <TitleName />
              </el-col>
              <el-col :span="8">
                <QuestionType :QuestionType="QuesType2" ref="QuesType2" />
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-title-crm">选项信息</div>
        <Table :tabledatas="tabledatas2" @selectView="selectView" ref="table2" />
      </el-dialog>
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
          <el-button size="small" @click="save">确认</el-button>
          <el-button size="small" @click="reset1">重置</el-button>
        </div>
      </div>
      
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <QuestionnaireName :QuestionnaireName="QuesName1" ref="QuesName1" />
            </el-col>
            <el-col :span="8">
              <TitleName :TitleName="titlename" ref="TitleName" />
            </el-col>
            <el-col :span="8">
              <QuestionType :QuestionType="QuesType1" ref="QuesType1" />
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">查询结果</div>
      <Table :tabledatas="tabledatas1" ref="table1" />
    </el-dialog> -->


    <!-- <el-dialog title="编辑" :visible.sync="dialogBJ" width="900px" center>
      <div class="filter-container filter-title-crm">
        编辑
        <div style="float:right">
          <el-button type="primary" size="small" @click="fetchData()">导出问卷</el-button>
          <el-button size="small" @click="topicBJ">编辑题目</el-button>
          <el-button size="small" @click="saveBJ">保存</el-button>
          <el-button size="small" @click="reset1">预览生效</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="22">
              <el-row>
                <el-col :span="8">
                  <QuestionnaireName :QuestionnaireName="QuesName" ref="QuesName"></QuestionnaireName>
                </el-col>
                <el-col :span="8">
                  <BusinessCategory :BusinessCategory="BusinessCategory" ref="BusinessCategory" />
                </el-col>
                <el-col :span="8">
                  <QuestionType :QuestionType="QuesType1" ref="QuesType1" />
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="2">
              <el-button icon="el-icon-plus" @click="changeToggleParam1" class="moreParam">更多</el-button>
            </el-col>
            <el-col :span="22" v-show="toggleParam1" class="toggleParam">
              <el-row>
                <el-col :span="8">
                  <EnableOrDisable :EnableOrDisable="enableordisable" ref="EnableOrDisable" />
                </el-col>
                <el-col :span="8">
                  <ValidOrInvalid :ValidOrInvalid="ValidOrInvalid" ref="ValidOrInvalid" />
                </el-col>
                <el-col :span="8">
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
      <div class="filter-container filter-title-crm">题目信息</div>
     <Table :tabledatas="tabledatas3" ref="table3"></Table>
    </el-dialog> -->

    <!-- 导入弹窗 -->
    <el-dialog title="导入" :visible.sync="exportdialog">
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
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
        :data="tabledatas.data"
        highlight-current-row
        style="width: 100%;height:330px;overflow:auto"
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="topicBJ(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
        <el-table-column
          v-for="item in tabledatas.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          align="center"
        ></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tabledatas.total"
        :page-size="tabledatas.pagesize"
        :current-page="tabledatas.pageindex"
      ></el-pagination>
  </div>
</template>
<script>
import QuestionnaireName from "@/components/crm/Select/Common/Questionnaire/QuestionnaireName";
import TitleName from "@/components/crm/textbox/Public/Questionnaire/TitleName";
import QuestionType from "@/components/crm/Select/Common/Questionnaire/QuestionType";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import BusinessCategory from "@/components/crm/Select/Common/BusinessCategory";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import ValidOrInvalid from "@/components/crm/Select/Whether/ValidOrInvalid";
import QuestionnaireVerNum from "@/components/crm/textbox/Public/Questionnaire/QuestionnaireVersionNumber";
export default {
  name: "QuestionnaireSet",
  components: {
    QuestionnaireName,
    QuestionType,
    Table,
    BusinessCategory,
    EnableOrDisable,
    ValidOrInvalid,
    TitleName,
    QuestionnaireVerNum
  },
  data() {
    return {
      toggleParam: false,
      toggleParam1:false,
      dialogBJ:false,
      tabledatas: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        data: [
          {
            paperName: "1",
            questionName: "王小虎",
            maxCount: "1类",
            questionType:"问卷",
            questionCode:'3',
            questionId:'1234',
            subTe:"有效"
          },
          {
            paperName: "1",
            questionName: "张小虎",
            maxCount: "1类",
            questionType:"问卷",
            questionCode:'3',
            questionId:'1234',
            subTe:"有效"
          }
        ],
        colnames: [
          { label: "问卷编码", value: "paperName" },
          { label: "业务类型", value: "questionName" },
          { label: "问卷类别", value: "maxCount" },
          { label: "问卷名称", value: "questionType" },
          { label: "题目数量", value: "questionCode" },
          { label: "问卷版本号", value: "questionId" },
          { label: "是否生效", value: "subTe" },
          { label: "状态", value: "subType" },
          { label: "创建人", value: "creator" },
          { label: "创建时间", value: "createdDate" },
          { label: "修改人", value: "modifier" },
          { label: "最后修改时间", value: "lastUpdatedDate" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcBuQyQuestionQueryFindAll,
          apiQueryRow: [
            "iqyTopic",
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
            column1: "",
            iqyTopic: "",
            quesType: ""
          }
        }
      },
      tabledatas1: {
        // 操作列
        ismuti: true,
        isoperat: true,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        haveView: true,
        colnames: [
          { label: "问卷名称", value: "questionType" },
          { label: "题目编码", value: "questionCode" },
          { label: "题目类型", value: "questionId" },
          { label: "题目名称", value: "subType" }
        ],
        data: [
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-08",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-06",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-07",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [],
          params: {}
        }
      },
      tabledatas2: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "选项序号", value: "questionType" },
          { label: "选项名", value: "questionCode" },
          { label: "图片路径", value: "questionId" },
          { label: "是否允许输入", value: "subType" },
          { label: "输入方式", value: "subType" }
        ],

        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [],
          params: {}
        }
      },
      tabledatas3: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "题目名称", value: "questionType" },
          { label: "题目类型", value: "questionCode" },
          { label: "答题序号", value: "questionId" }
        ],
        total:'',
        pagesize:10,
        pagesize:1,
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: [],
          params: {}
        }
      },
      QuesName: {
        value: ""
      },
      QuestionnaireVerNum: {
        input: ""
      },
      QuesName1: {
        value: ""
      },
      QuesName2: {
        value: ""
      },
      QuesType: {
        value: ""
      },
      QuesType1: {
        value: ""
      },
      QuesType2: {
        value: ""
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
      titlename: {
        input: ""
      },
      dialogVisible: false,
      dialogxx: false,
      exportdialog: false,
      fileList: []
    };
  },
  methods: {
    query: function() {
      //this.tabledatas.queryObj.params = this.$refs.QuesName.value;
      //this.tabledatas.queryObj.params = this.$refs.QuesType.value;
      this.$refs.table.getData();
    },
    fetchData: function() {
      // this.tabledatas.queryObj.params = this.$refs.QuesName.value;
      // this.tabledatas.queryObj.params = this.$refs.QuesType.value;
      // this.tabledatas.queryObj.params = this.$refs.titlename.input;
      this.$refs.table.getData();
    },
    reset: function() {
      this.$refs.QuesName.reset();
      this.$refs.QuesType.reset();
      this.$refs.titlename.reset();
    },
    reset1: function() {
      this.$refs.TitleName.reset();
    },
    add: function() {
      let that = this;
      that.dialogVisible = true;
    },
    save(){},
    saveBJ(){

    },
    selectView: data => {
      console.log(data);
      let that = this;
      that.dialogxx = true;
    },
    handleBJ:function(index,rowData){
      let that=this;
      that.dialogBJ=true;
      that.QuesName.value=rowData.questionType
      that.BusinessCategory.value=rowData.questionName
      that.QuestionnaireVerNum.input=rowData.questionId
      that.ValidOrInvalid.value=rowData.subTe
    },
    topicBJ(row){
      let that=this
      that.$router.push({name:'TopicEdit',params:row})
    },
    expot: function() {
      let that = this;
      that.exportdialog = true;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    changeToggleParam1(){
      this.toggleParam1 = !this.toggleParam1;
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
.filter-params-crm .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
.toggleParam {
  z-index: 1;
}
</style>
