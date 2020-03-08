<template>
  <el-form-item label="意见反馈">
    <el-input type="textarea" v-model="input" :rows="2"  placeholder="请输入" class="long-textarea-style" resize="none"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TxtArea_OpinionFeedback",
  props: {
    TxtArea_OpinionFeedback: {
      input: String
    }
  },
  data() {
    return {
      input: this.TxtArea_OpinionFeedback.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.TxtArea_OpinionFeedback.input;
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

