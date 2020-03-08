<template>
  <el-form-item label="责任人">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
</template>

<script>
export default {
  name: "DutyPeople",
  props: {
    DutyPeople: {
      input: String
    }
  },
  data() {
    return {
      input: this.DutyPeople.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.DutyPeople.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

 <style  scoped>
</style>

