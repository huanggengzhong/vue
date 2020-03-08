<template>
  <div class="app-container app-container-table">
    <!--<div class="filter-container filter-title" ref="resultTitleHeight">精品信息</div>-->
    <div class="filter-container filter-params" style="margin-top: 20px">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>精品套餐编码</label>
          <el-input v-model="detailInfo.acceCode" readonly="readonly"></el-input>
        </el-col>
        <el-col :span="6">
          <label>精品项目名称</label>
          <el-input v-model="detailInfo.acceName"></el-input>
        </el-col>
        <el-col :span="6">
          <label>销售最低折扣(%)</label>
          <el-input v-model="detailInfo.lowDiscount"></el-input>
        </el-col>
        <el-col :span="6">
          <label>总费用</label>
          <el-input v-model="detailInfo.acceAmount" readonly="readonly"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="26">
        <el-col :span="6">
          <label>折扣率(%)</label>
          <el-input v-model="detailInfo.acceDiscount"></el-input>
        </el-col>
        <el-col :span="6">
          <label>是否推荐</label>
          <el-select v-model="detailInfo.isRecommend" placeholder="请选择" @change="getRecallStatus" clearable>
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
        </el-col>
        <el-col :span="6">
          <div class="filter-container filter-button">
            <el-button @click="save">保存</el-button>
            <el-button>重置</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-tabs v-model="sonActiveName" class="filter-container">
      <el-tab-pane label="精品备件" name="one">
        <div class="filter-container filter-button" style="margin-top: 0px">
          <el-button @click="selectAcceParts">选择精品备件</el-button>
        </div>
        <!--精品备件-->
        <mix-table
        ref="accePartsList"
        :queryParams="accePartsDetail"
        :dynamicTableCols="accPartsCols"
        :isPaging="true"
        :isShowSelect="true"
        :isDialog="true"
        ></mix-table>
      </el-tab-pane>

      <el-tab-pane label="安装项目" name="two">
        <div class="filter-container filter-button" style="margin-top: 0px">
          <el-button @click="selectInstallItems">选择安装项目</el-button>
        </div>
        <!--安装项目-->
        <mix-table
        ref="installItemList"
        :queryParams="installItemDetail"
        :dynamicTableCols="installItemCols"
        :isPaging="true"
        :isShowSelect="true"
        :isDialog="true"
        ></mix-table>
      </el-tab-pane>

      <el-tab-pane label="适用车型" name="three">
        <div class="filter-container filter-button" style="margin-top: 0px">
          <el-button @click="selectCarType">选择适用车型</el-button>
        </div>
        <!--适用车型-->
        <mix-table
        ref="carTypeList"
        :queryParams="carTypeDetail"
        :dynamicTableCols="carTypeCols"
        :isPaging="true"
        :isShowSelect="true"
        :isDialog="true"
        ></mix-table>
      </el-tab-pane>
    </el-tabs>

    <!--选择备件弹框-->
    <paChoosePart
    :paChoosePartVisible="paChoosePartVisible"
    :title="1"
    @seChoosePartData="getParts"
    @close="closePartsChoose"
    ></paChoosePart>

    <!--选择工时弹窗(多选)-->
    <seChooseWiSelect 
    ref="seChooseWiSelect" 
    :title="1" 
    :seChooseWiSelectVisibles="seChooseWiSelectVisibles" 
    @seChooseWiData="getSeChooseWi" 
    @close="closeSeChooseWi"></seChooseWiSelect>

    <!--选择车型弹框(多选)-->
    <CarTypeModal :isMul="true" ref="multiCarType" @changeCode="getMulCarType" />
  </div>
</template> 
<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { apiSeDbAcce } from "@/api/graphQLApiList/se";
import mixTable from "@/components/basicComponent/mixTable";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import paChoosePart from "@/components/se/paChoosePart";
import CarTypeModal from '@/components/se/CarTypeModal/CarTypeModal'
import seChooseWiSelect from '@/components/se/seChooseWiSelect'
import { SeDbAcceMutationSave,seDbAcceQueryDetailFindAll } from "@/api/se/repair/sales/seDbAcceSetting";

