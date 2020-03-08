<!--
* description: 个人客户视图
* author: dxuem
* createdDate: 2019-10-23
-->
<template>
  <div class="app-container app-container-table">
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="editPer filter-params-crm-scroll crm-s-scroll edit" disabled>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[2].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="infoComponents[3].tableButtons"
          :dynamicTableCols="infoComponents[3].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="true"
          :dynamicApiConfig="infoComponents[3].apiConfig"
          :dynamicFormFields="infoComponents[3].formField"
        />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[4].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="infoComponents[4].tableButtons"
          :dynamicTableCols="infoComponents[4].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="true"
          :dynamicApiConfig="infoComponents[4].apiConfig"
          :dynamicFormFields="infoComponents[4].formField"
        />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[5].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="infoComponents[5].tableButtons"
          :dynamicTableCols="infoComponents[5].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="true"
          :dynamicApiConfig="infoComponents[5].apiConfig"
          :dynamicFormFields="infoComponents[5].formField"
        />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[6].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[6].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[7].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[7].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[8].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[9].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[10].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="infoComponents[10].tableButtons"
          :dynamicTableCols="infoComponents[10].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="true"
          :dynamicApiConfig="infoComponents[10].apiConfig"
          :dynamicFormFields="infoComponents[10].formField"
        />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[11].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[11].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[12].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[13].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="infoComponents[13].tableButtons"
          :dynamicTableCols="infoComponents[13].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="true"
          :dynamicApiConfig="infoComponents[13].apiConfig"
          :dynamicFormFields="infoComponents[13].formField"
        />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[14].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="infoComponents[14].tableButtons"
          :dynamicTableCols="infoComponents[14].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="true"
          :dynamicApiConfig="infoComponents[14].apiConfig"
          :dynamicFormFields="infoComponents[14].formField"
        />
      </div>
      <edit
        :dynamicEditRowData="editRowData"
        :popupsVisible="editPopupsVisible"
        :key="editPopupsKey"
        :popupsState="editPopupsState"
        @close="close"
      ></edit>
    </el-form>
  </div>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import crmGroupSubmit from "@/components/crm/commonComponents/crmGroupSubmit";
