<template>
  <el-form-item label="工作日">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="星期一"></el-checkbox>
      <el-checkbox label="星期二"></el-checkbox>
      <el-checkbox label="星期三"></el-checkbox>
      <el-checkbox label="星期四"></el-checkbox>
      <el-checkbox label="星期五"></el-checkbox>
      <el-checkbox label="星期六"></el-checkbox>
      <el-checkbox label="星期日"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>
<script>
export default {
  name: "WorkDay",
  data() {
    return {
      checkList: []
    };
  }
};
</script>
<style scoped>
</style>
