
<!--
* 描述: 本组待办——线索培育
* 创建人: dxuem
* 创建时间: 2019-07-27 15:42
* 记录：
*  20190727 新建 dxuem
-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="22">
            <el-col :span="6">
              <txt_CustomerName :txt_CustomerName="Ftxt_CustomerName" ref="Ftxt_CustomerName"></txt_CustomerName>
            </el-col>
            <el-col :span="6">
              <PhoneNumber :PhoneNumber="FPhoneNumber" ref="FPhoneNumber"></PhoneNumber>
            </el-col>
            <el-col :span="6">
              <ContactWay :ContactWay="FContactWay" ref="FContactWay"></ContactWay>
            </el-col>
            <el-col :span="6">
              <ClueNumber :ClueNumber="FClueNumber" ref="FClueNumber"></ClueNumber>
            </el-col>
          </el-col>
          <el-col :span="2">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" class="toggleParam">
            <el-row style="border:none">
              <el-col :span="6">
                <dt_BuildMenuDates :dt_BuildMenuDates="Fdt_BuildMenuDates" ref="Fdt_BuildMenuDates"></dt_BuildMenuDates>
              </el-col>
              <el-col :span="6">
                <sct_CarBrand :sct_CarBrand="Fsct_CarBrand" ref="Fsct_CarBrand"></sct_CarBrand>
              </el-col>
              <el-col :span="6">
                <CurrentHandler :CurrentHandler="FCurrentHandler" ref="FCurrentHandler"></CurrentHandler>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title-crm">查询结果</div>

    <el-table
      :data="tabledatas.tabledata"
      :stripe="tabledatas.flag"
      highlight-current-row
      style="width: 100%;height:390px;"
      element-loading-text="Loading"
      v-loading.body="listLoading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
      <el-table-column label="操作" align="center" width="185px">
        <!-- scope.row:选中的一行数据 -->
        <template slot-scope="scope" align="center">
          <el-col>
            <el-button
              type="text"
              size="mini"
              style="padding:0px"
              @click="rush(scope.$index,scope.row)"
            >{{(scope.row.processingAction=="1")?'处理':'抢单'}}</el-button>
          </el-col>
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
</template>
<script>
import ContactWay from "@/components/crm/Select/Common/ContactWay";
import dt_BuildMenuDates from "@/components/crm/Time/dt_BuildMenuDates";
import sct_CarBrand from "@/components/crm/Select/Common/sct_CarBrand";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import ClueNumber from "@/components/crm/textbox/Clue/ClueNumber";
import CurrentHandler from "@/components/crm/textbox/Clue/CurrentHandler";
import Table from "@/components/crm/table/Table";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

