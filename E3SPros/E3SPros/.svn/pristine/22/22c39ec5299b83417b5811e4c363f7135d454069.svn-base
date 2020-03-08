<template>
  <el-form-item label="总部处理记录">
    <el-input type="textarea" v-model="input" :rows="2"  placeholder="请输入" ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "HeadquartersProcessingRecord",
  props: {
    HeadquartersProcessingRecord: {
      input: String
    }
  },
  data() {
    return {
      input: this.HeadquartersProcessingRecord.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.HeadquartersProcessingRecord.input;
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
