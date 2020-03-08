<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button type="text" size="small">下载导入模板</el-button>
      <el-button type="small" size="small" @click="missPaImport()">缺件导入</el-button>
      <el-button type="small" size="small" @click="sparepart()">备件选择</el-button>
      <el-button size="small" @click="replacement()">查看替换件</el-button>
      <el-button size="small" @click="save('listQuery')">保存</el-button>
      <el-button size="small" @click="remove()">删除</el-button>
      <el-upload
        class="upload-demo upload"
        ref="upload"
        action
        :http-request="handleChange"
        :data="uploadData"
        :headers="uploadHeaders"
        name="excelFile"
        :on-remove="handleRemove"
        :file-list="fileList"
        :on-error="uploadFalse"
        :auto-upload="true"
        :before-upload="beforeAvatarUpload"
        :before-remove="beforeRemove"
        :on-exceed="handleExceed"
        :on-change="handFileListChange"
        :limit="1"
        :show-file-list="false"
        list-type="text"
      >
        <el-button size="small" slot="trigger">导入</el-button>
      </el-upload>
      <el-button size="small" @click="exportExcel()">导出</el-button>
      <el-button size="small" @click="print()">打印</el-button>
      <el-button size="small" @click="reset()">重置</el-button>
    </div>
    <!-- <div class="filter-container filter-title" ref="conTitleHeight">订单信息</div> -->
    <div class="filter-container filter-params elForm" ref="conHeight">
      <el-form :model="listQuery" :rules="rules" ref="listQuery" class="demo-ruleForm">
        <el-row :gutter="26">
          <el-col :span="24">
            <el-col :span="6">
              <el-form-item prop="dlrShortName">
                <lableName curLabelName="经销商" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input
                  v-model="listQuery.dlrShortName"
                  suffix-icon="el-icon-search"
                  placeholder="请选择"
                  size="small"
                  @focus="dealer"
                  :disabled="dlrIsDisabled"
                />
              </el-form-item>
            </el-col>
            <missPaImport
              :missPaVisible="missPaVisible"
              @changeCode="getMissPaCode"
              @selectMissPa="selectMissPa"
            ></missPaImport>
            <!-- <dealer
              :dealerVisible="dealerVisible"
              @changeCode="getDealerCode"
              @selectDealer="selectDealer"
            ></dealer>-->
            <dlrChoose
              :seComQueChoDlrVisible="isShowChoose"
              @sentCode="getSentCode"
              @close="closeVisible"
              :isMul="isMul"
            />
            <el-col :span="6">
              <el-form-item prop="singleDate">
                <lableName curLabelName="订货日期" :isShowLabel="true" :isRequire="true"></lableName>
                <el-date-picker
                  type="date"
                  :picker-options="pickerOptions"
                  v-model="listQuery.singleDate"
                  placeholder="选择日期"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.purOrderType"
              :lookuptype="orderTypeLookuptype"
              :labelName="orderTypeLabel"
              @changeCode="getOrderTypeValue"
              :isRequire="false"
            />
            <LookupValue
              :span="6"
              :isMul="isMul"
              :isShowLabel="isShowLabel"
              :code="listQuery.transportTypeCode"
              :lookuptype="transportLookuptype"
              :labelName="transportLabel"
              @changeCode="getTransportValue"
              :isRequire="false"
            />
          </el-col>
          <!-- <el-col :span="2" class="more">
            <el-button icon="el-icon-plus" @click="changeToggleParam" class="moreParam">更多</el-button>
          </el-col>-->
          <el-col :span="24" v-show="toggleParam">
            <el-col :span="6">
              <el-form-item prop="supplierShortName">
                <lableName curLabelName="供应商" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input
                  v-model="listQuery.supplierShortName"
                  suffix-icon="el-icon-search"
                  placeholder="请选择"
                  size="small"
                  @focus="supplierFocus"
                  :disabled="supIsDisabled"
                />
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item prop="purOrderCode">
                <lableName curLabelName="订单号" :isShowLabel="true" :isRequire="true"></lableName>
                <el-input
                  v-model="listQuery.purOrderCode"
                  suffix-icon="el-icon-search"
                  placeholder="请选择"
                  size="small"
                />
              </el-form-item>
            </el-col>
          </el-col>
          <!-- <el-col :span="22">
            <el-col :span="6">
              <el-button size="small" @click="partChooseOme()">OEM备件选择公共</el-button>
            </el-col>
            <el-col :span="6">
              <el-button size="small" @click="partChooseDlr()">DLR备件选择公共</el-button>
            </el-col>
          </el-col>-->
        </el-row>
      </el-form>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">订单明细</div>
    <partChooseDlr :partChooseDlrVisible="paChoosePartDlrVisible" @changeCode="getpaChoosePartDlr"></partChooseDlr>
    <partChooseOem :partChooseOemVisible="paChoosePartVisible" @changeCode="getpaChoosePart"></partChooseOem>
    <print :printVisible="printVisible" :printList="listQuery.listDetail" @changeCode="getPrint"></print>
    <sparepart
      :sparepartVisible="sparepartVisible"
      @changeCode="getsparepartCode"
      @selectData="selectDataFun"
    ></sparepart>
    <replacement
      :replacementVisible="replacementVisible"
      @changeCode="getreplacementCode"
      :sparePartInfo="sparePartInfo"
      :partNo="partNo"
    ></replacement>
    <showGrid
      :gridVisible="gridVisible"
      :partNo="partNo"
      @changeCode="getGridCode"
      @quit="closeGrid"
    ></showGrid>
    <supplierChoose
      :supplierChooseVisible="supplierChooseVisible"
      @changeCode="getSupplierChangeCode"
    ></supplierChoose>
    <el-table
      v-loading="listLoading"
      :data="listQuery.listDetail"
      element-loading-text="Loading"
      border
      fit
      stripe
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @select="select"
      @select-all="select"
      ref="multipleTable"
      :height="tableHeight"
    >
      <el-table-column align="center" label="序号" width="60">
        <template slot-scope="scope">{{ scope.$index + 1 }}</template>
      </el-table-column>
      <el-table-column type="selection" width="55" label="选择+" />
      <el-table-column label="可欠拨+" width="155" prop="isCanLack">
        <template slot-scope="scope">{{ scope.row.isCanLack }}</template>
      </el-table-column>
      <el-table-column label="备件品牌" width="155" prop="partBrandName">
        <template slot-scope="scope">{{ scope.row.partBrandName }}</template>
      </el-table-column>
      <el-table-column label="备件号" width="185" prop="partNo">
        <span
          slot-scope="scope"
          @click="showGrid(scope.row.partNo)"
          class="part"
        >{{ scope.row.partNo }}</span>
      </el-table-column>
      <el-table-column label="备件名称" prop="partName">
        <template slot-scope="scope">{{ scope.row.partName }}</template>
      </el-table-column>
      <el-table-column label="订货数+" align="center" width="150" prop="purQty">
        <template slot-scope="scope">
          <el-input-number
            size="small"
            controls-position="right"
            :min="0"
            :max="1000"
            :step="1"
            v-model="scope.row.purQty"
            placeholder="请输入"
          ></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="SNP" align="center" prop="SNP">
        <template slot-scope="scope">{{ scope.row.SNP }}</template>
      </el-table-column>
      <el-table-column label="单价" align="center" prop="dlrPrice">
        <template slot-scope="scope">{{ scope.row.dlrPrice }}</template>
      </el-table-column>
      <el-table-column label="库存数" align="center" width="150" prop="storeQty">
        <template slot-scope="scope">{{ scope.row.storeQty }}</template>
      </el-table-column>
      <el-table-column label="可用库存" align="center" width="155" prop="freeQty">
        <template slot-scope="scope">{{ scope.row.freeQty }}</template>
      </el-table-column>
      <el-table-column label="金额" align="center" width="150" prop="dlrAmount">
        <template slot-scope="scope">{{ scope.row.dlrAmount }}</template>
      </el-table-column>
      <el-table-column label="单位" align="center" width="155" prop="unit">
        <template slot-scope="scope">{{ scope.row.unit }}</template>
      </el-table-column>
      <el-table-column label="在途数" align="center" prop="wayQty">
        <template slot-scope="scope">{{ scope.row.wayQty }}</template>
      </el-table-column>
      <el-table-column label="有效欠拨数" align="center" width="155" prop="oweQty">
        <template slot-scope="scope">{{ scope.row.oweQty }}</template>
      </el-table-column>
      <el-table-column label="VIN码" align="center" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="客户姓名" align="center" width="155" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="客户电话" align="center" width="155" prop="dismissreason">
        <template slot-scope="scope">{{ scope.row.dismissreason }}</template>
      </el-table-column>
      <el-table-column label="车牌号" align="center" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="电机编号" align="center" width="155" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
      <el-table-column label="电池编号" align="center" width="155" prop>
        <template slot-scope="scope">{{ }}</template>
      </el-table-column>
    </el-table>
    <el-pagination
      ref="paginationHeight"
      background
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?listDetailRecords:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>
<script>
import {
  paBuPurOrderDQueryFindAll,
  // getOrderType,
  getTransport,
  newOrderSave,
  paBuPurOrderDQueryAfterSelectParts
} from "@/api/pa/paBuPurOrder";
import sparepart from "@/views/pa/storepurchaseorder/creatOrder/sparepartSelection";
// import dealer from "@/views/pa/storepurchaseorder/creatOrder/dealerSelect";
import missPaImport from "@/views/pa/storepurchaseorder/creatOrder/missPaImport";
import replacement from "@/views/pa/storepurchaseorder/creatOrder/replacement";
import showGrid from "@/views/pa/storepurchaseorder/creatOrder/showGrid";
import supplierChoose from "@/components/pa/supplierChoose";
import { paApis } from "@/api/graphQLApiList/pa";
import partChooseOem from "@/components/pa/partChooseOem";
import partChooseDlr from "@/components/pa/partChooseDlr";
import request from "@/utils/request";
import print from "@/views/pa/storepurchaseorder/creatOrder/print";
import LookupValue from "@/components/org/LookupValue";
import { the_Height } from "@/components/se/seMixins/makeHeight";
import config from "@/utils/config";
import lableName from "@/components/lableName";
import dlrChoose from "@/components/se/seCommonQueryChooseDlr";
export default {
  mixins: [the_Height],
  name: "creatOrder",
  components: {
    // dealer,
    missPaImport,
    replacement,
    sparepart,
    showGrid,
    supplierChoose,
    partChooseOem,
    partChooseDlr,
    request,
    print,
    LookupValue,
    lableName,
    dlrChoose
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
      // selectData: [],
      pageSize: "10",
      pageIndex: "1",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      isShowChoose: false,
      dlrIsDisabled: false,
      supIsDisabled: false,
      list: [], //备件选择返回后查询出订单明细
      sparepartList: [], //备件选择返回备件信息
      dealerVisible: false,
      missPaVisible: false,
      sparepartVisible: false,
      replacementVisible: false,
      gridVisible: false,
      listLoading: false,
      transport: null, //运输方式
      activeTab: "one",
      deleteSelectData: [],
      sparePartInfo: null,
      toggleParam: true,
      supplierChooseVisible: false,
      printVisible: false,
      paChoosePartVisible: false, //公共
      paChoosePartDlrVisible: false, //公共
      uploadData: {}, //上传时附带的额外参数
      fileList: [],
      isMul: false,
      isShowLabel: true,
      orderTypeLabel: "订单类型",
      transportLabel: "运输方式",
      orderTypeLookuptype: "PA0025",
      transportLookuptype: "PA0026",
      listQuery: {
        purOrderCode: undefined, //订单号
        dlrShortName: undefined, //经销商编码
        supplierShortName: undefined, //供应商
        singleDate: undefined, //订货日期
        purOrderType: undefined, //订单类型
        transportTypeCode: undefined, //运输方式
        listDetail: [] //备件信息
      },
      detailQuery: {
        partNo: "",
        dlrId: "202"
      },
      partNo: "",
      listDetailRecords: null,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },
      rules: {
        purOrderCode: [
          { required: true, message: "请输入订单号", trigger: "change" }
        ],
        dlrShortName: [
          { required: true, message: "请选择经销商", trigger: "change" }
        ],
        supplierShortName: [
          { required: true, message: "请选择供应商", trigger: "change" }
        ],
        singleDate: [
          { required: true, message: "请选择订货日期", trigger: "change" }
        ],
        purOrderType: [
          { required: true, message: "请选择订单类型", trigger: "change" }
        ],
        transportTypeCode: [
          { required: true, message: "请选择运输方式", trigger: "change" }
        ]
      },
      uploadHeaders: {
        Authorization: this.$store.getters.token
      }
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.dlrIsDisabled = false;
      this.supIsDisabled = false;
      this.$store.getters.orgInfo.DLR_NAME == null
        ? this.isDisabled(true)
        : this.isDisabled(false);
      this.assign();
    });
  },
  methods: {
    getSentCode(data) {
      this.listQuery.dlrShortName = data.dlrShortName;
    },
    closeVisible(val) {
      this.isShowChoose = val;
    },
    isDisabled(val) {
      if (val) {
        //总部
        this.listQuery.supplierShortName = "总部供应商";
        this.supIsDisabled = true;
      } else {
        this.listQuery.dlrShortName = this.$store.getters.orgInfo.DLR_NAME;
        this.dlrIsDisabled = true;
      }
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.selectDataFun(this.sparepartList);
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val;
      this.selectDataFun(this.sparepartList);
    },
    /* fetchData() {
      this.listLoading = true;
      paBuPurOrderDQueryFindAll(this.listQuery).then(response => {
        //备件号弹出查询信息
        this.list = response.data.items.paBuPurOrderDQueryFindAll;
        this.listLoading = false;
      });
    }, */
    getDealerCode(val) {
      this.dealerVisible = false;
    },
    getMissPaCode(val) {
      this.missPaVisible = false;
    },
    selectDealer(val) {
      this.listQuery.dlrShortName = val[0].dlrShortName;
      this.dealerVisible = false;
    },
    selectMissPa(val) {
      // this.listQuery.dlrShortName = val[0].dlrShortName;
      this.missPaVisible = false;
    },
    dealer() {
      // this.dealerVisible = true;
      this.isShowChoose = true;
    },
    // dropDownBox() {
    //   //下拉框
    //   /* getOrderType(this.listQuery).then(response => {
    //     this.purOrderType = response.data.rows;
    //   }); */
    //   getTransport(this.listQuery).then(response => {
    //     this.transport = response.data.rows;
    //   });
    // },
    replacement() {
      //替换件
      if (this.deleteSelectData.length == 0) {
        /* this.$alert("请先选中数据进行审核", "提示", {
          confirmButtonText: "确定"
        }); */
        this.$message({
          message: "请先选择备件",
          type: "warning",
          duration: 2000
        });
      } else if (this.deleteSelectData.length > 1) {
        this.$message({
          message: "只能选择一个备件",
          type: "warning",
          duration: 2000
        });
      } else {
        this.replacementVisible = true;
      }
    },
    getreplacementCode(val) {
      this.replacementVisible = false;
    },
    showGrid(val) {
      //查询信息
      this.partNo = val;
      this.gridVisible = true;
    },
    getsparepartCode(val) {
      this.sparepartVisible = false;
    },
    selectDataFun(list, dataType) {
      this.sparepartList = list;
      //备件选择返回
      for (let index in list) {
        if (index == "0") {
          this.detailQuery.partNo = list[index].partNo;
        } else {
          this.detailQuery.partNo += "," + list[index].partNo;
        }
      }
      this.listLoading = true;

      //转换了中台请求格式数据
      var pageSize = dataType == "excel" ? 99999 : this.pageSize;
      var tableColumns =
        this.$refs.multipleTable == null
          ? null
          : this.$refs.multipleTable.columns;

      paBuPurOrderDQueryAfterSelectParts(
        pageSize,
        this.pageIndex,
        this.detailQuery,
        dataType,
        "订单明细列表导出",
        "订单明细列表",
        tableColumns
      ).then(response => {
        if (dataType == "excel") {
          //导出excel查询
          this.$utils.downloadFile(response, "订单明细列表导出.xlsx");
          this.listLoading = false;
        } else {
          this.list = response.data.paBuPurOrderDQueryAfterSelectParts.rows;
          this.listDetailRecords = Number(
            response.data.paBuPurOrderDQueryAfterSelectParts.records
          );
          this.listLoading = false;
        }
      });

      for (let i = 0; i < list.length; i++) {
        this.listQuery.listDetail.push(list[i]);
      }
      //去重
      this.listQuery.listDetail = this.listQuery.listDetail.filter(
        (x, index, array) => {
          var arrCatType = [];
          this.listQuery.listDetail.forEach((item, i) => {
            arrCatType.push(item.catType);
          });
          return arrCatType.indexOf(x.catType) === index;
        }
      );
      this.sparepartVisible = false;
    },
    sparepart() {
      //备件选择
      this.sparepartVisible = true;
    },
    getGridCode(val) {
      this.gridVisible = false;
    },
    getPrint(val) {
      this.printVisible = false;
    },
    closeGrid(val) {
      this.gridVisible = false;
    },
    reset() {
      this.listQuery.purOrderCode = undefined; //订单号
      this.listQuery.dlrShortName = undefined; //经销商
      this.listQuery.supplierShortName = undefined; //供应商
      this.listQuery.singleDate = undefined; //订货日期
      this.listQuery.purOrderType = undefined; //订单类型
      this.listQuery.transportTypeCode = undefined; //运输方式
      this.listQuery.listDetail = []; //订单明细
    },
    save(formName) {
      this.$refs[formName].validate(valid => {
        console.log(valid);
        if (valid) {
          if (this.listQuery.listDetail.length == 0) {
            this.$message({
              message: "订单明细还未选择备件",
              type: "warning",
              duration: 2000
            });
          } else {
            newOrderSave(this.listQuery).then(response => {
              if (
                response.data[paApis.newOrderSave.ServiceCode].result === "1" &&
                response.data[paApis.newOrderSave.ServiceCode].rows != ""
              ) {
                this.isSaveSuccess = true;
              } else {
                this.isSaveSuccess = false;
              }
              this.saveAlert();
            });
          }
        } else {
          this.isValiad = true;
          console.log("error submit!!");
          return false;
        }
      });
      // newOrderSave(/* this.listQuery */).then(response => {
      //   /* if (
      //     response.data[paApis.newOrderSave.ServiceCode].result === "1" &&
      //     response.data[paApis.newOrderSave.ServiceCode].rows != ""
      //   ) {
      //     this.isSaveSuccess = true;
      //   } else {
      //     this.isSaveSuccess = false;
      //   } */
      //   this.saveAlert(response.data.paBuPurOrderMutationSave.msg);
      // });
    },
    saveAlert(msg) {
      this.$message({
        // message: "保存成功",
        message: msg,
        type: "warning",
        duration: 2000
      });
      // if (this.isSaveSuccess == true) {
      //   /* this.$alert("保存成功", "提示", {
      //     confirmButtonText: "确定",
      //     callback: action => {}
      //   }); */
      //   this.$message({
      //     // message: "保存成功",
      //     message: msg,
      //     type: "success",
      //     duration: 2000
      //   });
      //   this.reset();
      // }
    },
    select(selection) {
      //选择删除
      this.deleteSelectData = selection;
      this.sparePartInfo = selection[0];
    },
    remove(list) {
      //静态删除
      Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
          if (this[i] == val) return i;
        }
        return -1;
      };
      Array.prototype.remove = function(val) {
        var index = this.indexOf(val);
        if (index > -1) {
          this.splice(index, 1);
        }
      };
      if (this.deleteSelectData.length == 0) {
        /* this.$alert("请先选中数据进行审核", "提示", {
          confirmButtonText: "确定"
        }); */
        this.$message({
          message: "请先选中数据",
          type: "warning",
          duration: 2000
        });
      } else {
        for (let data in this.deleteSelectData) {
          this.listQuery.listDetail.remove(this.deleteSelectData[data]);
        }
      }
    },
    getSupplierChangeCode(val) {
      this.supplierChooseVisible = false;
      if (val == "" || val == null) {
        this.listQuery.supplierShortName = "";
      } else {
        this.listQuery.supplierShortName = val.supplierShortName;
      }
    },
    supplierFocus() {
      this.supplierChooseVisible = true;
    },
    missPaImport() {
      this.missPaVisible = true;
    },
    //更多
    /* changeToggleParam() {
      this.toggleParam = !this.toggleParam;
    }, */
    //公共
    getpaChoosePart(val) {
      this.paChoosePartVisible = false;
    },
    getpaChoosePartDlr(val) {
      this.paChoosePartDlrVisible = false;
    },
    partChooseOme() {
      this.paChoosePartVisible = true;
    },
    partChooseDlr() {
      this.paChoosePartDlrVisible = true;
    },
    assign() {
      this.listQuery.purOrderCode = this.$route.params.purOrderCode; //订单号
      // this.listQuery.dlrShortName = ""; //经销商编码
      // this.listQuery.supplierShortName = ""; //供应商
      this.listQuery.singleDate = this.$route.params.purDate; //订货日期
      this.listQuery.purOrderType = this.$route.params.purOrderType; //订单类型
      this.listQuery.transportTypeCode = this.$route.params.transportTypeCode; //运输方式
      //查询订单明细
      this.fetchData();
    },
    fetchData() {
      if (this.listQuery.purOrderCode) {
        //跳转，订单号有值
        this.listLoading = true;
        let dataInfo = {
          purOrderCode: ""
        };
        if (
          this.listQuery.purOrderCode != null &&
          this.listQuery.purOrderCode != "" &&
          this.listQuery.purOrderCode != undefined
        ) {
          dataInfo.purOrderCode = this.listQuery.purOrderCode;
          paBuPurOrderDQueryFindAll(
            this.pageSize,
            this.pageIndex,
            dataInfo
          ).then(response => {
            this.listQuery.listDetail =
              response.data.paBuPurOrderDQueryFindAll.rows;
            this.listLoading = false;
          });
        }
      }
    },
    uploadUrl: function() {
      return (
        paApis.resolve.APIUrl + config.cH + "v=" + paApis.resolve.ServiceCode
      );
    },
    handleRemove(file, fileList) {},
    uploadFalse(response, file, fileList) {
      this.$alert("文件上传失败", "提示", {
        confirmButtonText: "确定",
        type: "warning"
      });
    },
    beforeAvatarUpload(file) {
      const extension = file.name.split(".")[1] === "xls";
      const extension2 = file.name.split(".")[1] === "xlsx";
      if (!extension && !extension2) {
        this.$alert("上传文件只能为Excel文件", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      }
      return extension || extension2;
    },
    beforeRemove(file, fileList) {
      this.$alert(
        `选择文件类型或大小不符，已移除 ${file.name}，请重新选择`,
        "提示",
        {
          confirmButtonText: "确定",
          type: "warning"
        }
      );
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    handFileListChange(file, fileList) {},
    exportExcel() {
      this.selectDataFun(this.list, "excel");
    },
    print() {
      this.printVisible = true;
    },
    getOrderTypeValue(val) {
      this.listQuery.purOrderType = val;
    },
    getTransportValue(val) {
      this.listQuery.transportTypeCode = val;
    },
    // 处理文件选择器改变事件
    handleChange(param) {
      var url = this.uploadUrl(); // API根据不同功能url不同，请配置到对应模块配置
      var that = this;
      this.$requestImport(url, param, function(response) {
        console.info(response);
        that.uploadSuccess(response);
      });
    },
    uploadSuccess(response) {
      if (
        response.result == "1" &&
        response.data.rows != null &&
        response.data.rows.length > 0
      ) {
        var tempList = response.data.rows;

        var implistTemp = [];
        console.log("uploadSuccess");
        var isDataNull = false;
        tempList.forEach(row => {
          if (
            isDataNull == true ||
            row.可欠拨 == null ||
            row.可欠拨 == "" ||
            row.备件品牌 == null ||
            row.备件品牌 == "" ||
            row.备件号 == null ||
            row.备件号 == "" ||
            row.备件名称 == null ||
            row.备件名称 == "" ||
            row.订货数 == null ||
            row.订货数 == "" ||
            row.SNP == null ||
            row.SNP == "" ||
            row.单价 == null ||
            row.单价 == "" ||
            row.库存数 == null ||
            row.库存数 == ""
          ) {
            isDataNull = true;
            return;
          }
          var newRow = {
            isCanLack: row.可欠拨,
            partBrandName: row.备件品牌,
            partNo: row.备件号,
            partName: row.备件名称,
            purQty: row.订货数,
            SNP: row.SNP,
            dlrPrice: row.单价,
            storeQty: row.库存数
          };
          implistTemp.push(newRow);
        });
        if (isDataNull) {
          this.$alert("Excel每行数据不能为空，请检查", "提示", {
            confirmButtonText: "确定",
            type: "warning"
          });
          this.$refs.upload.clearFiles();
          return;
        }
        this.listQuery.listDetail = implistTemp;
        this.$alert("文件导入成功", "提示", {
          confirmButtonText: "确定",
          type: "success"
        });
      } else {
        this.$alert("文件导入失败", "提示", {
          confirmButtonText: "确定",
          type: "warning"
        });
      }
      this.$refs.upload.clearFiles();
    }
  }
};
</script>
<style lang="scss" scoped>
/deep/ .part {
  color: blue;
  cursor: pointer;
}
/deep/ .upload {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
}
/deep/ .el-form-item__label {
  margin: 0;
}
/deep/ .elForm .el-form-item__content {
  height: 28px;
  margin-bottom: 10px;
}
/deep/ .elForm .el-col {
  height: 38px;
}
/deep/ .more {
  float: right;
}
</style>
