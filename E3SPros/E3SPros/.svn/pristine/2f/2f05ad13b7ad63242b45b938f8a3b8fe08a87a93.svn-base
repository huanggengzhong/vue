<template>
  <el-form-item label="邮政编码">
    <el-input v-model="input" :readonly="isreadonly" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "EMS",
  props: {
    EMS: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.EMS.input,
      isreadonly:this.EMS.isreadonly,
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.EMS.input;
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
