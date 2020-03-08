<template>
  <div>
    <div class="filter-container filter-params">
      <!-- 表格组件 -->
      <mix-form
        ref="detailForm"
        :isSearch="true"
        :dynamicFormFields="detailFields"
        :dynamicFieldsData="detailFieldsData"
      ></mix-form>
      <!-- 车型组件-->
      <CarTypeModal :isMul="false" ref="multiCarType" />
      <!--按钮组件  -->
      <div>
        <mix-button name="searchBtns" :dynamicButtons="btns" @toggle="togger" :isShowMore="true"></mix-button>
      </div>
    </div>
    <!-- 表格组件 -->
    <div class="filter-container filter-params">\
      <mix-table
        ref="tableList"
        :isShowSelect="true"
        :isDialog="true"
        :isMore="true"
        :dynamicTableCols="recallCols"
        :isPaging="true"
        :queryParams="queryParams"
      ></mix-table>
    </div>
    <!-- 新增弹框 -->
    <seMaintenanceAdd :newDataVisible="addVisible" @closeAddDl="closeNewDate"></seMaintenanceAdd>
    <seMaintenanceBatchAdd :batchAddVisible="batchAddVisible" @closeBatchAddDl="closeBatchAdd"></seMaintenanceBatchAdd>
    <seMainteAnnouCarTypeQuery
      :annouCarTypeVisible="annouCarTypeVisible"
      @closeAnnouCatTypeQuery="closeAnnouCatTypeQuery"
    ></seMainteAnnouCarTypeQuery>
  </div>
</template>

<script>

import { apiMaintenance } from "@/api/graphQLApiList/se";
import carBrand from "@/components/org/carBrand/carBrand";
import mixTable from "@/components/basicComponent/mixTable";
import mixForm from "@/components/basicComponent/mixForm";
//导入按钮组件
import mixButton from "@/components/basicComponent/mixButton";
// 公告车型组件的导入
import CarTypeModal from "@/components/se/CarTypeModal/CarTypeModal";
//弹窗的导入
import seMaintenanceAdd from "@/views/se/basedata/guarantee/seMaintenanceAdd";
import seMaintenanceBatchAdd from "@/views/se/basedata/guarantee/seMaintenanceBatchAdd";
import seMainteAnnouCarTypeQuery from "@/views/se/basedata/guarantee/seMainteAnnouCarTypeQuery";

