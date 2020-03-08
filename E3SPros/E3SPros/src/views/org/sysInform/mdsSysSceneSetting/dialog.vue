<template>
  <div class="app-container app-container-table">
    <el-dialog
      :close-on-click-modal="false"
      :title="$t('org.label.sceneType')"
      :visible.sync="dialogVisible"
      class="editSysSceneSetting"
      @open="openCodeHandleVisible"
      @close="sendCode"
      :append-to-body="true"
      width="1000px"
    >
    <!-- 系统通知信息设置 -->
      <div class="filter-container filter-title" ref="conTitleHeight">{{$t('org.label.NotificationIformationSettings')}}</div>
      <!-- 通知信息设置 -->
      <div class="filter-container filter-params" ref="conHeight">
        <el-row :gutter="26">
          <el-col :span="8">
            <label>
              <font color="#ff0000">*</font>{{$t('org.label.sceneCoding')}}
            </label>
            <!-- 场景编码 -->
            <el-input
              placeholder="请输入"
              v-model="sysSceneSettingObj.sceneCode"
              :disabled="sceneCodeDisabled"
              size="small"
              clearable
            ></el-input>
          </el-col>
          <el-col :span="8">
            <label>
              <font color="#ff0000">*</font>{{$t('org.label.sceneName')}}
            </label>
            <!-- 场景名称 -->
            <el-input
              placeholder="请输入"
              v-model="sysSceneSettingObj.sceneDesc"
              size="small"
              clearable
            ></el-input>
          </el-col>
          <sendType
            :span="8"
            :isMul="isMulFlag"
            :key="sendTypeKey"
            lookuptype="LX063"
            :labelName="$t('org.label.sceneType')"
            textField="lookupValueName"
            :code="sysSceneSettingObj.sendType"
            @changeCode="getSendType"
          />
          <!-- 场景类型 -->
          <belongto
            :span="8"
            :isMul="isMulFlag"
            :key="belongtoKey"
            lookuptype="DB0001"
            :labelName="$t('org.label.serviceModel')"
            textField="lookupValueName"
            :code="sysSceneSettingObj.belongto"
            @changeCode="getBelongto"
          />
          <!-- 业务模块 -->
          <isEnable
            :span="8"
            :isMul="isMulFlag"
            :key="isEnableKey"
            :code="sysSceneSettingObj.isEnable"
            :labelName="$t('ve.label.isEnableCn')"
            @changeCode="getisEnableDialog"
          />
          <!-- 启用状态 -->
        </el-row>
      </div>
      <div style="text-align:right">
        <el-button type="primary" size="small" @click="save()">{{$t('sys.button.save')}}</el-button> 
        <!-- 保存 -->
        <el-button size="small" @click="resetSysSceneSettingObj()">{{$t('sys.button.reset')}}</el-button>
        <!-- 重置 -->
      </div>
      <div class="filter-container filter-title" ref="resultTitleHeight">{{$t('org.label.NotificationReminderObjectSettings')}}</div>
      <!-- 通知提醒对象设置 -->
      <el-table
        :row-class-name="tableRowClassName"
        :data="list"
        element-loading-text="加载中"
        border
        stripe
        class="ttt"
        v-loading="listLoading"
        height="200px"
        :header-cell-style="tableHeaderRowClassName"
        highlight-current-row
        ref="multipleTable111"
      >
        <el-table-column
          type="selection"
          width="55"
          label="选择+"
          filed="chose"
          current-row-key="choose"
        />
        <el-table-column :label="$t('sys.content.operate')" width="180">
          <!-- 操作 -->
          <template slot-scope="{row}">
            <label
              @click="controlEnable(row)"
              style="color:#0066ff"
              v-if="row.isEnable==0?true:false"
            >{{$t('ve.label.isEnableCn')}}</label>
            <!-- 启用 -->
            <label
              @click="controlEnable(row)"
              style="color:#0066ff"
              v-if="row.isEnable==1?true:false"
            >{{$t('org.label.prohibit')}}</label>
            <!-- 禁用 -->
          </template>
        </el-table-column>
        <el-table-column align="center" :label="$t('org.label.No')" width="100" type="index" prop="id"></el-table-column>
        <el-table-column :label="$t('org.label.ReceivingObjects')" align="center" width="300" current-row-key="receiver">
          <!-- label="接收对象" -->
          <template slot-scope="scope">{{ scope.row.receiver }}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.ObjectType')" align="center" width="200" current-row-key="receiverType">
           <!-- label="对象类型" -->
          <template slot-scope="scope">{{ scope.row.receiveType == 1 ? '岗位' : '人员'}}</template>
        </el-table-column>
        <el-table-column :label="$t('org.label.isEnable')" align="center" width="200" current-row-key="isEnable">
          <!-- label="是否启用" -->
          <template slot-scope="scope">{{ scope.row.isEnable == 1 ? '是' : '否'}}</template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        prev-text="上一页"
        next-text="下一页"
        layout="prev, pager, next, sizes, ->, total"
        ref="paginationHeight"
        :total="list?list.length:0"
        :current-page.sync="listQuery.pageIndex"
        style="margin-bottom:10px"
      ></el-pagination>
      <div class="filter-container filter-params" ref="conHeight">
        <receiverType
          :span="8"
          lookuptype="DXLX"
          :labelName="$t('org.label.ObjectType')"
          :isMul="isMulFlag"
          :code="receive.receiverType"
          :disabled="receiverTypeDisabled"
          textField="lookupValueName"
          @changeCode="getReceiverType"
        />
        <!-- 对象类型 -->
        <el-col :span="8">
          <label>{{$t('org.label.UserName')}}</label>
          <el-input
            placeholder="请选择"
            @focus="showUserVisible"
            suffix-icon="el-icon-search"
            v-model="userName"
            :disabled="userDisabled"
            size="small"
            clearable
          ></el-input>
        </el-col>
        <el-col :span="8">
          <label>{{$t('org.label.EmployeePost')}}</label>
          <el-input
            v-model="positionName"
            suffix-icon="el-icon-search"
            placeholder="请选择"
            :disabled="positionDisabled"
            @focus="showPositionVisible"
            size="small"
            clearable
          />
          <!-- 员工岗位 -->
        </el-col>
      </div>
      <div style="text-align:right">
        <el-button type="primary" size="small" @click="saveReceive('保存')">{{$t('org.label.PreservationDetails')}}</el-button>
        <!-- 保存明细 -->
        <el-button size="small" @click="resetReceive()">{{$t('sys.button.reset')}}</el-button>
        <!-- 重置 -->
      </div>
    </el-dialog>
    <position :positionVisible="positionVisible" @changeCode="getPosition" :isMul="isMulFlag"></position>
    <userSelect :userSelectVisible="userVisible" :key="showKey" @selectData="getUser" />
  </div>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import isEnable from "@/components/org/isEnable/isEnable";
