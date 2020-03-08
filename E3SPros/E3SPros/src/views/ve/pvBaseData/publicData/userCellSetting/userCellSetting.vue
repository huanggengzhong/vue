<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button  type="primary" size="small" @click="queryTable(1)">查询</el-button>
      <el-button  size="small" @click="synchrony">同步</el-button>
      <el-button  size="small" @click="savaGrid">保存</el-button>
      <el-button  size="small" @click="reset">重置</el-button>
      <el-button  size="small">导出</el-button>
    </div>

    <div class="filter-container filter-title" ref="conTitleHeight" >查询条件</div>
    <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="26">
        <el-col :span="6">
          <label>用户名称</label>
          <el-input placeholder="请输选择" @focus="showserVisible" v-model="formField.userName" size="small" clearable></el-input>
        </el-col>
        <el-col :span="6">
          <label>小区</label>
          <el-input placeholder="请输入厂商名称" @focus="showSmallArea" v-model="formField.areaName" size="small" clearable></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      :row-class-name="tableRowClassName"
      v-loading="listLoading"
      :data="list"
      element-loading-text="加载中"
      border
      fit
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      ref="multipleTable"
      class="multipleTable"
    >
      <el-table-column type="selection" width="55" label="选择+" filed="chose"  current-row-key="smallAreaId" />
      <el-table-column align="center" label="序号"  width="60" type='index' prop="orgId">        
      </el-table-column>
     
      <el-table-column label="所属组织" align="center">
        <template slot-scope="scope">
          {{ scope.row.orgName }}
        </template>
      </el-table-column>
       <el-table-column label="用户" align="center">
        <template slot-scope="scope">
          {{ scope.row.userName }}
        </template>
      </el-table-column>
      <el-table-column label="登录名" align="center">
        <template slot-scope="scope">
          {{ scope.row.colnm1 }}
        </template>
      </el-table-column>
      <el-table-column label="用户类别" align="center">
        <template slot-scope="scope">
          {{ scope.row.colnm2 }}
        </template>
      </el-table-column>
      <el-table-column label="区域" align="center">
        <template slot-scope="scope">
          {{ scope.row.areaName }}
        </template>
      </el-table-column>
      <el-table-column label="小区+" align="center">
        <template slot-scope="scope">
          <div @click="smallAreaModal(scope.row)">
                {{ scope.row.smallAreaName }}<i class="el-icon-edit position"></i>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      prev-text="上一页"
      next-text="下一页"
      layout="prev, pager, next, sizes, ->, total"
      ref="paginationHeight"
      :total="pageTotal" :current-page.sync="listQuery.pageIndex" style="margin-bottom:10px">
    </el-pagination>
    <userSelect  @selectData="selcectDa" :key="showKey" :userSelectVisible="userVisible"/>
    <smallAreaModal :smallAreaModalVisible="aremVisible" :key="showAremkey" @changeCode="seleAreamData"/>
  </div>
