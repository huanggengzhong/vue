<!--
* 创建人: zxuan
* 创建时间: 2019-08-3
* 记录：
* modify:xgz 2019年10月22日09:59:21
-->
<template>
  <div class="app-container app-container-table">
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="editPer filter-params-crm-scroll crm-s-scroll edit">

      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
      </div>

      <div class="filter-container-crm filter-title-crm">{{infoComponents[1].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
      </div>

      <div class="filter-container-crm filter-title-crm">{{infoComponents[2].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
      </div>

      <div class="filter-container-crm filter-title-crm">{{infoComponents[3].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[3].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[4].tableComponents" :values="formField" />
      </div>

      <edit :dynamicEditRowData="editRowData" :popupsVisible="editPopupsVisible" :key="editPopupsKey" :popupsState="editPopupsState" @close="close"></edit>
      <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:60px;overflow:auto" v-loading.body="false" element-loading-text="Loading" border fit>
        <el-table-column type="index" label="序号" width="55"></el-table-column>
        <el-table-column v-for="item in tabledatas.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
      </el-table>
    </el-form>
  </div>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import crmGroupSubmit from "@/components/crm/commonComponents/crmGroupSubmit";
import edit from "@/views/crm/cu/CustInfo/keyInfo";
export default {
  name: "editPer",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    crmGroupForm,
    crmGroupSubmit,
    edit
  },
  data() {
    return {
      checkReason: "", //审核原因
      keyInfo: false,
      ismore: false,
      ismutiple: false,
      action: "", //证件上传地址
      accepttype:
        ".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF", //上传文件类型
      text1: "选择文件",
      limit: 1,
      showedit: false,
      params: {},
      nagflag: true,
      posflag: false,
      flag: true,
      editPopupsKey: "",
      editPopupsState: "",
      editPopupsVisible: false,
      infoComponents: [
        {
          title: "客户车辆信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "性别",
              codeField: "genderName", //genderCode
              isMust: true,
              disabled: true,
              isMul: false,
              lookuptype: "",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            //
            {
              compKey: "compKey3",
              labelName: "电话",
              codeField: "contactTel",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 下面这个字段没有，拿上面的字段
            {
              compKey: "compKey4",
              labelName: "备用电话",
              codeField: "backupTel",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "客户名称",
              codeField: "useCustName",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 非值列表  需处理
            {
              compKey: "compKey6",
              labelName: "性别",
              codeField: "useGenderName", //genderCode
              isMul: false,
              isMust: true,
              disabled: true,
              lookuptype: "",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey7",
              labelName: "用车人电话",
              codeField: "usePhone",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey8",
              labelName: "备用电话",
              codeField: "useBackupTel",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "车系",
              codeField: "vCarseriesDesc",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey10",
              labelName: "车牌号",
              codeField: "carLicense",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey11",
              labelName: "VIN码",
              codeField: "vin",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey12",
              labelName: "发动机号",
              codeField: "engineNo",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "车辆品牌",
              codeField: "carBrandCn",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey14",
              labelName: "车型",
              codeField: "vCartypeDesc",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "单据信息",
          tableComponents: [
            {
              compKey: "compKey15",
              labelName: "服务单号",
              codeField: "serverOrder",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey16",
              labelName: "投诉日期",
              codeField: "createdDate",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            // 费值列表
            {
              compKey: "compKey17",
              labelName: "投诉途径",
              codeField: "serverSourceName", //genderCode
              isRequire: false,
              isMust: true,
              disabled: true,
              isMul: false,
              lookuptype: "",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },

            {
              compKey: "compKey18",
              labelName: "投诉次数",
              codeField: "addQty",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 弹窗，需修改
            {
              compKey: "compKey19",
              labelName: "来源单号",
              codeField: "linkBillCode",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey20",
              labelName: "故障日期",
              codeField: "faultDate",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey21",
              labelName: "故障里程",
              codeField: "faultMileage",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey22",
              labelName: "行驶里程",
              codeField: "mileage",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 弹窗需修改
            {
              compKey: "compKey23",
              labelName: "投诉类别",
              codeField: "serverFullClassName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 弹窗需修改
            {
              compKey: "compKey24",
              labelName: "相关基准车系",
              codeField: "baseSeriesName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            //飞致列别 ,APi缺字段
            {
              compKey: "compKey25",
              labelName: "投诉级别",
              codeField: "serverLevelName",
              isMust: true,
              disabled: true,
              isMul: false,
              lookuptype: "",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            // 费值列表，
            {
              compKey: "compKey26",
              labelName: "是否紧急",
              codeField: "serverUrgencyName",
              isMust: true,
              disabled: true,
              isMul: false,
              lookuptype: "",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            // 弹窗需修改
            {
              compKey: "compKey27",
              labelName: "责任网点",
              codeField: "dutyDlrName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 弹窗需修改
            {
              compKey: "compKey28",
              labelName: "责任部门",
              codeField: "nextDealOrgName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 弹窗需修改
            {
              compKey: "compKey29",
              labelName: "责任人",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey30",
              labelName: "责任人电话",
              codeField: "nextDealPhone",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey31",
              labelName: "派工说明",
              codeField: "distRemark",
              isRequire: false,
              isMust: true,
              disabled: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey32",
              labelName: "备注",
              codeField: "remark",
              isRequire: false,
              isMust: true,
              disabled: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "延期申请信息",
          tableComponents: [
            {
              compKey: "compKey33",
              labelName: "申请延期时间",
              codeField: "applyTime",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey35",
              labelName: "申请延期原因",
              codeField: "delayReson",
              disabled: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "审核信息",
          tableComponents: [
            {
              compKey: "compKey34",
              labelName: "延期审核时间",
              codeField: "faultDate",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey36",
              labelName: "审核意见",
              codeField: "shDes",
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey14",
              labelName: "导入",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            }
          ]
        }
      ],
      formSubmitButton: [
        {
          compKey: "buttonKey1",
          text: "同意",
          size: "small",
          type: "",
          clickEvent: () => this.delayCheck(1),
          isShow: true
        },
        {
          compKey: "buttonKey2",
          text: "驳回",
          size: "small",
          type: "",
          clickEvent: () => this.delayCheck(1),
          isShow: true
        }
      ],

      tabledatas: {
        // 操作列
        colnames: [
          { label: "申请时间", value: "applyTime" },
          { label: "申请原因", value: "delayReson" },
          { label: "审核人", value: "shPersonName" },
          { label: "审核状态", value: "delayStatus" },
          { label: "审核意见", value: "shDes" },
          { label: "审核时间", value: "shTimie" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csBuComplaintDelayQueryFindAll,
          apiQueryRow: [
            "applyTime",
            "delayReson",
            "shPersonName",
            "delayStatus",
            "shDes",
            "shTimie"
          ],
          params: {
            oemCode: "1",
            groupCode: "1",
            serverOrder: this.$route.params.serverOrder
          }
        },
        pagesize: 10,
        pageindex: 1
      },
      formField: {
        custName: "",
        genderName: "",
        contactTel: "",
        backupTel: "",

        useCustName: "",
        useGenderName: "",
        usePhone: "",
        useBackupTel: "",

        vCarseriesDesc: "",
        carLicense: "",
        vin: "",
        engineNo: "",
        carBrandCn: "",
        vCartypeDesc: "",

        serverOrder: "",
        createdDate: "",
        serverSourceName: "",
        addQty: "",

        linkBillCode: "",
        faultDate: "",
        faultMileage: "",
        mileage: "",

        serverFullClassName: "",
        baseSeriesName: "",
        serverLevelName: "",
        serverUrgencyName: "",

        dutyDlrName: "",
        nextDealOrgName: "",
        nextDealEmpName: "",
        nextDealPhone: "",

        distRemark: "",
        remark: "",

        applyTime: "", //申请延期时间API没字段
        // xx2: "", //延期审核时间
        delayReson: "", //申请延期原因,从上级页面带过来

        shDes: "" //审核意见
      }
    };
  },
  mounted() {
    let serverOrderLink = this.$route.params.serverOrder; //服务单号
    let applyDelayReasonLink = this.$route.params.delayReson; //申请延期原因
    let applyTimeLink = this.$route.params.applyTime; //延期申请时间
    this.$nextTick(() => {
      this.initData(serverOrderLink, applyDelayReasonLink, applyTimeLink);
      this.initCheckGrid(); //最下面网格
    });
  },
  methods: {
    // 延期审核初始化
    initData: function(serverOrderLink, applyDelayReasonLink, applyTimeLink) {
      let that = this;
      that.formField.delayReson = applyDelayReasonLink; //文本框赋值
      that.formField.applyTime = applyTimeLink;
      let queryObj = {
        // api配置
        apiConfig: crmApis.csBuComplaintOrderQueryFindAll,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              // 单据信息
              "serverOrder",
              "createdDate",
              "serverSourceName",
              "addQty",
              "linkBillCode",

              "faultDate",
              "faultMileage",
              "mileage",

              "serverFullClassName",
              "baseSeriesName",
              "serverLevelName",
              "serverUrgencyName",

              "dutyDlrName",
              "nextDealOrgName",
              "nextDealEmpName",
              "nextDealPhone",

              "distRemark",
              "remark",
              // 客户信息
              "custName",
              "genderName",
              "contactTel",
              "backupTel",

              "vCarseriesDesc",
              "carLicense",
              "vin",
              "engineNo",
              "carBrandCn",
              "vCartypeDesc",

              "useCustName",
              "useGenderName",
              "usePhone",
              "useBackupTel"
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            oemCode: "1",
            groupCode: "1",
            serverOrder: serverOrderLink //带单号查询
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          for (let key in that.formField) {
            if (results.hasOwnProperty(key)) {
              that.formField[key] = results[key];
            }
          }
        }
      });
    },

    //延期审核（1通过，-1驳回）
    delayCheck: function(resultFlag) {
      if (resultFlag == 1) {
        let that = this;
        debugger;
        let flag = false;
        let resultFlagValue = resultFlag.toString();
        let delayIdLink = this.$route.params.delayId;
        debugger;
        that.checkReason = that.formField.shDes;
        

        let queryObj = {
          // api配置
          type: "mutation",
          apiConfig: crmApis.complaintDelaySHSave, //客户信息-修改
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              oemCode: "1",
              groupCode: "1",
              shDes: that.checkReason,
              delayStatus: resultFlagValue,
              delayId: delayIdLink
            }
          }
        };

        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1"
            // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            that.$crmcf.showMessages(that, "success", "保存成功！");
            that.$crmcf.crmcloseView(that);
          } else {
            that.$crmcf.showMessages(
              that,
              "error",
              response.data[queryObj.apiConfig.ServiceCode].msg
            );
          }
        });
      } else if (resultFlag == -1) {
        console.log(resultFlag);
        let that = this;
        let flag = false;
        let resultFlagValue = resultFlag.toString();
        let delayIdLink = this.$route.params.delayId;

        let queryObj = {
          // api配置
          type: "mutation",
          apiConfig: crmApis.complaintDelaySHSave, //客户信息-修改
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.tabledata.pagesize,
            pageIndex: that.tabledata.pageindex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              oemCode: "1",
              groupCode: "1",
              shDes: that.$refs.dealwithResultMainRef.input,
              delayStatus: resultFlagValue,
              delayId: delayIdLink
            }
          }
        };
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (
            response.data[queryObj.apiConfig.ServiceCode].result == "1"
            // &&response.data[queryObj.apiConfig.ServiceCode].rows != ""
          ) {
            that.$crmcf.showMessages(that, "success", "保存成功！");
            that.$crmcf.crmcloseView(that);
          } else {
            that.$crmcf.showMessages(
              that,
              "error",
              response.data[queryObj.apiConfig.ServiceCode].msg
            );
          }
        });
      } else {
        return;
      }
    },

    //审核信息网格初始化
    initCheckGrid: function() {
      let that = this;
      debugger;
      console.log(this.$route.params.serverOrder);
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
        } else {
          this.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    }
  }
};
</script>
<style scoped>
.choosefile {
  float: left;
  text-align: left;
}
</style>

