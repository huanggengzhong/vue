<template>
  <section>
    <el-form>
      <el-form-item label="咨询类别">
        <el-input
          readonly="readonly"
          v-model="input"
          placeholder="咨询类别选择"
          suffix-icon="el-icon-s-unfold"
          @click.native="showdialog()"
        ></el-input>
      </el-form-item>
    </el-form>

    <!-- 弹出框 -->
    <el-dialog :visible.sync="dialogVisible" :width="width" class="dialog" title="咨询类别">
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
              <ServiceBigClass :ServiceBigClass="serbc" ref="ServiceBigClass"></ServiceBigClass>
          </el-col>
          <el-col :span="8">
              <ServiceMidClass :ServiceMidClass="sermc" ref="ServiceMidClass"></ServiceMidClass>
          </el-col>
          <el-col :span="8">
              <ServiceSmallClass :ServiceSmallClass="sersm" ref="ServiceSmallClass"></ServiceSmallClass>
          </el-col>
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
import { crmApis } from "@/api/graphQLApiList/crm";
import Table from "@/components/crm/table/Table";
import ServiceBigClass from "@/components/crm/Select/Common/ServiceBigClass";
import ServiceMidClass from "@/components/crm/Select/Common/ServiceMidClass";
import ServiceSmallClass from "@/components/crm/Select/Common/ServiceSmallClass";

export default {
  name: "swd_ConsultingCategory",
  components: {
    Table,
    ServiceBigClass,
    ServiceMidClass,
    ServiceSmallClass
  },
  props:{
    swd_ConsultingCategory:{
      input:String,
      dialogVisible: Boolean
    }
  },
  data() {
    return {
      serbc:{
        value:''
      },
      sermc:{
        value:''
      },
      sersm:{
        value:''
      },
      input: "",
      width: "900px",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      formLabelWidth: "100px",
      child:{
        input:'',
        value:'',
        options:[]
      },
      tabledata: {
        flag: true,
        colnames: [
          { label: "服务大类", value: "" },
          { label: "服务中类", value: "" },
          { label: "服务小类", value: "" },
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.serverClassQueryFindAll,//服务编码
          apiQueryRow: [
            "",
            "",
            "",
          ],
          params: {
            ServiceBigClass: "",
            ServiceMidClass: "",
            ServiceSmallClass: "",
          }
        },
        isoperat: false,
        url: "/table",
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        value:'',
        options:[]
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      if (this.swd_ConsultingCategory.dialogVisible == false) {
        that.dialogVisible = this.swd_ConsultingCategory.dialogVisible;
      } else {
        that.dialogVisible = true;
      }//使弹出框显示
    },
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    query: function() {
      this.tabledata.queryObj.params.ServiceBigClass = this.$refs.ServiceBigClass.value; 
      this.tabledata.queryObj.params.ServiceMidClass = this.$refs.ServiceMidClass.value; 
      this.tabledata.queryObj.params.ServiceSmallClass = this.$refs.ServiceSmallClass.value;  //从下拉框组件里取值传进网格组件中
      this.$refs.table.getData();
    }, //查询网格，实际方法在组件里，这里只是调了一下
    reset: function() {
      this.$refs.ServiceBigClass.reset();
      this.$refs.ServiceMidClass.reset();
      this.$refs.ServiceSmallClass.reset();
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
