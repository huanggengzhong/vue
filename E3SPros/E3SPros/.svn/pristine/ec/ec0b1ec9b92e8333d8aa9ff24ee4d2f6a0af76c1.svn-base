<!--
* description: 追加救援单
* createdDate: 2019-10-19
-->
<template>
  <div>
    <div style="background-color: white; margin-top: -5px; margin-bottom: 10px;">
        <el-steps :active="active" finish-status="success">
        <el-step title="建单"></el-step>
        <el-step title="派单"></el-step>
        <el-step title="处理"></el-step>
        <el-step title="回访"></el-step>
        <el-step title="结案"></el-step>
    </el-steps>
    </div>
    <crmGroupSubmit :formSubmitButton="formSubmitButton"/>
    <el-form class="editPer filter-params-crm-scroll crm-s-scroll">
      <div class="filter-container-crm filter-title-crm">{{infoComponents[0].title}}</div>
      <div class="filter-container-crm filter-params-crm">
        <crmGroupForm :dynamicComponentss="infoComponents[0].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[1].title}}</div>
      <div class="filter-container-crm filter-params">
        <crmGroupForm :dynamicComponentss="infoComponents[1].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[2].title}}</div>
      <div class="filter-container-crm filter-params">
        <crmGroupForm :dynamicComponentss="infoComponents[2].tableComponents" :values="formField" />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[3].title}}</div>
      <div class="filter-container-crm filter-params">
        <one-table-template
          ref="multipleTable"
          :dynamicTableCols="infoComponents[3].tableCols"
          :dynamicIsShowSelect="false"
          :isShowPagination="false"
        />
      </div>
      <div class="filter-container-crm filter-title-crm">{{infoComponents[4].title}}</div>
      <div class="filter-container-crm filter-params">
        <crmGroupForm :dynamicComponentss="infoComponents[4].tableComponents" :values="formField" />
      </div>
    </el-form>
  </div>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import crmGroupForm from "@/components/crm/commonComponents/crmGroupForm";
