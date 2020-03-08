<template>
  <el-form-item label="近半年回厂台次">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_BackTimes_6M",
    props: {
    BackTimes6M: {
      input: String
    }
  },
  data() {
    return {
      input: this.BackTimes6M.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BackTimes6M.input;
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