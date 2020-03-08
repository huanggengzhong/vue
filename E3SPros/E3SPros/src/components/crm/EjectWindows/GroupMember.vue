<template>
  <section>
    <el-form-item :label="labelname">
      <el-input readonly="readonly" v-model="input" placeholder="点击选择成员" suffix-icon="el-icon-s-unfold" @click.native="showdialog()"></el-input>
    </el-form-item>
    <el-dialog title="成员选择" :visible.sync="dialogVisible" @sentData="sendCode" width="900px" :append-to-body="true" center>
      <div class="filter-container filter-title-crm">
        <div style="float:right">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="sendCode">确定</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-row>
          <el-col :span="4">
            <el-tree :data="dataList" :props="defaultProps" node-key="orgTreeId" @node-click="handleNodeClick"></el-tree>
          </el-col>
          <el-col :span="20">
            <el-row>
              <el-col :span="8">
                <EmployeeID ref="EmployeeID" :EmployeeID="cxEmpCode" />
              </el-col>
              <el-col :span="8">
                <StaffName ref="StaffName" :StaffName="cxEmpName" />
              </el-col>
              <el-col :span="8">
                <PhoneNumber ref="PhoneNumber" :PhoneNumber="cxPhone" />
              </el-col>
            </el-row>
            <div class="filter-container filter-title-crm">查询结果</div>
            <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:350px" max-height="350px" v-loading.body="false" element-loading-text="Loading" border fit ref="multipleTable">
              <el-table-column type="selection" width="80" align="center" label="选择+" filed="chose" current-row-key="choose" />
              <el-table-column type="index" label="序号" width="55"></el-table-column>
              <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
            </el-table>
            <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
          </el-col>
        </el-row>
      </div>

    </el-dialog>
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import EmployeeID from "@/components/crm/textbox/Clue/CallCenterClue/EmployeeID";
import StaffName from "@/components/crm/textbox/Clue/CallCenterClue/StaffName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
export default {
  name: "GroupMember",
  components: {
    Table,
    EmployeeID,
    StaffName,
    PhoneNumber
  },
  props: {
    fromDatas: {
      input: String,
      labelname: {
        type: String,
        default: "成员选择"
      }
    }
  },
  data() {
    return {
      input: "",
      cxOrgId: "",
      cxOrgName: "",
      width: "900px",
      labelname: this.fromDatas.labelname,
      dialogVisible: false,
      cxEmpCode: {
        input: ""
      },
      cxEmpName: {
        input: ""
      },
      cxPhone: {
        input: ""
      },
      tabledatas: {
        colnames: [
          { label: "员工编号", value: "empCode" },
          { label: "员工名称", value: "empName" },
          { label: "部门名称", value: "orgName" },
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
            "orgName",
            "genderName",
            "email",
            "mobile"
          ],
          params: {
            empCode: "",
            empName: "",
            orgName: "",
            isEnable: "1"
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      dataList: [],
      defaultProps: {
        children: "children",
        label: "orgName"
      }
    };
  },
  created() {
    this.LoadBaseData();
  },
  methods: {
    LoadBaseData: function() {
      let that = this;
      var qObj = {};
      that.$set(qObj, "orgTreeId", "15b9d039589a43698497d45b2869b0c3");
      let queryObj = {
        // api配置
        apiConfig: crmApis.mdmOrgRelationRealQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              "orgName",
              "orgCode",
              "orgBelongType",
              "orgTreeId",
              "linkId",
              "isEnable",
              "parentOrgTreeId",
              "treeType",
              "orgRealId"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 3000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: qObj
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          var treelist = response.data[queryObj.apiConfig.ServiceCode].rows;
          var tree = this.$utils.parseTreeFromList(
            treelist,
            "parentOrgTreeId",
            "orgTreeId"
          );
          this.dataList = tree;
        }
      });
    },
    showdialog: function() {
      let that = this;
      that.dialogVisible = true;
    },
    query: function() {
      let that = this;
      if (
        that.$refs.StaffName == undefined &&
        that.$refs.EmployeeID == undefined &&
        that.$refs.PhoneNumber == undefined
      ) {
        that.tabledatas.queryObj.params.empCode = "";
        that.tabledatas.queryObj.params.empName = "";
        //that.tabledatas.queryObj.params.deptId="";
      } else {
        that.tabledatas.queryObj.params.empCode = this.$refs.EmployeeID.input;
        that.tabledatas.queryObj.params.empName = this.$refs.StaffName.input;
        //that.tabledatas.queryObj.params.deptId=this.$refs.PhoneNumber.input;
      }
      that.tabledatas.queryObj.params.orgName = this.cxOrgName;
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
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    reset: function() {
      this.$refs.EmployeeID.reset();
      this.$refs.StaffName.reset();
      this.$refs.PhoneNumber.reset();
    },
    handleNodeClick(a, b, c) {
      this.cxOrgId = b.data.orgTreeId;
      this.cxOrgName = b.data.orgName;
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.fromDatas.input;
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
    sendCode() {
      let that = this;
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length == 0) {
        this.$message({
          message: "请至少选择一条数据",
          type: "warning",
          duration: 2000
        });
        return;
      }
      that.dialogVisible = false;
      var cityTemp = [];
      var empstr = "";
      for (var j = 0; j < selectData.length; j++) {
        var cityObj = {};
        cityObj["empId"] = selectData[j].empId;
        empstr += selectData[j].empName + ",";
        cityTemp.push(cityObj);
      }
      if (empstr != "") {
        this.input = empstr.substr(0, empstr.length - 1);
      }
      this.$emit("CatData", cityTemp);
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