import OneTableTemplate from "@/components/crm/table/crmOnetable";
import edit from "@/views/crm/cu/CustInfo/keyInfo";
export default {
  name: "editPer",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    crmGroupForm,
    crmGroupSubmit,
    edit,
    OneTableTemplate
  },
  props: {},
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
        // 客户信息  0
        {
          title: "客户信息-个人",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "UID",
              codeField: "uid",
              code: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "性别",
              codeField: "genderCode",
              isMul: false,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey4",
              labelName: "出生日期",
              codeField: "birthDate",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey9",
              labelName: "民族",
              codeField: "nationCode",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0026",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey12",
              labelName: "证件类型",
              codeField: "credTypeCode",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "证件号码",
              codeField: "credNo",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "建档来源",
              codeField: "",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey9",
              labelName: "建档日期",
              codeField: "",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey5",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey6",
              labelName: "城市",
              codeField: "cityId",
              textField: "addrCity",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCityQueryFindAll,
              changeCodeArray: [
                { provinceId: this.formField ? this.formField.provinceId : "" }
              ],
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/secondDropList")
            },
            {
              compKey: "compKey7",
              labelName: "区县",
              codeField: "countyId",
              textField: "addrCounty",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey17",
              labelName: "详细地址",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 1
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey14",
              labelName: "证件照1",
              codeField: "photo1",
              isMust: true,
              url: "src/images/img01.jpg",
              component: () => import("@/views/crm/cu/CustInfo/img")
            },
            {
              compKey: "compKey15",
              labelName: "证件照2",
              codeField: "photo2",
              url: "public/img/1.jpeg",
              isMust: true,
              component: () => import("@/views/crm/cu/CustInfo/img")
            },
            {
              compKey: "compKey16",
              labelName: "证件照3",
              codeField: "photo3",
              url: "public/img/1.jpeg",
              isMust: true,
              component: () => import("@/views/crm/cu/CustInfo/img")
            }
          ]
        },
        // 联系信息  2
        {
          title: "联系信息",
          tableComponents: [
            {
              compKey: "compKey18",
              labelName: "电话",
              codeField: "phone",
              isRequire: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey19",
              labelName: "备用电话",
              codeField: "backupPhone",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey20",
              labelName: "家庭电话",
              codeField: "homeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey21",
              labelName: "办公电话",
              codeField: "officeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey22",
              labelName: "QQ号",
              codeField: "qq",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey23",
              labelName: "微信号",
              codeField: "webchat",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey24",
              labelName: "邮政编码",
              codeField: "zip",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey24",
              labelName: "电子邮箱",
              codeField: "email",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey14",
              labelName: "银行卡号",
              codeField: "bankCardNo",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey16",
              labelName: "开户行",
              codeField: "bankCode",
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey25",
              labelName: "方便联系场所",
              codeField: "convLocaleCode",//缺字段
              isMul: false,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey25",
              labelName: "方便联系时段",
              codeField: "convTimeCode",
              isMul: false,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey26",
              labelName: "首选联系方式",
              codeField: "contactTypeCode",
              isMul: false,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        // 3
        {
          apiConfig: crmApis.clueServerQueryFromDlr, //线索单查询
          formField: {
            dlrCustNo:this.$route.params.dlrCustNo
          },
          tableCols: [
            {
              prop: "relationTypeName",
              label: "类别",
              width: null,
              align: "center"
            },
            {
              prop: "custRelationName",
              label: "关系描述",
              width: null,
              align: "center"
            },
            {
              prop: "custName",
              label: "姓名",
              width: null,
              align: "center"
            },
            {
              prop: "genderName",
              label: "性别",
              width: null,
              align: "center"
            },
            {
              prop: "phone",
              label: "联系电话",
              width: null,
              align: "center"
            },
            {
              prop: "addr",
              label: "地址",
              width: null,
              align: "center"
            }
          ]
        },
        // 车辆关系  4
        {
          title: "车辆关系",
          apiConfig: crmApis.CustViewCustCarListQueryFindAll, //线索单查询
          formField: {
            dlrCustNo:this.$route.params.dlrCustNo
          },
          tableCols: [
            {
              prop: "vin",
              label: "VIN",
              width: null,
              align: "center"
            },
            {
              prop: "carLicenseNo",
              label: "车牌号",
              width: null,
              align: "center"
            },
            {
              prop: "carSeriesName",
              label: "车系",
              width: null,
              align: "center"
            },
            {
              prop: "carTypeName",
              label: "车型",
              width: null,
              align: "center"
            },
            {
              prop: "relationTypeName",
              label: "关系",
              width: null,
              align: "center"
            },
            {
              prop: "saleDate",
              label: "购车时间",
              width: null,
              align: "center"
            },
            {
              prop: "bindDate",
              label: "绑定时间",
              width: null,
              align: "center"
            }
          ]
        },
        // 订单记录  5  缺api
        {
          title: "订单记录",
          apiConfig: crmApis.clueServerQueryFromDlr, //线索单查询
          formField: {
            statusArray: ["10", "20", "21", "30", "31", "40", "50"],
            handleCode: "1"
          },
          tableCols: [
            {
              prop: "clueCode",
              label: "订单类型",
              width: null,
              align: "center"
            },
            {
              prop: "clueLevelCode",
              label: "订单编号",
              width: null,
              align: "center"
            },
            {
              prop: "nextDealUserName",
              label: "产品编号",
              width: null,
              align: "center"
            },
            {
              prop: "custName",
              label: "产品名称",
              width: null,
              align: "center"
            },
            {
              prop: "contactTel",
              label: "订单金额",
              width: null,
              align: "center"
            },
            {
              prop: "carSeriesCn",
              label: "订单时间",
              width: null,
              align: "center"
            },
            {
              prop: "carSeriesCn",
              label: "备注",
              width: null,
              align: "center"
            }
          ]
        },
        // 获客渠道  6
        {
          title: "获客渠道",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "接触方式",
              codeField: "cantactWayCode",
              textField: "cantactWayName",
              lookuptype: "DB0022",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "渠道大类",
              codeField: "infoChanMCode",
              textField: "infoChanMName",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "渠道小类",
              codeField: "infoChanDCode",
              textField: "infoChanDName",
              isMul: false,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        // 客户画像  7
        {
          title: "客户画像",
          tableComponents: [
            {
              compKey: "compKey4",
              labelName: "学历",
              codeField: "birthDate",
              isRequire: false,
              isMust: true,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey9",
              labelName: "行业",
              codeField: "nationCode",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0026",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey12",
              labelName: "公司全称",
              codeField: "credTypeCode",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "职务",
              codeField: "credNo",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "婚姻状况",
              codeField: "",
              isRequire: false,
              lookuptype: "DB0022",
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey9",
              labelName: "是否有子女",
              codeField: "",
              lookuptype: "DB0022",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey5",
              labelName: "家庭年收入",
              codeField: "provinceId",
              textField: "addrProvince",
              lookuptype: "DB0022",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey6",
              labelName: "已有车型",
              codeField: "cityId",
              textField: "addrCity",
              lookuptype: "DB0022",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey7",
              labelName: "车辆拥有时间",
              codeField: "countyId",
              textField: "addrCounty",
              lookuptype: "DB0022",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "是否有驾驶证",
              codeField: "addrStreet",
              lookuptype: "DB0022",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "驾照类型",
              codeField: "addrStreet",
              lookuptype: "DB0022",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "驾龄",
              codeField: "addrStreet",
              lookuptype: "DB0042",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "是否网点VIP",
              codeField: "addrStreet",
              lookuptype: "",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "VIP等级",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "购车方式",
              codeField: "addrStreet",
              lookuptype: "LX190",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "意向车型", //弹窗
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "意向价格",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "意向外观颜色",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "意向内饰色",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "关注点",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "上牌指标",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        //  8
        {
          tableComponents: [
            {
              compKey: "compKey28",
              labelName: "客户标签",
              interest: "interest",
              codeField: "interest",
              isMul: false,
              component: () => import("@/views/crm/cu/CustInfo/tags")
            }
          ]
        },
        // 9
        {
          tableComponents: [
            {
              compKey: "compKey28",
              labelName: "兴趣爱好",
              interest: "interest",
              codeField: "interest",
              isMul: false,
              component: () => import("@/views/crm/cu/CustInfo/interest")
            }
          ]
        },
        // 预约记录  9
        {
          title: "预约记录",
          apiConfig: crmApis.clueServerQueryFromDlr, //线索单查询
          formField: {
            dlrCustNo:this.$route.params.dlrCustNo
          },
          tableCols: [
            {
              prop: "reserveOrderCode",
              label: "预约单号",
              width: null,
              align: "center"
            },
            {
              prop: "reserveSource",
              label: "预约来源",
              width: null,
              align: "center"
            },
            {
              prop: "createdDate",
              label: "预约时间",
              width: null,
              align: "center"
            },
            {
              prop: "dlrShortName",
              label: "预约网点",
              width: null,
              align: "center"
            },
            {
              prop: "reserveStateName",
              label: "预约状态",
              width: null,
              align: "center"
            },
            {
              prop: "factComeDate",
              label: "回厂时间",
              width: null,
              align: "center"
            }
          ]
        },
        // 客户忠诚度  10
        {
          title: "客户忠诚度",
          tableComponents: [
            {
              compKey: "compKey4",
              labelName: "购车台次",
              codeField: "buyCarNum",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "订单金额",
              codeField: "saleOrderMoney",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0026",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey12",
              labelName: "精品销售",
              codeField: "accSaleMoney",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 11
        {
          tableComponents: [
            {
              compKey: "compKey13",
              labelName: "累计回厂台次",
              codeField: "totalBackNum",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "近半年回厂台次",
              codeField: "halfYearBackNum",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "回厂消费金额",
              codeField: "backMoney",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "备件销售",
              codeField: "partSaleMoney",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 客户出触点记录  12
        {
          title: "客户触点记录",
          apiConfig: crmApis.custViewTouchQueryFindAll, //客户触点记录
          formField: {
            statusArray: ["10", "20", "21", "30", "31", "40", "50"],
            handleCode: "1"
          },
          tableCols: [
            {
              prop: "serverTypeName",
              label: "工单类型",
              width: null,
              align: "center"
            },
            {
              prop: "clueLevelCode",
              label: "服务请求时间",
              width: null,
              align: "center"
            },
            {
              prop: "serverOrder",
              label: "单号",
              width: null,
              align: "center"
            },
            {
              prop: "sourceSys",
              label: "来源系统",
              width: null,
              align: "center"
            },
            {
              prop: "contents",
              label: "内容",
              width: null,
              align: "center"
            },
            {
              prop: "status",
              label: "状态",
              width: null,
              align: "center"
            },
            {
              prop: "remark",
              label: "备注",
              width: null,
              align: "center"
            }
          ]
        },
        // 客户资料修改日志  13  缺api
        {
          title: "客户资料修改日志",
          apiConfig: crmApis.clueServerQueryFromDlr, //线索单查询
          formField: {
            statusArray: ["10", "20", "21", "30", "31", "40", "50"],
            handleCode: "1"
          },
          tableCols: [
            {
              prop: "clueCode",
              label: "时间",
              width: null,
              align: "center"
            },
            {
              prop: "clueLevelCode",
              label: "变更类型",
              width: null,
              align: "center"
            },
            {
              prop: "nextDealUserName",
              label: "变更内容",
              width: null,
              align: "center"
            },
            {
              prop: "custName",
              label: "来源系统",
              width: null,
              align: "center"
            }
          ]
        }
      ],
      isdisplay: {
        ismuti: false
      },
      credit: false,
      // 保存API配置对象
      formSubmitButton: [],
      // 标题
      textMap: {
        edit: "个人客户视图",
        add: "个人客户视图"
      },
      formField: {
        uid: "",
        custName: "",
        custFullName: "",
        genderCode: "",
        birthDate: "",
        provinceId: "",
        cityId: "",
        countyId: "",
        nationCode: "",
        // jobCode: "",
        bankCardNo: "",
        bankCode: "",
        credTypeCode: "",
        credNo: "",
        addrStreet: "",
        phone: "",
        backupPhone: "",
        homeTel: "",
        officeTel: "",
        qq: "",
        webchat: "",
        email: "",
        convTimeCode: "",
        contactTypeCode: "",
        familyIncomeCode: "",
        degreeCode: "",
        isVip: "",
        // focuseNameList: "",
        // custPropertyName: "",
        marriagedCode: "",
        isHaveChild: "",
        custNo: "",
        dlrCustNo: "",
        convLocaleCode: "", //最佳联系场所
        tradeCode: ""
        // interestsNameList: ""
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initdata();
    });
  },
  methods: {
    manage() {
      this.credit = true;
    },
    // 关键信息修改
    editInfo(type) {
      this.editPopupsState = type;
      this.editPopupsVisible = true;
      this.editPopupsKey = this.$utils.generateId();
    },
    // 查询
    query(api, row, params) {
      let that = this;
      let queryObj = {
        type: "query",
        apiConfig: api,
        apiServices: [
          {
            apiQueryRow: row
          }
        ],
        variables: {
          dataInfo: params
        }
      };
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          let results = response.data[queryObj.apiConfig.ServiceCode].rows[0];
          for (let key in this.formField) {
            if (results.hasOwnProperty(key)) {
              this.formField[key] = results[key];
            }
          }
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
        }
      });
    },
    initdata() {
      debugger;
      if (this.$route.params.status == "edit") {
        let params = {};
        // params.custNo = this.$route.params.custNo;
        params.dlrCustNo = this.$route.params.dlrCustNo;
        // 基本信息
        let formField1 = [
          "uid",
          "custName",
          // "custFullName",
          "genderCode",
          "birthDate",
          "provinceId",
          "cityId",
          "countyId",
          "nationCode",
          // "bankCardNo",
          // "bankCode",
          "credTypeCode",
          "credNo",
          "addrStreet"
        ];
        this.query(crmApis.custViewCustBaseInfoQuery, formField1, params);
        // 联系信息
        let formField2 = [
          "phonee",
          "backupPhone",
          "homeTel",
          "officeTel",
          "qq",
          "openId",
          "email",
          "convTimeCode",
          "convTimeName",
          "contactTypeCode",
          "contactTypeName"
        ];
        this.query(
          crmApis.custViewContactWayQueryFindAll,
          formField2,
          params
        );
        // 客户画像&获客渠道
        let formField3 = [
          // "incomeCode",
          // "incomeName",
          // "driverTimeCode",
          // "driverTimeName",
          "educationCode",
          "educationName",
          "custPropertyName",//客户属性
          "custPropertyCode",
          // "maritalStatusName",
          "isHaveChild",
          // "custNo",
          // "dlrCustNo",
          // "convLocaleCode", //最佳联系场所
          // "tradeCode",
          // "tradeName",
          "job",//职务
          "haveCarTimeCode",
          "haveCarTimeName",
          "haveCarTypeCode",
          "haveCarTypeName",
          // "inteSeriesCode",
          // "carSeriesCn",
          // "custFocus",
          "isVip",
          "focuseCodeList",
          "focuseNameList",
          "interestCarSeriesCn",
          "interestCarSeriesCode",
          "interestsCodeList",
          "interestsNameList",
          // "isVipName",
          // "vipLevel",
          // "vipLevelName",
          // "isHaveCarnum",
          // "isHaveCarnumName",
          // "interestsNameList"
        ];
        this.query(
          crmApis.custViewCustChannelImageQueryFindAll,
          formField3,
          params
        );
        // 客户忠诚度 
        let formField4 = [
          "buyCarNum",
          "saleOrderNum",
          "saleOrderMoney",
          "accSaleMoney",
          "totalBackNum",
          "halfYearBackNum",
          "backMoney",
          "partSaleMoney"
        ];
        this.query(
          crmApis.custViewCustLevelQueryFindAll,
          formField4,
          params
        );
      }
    },
    edit(inde, row) {
      this.showedit = true;
    },
    // 联动
    prochange(val) {
      let that = this;
      that.City.pcode = val;
      if (that.$refs.city == undefined) {
      } else {
        that.$refs.city.getData();
      }
    },
    citychange(val) {
      let that = this;
      that.District.pcode = val;
      if (that.$refs.district == undefined) {
      } else {
        that.$refs.district.getData();
      }
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
