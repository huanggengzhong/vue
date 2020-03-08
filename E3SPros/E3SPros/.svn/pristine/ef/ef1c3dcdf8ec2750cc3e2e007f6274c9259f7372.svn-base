<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" @click="query(1)">查询</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm" ref="conTitleHeight">查询条件</div>
    <div class="filter-container filter-params-crm" ref="conHeight">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <ReceiptType :ReceiptType="Rece" ref="recei"></ReceiptType>
            </el-col>
            <el-col :span="6">
              <ServiceMenuNumber :ServiceMenuNumber="Serm" ref="sermu"></ServiceMenuNumber>
            </el-col>
            <el-col :span="6">
              <txtCustomerName :txt_CustomerName="Cust" ref="custn"></txtCustomerName>
            </el-col>
            <el-col :span="6">
              <PhoneNumber :PhoneNumber="Phone" ref="phone"></PhoneNumber>
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row>
              <el-col :span="6">
                <DispatchTime :DispatchTime="Dist" ref="distp"></DispatchTime>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm" ref="resultTitleHeight">查询结果</div>
    <el-row class="table">
      <el-table
        :data="tabledata.tableDatas"
        :stripe="flag"
        highlight-current-row
        style="width: 100%;height:335px;"
        v-loading.body="listLoading"
        element-loading-text="Loading"
        border
        fit
      >
        <!-- <el-table-column type="selection" width="50"></el-table-column> -->
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column label="操作">
          <!-- scope.row:选中的一行数据 -->
          <!-- 打开线索详情（带值） -->
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handle(scope.$index, scope.row)">{{scope.row.responNodeCode?'响应':'处理'}}</el-button>
          </template>
        </el-table-column>
        <!-- 打开线索跟进历史查询（带值） -->
        <el-table-column
          v-for="item in tabledata.colnames"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
          align="center"
          width="100"
        ></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="tabledata.total" :page-size="tabledata.pagesize"
            :current-page="tabledata.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage">
      </el-pagination>
    </el-row>
  </div>
</template>
<script>
import ReceiptType from "@/components/crm/Select/Common/ReceiptType";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import txtCustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import DispatchTime from "@/components/crm/Time/DispatchTime";
import Table from "@/components/crm/table/Table";

