<template>
  <div>
    <el-form>
      <el-form-item :label="labelname">
        <el-input
          readonly="readonly"
          v-model="input"
          placeholder="点击选择"
          suffix-icon="el-icon-s-unfold"
          @click.native="showdialog()"
        ></el-input>
      </el-form-item>
    </el-form>

    <!-- 责任人--人员信息弹窗 -->
    <el-dialog title="人员信息" :visible.sync="dialogVisible" width="900px" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button size="small" type="primary" @click="query">查询</el-button>
          <el-button size="small" @click="handleSelect">确认</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params nedistan">
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

      <!-- 责任人--人员信息弹窗结束 -->
      <!-- 自定义网格开始 -->
      <div class="filter-container filter-title">查询结果</div>
      <el-table
        :data="tabledatas.tableData"
        highlight-current-row
        style="width: 100%;height:330px"
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column label="选择" align="center">
          <template>
            <el-button size="mini" type="text" @click="choice()">选择</el-button>
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
      <!-- 自定义网格结束 -->
    </el-dialog>
  </div>
</template>

<script>
//import Table from "@/components/crm/table/Table";
import StaffName from "@/components/crm/textbox/Clue/CallCenterClue/StaffName";
import EmployeeID from "@/components/crm/textbox/Clue/CallCenterClue/EmployeeID";
import Department from "@/components/crm/Select/Common/Department";
import ChannelSmalTypeName from "@/components/crm/Select/Common/Department";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "PersonnelInformation",
  components: {
    //Table,
    StaffName,
    EmployeeID,
    Department
  },
  props: {
    PersonnelInformation: {
      labelname: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      input: "",
      width: "800px",
      labelname: this.PersonnelInformation.labelname || "人员信息",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      formLabelWidth: "100px",
      StaffName: {
        input: ""
      },
      EmployeeID: {
        input: ""
      },
      Department: {
        value: ""
      },
      child: {
        input: "",
        value: "",
        options: []
      },
      tabledatas: {
        flag: true,
        colnames: [
          { label: "员工编号", value: "" },
          { label: "员工名称", value: "" },
          { label: "部门名称", value: "" },
          { label: "性别", value: "" },
          { label: "电子邮件", value: "" },
          { label: "手机号", value: "" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmOrgDlrQueryByPage,
          apiQueryRow: [
            "dlrCode",
            "dlrShortName",
            "brandcode",
            "orgType",
            "dlrStatus",
            "province",
            "city",
            "dlrFullName"
          ],
          params: {
            StaffName: "",
            EmployeeID: "",
            Department: ""
          }
        },
        tableData: [
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
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        value: "",
        options: []
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      if (this.PersonnelInformation.dialogVisible == false) {
        that.dialogVisible = this.PersonnelInformation.dialogVisible;
      } else {
        that.dialogVisible = true;
      } //使弹出框显示
    },
    handleSelect: function() {
      let that = this;
      //that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      this.$refs.StaffName.reset();
      this.$refs.EmployeeID.reset();
      this.$refs.Department.reset();
    },
    choice: function() {},
    query: function() {
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
  }
};
</script>

<style scoped>
.dmo-form-inline {
  float: left;
  padding: 0px 15px;
  text-align: left;
  margin-top: 20px;
  width: 98%;
}
.dialog .el-dialog__body {
  padding: 10px 10px 0px 10px;
}
.dmo-form-inline .btton {
  float: right;
}
.nedistan{
  padding:10px 10px 0px 10px;
}
</style>