<template>
  <el-form-item label="排序顺序">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'SortOrder',
  props:{
    SortOrder:{
      input:String
    }
  },
  data() {
    return {
      input: this.SortOrder.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.SortOrder.input
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
