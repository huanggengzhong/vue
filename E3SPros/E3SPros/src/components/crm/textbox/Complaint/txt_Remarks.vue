<template>
<el-form-item label="备注">
    <el-input  v-model="input" placeholder="请输入内容" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "txt_Remarks",
  props: {
    txt_Remarks: {
      input: String
    }
  },
  data() {
    return {
      input: ''
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.txt_Remarks.input;
    }
  }
};
</script>

<style scoped>

</style>
