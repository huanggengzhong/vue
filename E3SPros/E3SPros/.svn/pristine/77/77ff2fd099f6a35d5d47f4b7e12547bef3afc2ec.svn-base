<template>
  <el-form-item label="回访内容">
    <el-input v-model="input" type="textarea" :rows="2"  placeholder="请输入" class="long-textarea-style" resize="none"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ReturnVisitContent",
  props: {
    ReturnVisitContent: {
    input:String
    }
  },
  data() {
    return {
      input: this.ReturnVisitContent.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ReturnVisitContent.input;
    },
    reset:function(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style  scoped>

</style>

