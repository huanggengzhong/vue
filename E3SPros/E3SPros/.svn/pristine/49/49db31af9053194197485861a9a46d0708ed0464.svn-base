<template>
  <section>
    <!--成员管理弹窗区域-->
    <el-dialog
      title="成员管理"
      :visible.sync="memberEditVisibled"
      width="900px"
      center
      @close="clearMemberInfo"
      class="memberManageDialog"
    >
      <div class="filter-container filter-params">
        <div class="roleAndPermissionBtn">
          <el-button type="primary" size="small" @click="addMember()">{{$t('sys.button.addMember')}}</el-button>  <!-- 添加成员 -->
        
          <el-button size="small" @click="delMember()">{{$t('sys.button.delMember')}}</el-button>  <!-- 删除成员 -->
        </div>
      </div>
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <el-row :gutter="26">
          <el-col :span="8">
            <label>{{$t('org.label.userName')}}</label><!-- 用户名称 -->
            <el-input suffix-icon="el-icon-search" placeholder="请输入" size="small" />
          </el-col>
          <el-col :span="8">
            <label>{{$t('org.label.staffName')}}</label><!-- 员工姓名 -->
            <el-input suffix-icon="el-icon-search" placeholder="请输入" size="small" />
          </el-col>
          <div class="filter-container filter-button">
            <el-button type="primary" size="small" @click="searchMember">{{$t('sys.button.query')}}</el-button>
          </div>
        </el-row>
      </div>
      <div class="filter-container filter-title">查询结果</div>

      <el-table
        v-loading="listLoading"
        :data="memberTableList"
        element-loading-text="Loading"
        border
        stripe
        :header-cell-style="tableHeaderRowClassName"
        ref="multipleTable"
      >
        <el-table-column width="60" type="selection"></el-table-column>
        <el-table-column label="序号" width="60" type="index"></el-table-column>

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
        @size-change="handleSizeChange"
        @current-change="handleMemCurrentChange"
      />
    </el-dialog>
    <memberManage :memberManageComVisible="memberManageComVisible" @changeCode="getNewMember"></memberManage>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
import memberManage from "@/components/org/memberManage/memberManage";
export default {
  name: "orgManage",
  components: {
    memberManage
  },
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
    memberEditVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    editDatad: {
      type: null,
      default: ""
    }
  },
  data() {
    return {
      listLoading: false,
      list: [],
      memberInfoParam: {
        roleName: "",
        empName: "",
        roleId: this.editDatad.roleId || ""
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20
      },
      memberTableList: [],
      memberEditVisibled: this.memberEditVisible,
      depaName: this.editDatad.orgName || "",
      // 添加成员
      memberManageComVisible: false,
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return "background-color:rgb(239, 239, 239);height:32px;";
        }
      }
    };
  },
  created() {
    this.queryMemberTable(1);
  },
  mounted() {},
  methods: {
    // 添加成员
    addMember() {
      this.memberManageComVisible = true;
    },
    reset() {},
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryMemberTable(1);
    },
    handleMemCurrentChange(val) {
      this.nodeInfoList.pageIndex = val;
      this.queryMemberTable(10);
    },
    // 成员弹框事件
    queryMemberTable(page) {
      this.listLoading = true;
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: orgApis.sysRoleUserQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["userName", "userId", "empName"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: page || that.listQuery.pageIndex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.memberInfoParam
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
          if (page) {
          }
          that.memberTableList =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.listLoading = false;
        }
      });
    },
    getNewMember(val) {
      this.memberManageComVisible = false;
    },
    clearMemberInfo() {
      this.clearMemberInfo = false;
    },
    searchMember(val) {
      this.queryMemberTable(1);
    },
    //删除角色
    delMember() {
      const that = this;
      let selectData = that.$refs.multipleTable.selection;
      if (selectData.length != 1) {
        that.$message({ message: this.$t('org.message.selOneData')/*请选择一条数据*/, type: "warning" });
        return false;
      }
      console.log(selectData);
      let useId = selectData[0].userId;

      let queryObj = {
        type: "mutation",
        apiConfig: orgApis.sysRoleUserMutationDel,
        apiServices: [{}],
        variables: {
          pageSize: 1000,
          pageIndex: 1,
          dataInfo: {
            roleId: that.memberInfoParam.roleId,
            userId: useId
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.sysRoleUserMutationDel.ServiceCode].result ===
          "1"
        ) {
          //通关如果的状态确认是编辑还是添加
          that.$message({ message: this.$t('sys.tips.esTip14')/*删除成功*/, type: "success" });
        }
      });
    }
  }
};
</script>