<template>
    <!-- <section> -->
    <div>
      <!-- <el-form-item label="责任人" :prop="checkprop">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择责任人"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
      </el-form-item>-->

      <!-- 短信模板弹窗 -->
      <el-dialog
        title="责任人"
        :visible.sync="dialogVisible"
        @sentData="sendCode"
        width="900px"
        :append-to-body="true"
        center
      >
        <div class="filter-container filter-title-crm">
          查询条件
          <div style="float:right">
            <el-button type="primary" @click="query">查询</el-button>
            <el-button @click="sendCode">确认</el-button>
            <el-button @click="reset">重置</el-button>
          </div>
        </div>
        <div class="filter-container filter-params-crm">
          <el-form>
            <el-row>
              <el-col :span="8">
                <StaffName :StaffName="StaffName" ref="StaffName"></StaffName>
              </el-col>
              <el-col :span="8">
                <EmployeeID :EmployeeID="EmployeeID" ref="EmployeeID"></EmployeeID>
              </el-col>
              <el-col :span="8">
                <Department :Department="Department" ref="Department"></Department>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div class="filter-container filter-title-crm">查询结果</div>
        <el-table
          :data="tabledatas.tableData"
          @current-change="SelectH"
          highlight-current-row
          style="width: 100%;height:330px"
          v-loading.body="false"
          element-loading-text="Loading"
          border
          fit
          ref="multipleTable"
        >
          <el-table-column type="index" label="序号" width="55"></el-table-column>
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
          @prev-click="prev"
          @next-click="next"
          @current-change="changepage"
        ></el-pagination>
      </el-dialog>
      <!-- 短信模板弹窗结束 -->
      <!-- </section> -->
    </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import StaffName from "@/components/crm/textbox/Clue/CallCenterClue/StaffName";
import EmployeeID from "@/components/crm/textbox/Clue/CallCenterClue/EmployeeID";
import Department from "@/components/crm/Select/Common/Department";
import ChannelSmalTypeName from "@/components/crm/Select/Common/Department";
export default {
  name: "edit",
  components: {
    StaffName,
    EmployeeID,
    Department
  },
  props: {
    swd_DutyPeople: {
      input: String,
      dialogVisible: Boolean,
      checkprop: String
    }
  },
  data() {
    return {
      rowData: {
        dlrCode: "",
        empId: "",
        empCode: "",
        empName: ""
      },
      input: this.swd_DutyPeople.input,
      checkprop: this.swd_DutyPeople.checkprop,
      dialogVisible: false,
      StaffName: {
        input: ""
      },
      EmployeeID: {
        input: ""
      },
      Department: {
        value: ""
      },
      tabledatas: {
        colnames: [
          { label: "员工编号", value: "empCode" },
          { label: "员工名称", value: "empName" },
          { label: "部门名称", value: "" },
          { label: "性别", value: "genderName" },
          { label: "电子邮件", value: "email" },
          { label: "手机号", value: "mobile" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmOrgEmployeeQueryFindAll,
          apiQueryRow: [
            "dlrId",
            "dlrCode",
            "deptId",
            "empId",
            "empCode",
            "empName",
            //"deptName",
            "genderName",
            "email",
            "mobile"
          ],
          params: {
            empCode: "",
            empName: "",
            deptId: "",
            isEnable: "1"
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    // showdialog: function() {
    //   let that = this;
    //   console.log("进来了");
    //   if (this.swd_DutyPeople.dialogVisible == false) {
    //     that.dialogVisible = this.swd_DutyPeople.dialogVisible;
    //   } else {
    //     that.dialogVisible = true;
    //   }
    //   that.query();
    // },
    query: function() {
      let that = this;
      if (
        that.$refs.StaffName == undefined &&
        that.$refs.EmployeeID == undefined &&
        that.$refs.Department == undefined
      ) {
        that.tabledatas.queryObj.params.empCode = "";
        that.tabledatas.queryObj.params.empName = "";
        that.tabledatas.queryObj.params.deptId = "";
      } else {
        that.tabledatas.queryObj.params.empCode = this.$refs.EmployeeID.input;
        that.tabledatas.queryObj.params.empName = this.$refs.StaffName.input;
        that.tabledatas.queryObj.params.deptId = this.$refs.Department.value;
      }
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
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    reset: function() {
      let that = this;
      if (
        that.$refs.StaffName == undefined &&
        that.$refs.EmployeeID == undefined &&
        that.$refs.Department == undefined
      ) {
      } else {
        that.$refs.StaffName.reset();
        that.$refs.EmployeeID.reset();
        that.$refs.Department.reset();
      }
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.swd_DutyPeople.input;
      that.dialogVisible = this.swd_DutyPeople.dialogVisible;
      //this.query();
    },
    clear: function() {
      let that = this;
      that.input = "";
    },
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
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.dlrCode = row.dlrCode;
      that.rowData.empId = row.empId;
      that.rowData.empCode = row.empCode;
      that.rowData.empName = row.empName;
    },
    sendCode() {
      let that = this;
      that.dialogVisible = false;
      that.input = that.rowData.empName;
      var cityTemp = [];
      var cityObj = {};
      cityObj["dlrCode"] = that.rowData.dlrCode;
      cityObj["empId"] = that.rowData.empId;
      cityObj["empCode"] = that.rowData.empCode;
      cityObj["empName"] = that.rowData.empName;
      cityTemp.push(cityObj);
      that.$emit("CatData", cityTemp);
    }
  }
};
</script>

<style scoped>
/* .dmo-form-inline {
  float: left;
  padding: 0px 15px;
  text-align: left;
  margin-top: 20px;
  width: 98%;
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
} */
</style>
