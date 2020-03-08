<!--
* description: 变更人车关系
* author: dxuem
* createdDate: 2019-10-19
-->
<template>
  <div class="app-container app-container-table">
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="changeOwner filter-params-crm-scroll crm-s-scroll">
      <!-- 车辆基本信息 -->
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
      </div>
      <!-- 车主信息 -->
      <div class="filter-container-crm filter-title-crm">{{infoComponents[1].title}}</div>
      <div class="filter-container-crm filter-params">
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
      </div>
      <!-- 基本信息 -->
      <div class="filter-container-crm filter-title-crm" v-if="baseInfo">{{infoComponents[2].title}}</div>
      <div class="filter-container-crm filter-params" v-if="baseInfo">
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
        <crmGroupForm
          v-show="perbase"
          :dynamicComponentss="infoComponents[3].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="perbase"
          :dynamicComponentss="infoComponents[4].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="combase"
          :dynamicComponentss="infoComponents[5].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="combase"
          :dynamicComponentss="infoComponents[6].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="combase"
          :dynamicComponentss="infoComponents[7].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="combase"
          :dynamicComponentss="infoComponents[8].tableComponents"
          :values="formField"
        />
      </div>
      <!-- 车主关系 -->
      <div class="filter-container-crm filter-title-crm" v-if="baseInfo">{{infoComponents[9].title}}</div>
      <div class="filter-container-crm filter-params" v-if="baseInfo">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="infoComponents[9].tableButtons"
          :dynamicTableCols="infoComponents[9].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="true"
          :dynamicApiConfig="infoComponents[9].apiConfig"
          :dynamicFormFields="infoComponents[9].formField"
        />
      </div>
      <!-- 旧车主信息 -->
      <div class="filter-container-crm filter-title-crm" v-if="oldInfo">{{infoComponents[10].title}}</div>
      <div class="filter-container-crm filter-params" v-if="oldInfo">
        <crmGroupForm :dynamicComponentss="infoComponents[10].tableComponents" :values="formField" />
        <crmGroupForm
          v-show="oldper"
          :dynamicComponentss="infoComponents[11].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="oldper"
          :dynamicComponentss="infoComponents[12].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="oldcom"
          :dynamicComponentss="infoComponents[13].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="oldcom"
          :dynamicComponentss="infoComponents[14].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="oldcom"
          :dynamicComponentss="infoComponents[15].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="oldcom"
          :dynamicComponentss="infoComponents[16].tableComponents"
          :values="formField"
        />
      </div>
      <!-- 新车主信息 -->
      <div class="filter-container-crm filter-title-crm" v-if="newInfo">{{infoComponents[17].title}}</div>
      <div class="filter-container-crm filter-params" v-if="newInfo">
        <crmGroupForm :dynamicComponentss="infoComponents[17].tableComponents" :values="formField" />
        <crmGroupForm
          v-show="newper"
          :dynamicComponentss="infoComponents[18].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="newper"
          :dynamicComponentss="infoComponents[19].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="newcom"
          :dynamicComponentss="infoComponents[20].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="newcom"
          :dynamicComponentss="infoComponents[21].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="newcom"
          :dynamicComponentss="infoComponents[22].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="newcom"
          :dynamicComponentss="infoComponents[23].tableComponents"
          :values="formField"
        />
      </div>
    </el-form>
    <useredit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></useredit>
  </div>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import crmGroupSubmit from "@/components/crm/commonComponents/crmGroupSubmit";
import crmTextInput from "@/components/crm/textbox/crmTextInput";
import crmdatePicker from "@/components/crm/Time/crmdatePicker";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";
import UpLoad from "@/components/crm/EjectWindows/UpLoad";
import Province from "@/components/crm/Select/Common/Province";
import City from "@/components/crm/Select/Common/City";
import District from "@/components/crm/Select/Common/District";
import OneTableTemplate from "@/components/crm/table/crmOnetable";
import useredit from "./useredit";

