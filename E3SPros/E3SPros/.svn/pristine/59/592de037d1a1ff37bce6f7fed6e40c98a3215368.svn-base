<template>
    <section class="carType">
        <el-dialog
        :title="thimeTitle"
        :visible.sync="paChoosePartVisible"
        @close="close"
        width="900px"
        >
            <el-row>
                    <div class="filter-container filter-title">查询条件</div>
                        <div class="filter-container filter-params">
                            <el-row >
                                <carBrand :code="CarTypeModalData.carBrandCode" :span="8" @changeCode="getBrandCode"/>
                                <el-col :span="8" class="margin-b-10">
                                <label class="margin-r-0">车系名称</label>
                                <el-input
                                    v-model="listQuery.CAR_SERIES_CN"
                                    size="small"
                                />
                                </el-col>
                                <el-col :span="8" class="margin-b-10">
                                <label class="margin-r-0">车型名称</label>
                                <el-input
                                    v-model="listQuery.dataInfo"
                                    size="small"
                                />
                                </el-col>
                                <!-- <el-col :span="3" :offset="1" class=" textalign-l margin-b-0">
                                    <el-checkbox
                                    class="margin-r-0"
                                    v-model="listQuery.dataInfo"
                                    size="small"
                                    />
                                    <label class="margin-r-0">代产</label>
                                </el-col> -->
                                <div class="filter-container filter-button">
                                    <el-button type="primary" size="small" @click="fetchData()">查询</el-button>
                                    <el-button size="small" @click="select">车型选择</el-button>
                                    <el-button size="small" @click="reset">重置</el-button>
                                </div>
                            </el-row>
                        </div>
                        <div class="filter-container filter-title">查询结果</div>
                        <el-table
                        :data="list"
                        element-loading-text="Loading"
                        border
                        stripe
                        max-height="230"
                        style="width: 100%"
                        :header-cell-style="tableHeaderRowClassName"
                        highlight-current-row
                        @row-click="rowClickSelect"
                        @select="tableListSelect"
                        ref="chooseWiTable"
                        @select-all="tableListSelect"
                        >
                            <el-table-column align="center" label="序号" width="55">
                                <template slot-scope="scope">
                                {{ scope.$index + 1 }}
                                </template>
                            </el-table-column>
                            <el-table-column  type="selection" width="50" label="选择+" v-if="this.isMul"/>
                            <el-table-column label="车辆品牌">
                                <template slot-scope="scope">
                                {{ scope.row.CAR_BRAND_CN }}
                                </template>
                            </el-table-column>
                            <el-table-column label="车型编码">
                                <template slot-scope="scope">
                                {{ scope.row.CAR_TYPE_CODE }}
                                </template>
                            </el-table-column>
                            <el-table-column label="车系中文名称">
                                <template slot-scope="scope">
                                {{ scope.row.CAR_SERIES_CN }}
                                </template>
                            </el-table-column>
                            <el-table-column label="车系英文名称">
                                <template slot-scope="scope">
                                {{ scope.row.CAR_SERIES_EN }}
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination
                        background
                        layout="prev, pager, next, sizes, ->, total"
                        prev-text="上一页"
                        next-text="下一页"
                        :page-sizes="[10, 20, 30]"
                        :page-size="10"
                        :total="list?list.length:0"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        />
            </el-row>
        </el-dialog>
    </section>
 </template>
<script>
import { doPaChoosePartQuery,doFetchPaType } from '@/api/se/paChoosePart'
import { seApis } from '@/api/graphQLApiList/se'
import carBrand from '@/components/org/carBrand/carBrand'
import { requestGraphQL } from '@/api/commonRequest'


