<!--
* description: 留档
* author: zouzx
* createdDate: 2019-10-22
-->
<template>
  <div class="app-container app-container-table">
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="filter-params-crm-scroll crm-s-scroll">
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
      </div>
      <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="客户信息" name="first">
          <div class="filter-container-crm filter-params-crm">
            <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
            <crmGroupForm v-show="grCust" :dynamicComponentss="infoComponents[3].tableComponents" :values="formField" />
            <crmGroupForm v-show="grCust" :dynamicComponentss="infoComponents[4].tableComponents" :values="formField" />
            <crmGroupForm v-show="grCust" :dynamicComponentss="infoComponents[5].tableComponents" :values="formField" />
            <crmGroupForm v-show="gsCust" :dynamicComponentss="infoComponents[6].tableComponents" :values="formField" />
            <crmGroupForm v-show="gsCust" :dynamicComponentss="infoComponents[7].tableComponents" :values="formField" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="联系人信息" name="second">
          <div class="filter-container-crm filter-params-crm">
            <one-table-template
              ref="multipleTable"
              :dynamicButtons="infoComponents[9].tableButtons"
              :dynamicTableCols="infoComponents[9].tableCols"
              :dynamicIsShowSelect="false"
              :isShowPagination="false"
              :dynamicIsInitTable="false"
              :dynamicApiConfig="infoComponents[9].apiConfig"
              :dynamicFormFields="infoComponents[9].formField"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="客户车辆信息" name="third">
          <div class="filter-container-crm filter-params-crm">
            <one-table-template
              ref="multipleTable2"
              :dynamicTableCols="infoComponents[10].tableCols"
              :dynamicIsShowSelect="false"
              :isShowPagination="false"
              :dynamicIsInitTable="false"
              :dynamicApiConfig="infoComponents[10].apiConfig"
              :dynamicFormFields="infoComponents[10].formField"
            />
          </div>
        </el-tab-pane>
        <el-tab-pane label="来店记录" name="fourth">
          <div class="filter-container-crm filter-params-crm">
            <one-table-template
              ref="multipleTable3"
              :dynamicTableCols="infoComponents[11].tableCols"
              :dynamicIsShowSelect="false"
              :isShowPagination="false"
              :dynamicIsInitTable="true"
              :dynamicApiConfig="infoComponents[11].apiConfig"
              :dynamicFormFields="infoComponents[11].formField"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-form>
    <el-dialog title="联系人维护" :visible.sync="dialogVisible" width="1000px" append-to-body center >
      <el-form>
        <div class="filter-container-crm filter-params-crm">
          <crmGroupForm :dynamicComponentss="infoComponents[8].tableComponents" :values="formField" />
          <el-button size="small" type="primary" @click="savegz('form')">保存</el-button>
        </div>
      </el-form>
    </el-dialog>
    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/crm/table/crmOnetable";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import crmGroupSubmit from "@/components/crm/commonComponents/crmGroupSubmit";
