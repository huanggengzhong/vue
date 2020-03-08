<template>
  <div>
    <el-form-item label="兴趣爱好">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>

    <!-- 弹出框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      @sentData="sendCode"
      width="900px"
      class="dialog"
      title="兴趣爱好"
      center
      append-to-body
      modal-append-to-body
    >
      <div class="filter-container filter-params-crm">
        <el-form label-position="right">
          <el-row>
            <el-col>
              <el-button type="primary" @click.native="query">查询</el-button>
              <el-button @click.native="sendCode">确认</el-button>
              <el-button @click.native="reset">重置</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="兴趣爱好">
                <el-input v-model="hobby" placeholder="请输入" suffix-icon="el-icon-search" :readonly="isreadonly" :disabled="isdisabled"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <el-table
        :data="tabledatas.tableData"
        highlight-current-row
        style="width: 100%;height:330px"
        v-loading.body="false"
        element-loading-text="Loading"
        border
        fit
        ref="multipleTable"
      >
        <el-table-column
          type="selection"
          width="55"
          label="选择+"
          filed="chose"
          current-row-key="choose"
        />
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
  </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";//hobby
export default {
  name: "hobbyPop",
  components: {
  },
  props: {
    hobbyPop: {
      input: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      rowData: {
        dlrId: "",
        dlrCode: "",
        dlrShortName: ""
      },
      hobby:"",
      input: this.hobbyPop.input,
      width: "1000px",
      dialogVisible: false,
      toggleParam: false,
      tabledatas: {
        colnames: [
          { label: "兴趣爱好", value: "dlrCode" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmOrgdlrQueryByPage,
          apiQueryRow: [
            "dlrId",
            "dlrCode",
            "dlrShortName",
            "carBrandCode",
            "carBrandCn",
            "orgTypeName",
            "orgType",
            "dlrStatusName",
            "dlrStatus",
            "provinceName",
            "provinceId",
            "cityName",
            "cityId",
            "dlrFullName"
          ],
          params: {
            isEnable: "1",
            dlrShortName: "",
            carBrandCode: "",
            orgType: "",
            provinceId: "",
            cityId: "",
            dlrStatus: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      if (this.hobbyPop.dialogVisible == false) {
        that.dialogVisible = this.hobbyPop.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query: function() {
      let that = this;
      if (
        that.$refs.AgentAbbreviation == undefined &&
        that.$refs.AgentBrand == undefined &&
        that.$refs.AgentType == undefined &&
        that.$refs.Province == undefined &&
        that.$refs.City == undefined &&
        that.$refs.AgentStatus == undefined
      ) {
        that.tabledatas.queryObj.params.dlrShortName = "";
        that.tabledatas.queryObj.params.carBrandCode = "";
        that.tabledatas.queryObj.params.orgType = "";
        that.tabledatas.queryObj.params.provinceId = "";
        that.tabledatas.queryObj.params.cityId = "";
        that.tabledatas.queryObj.params.dlrStatus = "";
      } else {
        that.tabledatas.queryObj.params.dlrShortName =
          that.$refs.AgentAbbreviation.input;
        that.tabledatas.queryObj.params.carBrandCode =
          that.$refs.AgentBrand.value;
        that.tabledatas.queryObj.params.orgType = that.$refs.AgentType.value;
        that.tabledatas.queryObj.params.provinceId = that.$refs.Province.value;
        that.tabledatas.queryObj.params.cityId = that.$refs.City.value;
        that.tabledatas.queryObj.params.dlrStatus =
          that.$refs.AgentStatus.value;
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
    change(val) {
      let that = this;
      that.cxCity.pcode = val;
      if (that.$refs.City == undefined) {
      } else {
        that.$refs.City.getData();
      }
    },
    reset: function() {
      let that = this;
      if (
        that.$refs.AgentAbbreviation == undefined &&
        that.$refs.AgentBrand == undefined &&
        that.$refs.AgentType == undefined &&
        that.$refs.Province == undefined &&
        that.$refs.City == undefined &&
        that.$refs.AgentStatus == undefined
      ) {
      } else {
        that.$refs.AgentAbbreviation.reset();
        that.$refs.AgentBrand.reset();
        that.$refs.AgentType.reset();
        that.$refs.Province.reset();
        that.$refs.City.reset();
        that.$refs.AgentStatus.reset();
      }
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
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.hobbyPop.input;
      this.query();
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.dlrId = row.dlrId;
      that.rowData.dlrCode = row.dlrCode;
      that.rowData.dlrShortName = row.dlrShortName;
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
        cityObj["carBrandCode"] = selectData[j].carBrandCode;
        cityObj["dlrCode"] = selectData[j].dlrCode;
        cityObj["dlrShortName"] = selectData[j].dlrShortName;
        empstr += selectData[j].dlrShortName + ",";
        cityTemp.push(cityObj);
      }
      if (empstr != "") {
        this.input = empstr.substr(0, empstr.length - 1);
      }
      this.$emit("CatData", cityTemp);
    },
    resetgz() {
      let that = this;
      that.input = "";
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
    width: 100%;
}
.dialog .el-dialog__body {
    padding: 10px 10px;
}
.dmo-form-inline .btton {
    float: right;
} */
</style>