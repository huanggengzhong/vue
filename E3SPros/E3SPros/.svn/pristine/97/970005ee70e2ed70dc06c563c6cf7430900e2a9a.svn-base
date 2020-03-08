/*
 * @Author: xgz 
 * @Date: 2019-08-13 09:21:36 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-27 17:02:54
 * @Last Modified time: 2019-09-03 10:28:19
 *流程节点
 */


<template>
  <div>
    <el-form-item label="流程节点" :prop="checkprop">
      <el-input readonly="readonly" v-model="input" placeholder="点击选择流程节点" suffix-icon="el-icon-search" @click.native="showdialog()"></el-input>
    </el-form-item>

    <el-dialog title="流程节点" :visible.sync="dialogVisible" :append-to-body="true" :width="width" @sentData="sendCode" class="dialog">
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
              <BusinessCategory :BusinessCategory="cxType" ref="BusinessCategory"></BusinessCategory>
            </el-col>
            <el-col :span="8">
              <NodePointName :NodePointName="cxName" ref="NodePointName"></NodePointName>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">查询结果</div>
      <el-table :data="tabledatas.tableData" @current-change="SelectH" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit ref="multipleTable">
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
    </el-dialog>
  </div>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import BusinessCategory from "@/components/crm/Select/Common/BusinessCategory";
import NodePointName from "@/components/crm/textbox/NodePointName";

export default {
  name: "ProcessNodePoint",
  components: {
    BusinessCategory,
    NodePointName
  },
  props: {
    ProcessNodePoint: {
      input: String,
      ptype: String,
      gtype: String,
      dialogVisible: Boolean,
      checkprop:String,
    }
  },
  data() {
    return {
      rowData: { name: "", code: "" },
      input: this.ProcessNodePoint.input,
      ptype: this.ProcessNodePoint.ptype,
      gtype: this.ProcessNodePoint.gtype,
      checkprop:this.ProcessNodePoint.checkprop,
      width: "900px",
      height: "580px",
      dialogVisible: false,
      cxType: {
        value: ""
      },
      cxName: {
        input: ""
      },
      tabledatas: {
        colnames: [
          { label: "业务流程", value: "serverTypeName" },
          { label: "节点编码", value: "nodeCode" },
          { label: "节点名称", value: "nodeName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csDbNodeQueryFindAll,
          apiQueryRow: [
            "serverTypeName",
            "nodeCode",
            "nodeName",
            "serverTypeCode"
          ],
          params: {
            //serverType:"",
            //nodeName:""
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
      // that.dialogVisible = true;
      if (this.ProcessNodePoint.dialogVisible == false) {
        that.dialogVisible = this.ProcessNodePoint.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    query: function() {
      let that = this;
      that.tabledatas.queryObj.params={}
      if (that.$refs.BusinessCategory != undefined) {
        if (that.$refs.BusinessCategory.value != "") {
          that.$set(that.tabledatas.queryObj.params, 'serverType', that.$refs.BusinessCategory.value);
        }
      }
      if (that.$refs.NodePointName != undefined) {
        if (that.$refs.NodePointName.input != "") {
          that.$set(that.tabledatas.queryObj.params, 'nodeName', that.$refs.NodePointName.input);
        }
      }
      if (that.ProcessNodePoint != undefined)
      {
        that.$set(that.tabledatas.queryObj.params, 'groupType', (that.ProcessNodePoint.gtype==""?"PV":that.ProcessNodePoint.gtype));
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
    handleSelect: function() {
      let that = this;
      that.input = this.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      this.$refs.BusinessCategory.reset();
      this.$refs.NodePointName.reset();
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.ProcessNodePoint.input;
      that.ptype = this.ProcessNodePoint.ptype;
      that.gtype = this.ProcessNodePoint.gtype;
      that.cxType.value = this.ProcessNodePoint.ptype;
      if (that.$refs.BusinessCategory == undefined) {
      } else {
        that.$refs.BusinessCategory.getData();
      }
      //this.query();
    },
    //清空事件
    clear: function() {
      let that = this;
      that.input = "";
      that.ptype = "";
      if (
        that.$refs.BusinessCategory == undefined &&
        that.$refs.NodePointName == undefined
      ) {
      } else {
        that.$refs.BusinessCategory.reset();
        that.$refs.NodePointName.reset();
      }
      //this.query();
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
      console.log(row);
      that.rowData.name = row.nodeName;
      that.rowData.code = row.nodeCode;
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
      that.dialogVisible = false;
      that.input = that.rowData.name;
      var cityTemp = [];
      var cityObj = {};
      cityObj["name"] = that.rowData.name;
      cityObj["code"] = that.rowData.code;
      cityTemp.push(cityObj);
      that.$emit("CatData", cityTemp);
    },
    resetdlr: function() {
      let that = this;
      that.input = "";
    },
    getNewData() {
      let that = this;
      that.input = this.ProcessNodePoint.input;
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



