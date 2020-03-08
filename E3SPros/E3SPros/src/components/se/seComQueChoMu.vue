<template>
    <section class="carType">
        <el-dialog 
        :title="thimeTitle"         
        :visible.sync="seComQueChoMuDlrVisible"
        @close="close"
        width="1000"
        >
        <el-row>
            <div class="filter-container filter-title">查询条件</div>
                <div class="filter-container filter-params">
                     <el-row >
                         <el-col :span="8" class="margin-b-10">
                         <label class="margin-r-0">门店类型</label>
                             <el-select
                             v-model="listQuery.dataInfo.storeType"
                             placeholder="请选择"
                             clearable
                             size="small">
                             <el-option v-for="item in storeTypeData" :key="item.value" :label="item.label" :value="item.value"></el-option>
                             </el-select>
                         </el-col>
                         <el-col :span="4" class="margin-b-10">
                             <el-button type="primary" size="small" @click="fetchComQueChoMu()">查询</el-button>
                         </el-col>
                         <el-col class="margin-b-0 padding-0" >
                             <el-col :span="11" class="padding-0 margin-b-0">
                                 <el-checkbox v-model="checkedAll" @change="checkAlls">全选</el-checkbox>
                                 <el-button size="small" @click="expand">全部折叠</el-button>
                                 <el-button size="small" type="primary" @click="select">选择</el-button>
                             </el-col>
                             <el-col :span="7" class="padding-l-0 margin-b-0">
                                 <el-date-picker
                                 v-model="listQuery.dataInfo.date"
                                 @change="changeDate"
                                 type="date"
                                 placeholder="选择日期"
                                 format="yyyy 年 MM 月 dd 日"
                                 value-format="yyyy-MM-dd">
                                 </el-date-picker>
                             </el-col>
                             <el-col :span="6" class="padding-0 margin-b-0">
                                 <el-button type="primary" @click="fetchComQueChoMu()" size="small">查询</el-button>
                                 <el-button size="small" @click="reset">重置</el-button>
                             </el-col>
                         </el-col>                                
                     </el-row>
                </div>
                <div class="filter-container filter-title">查询结果</div>
                <el-tree
                ref="tree"
                :data="treeData"
                show-checkbox
                node-key="id"
                @check="checkChang"
                :props="defaultProps">
                </el-tree>
        </el-row>
        </el-dialog>
    </section>
 </template>
<script>
import { doseComQueChoMuQuery, doseStoreTypeQuery, doseOrgBrand, doseBusStatus, doseOrgType } from '@/api/se/seComQueChoMu'
import { seApis } from '@/api/graphQLApiList/se'
import seCommonQueryChooseDlrMu from './seCommonQueryChooseDlrMu'


import { requestGraphQL } from '@/api/commonRequest'


export default {
 components: {
    seCommonQueryChooseDlrMu
  },
  props:{
    seComQueChoMuDlrVisible:{
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
        return false
      }
    }
  },
  data() {
    return {
        checkedAll:false,
        expandAll:false,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        treeData:[],
        storeTypeData:[],
        seData:[],
      thimeTitle:'经销商多选',
      listQuery: {
        pageIndex:1,
        pageSize:1,
        dataInfo:{
            oemcode:'',
            groupcode:'',
            isEnable:'',
            orgType:'',
            areaId:null,
            bigAreaId:null,
            smallAreaId:null,
            dlrCode:'',
            dlrShortName:'',
            dlrId:'',
            storeType:'',
            date:''
        },
      },
      tableHeaderRowClassName({ row, rowIndex }) {
        if (rowIndex === 0) {
          return 'background-color:rgb(239, 239, 239);height:32px;'
        }
      }
    }
  },
  created() {

    this.fetchStoreType()
  },
  methods: {
      checkChang(){
          //this.seData
          let data = this.$refs.tree.getCheckedNodes()
          for(let i = 0; i <data.length; i++){
              if(data[i].hasOwnProperty('children')){
                console.log(data[i])                
                data.splice(i,1)
              }
          }
          this.seData = data
      },
      expand(){
          for(var i=0;i<this.$refs.tree.store._getAllNodes().length;i++){
           this.$refs.tree.store._getAllNodes()[i].expanded=this.expandAll;
        }
      },
      checkAlls(){
          console.log(this.checkedAll)
        if (this.checkedAll) {
            //全选
            this.$refs.tree.setCheckedNodes(this.treeData);
        }else{
            //取消选中
            this.$refs.tree.setCheckedKeys([]);
        }
      },
      changeDate(val){
          console.log(val)
      },
      handleCheckChange(data, checked, indeterminate) {
        console.log(data, checked, indeterminate);
      },
      handleChange(val) {
        console.log(val);
      },
    getBigArea(val){
        console.log(val)
        this.listQuery.bigAreaId = val
    },
    getSmallArea(val){
        console.log(val)
        this.listQuery.smallAreaId = val
    },
    getProvince(val){
        console.log(val)
        this.listQuery.areaId = val
    },
    getCity(val){
        console.log(val)
        //this.listQuery.bigAreaId = val
    },
    fetchComQueChoMu(pageSize, pageIndex, dataInfo){
        doseComQueChoMuQuery(this.listQuery.dataInfo).then(response => {
            console.log(response.data[seApis.seComQueChoMuQuery.ServiceCode])
            this.treeData = response.data[seApis.seComQueChoMuQuery.ServiceCode].rows
        })
    },
    fetchStoreType(){
        doseStoreTypeQuery(this.listQuery.dataInfo).then(response => {
            console.log(response.data[seApis.seStoreType.ServiceCode])
            this.storeTypeData = response.data[seApis.seStoreType.ServiceCode].rows
        })
    },
    select(){
        if(this.seData.length === 0){
            this.$alert('您未选中数据！', '信息提示', {
                confirmButtonText: '确定',
                type: 'warning',
                callback: action => {
                }
            });
        }else{
            this.sentCode()
        }
    },
    sentCode(){
        this.$emit("sentCode",this.seData)
    },
    close(){
        this.$emit("close",false)      
    },
    reset(){
        this.listQuery.dataInfo.storeType = ''
        this.listQuery.dataInfo.date = ''
    },

    resetList(){
        this.treeData = []
        this.seData = []
    },
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
.padding-0{
    padding: 0
}
.padding-l-0{
    padding-left: 0
}
.el-date-editor.el-input.el-input--prefix.el-input--suffix.el-date-editor--date {
    width: 90%;
}
</style>
