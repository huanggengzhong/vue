<template>
  <el-form-item label="传送对象">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name: "TranferObject",
  props: {
    TranferObject: {
      input: String
    }
  },
  data() {
    return {
      input: this.TranferObject.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.TranferObject.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
}
</script>

<style scoped>

</style>