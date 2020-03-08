<template>
<el-form-item label="驳回意见">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
</el-form-item>
</template>

<script>
export default {
  name: "RejectTheOpinion",
  props: {
    RejectTheOpinion: {
      input: String
    }
  },
  data() {
    return {
      input: this.RejectTheOpinion.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.RejectTheOpinion.input;
    },
    reset:function(){
      let that=this;
      that.input=''
    }
  }
};