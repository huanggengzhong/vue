<template>
<!-- 回访时间（单日期） -->
  <el-form-item label="回访时间" >
    <el-date-picker v-model="value"  type="datetime" placeholder="选择日期时间"></el-date-picker>
  </el-form-item>
</template>
<script>
export default {
  name: "ReturnVisitTime_single",
  props: {
    ReturnVisitTime_single: {
      input:String,
      value:String,
    }
  },
  data() {
    return {
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value: this.ReturnVisitTime_single.value
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.ReturnVisitTime_single.value;
    }
  }
};
</script>

<style scoped>
</style>
