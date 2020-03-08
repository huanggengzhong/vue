<template>
  <el-form-item label="通话内容">
    <el-input type="textarea"  v-model="input" :rows="2"  placeholder="请输入"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TxtArea_CallContent",
  props: {
    TxtArea_CallContent: {
      input: String
    }
  },
  data() {
    return {
      input: this.TxtArea_CallContent.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.TxtArea_CallContent.input;
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