import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmMyToBe",
  components: {
    ReceiptType,
    ServiceMenuNumber,
    txtCustomerName,
    PhoneNumber,
    DispatchTime,
    Table
  },
  data() {
    return {
      listLoading:false,
      toggleParam: false,
      response: "响应",
      flag:true,
      Rece: {
        value: ""
      },
      Serm: {
        input: ""
      },
      Cust: {
        input: ""
      },
      Phone: {
        input: ""
      },
      Dist: {
        value: ""
      },
      tabledata: {
        flag: true,
        pagesize: 10,
        pageindex: 1,
        total: 0,
        colnames: [
          { label: "单据类型", value: "serverTypeName" },
          { label: "超时状态", value: "overTimeStr" },
          { label: "服务单号", value: "serverOrder" },
          { label: "客户姓名", value: "custName" },
          { label: "电话", value: "phone" },
          { label: "派单人", value: "distPerson" },
          { label: "派单时间", value: "distDate" },
          { label: "摘要", value: "title" },
          { label: "单据状态", value: "status" },
          { label: "动作", value: "action" },
          { label: "最近处理人", value: "lastDealPerson" },
          { label: "最近处理时间", value: "lastDealDate" }
        ],
        tableDatas: [],
        params: { code: "1" },
        isoperat: true,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuMyTaskQueryFindAll, //我的待办查询
          apiQueryRow: [
            "serverType",
            "serverTypeName",
            "overTimeStr",
            "serverOrder",
            "serverId",
            "custName",
            "phone",
            "distPerson",
            "distDate",
            "title",
            "status",
            "action",
            "lastDealPerson",
            "lastDealDate",
            "responNodeCode", //响应节点编码（隐藏）
            // "crrucode",
            "page"
          ],

          // 我的待办查询参数
          params: {
            oemCode: '1', //厂商编码
            groupCode: '1', //集团编码
            beginDistDate: "",
            endDistDate: "",
            serverType: "",
            serverOrder: "",
            custName: "",
            phone: ""
          }
        }
      },

      // 响应
      respdata: {
        flag: true,
        isoperat: true,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        queryObj: {
          // .后面是服务编码，.前面固定写死
          type: "mutation",
          apiConfig: crmApis.csBuComplaintOrderMutationDealTS, //响应（投诉处理保存api）
          apiQueryRow: [],
          // 我的待办响应参数（不全）
          params: {
            serverId:'',
            serverType: "",
            serverOrder: "",
            oemCode: "", //厂商编码
            groupCode: "", //集团编码
            crruNode: "", //处理节点编码
            dealTitle: "响应",
            dealContent: "响应",
            custName: "",
            contactTel: ""
          }
        }
      }
    };
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    getDispatchTime(val) {
      this.listQuery.status = val;
    },
    // 响应、处理
    handle(index, rowData) {
      debugger
      console.log(index,rowData);
      let that=this;
      if (rowData.responNodeCode) {
        // 从我的待办查询获取
        that.respdata.queryObj.params.serverId = rowData.serverId;
        that.respdata.queryObj.params.serverType = rowData.serverType;
        that.respdata.queryObj.params.serverOrder = rowData.serverOrder;
        that.respdata.queryObj.params.crruNode = rowData.responNodeCode;//有值是响应状态，没值是处理状态
        that.respdata.queryObj.params.oemCode="1"
        that.respdata.queryObj.params.groupCode="1"
        that.respdata.queryObj.params.custName=rowData.custName;
        that.respdata.queryObj.params.contactTel="15914481996";
        let queryObj = {
          type:"mutation",
          // api配置
          apiConfig: that.respdata.queryObj.apiConfig, //响应（投诉处理保存api）
          // 需要调用的API服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: that.respdata.queryObj.apiQueryRow
            }
          ],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.respdata.pagesize,
            pageIndex: that.respdata.pageindex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.respdata.queryObj.params
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          ) {
            that.$crmcf.showMessages(that,'success','响应成功')
            that.$crmcf.jumpDetailTag(that,rowData.page,'/'+rowData.page,rowData)
            //this.query();
          }else {
              this.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
            }
        });
        this.query(1);
      } else {
        let that = this;
        // that.$router.push({ name: "Complainthand", params: rowData });
        //that.$router.push({ name: rowData.page, params: rowData });
        
        that.$crmcf.jumpDetailTag(that,rowData.page,"/"+rowData.page,rowData)
      }
    },
    query(val){
      let that = this;
      that.listLoading=true;
      that.tabledata.queryObj.params.beginDistDate = this.$refs.distp.value[0];
      that.tabledata.queryObj.params.endDistDate = this.$refs.distp.value[1];
      that.tabledata.queryObj.params.serverType = this.$refs.recei.value;
      that.tabledata.queryObj.params.serverOrder = this.$refs.sermu.input;
      that.tabledata.queryObj.params.custName = this.$refs.custn.input;
      that.tabledata.queryObj.params.phone = this.$refs.phone.input;

      let queryObj = {
        // api配置
        type: "query",
        apiConfig: that.tabledata.queryObj.apiConfig, //响应（投诉处理保存api）
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledata.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: val!=undefined?10:that.tabledata.pagesize,
          pageIndex: val!=undefined?1:that.tabledata.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledata.queryObj.params
        }
      };

      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        that.listLoading=false;
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
        ) {
          
          this.tabledata.tableDatas =
            response.data[queryObj.apiConfig.ServiceCode].rows;
            that.tabledata.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
            that.tabledata.total =response.data[queryObj.apiConfig.ServiceCode].records;
        }else {
              this.$crmcf.showMessages(that,'error',response.data[queryObj.apiConfig.ServiceCode].msg)
            }
      });
    },
    // 分页的三个方法
    prev() {
        let that = this;
        if (this.tabledata.pageindex > 1) {
            that.tabledata.pageindex = this.tabledata.pageindex - 1;
            this.query();
        }
    },
    next() {
        let that = this;
        if (true) {
            that.tabledata.pageindex = this.tabledata.pageindex + 1;
            this.query();
        }
    },
    changepage(index) {
        let that = this;
        that.tabledata.pageindex = index;
        this.query();
    },
    reset: function() {
      this.$refs.recei.reset();
      this.$refs.phone.reset();
      this.$refs.distp.reset();
      this.$refs.sermu.reset();
      this.$refs.custn.reset();
    }
  }
};
</script>
<style>
/* .filter-params .el-form-item__label {
  margin-right: 0px;
}
.el-form-item .el-form-item__content {
  margin-left: 0px;
}
.toggleParam {
  z-index: 3;
} */
</style>