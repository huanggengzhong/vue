<!--
* description: 网点信息售后扩展
* author: wbhuwy
* createdDate: 2019-10-22
* logs:xtadmin 1
-->

<template>
  <div class="app-container app-container-table">
    <div>
      <!-- <div class="filter-container filter-title" ref="conTitleHeight">查询区</div> -->
      <!-- 点击查询 -->
      <!-- <div class="filter-container filter-button" ref="searcheHeight"> -->
      <!-- <el-button type="text" size="small" @click="queryFindAll(1)">导入模板</el-button>
        <el-button type="small" size="small" @click="queryFindAll(1)">导入</el-button>
        <el-button type="small" size="small" @click="queryFindAll(1)">结算系数批量修改</el-button>
        <template>
           
            <el-button size="small" @click="queryWebList">查询</el-button>
        </template>
        <el-button size="small" @click="insertData('formName')">修改</el-button>
      <el-button size="small" @click="declearData()">重置</el-button>-->
      <!-- </div> -->

      <div class="filter-container filter-params" ref="conHeight">
        <!-- <el-row :gutter="26">

        <el-col :span="6">
          <label>故障部位代码</label>
          <el-input clearable v-model="listQuery.saveList.faultPartCode" placeholder size="small" />
        </el-col>
        <el-col :span="6">
          <label>故障部位名称</label>
          <el-input clearable v-model="listQuery.saveList.faultPartName" placeholder size="small" />
        </el-col>
        </el-row>-->

        <!-- 查询区 -->
        <div class="filter-container filter-params">
          <mix-form
            ref="fromFlitCancel"
            :dynamicFormFields="agencyFromFlitCancel"
            :dynamicFieldsData="agencyFromFlitCancelData"
            :isSearch="true"
          ></mix-form>
          <div class="filter-container filter-buttons">
            <mix-button
              name="searchBtns"
              :dynamicButtons="btns"
              @toggle="togger"
              :isShowMore="true"
            ></mix-button>
          </div>
        </div>
        <!-- 查询结果 -->
        <mix-table
          ref="webListResult"
          :isDialog="true"
          :queryParams="webQueryParams"
          :isMore="true"
          :dynamicTableCols="dataCols"
          :isPaging="true"
        ></mix-table>
      </div>
      <!-- 结算系数批量维护 -->
      <div v-if="dialogParamVisible">
        <el-dialog
          :visible.sync="dialogParamVisible"
          title="结算系数批量维护"
          center
          width="70%"
          :append-to-body="true"
          @close="closeDialog"
          :close-on-click-modal="false"
        >
          <seEIOrgDlrExtendInfoMutation @closeDL="closeDLG" />
        </el-dialog>
      </div>
      <!-- 修改会话框 -->
      <div v-if="isShowSeExtendsInfoAndserveDialog">
        <seExtendsInfoAndserve
          :isDialogVisible="isShowSeExtendsInfoAndserveDialog"
          :rowData="currentRowData"
          @closeDialogIS="changeData2"
        ></seExtendsInfoAndserve>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * by wbhuwy
 */
// import { seApis } from "@/api/graphQLApiList/se";
// import { the_Height } from "@/views/se/makeHeight";
// import { requestGraphQL } from "@/api/commonRequest";
// import lableName from "@/components/lableName";
import { mdmOrgDlrExtendInfoQueryList } from "@/api/se/basedata/guarantee/seExtendsInfo";
import { apiMOrgDlr } from "@/api/graphQLApiList/se";
import mixTable from "@/components/basicComponent/mixTable";
import mixForm from "@/components/basicComponent/mixForm";
import mixButton from "@/components/basicComponent/mixButton";
import LookupValue from "@/components/org/LookupValue";
import seEIOrgDlrExtendInfoMutation from "./seEIOrgDlrExtendInfoMutation.vue";
import seExtendsInfoAndserve from "./seExtendsInfoAndserveDialog.vue";

