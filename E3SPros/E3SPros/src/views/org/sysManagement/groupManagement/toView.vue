<!--
* description: 集团员工明细查看弹窗
* author: lixb
* createdDate: 2019-10-14
-->
<template>
  <section>
    <el-dialog
      width="900px"
      :title="showTitle"
      :visible.sync="handleVisibled"
      :append-to-body="true"
      center
      @close="sendCodeHandleVisible"
    >
      <one-table-template
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="false"
        :dynamicIsInitTable="true"
        :dynamicIsColumnDrop="true"
      />
      <!-- ref="multipleTables" -->
    </el-dialog>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { oneTableTemplateMixins } from '@/components/mixins/oneTableTemplateMixins';
import { CacheConfig } from "@/cache/configCache/index";
import { requestGraphQL } from "@/api/commonRequest";
import OneTableTemplate from "@/components/templates/popupsOneTable";
export default {
  mixins: [oneTableTemplateMixins],
  components: {
    OneTableTemplate
  },
  props: {
    handleVisible: {
      type: Boolean,
      default: function() {
        return true;
      }
    },
    //组织类型
    roleOrgType: {
      type: String,
      default: function() {
        return "";
      }
    },
    roleId: {
      type: String,
      default: function() {
        return "";
      }
    }
  },
  data() {
    return {
      handleVisibled: this.handleVisible,
      apiConfig: orgApis.sysRoleUserQueryByPage,
      showTableData: this.showData,
      showTitle: "查看角色",
      list: [],
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20
      },
      formField: {
        //角色名称
        userId:this.roleId,
      },
      pageTotal: 0,
      tableCols: this.getCols()
    };
  },
  created() {
    this.queryTable();
  },
  methods: {
    sendCodeHandleVisible() {
      this.handleVisibled = false;
    },
    getCols() {
      var cols = [];
      if (
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
      ) {
        cols = cols.concat(CacheConfig.cacheData[this.$route.path].tableCols);
      } else {
        cols = cols.concat([
          {
            prop: "roleName",
            label: this.$t("org.label.roleName"),
            width: 120,
            align: "center"
          }, //角色名称
          {
            prop: "roleCode",
            label: this.$t("org.label.roleCode"),
            width: null,
            hidden: true,
            align: "center"
          }, //角色编码
          {
            prop: "roleDesc",
            label: this.$t("org.label.roleDesc"),
            width: 150,
            align: "center"
          }, //角色描述
          {
            prop: "orgName",
            label: this.$t("org.label.orgName"),
            width: null,
            align: "center"
          } //所属组织
        ]);
      }
      return cols;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

