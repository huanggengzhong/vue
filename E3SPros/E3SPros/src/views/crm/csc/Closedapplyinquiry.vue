<!--
* 描述: 结案延期申请查询
* 创建人: zxuan
* 创建时间: 2019-07-27
* 记录：
*  
-->
<template>
    <div class="app-container app-container-table">
        <div class="filter-container filter-button">
            <el-button type="primary" @click="query(1)">查询</el-button>
            <el-button @click="reset()">重置</el-button>
        </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-row>
              <el-col :span="6">
                <ApplyExtensionTimes :ApplyExtensionTimes="applyEx" ref="applytime"></ApplyExtensionTimes>
              </el-col>
              <el-col :span="6">
                <ServiceMenuNumber :ServiceMenuNumber="serviceMenu" ref="sermenu" />
              </el-col>
              <el-col :span="6">
                <el-form-item label="申请延期原因">
                  <el-input v-model="delayreason" placeholder="请输入"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>
                </el-row>
            </el-form>
        </div>

    <div class="filter-container filter-title-crm">查询结果</div>
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
      <el-table-column label="操作" width="100" align="center">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="detail(scope.$index, scope.row)">详情</el-button>
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
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
    <!-- 结案延期申请详情弹窗 -->
    <el-dialog
      title="结案延期申请"
      :visible.sync="dialogYQSQ"
      :append-to-body="true"
      width="900px"
      center
    >
      <!-- <div class="filter-container filter-title-crm">
        结案延期申请详情
        <div style="float:right">
          <el-button size="small" @click="backto">返回</el-button>
        </div>
      </div> -->
      <div class="filter-container filter-params-crm filter-params-sub">
        <el-form label-position="right" disabled>
          <el-row>
            <el-col :span="6">
              <ServiceMenuNumber :ServiceMenuNumber="ServiceMenuNumber" ref="ServiceMenuNumber" />
            </el-col>
            <el-col :span="6">
              <ApplyExtensionTime
                :ApplyExtensionTime="ApplyExtensionTime"
                ref="ApplyExtensionTime"
              />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="申请延期原因">
                <el-input v-model="delayreason1" type="textarea" placeholder="请输入" class="long-textarea-style" resize="none"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">延期申请记录</div>
      <Table :tabledatas="tabledatasJL" ref="tableJL" />
    </el-dialog>
  </div>
</template>
<script>
import ApplyExtensionTimes from "@/components/crm/Time/ApplyExtensionTimes";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import RelatedBenchmarkCar from "@/components/crm/EjectWindows/RelatedBenchmarkCar";
import ApplyExtensionTime from "@/components/crm/Time/ApplyExtensionTime";
export default {
  name: "Closedapplyinquiry",
  components: {
    ApplyExtensionTimes,
    ServiceMenuNumber,
    Table,
    RelatedBenchmarkCar,
    ApplyExtensionTime
  },
  data() {
    return {
      toggleParam: false,
      dialogYQSQ: false,
      ableordis: false,
      delayreason: "",
      delayreason1: "",
      tabledatas: {
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        tableData: [
        ],
        colnames: [
          { label: "服务单号", value: "serverOrder" },
          { label: "申请延期时间", value: "applyTime" },
          { label: "申请延期原因", value: "delayReson" }
        ],
        queryObj: {
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: ["serverOrder", "applyTime", "delayReson"],
          params: {
            delayId: "",
            createdDateStart: "",
            createdDateEnd: "",
            serverOrder: "",
            delayReson: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      tabledatasJL: {
        // 操作列
        ismuti: false,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "申请时间", value: "applyTime" },
          { label: "申请原因", value: "delayReson" },
          { label: "审核人", value: "shPersonName" },
          { label: "审核状态", value: "delayStatus" },
          { label: "审核意见", value: "shDes" },
          { label: "审核时间", value: "shTimie" }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "applyTime",
            "delayReson",
            "shPersonName",
            "delayStatus",
            "shDes",
            "shTimie"
          ],
          params: {
            oemCode: "1",
            groupCode: "1",
            serverOrder: ""
          }
        }
      },
      ApplyExtensionTime: {
        value: ""
      },
      ServiceMenuNumber: {
        input: ""
      },
      delayreason: "",
      applyEx: {
        value: ""
      },
      serviceMenu: {
        input: ""
      }
    };
  },
  methods: {
    query(val) {
      let that = this;
      that.tabledatas.queryObj.params.createdDateStart = that.$refs.applytime.value[0]
      that.tabledatas.queryObj.params.createdDateEnd = that.$refs.applytime.value[1]
      that.tabledatas.queryObj.params.serverOrder = that.$refs.sermenu.input;
      that.tabledatas.queryObj.params.delayReson = that.delayreason;
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
          pageIndex: val!=undefined?1:that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {

          if(val==undefined&&(response.data[queryObj.apiConfig.ServiceCode].rows==null||
            response.data[queryObj.apiConfig.ServiceCode].rows.length==0))
            {
              that.query(1);
            }else{that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;}
          
        }else{
          this.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
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
    reset: function() {
      this.$refs.applytime.reset();
      this.$refs.sermenu.reset();
      this.delayreason = "";
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    detail(index, rowData) {
      let that = this;
      that.dialogYQSQ = true;
      
      
      that.delayreason1 = rowData.delayReson;
      that.tabledatasJL.queryObj.params.serverOrder=rowData.serverOrder;
      setTimeout(function() {
          ;
          if (that.$refs.tableJL != undefined) {
            that.ServiceMenuNumber.input = rowData.serverOrder;
            that.ApplyExtensionTime.value = rowData.applyTime;
            that.$refs.ServiceMenuNumber.getData();
            that.$refs.ApplyExtensionTime.getData();
            that.$refs.tableJL.getData();
          }
        }, 100);
    }
}}
</script>
<style>
/* .filter-params-crm .el-form-item__label {
    margin-right: 0px;
}
.query-params .el-col {
    margin-bottom: 0px;
}
.filter-params-crm .long1-col .el-input {
    width: 75%;
}
.filter-params-crm .long1-col label {
    width: 25%;
}
.filter-params-crm .long1-col .el-textarea {
    width: 75%;
} */
</style>
