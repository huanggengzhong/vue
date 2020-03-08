
/*
 * @Author: zouzx
 * @Date: 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-10-24 16:53:12
 */

<template>
  <div class="app-container app-container-table ">
    <el-steps :active="active" finish-status="success">
      <el-step title="建单"></el-step>
      <el-step title="派单"></el-step>
      <el-step title="处理"></el-step>
      <el-step title="回访"></el-step>
      <el-step title="结案"></el-step>
    </el-steps>

    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="editPer filter-params-crm-scroll crm-s-scroll edit">

      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
      </div>

      <div class="filter-container-crm filter-title-crm">{{infoComponents[1].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[3].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[4].tableComponents" :values="formField" />
        <el-table :data="tabledatas1.tableData" highlight-current-row style="width: 100%;height:355px;overflow:auto" v-loading.body="false" element-loading-text="Loading" border fit>
          <el-table-column type="index" label="序号" width="55"></el-table-column>
          <el-table-column v-for="item in tabledatas1.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
        </el-table>

      </div>

      <div class="filter-container-crm filter-title-crm">{{infoComponents[5].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[5].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[6].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[6].tableComponents" :values="formField" />
      </div>

      <edit :dynamicEditRowData="editRowData" :popupsVisible="editPopupsVisible" :key="editPopupsKey" :popupsState="editPopupsState" @close="close"></edit>
      <el-table :data="tabledatas.tableData" highlight-current-row style="width: 100%;height:355px;overflow:auto" v-loading.body="false" element-loading-text="Loading" border fit>
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
  name: "rescueHand",
  components: {
    crmGroupForm,
    crmGroupSubmit,
    edit
  },
  data() {
    return {
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
            // 非值列表  需处理
            {
              compKey: "compKey2",
              labelName: "性别",
              codeField: "genderName", //genderCode
              isMust: true,
              disabled: true,
              isMul: false,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            //
            {
              compKey: "compKey3",
              labelName: "电话",
              codeField: "phone",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 下面这个字段没有，拿上面的字段
            {
              compKey: "compKey4",
              labelName: "备用电话",
              codeField: "phone",
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
              lookuptype: "DB0022",
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
              codeField: "seCarSeriesName",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey10",
              labelName: "车牌号",
              codeField: "carLicenseNo",
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
              codeField: "carBrandName",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey14",
              labelName: "车型",
              codeField: "seCarTypeName",
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
              labelName: "救援日期",
              codeField: "createdDate",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            // 弹窗
            {
              compKey: "compKey17",
              labelName: "救援类型",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "是否电话排障",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled: false,
              lookuptype: "LX077",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            // 弹窗需修改
            {
              compKey: "compKey19",
              labelName: "期望到达时间",
              codeField: "nextDealEmpName",
              isMust: true,
              isRequire: false,
              disabled: false,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey20",
              labelName: "所在地标志物",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey21",
              labelName: "救援地点",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled: false,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey22",
              labelName: "救援车牌",
              codeField: "distRemark",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 弹窗
            {
              compKey: "compKey23",
              labelName: "救援车系",
              codeField: "remark",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 弹窗
            {
              compKey: "compKey24",
              labelName: "救援车型",
              codeField: "distRemark",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            // 弹窗
            {
              compKey: "compKey25",
              labelName: "责任网点",
              codeField: "remark",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey26",
              labelName: "责任人",
              codeField: "remark",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey27",
              labelName: "责任人电话",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey28",
              labelName: "故障描述",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: false,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey29",
              labelName: "客户要求",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: false,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey30",
              labelName: "坐席回答",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: false,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey31",
              labelName: "派工说明",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: false,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "回访信息",
          tableComponents: [
            // 精确到时分秒
            {
              compKey: "compKey32",
              labelName: "回访时间",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey33",
              labelName: "下次回访时间",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: false,
              isRequire: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey34",
              labelName: "回访次数",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey35",
              labelName: "接触状态",
              codeField: "",
              isRequire: true,
              isMust: true,
              disabled: false,
              lookuptype: "LX077",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey36",
              labelName: "回访内容",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: false,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey38",
              labelName: "意见反馈",
              codeField: "nextDealEmpName",
              isMust: true,
              disabled: false,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "过往记录",
          tableComponents: []
        }
      ],
      formSubmitButton: [
        {
          compKey: "buttonKey1",
          text: "驳回",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        },
        {
          compKey: "buttonKey2",
          text: "进度反馈",
          size: "small",
          type: "",
          clickEvent: () => this.editInfo(),
          isShow: true
        },
        {
          compKey: "buttonKey1",
          text: "结案",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        },
        {
          compKey: "buttonKey2",
          text: "问卷",
          size: "small",
          type: "primary",
          clickEvent: () => this.editInfo(),
          isShow: true
        }
      ],
      // 没API，tabledatas里面的字段需要替换
      tabledatas: {
        // 操作列
        colnames: [
          { label: "回访单号", value: "applyTime" },
          { label: "来源单号", value: "delayReson" },
          { label: "来源单据类型", value: "shPersonName" },
          { label: "联系电话", value: "delayStatus" },
          { label: "接触状态", value: "shDes" },
          { label: "备注", value: "shTimie" },
          { label: "建单时间", value: "shDes" },
          { label: "回访内容", value: "shTimie" },
          { label: "计划拜访时间", value: "shTimie" }
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
      // 没API，tabledatas里面的字段需要替换
      tabledatas1: {
        // 操作列
        colnames: [
          { label: "日期", value: "applyTime" },
          { label: "摘要", value: "delayReson" },
          { label: "客户要求", value: "shPersonName" },
          { label: "救援内容", value: "delayStatus" },
          { label: "坐席反馈", value: "shDes" },
          { label: "附件", value: "shTimie" }
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
  mounted: function() {
    this.$nextTick(function() {
      this.initData(this.$route.params.serverOrder);
    });
    this.$nextTick(() => {
      this.initdata();
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
  }
};
</script>
<style scoped>
.choosefile {
  float: left;
  text-align: left;
}
</style>
