<template>
    <el-form-item label="申诉说明">
    <el-input type="textarea"  v-model="input"   placeholder="请输入"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name:'Appealstatement',
  props:{
    Appealstatement:{
      input:String,
    }
  },
  data() {
    return {
      input: this.Appealstatement.input
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.Appealstatement.input
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

