<!--
* description: 关键信息维护审核
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
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[2].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
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
  name: "keyInfo",
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
       //0
        //原信息个人0
        {
          title: "原信息",
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
              compKey: "compKey18",
              labelName: "电话",
              codeField: "telphone",
              isRequire: false,
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
        //新信息个人1
        {
          title: "新信息",
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
              compKey: "compKey18",
              labelName: "电话",
              codeField: "telphone",
              isRequire: false,
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
        //审核信息2
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
