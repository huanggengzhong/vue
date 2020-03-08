<template>
  <section>
    <el-table
      :data="tableData"
      :stripe="flag"
      highlight-current-row
      @current-change="handleSelect"
      style="width: 100%;height:330px;overflow-x:auto"
      v-loading.body="listLoading"
      element-loading-text="Loading"
      border
      fit
    >
      <el-table-column type="selection" width="50" v-if="isdisplay.ismuti"></el-table-column>
      <el-table-column type="index" label="序号" width="60"></el-table-column>
      <el-table-column label="操作" v-if="isdisplay.isoperat"  align="center" >
        <template slot-scope="scope">
          <!-- <el-popover
            placement="bottom-start"
            width="200"
            trigger="click"
          >
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-if="isdisplay.haveEdit">修改</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-if="isdisplay.havedistrbute">分配</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-if="isdisplay.haveDel">删除</el-button>
            <el-button size="mini" slot="reference">编辑</el-button>
          </el-popover>-->
          <!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
          <el-button
            size="mini"
            type="text"
            @click="handleEdit(scope.$index, scope.row)"
            v-if="isdisplay.haveEdit"
          >编辑</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            v-if="isdisplay.havedistrbute"
          >分配</el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
            v-if="isdisplay.haveDel"
          >删除</el-button>
          <el-button size="mini" @click="selectView" v-if="isdisplay.haveView">选项查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-for="item in colnames"
        :key="item.value"
        :label="item.label"
        :prop="item.value"
        :width="item.width"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="pagesize"
      :current-page="pageindex"
      @prev-click="prev"
      @next-click="next"
      @current-change="changepage"
    ></el-pagination>
  </section>
</template>

<script>
import { requestGraphQL } from "@/api/commonRequest";
export default {
  name: "Table",
  props: {
    tabledatas: {
      isoperat: Boolean,
      havedistrbute: Boolean,
      haveEdit: Boolean,
      haveDel: Boolean,
      haveView: Boolean,
      colnames: Array,
      queryObj: Object,
      ismuti: Boolean,
      data: Array
    }
  },
  data() {
    return {
      isdisplay: {
        haveEdit: this.tabledatas.haveEdit,
        isoperat: this.tabledatas.isoperat,
        havedistrbute: this.tabledatas.havedistrbute,
        haveDel: this.tabledatas.haveDel,
        ismuti: this.tabledatas.ismuti,
        haveView: this.tabledatas.haveView
      },
      rowData: {},
      flag: true,
      colnames: this.tabledatas.colnames,
      tableData: [],
      listLoading: false,
      pagesize: 8,
      pageindex: 1,
      total: 0
    };
  },
  // mounted: function() {
  //   this.getData();
  // },
  methods: {
    handleEdit(index, row) {
      let that=this
      this.$emit("clickedit",row)
    }, //scope.row包含整行数据
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSelect: function(row) {
      let that = this;
      console.log(row);
      that.rowData = row;
    },
    selectView: function() {
      let _this = this;
      _this.$emit("selectView", 1);
    },
    prev(index){
      let that=this
      that.pageindex=index
      this.getData()
    },
    next(index){
      let that=this
      that.pageindex=index
      this.getData()
    },
    changepage(index){
      let that=this
      that.pageindex=index
      this.getData()
    },
    getData(firstPage) {
      let that = this;
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
          pageSize: that.pagesize,
          pageIndex: that.pageindex,
          //当前中台使用的名称有dataInfo、info，具体查看API文档
          dataInfo: that.tabledatas.queryObj.params
        }
      };
      if(firstPage){
        queryObj.variables.pageIndex=firstPage
      }
      //转换了中台请求格式数据
      var paramD = that.$getParams(queryObj);
      // 调用中台API方法（可复用）
      requestGraphQL(paramD).then(response => {
        if (
          response.data[queryObj.apiConfig.ServiceCode].result == "1"
        ) {
          that.tableData =
            response.data[queryObj.apiConfig.ServiceCode].rows;
          that.pageindex =
            response.data[queryObj.apiConfig.ServiceCode].pageindex;
          that.total =
            response.data[queryObj.apiConfig.ServiceCode].records;
            that.listLoading=false;
        }
        else {
          this.$notify.error({
            title: "错误",
            message: response.data[queryObj.apiConfig.ServiceCode].msg
          });
          that.listLoading=false;
        }
      });
    },
    //清空表格数据
    reset(){
      let that=this;
      that.tableData=[]
    }
  }
};
</script>