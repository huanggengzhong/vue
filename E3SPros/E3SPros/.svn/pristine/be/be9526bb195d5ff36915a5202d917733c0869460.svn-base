<template>
  <el-form>
    <el-form-item label="服务类别">
      <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "ServiceType",
  props: {
    ServiceType: {
      input: String
    }
  },
  data() {
    return {
      input: this.ServiceType.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ServiceType.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>


