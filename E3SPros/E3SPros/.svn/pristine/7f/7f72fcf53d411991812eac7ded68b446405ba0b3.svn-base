<template>
<el-form-item label="修改说明">
    <el-input v-model="input" type="textarea" placeholder="请输入"></el-input>
</el-form-item>
</template>


<script>
export default {
  name:'ModifyDescription',
  props:{
    ModifyDescription:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ModifyDescription.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ModifyDescription.input
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

