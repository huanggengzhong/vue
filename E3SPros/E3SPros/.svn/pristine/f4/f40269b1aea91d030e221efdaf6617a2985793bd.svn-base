<template>
    <el-form-item label="描述">
      <el-input type="textarea" :rows="2" placeholder="请输入" class="long-textarea-style" resize="none" v-model="input" :readonly="isreadonly"></el-input>
    </el-form-item>
</template>

<script>
export default {
  name: "Descripts",
  props: {
    Descripts: {
      input: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      input: this.Descripts.input,
      isreadonly:this.Descripts.isreadonly,
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.input = this.Descripts.input;
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
