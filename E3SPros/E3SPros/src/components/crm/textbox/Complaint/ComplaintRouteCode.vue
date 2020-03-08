<template>
    <el-form-item class="long-label" label="投诉途径编码" >
      <el-input v-model="input"  :disabled="isdisabled" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
</template>

<script>
export default {
  name: "ComplaintRouteCode",
  props: {
    ComplaintRouteCode: {
      input: String,
      isdisabled: Boolean
    }
  },
  data() {
    return {
      input: this.ComplaintRouteCode.input,
      isdisabled: this.ComplaintRouteCode.isdisabled,
    };
  },
  mounted: function() {
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ComplaintRouteCode.input;
      this.isdisabled=this.ComplaintRouteCode.isdisabled
    },
    reset() {
      let that = this;
      that.input = "";
      this.isdisabled=false
    }
  }
};
</script>

<style scoped>
</style>

