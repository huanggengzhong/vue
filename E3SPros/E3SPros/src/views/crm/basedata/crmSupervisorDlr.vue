
<template>
  <div class="app-container app-container-table">
    <one-table-template
      ref="multipleTable"
      :dynamicSearchField="searchField"
      :dynamicButtons="tableButtons"
      :dynamicComponents="tableComponents"
      :dynamicApiConfig="apiConfig"
      :dynamicTableCols="tableCols"
      :dynamicFormFields="formField"
      :dynamicIsShowSelect="false"
      :dynamicIsInitTable="false"
      :dynamicIsColumnDrop="false"
      />

      <!-- 督导责任网点修改弹窗 -->
    <el-dialog title="督导责任网点分配" :visible.sync="dialogVisible" width="900px" height="550px" center style="position:fixed;top:100;;right:0;left:0;bottom:0;margin:auto;" append-to-body>
      <div class="filter-container filter-title">
        <div style="float:right">
          <el-button size="small" @click="addAgent">添加网点</el-button>
          <el-button size="small" type="primary" @click="editSave">保存</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
        <div>
          <el-form>
            <!-- <el-row>
              <el-col :span="8" class="crm-label-required">
                <BusinessProcess :BusinessProcess="whPro" ref="whrfPro" @changeCode="changeType2" />
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <AgentBrand :AgentBrand="whBrand" ref="whrfBrand" />
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <ProcessNodePoint ref="whrfProNode" :ProcessNodePoint="whProNode" @CatData="getarr4"></ProcessNodePoint>
              </el-col>
            </el-row> -->
           
            <el-row>
              <el-col :span="8" class="crm-label-required">
                <SupervisorType :SupervisorType="SupervisorType" ref="SupervisorType"/>
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <SupervisionName :SupervisionName='SupervisionName' ref='SupervisionName'/>
              </el-col>
              <el-col :span="8" class="crm-label-required">
                <EnableOrDisable :EnableOrDisable="whStatus" ref="whStatus" />
              </el-col>
              <el-col :span="8">
                <Agent :Agent="whDlr" ref="whrfDlr" @CatData="getarr5" />
              </el-col>
            </el-row>
          </el-form>
        </div>
        <el-table :data="tabledatasgzadd.tableData" highlight-current-row style="width: 100%;height:330px" v-loading.body="false" element-loading-text="Loading" border fit>
          <el-table-column type="index" label="序号" width="55"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <a style="color:#409EFF" @click="delAgent(scope.$index, scope.row)">删除</a>
            </template>
          </el-table-column>
          <el-table-column v-for="item in tabledatasgzadd.colnames" :key="item.value" :label="item.label" :prop="item.value" align="center"></el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="tabledatasgzadd.total" :page-size="tabledatasgzadd.pagesize" :current-page="tabledatasgzadd.pageindex" @prev-click="prev1" @next-click="next1" @current-change="changepage1"></el-pagination>
      </div>
    </el-dialog>
      
  </div>
</template>
<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import OneTableTemplate from "@/components/crm/Template/crmonePage";

import { CacheConfig } from '@/cache/configCache/index'
import Agent from "@/components/crm/EjectWindows/Agent";
import SupervisorType from "@/components/crm/Select/SupervisorType";
import EnableOrDisable from "@/components/crm/Select/Whether/EnableOrDisable";
import SupervisionName from "@/components/crm/textbox/Public/Agent/SupervisionName";

