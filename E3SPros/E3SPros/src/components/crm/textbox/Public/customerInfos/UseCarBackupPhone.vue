<template>
  <el-form-item label="备用电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name: "UseCarBackupPhone",
  props: {
    UseCarBackupPhone: {
      input: String
    }
  },
  data() {
    return {
      input: this.UseCarBackupPhone.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.UseCarBackupPhone.input;
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
