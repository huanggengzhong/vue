<template>
  <el-form-item label="审核意见">
    <el-input v-model="input" type="textarea" class="long-textarea-style" resize="none" :rows="2"  placeholder="请输入内容"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "CheckThought",
  props: {
    CheckThought: {
      input: String
    }
  },
  data() {
    return {
      input: this.CheckThought.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CheckThought.input;
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