export default {
  name: "editPer",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    crmGroupForm,
    crmGroupSubmit,
    crmTextInput,
    crmdatePicker,
    lookupvalue,
    UpLoad,
    Province,
    City,
    District,
    OneTableTemplate,
    useredit
  },
  props: {},
  data() {
    return {
      // 联动
      baseInfo: true,
      perbase: true,
      combase: false,
      oldInfo: false,
      oldper: false,
      oldcom: false,
      newInfo: false,
      newper: false,
      newcom: false,
      // 弹窗
      editPopupsKey: "",
      editPopupsState: "",
      editPopupsVisible: false,
      ismore: false,
      ismutiple: false,
      action: "", //证件上传地址
      accepttype:
        ".jpg,.jpeg,.png,.gif,.bmp,.pdf,.JPG,.JPEG,.PBG,.GIF,.BMP,.PDF", //上传文件类型
      text1: "选择文件",
      limit: 1,
      params: {},
      nagflag: true,
      posflag: false,
      flag: true,
      infoComponents: [
        //车辆基本信息 0
        {
          title: "车辆基本信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "VIN码",
              codeField: "vin",
              code: "",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/crmEjectWindows/crmVin")
            },
            {
              compKey: "compKey2",
              labelName: "车牌号",
              codeField: "carLicenseNo",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "车身颜色",
              codeField: "carColorId",
              textField: "carColorName",
              isMul: false,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "内饰色",
              codeField: "carIncolorId",
              textField: "carIncolorName",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "车系",
              codeField: "carSeriesCode",
              textField: "carSeriesCn",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "车型",
              codeField: "smallCarTypeCode",
              textField: "smallCarTypeCn",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey7",
              labelName: "发动机号",
              codeField: "engineNo",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey8",
              labelName: "排量",
              codeField: "classLevel",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },

            {
              compKey: "compKey9",
              labelName: "变速箱名称",
              codeField: "nationCode",
              isRequire: false,
              isMust: true,
              isMul: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey10",
              labelName: "变速箱号",
              codeField: "bankCardNo",
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        //车主信息 1
        {
          title: "车主信息",
          tableComponents: [
            {
              compKey: "compKey11",
              labelName: "车主信息",
              codeField: "credTypeCode",
              isRequire: false,
              value: "1",
              isMust: true,
              changeCode: val => this.carInfo(val),
              component: () =>
                import("@/components/crm/Select/ONEID/sct_CarInfo")
            }
          ]
        },
        // 基本信息 2
        {
          title: "基本信息",
          tableComponents: [
            {
              compKey: "compKey12",
              labelName: "客户类型",
              lookuptype: "LX011",
              codeField: "custClassCode",
              changeCode: val => this.basecustClass(val),
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        // 基本信息-个人 3
        {
          tableComponents: [
            {
              compKey: "compKey13",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/crmEjectWindows/crmCustName")
            },
            {
              compKey: "compKey14",
              labelName: "UID",
              codeField: "uid",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey15",
              labelName: "电话",
              codeField: "phone",
              isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey16",
              labelName: "性别",
              codeField: "genderCode",
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey17",
              labelName: "出生日期",
              codeField: "birthday",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey18",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey19",
              labelName: "城市",
              codeField: "cityId",
              textField: "addrCity",
              isRequire: false,
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
              compKey: "compKey20",
              labelName: "区县",
              codeField: "countyId",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              span: 12,
              compKey: "compKey21",
              labelName: "详细地址",
              codeField: "addrStreet",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 4
        {
          tableComponents: [
            {
              compKey: "compKey22",
              labelName: "办公电话",
              codeField: "officeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey23",
              labelName: "家庭电话",
              codeField: "homeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey24",
              labelName: "电子邮箱",
              codeField: "email",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey25",
              labelName: "证件类型",
              codeField: "jobCode",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey26",
              labelName: "证件号码",
              codeField: "custPropertyName",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey27",
              labelName: "证件照1",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey28",
              labelName: "证件照2",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件2",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey29",
              labelName: "行驶证",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件3",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            }
          ]
        },
        // 基本信息-公司 5
        {
          tableComponents: [
            {
              compKey: "compKey30",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/crmEjectWindows/crmCustName")
            },
            {
              compKey: "compKey31",
              labelName: "UID",
              codeField: "uid",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              span: 12,
              compKey: "compKey32",
              labelName: "公司全称",
              codeField: "phone",
              isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 6
        {
          tableComponents: [
            {
              compKey: "compKey33",
              labelName: "公司电话",
              codeField: "phone",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey34",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey35",
              labelName: "城市",
              codeField: "cityId",
              textField: "addrCity",
              isRequire: false,
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
              compKey: "compKey36",
              labelName: "区县",
              codeField: "countyId",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              span: 12,
              compKey: "compKey37",
              labelName: "详细地址",
              codeField: "addrStreet",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 7
        {
          tableComponents: [
            {
              compKey: "compKey38",
              labelName: "机构代码",
              codeField: "credNo",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey39",
              labelName: "公司性质",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey40",
              labelName: "公司规模",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey41",
              labelName: "传真号码",
              codeField: "jobCode",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey42",
              labelName: "证件照1",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey43",
              labelName: "证件照2",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件2",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey44",
              labelName: "行驶证",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件3",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            }
          ]
        },
        // 8
        {
          tableComponents: [
            {
              compKey: "compKey45",
              labelName: "法人名称",
              codeField: "credNo",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey46",
              labelName: "法人电话",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey47",
              labelName: "法人身份证",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 车主关系 9
        {
          apiConfig: crmApis.clueServerQueryFromDlr, //线索单查询
          title: "车主关系",
          tableButtons: [
            {
              compKey: "btnKey3",
              type: "",
              size: "small",
              clickEvent: () => this.add(),
              text: "新增"
            }
          ],
          formField: {
            statusArray: ["10", "20", "21", "30", "31", "40", "50"],
            handleCode: "1"
          },
          tableCols: [
            {
              prop: "controlBtn",
              label: "操作",
              codeField: "controlBtn",
              width: 200,
              align: "center",
              isComponent: true,
              comps: [
                {
                  compKey: "propKey1",
                  labelName: "修改",
                  codeField: "editControlBtn",
                  clickEvent: index => {
                    this.edituser(index);
                  },
                  component: () => import("@/components/org/linkButton"),
                  align: "center"
                },
                {
                  compKey: "propKey2",
                  labelName: "删除",
                  codeField: "editControlBtn",
                  clickEvent: index => {
                    this.delet(index);
                  },
                  component: () => import("@/components/org/linkButton"),
                  align: "center"
                }
              ]
            },
            {
              prop: "clueCode",
              label: "车牌号",
              width: null,
              align: "center"
            },
            {
              prop: "clueLevelCode",
              label: "客户类型",
              width: null,
              align: "center"
            },
            {
              prop: "nextDealUserName",
              label: "UID",
              width: null,
              align: "center"
            },
            {
              prop: "custName",
              label: "客户名称",
              width: null,
              align: "center"
            },
            {
              prop: "contactTel",
              label: "电话",
              width: null,
              align: "center"
            },
            {
              prop: "carSeriesCn",
              label: "车系",
              width: null,
              align: "center"
            },
            {
              prop: "statusName",
              label: "车型",
              width: null,
              align: "center"
            },
            {
              prop: "reviewTimes",
              label: "交车时间",
              width: null,
              align: "center"
            },
            {
              prop: "nextCallbackDate",
              label: "状态",
              width: null,
              align: "center"
            },
            {
              prop: "reviewTimes",
              label: "备注",
              width: null,
              align: "center"
            }
          ]
        },
        //旧车主信息 10
        {
          title: "旧车主信息",
          tableComponents: [
            {
              compKey: "compKey48",
              labelName: "客户类型",
              lookuptype: "LX011",
              codeField: "custClassCode",
              changeCode: val => this.oldcustClass(val),
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        // 旧车主信息-个人 11
        {
          tableComponents: [
            {
              compKey: "compKey49",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/crmEjectWindows/crmCustName")
            },
            {
              compKey: "compKey50",
              labelName: "UID",
              codeField: "uid",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey51",
              labelName: "电话",
              codeField: "phone",
              isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey52",
              labelName: "性别",
              codeField: "genderCode",
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey53",
              labelName: "出生日期",
              codeField: "birthday",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey54",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey55",
              labelName: "城市",
              codeField: "cityId",
              textField: "addrCity",
              isRequire: false,
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
              compKey: "compKey56",
              labelName: "区县",
              codeField: "countyId",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              span: 12,
              compKey: "compKey57",
              labelName: "详细地址",
              codeField: "addrStreet",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 12
        {
          tableComponents: [
            {
              compKey: "compKey58",
              labelName: "办公电话",
              codeField: "officeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey59",
              labelName: "家庭电话",
              codeField: "homeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey60",
              labelName: "电子邮箱",
              codeField: "email",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey61",
              labelName: "证件类型",
              codeField: "jobCode",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey62",
              labelName: "证件号码",
              codeField: "custPropertyName",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey63",
              labelName: "证件照1",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey64",
              labelName: "证件照2",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件2",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey65",
              labelName: "行驶证",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件3",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            }
          ]
        },
        // 旧车主信息-公司 13
        {
          tableComponents: [
            {
              compKey: "compKey66",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/crmEjectWindows/crmCustName")
            },
            {
              compKey: "compKey67",
              labelName: "UID",
              codeField: "uid",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              span: 12,
              compKey: "compKey68",
              labelName: "公司全称",
              codeField: "phone",
              isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 14
        {
          tableComponents: [
            {
              compKey: "compKey69",
              labelName: "公司电话",
              codeField: "phone",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey70",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey71",
              labelName: "城市",
              codeField: "cityId",
              textField: "addrCity",
              isRequire: false,
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
              compKey: "compKey72",
              labelName: "区县",
              codeField: "countyId",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              span: 12,
              compKey: "compKey73",
              labelName: "详细地址",
              codeField: "addrStreet",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 15
        {
          tableComponents: [
            {
              compKey: "compKey74",
              labelName: "机构代码",
              codeField: "credNo",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey75",
              labelName: "公司性质",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey76",
              labelName: "公司规模",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey77",
              labelName: "传真号码",
              codeField: "jobCode",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey78",
              labelName: "证件照1",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey79",
              labelName: "证件照2",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件2",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey80",
              labelName: "行驶证",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件3",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            }
          ]
        },
        // 16
        {
          tableComponents: [
            {
              compKey: "compKey81",
              labelName: "法人名称",
              codeField: "credNo",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey82",
              labelName: "法人电话",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey83",
              labelName: "法人身份证",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 新车主信息 17
        {
          title: "新车主信息",
          tableComponents: [
            {
              compKey: "compKey84",
              labelName: "客户类型",
              lookuptype: "LX011",
              codeField: "custClassCode",
              changeCode: val => this.newcustClass(val),
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        // 新车主信息-个人 18
        {
          tableComponents: [
            {
              compKey: "compKey85",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/crmEjectWindows/crmCustName")
            },
            {
              compKey: "compKey86",
              labelName: "UID",
              codeField: "uid",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey87",
              labelName: "电话",
              codeField: "phone",
              isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey88",
              labelName: "性别",
              codeField: "genderCode",
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey89",
              labelName: "出生日期",
              codeField: "birthday",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey90",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey91",
              labelName: "城市",
              codeField: "cityId",
              textField: "addrCity",
              isRequire: false,
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
              compKey: "compKey92",
              labelName: "区县",
              codeField: "countyId",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              span: 12,
              compKey: "compKey93",
              labelName: "详细地址",
              codeField: "addrStreet",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 19
        {
          tableComponents: [
            {
              compKey: "compKey94",
              labelName: "办公电话",
              codeField: "officeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey95",
              labelName: "家庭电话",
              codeField: "homeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey96",
              labelName: "电子邮箱",
              codeField: "email",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey97",
              labelName: "证件类型",
              codeField: "jobCode",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey98",
              labelName: "证件号码",
              codeField: "custPropertyName",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey99",
              labelName: "证件照1",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey100",
              labelName: "证件照2",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件2",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey101",
              labelName: "行驶证",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件3",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            }
          ]
        },
        // 新车主信息-公司 20
        {
          tableComponents: [
            {
              compKey: "compKey102",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/crmEjectWindows/crmCustName")
            },
            {
              compKey: "compKey103",
              labelName: "UID",
              codeField: "uid",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              span: 12,
              compKey: "compKey104",
              labelName: "公司全称",
              codeField: "phone",
              isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 21
        {
          tableComponents: [
            {
              compKey: "compKey105",
              labelName: "公司电话",
              codeField: "phone",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey106",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgProvinceQueryFindAll,
              changeCode: this.changeCityByProvince,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey107",
              labelName: "城市",
              codeField: "cityId",
              textField: "addrCity",
              isRequire: false,
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
              compKey: "compKey108",
              labelName: "区县",
              codeField: "countyId",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              span: 12,
              compKey: "compKey109",
              labelName: "详细地址",
              codeField: "addrStreet",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 22
        {
          tableComponents: [
            {
              compKey: "compKey110",
              labelName: "机构代码",
              codeField: "credNo",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey111",
              labelName: "公司性质",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey112",
              labelName: "公司规模",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey113",
              labelName: "传真号码",
              codeField: "jobCode",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey114",
              labelName: "证件照1",
              codeField: "photo1",
              isMust: true,
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey115",
              labelName: "证件照2",
              codeField: "photo2",
              isMust: true,
              fileList: [],
              buttonText: "选择文件2",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey116",
              labelName: "行驶证",
              codeField: "photo3",
              isMust: true,
              fileList: [],
              buttonText: "选择文件3",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            }
          ]
        },
        // 23
        {
          tableComponents: [
            {
              compKey: "compKey117",
              labelName: "法人名称",
              codeField: "credNo",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey118",
              labelName: "法人电话",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey119",
              labelName: "法人身份证",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        }
      ],
      isdisplay: {
        ismuti: false
      },
      credit: false,
      // 保存API配置对象
      apiConfig: crmApis.createdOneIdMutationSaveCust, //客户信息-修改客户信息
      formSubmitButton: [
        {
          compKey: "buttonKey1",
          text: "保存",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        }
      ],
      // 标题
      textMap: {
        edit: "变更人车关系",
        add: "变更人车关系"
      },
      formField: {
        uid: "",
        custName: "",
        genderCode: "",
        birthDate: "",
        provinceId: "",
        cityId: "",
        countyId: "",
        nationCode: "",
        jobCode: "",
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
        isHaveChild: ""
        // interestsNameList: ""
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      debugger;
      this.initdata();
    });
  },
  methods: {
    manage() {
      this.credit = true;
    },
    // 维护使用人
    edituser(type) {
      this.editPopupsState = type;
      this.editPopupsVisible = true;
      this.editPopupsKey = this.$utils.generateId();
    },
    initdata() {
      debugger;
      let formvalue = this.$route.params;
      for (let key in this.formField) {
        if (formvalue.hasOwnProperty(key)) {
          this.formField[key] = formvalue[key];
        }
      }
    },
    init() {
      let that = this;

      that.queryTable(1);
    },
    edit(inde, row) {
      // this.showedit = true;
    },
    carInfo(val) {
      if (val == "1") {
        this.baseInfo = true;
        // if(this.formField.custClassCode=="0"){
        this.perbase = true;
        this.combase = false;
        // }
        // else if(this.formField.custClassCode=="1"){
        // this.perbase = false;
        // this.combase = true;
        // }
        this.oldInfo = false;
        this.oldper = false;
        this.oldcom = false;
        this.newInfo = false;
        this.newper = false;
        this.newcom = false;
      } else if (val == "2") {
        this.oldInfo = true;
        this.newInfo = true;
        // if (this.formField.custClassCode == "0") {
        this.oldper = true;
        this.oldcom = false;
        this.newper = true;
        this.newcom = false;
        // }
        // else if(this.formField.custClassCode == "1"){
        //   this.oldper = false;
        //   this.oldcom = true;
        //   this.newper = false;
        //   this.newcom = true;
        // }
        this.baseInfo = false;
        this.perbase = false;
        this.combase = false;
        this.oldcom = false;
      }
    },
    basecustClass(val) {
      let that = this;
      debugger;
      if (val == "0") {
        that.perbase = true;
        that.combase = false;
      } else {
        that.perbase = false;
        that.combase = true;
      }
    },
    oldcustClass(val) {
      if (val == "0") {
        this.oldper = true;
        this.oldcom = false;
      } else {
        this.oldper = false;
        this.oldcom = true;
      }
    },
    newcustClass(val) {
      if (val == "0") {
        this.newper = true;
        this.newcom = false;
      } else {
        this.newper = false;
        this.newcom = true;
      }
    },
    //保存
    save() {
      // validpopup  弹窗  validpage 页面
      this.$utils.validataMoth(this, "validpopup");
      if (this.valid) {
        this.saveForm();
      }
    },
    saveForm() {
      //保存表单
      let that = this;
      this.formField.custClassCode = "0";
      this.formField.custFullName = this.formField.custName;

      this.formField.custNo = this.$route.params.custNo;
      this.formField.dlrCustNo = this.$route.params.dlrCustNo;
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.createdOneIdMutationChangeCarOnwer, //客户信息-更换车主
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledata.pagesize,
          pageIndex: that.tabledata.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            custModifyScence: "203", //场景编码--修改客户信息
            custInfo: this.formField
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