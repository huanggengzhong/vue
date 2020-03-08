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
          <label>备件号</label>
          <el-input
            v-model="this.listQuery.partNo"
            suffix-icon="el-icon-search"
            placeholder="请输入"
            size="small"
            @focus="paChooseModel"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <label>备件名称</label>
          <el-input
            v-model="listQuery.partName"
            suffix-icon="el-icon-search"
            placeholder="请输入"
            size="small"
            @focus="paChooseModel"
          ></el-input>
        </el-col>
        <el-col :span="6">
          <lableName curLabelName="备件种类分类" :isShowLabel="true" :isRequire="false" />
          <el-input
            v-model="listQuery.partVarietyCode"
            suffix-icon="el-icon-search"
            placeholder="请选择"
            size="small"
          />
        </el-col>
        <LookupValue
          :span="6"
          :isMul="isMul"
          :isshow="isshow"
          :labelName="lookups.brand.lookupValueLabel"
          :lookuptype="lookups.brand.lookuptype"
          @changeCode="getLookupValue"
        />
      </el-row>
      <el-row :gutter="26">
        <LookupValue
          :span="6"
          :isMul="isMul"
          :isshow="isshow"
          :labelName="lookups.store.lookupValueLabel"
          :lookuptype="lookups.store.lookuptype"
          @changeCode="getLookupValue"
        />
        <LookupValue
          :span="6"
          :isMul="isMul"
          :isshow="isshow"
          :labelName="lookups.type.lookupValueLabel"
          :lookuptype="lookups.type.lookuptype"
          @changeCode="getLookupValue"
        />
        <el-col :span="6">
          <label>适用车系</label>
          <el-input
            v-model="listQuery.pubPartSeriesCode"
            suffix-icon="el-icon-search"
            placeholder="请选择"
            size="small"
          />
        </el-col>
        <el-col :span="6">
          <label>销售开关</label>
          <el-select
            placeholder="请选择"
            size="small"
            v-model="listQuery.dlrOrderSwitch"
            suffix-icon="el-icon-search"
          >
            <el-option value="全部"></el-option>
            <el-option value="开放"></el-option>
            <el-option value="暂停"></el-option>
            <el-option value="关闭"></el-option>
          </el-select>
        </el-col>
        <LookupValue
          :span="6"
          :isMul="isMul"
          :isshow="isshow"
          :labelName="lookups.status.lookupValueLabel"
          :lookuptype="lookups.status.lookuptype"
          @changeCode="getLookupValue"
        />
        <el-col :span="6">
          <label>供应商编码</label>
          <el-input
            suffix-icon="el-icon-search"
            v-model="chooseSupplierCode"
            placeholder="请输入"
            size="small"
            @focus="chooseSupplier"
          ></el-input>
        </el-col>
        <!-- <carType :carTypeVisible="carTypeVisible" @changeCode="getCarTypeCode"></carType> -->
        <paChoose :dialogFormVisible="dialogFormVisible" @changeCode="getpaChoose"></paChoose>
        <chooseSupplier
          :supplierChooseVisible="chooseSupplierVisible"
          @changeCode="getChooseSupplier"
          @selectData="getChooseSupplierData"
        ></chooseSupplier>
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
import { paBuOemStorageQueryFindAll } from "@/api/pa/inventoryManage/paBuOemStorage";
import { paApis } from "@/api/graphQLApiList/pa";
import { requestGraphQL } from "@/api/commonRequest";
import chooseSupplier from "@/components/pa/supplierChoose";
import paChoose from "@/components/pa/paChoose";
import { the_Height } from "@/components/se/seMixins/makeHeight";
import lableName from "@/components/lableName";
import LookupValue from "@/components/org/LookupValue";
import { debuglog } from "util";
export default {
  mixins: [the_Height],
  name: "menu0-1",
  components: {
    lableName,
    chooseSupplier,
    paChoose,
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
        status: {
          code: "status",
          lookupValueLabel: "备件状态",
          lookuptype: "PA0009"
        },
        type: {
          code: "type",
          lookupValueLabel: "备件类型",
          lookuptype: "PA0009"
        },
        store: {
          code: "store",
          lookupValueLabel: "备件仓库",
          lookuptype: "VE0119"
        },
        brand: {
          code: "brand",
          lookupValueLabel: "备件品牌",
          lookuptype: "PA0008"
        }
      },
      columns: [
        {
          label: "配件品牌",
          key: "partBrand",
          width: 120,
          fieldName: "partBrandName"
        },
        { label: "配件号", key: "partNo", width: 160, fieldName: "partNo" },
        {
          label: "配件名称",
          key: "partName",
          width: 160,
          fieldName: "partName"
        },
        {
          label: "所属仓库",
          key: "warehouseName",
          width: 120,
          fieldName: "warehouseName"
        },
        {
          label: "账面库存",
          key: "accountQty",
          width: 120,
          fieldName: "accountQty"
        },
        {
          label: "库存保留量",
          key: "remainStorage",
          width: 120,
          fieldName: "remainStorage"
        },
        {
          label: "是否有货",
          key: "isHaveQty",
          width: 120,
          fieldName: "isHaveQty"
        },
        {
          label: "配件状态",
          key: "partStatus",
          width: 120,
          fieldName: "supplierShortName"
        },
        { label: "网点价", key: "dlrPrice", width: 120, fieldName: "dlrPrice" },
        {
          label: "备件车系",
          key: "partSeries",
          width: 120,
          fieldName: "pubPartSeriesCode"
        },
        {
          label: "适应车型",
          key: "pubPartCarType",
          width: 120,
          fieldName: "pubPartCarType"
        }
      ],
      listQuery: {
        oemCode: "",
        groupCode: "",
        partNo: "",
        partName: "",
        partFlowState: "",
        dlrOrderSwitch: "",
        warehouseName: "",
        partTypeId: "",
        partBrandCode: ""
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