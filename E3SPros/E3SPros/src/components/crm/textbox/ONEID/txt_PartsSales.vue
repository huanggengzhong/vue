<template>
  <el-form-item label="备件销售">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_PartsSales",
    props: {
    PartsSales: {
      input: String
    }
  },
  data() {
    return {
      input: this.PartsSales.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.PartsSales.input;
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