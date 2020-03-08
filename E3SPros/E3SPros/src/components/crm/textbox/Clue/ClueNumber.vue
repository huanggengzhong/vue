<template>
  <el-form-item label="线索单号">
    <el-input :disabled="isdisabled" v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name: "ClueNumber",
  props: {
    ClueNumber: {
      input: String,
      isdisabled: Boolean,
    }
  },
  data() {
    return {
      input: this.ClueNumber.input,
      isdisabled:this.ClueNumber.isdisabled
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ClueNumber.input;
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

