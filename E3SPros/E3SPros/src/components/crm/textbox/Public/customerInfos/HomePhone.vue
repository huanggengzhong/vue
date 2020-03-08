<template>
  <el-form-item label="家庭电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "HomePhone",
  props: {
    HomePhone: {
      input: String
    }
  },
  data() {
    return {
      input: this.HomePhone.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.HomePhone.input;
    },
    reset:function()
    {
      let that=this;
      that.input=""
    }
  }
};
</script>

<style scoped>

</style>