<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-title" ref="resultTitleHeight" style="margin-top: 20px">车辆信息</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>VIN码</label>
          <!--<el-input v-model="detailInfo.vin" readonly="readonly"></el-input>-->
          <el-input 
          v-model="detailInfo.vin"
          suffix-icon="el-icon-search"
          @focus="openCarCustModal" 
          placeholder="请选择"
          clearable 
          size="small"/>
        </el-col>
        <el-col :span="6">
          <label>车牌号</label>
          <el-input v-model="detailInfo.carLicense" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>车辆品牌</label>
          <el-input v-model="detailInfo.carBrandCn" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>发动机号</label>
          <el-input v-model="detailInfo.engineNo" readonly="readonly"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>车系</label>
          <el-input v-model="detailInfo.carSeriesName" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>颜色</label>
          <el-input v-model="detailInfo.carColorName" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>车型</label>
          <el-input v-model="detailInfo.carTypeCode" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <div class="filter-container filter-button">
            <el-button @click="save">保存</el-button>
            <el-button>重置</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">客户信息</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>姓名</label>
          <el-input v-model="detailInfo.custName" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>客户电话</label>
          <el-input v-model="detailInfo.phone" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>联系人</label>
          <el-input v-model="detailInfo.custName" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>联系电话</label>
          <el-input v-model="detailInfo.phone" readonly="readonly"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>联系地址</label>
          <el-input v-model="detailInfo.addr" readonly="readonly"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">销售单信息</div>
    <div class="filter-container filter-params">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>销售单号</label>
          <el-input v-model="detailInfo.acceOrderCode" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>销售人员</label>
          <el-input v-model="detailInfo.saleEmp" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>应收款</label>
          <el-input v-model="detailInfo.subDueAmount" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>精品数量</label>
          <el-input v-model="detailInfo.partAcceQty" readonly="readonly"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>已出库数量</label>
          <el-input v-model="detailInfo.outAcceOutQty" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
        </el-col>
        <el-col :span="12">
          <div class="filter-container filter-button" ref="searcheHeight">
            <el-button size="small" @click="selectAcceParts">选择备件</el-button>
            <el-button size="small">客户信息维护</el-button>
            <el-button size="small" @click="save">保存</el-button>
            <el-button size="small">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">备件费用</div>
    <mix-table
        ref="partAmountList"
        :queryParams="partAmountParams"
        :dynamicTableCols="partAmountCols"
        :isPaging="true"
        :isShowSelect="true"
        :isDialog="true"
    ></mix-table>

    <!--选择备件弹框-->
    <paChoosePart
    :paChoosePartVisible="paChoosePartVisible"
    :title="1"
    @seChoosePartData="getParts"
    @close="closePartsChoose"
    ></paChoosePart>
    <!--选择客户弹窗-->
    <seCarOwnerCustModal
      ref="seCarOwnerCustModal"
      :isMul="false"
      :seCarOwnerCustModalVisible="seCarOwnerCustModalVisible"
      @sentCarOwnerCustModal="getCarOwnerCustData"
      @close="closeCarOwnerCust"
    ></seCarOwnerCustModal>
  </div>
</template> 
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { apiSeBuAcceOrder } from "@/api/graphQLApiList/se";
import mixTable from "@/components/basicComponent/mixTable";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import paChoosePart from "@/components/se/paChoosePart";
import CarTypeModal from '@/components/se/CarTypeModal/CarTypeModal'
import seChooseWiSelect from '@/components/se/seChooseWiSelect'
import { SeBuAccePartUpdateQuery } from "@/api/se/repair/sales/seBuAcceOrder";
import seCarOwnerCustModal from "@/components/se/seCarOwnerCustModal";

