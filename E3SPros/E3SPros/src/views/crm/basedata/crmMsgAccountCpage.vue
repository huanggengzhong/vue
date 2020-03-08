/*
 * @Author: xgz 
 * @Date: 2019-07-25 21:10:53 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-09-10 17:35:04
 */

<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <AccountName :AccountName="AccountName" ref="AccountNameRefMain" />
          </el-col>
          <el-col :span="6">
            <ServiceIP :ServiceIP="ServiceIP" ref="ServiceIPRefMain" />
          </el-col>
          <el-col :span="6">
            <EnableOrDisable :EnableOrDisable="EnableOrDisable" ref="EnableOrDisableRefMain" />
          </el-col>
          <el-col :span="6">
            <swd_AgentSingle :swd_AgentSingle="swd_AgentSingle" ref="AgentRefMain"  />
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- 短信账号维护新增弹窗 -->
    <el-dialog title="短信账号维护" :visible.sync="dialogVisible" width="900px" center append-to-body style="height:300px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;">
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <swd_AgentSingle :swd_AgentSingle="AgentEdit" ref="AgentRefEdit" @CatData="getCode"/>
            </el-col>
            <el-col :span="8">
              <AccountName :AccountName="AccountNameEdit" ref="AccountNameRefEdit" />
            </el-col>
            <el-col :span="8">
              <Password :Password="PasswordEdit" ref="PasswordRefEdit" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <ServiceIP :ServiceIP="ServiceIPEdit" ref="ServiceIPRefEdit" />
            </el-col>
            <el-col :span="8">
              <Port :Port="PortEdit" ref="PortRefEdit" />
            </el-col>
            <el-col :span="8">
              <EnableOrDisable :EnableOrDisable="EnableOrDisableEdit" ref="EnableOrDisableRefEdit" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="text-align:right">
              <el-button size="small" type="primary" @click="msgInfoSave()">保存</el-button>
              <!-- <el-button @click="goreturn()">返回</el-button> -->
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <!-- 短信账号维护新增弹窗结束 -->

    <!-- 自定义网格 -->
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:350px" v-loading.body="loadFlag" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" text-align="center" width="55"></el-table-column>
      <el-table-column width="100px" label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="edit(scope.$index,scope.row)">编辑</el-button>
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage">
    </el-pagination>
    <!-- 自定义网格结束 -->
  </div>
