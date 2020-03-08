<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-title"></div>
    <mix-form ref="detailForm" :dynamicFormFields="detailFields" :dynamicFieldsData="detailFieldsData"></mix-form>
    <div class="filter-container filter-params">
      <div class="filter-container filter-button">
        <el-button @click="saveData">保存</el-button>
        <el-button>重置</el-button>
      </div>
    </div>
    
    <el-tabs v-model="activeName" class="filter-container">
      <el-tab-pane label="召回专案VIN码" name="one">
        <div class="filter-container filter-params">
          <el-row :gutter="26">
            <el-col :span="6">
              <label>VIN码</label>
              <el-input v-model="listToQuery.dataInfo.vin" />
            </el-col>
            <el-col :span="6">
              <label>经销商编码</label>
              <el-input v-model="listToQuery.dataInfo.dlrCode" />
            </el-col>
            <el-col :span="6">
              <a>导入模板下载</a>
            </el-col>

            <el-col :span="6">
              <div class="filter-container filter-button">
                <el-button @click="allDelete">全部删除</el-button>
                <el-button @click="queryVin()">查询</el-button>
                <el-button @click="inputVin()">导入VIN码</el-button>
                <!-- <el-button>删除</el-button> -->
              </div>
            </el-col>
          </el-row>
        </div>

        <mix-table
          ref="vinGatherTable"
          :isShowSelect="true"
          :isDialog="true"
          :queryParams="vinParams"
          :dynamicTableCols="vinCols"
          :isPaging="true"
        ></mix-table>
      </el-tab-pane>

      <el-tab-pane label="工时明细" name="two">
        <div class="filter-container filter-button">
          <el-button @click="addWorkTime">新增</el-button>
        </div>

        <mix-table
          ref="workTimeGatherTable"
          :isShowSelect="true"
          :isDialog="true"
          :queryParams="workTimeParams"
          :dynamicTableCols="workTimeCols"
          :isPaging="true"
        ></mix-table>
      </el-tab-pane>

      <el-tab-pane label="备件明细" name="three">
        <div class="filter-container filter-button">
          <el-button @click="addPart">新增</el-button>
        </div>
        <mix-table
          ref="partGatherTable"
          :isShowSelect="true"
          :isDialog="true"
          :queryParams="partParams"
          :dynamicTableCols="partCols"
          :isPaging="true"
        ></mix-table>
      </el-tab-pane>

      <el-tab-pane label="其他费用明细" name="four">
        <div class="filter-container filter-button">
          <el-button @click="addOther">新增</el-button>
        </div>
        <mix-table
          ref="otherGatherTable"
          :isShowSelect="true"
          :isDialog="true"
          :queryParams="otherParams"
          :dynamicTableCols="otherCols"
          :isPaging="true"
        ></mix-table>
      </el-tab-pane>
    </el-tabs>

    <!--选择工时弹窗(多选)-->
    <seChooseWiSelect
      ref="seChooseWiSelect"
      :title="1"
      :seChooseWiSelectVisibles="seChooseWiSelectVisibles"
      @seChooseWiData="getSeChooseWi"
      @close="closeSeChooseWi"
    ></seChooseWiSelect>

    <!--选择备件弹窗-->
    <paChoosePart
      :paChoosePartVisible="paChoosePartVisible"
      :title="1"
      @seChoosePartData="getParts"
      @close="closePartsChoose"
    ></paChoosePart>

    <!--选择其他费用弹窗-->
    <chooseOtherFeeType ref="chooseOtherFeeType" @changeCode="getchooseOtherFeeType" />
    
    <!--故障现象码-选择 -->
    <seChooseSymptomCode
    :symptomCodeDialogVisible="symptomCodeDialogVisible"
    @changeCode="getRecall"
    @close="closeCSDialog"
    :rowData ='dataInfo'  
    ></seChooseSymptomCode>

    <!--故障原因码-选择 -->
    <seChooseFaultReasonCode 
    :faultReasonCodeDialogVisible="faultReasonCodeDialogVisible"
    @changeCode="getRecall"
    @close="closeCTDialog"
    :rowData ='dataInfo'
    ></seChooseFaultReasonCode>
  
  </div>
</template>

