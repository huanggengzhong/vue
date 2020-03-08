<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicTableCols="tableCols"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="true"
      :dynamicIsShowMoreBtn="true"
    />
    <div>
      <edit ref="whrfDutyPeople" :swd_DutyPeople="whDutyPeople" @CatData="getarr"></edit>
    </div>
  </div>
</template>

<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from "@/cache/configCache/index";
import Edit from "@/views/crm/coc/edit.vue";
import swd_DutyPeople from "@/views/crm/coc/edit"; //责任人 弹出框

export default {
  name: "crmcustFollowShare",
  components: {
    OneTableTemplate,
    swd_DutyPeople,
    Edit
  },
  mixins: [oneTableWithViewTemplateMixins],
  data() {
    return {
      cxnodeCode: "",
      apiConfig: "",
      whDutyPeople: {
        input: "",
        dialogVisible: false
      },
      tableButtons: [
        {
          compKey: "assign",
          type: "primary",
          size: "small",
          clickEvent: () => this.getarr1(),
          text: "指定"
        },
        {
          compKey: "btnKey4",
          type: "",
          size: "small",
          clickEvent: () =>
            this.exportExcel(("数据导出日志", "数据导出日志", "99999")),
          text: "导出"
        }
      ],
      tableCols: [
        {
          prop: "select",
          label: "选择",
          width: null,
          align: "center"
        },
        {
          prop: "customerName",
          label: "客户名称",
          width: null,
          align: "center"
        },
        { prop: "sex", label: "姓别", width: null, align: "center" },
        {
          prop: "contactWay",
          label: "接触方式",
          width: null,
          align: "center"
        },
        {
          prop: "firstReceptionTime",
          label: "第一次接待时间",
          width: null,
          align: "center"
        },
        {
          prop: "lastReceptionTime",
          label: "最后一次接待时间",
          width: null,
          align: "center"
        },
        {
          prop: "intentionRank",
          label: "意向级别",
          width: null,
          align: "center"
        },
        {
          prop: "payVisitNum",
          label: "回访次数",
          width: null,
          align: "center"
        }
      ],
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "客户名称",
                codeField: "userName",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "建档日期",
                codeField: "startFilingTime,endFilingTime",
                component: () =>
                  import("@/components/crm/Time/crmdtDatePicker"),
                type: "date",
                isRequire: false,
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "最近访问日期",
                codeField: "startVisitTime,endVisitTime",
                component: () =>
                  import("@/components/crm/Time/crmdtDatePicker"),
                type: "date",
                isRequire: false,
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "意向级别",
                codeField: "intentionRank",
                lookuptype: "LX141",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "",
                isRequire: false,
                isMust: false
              }
            ],
      // 表单查询数据
      formField: {
        userName: "",
        startFilingTime: "",
        endFilingTime: "",
        startVisitTime: "",
        endVisitTime: "",
        intentionRank: ""
      }
    };
  },
  methods: {
    getarr1() {
      this.whDutyPeople.dialogVisible = true;
      this.$refs.whrfDutyPeople.getData();
    },
    getarr(cityTemp) {
      this.$alert("指定成功", "提示信息", {
        confirmButtonText: "确定"
        // callback: action => {
        //   this.$message({
        //     type: "info",
        //     message: `action: ${action}`
        //   });
        // }
      });
    }
  }
};
</script>