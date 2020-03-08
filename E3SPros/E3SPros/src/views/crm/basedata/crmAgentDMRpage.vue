/*
 * @Author: xgz 
 * @Date: 2019-07-26 13:57:30 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-09-10 17:10:52
 */

<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <!-- 1级页面 -->
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <BusinessProcess :BusinessProcess="cxPro" ref="BusinessProcess" @changeCode="changeType" />
              </el-col>
              <el-col :span="6">
                <AgentBrand :AgentBrand="cxBrand" ref="AgentBrand" />
              </el-col>
              <el-col :span="6">
                <ServiceBigClass :ServiceBigClass="cxBig" ref="ServiceBigClass" />
              </el-col>
              <el-col :span="6">
                <ProcessNodePoint :ProcessNodePoint="cxNode" ref="ProcessNodePoint" @CatData="getArr" />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <EnableOrDisable :EnableOrDisable="cxStatus" ref="EnableOrDisable" />
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- 自定义网格开始 -->
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table :data="tabledatas.tableData" highlight-current-row ref="table"
      :style="{width:'100%',height:tableHeight+'px'}" v-loading.body="false" element-loading-text="Loading" border fit>
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <a style="color:#409EFF; margin-right:5px" @click="modifyAgentInfo(scope.$index, scope.row)">修改</a>
          <!-- <a style="color:#409EFF" @click="modifyAgentInfo(scope.$index, scope.row)">删除</a> -->
        </template>
      </el-table-column>
      <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage">
    </el-pagination>

    <!-- 网点派单规则新增新增弹窗 -->
    <el-dialog title="网点派单规则维护" :visible.sync="dialogVisible" width="900px" height="550px" center style="position:fixed;top:100;;right:0;left:0;bottom:0;margin:auto;" append-to-body>
      <div class="filter-container filter-title">
        <div style="float:right">
          <el-button size="small" @click="addAgent">添加网点</el-button>
          <el-button size="small" type="primary" @click="editSave">保存</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <div>
          <el-form>
            <el-row>
              <el-col :span="8" class="crm-label-required">
                <BusinessProcess :BusinessProcess="whPro" ref="whrfPro" @changeCode="changeType2" />
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <AgentBrand :AgentBrand="whBrand" ref="whrfBrand" />
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <ProcessNodePoint ref="whrfProNode" :ProcessNodePoint="whProNode" @CatData="getarr4"></ProcessNodePoint>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8" class="crm-label-required">
                <AssignWay :AssignWay="pddx" ref="AssignWay" @changeCode="change"></AssignWay>
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <div v-if="peopleFlag">
                  <swd_DutyPeople ref="whrfDutyPeople" :swd_DutyPeople="whDutyPeople" @CatData="getarr"></swd_DutyPeople>
                </div>
                <div v-if="roleFlag">
                  <RoleSelection ref="whrfDutyRole" :fromDatas="whDutyRole" @CatData="getarr2"></RoleSelection>
                </div>
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <EnableOrDisable :EnableOrDisable="whStatus" ref="whrfStatus" />
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <ServiceBigClass :ServiceBigClass="whBig" ref="whrfBig" />
              </el-col>
              <el-col :span="8">
                <Agent :Agent="whDlr" ref="whrfDlr" @CatData="getarr5" />
              </el-col>
            </el-row>
          </el-form>
        </div>
        <el-table :data="tabledatasgzadd.tableData" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit>
          <el-table-column type="index" label="序号" width="55"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <a style="color:#409EFF" @click="delAgent(scope.$index, scope.row)">删除</a>
            </template>
          </el-table-column>
          <el-table-column v-for="item in tabledatasgzadd.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="tabledatasgzadd.total" :page-size="tabledatasgzadd.pagesize" :current-page="tabledatasgzadd.pageindex" @prev-click="prev1" @next-click="next1" @current-change="changepage1"></el-pagination>
      </div>
    </el-dialog>

  </div>
