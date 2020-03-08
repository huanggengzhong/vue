<template>
  <el-form-item label="客户反馈">
    <el-input type="textarea"  v-model="input" :rows="2"  placeholder="请输入"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "ClientFeedback",
  props: {
    ClientFeedback: {
      input: String
    }
  },
  data() {
    return {
      input: this.ClientFeedback.input
    };
  },
  methods: {
    
  }
};
</script>