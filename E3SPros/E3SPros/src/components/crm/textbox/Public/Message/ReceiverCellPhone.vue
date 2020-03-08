<template>
  <el-form-item label="接收人手机号">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ReceiverCellPhone",
  props: {
    ReceiverCellPhone: {
      input: String
    }
  },
  data() {
    return {
      input: this.ReceiverCellPhone.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ReceiverCellPhone.input;
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