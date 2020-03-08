<template>
  <el-form-item label="变速箱号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name:'GearBoxNumber',
props:{
    GearBoxNumber:{
      input:String,
      value:String
    }
  },
  data() {
    return {
      input: this.GearBoxNumber.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.GearBoxNumber.input
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
