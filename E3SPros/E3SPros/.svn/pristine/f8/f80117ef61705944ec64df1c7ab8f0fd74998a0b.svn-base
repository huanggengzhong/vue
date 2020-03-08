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
    <edit
      :dynamicEditRowData="editRowData"
      :popupsVisible="editPopupsVisible"
      :key="editPopupsKey"
      :popupsState="editPopupsState"
      @close="close"
    ></edit>
  </div>
</template>

<script>
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { CacheConfig } from "@/cache/configCache/index";
import Edit from "./edit";
export default {
  name: "crmCommodManange",
  components: {
    OneTableTemplate,
    Edit
  },
  mixins: [oneTableWithViewTemplateMixins],
  data() {
    return {
      tableButtons: [
        {
          compKey: "add",
          type: "primary",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        }
      ],
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "商品类型",
                codeField: "commodType",
                lookuptype: "LX183",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "商品名称",
                codeField: "commodId",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "商品编码",
                codeField: "commodCode",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey4",
                labelName: "是否启用",
                codeField: "isUsering",
                lookuptype: "LX003",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "",
                isMust: false
              }
            ],
      formField: {
        commodType: "",
        commodId: "",
        commodCode: "",
        isUsering: ""
      },
      tableCols: [
        {
          prop: "operation",
          label: "操作",
          width: null,
          align: "center",
          comps: [
            {
              compKey: "propKey0",
              labelName: "修改",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton")
            }
          ]
        },
        {
          prop: "commodType",
          label: "商品类型",
          width: null,
          align: "center"
        },
        {
          prop: "commodId",
          label: "商品名称",
          width: null,
          align: "center"
        },
        {
          prop: "commodCode",
          label: "商品编码",
          width: null,
          align: "center"
        },
        {
          prop: "isUsering",
          label: "是否启用",
          width: null,
          align: "center"
        }
      ],
      apiConfig: "",
      dialogVisible: false,
      options: []
    };
  },
  methods: {
    handleAddClick() {
      this.dialogVisible = true;
    },
    handleAffirmClick() {
      this.dialogVisible = false;
    }
  }
};
</script>