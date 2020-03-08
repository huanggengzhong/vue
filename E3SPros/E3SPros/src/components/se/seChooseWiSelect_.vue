<template>
    <section class="carType">
        <el-col :span="7" class="padding-l-10">
            <div class="filter-container filter-title">选择信息</div>
            <div class="filter-container filter-params">
                <el-row>
                    <div class="filter-container filter-button">
                        <el-button size="small" @click="affirm">确认</el-button>
                        <el-button size="small" @click="delect">删除</el-button>
                    </div>
                </el-row>
            </div>
            <el-table
                :data="tableList"
                element-loading-text="Loading"
                min-height="410"
                border
                stripe
                @select="tableListChoose"
                highlight-current-row
                >
                    <el-table-column align="center" label="序号" width="55">
                        <template slot-scope="scope">
                        {{ scope.$index + 1 }}
                        </template>
                    </el-table-column>
                    <el-table-column type="selection" width="65" align="center"/>
                    <el-table-column label="工时编码" align="center">
                        <template slot-scope="scope">
                        {{ scope.row.wiCode }}
                        </template>
                    </el-table-column>
                    <el-table-column label="维修内容" align="center">
                        <template slot-scope="scope">
                        {{ scope.row.wiName }}
                        </template>
                    </el-table-column>
                    <el-table-column label="车型编码" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.carTypeCode }}
                        </template>
                    </el-table-column>
                    <el-table-column label="维修工时" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.wiRepairQty }}
                        </template>
                    </el-table-column>
                    <el-table-column label="派工工时" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.wiWorkQty }}
                        </template>
                    </el-table-column>
                    <el-table-column label="工时大类" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.operatePartCode }}
                        </template>
                    </el-table-column>
                    <el-table-column label="工时小类" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.rrpairSmallKindCode }}
                        </template>
                    </el-table-column>
                    <el-table-column label="选择" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.isSelect }}
                        </template>
                    </el-table-column>
                    <el-table-column label="工时ID" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.wiId }}
                        </template>
                    </el-table-column>
                    <el-table-column label="工时编码" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.wiCode }}
                        </template>
                    </el-table-column>
                    <el-table-column label="车型ID" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.wiCartypeId }}
                        </template>
                    </el-table-column>
                    <el-table-column label="销售工时数" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.saleWiQty }}
                        </template>
                    </el-table-column>
                    <el-table-column label="维修大类名称" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.opratePlaceName }}
                        </template>
                    </el-table-column>
                    <el-table-column label="维修小类名称" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.rrpairSmallKindName }}
                        </template>
                    </el-table-column>
                    <el-table-column label="车辆品牌" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.carBrandCode }}
                        </template>
                    </el-table-column>
                     <el-table-column label="是否可用" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.isEnable }}
                        </template>
                    </el-table-column>
                     <el-table-column label="是否系统" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.isSystem }}
                        </template>
                    </el-table-column>
                     <el-table-column label="创建日期" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.createdDate }}
                        </template>
                    </el-table-column>
                     <el-table-column label="专营店编码" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.dlrCode }}
                        </template>
                    </el-table-column>
                    <el-table-column label="专营店ID" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.dlrId }}
                        </template>
                    </el-table-column>
                    <el-table-column label="厂商标识" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.oemCode }}
                        </template>
                    </el-table-column>
                    <el-table-column label="集团标识" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.groupCode }}
                        </template>
                    </el-table-column>
                    <el-table-column label="厂商标识ID " align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.oemId }}
                        </template>
                    </el-table-column>
                    <el-table-column label="集团标识ID" align="center" v-if="false">
                        <template slot-scope="scope">
                        {{ scope.row.groupId }}
                        </template>
                    </el-table-column>
                </el-table>
                <!-- <el-pagination
                background
                layout="prev, pager, next, sizes, ->, total"
                prev-text="上一页"
                next-text="下一页"
                :page-sizes="[10, 20, 30]"
                :page-size="10"
                :total="tableList?tableList.length:0"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                /> -->
        </el-col>
    </section>
 </template>
