<template>
  <div class="app-container app-container-table">
    <div class="filter-container filter-button" >
      <template>
      <el-button type="primary" size="small" @click="saveData()">保存</el-button>
      </template>
      <el-button size="small" @click="reduction()">还原</el-button>
    </div>
    <div class="filter-container filter-params">
      <el-row :gutter="24">
          <LookupValue :span="8" :isMul="isMul" :isShowLabel="isshow"  :lookuptype="lookuptype" :labelName='lookupValuelable' @changeCode="getLookupValue" />
      </el-row>
    </div>
    <div class="filter-container filter-title">查询结果</div>
    <div  style="padding-left: 4px; padding-right: 1px; width: 50%;float:left" >
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      ref="multipleTable"
      height="415"
      border
      fit
      stripe
      
      highlight-current-row
      @row-click="dataChange"
    >
      <el-table-column align="center"  label="序号" width="60">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column label="选择" type="selection" width="60" align="center" >
      </el-table-column>
      <el-table-column label="星期" align="center"  >
        <template slot-scope="scope">
          {{ scope.row.aduitDateWeekName }}
        </template>
        </el-table-column>
      <el-table-column label="采购单分配类型" align="center" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.orderCheckConfigId }}
        </template>
      </el-table-column>
      <el-table-column label="采购单分配类型" align="center" width="120">
        <template slot-scope="scope">
          {{ scope.row.purAssignTypeName }}
        </template>
      </el-table-column>
      <el-table-column label="是否启用" type="select" align="center" width="120">
        <template slot-scope="scope">
          <el-select  v-model="scope.row.isEnable" size="small">
            <el-option
              v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
             </el-option>
          </el-select>
       </template>
      </el-table-column>
      <el-table-column label="审核开始时间" align="center" width="120">
        <template slot-scope="scope">
          {{ scope.row.aduitDateBegin }}
        </template>
      </el-table-column>
      <el-table-column label="审核结束时间" align="center" width="120">
        <template slot-scope="scope">
          {{ scope.row.aduitDateEnd }}
        </template>
      </el-table-column>
      <el-table-column label="时间类型" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.timeType }}
        </template>
      </el-table-column>
      <el-table-column label="审核时间类型" v-if="false">
        <template slot-scope="scope">
          {{ scope.row.aduitDateType }}
        </template>
      </el-table-column>
    </el-table>
    </div>
    
    <div style="padding-left: 4px; padding-right: 1px; width: 50%;float:left" >
    <div style="background-color:#FFFFFF" >
    <div class="filter-container filter-title">审核时间范围</div>
    <div class="filter-container filter-params" style="margin-top:0px;padding-top:0px">
      <el-row :gutter="24">
        <el-col :span="12">
          <label>审核起始时间</label>
          <el-time-select 
           :disabled="disabledTimeInput" 
           style="width:160px"
           placeholder="起始时间"
           v-model="dataInfoD.aduitDateBegin"
           :picker-options="{
           start: '08:30',
           step: '00:15',
           end: '18:30',
           maxTime: dataInfoD.aduitDateEnd
           }"
           @change="changeCodeTime">
          </el-time-select >
        </el-col>
        <el-col :span="12">
          <label>审核结束时间</label> 
          <el-time-select 
           :disabled="disabledTimeInput"
           style="width:160px"
           placeholder="结束时间"
           v-model="dataInfoD.aduitDateEnd"
           :picker-options="{
           start: '08:30',
           step: '00:15',
           end: '18:30',
           minTime: dataInfoD.aduitDateBegin
           }"
           @change="changeCodeTime">
          </el-time-select>
        </el-col> 
      </el-row>
    </div>
    <div class="filter-container filter-title" style="margin-top:0px">审核时间点</div>
    <div class="filter-container filter-params" style="margin-top:0px;padding-top:0px">
      <el-row :gutter="24">
        <el-col :span="8" style="margin-left:28px;">
          <label>每隔</label>
          <el-radio v-model="radio" label="0" @change="changeTimeType" :disabled="disabledRadio">&nbsp;</el-radio>
        </el-col>
        <el-col :span="3">
          <el-input v-model="dataInfoD.aduitDateQuantum" size="small" :disabled="disabledTimeData" @change="changeCode"></el-input>
        </el-col>
        <el-col :span="11">
          <el-select size="small" v-model="dataInfoD.aduitDateType" style="margin-left:77px" :disabled="disabledTimeData" @change="changeCode">
          <el-option 
           v-for="item in options3"
           :key="item.value"
           :label="item.label"
           :value="item.value">
          </el-option>
          </el-select>  
        </el-col>    
      </el-row>
      <el-row :gutter="24">
        <el-col :span="8" style="margin-left:28px;">
          <!--<label>指定时间点</label>-->
          <lableName curLabelName="指点时间点" :isShowLabel="true" :isRequire="false"></lableName>
          <el-radio v-model="radio" label="1" @change="changeTimeType" :disabled="disabledRadio">&nbsp;</el-radio>
        </el-col>
        <el-col :span="11" style="margin-left:70px">
          <el-button @click="delData()" :disabled="disabledInput">删除</el-button>
          <el-button @click="addData()" :disabled="disabledInput">添加</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table 
    :data="aduitDataList"
    border
    fit
    stripe
    
    highlight-current-row
    height="250"
    @row-click="aduitDataClick"
    >
    <el-table-column label="序号" align="center" width="100" >
      <template slot-scope="scope">
        {{ scope.$index + 1 }}
      </template>
    </el-table-column>
    <el-table-column label="指定时间点+" align="center">
      <template slot-scope="scope">
        <el-input size="small" v-model="scope.row.aduitDate" :disabled="disabledInput" @blur="checkDate($event)"></el-input> 
      </template>
    </el-table-column>
  </el-table>
    </div>
    </div>
  
  </div>
