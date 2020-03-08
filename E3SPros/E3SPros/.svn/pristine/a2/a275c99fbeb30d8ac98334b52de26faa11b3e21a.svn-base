/*
 * @Author: xgz 
 * @Date: 2019-07-25 21:10:53 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-10-17 10:25:17
 * 2019年10月17日08:45:13 改为混入
 */
<template>
  <div class="app-container app-container-table">
    <!-- 单网格查询  -->
    <one-table-template
      ref="multipleTable"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicIsShowSelect="false"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
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
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/crm/Template/crmonePage";
import { oneTableWithViewTemplateMixins } from "@/components/mixins/oneTableWithViewTemplateMixins";
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
  data () {
    return {
      // 网格查询API配置对象
      apiConfig: crmApis.csBuMessChannelQueryForDlr, //假的API
      // 动态组件-按钮
      tableButtons: [
        // {
        //   compKey: "btnKey1",
        //   type: "primary",
        //   size: "small",
        //   clickEvent: () => this.queryTable(1),
        //   text: this.$t("sys.button.query")
        // },
        {
          compKey: "btnKey2",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: this.$t("sys.button.add")
        }
        // {
        //   compKey: "btnKey3",
        //   type: "",
        //   size: "small",
        //   clickEvent: () => this.reset(),
        //   text: this.$t("sys.button.reset")
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
                compKey: "compKey1",
                labelName: "账号名称",
                codeField: "userName",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey2",
                labelName: "服务IP",
                codeField: "serverip",
                component: () =>
                  import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              {
                compKey: "compKey3",
                labelName: "是否启用",
                codeField: "isEnable",
                component: () => import("@/components/crm/Select/crmIsEnable"),
                type: "dropdownList",
                isMust: false,
                isMul: false
              },
              {
                compKey: "compKey4",
                labelName: "网点",
                codeField: "agentCode",
                component: () =>
                  import("@/components/crm/crmEjectWindows/crmChangeDlr/index"),
                multipleTable: false,
                isMul: false,
                type: "propus",
                isMust: false
              }
            ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "controlBtn",
          label: "操作",
          codeField: "controlBtn",
          width: 60,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey0",
              labelName: "编辑",
              codeField: "editControlBtn",
              clickEvent: this.edit,
              component: () => import("@/components/org/linkButton"),
              isMust: false
            }
          ]
        },
        {
          prop: "dlrShortName",
          label: "网点名称",
          width: null,
          align: "center"
        },
        { prop: "dlrCode", label: "网点编码", width: null, align: "center" },
        {
          prop: "serverip",
          label: "服务IP",
          width: null,
          align: "center"
        },
        { prop: "username", label: "账号名称", width: null, align: "center" },
        {
          prop: "port",
          label: "端口",
          width: null,
          align: "center"
        },
        {
          prop: "isEnable",
          label: "是否启用",
          width: null,
          align: "center"
        },
        {
          prop: "createdName",
          label: "创建人",
          width: null,
          align: "center"
        },
        {
          prop: "createdDate",
          label: "创建时间",
          width: null,
          align: "center"
        },
        {
          prop: "lastUpdatedDate",
          label: "最后更新时间",
          width: null,
          align: "center"
        },
        {
          prop: "password",
          label: "密码",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "updateControlId",
          label: "控制修改字段",
          width: null,
          align: "center",
          hidden: true
        },
        {
          prop: "id",
          label: "id",
          width: null,
          align: "center",
          hidden: true
        }
      ],
      formField: {
        oemCode: "1",
        groupCode: "1",
        userName: "",
        serverip: "",
        isEnable: "",
        orgCode: ""
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



