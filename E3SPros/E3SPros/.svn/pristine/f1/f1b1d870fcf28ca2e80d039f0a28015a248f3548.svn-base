<template>
<el-form-item label="审核说明">
    <el-input v-model="input" type="textarea" placeholder="请输入"></el-input>
</el-form-item>
</template>


<script>
export default {
  name:'ReviewInstructions',
  props:{
    ReviewInstructions:{
      input:String,
    }
  },
  data() {
    return {
      input: this.ReviewInstructions.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ReviewInstructions.input
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

