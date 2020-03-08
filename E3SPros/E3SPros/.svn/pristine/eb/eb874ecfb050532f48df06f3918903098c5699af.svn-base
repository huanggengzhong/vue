<!--
* description: 到店确认
* author: zouzx
* createdDate: 2019-10-17
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
          :dynamicApiConfig="apiConfig"
          :dynamicTableCols="tableCols"
          :dynamicFormFields="formField"
          :dynamicIsShowSelect="false"
          :dynamicIsInitTable="true"
          :dynamicIsColumnDrop="false"
        />
      </div>

    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";

export default {
  name: "detail",
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
      apiConfig: crmApis.pcDbCantactWayMutationSaveById,
      // 动态组件-按钮
      tableButtons: [],
      // 动态组件-查询条件
      tableComponents: [],
      // 动态生成网格列
      tableCols: [
        {
          prop: "",
          label: "车系编码",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "车系名称",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "垂直媒体",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "垂直媒体车系编码",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "垂直媒体车系名称",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "是否有效",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "备注",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "操作",
          width: null,
          align: "center"
        },
        {
          prop: "",
          label: "操作时间",
          width: null,
          align: "center"
        }
      ],
      // 标题
      textMap: {
          edit: "车系中文对照校对历史"
      },
      //表单查询数据
      formField: {
        id:""
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
  }
};
</script>
<style>
</style>

