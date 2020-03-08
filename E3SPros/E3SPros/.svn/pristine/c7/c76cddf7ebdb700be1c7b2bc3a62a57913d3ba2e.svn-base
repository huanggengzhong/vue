<!--
* description: 公司客户信息编辑
* author: dxuem
* createdDate: 2019-10-22
-->
<template>
  <div class="app-container app-container-table">
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="changeOwner filter-params-crm-scroll crm-s-scroll">
      <!-- 基本信息 -->
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
      </div>
      <!-- 联系信息 -->
      <div class="filter-container-crm filter-title-crm">{{infoComponents[3].title}}</div>
      <div class="filter-container-crm filter-params">
        <crmGroupForm :dynamicComponentss="infoComponents[3].tableComponents" :values="formField" />
      </div>
    </el-form>
  </div>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import crmGroupSubmit from "@/components/crm/commonComponents/crmGroupSubmit";
import OneTableTemplate from "@/components/crm/table/crmOnetable";

export default {
  name: "editPer",
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
        //基本信息 0
        {
          title: "基本信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "UID",
              codeField: "uid",
              code: "",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "公司简称",
              codeField: "custName",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              span: 12,
              labelName: "公司全称",
              codeField: "custFullName",
              isMul: false,
              disabled: true,
              isRequire: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        // 1
        {
          tableComponents: [
            {
              compKey: "compKey4",
              labelName: "机构代码",
              codeField: "credNo",
              isRequire: true,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "法人名称",
              codeField: "principalName",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "法人电话",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey7",
              labelName: "法人身份证",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
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
              compKey: "compKey9",
              labelName: "建档日期",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              component: () => import("@/components/crm/Time/crmdatePicker")
            },
            {
              compKey: "compKey8",
              labelName: "详细地址",
              span: 12,
              codeField: "addrStreet",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "公司规模",
              codeField: "compOrgscaleCode",
              isRequire: false,
              isMust: true,
              isMul: false,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey10",
              labelName: "公司性质",
              codeField: "compKindCode",
              isRequire: false,
              isMust: true,
              disabled: false,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        //  2
        {
          tableComponents: [
            {
              compKey: "compKey11",
              labelName: "公司备注",
              codeField: "",
              changeCode: val => this.basecustClass(val),
              isRequire: false,
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "邮政编码",
              codeField: "addrZip",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "建档来源",
              codeField: "",
              isRequire: false,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
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
        // 联系信息   3
        {
          title: "联系信息",
          tableComponents: [
            {
              compKey: "compKey13",
              labelName: "公司电话",
              codeField: "compTel",
              isRequire: false,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey14",
              labelName: "官方微信号",
              codeField: "webchat",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey15",
              labelName: "官网",
              codeField: "",
              isRequire: false,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey16",
              labelName: "电子邮箱",
              codeField: "email",
              lookuptype: "DB0022",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "传真号码",
              codeField: "faxTel",
              isRequire: false,
              isMust: true,
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
              compKey: "compKey21",
              labelName: "联系人名称",
              codeField: "",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey22",
              labelName: "电话",
              codeField: "phone",
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        }
      ],
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
        custFullName: "",
        credNo: "",
        principalName: "",
        // 法人电话
        // 法人身份证
        addrProvince: "",
        addrCity: "",
        addrCounty: "",
        // 建档日期
        compOrgscaleCode: "",
        compKindCode: "",
        // 公司备注
        addrZip: "",
        bankCardNo: "",
        // 建档来源
        // 官网
        bankCode: "",
        compTel: "",
        webchat: "",
        email: "",
        faxTel: "",
        custNo:"",
        dlrCustNo:"",
        phone:""
        // 联系人名称
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
          "provinceId",
          "addrProvince",
          "addrCity",
          "addrCounty",
          "cityId",
          "countyId",
          "nationCode",
          "credTypeCode",
          "principalName",
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
          "openId", //微信
          "email",
          "convTimeCode",
          "contactTypeCode",
          "bankCardNo",
          "bankCode",
          "faxTel"
        ];
        this.query(
          crmApis.custViewContactWayQueryFindAll,
          formField2,
          params
        );
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
      this.formField.custClassCode = "1";
    //   this.formField.custFullName = this.formField.custName;
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.createdOneIdMutationSaveCust, //客户信息-修改客户信息
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
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