<!--失控原因明细 CQ-->
<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query()">查询</el-button>
      <el-button type="primary" @click="add()">新增</el-button>
      <el-button @click="reset()">重置</el-button>
    </div>

    <div class="filter-container filter-title">查询条件</div>
    <div class="filter-container filter-params query-params">
      <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="6">
             <FailureDetailNumber  ref="Number"></FailureDetailNumber>
          </el-col>
          <el-col :span="6">
           <FailureDetailName  ref="Name"></FailureDetailName>
          </el-col>
        </el-row>
      </el-form>
    </div>

   <!--失控原因明细编辑 弹出框开始-->
    <el-dialog
      :visible.sync="dialogVisible"
      style="height:360px"
      width="750px"
      class="dialog"
      title="失控原因明细编辑"
    >
      <div class="filter-container filter-title">
        <div style="float:right">
          <el-button type="primary" @click="handleSelect">保存</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
         <el-form label-position="right">
        <!--第一行-->
        <el-row>
          <el-col :span="12">
            <Order :Order="Oder" ref="Order"></Order>
          </el-col>
          <el-col :span="12">
            <EnableOrDisable :EnableOrDisable="EnableDisable" ref="EnableOrDisable"></EnableOrDisable>
          </el-col>
        </el-row>
        <el-row style="margin-left:-165px">
          <el-col>
            <FailureDetailName ref="Name"></FailureDetailName>
          </el-col>
        </el-row>
         <el-form label-position="right" label-width="10%">
          <el-row style="margin-left:34px">
          <el-col>
             <FailureDetailDescripts
              :FailureDetailDescripts="FDetailDescripts"
              ref="FailureDetailDescripts"
            ></FailureDetailDescripts>
          </el-col>
           </el-row>
         </el-form>
        
      </el-form>
      </div>
    </el-dialog>
    <!--失控原因明细编辑 弹出框结束-->


  <div class="filter-container filter-title">查询结果</div>
  <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      style="width: 100%;height:330px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
        <el-table-column type="index" label="序号"  width="55"></el-table-column>
      <el-table-column label="操作" align="center" width="95">
        <template slot-scope="scope">
          <el-button
            size="mini" type="text" align="center"
            @click="handle(scope.$index, scope.row)"
          >编辑</el-button>

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
      :total="9"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
    ></el-pagination>
</div>
</template>
<script>
import FailureDetailNumber from "@/components/crm/textbox/Complaint/FailureDetailNumber.vue";
import FailureDetailName from "@/components/crm/textbox/Complaint/FailureDetailName.vue";
import FailureDetailDescripts from "@/components/crm/textbox/Complaint/FailureDetailDescripts.vue";
import { crmApis } from "@/api/graphQLApiList/crm";
import Order from "@/components/crm/Select/Common/Order.vue";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable.vue";
export default {
  name: "LossRDetail",
  components: {
    FailureDetailNumber,
    FailureDetailDescripts,
     Order,
    EnableOrDisable,
    FailureDetailName
  },
  data() {
    return {
      toggleParam: false,
      dialogVisible: false,
      tabledatas: {
        colnames: [
          { label: "战败失控原因明细编号", value: "FAIL_REASON_D_NO" },
          { label: "战败失控原因明细名称", value: "FAIL_REASON_D_NAME" },
          { label: "战败失控原因描述", value: "FAIL_REASON_D_DESC" },
          { label: "排序", value: "" },
          { label: "状态", value: "" }
        ],
         tableData:[
          {
            date: "2016-05-01",
            custName: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "FailureDetailNumber",
            "FailureDetailName",
            "FailureDetailDescripts"
          ],
          params: {
            FailureDetailNumber: "",
            FailureDetailName: "",
            FailureDetailDescripts: "",
          }
        }
      },
      //初始化input
      Number: {
        input: ""
      },
      Name: {
        input: ""
      },
     FDetailDescripts: {
        input: ""
      }
    };
  },
  methods: {
    query:function(){
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
        }
      });
    },
    reset: function() {
      this.$refs.FailureDetailNumber.reset();
      this.$refs.FailureDetailName.reset();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
     handle:function(index,rowData){
      let that=this;
      that.dialogVisible = true;
    },
    add:function(index,rowData){
      let that=this;
      that.dialogVisible = true;
    },
  }
};
</script>
<style>
.filter-params .el-form-item__label {
  margin-right: 0px;
}
.query-params .el-col {
  margin-bottom: 0px;
}
</style>
