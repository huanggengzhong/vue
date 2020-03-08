<template>
  <section>
    <el-dialog
      width="900px"
      :title="showTitle "
      :visible.sync="handleVisibled"
      center
      @close="sendCodeHandleVisible"
      v-bind:class="isValiad ? 'checkInput' :'validInput'"
    >
      <div class="filter-container filter-title">查询条件</div>
      <div class="filter-container filter-params">
        <div class="filter-container filter-params">
          <el-row :gutter="26">
            <el-row :span="24">
              <el-col :span="6">
                <label>授权对象</label>
                <el-input v-model="formField.userName" suffix-icon="el-icon-search" size="small" />
              </el-col>
              <el-col :span="6">
                <label>对象名</label>
                <el-input v-model="formField.userName" suffix-icon="el-icon-search" size="small" />
              </el-col>
              <el-col :span="6">
                <el-button type="primary" @click="saveNewTree()">确认</el-button>
              </el-col>
            </el-row>
          </el-row>
        </div>
      </div>
      <div class="filter-container filter-title">选择区</div>
      <div class="filter-container filter-params">
        <el-tree
          v-loading="loading"
          class="filter-tree"
          :data="orgList"
          :props="defaultProps"
          :default-checked-keys="sortByList"
          default-expand-all
          node-key="menuId"
          ref="tree"
          show-checkbox
          highlight-current
        ></el-tree>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { orgApis } from "@/api/graphQLApiList/org";
