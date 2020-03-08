<!--
* 描述: 工作组设置
* 创建人: zouzx
* 创建时间: 2019-08-13
* 记录：
*  20190813 新建 zouzx
-->
<template>
  <div class="app-container app-container-table" ref="crmArea">
    <div class="filter-container filter-button">
      <el-button type="primary" @click="query">查询</el-button>
      <el-button @click="showdialog">新增</el-button>
      <el-button @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-title-crm">查询条件</div>
    <div class="filter-container filter-params-crm">
      <el-form label-position="right">
        <el-row>
          <el-col :span="6">
            <el-form-item label="工作组名称">
              <el-input v-model="cxGroup" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <BusinessCategory ref="BusinessCategory" :BusinessCategory="cxType" />
          </el-col>
          <el-col :span="6">
            <ProjectType ref="ProjectType" :ProjectType="cxPro" />
          </el-col>
          <el-col :span="6">
            <EnableOrDisable ref="EnableOrDisable" :EnableOrDisable="cxStatus" />
          </el-col>
        </el-row>
      </el-form>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      style="height:580px;position:fixed;top:0;right:0;left:0;bottom:0;margin:auto;"
      width="900px"
      title="工作组维护"
      append-to-body
    >
      <div class="filter-container filter-params-crm">
        <el-form label-position="right">
          <el-row>
            <el-col>
              <el-button type="primary" @click="query2">查询</el-button>
              <el-button @click="addEMP">添加成员</el-button>
              <el-button @click="save">保存</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="crm-label-required">
              <BusinessCategory ref="whrfType" :BusinessCategory="whType" />
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <el-form-item label="工作组名称">
                <el-input v-model="whGroup" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="crm-label-required">
              <ProjectType ref="whrfPro" :ProjectType="whPro" />
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="crm-label-required">
              <EnableOrDisable ref="whrfStatus" :EnableOrDisable="whStatus" />
            </el-col>
            <el-col :span="8">
              <GroupMember
                ref="whrfMember"
                :GroupMember="whMember"
                :fromDatas="fromDatas"
                @CatData="getarr"
              />
            </el-col>
            <el-col :span="8"></el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-table
                :data="tabledatas3.tableData"
                highlight-current-row
                style="width: 100%;height:300px"
                v-loading.body="false"
                element-loading-text="Loading"
                border
                fit
              >
                <el-table-column type="index" label="序号" width="55"></el-table-column>
                <el-table-column label="操作" align="center" width="200">
                  <template slot-scope="scope">
                    <el-button
                      type="text"
                      size="mini"
                      @click="deleteEmp(scope.$index, scope.row)"
                    >删除</el-button>
                    <el-button type="text" size="mini" @click="savezz(scope.$index, scope.row)">设为组长</el-button>
                  </template>
                </el-table-column>
                <el-table-column
                  v-for="item in tabledatas3.colnames"
                  :key="item.value"
                  :label="item.label"
                  :prop="item.value"
                  align="center"
                ></el-table-column>
              </el-table>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="tabledatas3.total"
                :page-size="tabledatas3.pagesize"
                :current-page="tabledatas3.pageindex"
                @prev-click="prev2"
                @next-click="next2"
                @current-change="changepage2"
              ></el-pagination>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
    <div class="filter-container filter-title-crm">查询结果</div>
    <el-table
      :data="tabledatas.tableData"
      highlight-current-row
      ref="table"
      :style="{width:'100%',height:tableHeight+'px'}"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="handle(scope.$index, scope.row)">修改</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in tabledatas.colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="tabledatas.total"
      :page-size="tabledatas.pagesize"
      :current-page="tabledatas.pageindex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import BusinessCategory from "@/components/crm/Select/Common/BusinessCategory"; //业务类别
