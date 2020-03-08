<template>
  <el-form-item label="法人名称">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>
<script>
export default {
  name: "txt_LegalPerson",
    props: {
    LegalPerson: {
      input: String
    }
  },
  data() {
    return {
      input: this.LegalPerson.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.LegalPerson.input;
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