</template>
<script>
import BusinessProcess from "@/components/crm/Select/Common/BusinessProcess";
import AgentBrand from "@/components/crm/Select/Common/Dealer/Agent/AgentBrand";
import swd_ServiceType from "@/components/crm/EjectWindows/swd_ServiceType";
import PersonnelInformation from "@/components/crm/EjectWindows/PersonnelInformation";
import ReceiverForm from "@/components/crm/Select/Common/ReceiverForm";
import ProcessNodePoint from "@/components/crm/EjectWindows/ProcessNodePoint";
import RoleSelection from "@/components/crm/EjectWindows/RoleSelection"; //角色 弹出框
import AgentAbbreviation from "@/components/crm/textbox/Public/Agent/AgentAbbreviation";
import NetworkCode from "@/components/crm/textbox/Public/Network/NetworkCode";
import Receiver from "@/components/crm/EjectWindows/Receiver";
import ResponsibleDepartment from "@/components/crm/EjectWindows/ResponsibleDepartment";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import Agent from "@/components/crm/EjectWindows/Agent";
import ServiceBigClass from "@/components/crm/Select/Common/ServiceBigClass";
import AssignWay from "@/components/crm/Select/Clue/AssignWay";
import swd_DutyPeople from "@/components/crm/EjectWindows/swd_DutyPeople"; //责任人 弹出框
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmAgentDMRpage",
  components: {
    BusinessProcess,
    AgentBrand,
    swd_ServiceType,
    PersonnelInformation,
    EnableOrDisable,
    RoleSelection,
    swd_DutyPeople,
    ResponsibleDepartment,
    ProcessNodePoint,
    AgentAbbreviation,
    NetworkCode,
    Agent,
    ServiceBigClass,
    AssignWay
  },
  mounted(){
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  data() {
    return {
      tableHeight:"",
      pddx: {
        value: "2"
      },
      redata: {},
      dutyPersonMId: "",
      updateControlId: "",
      peopleFlag: true,
      roleFlag: false,
      options: [{ label: "角色", value: "1" }, { label: "员工", value: "2" }],
      whDutyRole: {
        input: "",
        labelname: "责任人"
      },
      value: "2",
      cxnodeCode: "",
      whBigCode: "",
      whnodeCode: "",
      idList: [],
      toggleParam: false,
      toggleParamdistri: false,
      toggleParamadd: false,
      dialogVisible: false,
      dialogVisiblegz: false,
      cxPro: {
        value: ""
      },
      cxBrand: {
        value: ""
      },
      cxBig: {
        value: "",
        ptype: ""
      },
      cxNode: {
        input: "",
        ptype: "",
        gtype: "DLR"
      },
      cxStatus: {
        value: ""
      },
      whPro: {
        value: ""
      },
      whBrand: {
        value: ""
      },
      whBig: {
        value: "",
        ptype: ""
      },
      whStatus: {
        value: ""
      },
      whDutyPeople: {
        input: ""
      },
      whProNode: {
        input: "",
        ptype: "",
        gtype: "DLR",
        dialogVisible: ""
      },
      whDlr: {
        input: ""
      },
      // 1级页面的网格
      tabledatas: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "业务流程", value: "serverTypeName" },
          { label: "网点品牌", value: "carBrandName" },
          { label: "流程节点", value: "nodeName" },
          { label: "服务大类", value: "serverClassName" },
          { label: "接单人", value: "dutyPersonName" },
          { label: "接单人形式", value: "dutyPersonTypeName" },
          { label: "是否启用", value: "isEnableName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.dlrDbDutyPersonMQuery,
          apiQueryRow: [
            "serverTypeName",
            "carBrandName",
            "nodeName",
            "serverClassName",
            "dutyPersonName",
            "dutyPersonTypeName",
            "isEnableName",
            "dutyPersonName",
            "dutyPersonMId",
            "updateControlId",
            "carBrandCode",
            "serverType",
            "serverClassCode",
            "isEnable",
            "dutyPersonType",
            "nodeCode",
            "dutyPersonId"
          ],
          params: {
            // serverType: "",
            // carBrandCode: "",
            // serverClassCode: "",
            // nodeCode: "",
            // isEnable: ""
          }
        },
        pagesize: 8,
        pageindex: 1,
        total: 0
      },
      // 新增和修改的网格
      tabledatasgzadd: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "网点品牌", value: "carBrandName" },
          { label: "网点编码", value: "dlrCode" },
          { label: "网点简称", value: "dlrShortName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csDbDutyPersonDlrQuery,

          apiQueryRow: [
            "carBrandName",
            "dlrCode",
            "dlrShortName",
            "dutyPersonDId"
          ],
          params: {
            //dutyPersonMId: ""
            // carBrandCode: "",
            // xx: "",
            // xdutyPersonId: "",
            // isEnable: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },

  methods: {
    getarr5(val) {
      debugger;
      this.redata = val;
    },
    changeType(val) {
      debugger;
      let that = this;
      that.cxNode.input = "";
      that.cxNode.ptype = val;
      if (that.$refs.ProcessNodePoint != undefined) {
        that.$refs.ProcessNodePoint.getData();
      }
      that.cxBig.input = "";
      that.cxBig.ptype = val;
      if (that.$refs.ServiceBigClass != undefined) {
        that.$refs.ServiceBigClass.getData();
      }
    },
    changeType2(val) {
      debugger;
      let that = this;
      that.whProNode.input = "";
      that.whProNode.ptype = val;
      if (that.$refs.whrfProNode != undefined) {
        that.$refs.whrfProNode.getData();
      }
      that.whBig.input = "";
      that.whBig.ptype = val;
      if (that.$refs.whrfBig != undefined) {
        that.$refs.whrfBig.getData();
      }
    },
    //   主页面查询
    query: function() {
      debugger;
      let that = this;
      that.tabledatas.queryObj.params = {};
      if (that.$refs.BusinessProcess.value != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "serverType",
          that.$refs.BusinessProcess.value
        );
      }
      if (that.$refs.AgentBrand.value != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "carBrandCode",
          that.$refs.AgentBrand.value
        );
      }
      if (that.$refs.ServiceBigClass.value != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "serverClassCode",
          that.$refs.ServiceBigClass.value
        );
      }
      if (that.cxnodeCode != "") {
        that.$set(that.tabledatas.queryObj.params, "nodeCode", that.cxnodeCode);
      }
      if (that.$refs.EnableOrDisable.value != "") {
        that.$set(
          that.tabledatas.queryObj.params,
          "isEnable",
          that.$refs.EnableOrDisable.value
        );
      }
      this.$crmcf.simpleTablequery(
        that,
        that.tabledatas,
        that.tabledatas.queryObj.apiConfig,
        function(data) {
          that.tabledatas.tableData = data.rows;
          that.tabledatas.total = data.records;
          that.tabledatas.pageIndex=data.pageindex;
        }
      )
    },
    //主页面重置
    reset: function() {
      this.$refs.BusinessProcess.reset();
      this.$refs.AgentBrand.reset();
      this.$refs.ServiceBigClass.reset();
      this.$refs.ProcessNodePoint.resetdlr();
      this.$refs.EnableOrDisable.reset();
      this.cxnodeCode = "";
    },
    // 新增
    add: function() {
      debugger;
      let that = this;
      that.dialogVisible = true;
      that.empId = "";
      that.positionCode = "";
      that.updateControlId = "";
      that.dutyPersonMId = "";
      that.whnodeCode = "";
      if (
        that.$refs.whrfPro == undefined &&
        that.$refs.whrfBrand == undefined &&
        that.$refs.whrfBig == undefined &&
        that.$refs.whrfProNode == undefined &&
        that.$refs.whrfStatus == undefined
      ) {
      } else {
        that.$refs.whrfPro.reset();
        that.$refs.whrfBrand.reset();
        that.$refs.whrfBig.reset();
        that.$refs.whrfProNode.resetdlr();
        that.$refs.whrfStatus.reset();
      }
      setTimeout(function() {
        if (that.$refs.whrfDutyPeople != undefined) {
          that.$refs.whrfDutyPeople.reset();
        }
        if (that.$refs.whrfDutyRole != undefined) {
          that.$refs.whrfDutyRole.clear();
        }
      }, 100);
      that.initQueryAgentInfo();
    },
    // 修改
    modifyAgentInfo: function(index, row) {
      debugger;
      let that = this;
      that.dialogVisible = true;
      that.positionCode = "";
      that.empId = "";
      that.updateControlId = row.updateControlId;
      that.dutyPersonMId = row.dutyPersonMId;
      that.whPro.value = row.serverType;
      that.whBrand.value = row.carBrandCode;
      that.pddx.value = row.dutyPersonType;
      that.change(row.dutyPersonType);
      that.whBig.value = row.serverClassCode;
      that.whProNode.input = row.nodeName;
      that.whnodeCode = row.nodeCode;
      that.whStatus.value = row.isEnable;
      // 子组件是否为空，为空则将网格中的值赋给组件，否则再重新赋值，这个赋值通过方法去赋值
      if (
        that.$refs.whrfPro == undefined &&
        that.$refs.whrfBrand == undefined &&
        that.$refs.whrfBig == undefined &&
        that.$refs.whrfProNode == undefined &&
        that.$refs.AssignWay == undefined &&
        that.$refs.whrfStatus == undefined
      ) {
      } else {
        that.$refs.whrfPro.getData();
        that.$refs.whrfBrand.getNewData();
        that.$refs.whrfBig.getData();
        that.$refs.whrfProNode.getNewData();
        that.$refs.whrfStatus.getNewData();
        that.$refs.AssignWay.getData();
      }
      setTimeout(function() {
        if (that.$refs.whrfDutyPeople != undefined) {
          that.empId = row.dutyPersonId;
          that.whDutyPeople.input = row.dutyPersonName;
          that.$refs.whrfDutyPeople.getData();
        }
        if (that.$refs.whrfDutyRole != undefined) {
          that.positionCode = row.dutyPersonId;
          that.whDutyRole.input = row.dutyPersonName;
          that.$refs.whrfDutyRole.getData();
        }
      }, 100);
      that.initQueryAgentInfo();
    },

    //新增弹框页面初始化查询
    initQueryAgentInfo: function() {
      debugger;
      let that = this;
      that.tabledatasgzadd.queryObj.params = {};
      that.$set(
        that.tabledatasgzadd.queryObj.params,
        "dutyPersonMId",
        that.dutyPersonMId
      );
      let queryObj = {
        // api配置
        //debugger
        apiConfig: that.tabledatasgzadd.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatasgzadd.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatasgzadd.pagesize,
          pageIndex: that.tabledatasgzadd.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatasgzadd.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
        ) {
          debugger;
          that.tabledatasgzadd.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatasgzadd.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatasgzadd.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    // 保存（保存主表-设定规则）
    editSave: function() {
      let that = this;
      var html = "";
      if (that.$refs.whrfPro.value == "") {
        html = html + `<div>业务流程不能为空</div>`;
      }
      if (that.$refs.whrfBrand.value == "") {
        html = html + `<div>品牌不能为空</div>`;
      }
      if (that.whnodeCode == "") {
        html = html + `<div>流程节点不能为空</div>`;
      }
      if (that.$refs.AssignWay.value == "") {
        html = html + `<div>派单对象不能为空</div>`;
      }
      if (that.empId == "" && that.positionCode == "") {
        html = html + `<div>角色或责任人不能为空</div>`;
      }
      if (that.$refs.whrfStatus.value == "") {
        html = html + `<div>是否启用不能为空</div>`;
      }
      if (html != "") {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return;
      }
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.csDbDutyPersonMMutationSaveById,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["dutyPersonMId", "updateControlId"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            serverType: that.$refs.whrfPro.value,
            carBrandCode: that.$refs.whrfBrand.value,
            dutyPersonId:
              that.$refs.AssignWay.value == "2"
                ? that.empId
                : that.positionCode,
            dutyPersonMId: that.dutyPersonMId,
            dutyPersonType: that.$refs.AssignWay.value,
            serverClassCode: that.$refs.whrfBig.value,
            nodeCode: that.whnodeCode,
            isEnable: that.$refs.whrfStatus.value,
            updateControlId: that.updateControlId,
            oemCode: "1",
            groupCode: "1"
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1"
        ) {
          that.dutyPersonMId =
            response.data[queryObj.apiConfig.ServiceCode].rows.dutyPersonMId;
          that.updateControlId =
            response.data[queryObj.apiConfig.ServiceCode].rows.updateControlId;
          that.$crmcf.showMessages(that, "success", "成功！");
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    // 添加网点(将规则给到专营店)
    addAgent: function() {
      let that = this;
      debugger;
      var html = "";
      if (that.dutyPersonMId == "") {
        html = html + `<div>请选保存规则再添加网点</div>`;
      }
      if (that.$refs.whrfDlr.input == "") {
        html = html + `<div>请选择要添加的网点</div>`;
      }
      if (html != "") {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return;
      }
      var empstr = []; //批量添加
      this.redata.forEach(item => {
        empstr.push(item.dlrCode);
      });
      let queryObj = {
        // api配置
        apiConfig: crmApis.saveDutyPersonDlrFP,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        type: "mutation",
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            dutyPersonMId: that.dutyPersonMId,
            idList: empstr
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.$crmcf.showMessages(that, "success", "成功！");
          that.initQueryAgentInfo();
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
          that.initQueryAgentInfo();
        }
      });
    },
    // 添加网点(将规则给到专营店)
    delAgent: function(index, row) {
      let that = this;
      debugger;
      var empstr = [];
      empstr.push(row.dutyPersonDId);
      let queryObj = {
        // api配置
        apiConfig: crmApis.cancelDutyPersonDlrFP,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        type: "mutation",
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            dutyPersonMId: that.dutyPersonMId,
            idList: empstr
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.$crmcf.showMessages(that, "success", "成功！");
          that.initQueryAgentInfo();
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
          that.initQueryAgentInfo();
        }
      });
    },

    //主页面网格 分页的三个方法
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
    //主页面网格 分页的三个方法结束
    //分配页面网格 分页的三个方法
    prev1() {
      let that = this;
      if (this.tabledatasgzadd.pageindex > 1) {
        that.tabledatasgzadd.pageindex = this.tabledatasgzadd.pageindex - 1;
        this.initQueryAgentInfo();
      }
    },
    next1() {
      let that = this;
      if (true) {
        that.tabledatasgzadd.pageindex = this.tabledatasgzadd.pageindex + 1;
        this.initQueryAgentInfo();
      }
    },
    changepage1(index) {
      let that = this;
      that.tabledatasgzadd.pageindex = index;
      this.initQueryAgentInfo();
    },
    //分配面网格 分页的三个方法结束

    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    changeToggleParamdistri() {
      this.toggleParamdistri = !this.toggleParamdistri;
    },
    changeToggleParamadd() {
      this.toggleParamadd = !this.toggleParamadd;
    },
    // 取到流程节点弹框里面的编码
    getArr: function(val) {
      debugger;
      let redata = {};
      redata = val;
      this.cxnodeCode = redata[0].code;
    },
    getarr(val) {
      debugger;
      let redata = {};
      redata = val;
      this.positionCode = "";
      this.empId = redata[0].empId;
    },
    getarr2(val) {
      debugger;
      let redata = {};
      redata = val;
      this.empId = "";
      this.positionCode = redata[0].positionCode;
    },
    // 取到流程节点弹框里面的编码
    getarr4(val) {
      debugger;
      let redata = {};
      redata = val;
      this.whnodeCode = redata[0].code;
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    change(val) {
      let that = this;
      if (val == 3) {
        that.roleFlag = true;
        that.peopleFlag = false;
      } else if (val == 2) {
        that.roleFlag = false;
        that.peopleFlag = true;
      }
    }
  }
};
</script>