<script>
import carBrand from "@/components/org/carBrand/carBrand";
import { recallApi } from "@/api/graphQLApiList/se";
import mixTable from "@/components/basicComponent/mixTable";
import { the_Height } from "@/components/se/seMixins/makeHeightForTemplate";
import lableName from "@/components/lableName/index";
import { dorecallFindingDetail } from "@/api/se/guarantee/recall/recallFinding";
import {
  dorecallFindingSettingSave,
  doseDbRecallCaseVinQueryListForPage
} from "@/api/se/guarantee/recall/recallSetting";
import seChooseWiSelect from "@/components/se/seChooseWiSelect";
import paChoosePart from "@/components/se/paChoosePart";
import chooseOtherFeeType from "@/components/se/chooseOtherFeeType/chooseOtherFeeType";
import mixForm from '@/components/basicComponent/mixForm'
import seChooseSymptomCode from "@/components/se/seChooseSymptomCode"
import seChooseFaultReasonCode from "@/components/se/seChooseFaultReasonCode"

export default {
  name: "recallSettingDetail",
  mixins: [the_Height],
  components: {
    carBrand,
    mixTable,
    lableName,
    seChooseWiSelect,
    paChoosePart,
    chooseOtherFeeType,
    mixForm,
    seChooseSymptomCode,
    seChooseFaultReasonCode
  },

  created() {

  },

  mounted() {
    this.load();
  },

  data() {
    return {
      recallCaseId: "",
      activeName: "one",
      isModifyDisabled: false,
      isReleaseDisabled: false,
      isStopDisabled: false,
      isDeleteDisabled: false,
      //显示选择工时弹窗
      seChooseWiSelectVisibles: false,
      //显示选择备件弹窗
      paChoosePartVisible: false,
      //故障现象码弹窗
      symptomCodeDialogVisible: false,
      //故障原因码弹窗
      faultReasonCodeDialogVisible: false,
      themeToStar: "主题",
      recallId: "",
      list: "",
      list2: "",
      listQuery: {},
      listToSave: {
        dataInfo: {}
      },
      listToQuery: {
        dataInfo: {
          vin: "",
          dlrCode: "",
          recallCaseId: ""
        }
      },
      detailFieldsData: {
        carBrandCode: '',
        recallCaseType: '',
        topic: '',
        caseCode: '',
        faultPartCode: '',
        caseCode: '',
        faultPartCode: '',
        csCode: '',
        ctCode: '',
        productFactory: '',
        dutyCompType: '',
        dutyComp: '',
        dutyCompName: '',
        limitDays: '',
        limitMile: '',
        recallType: '',
        estimateCompleteDate: '',
        pfpCode: '',
        isRemind: '',
        isLinkRecallCase: ''
      },
      detailFields: [
        {
          label: '品牌',
          codeField: 'carBrandCode',
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.detailFieldsData.carBrandCode = val
          },
          isComponent: true,
          rules: { required: true, message: '请选择车辆品牌', trigger: 'blur' },
          component: () => import('@/components/org/carBrand/carBrand'),
        },
        {
          label: '召回专案类型',
          codeField: 'recallCaseType',
          type: 'dropdownList',
          rules: { required: true, message: '请选择召回专案类型', trigger: 'blur' },
          options: [
            {value: '',label: '全部'},
            {value: '1',label: '召回'},
            {value: '2',label: '专案'}
          ]
        },
        { 
          label: '主题', 
          codeField: 'topic', 
          type: 'inputTxt', 
          span: '12',
          rules: { required: true, message: '请输入主题', trigger: 'blur' }
        },
        { 
          label: '召回专案编号', 
          codeField: 'caseCode', 
          type: 'inputTxt',
          rules: { required: true, message: '请输入召回专案编号', trigger: 'blur' }
        },
        //故障部位不要了
        // { 
        //   label: '故障部位', 
        //   codeField: 'faultPartCode',
        //   type: 'inputTxt',
        //   rules: { required: true, message: '请输入故障部位', trigger: 'blur' }
        // },
        // {
        //   label: '故障部位',
        //   codeField: 'faultPartCode',
        //   isShowLabel: true,
        //   lookuptype: 'PA0043',
        //   sendCode: () => null,
        //   focusCode: () => null,
        //   changeCode: val => {
        //     this.fromLogisticsData.flitType = val
        //   },
        //   isComponent: true,
        //   component: () => import('@/components/org/LookupValue')
        // },
        { 
          label: '故障现象码', 
          codeField: 'csCode',
          type: 'inputTxt',
          suffixIcon: 'el-icon-search',
          event: () => {
            this.queryCSCode();
          },
          rules: { required: true, message: '请选择故障现象码', trigger: 'blur' }
        },
        { 
          label: '故障原因码', 
          codeField: 'ctCode',
          type: 'inputTxt',
          suffixIcon: 'el-icon-search',
          event: () => {
            this.queryCTCode();
          },
          rules: { required: true, message: '请选择故障原因码', trigger: 'blur' }
        },
        { 
          label: '生产工厂', 
          codeField: 'productFactory', 
          type: 'inputTxt',
          rules: { required: true, message: '请输入生产工厂', trigger: 'blur' }
        },
        { label: '责任单位类别', codeField: 'dutyCompType', type: 'inputTxt',rules: { required: true, message: '请输入责任单位类别', trigger: 'blur' } },
        { label: '责任单位代码', codeField: 'dutyComp', type: 'inputTxt', rules: { required: true, message: '请输入责任单位代码', trigger: 'blur' } },
        { label: '责任单位名称', codeField: 'dutyCompName', type: 'inputTxt', rules: { required: true, message: '请输入责任单位名称', trigger: 'blur' } },
        { label: '保修期限（月）', codeField: 'limitDays', type: 'inputTxt' },
        { label: '保修里程（kM）', codeField: 'limitMile', type: 'inputTxt' },
        { label: '召回类型', codeField: 'recallType', type: 'inputTxt', rules: { required: true, message: '请输入召回类型', trigger: 'blur' } },
        { label: '预计完成日期', codeField: 'estimateCompleteDate', type: 'inputTxt', rules: { required: true, message: '请输入预计完成日期', trigger: 'blur' } },
        { label: '故障原因件号', codeField: 'pfpCode', type: 'inputTxt', rules: { required: true, message: '请输入故障原因件号', trigger: 'blur' } },
        { label: '是否进行提醒', codeField: 'isRemind', type: 'checkbox', rules: { required: true, message: '请勾选', trigger: 'blur' } },
        { label: '是否关联召回专案', codeField: 'isLinkRecallCase', type: 'checkbox', rules: { required: true, message: '请勾选', trigger: 'blur' } }
      ],
      vinCols: [
        { label: "vin码", codeField: "vin" },
        { label: "经销商编码", codeField: "dlrCode" },
        { label: "所属经销商简称", codeField: "belongDlrShortName" },
        {
          label: "操作",
          labelName: "删除",
          comps: {
            type: "button",
            event: this.deleteVin
          }
        }
      ],
      vinParams: {
        APIUrl: recallApi.seDbRecallCaseVinQueryListForPage.APIUrl,
        InputType: recallApi.seDbRecallCaseVinQueryListForPage.InputType,
        ServiceCode: recallApi.seDbRecallCaseVinQueryListForPage.ServiceCode,
        dataInfo: {},
        apiQueryRow: ["vin", "dlrCode", "belongDlrShortName"]
      },
      workTimeCols: [
        { label: "维修内容", codeField: "wiName" },
        { label: "工时编码", codeField: "wiCode" },
        { label: "工时单价", codeField: "wiPrice" },
        {
          label: "工时数",
          codeField: "wiSaleQty",
          isEdit: "true",
          comps: {
            type: "inputNum"
          }
        },
        { label: "工时系数", codeField: "wiCoef" },
        { label: "总金额", codeField: "wiAmount" },
        {
          label: "关联号",
          codeField: "linkOrderCode",
          isEdit: "true",
          comps: {
            type: "inputTxt"
          }
        },
        {
          label: "操作",
          labelName: "删除",
          comps: {
            type: "button",
            event: this.deleteWorkTime
          }
        }
      ],
      workTimeParams: {},
      partCols: [
        { label: "备件号", codeField: "oldLoadPartNo" },

        { label: "备件名称", codeField: "partName" },
        {
          label: "必须件",
          codeField: "isMust",
          isEdit: "true",
          comps: {
            type: "checkBox"
          }
        },
        {
          label: "备件数量",
          codeField: "partQty",
          isEdit: "true",
          comps: {
            type: "inputNum"
          }
        },
        { label: "备件单价", codeField: "partPrice" },
        { label: "总金额", codeField: "partAmount" },
        {
          label: "关联号",
          codeField: "linkOrderCode",
          isEdit: "true",
          comps: {
            type: "inputTxt"
          }
        },
        {
          label: "是否铺件",
          codeField: "isPavParts",
          isEdit: "true",
          comps: {
            type: "inputTxt"
          }
        },
        {
          label: "操作",
          labelName: "删除",
          comps: {
            type: "button",
            event: this.deletePart()
          }
        }
      ],
      partParams: {},
      otherCols: [
        { label: "类别代码", codeField: "costTypeCode" },
        { label: "类别名称", codeField: "costTypeName" },
        {
          label: "系数",
          codeField: "costCoef",
          isEdit: "true",
          comps: {
            type: "inputTxt"
          }
        },
        {
          label: "单价",
          codeField: "price",
          isEdit: "true",
          comps: {
            type: "inputNum2",
            precision: "2"
          }
        },
        {
          label: "金额",
          codeField: "otherAmount",
          isEdit: "true",
          comps: {
            type: "inputNum2",
            precision: "2"
          }
        },
        {
          label: "备注",
          codeField: "remark",
          isEdit: "true",
          comps: {
            type: "inputTxt"
          }
        },
        {
          label: "关联号",
          codeField: "linkOrderCode",
          isEdit: "true",
          comps: {
            type: "inputTxt"
          }
        },
        {
          label: "操作",
          labelName: "删除",
          comps: {
            type: "button",
            event: this.deleteOther
          }
        }
      ],
      otherParams: {}
    };
  },
  methods: {
    getBrand() {},
    queryRecallClick() {
      //   console.log(
      //     "theRow" + JSON.stringify(this.$refs.queryRecallTable.currentRow)
      //   );
    },
    //加载事件
    load() {
      //debugger
      this.recallCaseId = this.$route.params.the_data;
      const that = this;
      that.listLoading = true;
      dorecallFindingDetail(that.recallCaseId).then(response => {
        if (
          response.data[recallApi.seDbRecallCaseQueryListDetail.ServiceCode]
            .result === "1"
        ) {
          that.list =
            response.data[
              recallApi.seDbRecallCaseQueryListDetail.ServiceCode
            ].rows;

          //that.listToSave.dataInfo = that.list[0];
          that.detailFieldsData = that.list[0];
          that.$refs.workTimeGatherTable.tableData =
            that.list[0].seDbRecallCaseWi;
          that.$refs.partGatherTable.tableData =
            that.list[0].seDbRecallCasePart;
          that.$refs.otherGatherTable.tableData =
            that.list[0].seDbRecallCaseOther;
        } else {
          this.$message({
            message:
              "查询失败：" +
              response.data[recallApi.seDbRecallCaseQueryListDetail.ServiceCode]
                .msg,
            type: "warn",
            uration: 2000
          });
        }
      });
    },
    saveData() {
      const that = this;
      that.$nextTick(() => {
        that.$refs.detailForm[0].validate((valid) => {
          console.log("验证");
      })

      });
      
      dorecallFindingSettingSave(that.listToSave.dataInfo).then(response => {
        if (
          response.data[recallApi.seDbRecallCaseMutationSave.ServiceCode]
            .result === "1"
        ) {
          this.$message({
            type: "success",
            message: "保存成功!"
          });
        } else {
          this.$message({
            type: "error",
            message: "保存失败!"
          });
        }
      });
    },
    //添加工时
    addWorkTime() {
      this.seChooseWiSelectVisibles = true;
    },
    //添加备件
    addPart() {
      this.paChoosePartVisible = true;
    },
    //添加其他费用
    addOther() {
      let obj = {};
      this.$refs.chooseOtherFeeType.open(obj);
    },
    //查询vin
    queryVin() {
      const that = this;
      that.listLoading = true;
      that.listToQuery.dataInfo.recallCaseId = that.recallCaseId;
      doseDbRecallCaseVinQueryListForPage(that.listToQuery.dataInfo).then(
        response => {
          if (response.data.seDbRecallCaseVinQueryListForPage.result === "1") {
            that.list2 = response.data.seDbRecallCaseVinQueryListForPage.rows;
            that.listLoading = false;
            that.$refs.vinGatherTable.tableData = that.list2;
          }
        }
      );
    },
    //导入VIN码，要先判断是否存在此召回专案
    inputVin() {
      if (this.recallCaseId == "" || this.recallCaseId == null) {
        this.$message({
          type: "error",
          message: "此召回专案未发布!"
        });
      } else {
        this.$message({
          type: "success",
          message: "成功导入"
        });
      }
    },
    //选择工时
    getSeChooseWi(val) {
      this.seChooseWiSelectVisibles = false;
      console.log("选择工时的数据");
      console.log(val);
      var selectWiRow = {};
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.workTimeGatherTable.tableData.length != null) {
          for (
            var m = 0;
            m < this.$refs.workTimeGatherTable.tableData.length;
            m++
          ) {
            if (
              this.$refs.workTimeGatherTable.tableData[m].wiCode ==
              val[n].wiCode
            )
              flag = false;
          }
        }
        if (flag) {
          selectWiRow.wiCode = val[n].wiCode;
          selectWiRow.wiName = val[n].wiName;
          //此处API缺失工时单价&工时系数
          // selectWiRow.wiPrice = val[n].wiPrice;
          // selectWiRow.wiCoef = val[n].wiCoef;
          this.$refs.workTimeGatherTable.tableData.push(
            JSON.parse(JSON.stringify(selectWiRow))
          );
        }
      }
    },
    //关闭工时弹窗
    closeSeChooseWi(val) {
      this.seChooseWiSelectVisibles = false;
    },
    //选择备件
    getParts(val) {
      this.paChoosePartVisible = false;
      var selectPartsRow = {};
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.partGatherTable.tableData.length != null) {
          for (
            var m = 0;
            m < this.$refs.partGatherTable.tableData.length;
            m++
          ) {
            if (this.$refs.partGatherTable.tableData[m].partNo == val[n].partNo)
              flag = false;
          }
        }
        if (flag) {
          selectPartsRow.partNo = val[n].partNo;
          selectPartsRow.partName = val[n].partName;
          this.$refs.partGatherTable.tableData.push(JSON.parse(JSON.stringify(selectPartsRow)));
        }
      }
    },
    //关闭备件选择弹窗
    closePartsChoose(val) {
      this.paChoosePartVisible = false;
    },
    //选择其它费用
    getchooseOtherFeeType(val) {
      console.log("其他" + JSON.stringify(val));
      var selectOtherRow = {};
      for (var n = 0; n < val.length; n++) {
        let flag = true;
        if (this.$refs.otherGatherTable.tableData.length != null) {
          for (
            var m = 0;
            m < this.$refs.otherGatherTable.tableData.length;
            m++
          ) {
            if (
              this.$refs.otherGatherTable.tableData[m].costTypeId ==
              val[n].partNo
            )
              flag = false;
          }
        }
        if (flag) {
          selectOtherRow.costTypeCode = val[n].costTypeCode;
          selectOtherRow.costTypeName = val[n].costTypeName;
          this.$refs.otherGatherTable.tableData.push(
            JSON.parse(JSON.stringify(selectOtherRow))
          );
        }
      }
    },
    allDelete() {},
    deleteVin(row) {},
    deleteWorkTime(row) {
      console.log("本行数据" + row);
    },
    deletePart(row) {},
    deleteOther(row) {},
    //打开故障现象码弹窗
    queryCSCode() {
      this.symptomCodeDialogVisible = true;
    },
    //打开故障原因码弹窗
    queryCTCode() {
      debugger
      this.faultReasonCodeDialogVisible = true;
    },
    closeCSDialog() {
      this.symptomCodeDialogVisible = false;
    },
    closeCTDialog() {
      this.faultReasonCodeDialogVisible = false;
    }
  }
};
</script>