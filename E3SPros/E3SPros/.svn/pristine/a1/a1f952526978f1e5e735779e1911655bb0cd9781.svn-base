<template>
  <div>
    <el-form-item label="来源单号">
      <el-input
        v-model="input"
        suffix-icon="el-icon-s-unfold"
        placeholder="点击选择来源单号"
        @click.native="showdialog($event)"
        clearable
      ></el-input>
    </el-form-item>

    <!-- 弹出的页面 -->
    <el-dialog :visible.sync="dialogVisible" :width="width" class="dialog" title="来源单据" center modal-append-to-body append-to-body>
      <div class="filter-container-crm filter-title-crm">
        <el-row>
          <el-col :span="4" style="padding:0">查询条件</el-col>
          <el-col :span="20">
            <div class="filter-container-crm filter-button">
              <el-button type="primary" @click.native="query">查询</el-button>
              <el-button @click.native="handleSelect">确认</el-button>
              <el-button @click.native="reset">重置</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="filter-container-crm filter-params-crm">
        <el-form :model="form" label-position="right">
          <el-row>
            <el-col :span="22">
              <el-col :span="8">
                <ServiceType ref="ServiceType" :ServiceType="Serty"></ServiceType>
              </el-col>
              <el-col :span="8">
                <ServiceMenuNumber ref="ServiceMenuNumber" :ServiceMenuNumber="Sernum"></ServiceMenuNumber>
              </el-col>
              <el-col :span="8">
                <BuildMenuDate ref="BuildMenuDate" :dt_BuildMenuDates="Build"></BuildMenuDate>
              </el-col>
            </el-col>
            <el-col :span="2">
              <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
            </el-col>
            <el-col :span="22" v-show="toggleParam" class="toggleParam">
              <el-row>
                <el-col :span="8">
                  <txt_CustomerName ref="txt_CustomerName" :txt_CustomerName="Cust"></txt_CustomerName>
                </el-col>
                <el-col :span="8">
                  <PhoneNumber ref="PhoneNumber" :PhoneNumber="Phone"></PhoneNumber>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title-crm">查询结果</div>
      <Table v-bind:tabledatas="tabledata" ref="table"></Table>
    </el-dialog>
  </div>
</template>

<script>
import Table from "@/components/crm/table/Table";
import ServiceType from "@/components/crm/Select/Complaint/ServiceType";
import BuildMenuDate from "@/components/crm/Time/dt_BuildMenuDates";
import CustomerSource from "@/components/crm/Select/Common/Customer/CustomerSource";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import ServiceMenuNumber from "@/components/crm/textbox/Public/ServiceMenuNumber";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import { crmApis } from "@/api/graphQLApiList/crm";
// import PhoneNumber from "@/components/textbox/Public/customerInfos/PhoneNumber"

export default {
  components: {
    Table,
    ServiceType,
    BuildMenuDate,
    PhoneNumber,
    ServiceMenuNumber,
    txt_CustomerName
  },
  name: "SourceNumber",
  props: {
    SourceNumber: {
      input: String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      toggleParam:false,
      input: "",
      dialogVisible: false,
      width: "1000px",
      Serty: {
        value: ""
      },
      Sernum: {
        input: ""
      },
      Build: {
        value: ""
      },
      Cust: {
        input: ""
      },
      Phone: {
        input: ""
      },
      form: {
        name: "",
        region: ""
      },
      child: {
        input: "",
        value: "",
        options: []
      },
      formLabelWidth: "100px",
      //表格
      tabledata: {
        flag: true,
        colnames: [
          { label: "服务单号", value: "serverOrder" },
          { label: "服务类型", value: "serverTypeName" },
          { label: "客户名称", value: "custName" },
          { label: "电话", value: "contactTel" },
          { label: "建单日期", value: "createdDate" }
        ],
        data: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csGetServerInfoListQuery,
          apiQueryRow: [
            "serverOrder",
            "serverTypeName",
            "custName",
            "contactTel",
            "createdDate",
          ],
          params: {
            serverType: "",
            serverOrder:"",
            beginCreatedDate: "",
            endCreatedDate: "",
            custName: "",
            phone:"",
            oemCode:"1",
            groupCode:"1"
          }
        },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        ismuti: false
      }
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.SourceNumber.input;
    },
    showdialog: function(e) {
      let that = this;
      // if(e.path[0]&&JSON.stringify(e.path[0]).indexOf("el-input__clear")!=-1){
      //   console.log('清除责任网点值，不弹窗')
      //   return
      // }
      if(e.target.classList[2]=='el-input__clear'){
        return
      }
      console.log("成功弹出");
      if (this.SourceNumber.dialogVisible == false) {
        that.dialogVisible = this.SourceNumber.dialogVisible;
      } else {
        that.dialogVisible = true;
      }
    },

    query: function() {
      this.tabledata.queryObj.params.serverType = this.$refs.ServiceType.value;
      this.tabledata.queryObj.params.serverOrder = this.$refs.ServiceMenuNumber.input;
      if(this.$refs.BuildMenuDate.value[0]==undefined)
      {
        this.tabledata.queryObj.params.beginCreatedDate = this.$refs.BuildMenuDate.value[0]; //从下拉框组件里取值传进网格组件中
        this.tabledata.queryObj.params.endCreatedDate = this.$refs.BuildMenuDate.value[1];
      }else{
        this.tabledata.queryObj.params.beginCreatedDate = this.$refs.BuildMenuDate.value[0]+" 00:00:00"; //从下拉框组件里取值传进网格组件中
        this.tabledata.queryObj.params.endCreatedDate = this.$refs.BuildMenuDate.value[1]+" 23:59:59";
      }
      this.tabledata.queryObj.params.custName = this.$refs.txt_CustomerName.input;
      this.tabledata.queryObj.params.phone = this.$refs.PhoneNumber.input;
      this.$refs.table.getData();
    },
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.serverOrder;
      console.log(that.input);
      that.dialogVisible = false;
    },
    reset: function() {
      this.$refs.BuildMenuDate.reset();
      this.$refs.txt_CustomerName.reset();
      this.$refs.ServiceMenuNumber.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.ServiceType.reset();
    },
    changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    },
  }
};
</script>

<style scoped>
/* .filter-params .el-form-item__label {
  margin-right: 0px;
}
.el-form-item .el-form-item__content {
  margin-left: 0px;
} */
.toggleParam{
  z-index: 1;
}
</style>

