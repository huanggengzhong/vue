/*
 * @Author: xgz 
 * @Date: 2019-10-16 10:13:13 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-10-19 11:37:00
 */

<template>
  <section>
    <el-form-item label="赠品">
      <el-input readonly="readonly" v-model="input" placeholder="点击选择赠品" suffix-icon="el-icon-search" @click.native="showdialog()"></el-input>
    </el-form-item>
    <!-- 弹窗 -->
    <el-dialog title="商品选择" :visible.sync="dialogVisible" append-to-body width="900px" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" size="small" @click="query()">查询</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form>
          <el-row>
            <lookupvalue compKey="compKey1" :isMul="false" labelName="商品类型" :code="xx1" codeField="gender" :span="8"></lookupvalue>
            <crmTextInput compKey="compKey2" labelName="商品名称" :code="xx2" codeField="custName" :span="8"></crmTextInput>
            <crmTextInput compKey="compKey3" labelName="商品编码" :code="xx3" codeField="custFullName" :span="8"></crmTextInput>
          </el-row>
          <el-row>
            <lookupvalue compKey="compKey6" :isMul="false" labelName="是否启用" :code="gender" codeField="gender" :span="8"></lookupvalue>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit ref="multipleTable">
        <el-table-column type="index" width="55" label="序号" filed="chose" current-row-key="choose" />
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" align="center">
            <el-button type="text" size="mini" @click="chooseAct(scope.$index, scope.row)">选择</el-button>
          </template>
        </el-table-column>
        <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="tabledatas.total" :page-size="tabledatas.pagesize" :current-page="tabledatas.pageindex" @prev-click="prev" @next-click="next" @current-change="changepage"></el-pagination>
    </el-dialog>
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";

import crmTextInput from "@/components/crm/textbox/crmTextInput";
import crmdatePicker from "@/components/crm/Time/crmdatePicker";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";

export default {
  name: "swd_exchangeStore",
  components: {
    crmTextInput,
    crmdatePicker,
    lookupvalue
  },
  data() {
    return {
      width: "850px",
      dialogVisible: false,
      xx1: "",
      xx2: "",
      xx3: "",
      xx4: "",
      OrganizationNameMain: {
        input: ""
      },
      tabledatas: {
        colnames: [
          { label: "商品类型", value: "dlrCode" },
          { label: "商品名称", value: "dlrShortNamex" },
          { label: "商品编码", value: "dlrCodez" },
          { label: "是否启用", value: "dlrShortNamec" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmOrgdlrQueryByPage,
          apiQueryRow: ["dlrId", "dlrCode"],
          params: {
            isEnable: "1",
            dlrShortName: ""
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
      that.dialogVisible = true;
    },
    // 查询
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
    // 选择
    chooseAct: function() {
      let that = this;
      that.dialogVisible = false;
    },
    // 重置
    resett: function() {
      let that = this;
      that.input = "";
    },
    // 分页
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