</template>

<script>
import { paDbOrderCheckConfigQueryFindAll,
         paDbOrderCheckConfigMutationSave,
         paDbOrderConfigDQueryFindAll } 
from "@/api/pa/orderManage/paDbOrderCheckConfigQuery"
import { paApis } from '@/api/graphQLApiList/pa'
import { requestGraphQL } from '@/api/commonRequest'
import LookupValue from '@/components/org/LookupValue/index'
import { constants } from 'crypto';
import { async } from 'q';
import lableName from "@/components/lableName/index";

export default {
  components: {
    LookupValue,
    lableName
  },
  data(){
    return{
      //是否启用下拉框
      options: [
        { value: "0", label: "否" },
        { value: "1", label: "是" }
      ],
      //时分单位下拉框
      options3: [
        { value: "0", label: "时" },
        { value: "1", label: "分" }
      ],
      lookupValuelable: '采购单分配类型',
      lookuptype: 'PA0042',
      pageIndex: -1,
      pageSize: -1,
      dialogVisible: false,
      isMul: false,
      code: '1',
      timeType : '1',
      radio: '1',
      list: null,
      aduitDataList: [],
      aduitDataList1: [],
      carColorVisible: false,
      listLoading: false,
      result: '',
      msg: null,
      selectlistRow: [],
      disabledInput : true,
      disabledTimeData : true,
      disabledRadio :true,
      disabledTimeInput :true, 
      listQuery: {
          purAssignType:'',
          aduitDateWeek: ''
      },
        dataInfo: [],
        dataInfoD1: {
          purAssignType: '',
          aduitDateBegin: '',
          aduitDateEnd: '',
          aduitDateQuantum: '',
          aduitDateType: '',
        },
        dataInfoD:{
          purAssignType:'',
          aduitDateBegin:'',
          aduitDateEnd:'',
          aduitDateQuantum:'',
          aduitDateType:'',
          
        },
        timeInfo:[{
            aduitDate:''
        }],
      
      listQuery3:{  
          orderCheckConfigId:''    
      },
      
    }
  },
  created(){
     //this.listQuery.purAssignType = '',
     //this.fetchData()
     //console.log(this.aduitDataList)
  },
  methods:{
    getBrandCode(val) {
      this.listQuery.brandCode = val
    },
    getSetStatusCode(val) {
      this.listQuery.status = val
    },
    getIsEnableCode(val) {
      this.listQuery.isEnable = val
    },
    getCarColorCode(val) {
      this.listQuery.carColorCode = val.code
      this.listQuery.carColorName = val.name
      this.carColorVisible = false
    },
    fetchData() {
      this.listLoading = true
      paDbOrderCheckConfigQueryFindAll(this.pageSize,this.pageIndex,this.listQuery).then(response => {
        if (
            response.data.paDbOrderCheckConfigQueryFindAll.result === "1" &&
            response.data.paDbOrderCheckConfigQueryFindAll.rows != ""
          ) {
          console.log(response.data[paApis.paDbOrderCheckConfigQueryFindAll.ServiceCode].rows)
          this.list = response.data[paApis.paDbOrderCheckConfigQueryFindAll.ServiceCode].rows
          this.listLoading = false
        }
      })
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = this.list.pageSize
      this.fetchData()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = this.list.pageSize
       this.fetchData()
    },
    carColorModal() {
      this.carColorVisible = true
    },
    saveData(){
      
       this.dataInfo = []
       var arr = this.$refs.multipleTable.selection;
       for(let i = 0; i < arr.length; i++) {
           var dataInfo1 = {
             orderCheckConfigId: '',
             aduitDateWeek: '',
             isEnable: ''
           }
         dataInfo1.orderCheckConfigId = arr[i].orderCheckConfigId
         dataInfo1.aduitDateWeek = arr[i].aduitDateWeek
         dataInfo1.isEnable = arr[i].isEnable        
         this.dataInfo.push(dataInfo1)

       }
       
       if(this.dataInfo.length == 0){
         this.$message.warning("请至少选中一行数据")
         return false
       }
       if(this.radio =='0'){
         
         
         if(this.dataInfoD.aduitDateQuantum == null||this.dataInfoD.aduitDateQuantum == NaN||this.dataInfoD.aduitDateQuantum==""){
            this.dataInfoD.aduitDateQuantum = ''
            this.$message.warning("审核时间点不能为空")
            return false
          }
          else{
            this.dataInfoD1.aduitDateQuantum = parseInt(this.dataInfoD1.aduitDateQuantum) 
          }
       }
       this.timeInfo = this.aduitDataList;
       //dataInfo:主表  dataInfoD1:右上方明细信息  timeInfo:右下方明细表
       paDbOrderCheckConfigMutationSave(this.dataInfo,this.dataInfoD1,this.timeInfo).then(response =>{
          if (response.data.paDbOrderCheckConfigMutationSave.result ==='1' ){
            this.aduitDataList = '';
            this.dataInfoD.aduitDateBegin = ''
            this.dataInfoD.aduitDateEnd = ''
            this.dataInfoD.aduitDateQuantum =''
			      this.dataInfoD.aduitDateType = ''
            this.$refs.multipleTable.clearSelection();
            this.$message.success("保存成功！")
            this.disabledInput =true
            this.disabledTimeData = true
            this.disabledRadio =true
            this.disabledTimeInput = true
            setTimeout(()=>{
              this.fetchData()
               paDbOrderConfigDQueryFindAll(this.pageSize,this.pageIndex,this.listQuery3).then(response =>{
                if (
              response.data.paDbOrderConfigDQueryFindAll.result === "1" 
            ) {
              this.aduitDataList = response.data[paApis.paDbOrderConfigDQueryFindAll.ServiceCode].rows
            }
            })
            },200)
          }else if(response.data.paDbOrderCheckConfigMutationSave.result ==='0'){
            this.dataInfoD.aduitDateQuantum = ''
            this.$message.warning(response.data.paDbOrderCheckConfigMutationSave.msg)
          }else{
            this.$message.warning("保存失败")
          }
        })
        
        
        
    },
    dataChange(row) {
         this.dataInfoD.aduitDateBegin = row.aduitDateBegin,
         this.dataInfoD.aduitDateEnd = row.aduitDateEnd,
         this.dataInfoD.aduitDateType = row.aduitDateType,
         this.dataInfoD.aduitDateQuantum = row.aduitDateQuantum,
         this.dataInfoD.purAssignType = row.purAssignType
         this.dataInfoD1 = this.dataInfoD
         this.radio = row.timeType
         this.disabledRadio = false
         this.disabledTimeInput = false
         if(this.radio  ==='0'){
            this.disabledTimeData = false
            this.disabledInput = true
          }else if(this.radio  ==='1'){
            this.disabledInput = false
            this.disabledTimeData = true
          }
          //查询子表
          this.listQuery3.orderCheckConfigId = row.orderCheckConfigId
          paDbOrderConfigDQueryFindAll(this.pageSize,this.pageIndex,this.listQuery3).then(response =>{
            if (
          response.data.paDbOrderConfigDQueryFindAll.result === "1" 
        ) {
          this.aduitDataList = response.data[paApis.paDbOrderConfigDQueryFindAll.ServiceCode].rows
          this.aduitDataList1= []
        }
        })
    },
    aduitDataClick(row){
        this.selectlistRow = row
    },
    reduction(){
      this.dataInfoD.aduitDateBegin = ''
      this.dataInfoD.aduitDateEnd = ''
      this.dataInfoD.aduitDateQuantum=''
      this.dataInfo = [];
      this.aduitDataList = ''
      this.disabledInput =true
      this.disabledTimeData = true
      this.disabledRadio =true
      this.disabledTimeInput = true
      this.fetchData()
    },
    addData() {
        var timeInfo = {
          aduitDate: ''
          //aduitDateTimeQuantum :''
        }
        this.aduitDataList.push(timeInfo)
      },
     delData () {
        console.log(this.aduitDataList.length)
        for (let i = 0; i < this.aduitDataList.length; i++) {
          let val = this.selectlistRow
          console.log(val)
          // 获取选中行的索引的方法
          // 遍历表格中tableData数据和选中的val数据，比较它们的rowNum,相等则输出选中行的索引
          // rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
          
            this.aduitDataList.forEach((v, i) => {
              if (val.aduitDate === v.aduitDate) {
                // i 为选中的索引
                this.aduitDataList.splice(i, 1)
              }
            })
        }
        // 删除完数据之后清除勾选框
        this.$refs.aduitDataList.clearSelection()
      },
      changeTimeType(val){
        if(val ==='0'){
          this.disabledTimeData = false
          this.disabledInput = true
          this.aduitDataList1 = this.aduitDataList
          this.aduitDataList = []
          console.log(this.dataInfoD)
        }else if(val ==='1'){
          this.disabledInput = false
          this.disabledTimeData = true
          this.aduitDataList = this.aduitDataList1
        }
      },
      checkDate(e){
        var regex = /^[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}$/
        var str1 = this.dataInfoD.aduitDateEnd.split(':')
        var str2 = this.dataInfoD.aduitDateBegin.split(':')
        var str3 = e.target.value.split(':')
        var data1 = str1[0]+str1[1]
        var data2 = str2[0]+str2[1]
        var data3 = str3[0]+str3[1]
      
        if(!regex.test(e.target.value)){
          this.$message.warning("请输入正确的时间")
          this.aduitDataList.pop()
          
        }
        if(this.aduitDataList.length>1){
          for(var i= 0;i<this.aduitDataList.length-1;i++){
            
            if(e.target.value == this.aduitDataList[i].aduitDate){
              this.aduitDataList.pop()
              this.$message.warning("不能有重复的审核时间")
            }
          }
        }
        

        if(parseInt(data3)<parseInt(data2)||parseInt(data3)>parseInt(data1)){
          this.$message.warning("审核时间点应该在审核时间范围内")
          this.aduitDataList.pop()
              
        }
      },
      getLookupValue(val){
        this.listQuery.purAssignType = val
        this.fetchData()
      },
      changeCode(){
        if(this.dataInfoD.aduitDateQuantum == ''){
          this.$message.warning("审核时间点不能为空")
        }
        this.dataInfoD1.aduitDateType = this.dataInfoD.aduitDateType
        this.dataInfoD1 = this.dataInfoD
      },
      changeCodeTime(){
       
        this.dataInfoD1.aduitDateBegin =  this.dataInfoD.aduitDateBegin
        this.dataInfoD1.aduitDateEnd = this.dataInfoD.aduitDateEnd 
      }
  }
}
</script>