export default {
  name: "recallSetting",
  mixins: [the_Height],
  components: {
    carBrand,
    mixTable,
    paChoosePart,
    CarTypeModal,
    seChooseWiSelect
  },
  created() {
    var getSelectRows = this.$route.params.the_data;
    var flag = this.$route.params.the_data1;
    console.log("接收到的数据");
    console.log(getSelectRows);
    console.log(getSelectRows.length);
    console.log(flag);
    //修改
    if (flag == 1) {
      this.accId = getSelectRows[0].acceId
      this.detailInfo.acceCode = getSelectRows[0].acceCode;
      this.detailInfo.acceName = getSelectRows[0].acceName;
      this.detailInfo.lowDiscount = getSelectRows[0].lowDiscount;
      this.detailInfo.acceAmount = getSelectRows[0].acceAmount;
      this.detailInfo.acceDiscount = getSelectRows[0].acceDiscount;
      this.detailInfo.isRecomment = getSelectRows[0].isRecomment;
      this.detailInfo.updateControlId = getSelectRows[0].updateControlId;
    } else if (flag == 2) {//组合套餐
      for (var i = 0; i < getSelectRows.length; i++) {
        if (i == 0) {
          this.accId = getSelectRows[0].acceId;
        } else {
          this.accId += ',' + getSelectRows[0].acceId;
        }
      }
    }
    this.doDetailQuery();
  },
  mounted() {
    
  },
 
  data() {
    return {
      sonActiveName: "one",
      paChoosePartVisible: false,
      seChooseWiSelectVisibles: false,
      //用于查询明细的精品套餐Id
      accId: '',
      accePartsDetail: {},
      //精品备件
      accPartsCols: [
        { label: "备件编码", codeField: "partNo"},
        { label: "备件名称", codeField: "partName"},
        { label: "数量", 
          codeField: "partQty", 
          isEdit: "true",
          comps: {
            type: "inputNum",
            change: this.changeNum
          }
        },
        { label: "单价", codeField: "partPrice"},
        { label: "合计", codeField: "total"},
        { label: "精品最终用户价", 
          codeField: "saleUserPartAmount", 
          isEdit: "true",
          comps: {
            type: "inputNum",
            change: this.changeAmount
          }
        },
        { label: "备件最小包装含量", codeField: "minSaleQty"}
      ],
      installItemDetail: {},
      //安装项目
      installItemCols: [
        { label: "操作码", codeField: "wiCode"},
        { label: "维修内容", codeField: "wiName"},
        { label: "安装工时", 
          codeField: "wiWorkQty",
          isEdit: "true",
          comps: {
            type: "inputNum",
            change: this.changeWorkQty
          }
        }
      ],
      carTypeDetail: {},
      //适用车型
      carTypeCols: [
        { label: "车辆品牌编码", codeField: "carBrandCode", hidden: true},
        { label: "车辆品牌", codeField: "carBrandCn"},
        { label: "车系", codeField: "carSeriesCn"},
        { label: "车系编码", codeField: "carSeriesCode", hidden: true},
        { label: "车型", codeField: "carTypeCode"}
      ],
      //明细信息
      detailInfo: {
        acceCode: '',
        acceName: '',
        lowDiscount: '100.00',
        acceAmount: 0,
        acceDiscount: 100.00,
        isRecomment: '',
        updateControlId: ''
      }
    };
  },
  methods: {
    doDetailQuery() {
      var pageSize = -1;
      var pageIndex = -1;
      seDbAcceQueryDetailFindAll(pageSize, pageIndex, this.acceId).then(response => {
        //debugger
        var resData = response.data[apiSeDbAcce.seDbAcceQueryDetailFindAll.ServiceCode];
        if (resData.result === "1" ) {
          this.$refs.accePartsList.tableData = resData.rows[0].accePart;
          this.$refs.installItemList.tableData = resData.rows[0].acceWi;
          this.$refs.carTypeList.tableData = resData.rows[0].acceCarType;
        }
      });
    },
    selectAcceParts() {
      this.paChoosePartVisible = true;
    },
    selectInstallItems() {
      this.seChooseWiSelectVisibles = true;
    },
    selectCarType() {
      this.$refs.multiCarType.open();
    },
    //获取选中的备件
    getParts(val) {
      this.paChoosePartVisible = false;
      var selectPartsRow = {
        partNo: '',
        partName: '',
        partQty: 1,//数量
        partPrice: 0,//单价
        total: 0,//合计
        saleUserPartAmount: 0,//精品最终用户价
        minSaleQty: 1//备件最小包装含量
      };
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.accePartsList.tableData.length != null) {
          for (var m = 0; m < this.$refs.accePartsList.tableData.length; m++) {
            if (this.$refs.accePartsList.tableData[m].partNo == val[n].partNo) flag = false;
          }
        }
        if (flag) {
          selectPartsRow.partNo = val[n].partNo;
          selectPartsRow.partName = val[n].partName;
          selectPartsRow.partPrice = val[n].dlrPrice;//单价==网点价
          selectPartsRow.total = val[n].dlrPrice;
          selectPartsRow.saleUserPartAmount = val[n].dlrPrice;
          this.$refs.accePartsList.tableData.push(JSON.parse(JSON.stringify(selectPartsRow)));
        }
      }
    },
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
      SeDbAcceMutationSave(
        this.detailInfo, 
        this.$refs.accePartsList.tableData, 
        this.$refs.installItemList.tableData, 
        this.$refs.carTypeList.tableData 
      ).then(response => {
        var resData = response.data[apiSeDbAcce.SeDbAcceMutationSave.ServiceCode];
        if (resData.result === "1" ) {
          this.$message({
            type: 'success',
            message: '保存成功！'
          });
          //this.fetchData();
        } else {
          this.$message({
            type: 'warning',
            message: '保存失败！'
          });
        }
        //this.selectChargePersonVisible = false;
        //this.$refs.tableList.clearSelection();
      });
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
    changeNum(row) {
      row.saleUserPartAmount = Number((Number(row.partQty) * Number(row.partPrice)).toFixed(2))
    },
    changeAmount(row) {
      //debugger
      var total = 0;
      var length = this.$refs.accePartsList.tableData.length;
      for (var i = 0; i < this.$refs.accePartsList.tableData.length; i++) {
        total += Number(Number(this.$refs.accePartsList.tableData[i].saleUserPartAmount).toFixed(2));
      }
      this.detailInfo.acceAmount = Number((Number(total) * Number(this.detailInfo.acceDiscount) * 0.01).toFixed(2));
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