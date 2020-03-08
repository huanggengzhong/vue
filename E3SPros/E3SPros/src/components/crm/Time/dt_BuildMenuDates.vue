<template>
  <el-form-item label="建单日期">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd"
      prefix-icon="none"
    ></el-date-picker>
  </el-form-item>
</template>


<script>
export default {
  name: "dt_BuildMenuDates",
  props: {
    dt_BuildMenuDates: {
      value: Array,
      default: []
    }
  },
  data() {
    return {
      value: this.dt_BuildMenuDates.value
    };
  },
  mounted: function() {
    //this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.dt_BuildMenuDates.value;
    },
    reset: function() {
      let that = this;
      this.value = "";
    }
  }
};
</script>

<style scoped>
</style>
