/*
短信模板设置
 * @Author: xgz 
 * @Date: 2019-07-26 08:51:48 
 * @Last Modified time: 2019-09-10 18:48:09
 */

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>

    <div class="filter-container filter-params-crm query-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="7">
                <ModelName :ModelName="ModelName" ref="ModelName"></ModelName>
              </el-col>
              <el-col :span="7">
                <!-- <MsgModelContent :MsgModelContent="MsgModelContent" ref="MsgModelContent"></MsgModelContent> -->
                <MessageModel :MessageModel = "MessageModel" ref="MessageModel"/>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- 短信模板编辑弹窗 -->
    <el-dialog title="短信模板编辑" :visible.sync="dialogVisible" width="700px"
    append-to-body
     center 
     @open="open"
     style="height:400px;
position:fixed;
top:0;
right:0;
left:0;
bottom:0;
margin:auto;">
      <div class="filter-container filter-params-crm">
        <el-form label-position="right">
          <el-row :span="24">
            <el-col :span="12">
              <ModelName :ModelName="ModelNameEdit" ref="ModelNameRefEdit" />
            </el-col>
            <el-col :span="12">
              <EnableOrDisable :EnableOrDisable="EnableOrDisableEdit" ref="EnableOrDisableRefEdit" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <ModelContentTextarea style="margin:0 0 0 -154px" :ModelContentTextarea="ModelContentTextareaEdit" 
                      ref="ModelContentTextareaRefEdit" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">  
            <b>模板内容填写说明 </b> <br>
    支持替换的内容：[对象]，[单据编号]，[服务人员]，[服务电话]，[时长]  <br>
    <br>

