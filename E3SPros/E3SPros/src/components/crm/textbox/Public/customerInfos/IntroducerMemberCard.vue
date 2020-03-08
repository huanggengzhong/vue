<template>
  <el-form-item label="推荐人会员卡">
    <el-input v-model="input" placeholder="请输入" suffix-icon="el-icon-search" clearable></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: "IntroducerMemberCard",
  props: {
    IntroducerMemberCard: {
      input: String
    }
  },
  data() {
    return {
      input: this.IntroducerMemberCard.input
    };
  },
  mounted: function() {},
  methods: {
    getData: function() {
      let that = this;
      that.input = this.IntroducerMemberCard.input;
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
