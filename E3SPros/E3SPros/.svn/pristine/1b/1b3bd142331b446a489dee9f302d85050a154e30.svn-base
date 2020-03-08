<template>
    <section class="addWearHouse">
      <el-dialog 
      title="添加内容" 
      :visible.sync="addWearHouseVisible"
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
              v-model="warehouseCode"
              clearable>
              </el-input>
            </el-col>
            <el-col :span="8">
              <label>仓库名称</label>
              <el-input size="small"
              placeholder="请输入内容"
              v-model="warehouseName"
              clearable>
              </el-input>
            </el-col>
            <el-col :span="8">
              <label>状态</label>
              <el-select v-model="isEnable" size="small" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col><el-col :span="8">
              <label>是否中心库</label>
              <el-select v-model="isCenterWarehouse" size="small" placeholder="请选择">
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
              <el-select v-model="isVirtualStore" size="small" placeholder="请选择">
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
              <el-select v-model="isLogistic" size="small" placeholder="请选择">
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
      warehouseCode:undefined,
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
        code: []
      },
      listQuery: {
      }      
    }
  },
  props:{
    addWearHouseVisible:{
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
    }
  },  
  created() {     
    
  },
  mounted(){
      let _this = this;
      let props = {..._this.selectData}
  },
  methods: {
    reset(){
      this.warehouseCode=undefined;
      this.warehouseName=undefined;
      this.isEnable=null;
      this.isCenterWarehouse=null;
      this.isVirtualStore=null;
      this.isLogistic=null;
      // console.log(this.selectData.warehouseCode)
      // console.log(this.isCenterWarehouse)
      
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
      console.log(this.isEnable)
      this.$emit("changeCarSeriesCode",this.codeInside)
    }
  }
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
