<template>
  <el-form-item label="原因描述">
    <el-input  v-model="input" type="textarea" :rows="2"  resize="none" placeholder="请输入"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ReasonDescripts",
  props: {
    ReasonDescripts: {
      input:String
    }
  },
  data() {
    return {
      input: this.ReasonDescripts.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.ReasonDescripts.input;
    },
      reset(){
      let that=this;
      that.input=''
    }
  }
};
</script>

<style  scoped>
</style>

