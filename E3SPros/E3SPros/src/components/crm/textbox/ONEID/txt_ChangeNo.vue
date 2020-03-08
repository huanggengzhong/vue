<template>
  <el-form-item label="变更单号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_ChangeNo",
   props: {
    ChangeNo: {
      input: String
    }
  },
  data() {
    return {
      input: this.ChangeNo.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ChangeNo.input;
    },
    reset:function(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style scoped>

</style>