<template>
  <el-form-item label="详细地址">
    <el-input v-model="input" type="textarea" :readonly="isreadonly" class="long-textarea-style" resize="none" placeholder="请输入" suffix-icon="el-icon-search"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "txt_DetailAddress",
  props: {
    txt_DetailAddress: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.txt_DetailAddress.input,
      isreadonly:this.txt_DetailAddress.isreadonly,
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.txt_DetailAddress.input;
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
