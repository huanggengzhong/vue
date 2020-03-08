<template>
  <el-form-item label="变速箱名">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'GearBoxName',
  props:{
    GearBoxName:{
      input:String,
      isdisable:Boolean
    }
  },
  data() {
    return {
      input: this.GearBoxName.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.GearBoxName.input
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
