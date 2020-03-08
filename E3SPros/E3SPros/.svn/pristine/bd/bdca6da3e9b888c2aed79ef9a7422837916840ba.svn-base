<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" ref="searcheHeight">
      <el-button  type="primary" size="small" @click="queryList(1)">查询</el-button>
      <el-button  size="small" @click="addPage">新增</el-button>
      <el-button  size="small" @click="printPage">打印</el-button>
      <el-button  size="small" @click="exportExcel" v-if="false">导出</el-button>
      <el-button  size="small" @click="reset">重置</el-button>
    </div>
    <div class="filter-container filter-params" ref="conHeight">
        <el-row :gutter="24">
          <el-col :span="22">
            <el-col :span="6">
              <lableName curLabelName="送修日期" :isShowLabel="true" :isRequire="true"></lableName>
              <el-date-picker
                  v-model="listQueryField.repairTime"
                  type="daterange"
                  value-format="yyyy-MM-dd" 
                  format="yyyy-MM-dd"
                  :picker-options="begPickerOptions"
                  unlink-panels>
              </el-date-picker>
            </el-col>
            <el-col :span="6">
                <lableName curLabelName="施工单号" :isShowLabel="true" :isRequire="false"></lableName>
                <el-input
                v-model="listQueryField.repairOrderCode"
                placeholder=""
                size="small">
                </el-input>
            </el-col>
            <el-col :span="6">
                <lableName curLabelName="车牌号" :isShowLabel="true" :isRequire="false"></lableName>
                <el-input
                v-model="listQueryField.carLicense"
                placeholder=""
                size="small">
                </el-input>
            </el-col>
            <el-col :span="6">
                <lableName curLabelName="VIN码" :isShowLabel="true" :isRequire="false"></lableName>
                <el-input
                v-model="listQueryField.vin"
                placeholder=""
                size="small">
                </el-input>
            </el-col>
          </el-col>
          <el-col :span="2" class="moreBtn" v-if="true">
            <el-button
              :icon="moreBtnIcon"
              @click="changeToggleParam"
              class="moreParam">更多</el-button>
          </el-col>
          <el-col :span="22" v-show="toggleParam" :class="false ? 'toggleParam' : 'toggleParam toggleAbsolute'">
              <el-col :span="6">
                  <lableName curLabelName="送修人" :isShowLabel="true" :isRequire="false"></lableName>
                  <el-input
                  v-model="listQueryField.repairMan"
                  placeholder=""
                  size="small">
                  </el-input>
              </el-col>
              <el-col :span="6">
                  <lableName curLabelName="送修人电话" :isShowLabel="true" :isRequire="false"></lableName>
                  <el-input
                  v-model="listQueryField.repairTel"
                  placeholder=""
                  size="small">
                  </el-input>
              </el-col>
              <el-col :span="6">
                  <lableName curLabelName="服务代表" :isShowLabel="true" :isRequire="false"></lableName>
                  <el-select
                  collapse-tags
                  filterable
                  v-model="listQueryField.saEmpId"
                  placeholder="全部"
                  clearable
                  size="small">
                      <el-option
                      v-for="(item, i) in saEmpOptions"
                      :key="`saEmp_${i}`"
                      :label="item.text"
                      :value="item.code"
                      >{{item.text}}</el-option>
                  </el-select>
              </el-col>
              <LookupValue :span="6" :key="lookupSelCodeKey" :code="lookupSelCode" :isMul="isMul" :isShowLabel="true"  :lookuptype="lookuptypeCode" :labelName='lookupvalueLabel'  @changeCode="getRepairOrderStatus" />
          </el-col>
        </el-row>
    </div>
    <div class="filter-container filter-title" ref="resultTitleHeight">查询结果</div>
    <el-table
      :row-class-name="tableRowClassName"
      v-loading="listLoading"
      class="multipleTable"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      :cell-class-name="addTdClass"
      highlight-current-row
      @row-click="rowClick"
      ref="multipleTable">
      <el-table-column label="序号" width="60" type='index' align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <span class="operate" v-if="scope.row.repairOrderStatus != '' || scope.row.repairOrderStatus != '-1'">
            <a href='#' @click="goWorkOrderPage('modify',scope.row.repairOrderId,scope.$index)">修改</a>
          </span>
          <span class="operate" v-else>
            <a href='javascript:void(0)' @click="goWorkOrderPage('view',scope.row.repairOrderId,scope.$index)">查看</a> | 
            <a href='javascript:void(0)' @click="goWorkOrderPage('append',scope.row.repairOrderId,scope.$index)">追加</a>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="施工单号" prop="repairOrderCode" width="180" align="center">
        <template slot-scope="scope">
          {{scope.row.repairOrderCode}}
        </template>
      </el-table-column>
      <el-table-column label="车主" prop="custName" align="center" width="100">
        <template slot-scope="scope">
          {{ scope.row.custName }}
        </template>
      </el-table-column>
      <el-table-column label="车牌号" prop="carLicenseNo" align="center" >
        <template slot-scope="scope" >
          {{ scope.row.carLicenseNo }}
        </template>
      </el-table-column>
      <el-table-column label="VIN码" prop="vin" align="center" width="150">
        <template slot-scope="scope">
          {{ scope.row.vin }}
        </template>
      </el-table-column>
      <el-table-column label="送修人" prop="repairMan" align="center">
        <template slot-scope="scope">
          {{scope.row.repairMan}}
        </template>
      </el-table-column>
      <el-table-column label="送修人电话" prop="repairTel" align="center" width="100">
        <template slot-scope="scope">
          {{scope.row.repairTel}}
        </template>
      </el-table-column>
      <el-table-column label="送修时间" prop="trunRepairDate" align="center">
        <template slot-scope="scope">
          {{scope.row.trunRepairDate}}
        </template>
      </el-table-column>
      <el-table-column label="预计交车时间" prop="preGetDate" align="center" width="120">
        <template slot-scope="scope">
          {{scope.row.preGetDate}}
        </template>
      </el-table-column>
      <el-table-column label="维修状态" prop="repairStatusName" align="center">
        <template slot-scope="scope">
          {{scope.row.repairStatusName}}
        </template>
      </el-table-column>
      <el-table-column label="收款状态" prop="isGatherName" align="center">
        <template slot-scope="scope">
          {{scope.row.isGatherName}}
        </template>
      </el-table-column>
      <el-table-column label="行驶里程" prop="mileage" align="center">
        <template slot-scope="scope">
          {{scope.row.mileage}}
        </template>
      </el-table-column>
      <el-table-column label="服务代表" prop="saName" align="center">
        <template slot-scope="scope">
          {{scope.row.saName}}
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
      :total="pageTotal" :current-page.sync="listQuery.pageIndex">
    </el-pagination>
    <seBuRepairOrderQueryPrint :editTable="{}" ref="seBuRepairOrderQueryPrint"></seBuRepairOrderQueryPrint>
  </div>
