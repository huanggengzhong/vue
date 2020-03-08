<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button size="small" type="primary" @click.native="fetchData()">查询</el-button>
      <el-button size="small" @click.native="newData()">新建</el-button>
      <el-button size="small" @click.native="resetData()">重置</el-button>
    </div>

    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>盘点方式</label>
              <el-select
                v-model="startInventoryQueryParams.dataInfo.checkType"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in checkTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>仓库名称</label>
              <el-select
                v-model="startInventoryQueryParams.dataInfo.warehouseId"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in wareHouseOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>仓位编号</label>
              <el-select
                v-model="startInventoryQueryParams.dataInfo.placeId"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in placeIdOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>备件品牌</label>
              <el-select
                v-model="startInventoryQueryParams.dataInfo.partBrandCode"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in partBrandCodeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-col>    
        <el-col :span="2">
          <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
        </el-col>
      </el-row>
      <el-row :gutter="26" v-show="toggleParam">
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>备件号</label>
              <el-input v-model="startInventoryQueryParams.dataInfo.partNo" clearable size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>备件名称</label>
              <el-input v-model="startInventoryQueryParams.dataInfo.partName" clearable size="small"></el-input>
            </el-col>
            <el-col :span="6">
              <label>备件属性</label>
              <el-select
                v-model="startInventoryQueryParams.dataInfo.partPropertyCode"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in partPropertyCodeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>出库类型</label>
              <el-select
                v-model="startInventoryQueryParams.dataInfo.billType"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in billTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="22">
          <el-row>
            <el-col :span="6">
              <label>出库类别</label>
              <el-select
                v-model="startInventoryQueryParams.dataInfo.partTypeId"
                size="small"
                placeholder="请选择"
                clearable
              >
                <el-option
                  v-for="item in partTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
              <label>出库时间</label>
              <el-date-picker
                v-model="outStoreDate"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="getMakeDate($event)"
              ></el-date-picker>
            </el-col>
            <el-col :span="6">
              <el-checkbox v-model="startInventoryQueryParams.dataInfo.hasStoreQty">过滤零库存备件</el-checkbox>
            </el-col>
          </el-row>
        </el-col>    
      </el-row>
    </div>

    <!--  协议单位 + 调拨销售单-->
    <mix-table
      ref="startInventoryListTable"
      :queryParams="startInventoryQueryParams"
      :dynamicTableCols="startInventoryCols"
      :isPaging="true"
      :multipleSelect="isMultipleSelect"
    />

    <!--盘点单明细弹窗-->
    <dynamicStart
      ref="dynamicStart"
      :data="data"
      :dynamicStartDialogVisible="dynamicStartDialogVisible"
      @close="dynamicStartDialogClose"
    />
  </div>
</template>

<script>
import { settlementDoQMutationList } from "@/api/pa/orderAuditItem/orderAuditItem";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import { paApis } from "@/api/graphQLApiList/pa";
import mixTable from "@/components/basicComponent/mixTable";
import lableName from "@/components/lableName";
import dynamicStart from "./dynamicInventoryStartDialog";

