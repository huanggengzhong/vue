<template>
  <el-form-item label="标题">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'Title',
  props:{
    Title:{
      input:String,
    }
  },
  data() {
    return {
      input: this.Title.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.Title.input
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>


