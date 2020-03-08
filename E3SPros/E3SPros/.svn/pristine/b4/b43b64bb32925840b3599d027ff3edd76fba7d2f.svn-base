<template>
  <div class="app-container roleAndPermission">
    <!--按钮区域-->
    <div class="filter-container filter-title">操作按钮</div>
    <div class="filter-container filter-params">
       <div class="roleAndPermissionBtn">
            <el-button type="primary" size="small" @click="addRole()">新增</el-button>
            <el-button size="small" @click="editRole()">修改</el-button>
            <el-button size="small" @click="delRole()">删除</el-button>
            <el-button size="small" @click="memberManage()">成员管理</el-button>
            <el-button size="small" @click="setPermission()">功能权限设置</el-button>
            <el-button size="small" @click="checkPermission()">权限查看</el-button>
        </div>
    </div>

    <!--数据区域-->
    <div class="filter-container filter-title">数据区域</div>
    <div class="content">
      <!--树形区域-->
      <div class="groupMenue">
        <el-tree 
          :data="menueList" 
          :props="defaultProps" 
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
      <!--网格区域-->
      <div class="groupMenueEdit">
          <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-col :span="8">
                  <label>角色名称</label>
                  <el-input
                    v-model="nodeInfoList.roleName"
                    suffix-icon="el-icon-search"
                    placeholder="请选择"
                    size="small"
                  />
                </el-col>
                <el-col :span="6">
                   <el-checkbox v-model="nodeInfoList.ifAllRole" class="ifAllRole">显示全局角色</el-checkbox>
                </el-col>
                <el-col :span="6">
                     <el-button type="primary" size="small" @click="queryRoleTable(true)">查询</el-button>
                </el-col>
            </el-row>
          </div>
          <el-table
              border
              stripe
              v-loading="listLoading"
              :header-cell-style="tableHeaderRowClassName"
              :data="tableList"
              fit
              @selection-change="getRoleInfo"
              :highlight-current-row="!isMul"
              @current-change="getRoleInfo"
              class="roleTable"
          >
              <el-table-column
              label="序号"
              width="60"
              type="index"
              >
              </el-table-column>

              <el-table-column
                width="60"
                type="selection"
                v-if="isMul"
                >
                </el-table-column>

              </el-table-column>
              <el-table-column
              prop="roleId"
              label="角色ID"
              v-if="hideCol"
              >
              </el-table-column>
              <el-table-column
              prop="roleName"
              label="角色名称"
              >
              </el-table-column>
              <el-table-column
              prop="roleDesc"
              label="角色描述"
              hidden
              >
              </el-table-column>

              <el-table-column
              prop="isEnable"
              label="是否全局角色"
              >
              </el-table-column>

              <el-table-column
              prop="isEnable"
              label="所属组织"
              >
              </el-table-column>

              <el-table-column
              prop="updateControlId"
              label="updateControlId"
              v-if="hideCol"
              >
              </el-table-column>
            </el-table>
            <el-pagination
              background
              layout="prev, pager, next, sizes, ->, total"
              prev-text="上一页"
              next-text="下一页"
              :page-sizes="[10, 20, 30]"
              :page-size="10"
              :total="tableList?tableList.length:0"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
      </div>
    </div>

    <!--角色弹窗区域-->
    <el-dialog 
    title="角色维护" 
    :visible.sync="roleEditVisible"
    width="600px"
    center
    @close="clearRoleInfo"
    class="roleManageDialog"
    >
      <div class="filter-container filter-params">
            <el-row :gutter="26">
                  <el-col :span="20">
                    <label class="iconRequired">角色编号</label>
                    <el-input
                        v-model="roleInfo.roleId"
                        placeholder="请输入"
                        size="small"
                    />
                  </el-col>
                  <el-col :span="20">
                    <label class="iconRequired">角色名称</label>
                    <el-input
                        v-model="roleInfo.roleName"
                        placeholder="请输入"
                        size="small"
                    />
                  </el-col>
                  <el-col :span="20">
                    <label class="iconRequired">所属组织</label>
                    <el-input
                        v-model="nodeInfoList.orgName"
                        placeholder="请输入"
                        size="small"
                    />
                  </el-col>
                  <el-col :span="20">
                    <label>角色描述</label>
                    <el-input
                        type="textarea"
                        v-model="roleInfo.roleDesc"
                        placeholder="请输入"
                        size="small"
                    />
                  </el-col>

                  <el-col :span="20">
                    <div class="roleEditBtn">
                        <el-button type="primary" size="small" @click="saveRoleEdit()">保存</el-button>
                    </div>
                  </el-col>
            </el-row>
        </div>
    </el-dialog>

    <!--成员管理弹窗区域-->
    <el-dialog 
    title="成员管理" 
    :visible.sync="memberEditVisible"
    width="900px"
    center
    @close="clearMemberInfo"
    class="memberManageDialog"
    >
    <div class="filter-container filter-params">
       <div class="roleAndPermissionBtn">
            <el-button type="primary" size="small" @click="addMember()">添加成员</el-button>
            <el-button size="small" @click="delMember()">删除成员</el-button>
        </div>
    </div>
      <div class="filter-container filter-title">查询条件</div>
        <div class="filter-container filter-params">
            <el-row :gutter="26">
                <el-col :span="8">
                <label>用户名称</label>
                <el-input
                    v-model="memberInfoParam.roleName"
                    suffix-icon="el-icon-search"
                    placeholder="请输入"
                    size="small"
                />
                </el-col>
                <el-col :span="8">
                <label>员工姓名</label>
                <el-input
                    v-model="memberInfoParam.empName"
                    suffix-icon="el-icon-search"
                    placeholder="请输入"
                    size="small"
                />
                </el-col>
                <div class="filter-container filter-button">
                    <el-button type="primary" size="small" @click="searchMember">查询</el-button>
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
        highlight-current-row
        >
            <el-table-column
              label="序号"
              width="60"
              type="index"
              >
              </el-table-column>
              <el-table-column
                width="60"
                type="selection"
                v-if="memberIsMul"
                >
                </el-table-column>
              </el-table-column>
              <el-table-column
              prop="userName"
              label="用户名称"
              >
              </el-table-column>
              <el-table-column
              prop="empName"
              label="员工姓名"
              >
              </el-table-column>
              <el-table-column
              prop=""
              label="所属组织"
              >
              </el-table-column>
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
    </el-dialog>
    <memberManage :memberManageComVisible="memberManageComVisible" @changeCode="getNewMember"></memberManage>
  </div>

