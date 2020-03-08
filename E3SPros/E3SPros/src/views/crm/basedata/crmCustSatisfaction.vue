<!--
* 描述: 客户满意度设置
* 创建人: zouzx
* 创建时间: 2019-07-25
* 记录：
*  20190725 新建 zouzx
-->
<template>
<div class="app-container app-container-table">
  <div class="filter-container filter-button">
    <el-button type="primary" @click="query">查询</el-button>
      <el-button @click="showdialog">新增</el-button>
      <el-button @click="reset">重置</el-button>
  </div>
  <div class="filter-container filter-title">查询条件</div>
  <div class="filter-container filter-params">
    <el-form label-position="right">
      <el-row>
        <el-col :span="22">
          <el-col :span="6"><ServiceType ref="ServiceType" :ServiceType="cxServerType"></ServiceType></el-col>
          <el-col :span="6"><SatisfactionType ref="SatisfactionType" :SatisfactionType="cxSatisfction"></SatisfactionType></el-col>
          <el-col :span="6"><ExecutionPremise ref="ExecutionPremise" :ExecutionPremise="cxExecution"></ExecutionPremise></el-col>
          <el-col :span="6"><EnableOrDisable ref="EnableOrDisable" :EnableOrDisable="cxStatus"></EnableOrDisable></el-col>
        </el-col>
        <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
        <el-col :span="22" v-show="toggleParam" class="toggleParam">
      <el-row>
          <el-col :span="6"><ServiceBigClass ref="ServiceBigClass" :ServiceBigClass="cxBigClass"></ServiceBigClass></el-col>
          <el-col :span="6"><ReturnVisitWay ref="ReturnVisitWay" :ReturnVisitWay="cxReview"></ReturnVisitWay></el-col>
          <el-col :span="6"><Brand ref="Brand" :Brand="cxBrand"></Brand></el-col>
          <el-col :span="6"><MessageModel ref="MessageModel" :MessageModel="cxMessModel"></MessageModel></el-col>
      </el-row>
        </el-col>
      </el-row>
    </el-form>
  </div>
  <el-dialog :visible.sync="dialogVisible" style="height:300px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" width="750px" class="dialog" title="客户满意度规则编辑" >
      <div class="filter-container filter-params filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="8"><ServiceType ref="ServiceType" :ServiceType='whServerType'></ServiceType></el-col>
          <el-col :span="8"><SatisfactionType ref="SatisfactionType" :SatisfactionType='whSatisfaction'></SatisfactionType></el-col>
          <el-col :span="8"><ExecutionPremise ref="ExecutionPremise" :ExecutionPremise="whExecution"></ExecutionPremise></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><ServiceBigClass ref="ServiceBigClass" :ServiceBigClass="whBigClass"></ServiceBigClass></el-col>
          <el-col :span="8"><ReturnVisitWay ref="ReturnVisitWay" :ReturnVisitWay="whreview"></ReturnVisitWay></el-col>
          <el-col :span="8"><Brand ref="Brand" :Brand="whBrand"></Brand></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><RevisitScore ref="RevisitScore" :RevisitScore='whScore'></RevisitScore></el-col>
          <el-col :span="8"><MessageModel ref="MessageModel" :MessageModel="whMessage"></MessageModel></el-col>
          <el-col :span="8"><EnableOrDisable ref="EnableOrDisable" :EnableOrDisable="whStatus"></EnableOrDisable></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"></el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8" style="float:right"><el-button type="primary" @click="save">保存</el-button></el-col>
        </el-row>
      </el-form>
      </div>
    </el-dialog>
  <div class="filter-container filter-title">查询结果</div>
  <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:350px"
      max-height="350px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handle(scope.$index, scope.row)">修改</el-button>
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
      :total="9"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
    ></el-pagination>
