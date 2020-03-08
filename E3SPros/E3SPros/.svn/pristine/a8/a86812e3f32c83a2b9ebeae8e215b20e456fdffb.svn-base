<!--
* description: 车主信息维护审核
* author: zxuan
* createdDate: 2019-10-25
-->
<template>
  <div class="app-container app-container-table">
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="editPer filter-params-crm-scroll crm-s-scroll edit" disabled>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[1].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[4].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[4].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[5].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[7].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[7].tableComponents" :values="formField" />
      </div>
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
export default {
  name: "carOwnerInfo",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    crmGroupForm,
    crmGroupSubmit,
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
          title: "车辆基本信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "VIN码",
              codeField: "vin",
              disabled: true,
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "车牌号",
              codeField: "carcode",
              disabled: true,
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "车身颜色",
              codeField: "carcolor",
              disabled: true,
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "内饰色",
              codeField: "incolor",
              disabled: true,
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "车系",
              codeField: "carseries",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "车型",
              codeField: "cartype",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey7",
              labelName: "发动机号",
              codeField: "engineNo",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey8",
              labelName: "排量",
              codeField: "pailiang",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "变速箱名称",
              codeField: "bsxName",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "变速箱号",
              codeField: "bsxCode",
              isRequire: false,
              disabled: true,
              isMust: true,
              isMul: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
       //1
        {
          title: "原信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户类型",
              codeField: "custTypeName",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },
        //原信息个人2
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "UID",
              codeField: "uid",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "电话",
              codeField: "telphone",
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
              compKey: "compKey5",
              labelName: "省份",
              codeField: "addrProvince",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "城市",
              codeField: "addrCity",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey7",
              labelName: "区县",
              codeField: "addrCounty",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "出生日期",
              codeField: "birthDate",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
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
            },

            // {
            //   compKey: "compKey9",
            //   labelName: "民族",
            //   codeField: "nationCode",
            //   isRequire: false,
            //   isMust: true,
            //   isMul: false,
            //   lookuptype: "DB0026",
            //   component: () =>
            //     import("@/components/crm/lookupValue/lookupvalue")
            // },
            {
              compKey: "compKey19",
              labelName: "办公电话",
              codeField: "officetel",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey20",
              labelName: "家庭电话",
              codeField: "hometel",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey21",
              labelName: "电子邮箱",
              codeField: "email",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
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
              compKey: "compKey14",
              labelName: "行驶证",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey15",
              labelName: "证件照1",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },

            {
              compKey: "compKey16",
              labelName: "证件照2",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            // {
            //   compKey: "compKey9",
            //   labelName: "建档日期",
            //   codeField: "",
            //   isRequire: false,
            //   disabled: true,
            //   isMust: true,
            //   isMul: false,
            //   component: () => import("@/components/crm/Time/crmdatePicker")
            // },
          ]
        },
        //原信息公司3
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "UID",
              codeField: "uid",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "公司全称",
              codeField: "companyname",
              isRequire: false,
              disabled: true,
              isMust: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "公司电话",
              codeField: "companytel",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "省份",
              codeField: "addrProvince",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "城市",
              codeField: "addrCity",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey7",
              labelName: "区县",
              codeField: "addrCounty",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey8",
              labelName: "详细地址",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "机构代码",
              codeField: "companyCode",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey10",
              labelName: "公司性质",
              codeField: "companyCode",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey11",
              labelName: "公司规模",
              codeField: "companySize",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey12",
              labelName: "传真号码",
              codeField: "fax",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "法人名称",
              codeField: "lawPerson",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey14",
              labelName: "行驶证",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey15",
              labelName: "证件照1",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },

            {
              compKey: "compKey16",
              labelName: "证件照2",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey17",
              labelName: "法人电话",
              codeField: "lawPersontel",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "法人身份证",
              codeField: "lawPersoncard",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },
        // 新信息4
        {
          title: "新信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户类型",
              codeField: "custTypeName",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },
        //新信息个人5
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "UID",
              codeField: "uid",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "电话",
              codeField: "telphone",
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
              compKey: "compKey5",
              labelName: "省份",
              codeField: "addrProvince",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "城市",
              codeField: "addrCity",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey7",
              labelName: "区县",
              codeField: "addrCounty",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "出生日期",
              codeField: "birthDate",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
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
            },

            // {
            //   compKey: "compKey9",
            //   labelName: "民族",
            //   codeField: "nationCode",
            //   isRequire: false,
            //   isMust: true,
            //   isMul: false,
            //   lookuptype: "DB0026",
            //   component: () =>
            //     import("@/components/crm/lookupValue/lookupvalue")
            // },
            {
              compKey: "compKey19",
              labelName: "办公电话",
              codeField: "officetel",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey20",
              labelName: "家庭电话",
              codeField: "hometel",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey21",
              labelName: "电子邮箱",
              codeField: "email",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
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
              compKey: "compKey14",
              labelName: "行驶证",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey15",
              labelName: "证件照1",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },

            {
              compKey: "compKey16",
              labelName: "证件照2",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            // {
            //   compKey: "compKey9",
            //   labelName: "建档日期",
            //   codeField: "",
            //   isRequire: false,
            //   disabled: true,
            //   isMust: true,
            //   isMul: false,
            //   component: () => import("@/components/crm/Time/crmdatePicker")
            // },
          ]
        },
        //新信息公司6
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "UID",
              codeField: "uid",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "公司全称",
              codeField: "companyname",
              isRequire: false,
              disabled: true,
              isMust: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "公司电话",
              codeField: "companytel",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "省份",
              codeField: "addrProvince",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "城市",
              codeField: "addrCity",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey7",
              labelName: "区县",
              codeField: "addrCounty",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey8",
              labelName: "详细地址",
              codeField: "addrStreet",
              isRequire: false,
              disabled: true,
              isMust: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "机构代码",
              codeField: "companyCode",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey10",
              labelName: "公司性质",
              codeField: "companyCode",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey11",
              labelName: "公司规模",
              codeField: "companySize",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey12",
              labelName: "传真号码",
              codeField: "fax",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "法人名称",
              codeField: "lawPerson",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
           {
              compKey: "compKey14",
              labelName: "行驶证",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey15",
              labelName: "证件照1",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },

            {
              compKey: "compKey16",
              labelName: "证件照2",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey17",
              labelName: "法人电话",
              codeField: "lawPersontel",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "法人身份证",
              codeField: "lawPersoncard",
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },

        //审核信息
        {
          title: "审核信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "审核意见",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              type:"textarea",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },
      ],
      isdisplay: {
        ismuti: false
      },
      credit: false,
      // 保存API配置对象
      formSubmitButton: [
       {
          compKey: "buttonKey1",
          text: "同意",
          size: "small",
          type: "",
          clickEvent: () => this.agree(),
          isShow: true
       },
       {
          compKey: "buttonKey2",
          text: "驳回",
          size: "small",
          type: "",
          clickEvent: () => this.refuse(),
          isShow: true
        },
      ],
      // 标题
      textMap: {
        edit: "个人客户视图",
        add: "个人客户视图"
      },
      formField: {
        custTypeName:"个人"
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      
    });
  },
  methods: {
    manage() {
      this.credit = true;
    },
    agree(){},
    refuse(){},
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
        this.query(crmApis.custViewContactWayQueryFindAll, formField2, params);
        // 客户画像&获客渠道
        let formField3 = [
          // "incomeCode",
          // "incomeName",
          // "driverTimeCode",
          // "driverTimeName",
          "educationCode",
          "educationName",
          "custPropertyName", //客户属性
          "custPropertyCode",
          // "maritalStatusName",
          "isHaveChild",
          // "custNo",
          // "dlrCustNo",
          // "convLocaleCode", //最佳联系场所
          // "tradeCode",
          // "tradeName",
          "job", //职务
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
          "interestsNameList"
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
        this.query(crmApis.custViewCustLevelQueryFindAll, formField4, params);
      }
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
