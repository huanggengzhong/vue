<template>
<div>
<el-dialog 
   :visible.sync = "diapaly"
   width="75%"
    @close="close"
>
    <!-- <section > -->
        <!-- <el-col :span="20" class="padding-l-10"> -->
            <span style="font-weight:bold;font-size:22px;">选择客户</span>
            <div class="filter-container filter-params">
             <el-row :gutter="20">
                  
                  <el-col :span="6">
                        <span class="demonstration">车牌号:</span>
                  <el-input v-model="dataInfo.carLicense" placeholder size="small" />
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">VIN码:</span>
                  <el-input v-model="dataInfo.vin" placeholder size="small" />
                  </el-col>
                  <el-col :span="6">
                        <span class="demonstration">客户名称:</span>
                  <el-input v-model="dataInfo.custName" placeholder size="small" />
                  </el-col>
                  
              </el-row>

              <el-row :gutter="20">
                  <el-col :span="6">
                   
                        <span class="demonstration">客户电话:</span>
                  <el-input v-model="dataInfo.custTel" placeholder size="small" />
                  
                  </el-col>
                  <el-col :span="6">
                   
                        <span class="demonstration">发动机号:</span>
                  <el-input v-model="dataInfo.faongjihao" placeholder size="small" />
                 
                  </el-col>
                    <el-col 
                style="float:left"
                :span="6">
                     <el-radio v-model="weishouche" label="1">未售车</el-radio>
                </el-col>
                  
              </el-row>
               <div class="filter-container filter-button">
       <el-button type="primary" size="small" @click="queryFindAll(1)">查询</el-button>
      <template>
          <el-button  type="primary" size="small" @click="eduitData()">选择客户</el-button>
      </template>
      <el-button type="primary" size="small" @click="insertData()">重置</el-button>
         </div>

           <el-table
           
          v-loading="listLoading"
          :data="weixiugongshi"
          element-loading-text="Loading"
          border
          fit
          stripe
          :header-cell-style="tableHeaderRowClassName"
          highlight-current-row
        >
          <el-table-column align="center" label="序号" width="60">
            <template slot-scope="scope">{{ scope.$index + 1 }}</template>
          </el-table-column>
          <el-table-column label="车辆品牌" >
            <template slot-scope="scope">{{ scope.row.carSeriesCn }}</template>
          </el-table-column>
          <el-table-column label="客户名称" >
            <template slot-scope="scope">{{ scope.row.maintainType }}</template>
          </el-table-column>
          <el-table-column label="客户电话" >
            <template slot-scope="scope">{{ scope.row.minMile }}</template>
          </el-table-column>
          <el-table-column label="车牌号" >
            <template slot-scope="scope">{{ scope.row.minMile }}</template>
          </el-table-column>
          <el-table-column label="VIN码" >
            <template slot-scope="scope">{{ scope.row.maxMile }}</template>
          </el-table-column>
          <el-table-column label="服务车系编码" >
            <template slot-scope="scope">{{ scope.row.maxMile }}</template>
          </el-table-column>
          <el-table-column label="服务车型编码" >
            <template slot-scope="scope">{{ scope.row.maxMile }}</template>
          </el-table-column>
          <el-table-column label="颜色" >
            <template slot-scope="scope">{{ scope.row.maxMile }}</template>
          </el-table-column>
          
        </el-table>

            </div>
           
        <!-- </el-col>
        
    </section> -->
</el-dialog>
</div>
 </template>
<script>


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

    diapaly: {
      type:Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
        
        weixiugongshi:"",
        //是否售车
        weishouche:"",
      codeInside: this.code,
      listLoading: false,
      list: [],
      tableList:[],
      tableChooseList:[],
      limits:null,
      dataInfo:{
          reserveOrderCode:"",
         reserveOrderId:"",
        reserveOrderCode:"",
        dlrCustNo:"",
        custTel:"",
carLicense:"",
dlrCode:"",
carTypeCode:"",
carTypeCn:"",
reserveState:"",
reserveStateName:"",
preGetDate:"",
factComeDate:"",
reserveType:"",
reserveTypeName:"",
isFirst:"",
reserveTel:"",
saName:"",
preComeDate:"",
carBrandCode:"",
carBrandCn:"",
vin:"",
csDesc:"",
custName:"",
isRemind:"",
reserveMan:"",
carSeriesCode:"",
carSeriesCn:"",
isWait:"",
reserveSource:"",
reserveSourceName:"",
carId:"",
isClean:"",
dlrId:"",
cancelType:"",
cancelTypeName:"",
cancelReason:"",
saEmpId:"",
reserveSourceId:"",
isRescue:"",
linkDate:"",
contactType:"",
otherItem:"",
dayConfirm:"",
hourConfirm:"",
reserveRepairType:"",
oemId:"",
groupId:"",
oemCode:"",
groupCode:"",
creator:"",
createdDate:"",
modifier:"",
lastUpdatedDate:"",
isEnable:"",
reserveMileage:"",
reserveDueAmount:"",
wiDueAmount:"",
partDueAmount:"",
otherDueAmount:"",
reserveSourceCode:"",
updateControlId:"",
payKind:"",
payKindName:"",
isDoor:"",
custAddress:"",
doorBeginDate:"",
doorEndDate:""

        },
      listQuery: {
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      }
    }
  },
  created() {
  },
  methods: {
       close() {
      this.$emit("ClosePage", false);
    },
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
                    this.$emit("sentData",this.tableList)                    
                }
            }else{
                this.$emit("sentData",this.tableList)
            }
        }
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
                for(let j = 0;  j<this.tableList.length; j++){
                    if(i.wiId === this.tableList[j].wiId){
                        this.tableList.splice(j,1)
                    }
                }
            }
        }
    },
    getData(val){
        this.tableList = val
    },
    limit(val){
        this.limits = val
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
.padding-l-10{
    padding-left: 100px;
}
.textalign-l{
    text-align: left;
}
</style>
