<!--
* 描述: 满意度互动设置
* 创建人: zouzx
* 创建时间: 2019-07-24
* 记录：
*  20190724 新建 zouzx
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
          <el-col :span="6"><InteractiveCode ref="InteractiveCode" :InteractiveCode="cxHDcode"/></el-col>
          <el-col :span="6"><InteractiveName ref="InteractiveName" :InteractiveName="cxHDname"/></el-col>
          <el-col :span="6"><BusinessProcess ref="BusinessProcess" :BusinessProcess="cxType"/></el-col>
          <el-col :span="6"><InteractiveWay ref="InteractiveWay" :InteractiveWay="cxHDway"/></el-col>
        </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
            <el-col :span="6"><ServiceBigClass ref="ServiceBigClass" :ServiceBigClass="cxBigClass"/></el-col>
            <el-col :span="6"><EnableOrDisable ref="EnableOrDisable" :EnableOrDisable="cxStatus"/></el-col>
            </el-row>
          </el-col>
      </el-row>
    </el-form>
    </div>
    <el-dialog :visible.sync="dialogVisible" style="height:580px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" width="700px" class="dialog" title="短信互动模板" >
      <div class="filter-container filter-title">
        <div style="float:right">
          <el-button type="primary" @click="save">保存</el-button>
          <el-button @click="showdialog2">新建关联关系</el-button>
        </div>
      </div>
      <div class="filter-container filter-params filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="8"><InteractiveCode ref="InteractiveCode" :InteractiveCode='whHDcode'/></el-col>
          <el-col :span="8"><InteractiveName ref="InteractiveName" :InteractiveName='whHDname'/></el-col>
          <el-col :span="8"><BusinessProcess ref="BusinessProcess" :BusinessProcess="whType"/></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><InteractiveWay ref="InteractiveWay" :InteractiveWay="whHDway"/></el-col>
          <el-col :span="8"><ServiceBigClass ref="ServiceBigClass" :ServiceBigClass="whBigClass"/></el-col>
          <el-col :span="8"><MessageModelFQ ref="MessageModelFQ" :MessageModelFQ="whFQModel"/></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><EnableOrDisable ref="EnableOrDisable" :EnableOrDisable="whStatus"/></el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8">
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-table
      :data="tabledatas2.tableData"
      highlight-current-row
      style="width:100%;height:280px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handle2(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tabledatas2.colnames"
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
      :page-size="tabledatas2.pagesize"
      :current-page="tabledatas2.pageindex"
    ></el-pagination>
          </el-col>
        </el-row>
      </el-form>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogVisible2" style="height:280px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;" width="700px" class="dialog" title="短信步骤设置" >
      <div class="filter-container filter-params filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="8"><RecognizeCode ref="RecognizeCode" :RecognizeCode='tcCode'/></el-col>
          <el-col :span="8"><el-form-item label="说明"><el-input v-model="tcDesc" placeholder="请输入" suffix-icon="el-icon-search"></el-input></el-form-item></el-col>
          <el-col :span="8"><SendWay ref="SendWay" :SendWay="tcSendWay"/></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><MessageModel ref="MessageModel" :MessageModel='tcModel'/></el-col>
          <el-col :span="8"><EnableOrDisable ref="EnableOrDisable" :EnableOrDisable="tcStatus"/></el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"></el-col>
          <el-col :span="8"></el-col>
          <el-col :span="8" style="float:right"><el-button type="primary" @click="savezb">保存</el-button></el-col>
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
      <el-table-column label="操作" align="center">
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
import InteractiveCode from "@/components/crm/textbox/Public/Satisfaction/InteractiveCode";//互动编码
import InteractiveName from "@/components/crm/textbox/Public/Satisfaction/InteractiveName";//互动名称
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess";//业务流程
import InteractiveWay from "@/components/crm/Select/Complaint/Satisfaction/InteractiveWay";//互动方式
import ServiceBigClass from '@/components/crm/Select/Common/ServiceBigClass';//服务大类
import EnableOrDisable from '@/components/crm/Select/Whether/EnableOrDisable';//是否启用
import MessageModelFQ from '@/components/crm/EjectWindows/MessageModelFQ';
import RecognizeCode from '@/components/crm/textbox/Public/Message/RecognizeCode';//识别码
import Others from '@/components/crm/textbox/Public/Message/Others';//其他
import SendWay from '@/components/crm/Select/Common/SendWay';//发送方式
import MessageModel from '@/components/crm/EjectWindows/MessageModel';//短信模板内容
export default {
  name: "crmSatisfactionInteract",
  components: {
    InteractiveCode,
    InteractiveName,
    BusinessProcess,
    InteractiveWay,
    ServiceBigClass,
    EnableOrDisable,
    MessageModelFQ,
    RecognizeCode,
    Others,
    SendWay,
    MessageModel
  },
  data() {
    return {
      cxHDcode:{
        input:''
      },
      cxHDname:{
        input:''
      },
      cxType:{
        value:''
      },
      cxHDway:{
        value:''
      },
      cxBigClass:{
        value:''
      },
      cxStatus:{
        value:''
      },
      whHDcode:{
        input:''
      },
      whHDname:{
        input:''
      },
      whType:{
        value:''
      },
      whHDway:{
        value:''
      },
      whBigClass:{
        value:''
      },
      whFQModel:{
        value:''
      },
      whStatus:{
        value:''
      },
      tcCode:{
        input:''
      },
      tcDesc:'',
      tcSendWay:{
        value:''
      },
      tcModel:{
        value:''
      },
      tcStatus:{
        value:''
      },
      toggleParam: false,
      input: "",
      dialogVisible: false,
      dialogVisible2: false,
      tabledatas: {
        colnames: [
          { label: "互动编码", value: "" },
          { label: "互动名称", value: "" },
          { label: "业务流程", value: "" },
          { label: "互动方式", value: "" },
          { label: "服务大类", value: "" },
          { label: "短信模板", value: "" },
          { label: "是否启用", value: "" }
        ],
        tableData:[
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintHelpQueryFindAll,
          apiQueryRow: [
            "applyPerson",
            "createdDate",
            "helpDate",
            "serverOrder"
          ],
          params: {
           applyUserId:'',
          }
        },
        pagesize:10,
        pageindex:1
      },
      tabledatas2: {
        colnames: [
          { label: "识别码", value: "" },
          { label: "说明", value: "" },
          { label: "互动方式", value: "" },
          { label: "短信模板", value: "" },
          { label: "是否启用", value: "" }
        ],
        tableData:[
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintHelpQueryFindAll,
          apiQueryRow: [
            "applyPerson",
            "createdDate",
            "helpDate",
            "serverOrder"
          ],
          params: {
           applyUserId:'',
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
    this.tabledata.params.code=this.$refs.InteractiveCode.value;
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
      that.dialogVisible = true;
    },
    handle2:function(index,rowData){
      let that=this
      //that.$router.push({name:'ComplainReview',params:rowData})
      that.dialogVisible2 = true;
    },
    save:function(){
        const that = this
        let queryObj = {
          // api配置
          apiConfig: crmApis.csDbDutyPersonMMutationSaveById,
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
              dutyPersonMId:'',
              carBrandCode:'',
              serverType:'',
              nodeCode:'',
              serverClassCode:'',
              dutyPersonType:'',
              dutyPersonId:'',
              accountId:'',
              isEnable:'',
              updateControlId:''
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
    savezb: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible2 = false;
    },
    savezb:function(){
        const that = this
        let queryObj = {
          // api配置
          apiConfig: crmApis.csDbDutyPersonMMutationSaveById,
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
              dutyPersonMId:'',
              carBrandCode:'',
              serverType:'',
              nodeCode:'',
              serverClassCode:'',
              dutyPersonType:'',
              dutyPersonId:'',
              accountId:'',
              isEnable:'',
              updateControlId:''
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
      this.$refs.InteractiveCode.reset();
      this.$refs.InteractiveName.reset();
      this.$refs.BusinessProcess.reset();
      this.$refs.InteractiveWay.reset();
      this.$refs.ServiceBigClass.reset();
      this.$refs.EnableOrDisable.reset();
    }
  }
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