import edit from "@/views/crm/coc/customerFollowUp/LinkPDiag";
export default {
  name: "customerRemian",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    crmGroupForm,
    crmGroupSubmit,
    OneTableTemplate,
    edit
  },
  props: {},
  data() {
    return {
      keyInfo: false,
      ismore: false,
      ismutiple: false,
      activeName:"first",
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
      editPopupsKey: '',
      editPopupsState:"",
      editPopupsVisible:false,
      dialogVisible:false,
      grCust:true,
      gsCust:false,
      infoComponents: [
        {
          title: "客户意向信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "意向级别",
              codeField: "",
              isRequire: true,
              isMust: true,
              isMul: false,
              lookuptype: "LX141",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey2",
              labelName: "意向车型",
              codeField: "",
              textField: "",
              isRequire: true,
              isMust: true,
              isMul: false,
              component: () => import("@/components/crm/crmEjectWindows/crmCartype/index")
            },
            {
              compKey: "compKey3",
              labelName: "意向颜色",
              codeField: "carColorId",
              textField: "carColorId",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmCarSeriesColorQueryList,
              component: () =>
                import("@/components/crm/lookupValue/secondDropList")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey4",
              labelName: "销售顾问",
              codeField: "",
              textField: "",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/crmEjectWindows/crmSalesConsultant/index")
            },
            {
              compKey: "compKey5",
              labelName: "客户来源",
              codeField: "",
              isMul: false,
              isRequire: true,
              lookuptype: "VE0114",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey6",
              labelName: "号牌状态",
              codeField: "",
              isMul: false,
              lookuptype: "DB0061",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey7",
              labelName: "指标到期日",
              codeField: "birthDate",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey8",
              labelName: "是否信贷",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0064",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey9",
              labelName: "是否大客户",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0064",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        {
          title: "客户信息",
          tableComponents: [
            {
              compKey: "compKey10",
              labelName: "客户类型",
              codeField: "0",
              isRequire: true,
              isMust: true,
              isMul: false,
              lookuptype: "LX011",
              changeCode: this.changeYXL,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        {
          title: "个人客户",
          tableComponents: [
            {
              compKey: "compKey11",
              labelName: "客户名称",
              codeField: "",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey12",
              labelName: "电话",
              codeField: "",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "证件类型",
              codeField: "",
              isMul: false,
              isRequire: false,
              lookuptype: "VE0240",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey14",
              labelName: "证件号码",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey15",
              labelName: "性别",
              codeField: "",
              isMul: false,
              isRequire: false,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey16",
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
              compKey: "compKey17",
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
              compKey: "compKey18",
              labelName: "区县",
              codeField: "",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey19",
              labelName: "详细地址",
              codeField: "",
              isRequire: false,
              isMust: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey20",
              labelName: "是否有驾驶证",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0064",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey21",
              labelName: "出生日期",
              codeField: "birthDate",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey22",
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
              compKey: "compKey23",
              labelName: "驾龄",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0042",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey24",
              labelName: "电子邮箱",
              codeField: "email",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey25",
              labelName: "家庭电话",
              codeField: "homeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey26",
              labelName: "办公电话",
              codeField: "officeTel",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey27",
              labelName: "微信号",
              codeField: "webchat",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey28",
              labelName: "QQ号",
              codeField: "qq",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey29",
              labelName: "方便联系时段",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0030",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey30",
              labelName: "方便联系场所",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0016",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey31",
              labelName: "首选联系方式",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0029",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey32",
              labelName: "兴趣爱好",
              codeField: "",
              textField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/crmEjectWindows/crmCartype/index")
            }
          ]
        },
        {
          title: "公司客户",
          tableComponents: [
            {
              compKey: "compKey33",
              labelName: "公司简称",
              codeField: "",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey34",
              labelName: "公司全称",
              codeField: "",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey35",
              labelName: "公司电话",
              codeField: "",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey36",
              labelName: "机构代码",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey37",
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
              compKey: "compKey38",
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
              compKey: "compKey39",
              labelName: "区县",
              codeField: "",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey40",
              labelName: "邮政编码",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey41",
              labelName: "详细地址",
              codeField: "",
              isRequire: false,
              isMust: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey42",
              labelName: "公司电话",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey43",
              labelName: "传真号码",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey44",
              labelName: "电子邮箱",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey45",
              labelName: "公司网站",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey46",
              labelName: "公司性质",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0038",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey47",
              labelName: "公司规模",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0033",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey48",
              labelName: "负责人",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey49",
              labelName: "开户行",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              lookuptype: "DB0026",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey50",
              labelName: "银行卡号",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "联系人维护",
          tableComponents: [
            {
              compKey: "compKey51",
              labelName: "关系描述",
              codeField: "",
              isRequire: true,
              isMust: true,
              isMul: false,
              span: 8,
              lookuptype: "VE0249",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey52",
              labelName: "联系人名称",
              codeField: "",
              isRequire: true,
              isMust: true,
              span: 8,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey53",
              labelName: "联系电话",
              codeField: "",
              isRequire: true,
              isMust: true,
              span: 8,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey54",
              labelName: "省份",
              codeField: "provinceId",
              textField: "addrProvince",
              isRequire: false,
              isMust: true,
              isMul: false,
              span: 8,
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
              span: 8,
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
              codeField: "",
              textField: "addrCounty",
              isRequire: false,
              isMust: true,
              isMul: false,
              span: 8,
              lookuptype: crmApis.mdmOrgCommunityQueryFindAll,
              component: () =>
                import("@/components/crm/lookupValue/singleDropList")
            },
            {
              compKey: "compKey41",
              labelName: "详细地址",
              codeField: "",
              isRequire: false,
              isMust: true,
              span: 16,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          apiConfig:crmApis.custViewCustRelationQueryFindAll,//联系人信息
          title: "联系人信息网格",
          tableButtons: [
            {
              compKey: "btnKey3",
              type: "",
              size: "small",
              clickEvent: () => this.addInfo("add"),
              text: "新增"
            }
          ],
          formField:{
            dlrCustNo:"11111"
          },
          tableCols: [
            {
              prop: "controlBtn",
              label: "操作",
              width: 56,
              align: "center",
              codeField: 'controlBtn',
              isComponent: true,
              comps: [
                {
                  compKey: "propKey1",
                  labelName: '修改',
                  codeField: 'editControlBtn',
                  align: "center",
                  isShowLabel:true,
                  isShow:true,
                  clickEvent: this.edit,
                  component: () => import("@/components/org/linkButton")
                },
                {
                  compKey: "propKey2",
                  labelName: '删除',
                  codeField: 'editControlBtn',
                  align: "center",
                  isShowLabel:true,
                  isShow:true,
                  clickEvent: this.edit,
                  component: () => import("@/components/org/linkButton")
                }
              ]
            },
            {
              prop: "",
              label: "联系人类别",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "关系描述",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "姓名",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "性别",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "联系电话",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "省份",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "城市",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "区县",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "详细地址",
              width: null,
              align: "center"
            }
          ]
        },
        {
          apiConfig:crmApis.csDbNodeQueryFindAll,//联系人信息
          title: "车辆信息网格",
          tableButtons: [
          ],
          formField:{
            oemCode:"1",
            groupCode: "1",
          },
          tableCols: [
            {
              prop: "",
              label: "车牌号",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "VIN",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "品牌",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "车系",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "行驶里程",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "最后回厂日期",
              width: null,
              align: "center"
            }
          ]
        },
        {
          apiConfig:crmApis.mdmBuComeOrderQueryList,//来店记录
          title: "来店记录网格",
          tableButtons: [
          ],
          formField:{
            dlrId: this.$store.getters.orgInfo.DLR_ID
          },
          tableCols: [
            {
              prop: "comePurposeName",
              label: "来店目的",
              width: null,
              align: "center"
            },
            {
              prop: "comeTime",
              label: "来店时间",
              width: null,
              align: "center"
            },
            {
              prop: "leaveDate",
              label: "离店时间",
              width: null,
              align: "center"
            },
            {
              prop: "caEmpName",
              label: "销售顾问",
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
      tabledata: {
        colnames: [
          { value: "uid", label: "标签类别", width: null, align: "center" },
          {
            value: "carBrandName",
            label: "备注",
            width: null,
            align: "center"
          },
          { value: "custName", label: "添加人", width: null, align: "center" },
          {
            value: "phone",
            label: "最后更新时间",
            width: null,
            align: "center"
          }
        ],
        tableDatas: [],
        pagesize: 10,
        pageindex: 1
      },
      // 标题
      textMap: {
        edit: "活动跟踪",
        add: "活动跟踪"
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
      },
      formFieldLX:{
        oemCode:"1",
        groupCode: "1"
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
    addInfo(type) {
      debugger
      this.editPopupsState = type;
      this.editPopupsVisible = true;
      this.editPopupsKey = this.$utils.generateId();
    },

    // 关键信息修改
    editInfo(type) {
      debugger
      this.editPopupsState = type;
      this.editPopupsVisible = true;
      this.editPopupsKey = this.$utils.generateId();
    },
    initdata() {
      debugger;
      if (this.$route.params.status == "edit") {
        let formvalue = this.$route.params;
        for (let key in this.formField) {
          if (formvalue.hasOwnProperty(key)) {
            this.formField[key] = formvalue[key];
          }
        }
      } else if (this.$route.params.status == "add") {
        this.reset();
      }
    },
    edit(inde, row) {
      this.showedit = true;
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
      debugger;
      this.formField.custNo = this.$route.params.custNo;
      this.formField.dlrCustNo = this.$route.params.dlrCustNo;
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.createdOneIdMutationSaveCust, //客户信息-修改
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
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 联动
    changeYXL(val) {
      let that = this;
      debugger
      switch (val) {
        case "0":
          that.grCust=true;
          that.gsCust=false;
          break;
        case "1":
          that.grCust=false;
          that.gsCust=true;
          break;
        default:
          that.grCust=false;
          that.gsCust=false;
          break;
      }
    },
    citychange(val) {
      let that = this;
      that.District.pcode = val;
      if (that.$refs.district == undefined) {
      } else {
        that.$refs.district.getData();
      }
    },
    LXEdit(){
      this.dialogVisible=true;
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
