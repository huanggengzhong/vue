<!--*
 * @Author: xgz 
 * @Date: 2019-08-04 16:37:29 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-04 17:04:22
 *-->

<template>
  <section>
    <el-form-item label="客户名称" prop="custName.input">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择客户名称"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>

    <!-- 客户名称弹窗 -->
    <el-dialog title="客户信息选择" :visible.sync="dialogVisible" append-to-body width="900px" center>
      <div class="filter-container filter-title">
        查询条件
        <div style="float:right">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="confirm">确认</el-button>
          <el-button @click="resetinner">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params">
        <el-form>
          <el-row>
            <el-col :span="8">
              <txt_CustomerName :txt_CustomerName="txt_CustomerName" ref="custName"></txt_CustomerName>
            </el-col>
            <el-col :span="8">
              <PhoneNumber :PhoneNumber="PhoneNumber" ref="phone"></PhoneNumber>
            </el-col>
            <el-col :span="8">
              <CarBrandNumber :CarBrandNumber="CarBrandNumber" ref="carLicenseNo"></CarBrandNumber>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <VINCode :VINCode="VINCode" ref="vin"></VINCode>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="filter-container filter-title">查询结果</div>
      <el-table
        :data="tabledatas.tableData"
        @current-change="SelectH"
        highlight-current-row
        style="width: 100%;height:330px"
        v-loading.body="listLoading"
        element-loading-text="Loading"
        border
        fit
      >
        <el-table-column type="index" label="序号" width="55"></el-table-column>
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
      <!-- 自定义网格结束 -->
    </el-dialog>
    <!-- 客户名称结束 -->
  </section>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import txt_CustomerName from "@/components/crm/textbox/Public/customerInfos/txt_CustomerName";
import PhoneNumber from "@/components/crm/textbox/Public/customerInfos/PhoneNumber";
import CarBrandNumber from "@/components/crm/textbox/Public/carInfo/CarBrandNumber";
import VINCode from "@/components/crm/textbox/Public/carInfo/VINCode";
export default {
  name: "CustomersName",
  components: {
    txt_CustomerName,
    PhoneNumber,
    CarBrandNumber,
    VINCode
  },

  data() {
    return {
      input: "",
      listLoading: false,
      rowData: { custName: "" },
      width: "800px",
      dialogVisible: false,
      form: {
        name: "",
        region: ""
      },
      txt_CustomerName: {
        input: ""
      },
      CarBrandNumber: {
        input: ""
      },
      PhoneNumber: {
        input: ""
      },
      VINCode: {
        input: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        flag: true,
        colnames: [
          { label: "客户姓名", value: "custName" },
          { label: "性别", value: "genderName" },
          { label: "电话", value: "phone" },
          { label: "车牌号", value: "carLicenseNo" },
          { label: "VIN码", value: "vin" },
          { label: "车系", value: "carSeriesCn" },
          { label: "是否车主", value: "isCarowner" },
          { label: "车辆品牌", value: "carBrandName" },
          { label: "车型名称", value: "smallCarTypeCn" }
        ],
        tableData: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdmDlrCustInfoQuery,
          apiQueryRow: [
            "custName",
            "phone",
            "carBrandName",
            "carSeriesCn",
            "carLicenseNo",
            "vin",
            "carBrandName",
            "smallCarTypeCn"
          ],
          params: {
            phone: "",
            custName: "",
            carLicenseNo: "",
            vin: ""
          }
        },
        pagesize: 8,
        pageindex: 1,
        total: 0,
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
    },
    query: function() {
      let that = this;
      that.listLoading = false;
      that.tabledatas.queryObj.params.phone = that.$refs.phone.input;
      that.tabledatas.queryObj.params.custName = that.$refs.custName.input;
      that.tabledatas.queryObj.params.carLicenseNo =
        that.$refs.carLicenseNo.input;
      that.tabledatas.queryObj.params.vin = that.$refs.vin.input;

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
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.tabledatas.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatas.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
          that.listLoading = false;
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
    confirm: function() {
      let that = this;
      that.dialogVisible = false;
      that.input = that.rowData.custName;
      that.$emit("custinfo",that.rowData)
    },
    SelectH: function(row) {
      let that = this;
      that.rowData.custName = row.custName;
      that.rowData.phone = row.phone;
      that.rowData.genderName = row.genderName;
    },
    resetgz: function() {
      this.$refs.txt_CustomerName.reset();
      this.$refs.PhoneNumber.reset();
      this.$refs.CarBrandNumber.reset();
      this.$refs.VINCode.reset();
    },
    reset: function() {
      let that = this;
      that.input = "";
    },
    resetinner(){
      let that = this;
      that.$refs.custName.reset()
      that.$refs.carLicenseNo.reset()
      that.$refs.phone.reset()
      that.$refs.vin.reset()
    },
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






