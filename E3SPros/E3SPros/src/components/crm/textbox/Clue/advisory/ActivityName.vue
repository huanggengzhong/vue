
<template>
  <el-form-item label="活动名称">
    <el-input v-model="input" type="textarea" :rows="2" placeholder="请输入" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ActivityName",
  props: {
    ActivityName: {
      input: String
    }
  },
  data() {
    return {
      input: this.ActivityName.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ActivityName.input;
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

