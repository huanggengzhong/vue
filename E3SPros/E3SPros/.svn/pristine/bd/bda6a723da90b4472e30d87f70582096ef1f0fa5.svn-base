<template>
 <div class="app-container app-container-table">
  <div class="filter-container filter-button" ref="searcheHeight">
     <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
     <el-button  size="small" @click="reset()">重置</el-button>
     </div>
  <div class="filter-container filter-title" ref="conTitleHeight">查询区</div>
  <div class="filter-container filter-params" ref="conHeight">
      <el-row :gutter="10">
        <el-col :span="6">
            <lableName
            curLabelName="VIN"
            :isShowLabel="true"
            :isRequire="false"
          ></lableName>
            <el-input v-model="listQuery.vin" placeholder="请输入" size="small" />
        </el-col>
        <el-col :span="6">
            <lableName
            curLabelName="车牌号"
            :isShowLabel="true"
            :isRequire="false"
          ></lableName>
            <el-input v-model="listQuery.carLicense" placeholder="请输入" size="small" />
        </el-col>
        <el-col :span="6">
            <lableName
            curLabelName="电池编号"
            :isShowLabel="true"
            :isRequire="false"
          ></lableName>
            <el-input v-model="listQuery.batteryNumber" placeholder="请输入" size="small" />
        </el-col>
        <el-col :span="6">
            <lableName
            curLabelName="电机编号"
            :isShowLabel="true"
            :isRequire="false"
          ></lableName>
            <el-input v-model="listQuery.engineCode" placeholder="请输入" size="small" />
        </el-col>
        <el-col :span="6">
            <lableName
            curLabelName="电控编号"
            :isShowLabel="true"
            :isRequire="false"
          ></lableName>
            <el-input v-model="listQuery.cdu" placeholder="请输入" size="small" />
        </el-col>
      </el-row>
     </div>
  <div class="filter-container filter-title" ref="resultTitleHeight">设置区</div>
     <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      stripe
      :height="tableHeight"
      :header-cell-style="tableHeaderRowClassName"
      highlight-current-row
      @row-click = "getRow"
     >
        <el-table-column align="center" label="序号" width="60">
          <template slot-scope="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>

        <el-table-column align="center" label="VIN">
          <!-- <template slot-scope="scope">{{ scope.row.vin}}</template> -->
          <template slot-scope="scope"><a style="color:#00F" @click="showDialog()">   {{ scope.row.vin }}</a></template>
        </el-table-column>

        <el-table-column align="center" label="车牌号">
          <template slot-scope="scope">{{ scope.row.carLicense}}</template>
        </el-table-column>

        <el-table-column align="center" label="电控编号">
          <template slot-scope="scope">{{ scope.row.cdu}}</template>
        </el-table-column>

        <el-table-column align="center" label="电机编号">
          <template slot-scope="scope">{{ scope.row.engineCode}}</template>
        </el-table-column>

        <el-table-column align="center" label="车系名称">
          <template slot-scope="scope">{{ scope.row.carSeriesCn}}</template>
        </el-table-column>

        <el-table-column align="center" label="车型名称">
          <template slot-scope="scope">{{ scope.row.smallCarTypeCn}}</template>
        </el-table-column>

        <el-table-column align="center" label="续航里程">
          <template slot-scope="scope">{{ scope.row.batteryEnduranceMileage}}</template>
        </el-table-column>

        <el-table-column align="center" label="车身颜色">
          <template slot-scope="scope">{{ scope.row.carColorName}}</template>
        </el-table-column>

        <el-table-column align="center" label="电池编号">
          <template slot-scope="scope">{{ scope.row.batteryNumber}}</template>
        </el-table-column>

        <el-table-column align="center" label="下线日期">
          <template slot-scope="scope">{{ scope.row.offlineDate}}</template>
        </el-table-column>

        <el-table-column align="center" label="交付日期">
          <template slot-scope="scope">{{ scope.row.invoiceDate}}</template>
        </el-table-column>

        <el-table-column align="center" label="交付门店">
          <template slot-scope="scope">{{ scope.row.saleDlrShortName}}</template>
        </el-table-column>

    </el-table>
     <el-pagination
      background
      ref="paginationHeight"
      layout="prev, pager, next, sizes, ->, total"
      prev-text="上一页"
      next-text="下一页"
      :page-sizes="[10, 20, 30]"
      :page-size="10"
      :total="list?list.length:0"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
</div>

</template>

<script>
import lableName from '@/components/lableName'
import { the_Height } from "@/views/se/makeHeight";
import { seApis } from '@/api/graphQLApiList/se'
import {
  doQueryList
} from '@/api/se/carInfo/mdmCar'
export default {
  filters: {
    isEnableFilter(isEnable) {
      const isEnableMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return isEnableMap[isEnable]
    }

  },
  mixins: [the_Height],
  components: {
    lableName
  },
  data() {
    return {
      tableHeight: 310, // 网格高度
      tableMarginHeight: 15,
      list: null,
      isEnable: '',
      listLoading: false,
      row:{},
      listQuery: {
        pageIndex: 1,
        pageSize: 5,
        limit: 10,
        type: undefined,
        flag: '',
        isEnable: '1',
        vin: '',
        carLicense: '',
        cdu: '',
        engineCode: '',
        batteryNumber: ''
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      }
    }
  },
  // created() {
  //   this.fetchData()
  // },
  methods: {
    fetchData() {
      this.listLoading = true
      doQueryList(this.listQuery).then(response => {
        this.list = response.data[seApis.mdmCarQueryFindAll.ServiceCode].rows
        this.listLoading = false
      })
    },
    getRow(val){
        this.row = val,
        console.log(this.row)
    },
    // tableRowClassName ({row, rowIndex}) {
    //     //把每一行的索引放进row
    //     row.index = rowIndex
    // },
    showDialog(){
      this.$router.push({  
            path: 'vehicleDataView',   
            name: 'vehicleDataView',  
            params: {   
                vin:this.row.vin,
                oemCode:this.row.oemCode,
                groupCode:this.row.groupCode
            }  
            /*query: {  
                key: 'key',   
                msgKey: this.msg  
            }*/  
        })  
    },
    // searchData(){
    //   if(this.listQuery.vin==[]||
    //      this.listQuery.vin==null||
    //      this.listQuery.carLicense==[]||
    //      this.listQuery.carLicense==null||
    //      this.listQuery.cdu==[]||
    //      this.listQuery.cdu==null||
    //      this.listQuery.engineCode==[]||
    //      this.listQuery.engineCode==null||
    //      this.listQuery.batteryNumber==[]||
    //      this.listQuery.batteryNumber==null
    //      )
    //      {
    //        this.$alert("请填写完整必填项", "提示", {
    //       confirmButtonText: "确定",
    //       type: "warning"
    //       });
    //       return;
    //      }
    //     else{
    //       this.fetchData()
    //     }
    // },
    reset(){
      this.listQuery.vin =null;
      this.listQuery.carLicense = null;
      this.listQuery.cdu = null;
      this.listQuery.engineCode = null;
      this.listQuery.batteryNumber = null;

    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val
      this.fetchData()
    }
  }
}
</script>

<style scoped>
.filter-params .el-col {
    min-width: 0px;
}
.el-form-item__content {
  margin-left: 0;
}
</style>
