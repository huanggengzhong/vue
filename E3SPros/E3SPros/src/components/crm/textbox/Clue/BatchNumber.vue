<template>
  <el-form-item label="批次号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
 name: "BatchNumber",
  props: {
    BatchNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.BatchNumber.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BatchNumber.input;
    },
    reset:function(){
      let that=this;
      that.input=''
    }
  }
}
</script>

<style scoped>

</style>