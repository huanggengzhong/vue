<!--
* description: 车辆产品价格补贴设置  历史价格查询
* author: liyanm
* createdDate: 2019-08-06
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
          :dynamicIsShowMoreBtn="false"
          :dynamicIsInitTable="true"
          :isshowSearchTableButton="false"
          :isshowSearchConTile="false"
          :isshowSearchCon="false"
          :isshowSearchResult="false"
        />
      </div>
      <div slot="footer" class="dialog-footer"></div>
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins} from "@/components/mixins/oneTableWithViewTemplateMixins";
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  name: "orghistory",
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
    popupsState: "",
    // 从网格传入的编辑行数据(json)
    dynamicEditRowData: { type: Object, default: function() { return {} } }
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: orgApis.veBuDlrSubsidyHistoryQueryList,
      // 动态生成网格列
      tableCols: [
        {
          prop: "countrySubsidy",
          label: "国家补贴",
          width: null,
          align: "center"
        },
        {
          prop: "areaSubsidy",
          label: "地方补贴",
          width: null,
          align: "center"
        },
        {
          prop: "otherSubsidy",
          label: "其他调减",
          width: null,
          align: "center"
        },
        {
          prop: "priceValidBeginDate",
          label: "开始日期",
          width: null,
          align: "center"
        },
        {
          prop: "priceValidEndDate",
          label: "有效结束日期",
          width: null,
          align: "center"
        },
        { prop: "modifyName", label: "修改人", width: null, align: "center" },
        {
          prop: "lastUpdatedDate",
          label: "修改日期",
          width: null,
          align: "center"
        }
      ],
      // 标题
      textMap: {
        edit: "历史价格"
      },
      listQuery: {
        pageSize: 10,
        pageIndex: 1
      },
      //表单查询数据
      formField: {
        carConfigId: "",
        dlrId: "",
        carBrandCode: "",
      },
      isUseRowData: true
    };
  },
  created() {
    // 赋值formField
    if (this.popupsState === "edit") {
      if (this.isUseRowData) {
        for (var key in this.formField) {
          if (this.dynamicEditRowData[key]) {
            this.formField[key] = this.dynamicEditRowData[key];
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
<style scoped>
</style>

