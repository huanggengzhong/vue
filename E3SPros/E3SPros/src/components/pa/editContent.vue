<template>
    <section class="carSeries">
      <el-dialog 
      title="编辑内容" 
      :visible.sync="carSeriesVisible"
      width="60%"
      center
      @close="sendCode"
      >
        <div class="filter-container filter-button">
          <el-button size="small" @click="reset">重置</el-button>
          <el-button type="primary" size="small" @click="sendCode">确认</el-button>
        </div>
        <div class="filter-container filter-params">
          <el-row :gutter="24">
            <el-col :span="8">
              <label>仓库编码</label>
              <el-input size="small"
              placeholder="请输入内容"
              :disabled="true"
              v-model="this.selectData.warehouseCode"
              clearable>
              </el-input>
            </el-col>
            <el-col :span="8">
              <label>仓库名称</label>
              <el-input size="small"
              placeholder="请输入内容"
              :disabled="true"
              v-model="this.selectData.warehouseName"
              clearable>
              </el-input>
            </el-col>
            <el-col :span="8">
              <label>状态</label>
              <el-select v-model="this.selectData.isEnable == 1 ? '是':'否' " size="small" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col><el-col :span="8">
              <label>是否中心库</label>
              <el-select v-model="this.selectData.isCenterWarehouse == 1 ? '是':'否' " size="small" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>            
            <el-col :span="8">
              <label>是否虚拟库</label>
              <el-select v-model="this.selectData.isVirtualStore == 1 ? '是':'否' " size="small" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <label>是否物流库</label>
              <el-select v-model="this.selectData.isLogistic == 1 ? '是':'否' " size="small" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </div>
      </el-dialog>
    </section>
 </template>
<script>
export default {
 components: {
    
  },  
  data() {
    return {
      warehouseCode:this.selectData.warehouseCode,
      warehouseName:undefined,
      isEnable:undefined,
      isCenterWarehouse:undefined,
      isVirtualStore:undefined,
      isLogistic:undefined,
      options: [        
        {
          value: '1',
          label: '是'
        }, {
          value: '0',
          label: '否'
        }],            
      list: [],
      codeInside:{
        code: [],
        name: []
      },
      listQuery: {
      }      
    }
  },
  watch:{//非常重要，不然为空
    selectData(newVal,oldVal){
        this.warehouseCode = newVal;
    }
  },
  props:{
    carSeriesVisible:{
      type:Boolean,
      default:function(){
        return false
      }
    },
    isMul:{
      type:Boolean,
      default:function(){
        return false
      }
    },
    selectData:{
      type:Object,
      default:function(){
        require:true
      }
    }
  },  
  created(){

  },
  mounted(){
    console.log(this.warehouseCode)      
  },
  methods: {
    reset(){
      this.isEnable=null;
      this.isCenterWarehouse=null;
      this.isVirtualStore=null;
      this.isLogistic=null;
      //console.log(this.selectData.warehouseCode)
      
    },
    handleSizeChange(val) {
      this.listQuery.pageSize = val
      this.fetchData()
    },
    handleCurrentChange(val) {
       this.listQuery.pageIndex = val
       this.fetchData()
    },
    getCarSeriesCode(val) {
       if(this.isMul) {
         if(val[0] || val.length == '0') {
          this.codeInside = {
            code: [],
            name: []
          };
          for(var i=0;i<val.length;i++) {
            this.codeInside.code.push(val[i].carSeriesCode)
            this.codeInside.name.push(val[i].carSeriesName)
          }
         }
      } else {
          this.codeInside = {
            code: [],
            name: []
          };
         this.codeInside.code.push(val.carSeriesCode)
         this.codeInside.name.push(val.carSeriesName)
      }
    },
    sendCode() {
      this.$emit("changeCarSeriesCode",this.codeInside)
    }
  },
  
}
</script>

<style>
.el-dialog .el-dialog__body{
  padding: 0 20px 10px 20px;
}
.el-dialog__wrapper .el-dialog{
  height: 180px;
}
</style>