<b>*样例：</b> <br>
*尊敬的[对象]，[服务人员]已经出车，请耐心等待！服务人员的电话是：[服务电话]，预计[时长]分钟后到达。
<br>
     *尊敬的[对象],您的爱车已经回厂交付车间检查，负责的业代：[服务业代]，联系电话：[业代电话]，请知悉！            
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="text-align:right;margin-top: 18px;" class="filter-paramgz">
              <el-button type="primary" size="small" @click="save()">保存</el-button>
              <el-button size="small" @click="close()">关闭</el-button>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!-- 短信模板编辑弹窗结束 -->

    <!-- 自定义网格 -->
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:360px" v-loading.body="false" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="编辑" width="100" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="edit(scope.$index,scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center" :width="item.width"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage">
    </el-pagination>
    <!-- 自定义网格结束 -->
  </div>
</template>
<script>
import ModelName from "@/components/crm/textbox/Public/Message/ModelName";
import MsgModelContent from "@/components/crm/textbox/Public/Message/MsgModelContent";

// 新增弹窗组件引入
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import ModelContentTextarea from "@/components/crm/textbox/Public/Message/ModelContentTextarea";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import MessageModel from "@/components/crm/EjectWindows/MessageModel"

export default {
  name: "crmDLRMSpage",
  components: {
    ModelName,
    MsgModelContent,
    // 新增弹窗组件引入
    EnableOrDisable,
    ModelContentTextarea,
    MessageModel
  },
  data() {
    return {
      toggleParam: false,
      dialogVisible: false,
      MsgModelContent: {
        input: ""
      },
      MessageModel : {
        input : ""
      },
      ModelName: {
        input: ""
      },
      ModelNameEdit: {
        input: ""
      },
      EnableOrDisableEdit: {
        value: ""
      },
      ModelContentTextareaEdit: {
        input: ""
      },
      
      templateId : "",
      updateControlId :  "",

      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        tableData: [],
        colnames: [
          { label: "模板名称", value: "templateName" },
          { label: "短信模板内容", value: "templateContent" },
          { label: "是否启用", value: "isEnable", width: "100px" },
          { label: "创建人", value: "createdName" },
          { label: "创建时间", value: "createdDate" }
        ],
        queryObj: {
          apiConfig: crmApis.csDbTemplateQueryFindAll,
          apiQueryRow: [
            "templateName",
            "templateContent",
            "isEnable",
            "createdName",
            "createdDate",
            //隐藏字段
            "templateId",
            "updateControlId"
          ],
          params: { oemCode: "1", groupCode: "1" }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
    };
  },
  methods: {
    query: function() {
      let that = this;

      //查询条件
      // that.tabledatas.queryObj.params.isEnable=this.$refs.EnableOrDisable_2.value  //传空字符串查询不出数据
      // that.tabledatas.queryObj.params.carBrandCode = this.$refs.sct_CarBrand_2.value;
      // that.tabledatas.queryObj.params.accountId = this.$refs.ResponsibleDistrict.value;
      // that.tabledatas.queryObj.params.provinceId = this.$refs.Province.value;
      that.tabledatas.queryObj.params.templateName = this.$refs.ModelName.input;
      that.tabledatas.queryObj.params.templateContent = this.$refs.MessageModel.input;
      //debugger
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
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          //请求成功后，设置网格的值
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;

          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },


    add: function() {
      let that = this;
      if (
        that.$refs.ModelNameRefEdit == undefined &&
        that.$refs.EnableOrDisableRefEdit == undefined &&
        that.$refs.ModelContentTextareaRefEdit == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.dialogVisible = true;
        // that.$refs.ModelNameRefEdit.reset();   
        // that.$refs.EnableOrDisableRefEdit.reset();
        // that.$refs.ModelContentTextareaRefEdit.reset();
        //用组件的reset方法不行，要将组件绑定的变量ModelNameEdit.input赋值为空字符串
        that.ModelNameEdit.input = "";
        that.EnableOrDisableEdit.value = "";
        that.ModelContentTextareaEdit.input = "";
        that.templateId = "";
        that.updateControlId = "";
      }
    },

    edit: function(index, row) {
      let that = this;
      if (
        that.$refs.ModelNameRefEdit == undefined &&
        that.$refs.EnableOrDisableRefEdit == undefined &&
        that.$refs.ModelContentTextareaRefEdit == undefined
      ) { 
        that.dialogVisible = true;
        that.ModelNameEdit.input = row.templateName;
        that.EnableOrDisableEdit.value = row.isEnable;
        that.ModelContentTextareaEdit.input = row.templateContent;
        that.templateId = row.templateId;
        that.updateControlId = row.updateControlId;
      } else {
        that.dialogVisible = true;
        // that.$refs.ModelNameRefEdit.getData();
        // that.$refs.EnableOrDisableRefEdit.getData();
        // that.$refs.ModelContentTextareaRefEdit.getData();
        that.ModelNameEdit.input = row.templateName;
        that.EnableOrDisableEdit.value = row.isEnable;
        that.ModelContentTextareaEdit.input = row.templateContent;
        that.templateId = row.templateId;
        that.updateControlId = row.updateControlId;
      }
    },
    reset: function() {
      this.$refs.ModelName.reset();
      this.$refs.MsgModelContent.reset();
    },
    open() {
      let that = this;
      //防止打开窗体编辑时，加载的是上一次编辑的值
      // that.$refs.ModelNameRefEdit.getData();
      //   that.$refs.EnableOrDisableRefEdit.getData();
      //   that.$refs.ModelContentTextareaRefEdit.getData();
    },
    close: function() {
      let that = this;
      that.dialogVisible = false;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    // 分页的三个方法
    prev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },

    save(){
      
      let that = this;
      //判断是新增或者是编辑
      debugger
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csDbTemplateInseretForm,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          dataInfo: {
            templateName: that.$refs.ModelNameRefEdit.input,
            templateContent : that.$refs.ModelContentTextareaRefEdit.input,
            isEnable : that.$refs.EnableOrDisableRefEdit.value,
            templateId : that.templateId,
            updateControlId : that.updateControlId,
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "success",
            duration: 1000
          });
          this.dialogVisible = false;
          this.query();
        } else {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
          //this.dialogVisible = false;
        }
      });
    
    }
  }
};
</script>
<style>
.filter-params-crm .long-textarea-style textarea {
    width: 532px;
    margin: 2px 0;
}

.filter-params-crm {
  text-align: left; 
}
</style>


