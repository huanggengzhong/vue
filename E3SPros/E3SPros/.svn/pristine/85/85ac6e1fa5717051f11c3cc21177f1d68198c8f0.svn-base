<!--
* description: 试乘试驾管理-反馈
* author: zouzx
* createdDate: 2019-10-10
-->
<template>
  <section>
    <el-dialog
      class="editsettingPrice"
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="curPopupsVisible"
      @close="sendCode"
      width="1000px"
    >
      <div class="filter-container filter-params">
        <one-table-template
          ref="multipleTable"
          :dynamicButtons="tableButtons"
          :dynamicComponents="tableComponents"
          :dynamicFormFields="formField"
          :dynamicApiConfig="apiConfig"
          :dynamicTableCols="tableCols"
          :dynamicIsShowSelect="false"
          :dynamicIsShowMoreBtn="false"
          :dynamicIsInitTable="true"
          :isshowSearchTableButton="true"
          :isshowSearchConTile="false"
          :isshowSearchCon="false"
          :isshowSearchResult="false"
        />
      </div>
      <!-- <div
        slot="footer"
        class="dialog-footer"
      >
      </div> -->
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { crmApis } from "@/api/graphQLApiList/crm";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  name: "handle",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  props: {
    historyPopupsVisible: { type: Boolean, default: false },
    // 弹窗状态（add/edit/view）
    // 新增、编辑弹窗Key
    historyPopupsKey: "",
    // 新增、编辑弹窗状态（add/edit/view）
    historyPopupsState: "",
    // 新增、编辑行对象
    historyRowData: {},
    // 弹窗状态（add/edit/view）
    popupsState: ""
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.enable(1),
          text: "保存"
        }
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 内饰色
        {
          compKey: "compKey1",
          labelName: "评价类型",
          codeField: "carBrandCode",
          isRequire: true,
          lookuptype: "VE0059",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        // 车身颜色
        {
          compKey: "compKey2",
          labelName: "评价项",
          codeField: "",
          isRequire: true,
          lookuptype: "VE0059",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey3",
          labelName: "评价结果",
          codeField: "",
          isRequire: true,
          lookuptype: "VE0059",
          component: () => import("@/components/crm/lookupValue/lookupvalue"),
          type: "dropdownList",
          isMust: true
        },
        {
          compKey: "compKey4",
          labelName: "备注",
          codeField: "",
          component: () => import("@/components/crm/textbox/crmTextInput"),
          type: "inputText",
          isMust: true
        }
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "",
          label: "评价类型",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "评价类型",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "评价结果",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "评价时间",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "评价人",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "备注",
          width: null,
          align: "center"
        }
      ],
      // 标题
      textMap: {
        edit: "反馈"
      },
      //表单查询数据
      formField: {
        carConfigId: "",
        carSeriesId: "",
        dlrId: "",
        carBrandCode: "",
        validBeginDate: "",
        validEndDate: ""
      },
      isUseRowData: true
    };
  },
  created() {
    // 赋值formField
    if (this.popupsState === "edit") {
        debugger
      if (this.isUseRowData) {
        for (var key in this.formField) {
          if (this.$attrs.dynamicEditRowData[key]) {
            this.formField[key] = this.$attrs.dynamicEditRowData[key];
          } else {
            this.formField[key] = "";
          }
        }
      }
    }
  },
  methods: {
      enable(val) {
          let that=this;
          debugger
      }
  }
};
</script>
<style scoped>
</style>