</div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import ServiceType from "@/components/crm/Select/Complaint/ServiceType";//服务类型
import SatisfactionType from "@/components/crm/Select/Complaint/Satisfaction/SatisfactionType";//满意度类型
import ExecutionPremise from "@/components/crm/Select/Complaint/Satisfaction/ExecutionPremise";//业务流程
import ReturnVisitWay from "@/components/crm/Select/Clue/ReturnVisit/ReturnVisitWay";//回访方式
import ServiceBigClass from '@/components/crm/Select/Common/ServiceBigClass';//服务大类
import EnableOrDisable from '@/components/crm/Select/Whether/EnableOrDisable';//是否启用
import Brand from '@/components/crm/Select/Common/ResponsibleArea/Brand';//品牌
import MessageModel from '@/components/crm/EjectWindows/MessageModel';//短信模板
import Others from '@/components/crm/textbox/Public/Message/Others';//其他
import SendWay from '@/components/crm/Select/Common/SendWay';//发送方式
import RevisitScore from '@/components/crm/textbox/Public/Satisfaction/RevisitScore';//再访分值
export default {
  name: "crmCustSatisfaction",
  components: {
    ServiceType,
    SatisfactionType,
    ExecutionPremise,
    ReturnVisitWay,
    ServiceBigClass,
    EnableOrDisable,
    Brand,
    MessageModel,
    Others,
    SendWay,
    RevisitScore
  },
  data() {
    return {
      cxServerType:{
        value:''
      },
      cxSatisfction:{
        value:''
      },
      cxExecution:{
        value:''
      },
      cxStatus:{
        value:''
      },
      cxBigClass:{
        value:''
      },
      cxReview:{
        value:''
      },
      cxBrand:{
        value:''
      },
      cxMessModel:{
        value:''
      },
      whServerType:{
        value:''
      },
      whSatisfaction:{
        value:''
      },
      whExecution:{
        value:''
      },
      whBigClass:{
        value:''
      },
      whreview:{
        value:''
      },
      whBrand:{
        value:''
      },
      whScore:{
        input:''
      },
      whMessage:{
        value:''
      },
      whStatus:{
        value:''
      },
      toggleParam: false,
      dialogVisible: false,
      dialogVisible2: false,
      tabledatas: {
        colnames: [
          { label: "服务类型", value: "SERVER_TYPE" },
          { label: "品牌", value: "" },
          { label: "服务大类", value: "CLASSIFY" },
          { label: "满意度类型", value: "SATISFACTION_TYPE" },
          { label: "执行前提", value: "PERFORM_PREMISE" },
          { label: "回访方式", value: "MESSAGE_MODLE" },
          { label: "短信模板", value: "REVIEW_WAY" },
          { label: "分值", value: "SCORE" },
          { label: "是否启用", value: "IS_ENABLE" },
          { label: "创建人", value: "" },
          { label: "创建时间", value: "" },
          { label: "修改人", value: "" },
          { label: "修改时间", value: "" }
        ],
        tableData:[
          {
            date: "2016-05-01",
            name: "王小虎",
            SCORE: "5"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            SCORE: "5"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            SCORE: "5"
          }
        ],
        queryObj: {
          // .查询条件和网格都缺少品牌，网格缺少创建人，创建时间，修改人，修改时间
          apiConfig: crmApis.CustomerSatisfactionService001,
          apiQueryRow: [
            'SERVER_TYPE',
            'CLASSIFY',
            'SATISFACTION_TYPE',
            'PERFORM_PREMISE',
            'MESSAGE_MODLE',
            'REVIEW_WAY',
            'SCORE',
            'IS_ENABLE'
          ],
          params: {
           SERVER_TYPE_CODE:'',
           SATISFACTION_TYPE_CODE:'',
           PERFORM_PREMISE_CODE:'',
           IS_ENABLE:'',
           CLASSIFY_CODE:'',
           REVIEW_WAY_CODE:'',
           MESSAGE_MODLE_CODE:''
          }
        },
        pagesize:10,
        pageindex:1
      },
      child:{
        input:''
      }
    };
  },
  mounted: function() {
    console.log("进来了");
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
    },
    showdialog2: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible2 = true;
    },
    query:function(){
      let that = this;
      let queryObj = {
        // api配置
        apiConfig: that.tabledatas.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatas.pagesize,
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
        }
      });
    },
    handle:function(index,rowData){
      let that=this
      //that.$router.push({name:'ComplainReview',params:rowData})
      that.whScore.input=rowData.SCORE;
      that.dialogVisible = true;
    },
    save:function(){
        const that = this
        //必填项校验
        let queryObj = {
          // api配置
          apiConfig: crmApis.CustomerSatisfactionService002,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:[]
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            //pageSize: that.tabledatas.pagesize,
            //pageIndex: that.tabledatas.pageindex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              token:'',
              OEM_CODE:'',
              GROUP_CODE:'',
              SERVER_TYPE_CODE:'',
              CLASSIFY_CODE:'',
              SATISFACTION_TYPE_CODE:'',
              PERFORM_PREMISE_CODE:'',
              MESSAGE_MODLE_CODE:'',
              REVIEW_WAY_CODE:'',
              SCORE:'',
              IS_ENABLE:''
            }
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(
            response.data[queryObj.apiConfig.ServiceCode].result === '1' && 
            response.data[queryObj.apiConfig.ServiceCode].rows!=''){
            this.dialogVisible = false
            this.$message({
              message: '保存成功',
              type: 'success',
              duration: 1000
            });
            }
        })
    },
    reset: function() {
      this.$refs.ServiceType.reset();
      this.$refs.SatisfactionType.reset();
      this.$refs.ExecutionPremise.reset();
      this.$refs.EnableOrDisable.reset();
      this.$refs.ServiceBigClass.reset();
      this.$refs.ReturnVisitWay.reset();
      this.$refs.Brand.reset();
      this.$refs.MessageModel.reset();
    }
  },
};
</script>
<style>
/* .filter-params .el-form-item__label{
  margin-right: 0px;
}
.filter-params .el-col {
  margin-bottom: 0px;
}
.filter-params-crm .el-col {
  margin-bottom: -10px;
}
.filter-params .long-col .el-input {
  width: 85%;
}
.filter-params .long-col label {
  width: 15%;
}
.filter-params .long-col .el-textarea {
  width: 85%;
} */
</style>