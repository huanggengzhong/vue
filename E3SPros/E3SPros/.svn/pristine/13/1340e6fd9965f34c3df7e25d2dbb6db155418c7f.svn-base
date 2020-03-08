<template>
  <el-form-item label="明细描述">
    <el-input type="textarea" :rows="2" placeholder="请输入" v-model="input"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "DetailDescripts",
  props: {
    DetailDescripts: {
      input: String
    }
  },
  data() {
    return {
      input: this.DetailDescripts.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.DetailDescripts.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style scoped>
</style>
