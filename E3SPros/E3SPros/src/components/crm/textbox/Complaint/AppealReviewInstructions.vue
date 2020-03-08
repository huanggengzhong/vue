<template>
<el-form-item label="申诉审核说明">
    <el-input v-model="input" type="textarea" placeholder="请输入"></el-input>
</el-form-item>
</template>


<script>
export default {
  name:'AppealReviewInstructions',
  props:{
    AppealReviewInstructions:{
      input:String,
    }
  },
  data() {
    return {
      input: this.AppealReviewInstructions.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.AppealReviewInstructions.input
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

