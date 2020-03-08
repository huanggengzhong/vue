/*
 * @Author: xgz 
 * @Date: 2019-10-16 14:36:29 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-10-16 16:16:29
 * 改为混入,这个页面没有API
 */
<template>
  <div class="app-container app-container-table">
    <!-- 单网格查询  -->
    <one-table-template
      ref="multipleTable"
      :dynamicSearchField="searchField"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicIsShowSelect="false"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowMoreBtn="true"
    />
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
import { CacheConfig } from "@/cache/configCache/index";
import { debuglog } from "util";

export default {
  name: "LostPhoneCallBack",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      searchField:"请输入搜索内容",
      apiConfig: crmApis.csBuComplaintOrderQueryFindAll, //假的API
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: "刷新"
        // }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey0",
                labelName: "热线类型",
                codeField: "serverLevel",
                lookuptype: "LX009",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul: false
              }
            ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "处理",
          codeField: "controlBtn",
          width: 60,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "处理",
              codeField: "editControlBtn",
              clickEvent: this.handle,
              component: () => import("@/components/org/linkButton"),
              isMust: true
            }
          ]
        },
        { prop: "statusName", label: "主叫号码", width: null, align: "center" },
        {
          prop: "createdDate",
          label: "话务组",
          width: null,
          align: "center"
        },
        {
          prop: "caseTime",
          label: "挂断类型",
          width: null,
          align: "center"
        },
        {
          prop: "serverOrder",
          label: "系统时间",
          width: null,
          align: "center"
        },
        {
          prop: "custName",
          label: "ACD时间",
          width: null,
          align: "center"
        },
        {
          prop: "contactTel",
          label: "ACD时长(s)",
          width: null,
          align: "center"
        },
        {
          prop: "empName",
          label: "振铃时长(s)",
          width: null,
          align: "center"
        }
      ],
      formField: {
        oemCode: "1",
        groupCode: "1",
        serverLevel: ""
      }
    };
  },
  methods: {
    // 处理
    handle(index, row) {
      let rowData = this.$refs.multipleTable.currentRow;
      this.$router.push({ name: "LostPhoneCallbackDeal", params: rowData });
    }
  }
};
</script>