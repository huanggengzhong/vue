<template>
  <el-form-item label="责任人电话">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisable" clearable></el-input>
  </el-form-item>
</template>


<script>
export default {
  name: "DutyPeoplePhone",
  props: {
    DutyPeoplePhone: {
      input: String,
      isdisable:Boolean
    }
  },
  data() {
    return {
      input: this.DutyPeoplePhone.input,
      isdisable:this.DutyPeoplePhone.isdisable
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.DutyPeoplePhone.input;
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