</template>
<script>
import { getOrgManageList } from '@/api/ve/organization'
import { saveOrgManage } from '@/api/ve/organization'
import isEnable from '@/components/org/isEnable/isEnable'
import memberManage from '@/components/org/memberManage/memberManage'
import { orgApis } from '@/api/graphQLApiList/org'
import { requestGraphQL } from '@/api/commonRequest'
export default {
  name:"orgManage",
  components: {
    isEnable,
    memberManage
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      // 树形结构
      menueParam: {},
      menueList: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      nodeInfoList: {
        orgId:"",
        orgName:"",
        roleName:"",
        ifAllRole:true,
      },

      // 角色网格结构
      listLoading: false,
      tableList: [],
      hideCol: true,
      isMul: false,
      roleInfo: {
        roleId: undefined,
        roleName: undefined,
        roleDesc: undefined,
        updateControlId: undefined,
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      },

      // 组件数据
      isEnableSpan: 20,

      // 角色弹窗数据
      roleEditVisible: false,

      // 成员弹窗数据
      memberEditVisible: false,
      memberInfoParam:{},
      memberTableList: [],
      memberIsMul: true,
      roleInfo: {
        roleId: undefined,
        roleName: undefined,
        roleDesc: undefined,
        updateControlId: undefined,
      },

      // 添加成员
      memberManageComVisible: false,
      
    }
  },
  created() {
    this.queryMenue(true);
  },
  mounted() {
  },
  methods: {
    // 树形结构
    queryMenue(page){
        const that = this
        let queryObj = {
          // api配置
          apiConfig: orgApis.menuQueryByPage,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:[]
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: '',
            pageIndex: '',
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.menueParam
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows!=''){
              that.menueList = response.data[queryObj.apiConfig.ServiceCode].rows;
            }
        })
    },
    handleNodeClick(a,b,c){
     this.nodeInfoList.orgId = b.data.orgId;
     this.nodeInfoList.orgName = b.data.orgName;
    },
    // 角色网格结构
    queryRoleTable(page){
       this.listLoading = true;
        const that = this
        let queryObj = {
          // api配置
          apiConfig: orgApis.sysRolePrivQueryByPage,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:['roleId','roleName','roleDesc','updateControlId']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.nodeInfoList.pageSize,
            pageIndex: page || that.nodeInfoList.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.nodeInfoList
          }
        }
        if(that.nodeInfoList.ifRoleAll == true) {
          that.nodeInfoList.isAll = '1'
        } else {
          that.nodeInfoList.isAll = '0'
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].result === '1' && response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].rows!=''){
              if(page){
                  //查询完返回指定的page页数
                  that.nodeInfoList.pageIndex = response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].pageIndexs;
                  that.nodeInfoList.pageSize = response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].pages;
                  that.nodeInfoList.pageTotal = response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].records;
              }
              that.tableList = response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].rows;
              that.listLoading = false;
            }
        })
    },
    handleSizeChange(val) {
      this.nodeInfoList.pageSize = val
      this.queryRoleTable(true)
    },
    handleCurrentChange(val) {
       this.nodeInfoList.pageIndex = val
       this.queryRoleTable(true)
    },
    getRoleInfo(val) {
       if(this.isMul) {
         if(val[0] || val.length == '0') {
          this.codeInside = {
            code: [],
            name: []
          };
          for(var i=0;i<val.length;i++) {
            this.codeInside.code.push(val[i].roleId)
            this.codeInside.name.push(val[i].roleName)
          }
         }
      } else {
          this.roleInfo.roleId = val.roleId;
          this.roleInfo.roleName = val.roleName;
          this.roleInfo.roleDesc = val.roleDesc;
          this.roleInfo.updateControlId = val.updateControlId;
      }
    },

    // 按钮事件
    addRole() {
      debugger
      if(this.nodeInfoList.orgId =='' || this.nodeInfoList.orgId == undefined) {
         this.$message({
            message: '请先选择所属组织',
            type: 'warning',
            duration: 5000,
            showClose: true,
          });
      } else {
        this.roleEditVisible = true;
        this.roleInfo.roleId = "";
        this.roleInfo.roleCode = "";
        this.roleInfo.roleName = "";
        this.roleInfo.roleDesc = "";
        this.roleInfo.updateControlId = "";
      }
    },

    editRole() {
      if(this.roleInfo.roleId =='' || this.roleInfo.roleId == undefined) {
         this.$message({
            message: '请先选择需要修改的角色',
            type: 'warning',
            duration: 5000,
            showClose: true,
          });
      } else {
        this.roleEditVisible = true;
      }
    },
    memberManage() {
      this.memberEditVisible = true;
       this.queryMemberTable(10)
    },

    clearRoleInfo() {
      this.roleInfo.roleId = "";
      this.roleInfo.roleCode = "";
      this.roleInfo.roleName = "";
      this.roleInfo.roleDesc = "";
      this.roleInfo.updateControlId = "";
    },

    // 角色弹窗事件
    saveRoleEdit(){
        const that = this
        let queryObj = {
          // api配置
          apiConfig: orgApis.roleSave,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:[]
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: '',
            pageIndex: '',
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.roleInfo
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows!=''){
            this.orgManageVisible = false
            this.$message({
              message: '保存成功',
              type: 'success',
              duration: 1000
            });
            }
        })
    },

    delRole(){
      if(this.roleInfo.roleId == '') {
        this.$message({
          message: '请先选择需要删除的角色',
          type: 'warning',
          duration: 1000
        });
        return false
      }
        const that = this
        let queryObj = {
          // api配置
          apiConfig: orgApis.sysRoleUserMutationDel,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:[]
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: '',
            pageIndex: '',
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.roleInfo
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(response.data[queryObj.apiConfig.ServiceCode].result == '1' ){
            this.orgManageVisible = false
            this.$message({
              message: response.data[queryObj.apiConfig.ServiceCode].msg,
              type: 'success',
              duration: 1000
            });
            }
        })
    },

    // 成员弹框事件
    queryMemberTable(page){
      this.listLoading = true;
        const that = this
        let queryObj = {
          // api配置
          apiConfig: orgApis.sysRoleUserQueryByPage,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:['userName','userId','empName']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.memberInfoParam.pageSize,
            pageIndex: page || that.memberInfoParam.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.memberInfoParam
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(response.data[queryObj.apiConfig.ServiceCode].result === '1' && response.data[queryObj.apiConfig.ServiceCode].rows!=''){
              if(page){
                  //查询完返回指定的page页数
                  // that.memberInfoList.pageIndex = response.data[queryObj.apiConfig].pageIndexs;
                  // that.memberInfoList.pageSize = response.data[queryObj.apiConfig].pages;
                  // that.memberInfoList.pageTotal = response.data[queryObj.apiConfig].records;
              }
              that.memberTableList = response.data[queryObj.apiConfig.ServiceCode].rows;
              that.listLoading = false;
            }
        })
    },
    handleMemSizeChange(val) {
      this.nodeInfoList.pageSize = val
      this.queryMemberTable(10)
    },
    handleMemCurrentChange(val) {
       this.nodeInfoList.pageIndex = val
       this.queryMemberTable(10)
    },
    getMemberInfo(val) {
       if(this.isMul) {
         if(val[0] || val.length == '0') {
          this.codeInside = {
            code: [],
            name: []
          };
          for(var i=0;i<val.length;i++) {
            this.codeInside.code.push(val[i].roleId)
            this.codeInside.name.push(val[i].roleName)
          }
         }
      } else {
          this.roleInfo.roleId = val.roleId;
          this.roleInfo.roleName = val.roleName;
          this.roleInfo.roleDesc = val.roleDesc;
          this.roleInfo.updateControlId = val.updateControlId;
      }
    },
    searchMember(val) {
      this.queryMemberTable(10);
    },
    clearMemberInfo() {
      this.roleInfo.roleId = "";
      this.roleInfo.roleCode = "";
      this.roleInfo.roleName = "";
      this.roleInfo.roleDesc = "";
      this.roleInfo.updateControlId = "";
    },

    // 添加成员
    addMember() {
      this.memberManageComVisible = true
    },
    getNewMember(val) {
      debugger
    },

    reset(){
      this.roleInfo.groupType = "";
      this.roleInfo.groupCode = "";
      this.roleInfo.groupName = "";
      this.roleInfo.isEnable = "";
      this.roleInfo.parentGroupName = "";
    },
  }
}
</script>
<style scoped>
.roleAndPermissionBtn {
  text-align: left;
  padding-bottom: 10px;
  
}
.roleManageDialog {
  height: 340px;
  margin-top: calc(26vh) !important;
}
.roleEditBtn {
  height: 38px;
  position: relative;
  bottom: -34px;
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
  border-left: 10px solid #eee;
  height: inherit;
  width: 60%;
  float: left;
}
.ifAllRole {
  width: 100%;
  left: -78%;
  line-height: 32px;
}
.roleTable {
  height: calc(47vh - 0px);    
  overflow: auto;
}
</style>