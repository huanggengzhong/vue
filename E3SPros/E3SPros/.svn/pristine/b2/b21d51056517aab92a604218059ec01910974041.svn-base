<template>
  <el-form-item label="职务">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_Post",
    props: {
    Post: {
      input: String
    }
  },
  data() {
    return {
      input: this.Post.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.Post.input;
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