export default {
 components: {
    carBrand
  },
  props:{
    paChoosePartVisible:{
      type:Boolean,
      default:function(){
        return false
      }
    },
    code:{
      type:String,
      default:function(){
        return ''
      }
    },
    isMul:{
      type:Boolean,
      default:function(){
        return true
      }
    },
    //上传数据
    CarTypeModalData:{
      type:Object,
      default:function(){
        return { }
      }
    }
  },
  data() {
    return {
      codeInside: this.code,
      thimeTitle:'车型多选',
      listLoading: true,
      carTypeVisible:false,
      list: [],
      initResponData:[],
      selectTableList:[],
      optionDatas: [
      ],
      initData:{
        token:null,
        OEM_CODE:null,
        GROUP_CODE:null,
        Car_Brand_Code:null,
        CAR_BRAND_CN:null,
        CAR_BRAND_EN:null,
      },
      initResponData:{
        'T.CAR_BRAND_CODE':null,
        'T.CAR_BRAND_CN':null,
        'T.CAR_BRAND_EN':null
      },
      listQuery: {
        token:null,
        OEM_CODE:null,
        GROUP_CODE:null,
        CAR_SERIES_CN:null,
        CAR_SERIES_CODE:null,
        CAR_BRAND_CODE:null,
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      }
    }
  },
  created() {
    this.initTable()
    //this.fetchData()
    this.isMul? this.thimeTitle='车型多选':this.thimeTitle='车型单选'
  },
  methods: {
    getBrandCode(val) {
      this.listQuery.CAR_BRAND_CODE = val
    },
    initTable(){
        const that = this
        let queryObj = {
          // api配置
          apiConfig: seApis.ChooseCarType001,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
             apiQueryRow: ['CAR_TYPE_CODE', 'CAR_TYPE_CN', 'CAR_SERIES_CODE', 'CAR_SERIES_CN', 'CAR_SERIES_EN', 'CAR_BRAND_CODE','CAR_BRAND_CN','CAR_BRAND_EN']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // pageSize: that.listQuery.pageSize,
            // pageIndex: page || that.listQuery.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.initData
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
          that.initResponData = response.data[seApis.ChooseCarType001.ServiceCode]
          console.log(that.initResponData)
        })
    },
    fetchData(){
    this.initTable()
        this.listLoading = true
        const that = this
        let queryObj = {
          // api配置
          apiConfig: seApis.ChooseCarType002,
          // 需要调用的API服务配置
          apiServices: [{
              //表格中台返回网格的字段
             apiQueryRow: ['CAR_TYPE_CODE', 'CAR_TYPE_CN', 'CAR_SERIES_CODE', 'CAR_SERIES_CN', 'CAR_SERIES_EN', 'CAR_BRAND_CODE','CAR_BRAND_CN','CAR_BRAND_EN']
          }],
          //条件/实体参数（变量），根据typeParam中的定义配置
          variables: {
            // pageSize: that.listQuery.pageSize,
            // pageIndex: page || that.listQuery.pageIndex,
            //当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: that.listQuery
          }
        }
        //转换了中台请求格式数据
        var paramD = that.$getParams(queryObj);
        // 调用中台API方法（可复用）
        requestGraphQL(paramD).then(response =>{
            console.log(response)
              that.list = response.data[seApis.ChooseCarType002.ServiceCode].rows;
              this.listLoading = false

        })
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.fetchData()
    },
    getCarTypeCode(val) {
      this.carTypeVisible = false
      this.listQuery.isEnable = val
    },
    sendData(data) {
        if(data===null||data===undefined||data===''){
            data=[]
        }
        this.$emit("seChooseWiData",data)
    },
    carTypeModal() {
      this.carTypeVisible = true
    },
    tableListSelect(selection){
        this.selectTableList=selection
    },
    select(){
        if(this.selectTableList.length === 0){
             this.$alert('您未选中数据！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
        }else{
            this.$emit("sentCarTypeModal",this.selectTableList)
        }
    },
    close(){
        this.$emit("close",false)
    },
    reset(){
        this.listQuery={}
        this.CarTypeModalData.carBrandCode = ''
    },
    rowClickSelect(row,event){
        this.selectTableList = row
    },
    getData(data){
        if(data===null||data===undefined||data===''){
            this.$alert('没有需要保存的数据！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
        }else{
            this.sendData(data)
        }
    }
  }
}
</script>
<style scoped>
.margin-r-0{
    margin-right: 0;
}
.margin-b-10{
    margin-bottom: 10px;
}
.margin-b-0{
    margin-bottom: 0;
}
.padding-l-10{
    padding-left: 10px;
}
.textalign-l{
    text-align: left;
}
.color_{
    color: #169BD5;
}
.dis-IB{
    display: inline-block;
}
.el-dialog__wrapper {
    z-index: 3000!important;
}
</style>