import ProjectType from "@/components/crm/Select/Common/ProjectType"; //项目类别
import GroupMember from "@/components/crm/EjectWindows/GroupMember"; //成员
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable"; //是否启用
export default {
  name: "crmWorkGroupSet",
  components: {
    BusinessCategory,
    ProjectType,
    GroupMember,
    EnableOrDisable
  },
  mounted: function() {
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      let that = this;
      this.$crmcf.__setAutoTableStyle(that);
    });
  },
  data() {
    return {
      tableHeight: "",
      fromDatas: { labelname: "成员" },
      workGroupId: "",
      empId: "",
      cxGroup: "",
      cxType: {
        value: ""
      },
      cxPro: {
        value: ""
      },
      cxStatus: {
        value: ""
      },
      whGroup: "",
      whType: {
        value: ""
      },
      whPro: {
        value: ""
      },
      whStatus: {
        value: ""
      },
      whMember: {
        value: ""
      },
      dialogVisible: false,
      tabledatas: {
        colnames: [
          { label: "工作组名称", value: "groupName" },
          { label: "业务类别", value: "serverTypeName" },
          { label: "项目类别", value: "projectCalssName" },
          { label: "是否启用", value: "isEnableName" },
          { label: "是否内置", value: "isSystemName" },
          { label: "修改人", value: "modifyName" },
          { label: "修改时间", value: "lastUpdatedDate" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.workingGroupQueryByPage,
          apiQueryRow: [
            "workGroupId",
            "groupName",
            "serverTypeName",
            "projectCalssName",
            "isEnableName",
            "isSystemName",
            "lastUpdatedDate",
            "modifyName",
            "serverType",
            "projectCalss",
            "isEnable",
            "bussOwner"
          ],
          params: {
            groupName: "",
            serverType: "",
            projectCalss: "",
            isEnable: ""
          }
        },
        pageSize: 10,
        pageIndex: 1,
        total: 0
      },
      redata: {},
      tabledatas3: {
        colnames: [
          { label: "员工名称", value: "empName" },
          { label: "工作组名称", value: "groupName" },
          { label: "是否组长", value: "isLeaderName" },
          { label: "是否启用", value: "isEnableName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.workingGroupQueryUsers,
          apiQueryRow: [
            "empName",
            "groupName",
            "isLeaderName",
            "isEnableName",
            "workGroupId",
            "empId"
          ],
          params: {
            workGroupId: "",
            empId: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      that.whGroup = "";
      that.workGroupId = "";
      that.empId = "";
      if (
        that.$refs.whrfType == undefined &&
        that.$refs.whrfPro == undefined &&
        that.$refs.whrfStatus == undefined &&
        that.$refs.whrfMember == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.whrfType.reset();
        that.$refs.whrfPro.reset();
        that.$refs.whrfStatus.reset();
        that.$refs.whrfMember.getData();
        that.dialogVisible = true;
      }
    },
    handle: function(index, rowData) {
      let that = this;
      that.whType.value = rowData.serverType;
      that.whGroup = rowData.groupName;
      that.whPro.value = rowData.projectCalss;
      that.whStatus.value = rowData.isEnable;
      that.workGroupId = rowData.workGroupId;
      that.whMember.input = "";
      that.empId = "";
      that.query2();
      if (
        that.$refs.whrfType == undefined &&
        that.$refs.whrfPro == undefined &&
        that.$refs.whrfStatus == undefined &&
        that.$refs.whrfMember == undefined
      ) {
        that.dialogVisible = true;
      } else {
        that.$refs.whrfType.getData();
        that.$refs.whrfPro.getData();
        that.$refs.whrfStatus.getData();
        that.$refs.whrfMember.getData();
        that.dialogVisible = true;
      }
    },

    query: function() {
      let that = this;
      that.tabledatas.queryObj.params.groupName = that.cxGroup;
      that.tabledatas.queryObj.params.serverType = this.$refs.BusinessCategory.value;
      that.tabledatas.queryObj.params.projectCalss = this.$refs.ProjectType.value;
      that.tabledatas.queryObj.params.isEnable = this.$refs.EnableOrDisable.value;
      this.$crmcf.simpleTablequery(that, that.tabledatas, that.tabledatas.queryObj.apiConfig,function(data){
        that.tabledatas.tableData =data.rows;
        that.tabledatas.pageIndex =data.pageindex;
          that.tabledatas.total =data.records;
        })
    },
    query2: function() {
      let that = this;
      that.tabledatas3.queryObj.params.workGroupId = that.workGroupId;
      that.tabledatas3.queryObj.params.empId = that.empId;
      this.$crmcf.simpleTablequery(that, that.tabledatas3, that.tabledatas3.queryObj.apiConfig,function(data){
        that.tabledatas3.tableData =data.rows;
        that.tabledatas3.pageindex =data.pageindex;
          that.tabledatas3.total =data.records;
        })
    },
    getarr(val) {
      this.redata = val;
      this.empId = this.redata[0].empId;
    },
    addEMP: function() {
      let that = this;
      var html = "";
      if (that.workGroupId == "") {
        html = html + `<div>请选保存工作组再添加成员</div>`;
      }
      if (that.$refs.whrfMember.input == "") {
        html = html + `<div>请选择要添加的成员</div>`;
      }
      if (html != "") {
        that.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return;
      }
      var empstr = []; //批量添加
      that.redata.forEach(item => {
        empstr.push(item.empId);
      });
      let variables = {
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: {
          workGroupId: that.workGroupId,
          empIdArray: empstr,
          handleCode: "0"
        }
      };
      that.$crmcf.mutationSumbit(
        that,
        variables,
        crmApis.workingGroupMutationUpdateUser,
        function() {
          that.whMember.input = "";
          that.empId = "";
          if (that.$refs.whrfMember == undefined) {
          } else {
            that.$refs.whrfMember.getData();
          }
          that.query2();
        }
      );
      // let queryObj = {
      //   // api配置
      //   type: "mutation",
      //   apiConfig: crmApis.workingGroupMutationUpdateUser,
      //   // 需要调用的API服务配置
      //   apiServices: [
      //     {
      //       //表格中台返回网格的字段
      //       apiQueryRow: []
      //     }
      //   ],
      //   //条件/实体参数（变量），根据typeParam中的定义配置

      // };
      // //转换了中台请求格式数据
      // var paramD = that.$getParams(queryObj);
      // // 调用中台API方法（可复用）
      // requestGraphQL(paramD).then(response => {
      //   if (
      //     response.data[queryObj.apiConfig.ServiceCode].result === "1"
      //     //&&response.data[queryObj.apiConfig.ServiceCode].rows!=''
      //   ) {
      //     that.whMember.input = "";
      //     that.empId = "";
      //     if (that.$refs.whrfMember == undefined) {
      //     } else {
      //       that.$refs.whrfMember.getData();
      //     }
      //     this.$message({
      //       message: "添加成功",
      //       type: "success",
      //       duration: 1000
      //     });
      //     this.query2();
      //   } else {
      //     this.$message({
      //       message: response.data[queryObj.apiConfig.ServiceCode].msg,
      //       type: "error",
      //       duration: 1000
      //     });
      //   }
      // });
    },
    deleteEmp: function(index, rowData) {
      this.$confirm("确认删除吗？")
        .then(_ => {
          const that = this;
          let variables = {
            //pageSize: that.tabledatas.pagesize,
            //pageIndex: that.tabledatas.pageindex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: {
              workGroupId: that.workGroupId,
              empId: rowData.empId,
              handleCode: "2"
            }
          };
          that.$crmcf.mutationSumbit(
            that,
            variables,
            crmApis.workingGroupMutationUpdateUser,
            function() {
              that.query2();
            }
          );
          // let queryObj = {
          //   // api配置
          //   type: "mutation",
          //   apiConfig: crmApis.workingGroupMutationUpdateUser,
          //   // 需要调用的API服务配置
          //   apiServices: [
          //     {
          //       //表格中台返回网格的字段
          //       apiQueryRow: []
          //     }
          //   ],
          //   //条件 实体参数（变量），根据typeParam中的定义配置
          //   variables: {
          //     //pageSize: that.tabledatas.pagesize,
          //     //pageIndex: that.tabledatas.pageindex,
          //     //当前中台使用的名称有dataInfo、info，具体查看API文档
          //     dataInfo: {
          //       workGroupId: that.workGroupId,
          //       empId: rowData.empId,
          //       handleCode: "2"
          //     }
          //   }
          // };
          // //转换了中台请求格式数据
          // var paramD = that.$getParams(queryObj);
          // // 调用中台API方法（可复用）
          // requestGraphQL(paramD).then(response => {
          //   if (
          //     response.data[queryObj.apiConfig.ServiceCode].result === "1" &&
          //     response.data[queryObj.apiConfig.ServiceCode].rows != ""
          //   ) {
          //     //this.dialogVisible = false
          //     that.$crmcf.showMessages(that, "success", "删除成功");
          //     // this.$message({
          //     //   message: '删除成功',
          //     //   type: 'success',
          //     //   duration: 1000
          //     // })
          //     that.query2();
          //   }
          // });
        })
        .catch(_ => {});
    },
    save: function() {
      let that = this;
      var html = "";
      if (that.$refs.whrfType.value == "") {
        html = html + `<div>业务类别不能为空</div>`;
      }
      if (that.whGroup == "") {
        html = html + `<div>工作组名称不能为空</div>`;
      }
      if (that.$refs.whrfPro.value == "") {
        html = html + `<div>项目类别不能为空</div>`;
      }
      if (that.$refs.whrfStatus.value == "") {
        html = html + `<div>是否启用不能为空</div>`;
      }
      if (html != "") {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return;
      }
      let variables = {
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: {
          workGroupId: that.workGroupId,
          groupName: that.whGroup,
          projectCalss: that.$refs.whrfPro.value,
          serverType: that.$refs.whrfType.value,
          isEnable: that.$refs.whrfStatus.value,
          isSystem: "0"
        }
      };
      that.$crmcf.mutationSumbit(
        that,
        variables,
        crmApis.workingGroupMutationUpdateById,
        function() {
          that.query();
        }
      );
      // let queryObj = {
      //   // api配置
      //   type: "mutation",
      //   apiConfig: crmApis.workingGroupMutationUpdateById,
      //   // 需要调用的API服务配置
      //   apiServices: [
      //     {
      //       //表格中台返回网格的字段
      //       apiQueryRow: []
      //     }
      //   ],
      //   //条件/实体参数（变量），根据typeParam中的定义配置
      //   variables: {
      //     //当前中台使用的名称有dataInfo、info，具体查看API文档
      //     dataInfo: {
      //       workGroupId: that.workGroupId,
      //       groupName: that.whGroup,
      //       projectCalss: that.$refs.whrfPro.value,
      //       serverType: that.$refs.whrfType.value,
      //       isEnable: that.$refs.whrfStatus.value,
      //       isSystem: "0"
      //     }
      //   }
      // };
      // //转换了中台请求格式数据
      // var paramD = that.$getParams(queryObj);
      // // 调用中台API方法（可复用）
      // requestGraphQL(paramD).then(response => {
      //   if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
      //     this.dialogVisible = false;

      //     that.$crmcf.showMessages(that, "success", "保存成功！");
      //     this.query();
      //   } else {
      //     that.$crmcf.showMessages(
      //       that,
      //       "error",
      //       response.data[queryObj.apiConfig.ServiceCode].msg
      //     );
      //   }
      // });
    },
    savezz: function(index, rowData) {
      const that = this;
      let variables = {
        //当前中台使用的名称有dataInfo、info，具体查看API文档
        dataInfo: {
          workGroupId: that.workGroupId,
          empId: rowData.empId,
          isLeader: "1",
          handleCode: "1"
        }
      };
      that.$crmcf.mutationSumbit(
        that,
        variables,
        crmApis.workingGroupMutationUpdateUser,
        function() {
          that.query2();
        }
      );
      // let queryObj = {
      //   // api配置
      //   type: "mutation",
      //   apiConfig: crmApis.workingGroupMutationUpdateUser,
      //   // 需要调用的API服务配置
      //   apiServices: [
      //     {
      //       //表格中台返回网格的字段
      //       apiQueryRow: []
      //     }
      //   ],
      //   //条件/实体参数（变量），根据typeParam中的定义配置
      //   variables: {
      //     //当前中台使用的名称有dataInfo、info，具体查看API文档
      //     dataInfo: {
      //       workGroupId: that.workGroupId,
      //       empId: rowData.empId,
      //       isLeader: "1",
      //       handleCode: "1"
      //     }
      //   }
      // };
      // //转换了中台请求格式数据
      // var paramD = that.$getParams(queryObj);
      // // 调用中台API方法（可复用）
      // requestGraphQL(paramD).then(response => {
      //   if (response.data[queryObj.apiConfig.ServiceCode].result === "1") {
      //     that.$crmcf.showMessages(that, "success", "保存成功！");
      //     that.query2();
      //   } else {
      //     that.$crmcf.showMessages(
      //       that,
      //       "error",
      //       response.data[queryObj.apiConfig.ServiceCode].msg
      //     );
      //   }
      // });
    },
    reset: function() {
      this.cxGroup = "";
      this.$refs.BusinessCategory.reset();
      this.$refs.ProjectType.reset();
      this.$refs.EnableOrDisable.reset();
    },
    prev() {
      let that = this;
      if (this.tabledatas.pageindex > 1) {
        that.tabledatas.pageindex = this.tabledatas.pageindex - 1;
        this.query();
      }
    },
    next() {
      let that = this;
      if (true) {
        that.tabledatas.pageindex = this.tabledatas.pageindex + 1;
        this.query();
      }
    },
    changepage(index) {
      let that = this;
      that.tabledatas.pageindex = index;
      this.query();
    },
    prev2() {
      let that = this;
      if (this.tabledatas3.pageindex > 1) {
        that.tabledatas3.pageindex = this.tabledatas3.pageindex - 1;
        this.query2();
      }
    },
    next2() {
      let that = this;
      if (true) {
        that.tabledatas3.pageindex = this.tabledatas3.pageindex + 1;
        this.query2();
      }
    },
    changepage2(index) {
      let that = this;
      that.tabledatas3.pageindex = index;
      this.query2();
    }
  }
};
</script>
<style>
</style>
