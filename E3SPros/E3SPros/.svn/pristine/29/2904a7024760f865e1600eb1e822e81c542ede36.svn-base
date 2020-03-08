<template>
  <div>
    <el-form-item label="网点">
      <el-input readonly="readonly" v-model="input" placeholder="点击选择网点" suffix-icon="el-icon-s-unfold" @click.native="showdialog()"></el-input>
    </el-form-item>

    <!-- 弹出框 -->
    <el-dialog :visible.sync="dialogVisible" @sentData="sendCode" width="900px" class="dialog" title="网点" center modal-append-to-body append-to-body>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click.native="query">查询</el-button>
          <el-button @click.native="sendCode">确认</el-button>
          <el-button @click.native="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form label-position="right">
          <el-row>
            <el-col :span="22">
              <el-col :span="8">
                <AgentAbbreviation :AgentAbbreviation="cxName" ref="AgentAbbreviation">
                </AgentAbbreviation>
              </el-col>
              <el-col :span="8">
                <AgentBrand :AgentBrand="cxBrand" ref="AgentBrand"></AgentBrand>
              </el-col>
              <el-col :span="8">
                <AgentType :AgentType="cxType" ref="AgentType"></AgentType>
              </el-col>
            </el-col>
            <el-col :span="2">
              <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>
            <el-col :span="22" v-show="toggleParam" class="toggleParam">
              <el-row>
                <el-col :span="8">
                  <Province :Province="cxPro" ref="Province" @changeCode="change"></Province>
                </el-col>
                <el-col :span="8">
                  <City :City="cxCity" ref="City"></City>
                </el-col>
                <el-col :span="8">
                  <AgentStatus :AgentStatus="cxStatus" ref="AgentStatus"></AgentStatus>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-table :data="tabledatas.tableData"  @current-change="SelectH" highlight-current-row style="width: 100%;height:330px" v-loading.body="agentSingleLoadFlag" element-loading-text="Loading" border fit ref="multipleTable">
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

import AgentBrand from "@/components/crm/Select/Common/Dealer/Agent/AgentBrand";
import AgentType from "@/components/crm/Select/Common/Dealer/Agent/AgentType";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import AgentStatus from "@/components/crm/Select/Common/Dealer/Agent/AgentStatus";
import AgentAbbreviation from "@/components/crm/textbox/Public/Agent/AgentAbbreviation";
export default {
  name: "swd_AgentSingle",
  components: {
    AgentType,
    AgentBrand,
    Province,
    City,
    AgentStatus,
    AgentAbbreviation
  },
  props: {
    swd_AgentSingle: {
      input: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      rowData: { agentName: "", agentCode: "" },
      input: this.swd_AgentSingle.input,
      width: "1000px",
      dialogVisible: false,
      toggleParam: false,
      agentSingleLoadFlag:false,//加载动画
      cxName: {
        input: ""
      },
      cxBrand: {
        value: ""
      },
      cxType: {
        value: ""
      },
      cxPro: {
        value: ""
      },
      cxCity: {
        value: "",
        pcode: ""
      },
      cxStatus: {
        value: ""
      },
      tabledatas: {
        colnames: [
          { label: "网点编码", value: "dlrCode" },
          { label: "网点简称", value: "dlrShortName" },
          { label: "网点品牌", value: "carBrandCode" },
          { label: "网点类型", value: "orgTypeName" },
          { label: "网点状态", value: "dlrStatusName" },
          { label: "省份", value: "provinceName" },
          { label: "城市", value: "cityName" },
          { label: "网店全称", value: "dlrFullName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmOrgdlrQueryByPage,
          apiQueryRow: [
            "dlrId",
            "dlrCode",
            "dlrShortName",
            "carBrandCode",
            "carBrandCode",
            "orgTypeName",
            "orgType",
            "dlrStatusName",
            "dlrStatus",
            "provinceName",
            "provinceId",
            "cityName",
            "cityId",
            "dlrFullName"
          ],
          params: {
            isEnable: "1",
            dlrShortName: "",
            carBrandCode: "",
            orgType: "",
            provinceId: "",
            cityId: "",
            dlrStatus: ""
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
      if (this.swd_AgentSingle.dialogVisible == false) {
        that.dialogVisible = this.swd_AgentSingle.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query: function() {
      let that = this;
      //that.agentSingleLoadFlag=true;
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
        ) {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }else{
             this.$message({
            message: response.data[queryObj.apiConfig.ServiceCode].msg,
            type: "error",
            duration: 1000
          });
        }
        that.agentSingleLoadFlag = false;
      });
    },
    change(val) {
      let that = this;
      that.cxCity.pcode = val;
      if (that.$refs.City == undefined) {
      } else {
        that.$refs.City.getData();
      }
    },
    reset: function() {
      let that = this;
      if (
        that.$refs.AgentAbbreviation == undefined &&
        that.$refs.AgentBrand == undefined &&
        that.$refs.AgentType == undefined &&
        that.$refs.Province == undefined &&
        that.$refs.City == undefined &&
        that.$refs.AgentStatus == undefined
      ) {
      } else {
        that.$refs.AgentAbbreviation.reset();
        that.$refs.AgentBrand.reset();
        that.$refs.AgentType.reset();
        that.$refs.Province.reset();
        that.$refs.City.reset();
        that.$refs.AgentStatus.reset();
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
    //赋值事件
    getData: function() {
      let that = this;
      that.input = this.swd_AgentSingle.input;
      this.query();
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.dlrId = row.dlrId;
      that.rowData.agentCode = row.dlrCode;
      that.rowData.agentName = row.dlrShortName;
    },
    sendCode() {
      let that = this;
      that.dialogVisible = false;
      that.input = that.rowData.agentName;
      var cityTemp = [];
      var cityObj = {};
      cityObj["name"] = that.rowData.agentName;
      cityObj["code"] = that.rowData.agentCode;
      cityTemp.push(cityObj);
      that.$emit("CatData", cityTemp);
    },
    resetgz() {
      let that = this;
      that.input = "";
    },
    resetInputAndRowdata() {
      let that = this;
      that.input = "";
      that.rowData = { agentName: "", agentCode: "" };
    }
  }
};
</script>