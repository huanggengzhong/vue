<template>
  <div>
    <el-form-item label="服务类别">
      <el-input readonly="readonly" v-model="input" clearable placeholder="点击选择服务类别" suffix-icon="el-icon-search" @click.native="showdialog()"></el-input>
    </el-form-item>

    <!-- 弹窗 -->
    <el-dialog title="服务类别" :visible.sync="dialogVisible" @sentData="sendCode" width="900px" center>
      <div class="filter-container filter-title-crm">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="query()">查询</el-button>
          <el-button size="small" @click="sendCode">确认</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form>
          <el-row>
            <el-col :span="8">
              <ServiceBigClass ref="ServiceBigClass" :ServiceBigClass="cxBig" @changeCode="change"></ServiceBigClass>
            </el-col>
            <el-col :span="8">
              <ServiceMidClass ref="ServiceMidClass" :ServiceMidClass="cxMid" @changeCode="change2"></ServiceMidClass>
            </el-col>
            <el-col :span="8">
              <ServiceSmallClass ref="ServiceSmallClass" :ServiceSmallClass="cxSmall"></ServiceSmallClass>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <!-- 自定义网格开始 -->
      <div class="filter-container filter-title-crm">查询结果</div>
      <el-table :data="tabledatas.tableData" @current-change="SelectH" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit ref="multipleTable">
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
      <!-- 自定义网格结束 -->
    </el-dialog>
    <!-- 服务类别弹窗结束 -->
  </div>
</template>

<script>
import Name from "@/components/crm/textbox/Complaint/Name";
import CodeNumber from "@/components/crm/textbox/Complaint/CodeNumber";
import ServiceBigClass from "@/components/crm/Select/Common/ServiceBigClass";
import ServiceMidClass from "@/components/crm/Select/Common/ServiceMidClass";
import ServiceSmallClass from "@/components/crm/Select/Common/ServiceSmallClass";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "swd_ServiceType",
  components: {
    ServiceBigClass,
    ServiceMidClass,
    ServiceSmallClass
  },
  props: {
    swd_ServiceType: {
      input: String,
      ptype: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      rowData: {
        bigName: "",
        midName: "",
        smallName: "",
        bigCode: "",
        midCode: "",
        smallCode: ""
      },
      input: this.swd_ServiceType.input,
      ptype: this.swd_ServiceType.ptype,
      width: "850px",
      dialogVisible: false,
      cxBig: {
        value: "",
        ptype: this.swd_ServiceType.ptype
      },
      cxMid: {
        value: "",
        ptype: this.swd_ServiceType.ptype,
        pcode: ""
      },
      cxSmall: {
        value: "",
        ptype: this.swd_ServiceType.ptype,
        pcode: ""
      },
      tabledatas: {
        colnames: [
          { label: "服务大类", value: "serverClassNameL" },
          { label: "服务中类", value: "serverClassNameM" },
          { label: "服务小类", value: "serverClassNameS" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.serverClassQueryCommChoose,
          apiQueryRow: [
            "serverClassNameL",
            "serverClassCodeL",
            "serverClassNameM",
            "serverClassCodeM",
            "serverClassNameS",
            "serverClassCodeS",
            "serverType"
          ],
          params: {
            serverClassCodeL: "",
            serverClassCodeM: "",
            serverClassCodeS: "",
            serverType: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    change(val) {
      let that = this;
      that.cxMid.pcode = val;
      if (that.$refs.ServiceMidClass == undefined) {
      } else {
        that.$refs.ServiceMidClass.getData();
      }
      that.change2();
    },
    change2(val) {
      let that = this;
      that.cxSmall.pcode = val;
      if (that.$refs.ServiceSmallClass == undefined) {
      } else {
        that.$refs.ServiceSmallClass.getData();
      }
    },
    showdialog: function() {
      let that = this;
      if (this.swd_ServiceType.dialogVisible == false) {
        that.dialogVisible = this.swd_ServiceType.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.swd_ServiceType.input;
      that.ptype = this.swd_ServiceType.ptype;
      this.query();
    },
    getNewData() {
      let that = this;
      that.input = this.swd_ServiceType.input;
      that.ptype = this.swd_ServiceType.ptype;
    },
    query: function() {
      let that = this;
      if (
        that.$refs.ServiceBigClass == undefined &&
        that.$refs.ServiceMidClass == undefined &&
        that.$refs.ServiceSmallClass == undefined
      ) {
        that.tabledatas.queryObj.params.serverClassCodeL = "";
        that.tabledatas.queryObj.params.serverClassCodeM = "";
        that.tabledatas.queryObj.params.serverClassCodeS = "";
      } else {
        that.tabledatas.queryObj.params.serverClassCodeL =
          that.$refs.ServiceBigClass.value;
        that.tabledatas.queryObj.params.serverClassCodeM =
          that.$refs.ServiceMidClass.value;
        that.tabledatas.queryObj.params.serverClassCodeS =
          that.$refs.ServiceSmallClass.value;
      }
      that.tabledatas.queryObj.params.serverType = this.swd_ServiceType.ptype;

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
        that.$refs.ServiceBigClass == undefined &&
        that.$refs.ServiceMidClass == undefined &&
        that.$refs.ServiceSmallClass == undefined
      ) {
      } else {
        this.$refs.ServiceBigClass.reset();
        this.$refs.ServiceMidClass.reset();
        this.$refs.ServiceSmallClass.reset();
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
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.bigName = row.serverClassNameL;
      that.rowData.bigCode = row.serverClassCodeL;
      that.rowData.midName = row.serverClassNameM;
      that.rowData.midCode = row.serverClassCodeM;
      that.rowData.smallName = row.serverClassNameS;
      that.rowData.smallCode = row.serverClassCodeS;
    },
    sendCode() {
      let that = this;
      that.dialogVisible = false;
      that.input =
        that.rowData.bigName +
        ">" +
        that.rowData.midName +
        ">" +
        that.rowData.smallName;
      var cityTemp = [];
      var cityObj = {};
      cityObj["bigName"] = that.rowData.bigName;
      cityObj["bigCode"] = that.rowData.bigCode;
      cityObj["midName"] = that.rowData.midName;
      cityObj["midCode"] = that.rowData.midCode;
      cityObj["smallName"] = that.rowData.smallName;
      cityObj["smallCode"] = that.rowData.smallCode;
      cityTemp.push(cityObj);
      that.$emit("CatData", cityTemp);
    },
    resetx1: function() {
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
.el-checkbox{
  padding-left: 6px;
} */
</style>



