<template>
  <el-form-item label="申请结案说明">
    <el-input v-model="input" type="textarea" placeholder="请输入"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ApplyCloseCaseDirection",
  props: {
    ApplyCloseCaseDirection: {
      input: String
    }
  },
  data() {
    return {
      input: this.ApplyCloseCaseDirection.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ApplyCloseCaseDirection.input;
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

