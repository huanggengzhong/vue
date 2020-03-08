<!--
* description: 新增用车人
* author: dxuem
* createdDate: 2019-10-22
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
        <crmGroupForm v-show="perbase" :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
        <crmGroupForm
          v-show="perbase"
          :dynamicComponentss="infoComponents[3].tableComponents"
          :values="formField"
        />
        <crmGroupForm
          v-show="combase"
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
        // 车主信息--个人2
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
        // 3
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
        // 基本信息-公司 4
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
        // 5
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
        // 6
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
        // 7
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
    initdata() {
      debugger;
      this.reset();
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