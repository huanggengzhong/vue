<template>
  <el-form-item label="审核内容">
    <el-input v-model="input" type="textarea" :rows="2"  placeholder="请输入"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "TxtArea_reVisit",
  props: {
    TxtArea_reVisit: {
    input:String
    }
  },
  data() {
    return {
      input: this.TxtArea_reVisit.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.TxtArea_reVisit.input;
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