export default {
  name:"crmNodeGroup",
  // 组件混入对象
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate,
    Agent,
    SupervisorType,
    EnableOrDisable,
    SupervisionName
  },
  // 阻塞路由预加载网格中组件的数据
  beforeRouteEnter(to, from, next) {CacheConfig.initData(to.path, function(){next()})},
  data() {
    
    return {
      searchField:"搜索条件",
      // 网格查询API配置对象
      apiConfig: crmApis.csDbNodeGroupQueryFindAll,
      // 动态组件-按钮
      tableButtons: [
        {
          compKey: "btnKey1",
          type: "",
          size: "small",
          clickEvent: () => this.add(),
          text: "新增"
        },
      ],
      // 动态组件-查询条件
      tableComponents:
        CacheConfig.cacheData[this.$route.path] &&
        CacheConfig.cacheData[this.$route.path].tableComponents.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableComponents
          : [
              {
                compKey: "compKey1",
                labelName: "督导类别",
                codeField: "serverType",
                lookuptype: "LX009",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey2",
                labelName: "督导名称",
                codeField: "nodeGroupName",
                component: () => import("@/components/crm/textbox/crmTextInput"),
                type: "inputText",
                isMust: false
              },
              
              {
                compKey: "compKey3",
                labelName: "网点品牌",
                codeField: "groupType",
                lookuptype: "LX804",
                component: () => import("@/components/crm/lookupValue/lookupvalue"),
                type: "dropdownList",
                isMust: false,
                isMul:false,
              },
              {
                compKey: "compKey4",
                labelName: "是否启用",
                codeField: "isEnable",
                component: () => import("@/components/crm/Select/crmIsEnable"),
                type: "dropdownList",
                isMust: false,
                isMul: false,
              }
            ],
      // 动态生成网格列
      tableCols:
        CacheConfig.cacheData[this.$route.path] && 
        CacheConfig.cacheData[this.$route.path].tableCols.length > 0
          ? CacheConfig.cacheData[this.$route.path].tableCols
          : [
              {
                prop: "controlBtn",
                label: "操作",
                width: 60,
                align: "center",
                codeField: 'controlBtn',
                isComponent: true,
                comps: [
                  {
                    compKey: "propKey1",
                    labelName: '修改',
                    codeField: 'editControlBtn',
                    align: "center",
                    isShowLabel:true,
                    isShow:true,
                    clickEvent: () => this.edit(),
                    // clickEvent: this.edit,
                    component: () => import("@/components/org/linkButton")
                  },
                  // {
                  //   compKey: "propKey2",
                  //   labelName: '分配',
                  //   codeField: 'assignmentControlBtn',
                  //   align: "center",
                  //   isShowLabel:true,
                  //   isShow:true,
                  //   clickEvent: () => this.assignment(),
                  //   component: () => import("@/components/org/linkButton")
                  // }
                ]
              },
              {
                prop: "serverTypeName",
                label: "督导类别",
                width: null,
                align: "center"
              },
              {
                prop: "groupName",
                label: "督导名称",
                width: null,
                align: "center"
              },
              {
                prop: "groupTypeName",
                label: "网点品牌",
                width: null,
                align: "center"
              },
              {
                prop: "isEnableName",
                label: "是否启用",
                width: 150,
                align: "center",
              },
              {
                prop: "isEnableName",
                label: "网点编码",
                width: null,
                align: "center",
                hidden:true
              },
              {
                prop: "isEnableName",
                label: "网点简称",
                width: null ,
                align: "center",
                hidden:true
              },
              
            ],
      // 表单查询数据--重置查询条件
      formField: {
        oemCode:"1",
        groupCode: "1",
        // serverType:"",
        // nodeGroupName:"",
        // groupType:"",
        // searchValue:"",//搜素字段
        
      },

      redata:{},
      dutyPersonMId: "",
      dialogVisible:false,
      custName:'',
      SupervisorType:{
        value: ""
      },
      whDlr: {
        input: ""
      },
      SupervisionName:{
        input:""
      },
      whStatus: {
        value: ""
      },
       // 新增和修改的网格
      tabledatasgzadd: {
        // 操作列
        isoperat: false,
        havedistrbute: false,
        haveEdit: false,
        haveDel: false,
        colnames: [
          { label: "网点品牌", value: "carBrandName" },
          { label: "网点编码", value: "dlrCode" },
          { label: "网点简称", value: "dlrShortName" }
        ],
        tableData: [],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.csDbDutyPersonDlrQuery,

          apiQueryRow: [
            "carBrandName",
            "dlrCode",
            "dlrShortName",
            "dutyPersonDId"
          ],
          params: {
            //dutyPersonMId: ""
            // carBrandCode: "",
            // xx: "",
            // xdutyPersonId: "",
            // isEnable: ""
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      }
    };
  },
  methods: {
    //新增
    add(){
      this.dialogVisible=true
      setTimeout(() => {
        this.$refs.SupervisorType.value=''
        this.$refs.SupervisionName.input=''
        this.$refs.whStatus.value=''
      }, 0);
    },
    //修改
    edit(){
      let that = this;
      that.dialogVisible=true
      console.log(that.$refs.multipleTable);
      console.log(that.$refs.multipleTable.currentRow);
      setTimeout(function() {
        that.$refs.SupervisorType.value=that.$refs.multipleTable.currentRow.serverTypeName
        that.$refs.SupervisionName.input=that.$refs.multipleTable.currentRow.groupName
        that.$refs.whStatus.value=that.$refs.multipleTable.currentRow.isEnableName
      },0)
      
    },
    //网点返回的数据
    getarr5(val) {
      this.redata = val;
    },
    //添加网点
    addAgent: function() {
      let that = this;
      
      var html = "";
      if (that.$refs.whrfDlr.input == "") {
        html = html + `<div>请选择要添加的网点</div>`;
      }
      if (html != "") {
        this.$notify.error({
          title: "校验项",
          dangerouslyUseHTMLString: true,
          message: html
        });
        return;
      }
      var empstr = []; //批量添加
      this.redata.forEach(item => {
        empstr.push(item.dlrCode);
      });
      let queryObj = {
        // api配置
        apiConfig: crmApis.saveDutyPersonDlrFP,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: []
          }
        ],
        type: "mutation",
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: {
            dutyPersonMId: that.dutyPersonMId,
            idList: empstr
          }
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (response.data[queryObj.apiConfig.ServiceCode].result == "1") {
          that.$crmcf.showMessages(that, "success", "成功！");
          that.initQueryAgentInfo();
        } else {
          that.$crmcf.showMessages(
            that,
            "error",
            response.data[queryObj.apiConfig.ServiceCode].msg
          );
          that.initQueryAgentInfo();
        }
      });
    },
    //保存
    editSave(){

    },
    //弹窗表格加载
    initQueryAgentInfo() {
      let that = this;
      that.tabledatasgzadd.queryObj.params = {};
      that.$set(
        that.tabledatasgzadd.queryObj.params,
        "dutyPersonMId",
        that.dutyPersonMId
      );
      let queryObj = {
        // api配置
        apiConfig: that.tabledatasgzadd.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatasgzadd.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatasgzadd.pagesize,
          pageIndex: that.tabledatasgzadd.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatasgzadd.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
        ) {
          that.tabledatasgzadd.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.tabledatasgzadd.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatasgzadd.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    //分页
    prev1() {
      let that = this;
      if (this.tabledatasgzadd.pageindex > 1) {
        that.tabledatasgzadd.pageindex = this.tabledatasgzadd.pageindex - 1;
        this.initQueryAgentInfo();
      }
    },
    next1() {
      let that = this;
      if (true) {
        that.tabledatasgzadd.pageindex = this.tabledatasgzadd.pageindex + 1;
        this.initQueryAgentInfo();
      }
    },
    changepage1(index) {
      let that = this;
      that.tabledatasgzadd.pageindex = index;
      this.initQueryAgentInfo();
    },
  }
};
</script>
