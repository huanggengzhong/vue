<template>
  <div class="app-main ">
    <div
      el-breadcrumb
      app-breadcrumb
      breadcrumb-container
    >
      <!--数据区域-->
      <div class="content app-container app-container-table">
        <!--树形区域-->
        <div class="groupMenue el-slide">
          <el-tree
            :data="menueList"
            highlight-current
            :props="defaultProps"
            @node-click="handleNodeClick"
          />
        </div>
        <!--网格区域-->
        <div class="groupMenueEdit">
          <one-table-template
            ref="multipleTable"
            :dynamic-buttons="tableButtons"
            :dynamic-components="tableComponents"
            :dynamic-api-config="apiConfig"
            :dynamic-table-cols="tableCols"
            :dynamic-form-fields="formField"
            :dynamicTableOtherHeight="70"
            :dynamic-is-show-select="false"
            :dynamic-is-init-table="false"
            :dynamic-is-column-drop="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getOrgManageList } from "@/api/ve/organization";
import { saveOrgManage } from "@/api/ve/organization";
import isEnable from "@/components/org/isEnable/isEnable";

import { requestGraphQL } from "@/api/commonRequest";

import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { orgApis } from "@/api/graphQLApiList/org";
import OneTableTemplate from "@/components/templates/oneTable";
export default {
  name: "RoleMenuRelationLook",
  components: {
    isEnable,
    OneTableTemplate
  },
  filters: {},
  mixins: [oneTableWithViewTemplateMixins],
  data() {
    return {
      // 树形结构
      menueParam: {},
      menueList: [],
      defaultProps: {
        children: "children",
        label: "menuName"
      },

      // 网格查询API配置对象
      apiConfig: orgApis.sysMenuRoleQueryByPage,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "primary",
          size: "small",
          clickEvent: () => this.queryTable(1),
          text: this.$t("sys.button.query"),
          name: "search", //按钮图标样式
          position: "right",
          fuzzySearch: true
        } // 查询
      ],
      // 动态组件-查询条件
      tableComponents: [
        {
          compKey: "compKey1",
          span: 12,
          labelName: this.$t("org.label.roleName"),
          codeField: "roleName",
          component: () => import("@/components/org/commonInput"),
          type: "inputText",
          isMust: true
        } // 角色名称
      ],
      // 动态生成网格列
      tableCols: [
        {
          prop: "roleId",
          label: "角色ID",
          hidden: true,
          width: null,
          align: "center"
        },

        {
          prop: "roleName",
          label: this.$t("org.label.roleName"),
          width: null,
          align: "center"
        }, // 角色名称
        // { prop: 'roleCode', label: this.$t('org.label.roleCode'), width: 150, align: 'center', hidden: true},//角色编码
        {
          prop: "roleDesc",
          label: this.$t("org.label.roleDesc"),
          width: null,
          align: "center"
        }, // 描述
        {
          prop: "orgName",
          label: this.$t("org.label.orgName"),
          width: null,
          align: "center"
        } // 所属组织

        // {
        //   prop: "updateControlId",
        //   label: "并发控制",
        //   width: null,
        //   align: "center",
        //   hidden: true
        // }
      ],
      // 表单查询数据
      formField: {
        menuId: "",
        roleName: ""
      },

      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      },

      // 组件数据
      isEnableSpan: 20
    };
  },
  created() {
    this.queryMenue(true);
  },
  mounted() {},
  methods: {
    // 网格
    queryTable(page, dataType, size, filterObj, cb) {
      if (this.formField.menuId === "") {
        this.$message({
          message: this.$t("org.message.selMul") /*请选择一条数据*/,
          type: "warning",
          duration: 1000
        });
        return false;
      }
      // popups 组件弹窗  page 表单查询
      this.$utils.validataMoth(this, "validpage");
      if (this.valid) {
        this.$refs.multipleTable.queryTable(
          page,
          dataType,
          size,
          filterObj,
          cb
        );
      }
    },
    // 树形结构
    queryMenue(page) {
      const that = this;
      const queryObj = {
        // api配置
        apiConfig: orgApis.sysMenuQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            // 表格中台返回网格的字段
            apiQueryRow: [
              "menuCode",
              "menuId",
              "menuName",
              "menuOrder",
              "parentMenuId"
            ]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: "",
          pageIndex: "",
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.menueParam
        }
      };
      // 转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          var dataList = response.data[queryObj.apiConfig.ServiceCode].rows;
          // that.menueList = response.data[queryObj.apiConfig.ServiceCode].rows;
          // 数据格式转换
          var tree = this.$utils.parseTreeFromList(
            dataList,
            "parentMenuId",
            "menuId"
          );
          that.menueList = tree;
        }
      });
    },
    handleNodeClick(a, b, c) {
      this.formField.menuId = b.data.menuId;
      this.queryTable(1);
      // this.formField.orgName = b.data.orgName;
    }
  }
};
</script>
<style scoped>
.el-slide {
  height: calc(90vh - 66px);
  overflow-y: auto;
  background: #fff;
}
/deep/.content {
  height: calc(73vh);
  margin-top: 12px;
  background: #ffffff;
}

.groupMenue {
  height: inherit;
  width: 20%;
  float: left;
}

.groupMenueEdit {
  border-left: 10px solid #eee;
  height: inherit;
  width: 80%;
  float: left;
}

.groupMenueEdit /deep/ .filter-button {
  width: 30%;
  float: right;
  position: relative;
  top: 30px;
  z-index: 999;
}

.groupMenueEdit /deep/ .filter-params {
  margin: 0;
  padding: 0;
}
/deep/.el-tree {
  padding-left: 0px;
  margin-top: 2vh;
}
/deep/.connav-title {
  margin-top: 10px !important;
}
</style>
