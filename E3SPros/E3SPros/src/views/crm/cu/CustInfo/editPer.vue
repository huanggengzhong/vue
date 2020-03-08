<!--
* description: 个人客户信息维护
* author: laimzh
* createdDate: 2019-08-14
-->
<template>
  <div class="app-container app-container-table">
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="editPer filter-params-crm-scroll crm-s-scroll edit">
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
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
        <crmGroupForm
          :dynamicComponentss="infoComponents[5].tableComponents"
          :values="formField"
          ref="interest"
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
        // 基本信息  0
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
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "客户名称",
              codeField: "custName",
              isRequire: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "性别",
              codeField: "genderCode",
              textField: "genderName",
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
              textField: "nationCodeName",
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
              textField: "credTypeName",
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
              codeField: "custSourceCode", //缺字段
              lookuptype: "DB0030", //que
              isRequire: false,
              disabled: true,
              isMust: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey9",
              labelName: "建档日期",
              codeField: "", //缺字段
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
              codeField: "addrStreet", //addr  查询
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
              fileList: [],
              buttonText: "选择文件1",
              isRequireUpload: true,
              isUpload: true,
              component: () => import("@/components/crm/EjectWindows/UpLoad")
            },
            {
              compKey: "compKey15",
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
              compKey: "compKey16",
              labelName: "证件照3",
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
              codeField: "convLocaleCode",
              isMul: false,
              lookuptype: "DB0016",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey25",
              labelName: "方便联系时段",
              codeField: "convTimeCode",
              isMul: false,
              lookuptype: "DB0030",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey26",
              labelName: "首选联系方式",
              codeField: "contactTypeCode",
              isMul: false,
              lookuptype: "DB0029", //希望联系方式
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        // 客户画像  3
        {
          title: "客户画像",
          tableComponents: [
            {
              compKey: "compKey28",
              labelName: "学历",
              codeField: "degreeCode",
              isMul: false,
              lookuptype: "DB0044",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey28",
              labelName: "行业",
              codeField: "tradeCode",
              isMul: false,
              lookuptype: "VE0480", //行业类型
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey28",
              labelName: "公司全称",
              codeField: "tradeCode",
              isMul: false,
              lookuptype: "DB0044",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey31",
              labelName: "职务",
              codeField: "jobName",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey33",
              labelName: "婚姻状况",
              codeField: "marriagedCode",
              isMul: false,
              lookuptype: "VE0502",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "是否有子女",
              codeField: "isHaveChild", //isHaveChildCode
              isMul: false,
              lookuptype: "DB0044",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey27",
              labelName: "家庭年收入",
              codeField: "familyIncomeCode",
              isMul: false,
              lookuptype: "DB0028",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "已有车型",
              codeField: "holdCarTypeCode",
              isMul: false,
              lookuptype: "DB0044", //que
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "车辆拥有时间",
              codeField: "holdCarTimeCode",
              isMul: false,
              lookuptype: "DB0044", //que
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "是否有驾驶证",
              codeField: "",
              isMul: false,
              lookuptype: "DB0044",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "驾照类型",
              codeField: "",
              isMul: false,
              lookuptype: "DB0044", //que
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "驾龄",
              codeField: "driverTimeCode",
              isMul: false,
              lookuptype: "DB0042",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "购车方式",
              codeField: "",
              isMul: false,
              lookuptype: "LX190",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "意向车型",
              codeField: "inteSeriesCode",
              isMul: false,
              component: () =>
                import("@/components/crm/crmEjectWindows/crmCartype/index")
            },
            {
              compKey: "compKey34",
              labelName: "意向价格",
              codeField: "",
              isMul: false,
              lookuptype: "DB0044", //que
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "意向外观颜色",
              codeField: "",
              isMul: false,
              lookuptype: "DB0044", //que
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "意向内饰色",
              codeField: "",
              isMul: false,
              lookuptype: "DB0044", //que
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey30",
              labelName: "关注点",
              lookuptype: "APPVE9527_07",
              codeField: "custFocus",
              disabled: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey29",
              labelName: "是否网点VIP",
              codeField: "isVip",
              isMul: false,
              lookuptype: "DB0044",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey34",
              labelName: "VIP等级",
              codeField: "isHaveChild",
              isMul: false,
              lookuptype: "DB0044", //que
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey35",
              labelName: "上牌指标",
              codeField: "",
              isMul: false,
              lookuptype: "DB0044", //que
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        // 4
        {
          tableComponents: [
            {
              compKey: "compKey28",
              labelName: "客户标签",
              codeField: "",
              isMul: false,
              component: () => import("@/views/crm/cu/CustInfo/tags")
            }
          ]
        },
        // 5
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
          text: "修改关键信息",
          size: "small",
          type: "",
          clickEvent: () => this.editInfo(),
          isShow: true
        },
        {
          compKey: "buttonKey2",
          text: "保存",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        },
        {
          compKey: "buttonKey2",
          text: "test",
          size: "small",
          type: "",
          clickEvent: () => this.test(),
          isShow: true
        }
      ],
      // 标题
      textMap: {
        edit: "维护个人客户",
        add: "新建个人客户"
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
      debugger;
      this.reset();
      this.initdata();
    });
  },
  methods: {
    manage() {
      this.credit = true;
    },
    test() {
      console.log(this.$refs.interest);
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
        // 客户画像
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
      }
    },
    // initdata() {
    //   if (this.$route.params.status == "edit") {
    //     let formvalue = this.$route.params;
    //     for (let key in this.formField) {
    //       if (formvalue.hasOwnProperty(key)) {
    //         this.formField[key] = formvalue[key];
    //       }
    //     }
    //   } else if (this.$route.params.status == "add") {
    //     this.reset();
    //   }
    // },
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
      let queryObj = {
        // api配置
        type: "mutation",
        apiConfig: crmApis.createdOneIdMutationSaveCust, //客户信息-修改
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
