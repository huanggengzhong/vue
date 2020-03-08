<template>
  <el-form-item label="总部处理意见">
    <el-input type="textarea" v-model="input" :rows="2"  placeholder="请输入" ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "HeadquartersProcessingComments",
  props: {
    HeadquartersProcessingComments: {
      input: String
    }
  },
  data() {
    return {
      input: this.HeadquartersProcessingComments.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.HeadquartersProcessingComments.input;
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
