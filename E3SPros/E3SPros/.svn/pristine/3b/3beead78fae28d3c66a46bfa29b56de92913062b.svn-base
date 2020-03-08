<template>
  <el-form-item label="坐席名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'SitWaiterName',
  props:{
    SitWaiterName:{
      input:String
    }
  },
  data() {
    return {
      input: this.SitWaiterName.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.SitWaiterName.input
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
}
</script>

<style scoped>

</style>
