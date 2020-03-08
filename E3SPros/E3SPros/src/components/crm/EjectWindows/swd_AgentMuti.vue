<template>
  <section>
    <el-form-item label="网点">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择网点"
        suffix-icon="el-icon-s-unfold" 
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>

    <!-- 弹出框 -->
    <el-dialog :visible.sync="dialogVisible" :width="width" class="dialog" title="网点">
      <div class="filter-container filter-title">
        <el-row>
          <el-col :span="4" style="padding:0">查询条件</el-col>
          <el-col :span="20">
            <div class="filter-container filter-button">
              <el-button type="primary" @click.native="query">查询</el-button>
              <el-button @click.native="handleSelect">确认</el-button>
              <el-button @click.native="reset">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container filter-params">
        <el-form :model="form" label-position="right">
          <el-row>
            <el-col :span="22">
              <el-col :span="8">
              <AgentAbbreviation :AgentAbbreviation="abbre" ref="AgentAbbreviation"></AgentAbbreviation>
            </el-col>
            <el-col :span="8">
              <AgentBrand :AgentBrand="brand" ref="AgentBrand"></AgentBrand>
            </el-col>
            <el-col :span="8">
              <AgentType :AgentType="type" ref="AgentType"></AgentType>
            </el-col>
            </el-col>
            <el-col :span="2">
              <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>
            <el-col :span="22" v-show="toggleParam" class="toggleParam">
              <el-row>
                <el-col :span="8">
                  <Province :Province="pro" ref="Province"></Province>
                </el-col>
                <el-col :span="8">
                  <City :City="city" ref="City"></City>
                </el-col>
                <el-col :span="8">
                  <AgentStatus :AgentStatus="agstatus" ref="AgentStatus"></AgentStatus>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <Table v-bind:tabledatas="tabledata" ref="table"></Table>
    </el-dialog>
  </section>
</template>

<script>
import Table from "@/components/crm/table/Table";
// import Name from "@/components/crm/textbox/Complaint/Name";
import AgentBrand from "@/components/crm/Select/Common/Dealer/Agent/AgentBrand";
import AgentType from "@/components/crm/Select/Common/Dealer/Agent/AgentType";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import AgentStatus from "@/components/crm/Select/Common/Dealer/Agent/AgentStatus";
import AgentAbbreviation from "@/components/crm/textbox/Public/Agent/AgentAbbreviation";
import { crmApis } from "@/api/graphQLApiList/crm";
export default {
  name: "swd_AgentMuti",
  components: {
    Table,
    AgentType,
    AgentBrand,
    Province,
    City,
    AgentStatus,
    AgentAbbreviation
  },
  props: {
    swd_AgentMuti: {
      input: String,
      // value:String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      input: this.swd_AgentMuti.input,
      width: "1000px",
      dialogVisible: false,
      toggleParam:false,
      form: {
        name: "",
        region: ""
      },
      brand:{
        value:''
      },
      type:{
        value:''
      },
      abbre:{
        input:''
      },
      pro: {
        value: ""
      },
      agstatus:{
        value:''
      },
      city:{
        value:''
      },
      
      formLabelWidth: "100px",
      tabledata: {
        flag: true,
        colnames: [
          { label: "网点编码", value: "dlrCode" },
          { label: "网点简称", value: "dlrShortName" },
          { label: "网点品牌", value: "brandcode" },
          { label: "网点类型", value: "orgType" },
          { label: "网点状态", value: "zhuangtai" },
          { label: "省份", value: "shengfen" },
          { label: "城市", value: "chengshi" },
          { label: "网店全称", value: "quancheng" }
        ],
        isoperat: true,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        ismuti:true,
        data: [
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-08",
            name: "李小猪",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-06",
            name: "陈小猫",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-07",
            name: "陆小狗",
            address: "上海市普陀区金沙江路 1518 弄"
          }
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintHelpQueryFindAll,
          apiQueryRow: [
            "name",
            "jiancheng",
            "pinpai",
            "leixing",
            "zhuangtai",
            "shengfenshengfen",
            "chengshi",
            "quancheng"
          ],
          params: {
            AgentBrand: "",
            AgentAbbreviation: "",
            City: "",
            Province: "",
            AgentType: "",
            AgentStatus: ""
          }
        },
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      // that.dialogVisible = true;
      if (this.swd_AgentMuti.dialogVisible == false) {
        that.dialogVisible = this.swd_AgentMuti.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query: function() {
      this.tabledata.queryObj.params.AgentBrand = this.$refs.AgentBrand.value; //从下拉框组件里取值传进网格组件中
      this.tabledata.queryObj.params.AgentAbbreviation = this.$refs.AgentAbbreviation.input; 
      this.tabledata.queryObj.params.City = this.$refs.City.value; 
      this.tabledata.queryObj.params.Province = this.$refs.Province.value; 
      this.tabledata.queryObj.params.AgentType = this.$refs.AgentType.value; 
      this.tabledata.queryObj.params.AgentStatus = this.$refs.AgentStatus.value; 
      console.log(this.tabledata.queryObj.params);
      console.log(this.tabledata.queryObj.apiQueryRow);
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      this.$refs.AgentBrand.reset();
      this.$refs.AgentAbbreviation.reset();
      this.$refs.City.reset();
      this.$refs.Province.reset();
      this.$refs.AgentType.reset();
      this.$refs.AgentStatus.reset();
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
  width: 100%;
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
}
</style>