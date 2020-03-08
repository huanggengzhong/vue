<template>
  <el-form-item label="派工说明">
    <el-input type="textarea" class="long-textarea-style" v-model="input" :rows="2" resize="none"  placeholder="请输入" ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "JobDescription",
  props: {
    JobDescription: {
      input: String
    }
  },
  data() {
    return {
      input: this.JobDescription.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.JobDescription.input;
    },
    reset: function() {
      let that = this;
      that.input = "";
    }
  }
};
</script>

<style  scoped>

</style>