export default {
  name: "recallSetting",
  mixins: [the_Height],
  components: {
    carBrand,
    mixTable,
    paChoosePart,
    CarTypeModal,
    seChooseWiSelect,
    seCarOwnerCustModal
  },
  created() {
    this.doDetailQuery();
  },
  data() {
    return {
      sonActiveName: "one",
      paChoosePartVisible: false,
      seChooseWiSelectVisibles: false,
      seCarOwnerCustModalVisible: false,
      partAmountParams: {},
      //备件费用
      partAmountCols: [
        { label: "备件编码", codeField: "partNo"},
        { label: "备件名称", codeField: "partName"},
        { label: "单价", codeField: "partPrice"},
        { label: "数量", 
          codeField: "partQty", 
          isEdit: "true",
          comps: {
            type: "inputNum",
            change: this.changeNum
          }
        },
        { label: "出库数量", codeField: "outQty"},
        { label: "备件费用", codeField: "partAmount"},
        { label: "折扣率", 
          codeField: "partDiscount", 
          isEdit: "true",
          comps: {
            type: "inputNum",
            change: this.changeDiscount
          }
        },
        { label: "费用预估", 
          codeField: "preAmount", 
          isEdit: "true",
          comps: {
            type: "inputNum",
            change: this.changePreAmount
          }
        },
        { label: "备注", 
          codeField: "remark", 
          isEdit: "true",
          comps: {
            type: "inputTxt",
            //change: this.changeCode
          }
        },
        {
          label: "操作",
          labelName: "删除",
          comps: {
            type: "button",
            event: this.deletePartAmount
          }
        }
      ],
      
      //明细信息
      detailInfo: {
        vin: '',
        carLicense: '',
        carBrandCn: '',
        engineNo: '',
        carSeriesName: '',
        carColorName: '',
        carTypeCode: '',
        custName: '',
        phone: '',
        addr: ''
      }
    };
  },
  methods: {
    doDetailQuery() {
      debugger
      var getSelectRows = this.$route.params.the_data;
      var pageSize = -1;
      var pageIndex = -1;
      SeBuAccePartUpdateQuery(pageSize, pageIndex, getSelectRows[0].acceOrderId).then(response => {
        var resData = response.data[apiSeBuAcceOrder.SeBuAccePartUpdateQuery.ServiceCode];
        if (resData.result === "1" ) {
          this.detailInfo.vin = resData.rows[0].vin;
          this.detailInfo.carLicense = resData.rows[0].carLicense;
          this.detailInfo.carBrandCn = resData.rows[0].carBrandCn;
          this.detailInfo.engineNo = resData.rows[0].engineNo;
          this.detailInfo.carSeriesName = resData.rows[0].carSeriesName;
          this.detailInfo.carColorName = resData.rows[0].carColorName;
          this.detailInfo.carTypeCode = resData.rows[0].carTypeCode;
          this.detailInfo.custName = resData.rows[0].custName;
          this.detailInfo.phone = resData.rows[0].phone;
          this.detailInfo.addr = resData.rows[0].addr;
          this.$refs.partAmountList.tableData = resData.rows[0].partAmount;
        }
      });
    },
    //打开选择客户弹窗
    openCarCustModal() {
      this.seCarOwnerCustModalVisible = true;
      this.$refs.seCarOwnerCustModal.resetList(); //清空弹窗列表
    },
    getCarOwnerCustData(val, selectval) {
      this.seCarOwnerCustModalVisible = false;
      console.log(val);
      this.detailInfo.vin = val[0].carInfo[0].vin;
      this.detailInfo.carLicense = val[0].carInfo[0].carLicense;
      this.detailInfo.carBrandCn = val[0].carInfo[0].carBrandCn;
      this.detailInfo.engineNo = val[0].carInfo[0].engineNo;
      this.detailInfo.carSeriesName = val[0].carInfo[0].carSeriesName;
      this.detailInfo.carColorName = val[0].carInfo[0].carColorName;
      this.detailInfo.carTypeCode = val[0].carInfo[0].carTypeCode;

      this.detailInfo.custName = val[0].carOwner[0].custName;
      this.detailInfo.phone = val[0].carOwner[0].phone;
      this.detailInfo.addr = val[0].carOwner[0].addr;
    },
    changeNum(row) {
      row.partAmount = Number((Number(row.partQty) * Number(row.partPrice)).toFixed(2))
    },
    changeDiscount(row) {
      row.preAmount = Number((Number(row.partDiscount) * Number(row.partAmount) * 0.01).toFixed(2))
    },
    changePreAmount(row) {
      var total = 0;
      var length = this.$refs.partAmountList.tableData.length;
      for (var i = 0; i < this.$refs.partAmountList.tableData.length; i++) {
        total += Number(Number(this.$refs.partAmountList.tableData[i].preAmount).toFixed(2));
      }
      this.detailInfo.subDueAmount = Number((Number(total) * Number(this.detailInfo.acceDiscount) * 0.01).toFixed(2));
    },
    selectAcceParts() {
      this.paChoosePartVisible = true;
    },
    //获取选中的备件
    // getParts(val) {
    //   this.paChoosePartVisible = false;
    //   var selectPartsRow = {
    //     partNo: '',
    //     partName: '',
    //     partPrice: '0',//单价
    //     partQty: '1',//数量
    //     outQty: '1',//出库数量
    //     partAmount: '0',//备件费用
    //     partDiscount: '',//折扣率
    //     preAmount: '',//费用预估
    //     remark: ''
    //   };
    //   for (var n = 0; n < val.length; n++) {
    //     let flag = true;
    //     if (this.$refs.partAmountList.tableData.length != null) {
    //       for (var m = 0; m < this.$refs.partAmountList.tableData.length; m++) {
    //         if (this.$refs.partAmountList.tableData[m].partNo == val[n].partNo) flag = false;
    //       }
    //     }
    //     if (flag) {
    //       selectPartsRow.partNo = val[n].partNo;
    //       selectPartsRow.partName = val[n].partName;
    //       selectPartsRow.partPrice = val[n].dlrPrice;
    //       this.$refs.partAmountList.tableData.push(JSON.parse(JSON.stringify(selectPartsRow)));
    //     }
    //   }
    // },
    //获取选中的工时
    getSeChooseWi(val) {
      this.seChooseWiSelectVisibles = false;
      var selectWiRow = {};
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.installItemList.tableData.length != null) {
          for (var m = 0; m < this.$refs.installItemList.tableData.length; m++) {
            if (this.$refs.installItemList.tableData[m].wiCode == val[n].wiCode) flag = false;
          }
        }
        if (flag) {
          selectWiRow.wiCode = val[n].wiCode;
          selectWiRow.wiName = val[n].wiName;
          this.$refs.installItemList.tableData.push(JSON.parse(JSON.stringify(selectWiRow)));
        }
      }
    },
    //获取选中的车型
    getMulCarType(code, text, codeField, carBrandCn, carTypeCode, comType, popupsKey, rows) {
      var selectCarTypeRow = {};
      for (var n = 0; n < rows.length; n++) {
        let flag = true;
        if (this.$refs.carTypeList.tableData.length != null) {
          for (var m = 0; m < this.$refs.carTypeList.tableData.length; m++) {
            if (this.$refs.carTypeList.tableData[m].carBrandCode == rows[n].carBrandCode && 
            this.$refs.carTypeList.tableData[m].carTypeCode == rows[n].carTypeCode) flag = false;
          }
        }
        if (flag) {
          selectCarTypeRow.carBrandCode = rows[n].carBrandCode;
          selectCarTypeRow.carBrandCn = rows[n].carBrandCn;
          selectCarTypeRow.carSeriesCode = rows[n].carSeriesCode;
          selectCarTypeRow.carSeriesCn = rows[n].carSeriesCn;
          selectCarTypeRow.carTypeCode = rows[n].carTypeCode;
          //selectCarTypeRow.carTypeCn = rows[n].carTypeCn;
          this.$refs.carTypeList.tableData.push(JSON.parse(JSON.stringify(selectCarTypeRow)));
        }
      }
    },
    closePartsChoose() {
      this.paChoosePartVisible = false;
    },
    closeSeChooseWi() {
      this.seChooseWiSelectVisibles = false;
    },
    //保存
    save() {
      // SeDbAcceMutationSave(
      //   this.detailInfo, 
      //   this.$refs.accePartsList.tableData, 
      //   this.$refs.installItemList.tableData, 
      //   this.$refs.carTypeList.tableData 
      // ).then(response => {
      //   var resData = response.data[apiSeBuAcceOrder.SeDbAcceMutationSave.ServiceCode];
      //   if (resData.result === "1" ) {
      //     this.$message({
      //       type: 'success',
      //       message: '保存成功！'
      //     });
      //     //this.fetchData();
      //   } else {
      //     this.$message({
      //       type: 'warning',
      //       message: '保存失败！'
      //     });
      //   }
      // });
    },
    //重置
    reset() {
      this.detailInfo.acceCode = "";
      this.detailInfo.acceName = "";
      this.detailInfo.lowDiscount = "";
      this.detailInfo.acceAmount = "";
      this.detailInfo.acceDiscount = "";
      this.detailInfo.isRecomment = "";
      this.detailInfo.updateControlId = "";
    },
    //删除
    deletePartAmount() {

    },
    getBrandCode(val) {
      this.queryParams.dataInfo.carBrandCode = val;
    },
    changeBeginDate(val) {
      this.queryParams.dataInfo.recallBeginDate = val;
    },
    changeEndDate(val) {
      this.queryParams.dataInfo.recallEndDate = val;
    },
    getRecallType(val) {
      this.queryParams.dataInfo.recallType = val;
    },
    getQuitStatus(val) {
      this.queryParams.dataInfo.quitStatus = val;
    },
    getDate(val) {
      (this.listQuery.dataInfo.begTime = val[0]),
      (this.listQuery.dataInfo.endTime = val[1]);
    }
  }
};
</script>