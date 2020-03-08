<template>
  <el-form-item label="备用电话">
    <el-input v-model="input" placeholder="请输入" :readonly="isreadonly" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "BackupPhone",
  props: {
    BackupPhone: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.BackupPhone.input,
      isreadonly:this.BackupPhone.isreadonly
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.BackupPhone.input;
    }	,
		reset: function() {
		  let that = this;
		  that.input = "";
		}
  }
};
</script>

<style scoped>

</style>