import crmGroupSubmit from "@/components/crm/commonComponents/crmGroupSubmit";
import crmTextInput from "@/components/crm/textbox/crmTextInput";
import lookupvalue from "@/components/crm/lookupValue/lookupvalue";
import OneTableTemplate from "@/components/crm/table/crmOnetable";
export default {
  name: "addRescue",
  // 组件混入对象
  mixins: [formMixins],
  components: {
    crmGroupForm,
    crmGroupSubmit,
    crmTextInput,
    lookupvalue,
    OneTableTemplate
  },
  props: {},
  data() {
    return {
      active: 1,
      ismore: false,
      ismutiple: false,
      limit: 1,
      showedit: false,
      params: {},
      nagflag: true,
      posflag: false,
      flag: true,
      infoComponents: [
        {
          title: "客户车辆信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "客户名称",
              codeField: "custName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "客户性别",
              codeField: "gender",
              isMul: false,
              disabled: true,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
            {
              compKey: "compKey3",
              labelName: "电话",
              codeField: "contactTel",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "备用电话",
              codeField: "backupTel",
              disabled: true,    
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
           {
              compKey: "compKey5",
              labelName: "用车人名称",
              codeField: "useCustName",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "用车人性别",
              codeField: "useGenderCode",
              isMul: false,
              disabled: true,
              lookuptype: "DB0022",
              component: () =>
                import("@/components/crm/lookupValue/lookupvalue")
            },
             {
              compKey: "compKey7",
              labelName: "用车人电话",
              codeField: "usePhone",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey8",
              labelName: "备用电话",
              codeField: "useBackupTel",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "车系",
              codeField: "vCarseriesDesc",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey10",
              labelName: "车牌号",
              codeField: "carLicense",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey11",
              labelName: "VIN码",
              codeField: "vin",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey12",
              labelName: "发动机号",
              codeField: "engineNo",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "车辆品牌",
              codeField: "carBrandCn",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey13",
              labelName: "车型",
              codeField: "vCartypeDesc",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey14",
              labelName: "号码归属地",
              codeField: "Numattr",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey15",
              labelName: "车辆归属地",
              codeField: "vCarNumattr",
              disabled: true,
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "服务信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "服务单号",
              codeField: "dataInfo",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "救援类型",
              codeField: "oemCode",
              isMul: false,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "救援地点",
              codeField: "groupCode",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "所在地标志物",
              codeField: "serverType",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey5",
              labelName: "责任网点",
              codeField: "serverId",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
           {
              compKey: "compKey6",
              labelName: "故障描述",
              codeField: "serverOrder",
              isMust: true,
              disabled: true,
              inputType: "textarea",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey7",
              labelName: "客户要求",
              codeField: "crruNode",
              isMul: false,
              disabled: true,
              inputType: "textarea",
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
             {
              compKey: "compKey8",
              labelName: "坐席回答",
              codeField: "linkCarType",
              inputType: "textarea",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "派工说明",
              codeField: "linkCarName",
              inputType: "textarea",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey10",
              labelName: "备注",
              codeField: "baseSeriesCode",
              inputType: "textarea",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "处理信息",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "救援车牌",
              codeField: "baseSeriesName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "救援车型",
              codeField: "carBrandCode",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "救援次数",
              codeField: "serverBrandCode",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "处理时间",
              codeField: "serverClassCode",
              isMust: true,
              disabled: true,
              component: () =>  import("@/components/crm/Time/crmdatePicker"),
              type: "date",
            },
            {
              compKey: "compKey5",
              labelName: "出车时间",
              codeField: "bigClassCode",
              isMust: true,
              disabled: true,
              component: () =>  import("@/components/crm/Time/crmdatePicker"),
              type: "date",
            },
            {
              compKey: "compKey6",
              labelName: "到达时间",
              codeField: "serverFullClassName",
              isMust: true,
              disabled: true,
              component: () =>  import("@/components/crm/Time/crmdatePicker"),
              type: "date",
            },
            {
              compKey: "compKey7",
              labelName: "救援地点总里程",
              codeField: "serverAttrCode",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey8",
              labelName: "故障车辆里程",
              codeField: "dutyOrgCode",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey9",
              labelName: "故障原因",
              codeField: "dutyOrgName",
              isMust: true,
              disabled: true,
              lookuptype: "",
              component: () => import("@/components/crm/lookupValue/lookupvalue"),
              type: "",
            },
            {
              compKey: "compKey10",
              labelName: "解决方式",
              codeField: "dealOrgCode",
              isMust: true,
              disabled: true,
              lookuptype: "",
              component: () => import("@/components/crm/lookupValue/lookupvalue"),
              type: "",
            },
            {
              compKey: "compKey11",
              labelName: "出车费",
              codeField: "dealOrgName",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey12",
              labelName: "吊车费用",
              codeField: "serverTitle",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
             {
              compKey: "compKey13",
              labelName: "其他费用",
              codeField: "serverAnswer",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey14",
              labelName: "合计费用",
              codeField: "complainDesc",
              isMust: true,
              disabled: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey15",
              labelName: "处理内容",
              codeField: "custRequirement",
              isMust: true,
              disabled: true,
              inputType: 'textarea',
              component: () => import("@/components/crm/textbox/crmTextInput")
            }
          ]
        },
        {
          title: "督办记录",
          tableCols: [
            {
              prop: "carLicenseNo",
              label: "服务单号",
              width: null,
              align: "center"
            },
            {
              prop: "custClassCode",
              label: "客户名称",
              width: null,
              align: "center"
            },
            {
              prop: "uid",
              label: "呼叫结果",
              width: null,
              align: "center"
            },
            {
              prop: "custName",
              label: "督办人",
              width: null,
              align: "center"
            },
            {
              prop: "phone",
              label: "督办时间",
              width: null,
              align: "center"
            },
            {
              prop: "custName",
              label: "监控状态",
              width: null,
              align: "center"
            },
            {
              prop: "custName",
              label: "沟通内容",
              width: null,
              align: "center"
            },
            {
              prop: "custName",
              label: "备注",
              width: null,
              align: "center"
            }
          ]
        },
        {
          title: "追加内容",
          tableComponents: [
            {
              compKey: "compKey1",
              labelName: "摘要",
              codeField: "nextDealUserName",
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey2",
              labelName: "追加故障描述",
              codeField: "nextDealEmpId",
              inputType: 'textarea',
              isRequire: true,
              isMul: false,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey3",
              labelName: "追加客户要求",
              codeField: "nextDealEmpName",
              inputType: 'textarea',
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey4",
              labelName: "追加坐席回答",
              codeField: "nextDealOrgId",
              isRequire: true,
              inputType: 'textarea',
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
           {
              compKey: "compKey5",
              labelName: "追加派工说明",
              codeField: "nextDealOrgName",
              inputType: 'textarea',
              isMust: true,
              component: () => import("@/components/crm/textbox/crmTextInput")
            },
            {
              compKey: "compKey6",
              labelName: "备注",
              codeField: "remark",
              isMul: false,
              inputType: 'textarea',
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
      apiConfig: '', //
      formSubmitButton: [
        {
          compKey: "buttonKey1",
          text: "知识库",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        },
        {
          compKey: "buttonKey2",
          text: "地图",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        },
        {
          compKey: "buttonKey3",
          text: "外拨",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        },
        {
          compKey: "buttonKey4",
          text: "保存",
          size: "small",
          type: "",
          clickEvent: () => this.save(),
          isShow: true
        },
        {
          compKey: "buttonKey5",
          text: "暂存",
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
        edit: "追加救援单",
        add: "新建救援单"
      },
      formField: {
        custName:'',
        gender:'',
        contactTel:'',
        backupTel:'',
        useCustName:'',
        useGenderCode:'',
        usePhone:'',
        useBackupTel:'',
        vCarseriesDesc:'',
        carLicense:'',
        vin:'',
        engineNo:'',
        carBrandCn:'',
        vCartypeDesc:'',
        Numattr:'',
        vCarNumattr:''
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
    }
  }
};
</script>
