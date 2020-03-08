<template>
  <el-form-item label="排量">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name:'LeakMount',
  props:{
    LeakMount:{
      input:String
    }
  },
  data() {
    return {
      input: this.LeakMount.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.LeakMount.input
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