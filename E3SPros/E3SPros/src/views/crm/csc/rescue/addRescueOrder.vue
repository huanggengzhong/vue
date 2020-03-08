<!--
* description: 追加救援单
* author: lzhihui
* createdDate: 2019-10-23
-->
<template>
  <div class="app-container app-container-table">
    
    <crmGroupSubmit :formSubmitButton="formSubmitButton" />
    <el-form class="editPer filter-params-crm-scroll crm-s-scroll edit">
      <el-steps :active="active" finish-status="success">
          <el-step title="建单"></el-step>
          <el-step title="派单"></el-step>
          <el-step title="处理"></el-step>
          <el-step title="回访"></el-step>
          <el-step title="结案"></el-step>
        </el-steps>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[1].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[3].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[3].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[4].tableComponents" :values="formField" />
      </div>
      <!-- 督办记录 5 -->
      <div class="filter-container-crm filter-title-crm" >{{infoComponents[5].title}}</div>
      <div class="filter-container-crm filter-params" >
        <!-- :dynamicButtons="infoComponents[5].tableButtons" -->
        <one-table-template
          ref="multipleTable"
          :dynamicTableCols="infoComponents[5].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
          :dynamicIsInitTable="true"
          :dynamicApiConfig="infoComponents[5].apiConfig"
          :dynamicFormFields="infoComponents[5].formField"
        />
      </div>
      <!-- 追加内容 6 -->
      <div class="filter-container-crm filter-title-crm">{{infoComponents[6].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[6].tableComponents" :values="formField" />
        <crmGroupForm :dynamicComponentss="infoComponents[7].tableComponents" :values="formField" />
      </div>

      <edit
        :dynamicEditRowData="editRowData"
        :popupsVisible="editPopupsVisibleeditPopupsVisible"
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
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import OneTableTemplate from "@/components/crm/table/crmOnetable";


export default {
  name: "editPer",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    crmGroupForm,
    crmGroupSubmit,
    edit,
    OneTableTemplate,
  },
  props: {},
  data() {
    return {
      active : 3,
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
        // 客户车辆信息   0
        {
          title: "客户车辆信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "custName",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "客户性别",
              codeField: "custClassCode",
              lookuptype: "BASE0005",
              disabled: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey3",
              labelName: "电话",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "备用电话",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "用车人名称",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "用车人性别",
              codeField: "custClassCode",
              lookuptype: "BASE0005",
              disabled: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey4",
              labelName: "用车人电话",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "备用电话",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "车系",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "车牌号",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "VIN码",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "发动机号",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "车辆品牌",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "车型",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "号码归属地",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "车辆归属地",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },
        {
          title: "单据信息",
          tableComponents: [
            {
              compKey: "compKey4",
              labelName: "服务单号",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "咨询日期",
              codeField: "dutyperson",
              component: () => import("@/components/crm/Time/crmdatePicker"),
              type: "inputText",
              disabled: true,
            },
            {
              compKey: "compKey5",
              labelName: "信息来源",
              codeField: "custClassCode",
              lookuptype: "DB0017",
              disabled: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey4",
              labelName: "咨询次数",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "服务类别",
              codeField: "addrStreet",
              span: 12,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "相关基准车系",
              codeField: "addrStreet",
              span: 12,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "责任网点",
              codeField: "addrStreet",
              span: 12,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "责任部门",
              codeField: "addrStreet",
              span: 12,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "责任人",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "责任人电话",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
           

          ]
        },
        {
          
          title: "",
          tableComponents: [
             {
              compKey: "compKey17",
              labelName: "派工说明",
              codeField: "addrStreet",
              span: 12,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "备注",
              codeField: "addrStreet",
              span: 12,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
          ]
        },

        //TODO:缺少网格

        {
          title: "处理信息",
          tableComponents: [
           {
              compKey: "compKey18",
              labelName: "救援车牌",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "救援次数",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "救援车型",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "处理时间",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "出车时间",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "到达时间",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            

          ]
        },
        {
          title: "",
          tableComponents: [
           {
              compKey: "compKey18",
              labelName: "救援地点总里程",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "故障车辆里程  ",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "故障原因",
              codeField: "custClassCode",
              lookuptype: "LX005",
              disabled: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey5",
              labelName: "解决方式",
              codeField: "custClassCode",
              lookuptype: "LX005",
              disabled: true,
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
             {
              compKey: "compKey18",
              labelName: "出车费",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "吊车费用",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "其他费用",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey18",
              labelName: "合计费用",
              codeField: "phone",
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "处理内容",
              codeField: "addrStreet",
              span: 12,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },

          ]
        },
        // 督办记录 5
        {
          apiConfig: crmApis.clueServerQueryFromDlr, //线索单查询
          title: "督办记录",
          // tableButtons: [
          //   {
          //     // compKey: "btnKey3",
          //     // type: "",
          //     // size: "small",
          //     // clickEvent: () => this.add(),
          //     // text: "新增"
          //   }
          // ],
          formField: {
            statusArray: ["10", "20", "21", "30", "31", "40", "50"],
            handleCode: "1"
          },
          tableCols: [
            // {
            //   prop: "controlBtn",
            //   label: "操作",
            //   codeField: "controlBtn",
            //   width: 200,
            //   align: "center",
            //   isComponent: true,
            //   comps: [
            //     // {
            //     //   compKey: "propKey1",
            //     //   labelName: "修改",
            //     //   codeField: "editControlBtn",
            //     //   clickEvent: index => {
            //     //     this.edituser(index);
            //     //   },
            //     //   component: () => import("@/components/org/linkButton"),
            //     //   align: "center"
            //     // },
            //     // {
            //     //   compKey: "propKey2",
            //     //   labelName: "删除",
            //     //   codeField: "editControlBtn",
            //     //   clickEvent: index => {
            //     //     this.delet(index);
            //     //   },
            //     //   component: () => import("@/components/org/linkButton"),
            //     //   align: "center"
            //     // }
            //   ]
            // },
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

        //追加内容1 6
        {
          title: "追加内容",
          tableComponents: [
            {
              compKey: "compKey17",
              labelName: "摘要",
              codeField: "addrStreet",
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },

          ]
        },
        //追加内容2 7
        {
          title: "追加内容",
          tableComponents: [
            {
              compKey: "compKey17",
              labelName: "追加故障描述",
              codeField: "addrStreet",
              isRequire: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "追加客户要求",
              codeField: "addrStreet",
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "追加坐席回答",
              codeField: "addrStreet",
              isRequire: true,
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "追加派工说明",
              codeField: "addrStreet",
              span: 12,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey17",
              labelName: "备注",
              codeField: "addrStreet",
              span: 12,
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
      apiConfig: crmApis.createdOneIdMutationSaveCust, //客户信息-修改客户信息
      formSubmitButton: [
 
        {
          compKey: "buttonKey2",
          text: "导出",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        },
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
        edit: "维护个人客户",
        add: "新建个人客户"
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
      debugger;
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
/* style scoped以下样式不起作用 */
/* .filter-button {
     text-align: right; 
     width: 100%; 
    padding: 0px;
    background: transparent; 
     border: none;
    min-height: 0px;
} */
</style>
