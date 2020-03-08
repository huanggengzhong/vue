<!--
* description: 活动跟踪
* author: zouzx
* createdDate: 2019-10-22
-->
<template>
  <div class="app-container app-container-table">
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="editPer filter-params-crm-scroll crm-s-scroll edit">
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
      </div>
      <el-tabs v-model="activeName" class="tabs" type="card" @tab-click="handleClick">
        <el-tab-pane label="回访信息" name="first">
          <div class="filter-container-crm filter-params-crm">
            <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
            <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
            <crmGroupForm :dynamicComponentss="infoComponents[3].tableComponents" :values="formField" />
            <crmGroupForm :dynamicComponentss="infoComponents[4].tableComponents" :values="formField" />
            <crmGroupForm :dynamicComponentss="infoComponents[5].tableComponents" :values="formField" />
            <crmGroupForm :dynamicComponentss="infoComponents[6].tableComponents" :values="formField" />
            <crmGroupForm :dynamicComponentss="infoComponents[7].tableComponents" :values="formField" />
            <crmGroupForm :dynamicComponentss="infoComponents[8].tableComponents" :values="formField" />
            <crmGroupForm v-show="zbflag" :dynamicComponentss="infoComponents[9].tableComponents" :values="formField" />
            <crmGroupForm v-show="zbflag" :dynamicComponentss="infoComponents[10].tableComponents" :values="formField" />
            <crmGroupForm v-show="skflag" :dynamicComponentss="infoComponents[11].tableComponents" :values="formField" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="回访话术" name="second">
          <div class="filter-container-crm filter-params-crm">
            <div style="width:50%;float:left">
            <one-table-template
              ref="multipleTable2"
              :dynamicTableCols="infoComponents[14].tableCols"
              :dynamicIsShowSelect="false"
              :isShowPagination="false"
              :dynamicIsInitTable="false"
              :dynamicApiConfig="infoComponents[14].apiConfig"
              :dynamicFormFields="infoComponents[14].formField"
            />
            </div>
            <div style="width:50%;float:right">
              <crmGroupForm :dynamicComponentss="infoComponents[12].tableComponents" :values="formField" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <div class="filter-container-crm filter-params-crm">
        <one-table-template
          ref="multipleTable"
          :dynamicTableCols="infoComponents[13].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="false"
          :dynamicApiConfig="infoComponents[13].apiConfig"
          :dynamicFormFields="infoComponents[13].formField"
        />
      </div>
    </el-form>
  </div>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/crm/table/crmOnetable";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import crmGroupSubmit from "@/components/crm/commonComponents/crmGroupSubmit";
