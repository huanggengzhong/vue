<template>
  <section>
    <el-form-item label="意向网点">
      <el-input
        v-model="input"
        placeholder="点击选择意向网点"
        suffix-icon="el-icon-s-unfold"
        clearable
        @click.native="showdialog($event)"
      ></el-input>
    </el-form-item>

    <!-- 弹出框 -->
    <el-dialog :visible.sync="dialogVisible" :width="width" class="dialog" title="意向网点" modal-append-to-body append-to-body>
      <div class="filter-container filter-title-crm">
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
      <div class="filter-container filter-params-crm">
        <el-form :model="form" label-position="right">
          <el-row>
            <el-col :span="22">
              <el-col :span="8">
              <AgentAbbreviation :AgentAbbreviation="dlrabbre" ref="AgentAbbreviation"></AgentAbbreviation>
            </el-col>
            <el-col :span="8">
              <AgentBrand :AgentBrand="dlrbran" ref="AgentBrand"></AgentBrand>
            </el-col>
            <el-col :span="8">
              <AgentType :AgentType="dlrtype" ref="AgentType"></AgentType>
            </el-col>
            </el-col>
            <el-col :span="2">
              <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>
            <el-col :span="22" v-show="toggleParam" class="toggleParam">
              <el-row>
                <el-col :span="8">
                  <Province :Province="Province" @changeCode="change" ref="Province"></Province>
                </el-col>
                <el-col :span="8">
                  <City :City="city" ref="City"></City>
                </el-col>
                <el-col :span="8">
                  <AgentStatus :AgentStatus="dlrstatus" ref="AgentStatus"></AgentStatus>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">查询结果</div>
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
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "IntentionalOutlet",
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
    IntentionalOutlet: {
      input: String,
      // value:String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      input: this.IntentionalOutlet.input,
      dlrCode:'',
      width: "1000px",
      dialogVisible: false,
      toggleParam:false,
      form: {
        name: "",
        region: ""
      },
      dlrabbre: {
        input: "",
      },
      dlrbran:{
        value:""
      },
      dlrtype:{
        value:""
      },
      Province:{
        value:""
      },
      city:{
        value:"",
        pcode:""
      },
      dlrstatus:{
        value:""
      },
      formLabelWidth: "100px",
      tabledata: {
        flag: true,
        colnames: [
          { label: "网点编码", value: "dlrCode" },
          { label: "网点简称", value: "dlrShortName" },
          { label: "网点品牌", value: "carBrandCn" },
          { label: "网点类型", value: "orgTypeName" },
          { label: "网点状态", value: "dlrStatusName" },
          { label: "省份", value: "provinceName" },
          { label: "城市", value: "cityName" },
          { label: "网店全称", value: "dlrFullName" }
        ],
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        data: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmOrgdlrQueryByPage,
          apiQueryRow: [
            "dlrCode",
            "dlrShortName",
            "carBrandCode",
            "carBrandCn",
            "orgType",
            "orgTypeName",
            "dlrSort",
            "dlrStatusName",
            "dlrStatus",
            "provinceName",
            "provinceId",
            "cityId",
            "cityName",
            "dlrFullName"
          ],
          params: {
            carBrandCode: "",
            dlrShortName: "",
            cityId: "",
            provinceId: "",
            dlrSort: "",
            dlrStatus: ""
          }
        },
      }
    };
  },
  methods: {
    showdialog: function(e) {
      let that = this;
      // if(e.path[0]&&JSON.stringify(e.path[0]).indexOf("el-input__clear")!=-1){
      //   console.log('清除责任网点值，不弹窗')
      //   return
      // }
      if(e.target.classList[2]=='el-input__clear'){
        return
      }
      console.log("进来了");
      // that.dialogVisible = true;
      if (this.IntentionalOutlet.dialogVisible == false) {
        that.dialogVisible = this.IntentionalOutlet.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
    query: function() {
      this.tabledata.queryObj.params.carBrandCode = this.$refs.AgentBrand.value; //从下拉框组件里取值传进网格组件中
      this.tabledata.queryObj.params.dlrShortName = this.$refs.AgentAbbreviation.input; 
      this.tabledata.queryObj.params.cityId = this.$refs.City.value; 
      this.tabledata.queryObj.params.provinceId = this.$refs.Province.value; 
      this.tabledata.queryObj.params.dlrSort = this.$refs.AgentType.value; 
      this.tabledata.queryObj.params.dlrStatus = this.$refs.AgentStatus.value; 
      console.log(this.tabledata.queryObj.params);
      console.log(crmApis.mdmOrgDlrQueryByPage);
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.dlrShortName;
      that.dlrCode=this.$refs.table.rowData.dlrCode
      that.dialogVisible = false;
      this.$emit("CatData",this.$refs.table.rowData)
    },
    reset: function() {
      this.$refs.AgentBrand.reset();
      this.$refs.AgentAbbreviation.reset();
      this.$refs.City.reset();
      this.$refs.Province.reset();
      this.$refs.AgentType.reset();
      this.$refs.AgentStatus.reset();
    },
    resetinput(){
      this.input=""
    },
    getData(){
      this.input=this.IntentionalOutlet.input;
    },
    change(val) {
      let that = this;
      that.city.pcode=val
      if(that.$refs.City==undefined){
      }else{
        that.$refs.City.getData();
      }
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