export default {
  components: {
    carBrand,
    mixTable,
    mixForm,
    mixButton,
    CarTypeModal,
    apiMaintenance,
    seMaintenanceAdd,
    seMaintenanceBatchAdd,
    seMainteAnnouCarTypeQuery
  },
  data() {
    return {
      detailFormList: "",
      addVisible: false,
      batchAddVisible: false,
      annouCarTypeVisible: false,
      queryParams: {
        APIUrl: apiMaintenance.seDbEngCarTypeMaintaQueryFindAll.APIUrl,
        InputType: apiMaintenance.seDbEngCarTypeMaintaQueryFindAll.InputType,
        ServiceCode:
          apiMaintenance.seDbEngCarTypeMaintaQueryFindAll.ServiceCode,
        dataInfo: {
          createdName: "createdName",
          modifyName: "modifyName",
          beginEnableDate: "beginEnableDate",
          endEnableDate: "endEnableDate",
          beginCreatedDate: "beginCreatedDate",
          endCreatedDate: "endCreatedDate",
          beginLastUpdatedDate: "beginLastUpdatedDate",
          endLastUpdatedDate: "endLastUpdatedDate",
          carSeriesId: "carSeriesId",
          serviceCarType: "serviceCarType",
          isEnable: "isEnable",
          enginType: "enginType",
          queryType: "queryType"
        },
        apiQueryRow: [
          "createdName",
          "modifyName",
          "enableDate",
          "lastUpdatedDate",
          "enginType",
          "maintaId",
          "updateControlId",
          "enableDate",
          "isEnable",
          "isEnableCn",
          "carBrandCode",
          "carBrandCn",
          "carSeriesCode",
          "carSeriesCn",
          "sCarseriesCode",
          "sCarseriesDesc",
          "serviceCarType",
          "maintaNo"
        ]
      },
      // 表头信息
      recallCols: [
        {
          label: "操作",
          labelName: "修改",
          labelName: "删除",

          comps: [
            {
              labelName: "新增",
              type: "button",
              event: ""
            },
            {
              type: "button",
              event: ""
            },
            {
              type: "button",
              event: ""
            }
          ]
        },
        { label: "品牌", codeField: "carBrandCn" },
        { label: "车系", codeField: "carSeriesCn" },
        { label: "公告车型", codeField: "operDate" },
        { label: "强保次数", codeField: "maintaNo" },
        { label: "启用日期", codeField: "enableDate" },
        { label: "创建人", codeField: "createdName" },
        { label: "创建日期", codeField: "caseStatus" },
        { label: "维护人", codeField: "modifyName" },
        { label: "维护日期", codeField: "lastUpdatedDate" },
        { label: "启用状态", codeField: "isEnable" }
      ],
      //按钮创建参数
      btns: [
        {
          name: "exportData",
          text: "导出",
          clickEvent: "exportData",
          position: "left",
          argument: { type: "exportData" }
        },
        {
          name: "batchAdd",
          text: "批量新增",
          clickEvent: "openBatchAdd",
          position: "left",
          argument: { type: "batchAdd" }
        },
        {
          name: "ExcellImport",
          text: "Excell导入",
          clickEvent: "openBatchAdd",
          position: "left",
          argument: { type: "ExcellImport" }
        },
        {
          name: "announcementModelView",
          text: "公告车型查询",
          clickEvent: "openAnnouModelView",
          position: "left",
          argument: { type: "announcementModelView" }
        },
        {
          name: "search",
          text: "查询",
          clickEvent: "fetchData",
          position: "right",
          argument: { type: "search" }
        },
        {
          name: "add",
          text: "新增",
          clickEvent: "openNewData",
          position: "right",
          argument: { type: "add" }
        },
        {
          name: "reset",
          text: "重置",
          clickEvent: "reset",
          position: "right",
          argument: { type: "reset" }
        }
      ],

      detailFieldsData: {
        carBrandCode: "",
        recallCaseType: "",
        topic: "",
        caseCode: "",
        faultPartCode: "",
        caseCode: "",
        faultPartCode: "",
        csCode: "",
        ctCode: "",
        productFactory: "",
        dutyCompType: "",
        dutyComp: "",
        dutyCompName: "",
        limitDays: "",
        limitMile: "",
        recallType: "",
        estimateCompleteDate: "",
        pfpCode: "",
        isRemind: "",
        isLinkRecallCase: ""
      },
      detailFields: [
        {
          label: "品牌:",
          codeField: "carBrandCode",
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.detailFieldsData.carBrandCode = val;
          },
          isComponent: true,
          rules: { required: true, message: "请选择车辆品牌", trigger: "blur" },
          component: () => import("@/components/org/carBrand/carBrand")
        },
        {
          label: "车系",
          codeField: "carSeriesId",
          type: "dropdownList",
          options: [
            { value: "", label: "全部" },
            { value: "1", label: "东风风神A30" }
          ]
        },
        {
          label: "公告车型",
          codeField: "CarTypeModal",
          type: "inputTxt",
          suffixIcon: "el-icon-search",
          sendCode: () => null,
          focusCode: () => null,
          event: this.openCarType
        },

        {
          label: "创建人",
          codeField: "createdName",
          type: "inputTxt"
        },
        {
          label: "维护人",
          codeField: "modifyName",
          type: "inputTxt"
        },
        {
          label: "启用日期",
          codeField: "beginEnableDate",
          type: "inputDate",
          dateType: "daterange"
        },
        {
          label: "创建日期",
          codeField: "beginCreatedDate",
          type: "inputDate",
          dateType: "daterange"
        },

        {
          label: "维护日期",
          codeField: "beginLastUpdatedDate",
          type: "inputDate",
          dateType: "daterange"
        },
        {
          label: "启用状态",
          codeField: "isEnable",
          type: "dropdownList",
          options: [
            { value: "", label: "全部" },
            { value: "1", label: "启用" },
            { value: "2", label: "停用" }
          ]
        }
      ]
    };
  },
  methods: {
    // 表格导出
    exportData() {
      this.$refs.tableList.exportTableData("excel", "召回专案PV查询", "Sheet0");
    },
    // 关闭新增的弹框
    closeNewDate(val) {
      this.newDataVisible = val;
    },

    // 关闭批量新增
    closeBatchAdd(val) {
      this.batchAddVisible = val;
    },

    // 关闭告车型查询弹框
    closeAnnouCatTypeQuery(val) {
      this.annouCarTypeVisible = false;
    },
    // 打开公告车型查询弹框
    openAnnouModelView() {
      this.annouCarTypeVisible = true;
    },

    // 打开新增的弹框
    openNewData() {
      this.addVisible = true;
    },

    // 打开批量新增的弹框
    openBatchAdd() {
      this.batchAddVisible = true;
    },
    // 打开公告车型弹框
    openCarType() {
      this.$refs.multiCarType.open();
    },
    // 高级搜索的方法
    togger() {
      this.$refs.detailForm.changeToggleParam();
    },

    // 查询的方法
    fetchData() {
      this.detailFormList = this.$refs.detailForm.fieldsData;
      console.log(this.detailFormList);
      this.$refs.tableList.queryList(this.detailFormList);
    },

    // 重置方法
    reset() {
      this.$refs.detailForm.fieldsData.carBrandCode = "";
      this.$refs.detailForm.fieldsData.carSeriesId = "";
      this.$refs.detailForm.fieldsData.CarTypeModal = "";
      this.$refs.detailForm.fieldsData.createdName = "";
      this.$refs.detailForm.fieldsData.modifyName = "";
      this.$refs.detailForm.fieldsData.beginEnableDate = "";
      this.$refs.detailForm.fieldsData.beginLastUpdatedDate = "";
      this.$refs.detailForm.fieldsData.endLastUpdatedDate = "";
      this.$refs.detailForm.fieldsData.isEnable = "";
    }
  }
};
</script>
<style>
</style>