<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
      <el-button size="small" @click="reduction()">重置</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <!--<carBrand :span="6" :code="initCode" @changeCode="getBrandCode"></carBrand>-->
        <el-col :span="6">
          <label>服务单号</label>
          <el-input
            v-model="this.listQuery.serverOrder"
            suffix-icon="el-icon-search"
            placeholder="请输入"
            size="small"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <label>客户名称</label>
          <el-input
            v-model="listQuery.custName"
            suffix-icon="el-icon-search"
            placeholder="请输入"
            size="small"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <label>电话</label>
          <el-input
            v-model="listQuery.custTel"
            suffix-icon="el-icon-search"
            placeholder="请输入"
            size="small"
          />
        </el-col>
        <el-col :span="6">
          <label>短信发送日期</label>
          <el-input
            v-model="listQuery.sendData"
            suffix-icon="el-icon-search"
            placeholder="请输入"
            size="small"
          />
        </el-col>
        <el-col :span="12">
          <label>短信内容</label>
          <el-input
            type="textarea"
            v-model="mesDetail"
            placeholder="请输入"
            size="small"
            :rows="1"
          ></el-input>
        </el-col>
      </el-row>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      highlight-current-row
      :height="tableHeight"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in columns"
        :key="`col_${index}`"
        align="center"
        :label="item.label"
      >
        <template slot-scope="scope">{{ scope.row[item.fieldName] }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?list.length:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      ref="paginationHeight"
    />
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import { the_Height } from "@/components/se/seMixins/makeHeight";

//获取值编码
import LookupValue from "@/components/org/LookupValue";
import { debuglog } from "util";
export default {
  mixins: [the_Height],
  name: "menu0-1",
  components: {
    LookupValue
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      isshow: true,
      isMul: true,
      code: "1",
      list: null,
      carTypeVisible: false,
      chooseSupplierVisible: false,
      dialogFormVisible: false,
      listLoading: true,
      chooseSupplierCode: "",
      pubPartSeriesCode: "",
      paChooseCode: "",
      pageIndex: 1,
      pageSize: 10,
      limit: 20,
      lookups: {
        //下拉框值列表绑定
      },
      columns: [
        {
          label: "服务单号",
          key: "serverOrder",
          width: 120,
          fieldName: ""
        },
        { label: "客户名称", key: "custName", width: 160, fieldName: "custName" },
        {
          label: "电话",
          key: "custTel",
          width: 160,
          fieldName: "custTel"
        },
        {
          label: "短信发送日期",
          key: "sendData",
          width: 120,
          fieldName: "sendData"
        },
        {
          label: "短信内容",
          key: "mesDetail",
          width: 120,
          fieldName: "mesDetail"
        },
      ],
      listQuery: {
        oemCode: "",
        groupCode: "",
        serverOrder: "",
        custName: "",
        custTel: "",
        sendData: "",
        mesDetail: "",
        // partVarietyCode:'',
      }
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    getBrandCode(val) {
      this.listQuery.brandCode = val;
    },
    getSetStatusCode(val) {
      this.listQuery.status = val;
    },
    getIsEnableCode(val) {
      this.listQuery.isEnable = val;
    },
    getCarTypeCode(val) {
      this.carTypeVisible = false;
      this.listQuery.isEnable = val;
    },
    fetchData() {
      this.listLoading = true;
      paBuOemStorageQueryFindAll(
        this.pageIndex,
        this.pageSize,
        this.listQuery
      ).then(response => {
        if (
          response.data &&
          response.data[paApis.paBuOemStorageQueryFindAll.ServiceCode].result === "1" &&
          response.data[paApis.paBuOemStorageQueryFindAll.ServiceCode].rows != ""
        ) {
          this.list =
            response.data[paApis.paBuOemStorageQueryFindAll.ServiceCode].rows;
          this.listLoading = false;
          this.listQuery.oemCode = this.list[0].oemCode;
          this.listQuery.groupCode = this.list[0].groupCode;
        }
      });
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.fetchData();
    },
    carTypeModal() {
      this.carTypeVisible = true;
    },
    chooseSupplier() {
      this.chooseSupplierVisible = true;
    },
    paChooseModel() {
      this.dialogFormVisible = true;
    },
    getChooseSupplier(val) {
      this.chooseSupplierVisible = false;
    },
    getChooseSupplierData(val) {
      this.chooseSupplierCode = val.code[0];
      this.chooseSupplierVisible = false;
    },
    getpaChoose(val) {
      this.listQuery.partNo = val.name[0];
      this.listQuery.partName = val.code[0];
      this.dialogFormVisible = false;
      console.log(val);
    },
    reduction() {
      (this.listQuery.partNo = ""),
        (this.listQuery.partName = ""),
        (this.listQuery.partFlowState = ""),
        (this.listQuery.partTypeId = ""),
        (this.listQuery.partBrandCode = ""),
        // this.listQuery.partVarietyCode='',
        (this.listQuery.dlrOrderSwitch = ""),
        (this.listQuery.warehouseName = ""),
        (this.chooseSupplierCode = "");
    },
    getLookupValue() {
      return false;
    }
  }
};
</script>