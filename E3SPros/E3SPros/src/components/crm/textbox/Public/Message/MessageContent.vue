<template>
  <el-form-item label="短信内容">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
    </el-form-item>
</template>

<script>
export default {
  name: "MessageContent",
  props: {
    MessageContent: {
      input: String
    }
  },
  data() {
    return {
      input: this.MessageContent.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.MessageContent.input;
    },
	reset: function() {
	  let that = this;
	  that.input = "";
	}
  }
};
</script>

<style scoped>

</style>