export default {
  mixins: [the_Height],
  components: {
    mixTable,
    lableName,
    dynamicStart
  },
  data() {
    return {
      count: false,
      toggleParam: false,
      data:[],
      outStoreDate: "",
      isMultipleSelect: "selection",
      dynamicStartDialogVisible: false,
      checkTypeOptions: [
        { value: 1, label: "抽盘" },
        { value: 2, label: "全盘" }
      ],
      wareHouseOptions: [{ value: 1, label: "东风日产" }],
      placeIdOptions: [{ value: 1, label: "1" }],
      partBrandCodeOptions: [{ value: 1, label: "1" }],
      partPropertyCodeOptions: [
        { value: 1, label: "常用零件" },
        { value: 2, label: "油漆" },
        { value: 3, label: "其他" }
      ],
      billTypeOptions: [{ value: 1, label: "1" }],
      partTypeOptions: [{ value: 1, label: "1" }],
      //开始盘点
      startInventoryCols: [
        { label: "备件品牌", codeField: "partBrandName" },
        { label: "备件号", codeField: "partNo" },
        { label: "备件名称", codeField: "partName" },
        { label: "单位", codeField: "unit" },
        { label: "仓库名称", codeField: "warehouseName" },
        { label: "仓位编码", codeField: "placeCode" },
        { label: "库存数量", codeField: "storeQty" },
        { label: "备件类别", codeField: "partTypeName" },
        { label: "备件属性", codeField: "partPropertyName" }
      ],
      startInventoryQueryParams: {
        APIUrl: paApis.paBuDlrStorageQueryFindAllOne.APIUrl,
        InputType: paApis.paBuDlrStorageQueryFindAllOne.InputType,
        ServiceCode: paApis.paBuDlrStorageQueryFindAllOne.ServiceCode,
        dataInfo: {
          checkType: 1,
          warehouseId: "",
          dlrId: "",
          placeId: "",
          partNo: "",
          partBrandCode: "",
          partName: "",
          partPropertyCode: "",
          billType: "",
          partTypeId: "",
          hasStoreQty: "",
          outStoreDateS: "",
          outStoreDateE: ""
        },
        apiQueryRow: [
          "partBrandName",
          "partBrandCode",
          "partNo",
          "partId",
          "partName",
          "partPropertyName",
          "partPropertyCode",
          "partTypeName",
          "partTypeId",
          "unit",
          "warehouseId",
          "warehouseCode",
          "warehouseName",
          "placeId",
          "placeCode",
          "storeQty"
        ]
      }
    };
  },

  created() {},
  methods: {
    //查询
    fetchData() {
      this.$refs.startInventoryListTable.queryList();
    },
    //新增
    newData() {
      var str = this.$refs.startInventoryListTable.$refs.multipleTable.selection; //获取到表格中选中的行
      if (str.length == 0) {
        this.$message({
          type: "error",
          message: "请选择要盘点的备件！"
        });
      } else {
        this.data = this.$refs.startInventoryListTable.$refs.multipleTable.selection;
        this.$refs.dynamicStart.setEditData(this.startInventoryQueryParams.dataInfo.checkType);
        this.dynamicStartDialogVisible = true;
      }
    },
    //关闭明细弹窗
    dynamicStartDialogClose(val) {
      this.dynamicStartDialogVisible = false;
    },
    //重置
    resetData() {
      this.startInventoryQueryParams.dataInfo.checkType = "";
      this.startInventoryQueryParams.dataInfo.warehouseId = "";
      this.startInventoryQueryParams.dataInfo.dlrId = "";
      this.startInventoryQueryParams.dataInfo.placeId = "";
      this.startInventoryQueryParams.dataInfo.partNo = "";
      this.startInventoryQueryParams.dataInfo.partBrandCode = "";
      this.startInventoryQueryParams.dataInfo.partName = "";
      this.startInventoryQueryParams.dataInfo.partPropertyCode = "";
      this.startInventoryQueryParams.dataInfo.billType = "";
      this.startInventoryQueryParams.dataInfo.partTypeId = "";
      this.startInventoryQueryParams.dataInfo.hasStoreQty = "";
      this.outStoreDate = "";
    },
    //日期选择器分开日期
    getMakeDate(e) {
      // e中已经获取到值
      var year0 = e[0].getFullYear();
      var month0 = e[0].getMonth() + 1;
      var day0 = e[0].getDate();
      var year1 = e[1].getFullYear();
      var month1 = e[1].getMonth() + 1;
      var day1 = e[1].getDate();
      this.startInventoryQueryParams.dataInfo.outStoreDateS =
        year0 + "-" + month0 + "-" + day0;
      this.startInventoryQueryParams.dataInfo.outStoreDateE =
        year1 + "-" + month1 + "-" + day1;
    },
    //更多改变布局
    changeToggleParam() {
      if (!this.count) {
        this.toggleParam = true;
        this.count = true;
      } else {
        this.toggleParam = false;
        this.count = false;
      }
    },
    //表格自适应
    makeHeight(mh) {
      //协议单位 + 调拨销售单
      var strAgreementPage = this.$refs.startInventoryListTable.$refs
        .paginationHeight.$el.offsetHeight;
      var strAgreementResult = this.$refs.startInventoryListTable.$refs
        .resultTitleHeight.offsetHeight;
      // 减去margin-top/bottom值
      if (!this.$utils.isIE() || isResize) {
        this.tableHeight =
          mh -
          this.tableMarginHeight -
          strAgreementPage -
          strAgreementResult -
          7;
        this.$refs.startInventoryListTable.tableHeight = this.tableHeight;
      } else {
        // IE浏览器需要减去额外高度
        this.tableHeight =
          mh -
          this.tableMarginHeight -
          this.ieHeight -
          strAgreementPage -
          strAgreementResult -
          7;
        this.$refs.startInventoryListTable.tableHeight = this.tableHeight;
      }
    }
  }
};
</script>