<script>
import { getCarType } from '@/api/components'
import { seApis } from '@/api/graphQLApiList/se'
import { doSeChooseWiSelect } from '@/api/se/seChooseWiSelect' 

export default {
 components: {
  },
  props:{
    code:{
      type:String,
      default:function(){
        return ''
      }
    },
  },
  data() {
    return {
      codeInside: this.code,
      listLoading: true,
      list: [],
      limits:1,
      tableList:[],
      isMul:1,
      tableChooseList:[],
      listQuery: {
        pageIndex:1,
        pageSize:1000,	
        dataInfo:{
            oemCode:'',
            groupCode:'',
            dlrId:'',
            secondDlrId:'',
            pfpCode:'',
            isLock:'',
            carTypeCode:'',
            wiCode:'',
            wiName:'',
            operatePartId:'',
            repairSmallKindCode:'',
            isSystem:'',
            appendcondition:'',
        }
      },
      responseData:[]
    }
  },
  created() {

  },
  methods: {
    tableListChoose(selection){
        this.tableChooseList = selection
    },
    affirm(){
        if(this.tableList.length === 0){
            this.$alert('未选中备件数据！', '信息提示', {
                    confirmButtonText: '确定',
                    type: 'warning',
                    callback: action => {
                    }
                });
        }else{
            if(this.limits === 0){
                if(this.tableList.length > 1){
                    this.$alert('当前为备件单选，只能选择一条数据！', '信息提示', {
                        confirmButtonText: '确定',
                        type: 'warning',
                        callback: action => {
                        }
                    });
                }else{
                    this.queryData(this.tableList)
                }
            }else{
                this.queryData(this.tableList)
            }
        }
    },
    getWiCode(){
        if(this.isMul === 1){
            let arr = []
            for(let i = 0; i <this.tableList.length; i++){
                arr[i] = this.tableList[i].wiCode
            }
            this.listQuery.dataInfo.wiCode = arr.join(',')
            console.log(this.listQuery.dataInfo.wiCode)
        }
    },
    queryData(tableList){
        let arr = []
        let length = tableList.length - 1
        for(let i = 0; i < tableList.length; i++){
            let obj = {}
            obj.carTypeCode = tableList[i].carTypeCode
            obj.wiCode = tableList[i].wiCode
            obj.wiName = tableList[i].wiName
            // obj.operatePartId = tableList[i].operatePartCode
            obj.repairSmallKindCode = tableList[i].repairSmallKindCode
            this.featchData(obj, i, length)
        }

    },
    featchData(data, i, length){
        let arr = []
        doSeChooseWiSelect(this.listQuery.pageSize,this.listQuery.pageIndex,data).then(response => {
            if (response.data[seApis.seChooseWiSelect.ServiceCode].result === '1') {
                arr = response.data[seApis.seChooseWiSelect.ServiceCode].rows
                this.responseData.push(arr[0])
                if(i === length){
                    this.$emit("sentData",this.responseData)
                }
            } else {
                this.$message({
                    message: '查询失败：' + response.data[seApis.seChooseWiSelect.ServiceCode].msg,
                    type: 'warn',
                    uration: 2000
                })
            }
        })
    },
    delect(){
        if(this.tableChooseList.length === 0){
            this.$alert('请选择要删除的数据！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
        }else{

            for(let i of this.tableChooseList){
                console.log(i)
                for(let j = 0;  j<this.tableList.length; j++){
                    if(i.wiId === this.tableList[j].wiId){
                        console.log(this.tableList[j])
                        this.tableList.splice(j,1)
                    }
                }
            }
        }
    },
    getData(val, isMul){
        this.responseData = []
        this.tableList = val
        this.isMul = isMul
    },
    limit(val){
        this.limits = val
    },
    reset(){
        this.tableList = []
    }
  }
}
</script>
