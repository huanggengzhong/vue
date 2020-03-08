<template>
   <el-form-item label="下一步责任人">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
   </el-form-item>
</template>

<script>
export default {
  name:'NextStepDutyPeople',
  props:{
    NextStepDutyPeople:{
      input:String
    }
  },
  data() {
    return {
      input: this.NextStepDutyPeople.input
    }
  },
  methods:{
    getData:function(){
      let that=this;
      that.input=this.NextStepDutyPeople.input
    },
      reset(){
      let that=this;
      that.input=''
    }
  }
}
</script>

<style scoped>

</style>