export default {
  name: "crmGTBDClueCul",
  components: {
    txt_CustomerName,
    // DispatchTime,
    dt_BuildMenuDates,
    PhoneNumber,
    ClueNumber,
    // DispatchTime,
    sct_CarBrand,
    ContactWay,
    CurrentHandler
  },
  data() {
    return {
      msg: "",
      listLoading: false,
      toggleParam: false,

      Ftxt_CustomerName: {
        input: ""
      },
      FPhoneNumber: {
        input: ""
      },
      FContactWay: {
        value: ""
      },
      FClueNumber: {
        input: ""
      },
      Fdt_BuildMenuDates: {
        value: ""
      },
      Fsct_CarBrand: {
        value: ""
      },
      FCurrentHandler: {
        input: ""
      },
      tabledatas: {
        flag: true,

        colnames: [
          { label: "当前处理人", value: "nextDealUserName" },
          { label: "意向品牌", value: "carBrandName" },
          { label: "线索单号", value: "serverOrder" },
          { label: "客户姓名", value: "custName" },
          { label: "客户电话", value: "contactTel" },
          { label: "备用电话", value: "backupTel" },
          { label: "意向车系", value: "carSeriesCn" },
          { label: "接触方式", value: "cantactWayName" },
          { label: "接触次数", value: "cleanQty" },
          { label: "建单人", value: "createdName" },
          { label: "建单时间", value: "createdDate" },
          { label: "分配时间", value: "assignDate" }
        ],
        tabledata: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.clueServerQueryFromHeadquarters, //本组待办_线索培育查询
          apiQueryRow: [
            "nextDealUserName",
            "carBrandName",
            "serverOrder",
            "custName",
            "contactTel",
            "backupTel",
            "carSeriesCn",
            "cantactWayName",
            "cleanQty",
            "createdName",
            "createdDate",
            "assignDate",
            "processingAction",
          ],
          params: {
            createdDateStart: "",
            createdDateEnd: "",
            custName: "",
            contactTel: "",
            cantactWayCode: "",
            clueCode: "",
            createdDateStart: "",
            createdDateEnd: "",
            carBrandCode: "",
            nextDealUserName: "",
            statusArray: ["1", "3", "4"],
            handleCode: "1"
            // processingAction:0,
          }
        },
        pageIndex: 1,
        pageSize: 10,
        total: 0
      }
    };
  },
  methods: {
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    // getDispatchTime(val) {
    //   this.listQuery.status = val
    // },
    query(val) {
      let that = this;
      that.listLoading = true;
      debugger;
      //客户姓名
      this.tabledatas.queryObj.params.custName = this.$refs.Ftxt_CustomerName.input;
      this.tabledatas.queryObj.params.contactTel = this.$refs.FPhoneNumber.input;
      //建单日期
      this.tabledatas.queryObj.params.createdDateStart = this.$refs.Fdt_BuildMenuDates.value[0]; //建单时间起始
      this.tabledatas.queryObj.params.createdDateEnd = this.$refs.Fdt_BuildMenuDates.value[1]; //建单时间结束
      //接触方式
      this.tabledatas.queryObj.params.cantactWayCode = this.$refs.FContactWay.value;
      //线索单号
      this.tabledatas.queryObj.params.serverOrder = this.$refs.FClueNumber.input;
      //车辆品牌
      this.tabledatas.queryObj.params.carBrandCode = this.$refs.Fsct_CarBrand.value;
      // 当前处理人
      this.tabledatas.queryObj.params.nextDealUserName = this.$refs.FCurrentHandler.input;

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
          pageIndex: val!=undefined?1:that.tabledatas.pageIndex,
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
          
            if(val==undefined&&(response.data[queryObj.apiConfig.ServiceCode].rows==null||
            response.data[queryObj.apiConfig.ServiceCode].rows.length==0))
            {
              that.query(1);
            }else{
              that.listLoading = false;
              this.tabledatas.tabledata =
                response.data[queryObj.apiConfig.ServiceCode].rows;
              this.tabledatas.pageIndex =
                response.data[queryObj.apiConfig.ServiceCode].pageindex;
              this.tabledatas.total =
                response.data[queryObj.apiConfig.ServiceCode].records;
            }
        }
        that.listLoading = false;
      });
    },
    //抢单
    rush(index, row) {
      let that = this;
      if (row.processingAction == 0) {
        let that = this;
        let queryObj = {
          //api配置
          type: "mutation",
          //维护api缺失
          // apiConfig: crmApis.clueServerMutationGetBill,
          apiConfig: crmApis.clueServerMutationGetBill,
          //需要调用的api服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: []
            }
          ],
          //条件/实体参数（变量），根据typeprarm中的定义配置
          variables: {
            dataInfo: {
              serverOrder: row.serverOrder,
              handleCode:'1'
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1" &&
            response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            this.$message({
              message: "抢单成功",
              type: "success",
              duration: 1000
            });
             this.updateControlId="",
            this.dialogVisible = false;
            this.query();
            // this.tabledatas.tabledata =
            //   response.data[queryObj.apiConfig.ServiceCode].rows;
          } else {
            this.$message({
              message: response.data[queryObj.apiConfig.ServiceCode].msg,
              type: "fail",
              duration: 1000
            });
          }
        });
      } else {
        let that = this;
        that.$crmcf.jumpDetailTag(that,'crmToBeCleanClueDetail','/crmToBeCleanClueDetail',row)
      }
    },

    //回访
    revisit(index, row) {
      let that = this;
      that.$crmcf.jumpDetailTag(that,'crmToBeCleanClueDetail','/crmToBeCleanClueDetail',row)
    },
    reset() {
      // debugger
      // this.$refs.recei.reset();
      this.$refs.Ftxt_CustomerName.reset();
      this.$refs.FPhoneNumber.reset();
      this.$refs.FContactWay.reset();
      this.$refs.FClueNumber.reset();
      this.$refs.Fdt_BuildMenuDates.reset();
      this.$refs.Fsct_CarBrand.reset();
      this.$refs.FCurrentHandler.reset();
    },

    // 分页的三个方法
    prev() {
      let that = this;
      if (this.tabledatas.pageIndex > 1) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageIndex = this.tabledatas.pageIndex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageIndex = index;
      this.query();
    }
  }
};
</script>
<style>
.el-form-item .el-form-item__content {
  margin-left: 0px;
}
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.toggleParam {
  z-index: 3;
}
.el-table {
  overflow: scroll;
}
/* .el-table_body{
  overflow: scroll;
} */
</style>