<template>
    <el-form-item label="客户要求">
      <el-input type="textarea" :rows="2" class="long-textarea-style" placeholder="请输入" resize="none" v-model="input" :readonly="isreadonly"></el-input>
    </el-form-item>
</template>

<script>
export default {
  name: "CustomerRequest",
  props: {
    CustomerRequest: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.CustomerRequest.input,
      isreadonly:this.CustomerRequest.isreadonly,
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.CustomerRequest.input;
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