import sendType from "@/components/org/LookupValue";
import position from "@/components/org/position/position";
import userSelect from "@/components/org/userSelect/userSelect";
import receiverType from "@/components/org/LookupValue";
import belongto from "@/components/org/LookupValue";

export default {
  components: {
    isEnable,
    sendType,
    position,
    userSelect,
    receiverType,
    belongto
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    sysSceneSettingObjProp: {
      type: Object,
      default: function() {
        return {
          sceneCode: "",
          sceneDesc: "",
          sendType: "",
          sendTypeCode: "",
          isEnable: "",
          belongto: "",
          belongtoCode: "",
          updateControlId: ""
        };
      }
    },
    status: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data() {
    return {
      isMulFlag: false,
      listLoading: false,
      list: null,
      curDialogVisible: this.dialogVisible,
      sceneCodeDisabled: false,
      receiverTypeDisabled: false,
      positionDisabled: true,
      userDisabled: true,
      userName: "",
      positionName: "",
      positionCode: "",
      useId: "",
      // 网格查询API配置对象
      apiConfig: orgApis.mdsSysSceneSettingQueryByPage,
      isEnableKey: "",
      sendTypeKey: "",
      showKey: "",
      belongtoKey: "",
      receive: {
        receiveObj: "",
        receiverType: "",
        receiver: "",
        isEnable: "",
        updateControlId: ""
      },
      receiveQuery: {
        sceneCode: ""
      },
      sysSceneSettingObj: {
        sceneCode: "",
        sceneDesc: "",
        sendType: "",
        belongto: "",
        isEnable: "",
        updateControlId: ""
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      // 弹窗状态
      dialogStatus: "",
      positionVisible: false,
      userVisible: false,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  methods: {
    getisEnableDialog(val) {
      this.sysSceneSettingObj.isEnable = val;
    },
    getPosition(val) {
      this.positionName = val.name.toString();
      this.positionCode = val.code.toString();
      this.positionVisible = false;
    },
    //显示用户选择框
    showUserVisible() {
      this.userVisible = true;
      this.showKey = this.showKey + 1;
    },
    showPositionVisible() {
      this.positionVisible = true;
    },
    //获取选择用户的数据
    getUser(val) {
      this.userVisible = false;
      this.useId = "";
      this.userName = "";
      for (var i = 0; i < val.length; i++) {
        this.useId = this.useId + val[i].userId + ",";
        this.userName = this.userName + val[i].userName + ",";
      }
      this.useId = this.useId.substr(0, this.useId.length - 1);
      this.userName = this.userName.substr(0, this.userName.length - 1);
    },
    resetSysSceneSettingObj() {
      this.sysSceneSettingObj = {
        receiveObj: "",
        receiverType: "",
        receiver: "",
        isEnable: "",
        updateControlId: ""
      };
      if ((this.status = "edit")) {
        this.sysSceneSettingObj.sceneCode = this.sysSceneSettingObjProp.sceneCode;
      }
    },
    resetReceive() {
      this.positionCode = "";
      this.useId = "";
      this.userName = "";
      this.positionName = "";
    },
    getReceiverType(val) {
      if (val == 22) {
        this.userDisabled = false;
        this.positionDisabled = true;
      } else if (val == 23) {
        this.userDisabled = true;
        this.positionDisabled = false;
      }
      this.receive.receiverType = val;
    },
    getSendType(val) {
      this.sysSceneSettingObj.sendType = val;
    },
    getBelongto(val) {
      this.sysSceneSettingObj.belongto = val;
    },
    // 处理每页显示改变事件
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryReceive(1);
    },
    // 当前页记录
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.queryReceive(1);
    },
    //把每一行的索引放进row
    tableRowClassName({ row, rowIndex }) {
      row.index = rowIndex;
    },
    controlEnable(row) {
      this.receive.receiver = row.receiver;
      this.receive.receiverType = row.receiveType;
      this.receive.receiveObj=this.sysSceneSettingObj.sceneCode;
      this.receive.updateControlId=row.updateControlId;
      if (row.isEnable == "1") {
        this.receive.isEnable = "0";
        this.saveReceive("禁用");
      } else if (row.isEnable == "0") {
        this.receive.isEnable = "1";
        this.saveReceive("启用");
      }
    },
    //保存
    save() {
      const that = this;

      if (that.$utils.isEmpty(that.sysSceneSettingObj.sceneCode)) {
        that.$message({
          message: "请输入场景编码",
          type: "warning",
          duration: 2000
        });
        return;
      }
      if (that.$utils.isEmpty(that.sysSceneSettingObj.sceneDesc)) {
        that.$message({
          message: "请输入场景名称",
          type: "warning",
          duration: 2000
        });
        return;
      }

      //通知场景保存
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: orgApis.mdsSysSceneSettingMutationSave,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.sysSceneSettingObj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = false;
          that.$message({
            message: "保存成功",
            type: "success",
            duration: 2000
          });
        }
      });
    },
    saveReceive(status) {
      const that = this;
      if (status == "保存") {
        //通知对象保存
        if (this.positionCode == "" && this.useId == "") {
          that.$message({
            message: "请先选择通知对象",
            type: "warning",
            duration: 2000
          });
          return;
        }
        if (!this.userDisabled) {
          this.receive = {
            receiveObj: this.sysSceneSettingObj.sceneCode,
            receiver: this.useId,
            receiverType: this.receive.receiverType,
            isEnable: "1"
          };
        }
        if (!this.positionDisabled) {
          this.receive = {
            receiveObj: this.sysSceneSettingObj.sceneCode,
            receiver: this.positionCode,
            receiverType: this.receive.receiverType,
            isEnable: "1"
          };
        }
      }
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: orgApis.mdsSysSceneSettingDMutation,
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.receive
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
          that.listLoading = true;
          that.$message({
            message: status + "成功",
            type: "success",
            duration: 2000
          });
          that.queryReceive(1);
          that.listLoading = false;
        }
      });
    },
    queryReceive(page) {
      const that = this;
      that.currentRow = null;
      that.listLoading = true;
      that.receiveQuery.sceneCode = that.sysSceneSettingObj.sceneCode;
      let queryObj = {
        // api配置
        apiConfig: orgApis.mdsSysSceneSettingDQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["receiver", "receiveType", "isEnable"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.listQuery.pageSize,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.receiveQuery
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows
        ) {
          if (page) {
            //查询完返回指定的page页数
            that.listQuery.pageIndex = page;
          }
          that.pageTotal =
            response.data[queryObj.apiConfig.ServiceCode].records;
          that.list = response.data[queryObj.apiConfig.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    },
    openCodeHandleVisible() {
      this.sysSceneSettingObj = {
        sceneCode: this.sysSceneSettingObjProp.sceneCode,
        sceneDesc: this.sysSceneSettingObjProp.sceneDesc,
        sendType: this.sysSceneSettingObjProp.sendTypeCode,
        isEnable: this.sysSceneSettingObjProp.isEnable,
        belongto: this.sysSceneSettingObjProp.belongtoCode,
        updateControlId: this.sysSceneSettingObjProp.updateControlId
      };
      if (this.status == "add") {
        this.sceneCodeDisabled = false;
        this.receiverTypeDisabled = true;
        this.userDisabled = true;
        this.positionDisabled = true;
        this.receive.receiverType = "";
        this.userName = "";
        this.positionName = "";
        this.list = [];
        this.listLoading = false;
      } else if (this.status == "edit") {
        this.sceneCodeDisabled = true;
        this.receiverTypeDisabled = false;
        this.queryReceive(1);
      }
    },
    sendCode() {
      this.$emit("close");
    }
  },
  watch: {
    sysSceneSettingObj(val) {
      this.isEnableKey = this.isEnableKey + 1;
      this.sendTypeKey = this.sendTypeKey + 1;
      this.belongtoKey = this.belongtoKey + 1;
    },
    curDialogVisible(val) {
      if (val === true) {
        this.sysSceneSettingObj = {
          sceneCode: this.sysSceneSettingObjProp.sceneCode,
          sceneDesc: this.sysSceneSettingObjProp.sceneDesc,
          sendType: this.sysSceneSettingObjProp.sendTypeCode,
          isEnable: this.sysSceneSettingObjProp.isEnable,
          belongto: this.sysSceneSettingObjProp.belongtoCode,
          updateControlId: this.sysSceneSettingObjProp.updateControlId
        };
        if (this.status == "add") {
          this.sceneCodeDisabled = false;
          this.receiverTypeDisabled = true;
          this.userDisabled = true;
          this.positionDisabled = true;
          this.userName = "";
          this.positionName = "";
          this.list = [];
          this.listLoading = false;
        } else if (this.status == "edit") {
          this.sceneCodeDisabled = true;
          this.receiverTypeDisabled = false;
          this.queryReceive(1);
        }
      }
    }
  }
};
</script>
<style scoped>
/*按钮列移动到面包屑重合位置*/
.ttt {
  width: 1000px;
  height: 150px;
}
</style>
