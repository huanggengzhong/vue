<template>
    <el-form-item label="规则描述">
      <el-input type="textarea" :rows="2" placeholder="请输入" v-model="input" ></el-input>
    </el-form-item>
</template>


<script>
export default {
  name: "txt_RuleDescription",
  props: {
    txt_RuleDescription: {
      input: String
    }
  },
  data() {
    return {
      input: this.txt_RuleDescription.input
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.txt_RuleDescription.input;
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