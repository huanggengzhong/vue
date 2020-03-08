<template>
    <section class="department">
        <el-dialog 
        title="部门选择" 
        :visible.sync="departmentVisible"
        width="500px"
        center
        @close="sendCode"
        >
            <div class="filter-container filter-title">查询条件</div>
            <div class="filter-container filter-params">
                <el-row :gutter="26">
                    <div class="filter-container filter-button">
                        <el-button size="small" @click="sendCode" type="primary">确认</el-button>
                        <el-button size="small" @click="sendCode">返回</el-button>
                    </div>
                </el-row>
            </div>
            <div class="filter-container filter-title">查询结果</div>
            <div class="treeBox">
            <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
        </el-dialog>
    </section>
 </template>
<script>
import {getChooseDepartment } from '@/api/components'
import { constants } from 'crypto';
export default {
 components: {
  },
  props:{
    departmentVisible:{
      type:Boolean,
      default:function(){
        return false
      }
    }
  },
  data() {
    return {
        treeData:[],
        treeValue:''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
      fetchData(){
          getChooseDepartment('').then(res=>{
             this.treeData=res.data.rows
          })
      },
    sendCode() {
      this.$emit("changeCode",this.treeValue)
    },
     handleNodeClick(data) {
        console.log(data.label);
        this.treeValue=data.label

      }
  }
}
</script>

<style>
.department .treeBox{
    max-height: 400px;
    overflow: auto;
}
.department .treeBox::-webkit-scrollbar{
    display: none
}
</style>