<template>
  <div>
    <el-form-item label="责任部门">
      <el-input readonly="readonly" :disabled="isdisable" v-model="input" placeholder="点击选择责任部门" suffix-icon="el-icon-search" @click.native="showdialog()"></el-input>
    </el-form-item>
    <!-- 责任部门弹窗 -->
    <el-dialog title="责任部门" :visible.sync="dialogVisible" width="900px" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="handleSelect">确认</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form>
          <el-row>
            <el-col :span="8">
              <OrganizationName :OrganizationName="child" ref="OrganizationName"></OrganizationName>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <!-- 自定义网格开始 -->
      <div class="filter-container filter-title">查询结果</div>
      <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit>
        <el-table-column type="index" label="序号" width="55"></el-table-column>

        <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="9" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex"></el-pagination>
      <!-- 自定义网格结束 -->
    </el-dialog>
    <!-- 责任部门弹窗结束 -->
  </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OrganizationName from "@/components/crm/textbox/OrganizationName";

export default {
  name: "ResponsibleDepartment",
  components: {
    OrganizationName
  },
  props: {
    ResponsibleDepartment: {
      input: String,
      isdisable: Boolean,
      dialogVisible: Boolean
    }
  },

  data() {
    return {
      input: "",
      width: "900px",
      height: "580px",
      dialogVisible: false,
      isdisable: this.ResponsibleDepartment.isdisable,
      form: {
        name: "",
        region: ""
      },
      child: {
        input: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        flag: true,
        colnames: [
          { label: "上级部门", value: "name" },
          { label: "部门名称", value: "address" }
        ],
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
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis,
          apiQueryRow: ["serverOrder", "createdDate"],
          params: {
            serverType: "",
            carBrandCode: "",
            xx: "",
            xdutyPersonId: "",
            isEnable: ""
          }
        }
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      if (this.ResponsibleDepartment.dialogVisible == false) {
        that.dialogVisible = this.ResponsibleDepartment.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
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
          response.data[queryObj.apiConfig.ServiceCode].msg;
        }
      });
    },
    handleSelect: function() {
      let that = this;
      that.dialogVisible = false;
    },
    reset: function() {
      this.input = "";
      if (this.$refs.OrganizationName != undefined) {
        this.$refs.OrganizationName.reset();
      }
    },
    getData() {
      let that = this;
      that.input = this.ResponsibleDepartment.input;
    }
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
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
}
.el-table td div {
  padding-left: 9px;
}
</style>






