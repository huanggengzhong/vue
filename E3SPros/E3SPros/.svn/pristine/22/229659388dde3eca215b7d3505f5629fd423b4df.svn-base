/*
 * @Author: xgz
 * @Date: 2019年10月7日09:47:56
 * @Last Modified by:
 * @Last Modified time: 2019年10月7日09:47:56
 */

<template>
  <div class="app-container app-container-table">
    <!-- 单网格查询  -->
    <div>
      <one-table-template ref="multipleTable" :dynamicButtons="tableButtons" :dynamicComponents="tableComponents" :dynamicIsShowSelect="false" :dynamicApiConfig="apiConfig" :dynamicTableCols="tableCols" :dynamicFormFields="formField" />
      <edit :dynamicEditRowData="editRowData" :popupsVisible="editPopupsVisible" :key="editPopupsKey" :popupsState="editPopupsState" @close="close"></edit>
    </div>
    <div>
      <div class="demo-image">
        <div class="block" v-for="fit in fits" :key="fit">
          <span class="demonstration">{{ fit }}</span>
          <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/oneTable";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import Edit from "./edit";
import { CacheConfig } from "@/cache/configCache/index";
import { debuglog } from "util";

export default {
  name: "linksLibManage",
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Edit
  },
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],//图片描述
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",//图片地址
      // 网格查询API配置对象
      apiConfig: crmApis.csDbNodeQueryFindAll, //假的API
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query")
        },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add")
        },
        {
          compKey: "btnKey3",
          type: "",
          size: "small",
          clickEvent: () => this.reset(),
          text: this.$t("sys.button.reset")
        }
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              // 显示组件
              {
                compKey: "compKey1",
                labelName: "图片类型",
                codeField: "serverType",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: true
              },
              {
                compKey: "compKey2",
                labelName: "模板类别",
                codeField: "serverType",
                lookuptype: "LX009",
                component: () =>
                  import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: true,
                isMul: false
              }
            ],
      // 动态生成网格列
    //   tableCols: [
    //     // {
    //     //   prop: "controlBtn",
    //     //   label: "操作",
    //     //   codeField: "controlBtn",
    //     //   width: 120,
    //     //   align: "center",
    //     //   isComponent: true,
    //     //   comps: [
    //     //     {
    //     //       compKey: "propKey0",
    //     //       labelName: "修改",
    //     //       codeField: "editControlBtn",
    //     //       clickEvent: () => this.add(),
    //     //       component: () => import("@/components/org/linkButton"),
    //     //       isMust: true
    //     //     },
    //     //     {
    //     //       compKey: "propKey1",
    //     //       labelName: "删除",
    //     //       codeField: "editControlBtn",
    //     //       clickEvent: () => this.delete(),
    //     //       component: () => import("@/components/org/linkButton")
    //     //     }
    //     //   ]
    //     // },
    //     // { prop: "nodeCode", label: "链接编码", width: null, align: "center" },
    //     // { prop: "serverTypeName", label: "链接类型", width: null, align: "center" },
    //     // {
    //     //   prop: "nodeName",
    //     //   label: "链接名称",
    //     //   width: null,
    //     //   align: "center"
    //     // },
    //     // { prop: "groupName", label: "链接地址", width: null, align: "center" },
    //     // {
    //     //   prop: "modifyName",
    //     //   label: "链接描述",
    //     //   width: null,
    //     //   align: "center"
    //     // }
    //   ],
      formField: {
        oemCode: "1",
        groupCode: "1"
        // nodeCode:"",
        // nodeName:"",
        // serverType: ""
      }
    };
  },
  methods: {
    //删除
    delete() {
      debugger;
      const that = this;

      if (that.selecRowtData == "") {
        this.$message({
          message: this.$t("org.message.moreOneData") /*请至少选择一条数据*/,
          type: "warning"
        });
        return false;
      }
      let queryObj = {
        //保存需要传 type="mutation"
        type: "mutation",
        // api配置
        apiConfig: crmApis.xxx,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 1000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.selecRowtData
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (response.data[crmApis.xxx.ServiceCode].result === "1") {
          this.$message({
            message: this.$t("sys.tips.esTip14") /*删除成功*/,
            type: "success"
          });
          this.textQuery(1);
        }
      });
    }
  }
};
</script>

