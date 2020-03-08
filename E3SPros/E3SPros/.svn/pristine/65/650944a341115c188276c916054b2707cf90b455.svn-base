<template>
  <section>
    <el-form-item :label="labelname" :prop="checkprop">
      <el-input
        readonly="readonly"
        v-model="input"
        placeholder="点击选择角色"
        suffix-icon="el-icon-s-unfold"
        @click.native="showdialog()"
      ></el-input>
    </el-form-item>
    <el-dialog :visible.sync="dialogVisible" :title="labelname" @sentData="sendCode" width="900px" :append-to-body="true" center>
      <div class="filter-container filter-title-crm">
        <div style="float:right">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="sendCode">确定</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
      <div class="filter-container filter-params-crm">
      <el-row>
        <!-- <el-col :span="4">
          <el-tree :data="data" :props="defaultProps"></el-tree>
        </el-col> -->
        <el-col :span="24">
            <el-row>
              <el-col :span="10">
                <RoleName ref="RoleName" :RoleName="cxName"></RoleName>
              </el-col>
              <el-col :span="10">
              </el-col>
            </el-row>
          <el-table
      :data="tabledatas.tableData"
      @current-change="SelectH"
      highlight-current-row
      style="width: 100%;height:330px"
      v-loading.body="false"
      element-loading-text="Loading"
      border
      fit
      ref="multipleTable"
    >
      <el-table-column type="index" label="序号" width="55"></el-table-column>
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
        </el-col>
      </el-row>
      </div>
    </el-dialog>
  </section>
</template>

<script>
import { crmApis } from "@/api/graphQLApiList/crm";
import { requestGraphQL } from "@/api/commonRequest";
import Table from "@/components/crm/table/Table";
import RoleName from "@/components/crm/textbox/Public/RoleName.vue";
import WhetherGlobalRole from "@/components/crm/Select/Whether/WhetherGlobalRole.vue";
export default {
  name: "RoleSelection",
  components: {
    Table,
    RoleName,
    WhetherGlobalRole
  },
  props: {
    fromDatas: {
      input: String,
      checkprop:String,
      labelname: {
        type:String,
        default:"角色管理"
      }
    }
  },
  data() {
    return {
      rowData: { 
        positionId: "",
        positionCode: "",
        positionName: "",
      },
      cxName:{
        input:""
      },
      input: "",
      checkprop:this.fromDatas.checkprop,
      width: "900px",
      labelname: '角色管理',
      dialogVisible: false,
      form: {
        task: ""
      },
      formLabelWidth: "100px",
      tabledatas: {
        colnames: [
          { label: "角色编码", value: "positionCode" },
          { label: "角色名称", value: "positionName" }
        ],
        tableData: [
        ],
        queryObj: {
          // .后面是服务编码，.前面固定写死
          apiConfig: crmApis.mdsSysPositionQueryFindAll,
          apiQueryRow: [
            "positionId",
            "positionCode",
            "positionName"
          ],
          params: {
            positionName:"",
            isEnable:"1"
          }
        },
        pagesize: 10,
        pageindex: 1,
        total: 0
      },
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    showdialog: function() {
      let that = this;
      console.log("进来了");
      that.dialogVisible = true;
    },
    query: function() {
      let that = this;
      if(that.$refs.RoleName==undefined){
        that.tabledatas.queryObj.params.positionName=""
      }else{
        that.tabledatas.queryObj.params.positionName=that.$refs.RoleName.input
      }
      
      let queryObj = {
        // api配置
        apiConfig: that.tabledatas.queryObj.apiConfig,
        // 需要调用的API服务配置
        apiServices: [
          {
            //表格中台返回网格的字段
            apiQueryRow: that.tabledatas.queryObj.apiQueryRow
          }
        ],
        //条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
          pageSize: that.tabledatas.pagesize,
          pageIndex: that.tabledatas.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1" 
          //&&response.data[queryObj.apiConfig.ServiceCode].rows != ""
        ) {
          that.tabledatas.tableData=response.data[queryObj.apiConfig.ServiceCode].rows
          that.tabledatas.pageindex =response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.tabledatas.total =response.data[queryObj.apiConfig.ServiceCode].records;
        }
      });
    },
    handleSelect: function() {
      let that = this;
      that.input = this.$refs.table.rowData.name;
      that.dialogVisible = false;
    },
    reset: function() {
      let that = this;
      if(that.$refs.RoleName==undefined){}else{
        that.$refs.RoleName.reset()
      }
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
    changepage(index){
      let that=this
      that.tabledatas.pageindex=index
      this.query()
    },
    //赋值事件
    getData: function() {
      let that = this;
      that.input = that.fromDatas.input;
      //this.query();
    },
    clear: function() {
      let that = this;
      that.fromDatas.input=""
    },
    //行选择事件
    SelectH: function(row) {
      let that = this;
      that.rowData.positionId = row.positionId;
      that.rowData.positionCode = row.positionCode;
      that.rowData.positionName = row.positionName;
    },
    sendCode(){
      let that = this;
      that.dialogVisible = false;
      that.input=that.rowData.positionName
      var cityTemp = [];
      var cityObj = {};
      cityObj["positionId"] = that.rowData.positionId;
      cityObj["positionCode"] = that.rowData.positionCode;
      cityObj["positionName"] = that.rowData.positionName;
      cityTemp.push(cityObj);
      that.$emit('CatData', cityTemp);
    }
  }
};
</script>

<style scoped>
/* .dmo-form-inline {
  float: left;
  padding: 0px 15px;
  text-align: left;
  margin-top: 20px;
  width: 98%;
}
.dialog .el-dialog__body {
  padding: 10px 10px;
}
.dmo-form-inline .btton {
  float: right;
} */
</style>



