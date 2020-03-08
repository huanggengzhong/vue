<!--
* description: 车辆调拨申请--调出发起
* author: linwm
* createdDate: 2019-09-24
-->
<template>
  <div class="app-container app-container-table" style="margin-top: 0px">
    <el-tabs v-model="activeName" >
    <el-tab-pane :label="this.$t('ve.label.transferOrderQuery')"  name="transferOrderQuery" >   
      <transferOrderQuery @apply="apply()"/>
    </el-tab-pane>
    <el-tab-pane :label="this.$t('ve.label.transferOrderApply')"  name="transferOrderApply" > 
      <transferOrderApply @return="return1()"/>
    </el-tab-pane>
  </el-tabs>
 
  </div>
</template>
<script>
import  transferOrderQuery from './transferOrderQuery'
import  transferOrderApply from './transferOrderApply'

export default {
  name: "vecldbsqOut",
  // 组件混入对象
  components: {
    transferOrderQuery,
    transferOrderApply
  },
  data() {
    return { 
     activeName: 'transferOrderQuery',
      };
  },
   methods: {
       apply(){
           this.activeName="transferOrderApply"
       },
       return1(){
           this.activeName="transferOrderQuery"
       }
   }
};
</script>
<style lang="scss" scoped>
 /deep/ .el-tabs__nav-scroll {  
    overflow: hidden;
    background-color: #FFFFFF;
}
/deep/.app-container {
    margin-top: 0px;
    background: #fff;
    padding: 10px 10px 0 10px;
}

</style>