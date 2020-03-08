<!--
* 描述: 新建服务单
* 创建人: dxuem
* 创建时间: 2019-08-03 10:42
* 记录：
*  20190803 新建 dxuem
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <ServiceMenuNumber :ServiceMenuNumber="Sernum" ref="Sernum"></ServiceMenuNumber>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-row>
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
    </el-row>
  </div>
</template>
<script>
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "crmClueFollowHis",
  components: {
    ServiceMenuNumber,
  },
  data() {
    return {
      Sernum: {
        input: ""
      },
      tabledatas: {
        colnames: [
          { label: "意向车系", value: "carSeriesCn" },
          { label: "客户名称", value: "custName" },
          { label: "意向级别", value: "clueLevelCode" },
          { label: "回访描述", value: "reviewDesc" },
          { label: "回访时间", value: "factReviewDate" },
          { label: "处理状态", value: "touchStatusName" },
          //{ label: "回访类型", value: "reviewTypeName" },
          { label: "回访人员", value: "hfPerson" },
          { label: "来源单号", value: "serverOrder" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryReviewRecord,
          apiQueryRow: [
            "carSeriesCn",
            "custName",
            "clueLevelCode",
            "reviewDesc",
            "factReviewDate",
            "touchStatusName",
            //"reviewTypeName",
            "hfPerson",
            "serverOrder"
          ],
          params: {
            serverOrder: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  mounted(){
    this.$nextTick(function(){
      this.query();
    })
  },
  methods: {
    query() {
      let that = this;
      that.Sernum.input=this.$route.params.serverOrder;
      that.$refs.Sernum.getData();
      that.tabledatas.queryObj.params.serverOrder = this.$route.params.serverOrder;
      debugger;
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
      debugger;
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
    prev(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    next(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
   
  }
};
</script>
<style scoped>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.el-form-item .el-form-item__content {
  margin-left: 0px;
}
</style>