</template>
<script>
import { orgApis } from '@/api/graphQLApiList/org'
import { requestGraphQL } from '@/api/commonRequest'
import userSelect from '@/components/org/userSelect/userSelect'
import smallAreaModal from '@/components/org/smallAreaModal/smallAreaModal'
export default {
  name:"",
  components: {
    userSelect,
    smallAreaModal,
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
      formLabelWidth: '120px',
      dialogFormVisible: false,
      list: null,
      listLoading: true,
      //设置网格总共的条数，查询完更改
      pageTotal:0,
      //表单查询数据
      formField:{
        userName:'',
        areaName:'',
      },
      
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      },
      tableHeight: 340,
      dialogStatus: '',
      handleTitle:0,
      //隐藏弹出框
      aremVisible:false,
      userVisible:false,
      showKey:'a',
      showAremkey:'b',
      gridData:{},
      seletRow:'',
    }
  },
  created() {
    this.queryTable(1)
  },
  mounted() {
    // 调用AppMain中的方法设置网格高度（自适应）
    if (this.$parent && this.$parent.setTableHeight) this.$parent.setTableHeight(20)
  },
  methods: {
    //获取选择用户的数据
    selcectDa(val){
        this.formField.userName = val[0].userName
    },
    //显示用户选择框
    showserVisible(){
        this.userVisible = true;
        this.showKey = this.showKey+1;
    },
    //显示小区选择框
    showSmallArea(){
        this.aremVisible = true;
        this.showAremkey = this.showAremkey+1;
    },
    //获取小区选中数据
    seleAreamData(val){
      console.log(val);
        this.formField.areaName = val;
    },
    //获取小区
    smallAreaModal(row){
      this.seletRow = row;
      this.aremVisible = true
      this.showAremkey = this.showAremkey+1;
    },
    //将选择的值赋给单元格
   /* getCarColorCode(val) {
     // this.carColorCode = val.code
      this.list[this.seletRow.index].carColor = val.name[0] ? val.name[0] :this.list[this.seletRow.index].carColor
      //关闭选择弹窗框
      this.carColorVisible = false
    },*/
    queryTable(page){
        const that = this
        let queryObj = {
          // api配置
          apiConfig: orgApis.userAreaQueryByPage,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:['orgId','orgName','orgCode','roleName','userName','password','isEnable']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: that.listQuery.pageSize,
            pageIndex: page || that.listQuery.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.formField
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          if(response.data[orgApis.userAreaQueryByPage.ServiceCode].result === '1' && response.data[orgApis.userAreaQueryByPage.ServiceCode].rows!=''){
              if(page){
                  //查询完返回指定的page页数
                  that.listQuery.pageIndex= page;
              }
              that.pageTotal = response.data[orgApis.userAreaQueryByPage.ServiceCode].records;
              that.list = response.data[orgApis.userAreaQueryByPage.ServiceCode].rows;
              that.listLoading = false;
            }
        })
    },
    //同步
    synchrony(){
      const that = this;
      //获取选择行的值    this.$refs.multipleTable获取网格  需要在网格添加ref="multipleTable"
      let selectData = that.$refs.multipleTable.selection;
      var selectIndexSort = [];
      for(var k in selectData ){
          selectIndexSort.push(selectData[k].index);
      }
      //选择行重新排序
      selectIndexSort.sort(function(a,b){return a>b?1:-1});
      for(var i = 1; i<selectIndexSort.length;i++){
          that.list[selectIndexSort[i]].smallAreaName = that.list[selectIndexSort[0]].smallAreaName;
      }
    },
    //把每一行的索引放进row
    tableRowClassName({row, rowIndex}) {
      row.index = rowIndex;
    },
    //重置
    reset() {
      this.formField.userName = '';
      this.formField.areaName = '';
    },
    //保存表格
    savaGrid(){
        const that = this;
        let selectData = that.$refs.multipleTable.selection;
        if(selectData.length == 0){
            this.$message({"message":"请至少选择一条数据",type: 'warning'});
            return false
        }
        let queryObj = {
          //保存需要传 type="mutation"
          type:'mutation',
          // api配置
          apiConfig: orgApis.userAreaMutation,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
              apiQueryRow:[]
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            pageSize: 1000,
            pageIndex: 1,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: selectData
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        requestGraphQL(paramD).then(response =>{
          if(response.data[orgApis.userAreaMutation.ServiceCode].result === '1' && response.data[orgApis.userAreaMutation.ServiceCode].rows!=''){
               this.$message({message:"保存成功",type: 'success'});
               that.$refs.multipleTable.clearSelection();
            }
        })
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.queryTable();
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val;
       this.queryTable();
    }
  }
}
</script>
<style scoped>
.gridSelect .el-col{
  margin-bottom: 0px;
}
.el-date-editor{
  width: 100% !important;
}
.el-input__prefix{
  left:82%;
}
.selectBlock{
  width: 100%;
  display: block;
}
.multipleTable a{
    color: #169BD5;
    text-decoration: underline;
}
.position{
  position: absolute;
  right: 5px;
  top: 30%;
  color:#169BD5;
}
</style>
