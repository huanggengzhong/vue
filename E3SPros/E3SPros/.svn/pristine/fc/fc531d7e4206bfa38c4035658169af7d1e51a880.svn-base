<template>
  <section>
    <el-form-item label="渠道小类">
      <el-input
        v-model="input"
        placeholder="点击选择渠道小类"
        suffix-icon="el-icon-s-unfold"
        clearable
        @click.native="showdialog($event)"
        :disabled="isdisabled"
        @change="sendCode()"
      ></el-input>
    </el-form-item>
    <el-dialog
      :visible.sync="dialogVisible"
      :width="width"
      append-to-body
      class="dialog"
      title="渠道小类选择"
    >
      <div class="filter-container filter-params-crm">
        <el-table
          :data="tabledatas.tabledata"
          highlight-current-row
          style="width: 100%;height:360px"
          v-loading.body="false"
          element-loading-text="Loading"
          border
          fit
        >
          <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope" align="center">
              <el-button type="text" size="mini" @click="handleEdit(scope.$index, scope.row)">选择</el-button>
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
          :total="tabledatas.total"
          :page-size="tabledatas.pageSize"
          :current-page="tabledatas.pageIndex"
          @prev-click="prev"
          @next-click="next"
          @current-change="changepage"
        ></el-pagination>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "ChannelSmallClass",
  props: {
    fromDatas: {
      input: String
    },
    ChannelSmallClass: {
      input: String,
      dialogVisible: Boolean,
      isdisabled: Boolean,
      pcode: String
    }
  },
  data() {
    return {
      input: "",
      row: [],
      width: "800px",
      dialogVisible: false,
      isdisabled: this.ChannelSmallClass.isdisabled,
      tabledatas: {
        flag: true,
        tabledata: [],
        colnames: [
          {
            label: "接触方式名称",
            value: "PcDbInfoChanMExt.pcDbCantactWayExt.cantactWayName"
          },
          { label: "渠道大类名称", value: "PcDbInfoChanMExt.infoChanMName" },
          { label: "渠道小类名称", value: "infoChanDName" }
        ],
        queryObj: {
          //api配置
          // 后面是服务编码，.前面固定写死
          apiConfig: crmApis.pcDbInfoChanDQueryFindAll,
          //返回的
          apiQueryRow: [
            //缺少接触方式，审核方式，是否清洗
            "infoChanDId",
            "infoChanDName",
            "infoChanDCode",
            "isEnableCn",
            "updateControlId",
            "isPv"
          ],
          params: {
            //c缺少接触方式，渠道大类名称，
            oemCode: "",
            groupCode: "",
            infoChanDName: "",
            infoChanDCode: "",
            isPv: "1",
            isEnable: "",
            infoChanMId: ""
          }
        },
        pageIndex: 1,
        pageSize: 10,
        total: 0
      }
    };
  },
  created: function() {
    this.getData();
  },
  methods: {
    prev() {
      let that = this;
      if (this.tabledatas.pageIndex > 1) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
        this.getData();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
        this.getData();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.getData();
    },
    showdialog: function(e) {
      let that = this;
      // if (
      //   e.path[0] &&
      //   JSON.stringify(e.path[0]).indexOf("el-input__clear") != -1
      // ) {
      //   console.log("清除责任网点值，不弹窗");
      //   return;
      // }
      if(e.target.classList[2]=='el-input__clear'){
        return
      }
      console.log("进来了");
      // that.dialogVisible = true;
      if (this.ChannelSmallClass.dialogVisible == false) {
        that.dialogVisible = this.ChannelSmallClass.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    getData: function() {
      let that = this;
      //查询条件
      let str =
        "PcDbInfoChanMExt{" +
        "infoChanMName" +
        " " +
        "infoChanMId" +
        " " +
        "infoChanMCode" +
        " " +
        "pcDbCantactWayExt{" +
        "cantactWayCode" +
        " " +
        "cantactWayName}}";

      that.tabledatas.queryObj.apiQueryRow.push(str);
      that.pcode = that.ChannelSmallClass.pcode;
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
          pageSize: that.tabledatas.pageSize,
          pageIndex: that.tabledatas.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: { infoChanMId: that.pcode, isEnable: "1" }
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
          this.tabledatas.tabledata =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          this.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
        //这句话
        this.tabledatas.tabledata =
          response.data[queryObj.apiConfig.ServiceCode].rows;
      });
    },
    handleEdit: function(index, row) {
      let that = this;
      that.input = row.infoChanDName;
      this.$emit("getChannelSmallClass", row);
      that.dialogVisible = false;
    },
    sendCode() {
      this.$emit("changeCode", this.value);
    },
    reset() {
      let that = this;
      this.value = "";
    },
    getDatas() {
      this.input = this.ChannelSmallClass.input;
    },
    resetinput() {
      this.input = "";
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
</style>