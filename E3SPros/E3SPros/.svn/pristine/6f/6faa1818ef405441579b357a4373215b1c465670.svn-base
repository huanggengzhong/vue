<template>
  <el-form-item label="回访次数" prop="RevisitTimes.input">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "RevisitTimes",
  props: {
    RevisitTimes: {
      input: String
    }
  },
  data() {
    return {
      input: this.RevisitTimes.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.RevisitTimes.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>