</template>
<script>
import AccountName from "@/components/crm/textbox/Public/Message/AccountName";
import ServiceIP from "@/components/crm/textbox/Public/Message/ServiceIP";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import swd_AgentSingle from "@/components/crm/EjectWindows/swd_AgentSingle";
import Password from "@/components/crm/textbox/Public/Message/Password";
import Port from "@/components/crm/textbox/Public/Message/Port";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "crmMsgAccountCpage",
  components: {
    AccountName,
    EnableOrDisable,
    swd_AgentSingle,
    Password,
    Port,
    ServiceIP
  },
  data() {
    return {
      dialogVisible: false,
      updateControlId: "", //修改并发字段
      id: "", //修改标记。传id表示修改，不传id表示新增
      loadFlag: false, //加载动画
      rowData: { agentName: "", agentCode: "" }, //网点编码，从弹窗带出来的的
      
      saveAgentCode : "",//保存的暂存的网点编码
      a: {},
      swd_AgentSingle: {
        input: ""
      },
      AccountName: {
        input: ""
      },
      pd: {
        input: ""
      },
      ServiceIP: {
        input: ""
      },
      pt: {
        input: ""
      },
      ServiceIP: {
        input: ""
      },
      EnableOrDisable: {
        value: ""
      },
      AgentEdit: { input: "" },
      AccountNameEdit: { input: "" },
      PasswordEdit: { input: "" },
      ServiceIPEdit: { input: "" },
      PortEdit: { input: "" },
      EnableOrDisableEdit: { value: "" },
      tabledatas: {
        colnames: [
          { label: "网点名称", value: "dlrShortName" },
          { label: "网点编码", value: "dlrCode" },
          { label: "服务IP", value: "serverip" },
          { label: "账号名称", value: "username" },
          { label: "端口", value: "port" },
          { label: "是否启用", value: "isEnable" },
          { label: "创建人", value: "createdName" },
          { label: "创建时间", value: "createdDate" },
          { label: "最后更新时间", value: "lastUpdatedDate" }
        ],
        tableData: [],
        queryObj: {
          apiConfig: crmApis.csBuMessChannelQueryForDlr,
          apiQueryRow: [
            "dlrShortName",
            "dlrCode",
            "serverip",
            "username",
            // "password",
            "port",
            "isEnable",
            "createdName",
            "createdDate",
            "lastUpdatedDate",
            // "password",
            "updateControlId",
            "id"
          ],
          params: {
            userName: "", //账号名称
            isEnable: "", //是否可用
            // serverip: "" //服务ip
            //orgCode: "" //专营店编码
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    query: function() {
      let that = this;
      that.loadFlag = true; //请求标记
      that.tabledatas.queryObj.params.userName =
        that.$refs.AccountNameRefMain.input;
      that.tabledatas.queryObj.params.serverip =
        that.$refs.ServiceIPRefMain.input;
      that.tabledatas.queryObj.params.isEnable =
        that.$refs.EnableOrDisableRefMain.value;
      that.tabledatas.queryObj.params.orgCode = that.$refs.AgentRefMain.rowData.agentCode;
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
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          // 将0转换成停用、将1转换成启用
          for (var a = 0; a < that.tabledatas.tableData.length; a++) {
            if (that.tabledatas.tableData[a].isEnable == "1") {
              that.tabledatas.tableData[a].isEnable = "启用";
            }
            if (that.tabledatas.tableData[a].isEnable == "0") {
              that.tabledatas.tableData[a].isEnable = "停用";
            }
          }
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
        }
        that.loadFlag = false;
      });
    },

    add: function() {
      let that = this;
      that.updateControlId = "";
      that.saveAgentCode = ""; //新增，将网点编码初始化
      that.id = "";
      if (
        that.$refs.AgentRefEdit == undefined &&
        that.$refs.AccountNameRefEdit == undefined &&
        that.$refs.PasswordRefEdit == undefined &&
        that.$refs.ServiceIPRefEdit == undefined &&
        that.$refs.PortRefEdit == undefined &&
        that.$refs.EnableOrDisableRefEdit == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.dialogVisible = true;
        that.$refs.AgentRefEdit.resetgz();
        that.$refs.AccountNameRefEdit.reset();
        that.$refs.PasswordRefEdit.reset();
        that.$refs.ServiceIPRefEdit.reset();
        that.$refs.PortRefEdit.reset();
        that.$refs.EnableOrDisableRefEdit.reset();
      }
    },
    edit: function(index, row) {
      let that = this;
      that.updateControlId = row.updateControlId;
      that.id = row.id;
      debugger
      if (
        that.$refs.AgentRefEdit == undefined &&
        that.$refs.AccountNameRefEdit == undefined &&
        that.$refs.PasswordRefEdit == undefined &&
        that.$refs.ServiceIPRefEdit == undefined &&
        that.$refs.PortRefEdit == undefined &&
        that.$refs.EnableOrDisableRefEdit == undefined
      ) {
        that.dialogVisible = true;
        that.AgentEdit.input = row.dlrShortName;
        that.saveAgentCode= row.dlrCode;
        that.AccountNameEdit.input = row.username;
        that.PasswordEdit.input = row.password;
        that.ServiceIPEdit.input = row.serverip;
        that.PortEdit.input = row.port;
        that.EnableOrDisableEdit.value = row.isEnable;

      } else {
        that.dialogVisible = true;
        that.AgentEdit.input = row.dlrShortName;
        that.saveAgentCode= row.dlrCode;
        that.AccountNameEdit.input = row.username;
        that.PasswordEdit.input = row.password;
        that.ServiceIPEdit.input = row.serverip;
        that.PortEdit.input = row.port;
        that.EnableOrDisableEdit.value = row.isEnable;
        that.$refs.AgentRefEdit.getData();
        that.$refs.AccountNameRefEdit.getData();
        that.$refs.PasswordRefEdit.getData();
        that.$refs.ServiceIPRefEdit.getData();
        that.$refs.PortRefEdit.getData();
        that.$refs.EnableOrDisableRefEdit.getNewData();
      }
    },
    // 保存
    msgInfoSave: function() {
      let that = this;
      //判断是新增或者是编辑
      
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csBuMessChannelMutationSaveById,
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
            //保存网点编码        that.saveAgentCode
            orgCode : that.saveAgentCode,
            // orgCode : that.$refs.AgentRefEdit.rowData.agentCode,
            username: that.$refs.AccountNameRefEdit.input,
            password: that.$refs.PasswordRefEdit.input,
            serverip: that.$refs.ServiceIPRefEdit.input,
            port: that.$refs.PortRefEdit.input,
            isEnable: that.$refs.EnableOrDisableRefEdit.value,
            updateControlId: that.updateControlId,
            id: that.id
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
    },
    // 取得网点编码，保存用
    getCode: function(val) {
      debugger;
      let redata = {};
      redata = val;
      // this.agentCode = redata[0].code;
      this.saveAgentCode = redata[0].code;
    },
    reset: function() {
      this.$refs.AccountNameRefMain.reset();
      this.$refs.ServiceIPRefMain.reset();
      this.$refs.EnableOrDisableRefMain.reset();
      this.$refs.AgentRefMain.resetInputAndRowdata();
      // this.agentCode = '';
      // this.agentName = '';
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
    }
  }
};
</script>