</template>
<script>
import { seApis } from '@/api/graphQLApiList/se'
import { doQueryList,doQuerySeList, doQuerySaList } from '@/api/se/process/workorder/repairWorkOrderList'
import LookupValue from '@/components/org/LookupValue'
import seBuRepairOrderQueryPrint from '@/components/se/seBuRepairOrderQueryPrint'
import lableName from "@/components/lableName"
export default {
  name:'repairWorkOrderList',
  components: {
    LookupValue,
    seBuRepairOrderQueryPrint,
    lableName
  },
  data() {
    return {
      //表的值
      list: null,
      //表loading状态是否现实
      listLoading: false,
      //设置网格总共的条数，查询完更改
      pageTotal:0,
      isMul: false,
      lookuptypeCode:"SE0026",
      lookupvalueLabel:"维修状态",
      lookupSelCode:'',
      lookupSelCodeKey:'ll',
      //存储被点击得
      selectRow:'',
      //表单查询数据
      listQueryField:{
        repairTime: [],
        carLicense:'',
        vin:'',
        repairOrderCode:'',
        repairMan:'',
        repairTel:'',
        saEmpId:'',
        repairOrderStatus:'',
        queryType:'4000210',//场景编码： 4000210 场景描述： 施工单制作查询列表
        isAccurate:'1'//0：模糊查询，1：精确查询
      },
      listQuery: {
        pageIndex: 1,
        pageSize: 10,
        limit: 20,
      },
      seQueryField:{//查询服务代表下拉框
        dlrId:'',
        isEnable:'',
        positionCode:'SE0089',
        deptId:'',
        stationId:'',
        isEnable: '1'
      },
      saEmpOptions:[],
      //设置key更改状态,key 唯一
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      },
      tableHeight: 310,
      begPickerOptions: this.getBegPickerOptions(),
      endPickerOptions: this.getEndPickerOptions(),
      // 更多按钮图标
      moreBtnIcon: 'el-icon-plus',
      // 是否显示更多查询条件
      toggleParam: false
    }
  },
  created() {
    var nowDate = new Date()
    this.querySeList();//查询服务代表下拉框
  },
  mounted() {
    this.setTableHeight()
  },
  methods: {
    setTableHeight(){
      // 调用AppMain中的方法设置网格高度（自适应）
      var parent = this.$utils.getParentView(this.$route.path, this.$parent);
      if (parent) {
        parent.setTableHeight()
      }
    },
    queryList(page,dataType){
      const that = this
      if(!this.listQueryField.repairTime || this.listQueryField.repairTime.length === 0){
        this.$message({
          type: 'info',
          message: `请先选择送修日期`
        });
        return false
      }
      let time = that.listQueryField.repairTime
      let param = Object.assign({}, that.listQueryField)
      delete param.repairTime
      param.repairTimeBeg = time[0] + ' 00:00:00'
      param.repairTimeEnd = time[1] + ' 23:59:59'
      this.listLoading = true
      that.selectRow = {}
      //转换了中台请求格式数据
      var pageSize = dataType == 'excel'? 99999 : that.listQuery.pageSize
      var tableColumns = this.$refs.multipleTable == null?null:this.$refs.multipleTable.columns
      doQueryList(pageSize, page || that.listQuery.pageIndex, param, dataType,'维修施工单列表导出','维修施工单列表',tableColumns)
      .then(response => {
          if(dataType == 'excel'){//导出excel查询
            that.$utils.downloadFile(response, '维修施工单导出.xlsx')
          }
          else{//网格查询
            var resData = response.data[seApis.seBuRepairOrderQueryMain.ServiceCode]
            if (resData.result === "1") {
              if (page) {
                //查询完返回指定的page页数
                that.listQuery.pageIndex = page
              }
              that.pageTotal = response.data[seApis.seBuRepairOrderQueryMain.ServiceCode].records
              that.list = response.data[seApis.seBuRepairOrderQueryMain.ServiceCode].rows
            } else {
              this.$message({
                type: 'error',
                message: resData.msg
              })
            }
            that.listLoading = false
          }
      })
    },
    exportExcel(){
      this.queryList(1,'excel')
    },
    buildExportParam(queryObj, paramD){},
    querySeList(){
      const that = this;
      //转换了中台请求格式数据
      doQuerySaList(-1, 1, that.seQueryField)
      .then(response => {
        if (response.data[seApis.seCommonQueryServiceSa.ServiceCode].result === "1") {
          let tempList = response.data[seApis.seCommonQueryServiceSa.ServiceCode].rows;
          var tempSaEmpOptions=[];
          tempList.forEach(row => {
            tempSaEmpOptions.push({code:row.empId,text:row.empName});
          });
          that.saEmpOptions=tempSaEmpOptions;
        }
      });
    },
    //把每一行的索引放进row
    tableRowClassName ({row, rowIndex}) {
      row.index = rowIndex;
    },
    //动态添加样式
    addTdClass({row, column, rowIndex, columnIndex}){
      //判断行和列的位置并且动态添加className
      if(rowIndex %2 !=0 && (columnIndex == 5 || columnIndex == 7 || columnIndex == 8)){
           return 'inputBackground'
      }
    },
    getRepairOrderStatus(selVal){
      this.listQueryField.repairOrderStatus=selVal;
      this.lookupSelCode=selVal;//修改code值，重置时，清空才能触发change事件
    },
    rowClick(row, column, event){
        this.selectRow = row;
    },
    //添加
    addPage(){
      const that = this;
      that.selectRow = {};
      that.$router.push({ name: `seRepairWorkOrderEdit`,query:{flag:'add',repairOrderId:''}})
    },
    printPage(){
      if(this.selectRow.repairOrderId == null){
            this.$message({"message":"选择一条数据",type: 'warning'});
            return false
      }
      this.$refs.seBuRepairOrderQueryPrint.open({groupCode:'',oemCode:'',dlrId:'',repairOrderId:this.selectRow.repairOrderId})
    },
    //编辑,查看，追加
    goWorkOrderPage(flag,repairOrderId,index){
      const that = this;
      that.$router.push({ name: `seRepairWorkOrderEdit`,query:{flag:flag,repairOrderId:repairOrderId}})
    },
    //重置
    reset(){
      this.listQueryField = {
        repairTime: [],
        carLicense:'',
        vin:'',
        repairOrderCode:'',
        repairMan:'',
        repairTel:'',
        saEmpId:'',
        repairOrderStatus:''
      };
      this.lookupSelCode=''
    },
    //显示车身模块
    carColorModal(row) {
      this.selectRow = row;
      this.carColorVisible = true
    },
    //将选择的值赋给单元格
    getCarColorCode(val) {
     // this.carColorCode = val.code
      this.list[this.selectRow.index].carColor = val.name[0] ? val.name[0] :this.list[this.selectRow.index].carColor
      //关闭选择弹窗框
      this.carColorVisible = false
    },
    //改变页现实的条数并重新查询
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.queryList()
    },
    //翻页
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.queryList()
    },
    getBegPickerOptions() {//开始日期选项
      const self = this;
      return {
        disabledDate(time) {//什么情况下的日期禁止选择
          if(self.listQueryField.repairTimeEnd!=''){
            return time.getTime() > new Date(self.listQueryField.repairTimeEnd).getTime();
          }
          return false;
        }
      }
      },
    getEndPickerOptions() {//结束日期选项
      const self = this;
      return{
        disabledDate(time) {//什么情况下的日期禁止选择
          if(self.listQueryField.repairTime){
            return time.getTime() < new Date(self.listQueryField.repairTime).getTime() - 1000 * 60 * 60 * 8;//8小时时区差
          }
          return false;
        }
      }

    },
    // 更多按钮点击事件
    changeToggleParam() {
      this.toggleParam = !this.toggleParam
      if (this.toggleParam) {
        this.moreBtnIcon = 'el-icon-minus'
      } else {
        this.moreBtnIcon = 'el-icon-plus'
      }
      this.setTableHeight()
    },
  }
}
</script>
