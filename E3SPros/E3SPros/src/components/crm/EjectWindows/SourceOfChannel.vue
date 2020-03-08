<template>
  <section>
    <el-form-item label="渠道来源" prop="SourceOfChannel.input">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="渠道来源选择"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>
    <!-- 弹出框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      :append-to-body="true"
      :width="width"
      @sentData="sendCode"
      class="dialog"
      title="渠道来源选择"
    >
      <div class="filter-container filter-title-crm">
        <el-row>
          <el-col :span="4" style="padding:0">查询条件</el-col>
          <el-col :span="20">
            <div class="filter-container filter-button">
              <el-button type="primary" @click.native="query">查询</el-button>
              <el-button @click.native="sendCode">确认</el-button>
              <el-button @click.native="reset">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-params-crm">
        <el-form label-position="right">
          <el-row>
            <el-col :span="24">
              <el-col :span="8">
                <ContactWay :ContactWay="cont" ref="ContactWay" @changeCode="change"></ContactWay>
              </el-col>
              <el-col :span="7">
                <ChannelBigClass :ChannelBigClass="chanbig" ref="ChannelBigClass"></ChannelBigClass>
              </el-col>
              <el-col :span="9">
                <ChannelSmalTypeName :ChannelSmalTypeName="chansma" ref="ChannelSmalTypeName"></ChannelSmalTypeName>
              </el-col>
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
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import ChannelBigClass from "@/components/crm/Select/Common/ChannelBigClass";
import ChannelSmalTypeName from "@/components/crm/textbox/Clue/ChannelSmalTypeName";
export default {
  name: "SourceOfChannel",
  components: {
    ContactWay,
    ChannelBigClass,
    ChannelSmalTypeName
  },
  props: {
    SourceOfChannel: {
      dialogVisible: Boolean,
      input: String
    }
  },
  data() {
    return {
      input: this.SourceOfChannel.input,
      rowData: {
        cantactWayCode: "",
        cantactWayName: "",
        infoChanMCode: "",
        infoChanMName: "",
        infoChanDCode: "",
        infoChanDName: ""
      },
      cont: {
        value: ""
      },
      chanbig: {
        value: "",
        pcode: ""
      },
      chansma: {
        input: ""
      },
      width: "1000px",
      dialogVisible: false,
      tabledatas: {
        colnames: [
          { label: "接触方式", value: "cantactWayName" },
          { label: "渠道大类名称", value: "infoChanMName" },
          { label: "渠道小类名称", value: "infoChanDName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.sourceChannelInfoQueryChoose,
          apiQueryRow: [
            "cantactWayId",
            "cantactWayCode",
            "cantactWayName",
            "infoChanMId",
            "infoChanMCode",
            "infoChanMName",
            "infoChanDId",
            "infoChanDCode",
            "infoChanDName"
          ],
          params: {
            cantactWayId: "",
            infoChanMId: "",
            infoChanDName: "",
            dlrCode:this.$store.getters.orgInfo.dlrCode,
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
      console.log("进来了");
      if (this.SourceOfChannel.dialogVisible == false) {
        that.dialogVisible = this.SourceOfChannel.dialogVisible;
      } else {
        that.dialogVisible = true;
      } //使弹出框显示
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.SourceOfChannel.input;
      this.query();
    },
    change(val) {
      let that = this;
      that.chanbig.pcode = val;
      if (that.$refs.ChannelBigClass == undefined) {
      } else {
        that.$refs.ChannelBigClass.getData();
      }
    },
    query: function() {
      let that = this;
      if (
        that.$refs.ContactWay == undefined &&
        that.$refs.ChannelBigClass == undefined &&
        that.$refs.ChannelSmalTypeName == undefined
      ) {
        that.tabledatas.queryObj.params.cantactWayId = "";
        that.tabledatas.queryObj.params.infoChanMId = "";
        that.tabledatas.queryObj.params.infoChanDName = "";
      } else {
        that.tabledatas.queryObj.params.cantactWayId = this.$refs.ContactWay.value;
        that.tabledatas.queryObj.params.infoChanMId = this.$refs.ChannelBigClass.value;
        that.tabledatas.queryObj.params.infoChanDName = this.$refs.ChannelSmalTypeName.input;
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
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        } else {
          that.$notify.error({
            title: "错误",
            message: response.data[queryObj.apiConfig.ServiceCode].msg
          });
        }
      });
    },
    reset: function() {
      let that = this;
      if (
        that.$refs.ContactWay == undefined &&
        that.$refs.ChannelBigClass == undefined &&
        that.$refs.ChannelSmalTypeName == undefined
      ) {
      } else {
        that.$refs.ContactWay.reset();
        that.$refs.ChannelBigClass.reset();
        that.$refs.ChannelSmalTypeName.reset();
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
      that.rowData.cantactWayCode = row.cantactWayCode;
      that.rowData.cantactWayName = row.cantactWayName;
      that.rowData.infoChanMCode = row.infoChanMCode;
      that.rowData.infoChanMName = row.infoChanMName;
      that.rowData.infoChanDCode = row.infoChanDCode;
      that.rowData.infoChanDName = row.infoChanDName;
    },
    sendCode() {
      let that = this;
      that.dialogVisible = false;
      that.input = that.rowData.cantactWayName;
      if (that.rowData.infoChanMName != "") {
        that.input += ">" + that.rowData.infoChanMName;
      }
      if (that.rowData.infoChanMName != "") {
        that.input += ">" + that.rowData.infoChanDName;
      }
      var cityTemp = [];
      var cityObj = {};
      cityObj["cantactWayCode"] = that.rowData.cantactWayCode;
      cityObj["cantactWayName"] = that.rowData.cantactWayName;
      cityObj["infoChanMCode"] = that.rowData.infoChanMCode;
      cityObj["infoChanMName"] = that.rowData.infoChanMName;
      cityObj["infoChanDCode"] = that.rowData.infoChanDCode;
      cityObj["infoChanDName"] = that.rowData.infoChanDName;
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