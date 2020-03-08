<template>
  <el-form-item label="来店人数">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ReachShopPeopleNumber",
  props: {
    ReachShopPeopleNumber: {
      input: String
    }
  },
  data() {
    return {
      input: this.ReachShopPeopleNumber.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ReachShopPeopleNumber.input;
    },
    reset:function(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style scoped>

</style>
