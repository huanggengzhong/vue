<template>
  <el-dialog
    title="成员列表"
    :visible.sync="memberManageComVisible"
    width="900px"
    center
    @close="sendeMemberCode"
    class="memberManageCom"
  >
    <div class="app-container orgManage">
      <div class="content">
        <div class="groupMenue">
          <div class="filter-container filter-title f-mt0">组织列表</div>
          <el-tree :data="menueList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>

        <div class="groupMenueEdit">
          <div class="filter-container filter-title f-mt0">查询条件</div>
          <div class="filter-container filter-params">
            <el-row :gutter="26">
              <el-col :span="16">
                <label>员工姓名</label>
                <el-input
                  v-model="memberInfoParam.empName"
                  suffix-icon="el-icon-search"
                  :placeholder="$t('sys.tips.esTip13')"
                  size="small"
                />
              </el-col>
              <div class="filter-container filter-button">
                <el-button type="primary" size="small" @click="queryRoleTable(10)">查询</el-button>
                <el-button size="small" @click="sureMember">确定</el-button>
              </div>
            </el-row>
          </div>
          <div class="filter-container filter-title f-mt0">成员列表</div>
          <el-table
            v-loading="listLoading"
            :data="memberTableList"
            element-loading-text="Loading"
            border
            stripe
            :header-cell-style="tableHeaderRowClassName"
            highlight-current-row
          >
            <el-table-column label="序号" width="60" type="index"></el-table-column>
            <el-table-column width="60" type="selection" v-if="memberIsMul"></el-table-column>
            <el-table-column prop="userName" label="用户名称"></el-table-column>
            <el-table-column prop="empName" label="员工姓名"></el-table-column>
            <el-table-column prop label="所属组织"></el-table-column>
          </el-table>
          <el-pagination
            background
            layout="prev, pager, next, sizes, ->, total"
            prev-text="上一页"
            next-text="下一页"
            :page-sizes="[10, 20, 30]"
            :page-size="10"
            :total="memberTableList?memberTableList.length:0"
            @size-change="handleMemSizeChange"
            @current-change="handleMemCurrentChange"
          />
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "memberManageCom",
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  props: {
    memberManageComVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      // 树结构数据
      listLoading: false,
      menueList: [],
      orgId: undefined,
      orgName: undefined,
      defaultProps: {
        children: "children",
        label: "orgName"
      },
      // 网格数据
      memberIsMul: true,
      memberInfoParam: {
        empName: ''
      },
      memberTableList: [],
      codeInside: {},
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.queryMenue();
  },
  mounted() {},
  methods: {
    // 树形结构
    queryMenue(page) {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: orgApis.mdmOrgRelationRealQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: [
              'createdDate',
              'createdName',
              'creator',
              'groupCode',
              'groupId',
              'isEnable',
              'lastUpdatedDate',
              'linkId',
              'modifier',
              'modifyName',
              'mycatOpTime',
              'oemCode',
              'oemId',
              'orgBelongType',
              'orgCode',
              'orgName',
              'orgRealId',
              'orgTreeId',
              'parentOrgTreeId',
              'sdpOrgId',
              'sdpUserId',
              'treeType',
              'updateControlId'
            ]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: "",
          pageIndex: "",
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {}
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
            var dataList =  response.data[queryObj.apiConfig.ServiceCode].rows
            var tree = this.$utils.parseTreeFromList(dataList, 'parentMenuId', 'menuId');
            that.menueList = tree;
        }
      });
    },
    handleNodeClick(a, b, c) {
      console.log(a)
      this.orgName = a.orgName;
    },
    // 成员网格
    queryRoleTable(page) {
      if (this.orgName == "" || this.orgName == undefined) {
        this.$message({
          message: "请先选择组织",
          type: "warning",
          duration: 1000
        });
      } else {
        this.listLoading = true;
        const that = this;
        let obj = {}
        obj.orgName = that.orgName
        obj.empName = this.memberInfoParam.empName
        let queryObj = {
          // api配置
          apiConfig: orgApis.mdmOrgEmployeeQueryFindAll,
          // 需要调用的API服务配置
          apiServices: [
            {
              //表格中台返回网格的字段
              apiQueryRow: ["orgName", "empName", "empId","empCode","userId", "userName",  "updateControlId"]
            }
          ],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.memberInfoParam.pageSize,
            pageIndex: page || that.memberInfoParam.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: obj
          }
        };

        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response => {
          if (
            response.data[orgApis.mdmOrgEmployeeQueryFindAll.ServiceCode].result ===
              "1" &&
            response.data[orgApis.mdmOrgEmployeeQueryFindAll.ServiceCode].rows != ""
          ) {
            if (page) {
              //查询完返回指定的page页数
              that.memberInfoParam.pageIndex =
                response.data[
                  orgApis.mdmOrgEmployeeQueryFindAll.ServiceCode
                ].pageIndexs;
              that.memberInfoParam.pageSize =
                response.data[orgApis.mdmOrgEmployeeQueryFindAll.ServiceCode].pages;
              that.memberInfoParam.pageTotal =
                response.data[
                  orgApis.mdmOrgEmployeeQueryFindAll.ServiceCode
                ].records;
            }
            that.memberTableList =
              response.data[orgApis.mdmOrgEmployeeQueryFindAll.ServiceCode].rows;
          }
            that.listLoading = false;
        });
      }
    },
    handleMemSizeChange(val) {
      this.memberInfoParam.pageSize = val;
      this.queryMemberTable(10);
    },
    handleMemCurrentChange(val) {
      this.memberInfoParam.pageIndex = val;
      this.queryMemberTable(10);
    },
    sureMember() {
      this.$emit("changeCode", this.codeInside);
    },
    getMemberInfo(val) {
      if (this.isMul) {
        if (val[0] || val.length == "0") {
          this.codeInside = {
            code: [],
            name: []
          };
          for (var i = 0; i < val.length; i++) {
            this.codeInside.code.push(val[i].roleId);
            this.codeInside.name.push(val[i].roleName);
          }
        }
      } else {
        this.codeInside.code = val.roleId;
        this.codeInside.name = val.roleName;
      }
    },
    sendeMemberCode() {
      this.$emit("changeCode", {});
    }
  }
};
</script>
<style scoped>
.orgManage {
  position: relative;
  top: -4px;
  padding-top: 0px;
}
.orgManageDialog {
  height: 240px;
  margin-top: calc(26vh) !important;
}
.orgManageBtn {
  height: 38px;
  position: relative;
}
.content {
  height: calc(60.5vh);
  background: #ffffff;
}

.groupMenue {
  height: inherit;
  width: 40%;
  float: left;
}

.groupMenueEdit {
  height: 515px;
  border-left: 10px solid #eee;
  width: 60%;
  float: left;
}

.treeOprMenu {
  width: 100px;
  height: 60px;
  padding: 10px;
  position: relative;
  left: 100px;
}
.addNewItemBtn {
  position: absolute;
  left: 15px;
  top: 15px;
}
.f-mt0 {
  margin-top: 0px;
}
</style>