import { requestGraphQL } from "@/api/commonRequest";
// :disabled="true"
export default {
  props: {
    handleVisible: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    handleTitle: {
      type: Number,
      default: function() {
        return 1;
      }
    },
    editData: {
      type: null,
      default: ""
    }
  },
  data() {
    return {
      sortByList: [],
      loading: false,
      handleVisibled: this.handleVisible,
      showTitle: this.handleTitle == 0 ? "权限查看" : "权限变更",
      disbleEdit: this.handleTitle == 0 ? false : true,
      isValiad: false,
      formField: {
        userId:
          typeof this.editData === "object"
            ? this.editData.roleId
            : this.editData,
        userName:
          typeof this.editData === "object"
            ? this.editData.userName
            : this.editData
      },
      orgList: [],
      defaultProps: {
        children: "children",
        label: "menuName"
      }
    };
  },
  created() {
    this.userPrivilege();
    this.queryOrganization();
  },
  methods: {
    //

    //保存
    saveNewTree() {
      // debugger
      const that = this;
      var data = this.$refs.tree.getCheckedNodes(false, true);
      if (data.length == 0) {
        this.$message({
          message: "请选择要授权的菜单",
          type: "warning",
          duration: 2000
        });
        return;
      }
      var menuList = [];
      for (var k in data) {
        menuList.push(data[k].menuId);
      }
      for (var k in menuList) {
        this.saveTree(k,menuList);
      }
    },
    saveTree(k,menuList) {
      const that = this;
      debugger
      let queryObj = {
        // 保存mutation
        type: "mutation",
        // api配置
        apiConfig: orgApis.sysRoleUserMutationSaves,
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            roleId: this.formField.userId,
            menuId: menuList[k]
          }
        }
      };
      var paramD = that.$getParams(queryObj);
      that.$requestGraphQL(paramD).then(response => {
        // that.$message({
        //   message: "保存成功",
        //   type: "success",
        //   duration: 2000
        // });
      });
    },
    //查询用户权限
    userPrivilege() {
      const that = this;
      let queryObj = {
        // api配置
        apiConfig: orgApis.sysUserPrivQueryByPage,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: ["menuId", "isSelected"]
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10000,
          pageIndex: 1,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            userId:
              // "1",
              this.formField.userId,
            selectedOnly: "1"
            // orderTypeId: this.formInline.orderTypeId,
            // purcashTypeId: this.formInline.purcashTypeId,
            // baseSeriesId: this.formInline.baseSeriesId
          }
        }
      };
      //转换了中台请求格式数据
      var dataNewList;
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      this.$requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.sysUserPrivQueryByPage.ServiceCode].result ===
            "1" &&
          response.data[orgApis.sysUserPrivQueryByPage.ServiceCode].rows != ""
        ) {
          // debugger
          dataNewList =
            response.data[orgApis.sysUserPrivQueryByPage.ServiceCode].rows;
          for (var k in dataNewList) {
            this.sortByList.push(dataNewList[k].menuId);
          }
        }
      });
    },
    //查询组织
    queryOrganization() {
      const that = this;
      // console.log(this.editData)
      // console.log('.........')
      let roleId = that.editData.roleId;
      // let queryObj = {
      // // api配置
      // apiConfig: orgApis.sysUserPrivQueryByPage,
      // // 需要调用的API服务配置
      // apiServices: [{
      //     //表格中台返回网格的字段
      //     apiQueryRow:['menuName','menuId','isSelected','parentMenuId']
      // }],
      // //条件/实体参数（变量），根据typeParam中的定义配置
      // variables: {
      //     pageSize: 10000,
      //     pageIndex: 1,
      //     //当前中台使用的名称有dataInfo、info，具体查看API文档
      //     dataInfo: this.orgTreeId
      // }
      // }
      this.loading = true;
      const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: "query",
        typeParam:
          "($pageIndex: Int, $pageSize: Int, $dataInfo: " +
          orgApis.sysRolePrivQueryByPage.InputType +
          ")",
        // 请求API
        apiUrl: orgApis.sysRolePrivQueryByPage.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
          {
            // API服务编码&参数
            apiServiceCode: orgApis.sysRolePrivQueryByPage.ServiceCode,
            apiServiceParam:
              "(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)",
            // 表格中台返回网格的字段
            apiQueryRow: ["menuName", "menuId", "isSelected", "parentMenuId"]
          }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: 10,
          pageIndex: 1,
          // 当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            roleId: roleId
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].result ===
            "1" &&
          response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].rows != ""
        ) {
          var dataList =
            response.data[orgApis.sysRolePrivQueryByPage.ServiceCode].rows;

          var tree = this.$utils.parseTreeFromList(
            dataList,
            "parentMenuId",
            "menuId"
          );
          // debugger
          this.orgList = tree;
          this.loading = false;
        }
      });
    },
    submitForm(formName) {
      const that = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          let queryObj = {
            //保存需要传 type="mutation"
            type: "mutation",
            // api配置
            apiConfig: orgApis.sysUserPrivQueryByPage,
            // 需要调用的API服务配置
            apiServices: [
              {
                //表格中台返回网格的字段
                apiQueryRow: [
                  "id",
                  "brandName",
                  "carSeries",
                  "catType",
                  "carTypeConfig",
                  "isEnable",
                  "status",
                  "editDate"
                ]
              }
            ],
            //条件/实体参数（变量），根据typeParam中的定义配置
            variables: {
              pageSize: 1000,
              pageIndex: 1,
              //当前中台使用的名称有dataInfo、info，具体查看API文档
              dataInfo: that.ruleForm
            }
          };
          //转换了中台请求格式数据
          var paramD = that.$getParams(queryObj);
          requestGraphQL(paramD).then(response => {
            if (
              response.data[orgApis.sysUserPrivQueryByPage.ServiceCode]
                .result === "1" &&
              response.data[orgApis.sysUserPrivQueryByPage.ServiceCode].rows !=
                ""
            ) {
              //通关如果的状态确认是编辑还是添加
              if (this.handleTitle == 0) {
                this.$message({ message: "添加成功", type: "success" });
              } else {
                this.$message({ message: "修改成功", type: "success" });
              }
              this.sendCodeHandleVisible();
            }
          });
        } else {
          this.isValiad = true;
          console.log("error submit!!");
          return false;
        }
      });
    },
    sendCodeHandleVisible() {
      this.$emit("visible", false);
    },
    reset() {
      this.formField = {
        userName: ""
      };
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .filter-params label {
  margin-right: 0px;
}
/deep/ .el-input__inner {
  height: 28px;
  line-height: 28px;
}
/deep/ .el-input__icon {
  line-height: 0;
}
/deep/ .el-input__prefix {
  top: 0px;
}
/deep/ .filter-params .el-col {
  margin-bottom: 0px;
}
/deep/ .el-dialog {
  height: 534px;
}
</style>

