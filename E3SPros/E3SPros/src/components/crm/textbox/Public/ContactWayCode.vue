<template>
  <el-form-item label="接触方式编码">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" :disabled="isdisabled" clearable></el-input>
  </el-form-item>
</template>

<script>
import { isBoolean } from 'util';
export default {
  name: 'ContactWayCode',
  props:{
    ContactWayCode:{
      input:String,
      isdisabled:Boolean
      
    }
  },
  data() {
    return {
      input: this.ContactWayCode.input,
      isdisabled:this.ContactWayCode.isdisabled
    };
  },
  methods:{
    getData:function () {
      let that=this;
      that.input=this.ContactWayCode.input;
      this.isdisabled=this.ContactWayCode.isdisabled
    },
    reset: function() {
      let that = this;
      that.input = "";
      this.isdisabled=false;
    }
  }
};
</script>


