<template>
  <el-form-item label="模板内容">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable> </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ModelContentText",
  props: {
    ModelContentText: {
      input: String
    }
  },
  data() {
    return {
      input: this.ModelContentText.input
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ModelContentText.input;
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