// import { getList, getQueryMock,seDbOpratePlaceQueryFindAll } from "@/api/se/basedata/repair/repairWIType";
// import carBrand from "@/components/carBrand/carBrand";
// import isEnable from "@/components/isEnable/isEnable";
// import setStatus from "@/components/setStatus/setStatus";
// import carType from "@/components/carType/carType";
export default {
  components: {
    mixTable,
    mixForm,
    LookupValue,
    mixButton,
    seEIOrgDlrExtendInfoMutation,
    seExtendsInfoAndserve
  },
  data() {
    return {
      // 当前行的数据
      currentRowData: [],
      // mixForm的数据
      agencyFromFlitCancel: [
        {
          label: "经销商编码",
          codeField: "dlrCode",
          type: "inputTxt"
        },
        {
          label: "经销商简称",
          codeField: "dlrShortName",
          type: "inputTxt"
        },
        {
          label: "小区",
          codeField: "smallAreaId",
          isShowLabel: true,
          lookuptype: "PA0043",
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.agencyFromFlitCancelData.smallAreaId = val;
          },
          isComponent: true,
          component: () => import("@/components/org/SmallArea/index")
        },
        {
          label: "省份",
          codeField: "provinceId",
          isShowLabel: true,
          lookuptype: "PA0043",
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.agencyFromFlitCancelData.provinceId = val;
          },
          isComponent: true,
          component: () => import("@/components/org/ProvinceQuery")
        },
        {
          label: "维护时间",
          codeField: "lastUpdatedDateStart",
          type: "inputDate"
        },
        {
          label: "至",
          codeField: "lastUpdatedDateEnd",
          type: "inputDate"
        },
        {
          label: "系数维护时间",
          codeField: "modifydateRefStart",
          type: "inputDate"
        },
        {
          label: "至",
          codeField: "modifydateRefEnd",
          type: "inputDate"
        },
        {
          label: "经销商状态",
          codeField: "dlrStatus",
          isShowLabel: true,
          lookuptype: "DB0066",
          sendCode: () => null,
          focusCode: () => null,
          changeCode: val => {
            this.agencyFromFlitCancelData.dlrStatus = val;
          },
          isComponent: true,
          component: () => import("@/components/org/LookupValue")
        }
      ],
      //   mixForm的提交数据
      agencyFromFlitCancelData: {
        //   经销商编码
        dlrCode: "",
        // 经销商简称
        dlrShortName: "",
        // 小区
        smallAreaId: "",
        // 省份
        provinceId: "",
        // 维护时间开始
        lastUpdatedDateStart: "",
        // 维护时间结束
        lastUpdatedDateEnd: "",
        // 经销商状态
        dlrStatus: "",
        // 系数维护时间开始
        modifydateRefStart: "",
        // 系数维护时间结束
        modifydateRefEnd: ""
      },
      //   mixTable的数据
      dataCols: [
        // { label: "序号", codeField: "extendInfoId" },
        // { label: "选择", type: "checkBox" },
        {
          label: "操作",
          // codeField:"btn",
          labelName: "修改",
          width: 110,
          comps: [
            {
              type: "button",
              event: this.changeData
            }
          ]
        },
        { label: "小区", codeField: "smallAreaName" },
        { label: "城市", codeField: "cityName" },
        { label: "经销商编码", codeField: "dlrCode" },
        { label: "经销商简称", codeField: "dlrShortName" },
        // { label: "经销商全称", codeField: "opratePlaceName" },
        { label: "经销商状态", codeField: "dlrStatus" },
        { label: "保修工时系数", codeField: "repairQuotiety" },
        { label: "新车地区系数", codeField: "preQuotiety" },
        { label: "备件费用限额", codeField: "limitJe" },
        { label: "备件结算系数1", codeField: "squotiety1" },
        { label: "备件结算系数2", codeField: "squotiety2" },
        { label: "保养地区系数", codeField: "mtainQuotiety" },
        { label: "维护人", codeField: "modifyName" },
        { label: "维护时间", codeField: "lastUpdatedDate" },
        { label: "系数维护时间", codeField: "modifydateRef" },
        { label: "备注", codeField: "remark" }
      ],
      // mix-table的查询条件
      webQueryParams: {
        // Api设置
        APIUrl: apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.APIUrl,
        InputType: apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.InputType,
        ServiceCode: apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.ServiceCode,
        dataInfo: {
          //   经销商编码
          dlrCode: "",
          // 经销商简称
          dlrShortName: "",
          // 小区
          smallAreaId: "",
          // 省份
          provinceId: "",
          // 维护时间开始
          lastUpdatedDateStart: "",
          // 维护时间结束
          lastUpdatedDateEnd: "",
          // 经销商状态
          dlrStatus: "",
          // 系数维护时间开始
          modifydateRefStart: "",
          // 系数维护时间结束
          modifydateRefEnd: ""
        },
        // 后台返回的数据
        apiQueryRow: [
          // "extendInfoId",
          // "smallAreaName",
          // "cityName",
          // "provinceName",
          // "dlrId",
          // "dlrCode",
          // "dlrShortName",
          // "dlrStatus",
          // "dlrStatusName",
          // "repairQuotiety",
          // "preQuotiety",
          // "mtainQuotiety",
          // "limitJe",
          // "squotiety1",
          // "squotiety2",
          // "modifyName",
          // "remark",
          // "lastUpdatedDate",
          // "modifydateRef",
          // "remarkRef",
          // "updateControlId"
        ]
      },
      // mix-buttons 的配置
      isShow: false,
      btns: [
        {
          name: "add",
          text: "新增",
          clickEvent: "openSPInfo",
          position: "left",
          // argument: { type: "ADD" }
        },
        {
          name: "import",
          text: "导入",
          clickEvent: "import",
          position: "left"
        },
        {
          name: "search",
          text: "查询",
          clickEvent: "fetchData",
          position: "right"
        },
        {
          name: "reset",
          text: "重置",
          clickEvent: "resetData",
          position: "right"
        }
      ],
      bounce: false,
      // btns: {
      //   left: [
      //     { name: "search", label: "查询", event: "fetchData",isMust:false },
      //     // {
      //     //   name: "change",
      //     //   label: "修改",
      //     //   event: "changeData"
      //     // },
      //     {
      //       name: "changeTogether",
      //       label: "结算系数批量修改",
      //       event: "changeTogether",isMust:false
      //     }
      //   ],
      //   right: [
      //     {
      //       name: "importModule",
      //       type: "text",
      //       label: "导入模板",
      //       event: "importModule",isMust:false
      //     },
      //     { name: "import", label: "导入", event: "import",isMust:false },
      //     //   { name: "export", label: "导出", event: "export" },
      //     { name: "reset", label: "重置", event: "resetData",isMust:false }
      //   ]
      // },
      // 结算系数批量修改
      dialogParamVisible: false,
      isShowSeExtendsInfoAndserveDialog: false
    };
  },
  methods: {
    //子组件触发关闭closeDLG
    closeDLG() {
      this.dialogParamVisible = false;
    },
    // 点击查询按钮
    // queryWebList() {

    //   this.refs.webListResult.queryList()
    //   // mdmOrgDlrExtendInfoQueryList(10, 1, this.agencyFromFlitCancelData);
    //   console.log(11);
    // },
    // 点击行
    hanldeClickRow() {
      console.log(22);
    },
    // 高级搜索
    togger() {
      this.$refs["fromFlitCancel"].changeToggleParam();
    },
    // 查询,调用api
    fetchData() {
      this.$refs.webListResult.queryList();

      // mdmOrgDlrExtendInfoQueryList();
      console.log(" 查询,调用api");
    },
    // 修改
    changeData(str) {
      // console.log(this.$refs.webListResult.currentRow);
      // console.log(str);
      console.log(str);
      this.currentRowData = str;
      this.isShowSeExtendsInfoAndserveDialog = true;

      // 修改,把当前行的数据保存并传给子会话框
    },
    changeData2(str) {
      // console.log(this.$refs.webListResult.currentRow);
      // console.log(str);
      // let a = typeof str === "object" ? true : str;
      this.isShowSeExtendsInfoAndserveDialog = false;
      // if(typeof str === "object"){
      //   // 修改,把当前行的数据保存并传给子会话框
      // this.currentRowData=this.$refs.webListResult.currentRow
      // }
    },
    // 结算系数批量修改
    changeTogether() {
      this.dialogParamVisible = true;
      console.log("结算系数批量修改");
    },
    //输出模板
    importModule() {
      console.log(" 输出模板");
    },
    // 导入
    import() {
      console.log(" 导入");
    },
    // 重置
    resetData() {
      this.agencyFromFlitCancelData.dlrCode = "";
      this.agencyFromFlitCancelData.dlrShortName = "";
      this.agencyFromFlitCancelData.smallAreaId = "";
      this.agencyFromFlitCancelData.provinceId = "";
      this.agencyFromFlitCancelData.lastUpdatedDateStart = "";
      this.agencyFromFlitCancelData.lastUpdatedDateEnd = "";
      this.agencyFromFlitCancelData.dlrStatus = "";
      this.agencyFromFlitCancelData.modifydateRefStart = "";
      this.agencyFromFlitCancelData.modifydateRefEnd = "";
      console.log(" 重置");
    },
    // 关闭结算系数批量维护
    closeDialog() {
      console.log(1);
    }
  }
};
</script>