export default {
  name: "ActivityTracking",
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
      zbflag:false,
      skflag:false,
      infoComponents: [
        {
          title: "新车意向跟进",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "电话",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "客户来源",
              codeField: "",
              isMul: false,
              disabled:true,
              lookuptype: "VE0114",
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey4",
              labelName: "号牌状态",
              codeField: "",
              isMul: false,
              disabled:true,
              lookuptype: "DB0061",
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey5",
              labelName: "意向车型",
              codeField: "",
              textField: "",
              isRequire: false,
              isMust: true,
              disabled:true,
              component: () => import("@/components/crm/crmEjectWindows/crmCartype/index")
            },
            {
              compKey: "compKey6",
              labelName: "意向颜色",
              codeField: "carColorId",
              textField: "carColorId",
              isRequire: false,
              isMust: true,
              isMul: false,
              disabled:true,
              lookuptype: crmApis.mdmCarSeriesColorQueryList,
              component: () => import("@/components/crm/lookupValue/secondDropList")
            },
            {
              compKey: "compKey7",
              labelName: "购车预算",
              codeField: "",
              isMul: false,
              disabled:true,
              lookuptype: "APPVE9527_09",
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey8",
              labelName: "意向级别",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              disabled:true,
              lookuptype: "LX141",
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey9",
              labelName: "是否信贷",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              disabled:true,
              lookuptype: "DB0064",
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey10",
              labelName: "是否大客户",
              codeField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              disabled:true,
              lookuptype: "DB0064",
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey11",
              labelName: "大客户类型",
              codeField: "bankCode",
              isRequire: false,
              isMust: true,
              isMul: false,
              disabled:true,
              lookuptype: "VE0013",
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        {
          title: "回访信息",
          tableComponents: [
            {
              compKey: "compKey12",
              labelName: "本次回访日期",
              codeField: "",
              isRequire: true,
              span: 8,
              component: () => import("@/components/crm/Time/crmdtDatePicker"),
              type: "inputText"
            },
            {
              compKey: "compKey13",
              labelName: "本次意向级别",
              codeField: "",
              isRequire: true,
              isMust: true,
              isMul: false,
              span: 8,
              lookuptype: "LX141",
              changeCode: this.changeYXL,
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey14",
              labelName: "本次意向车型",
              codeField: "",
              textField: "",
              isRequire: true,
              isMust: true,
              span: 8,
              component: () => import("@/components/crm/crmEjectWindows/crmCartype/index")
            },
            {
              compKey: "compKey15",
              labelName: "本次意向颜色",
              codeField: "carColorId",
              textField: "carColorId",
              isRequire: true,
              isMust: true,
              isMul: false,
              span: 8,
              lookuptype: crmApis.mdmCarSeriesColorQueryList,
              component: () => import("@/components/crm/lookupValue/secondDropList")
            },
            {
              compKey: "compKey16",
              labelName: "本次竞争车系",
              codeField: "",
              textField: "",
              isRequire: false,
              isMust: true,
              isMul: false,
              span: 8,
              component: () => import("@/components/crm/crmEjectWindows/crmCompetitiveCar/index")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey17",
              labelName: "本次活动场所",
              codeField: "",
              isMul: false,
              isRequire: true,
              lookuptype: "",
              span: 8,
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey18",
              labelName: "本次接触方式",
              codeField: "",
              isMul: false,
              isRequire: true,
              lookuptype: "",
              span: 8,
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey19",
              labelName: "本次购车预算",
              codeField: "",
              isMul: false,
              isRequire: true,
              lookuptype: "APPVE9527_09",
              span: 8,
              component: () => import("@/components/crm/lookupValue/lookupvalue")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey20",
              labelName: "购车要素",
              codeField: "",
              textField: "",
              isRequire: false,
              isMust: true,
              span: 16,
              component: () => import("@/components/crm/crmEjectWindows/crmCartype/index")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey21",
              labelName: "本次回访内容",
              codeField: "",
              isRequire: true,
              isMust: true,
              span: 16,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey22",
              labelName: "下次回访日期",
              codeField: "",
              isRequire: true,
              isMust: true,
              span: 8,
              component: () => import("@/components/crm/Time/crmdatePicker")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey23",
              labelName: "下次回访内容",
              codeField: "",
              isRequire: false,
              isMust: true,
              span: 16,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey24",
              labelName: "更新销售指引",
              codeField: "",
              textField: "",
              isRequire: false,
              isMust: true,
              span: 16,
              component: () => import("@/components/crm/crmEjectWindows/crmCartype/index")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey25",
              labelName: "战败车型",
              codeField: "",
              textField: "",
              isRequire: true,
              isMust: true,
              span: 8,
              component: () => import("@/components/crm/crmEjectWindows/crmCartype/index")
            },
            {
              compKey: "compKey26",
              labelName: "战败原因",
              codeField: "",
              textField: "",
              isRequire: true,
              isMust: true,
              span: 8,
              component: () => import("@/components/crm/crmEjectWindows/crmDefeatReason/index")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey27",
              labelName: "战败说明",
              codeField: "",
              isRequire: false,
              isMust: true,
              span: 16,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "",
          tableComponents: [
            {
              compKey: "compKey28",
              labelName: "失控原因",
              codeField: "",
              textField: "",
              isRequire: true,
              isMust: true,
              span: 8,
              component: () => import("@/components/crm/crmEjectWindows/crmLostReason/index")
            }
          ]
        },
        {
          title: "话术详情",
          tableComponents: [
            {
              compKey: "compKey29",
              labelName: "活动主题",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled:true,
              span: 24,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey30",
              labelName: "话术类别",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled:true,
              span: 24,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey31",
              labelName: "问题",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled:true,
              span: 24,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey32",
              labelName: "答案",
              codeField: "",
              isRequire: false,
              isMust: true,
              disabled:true,
              span: 24,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          apiConfig:crmApis.csDbNodeQueryFindAll,//联系人信息
          title: "历史跟踪网格",
          tableButtons: [
          ],
          formField:{
            oemCode:"1",
            groupCode: "1",
          },
          tableCols: [
            {
              prop: "",
              label: "活动类型",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "活动名称",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "销售顾问",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "计划回访时间",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "回访内容",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "回访方式",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "活动来源",
              width: null,
              align: "center"
            }
          ]
        },
        {
          apiConfig:crmApis.csDbNodeQueryFindAll,//联系人信息
          title: "历史跟踪网格",
          tableButtons: [
          ],
          formField:{
            oemCode:"1",
            groupCode: "1",
          },
          tableCols: [
            {
              prop: "",
              label: "活动主题",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "话术类别",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "问题",
              width: null,
              align: "center"
            },
            {
              prop: "",
              label: "答案",
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
      switch (val) {
        case "F":
          that.zbflag=true;
          that.skflag=false;
          break;
        case "L":
          that.zbflag=false;
          that.skflag=true;
          break;
        default:
          that.zbflag=false;
          that.skflag=false;
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
