<template>
  <el-form-item label="预计回访时间">
    <el-date-picker v-model="value"  type="datetime" :disabled="isdisabled" placeholder="选择日期时间"></el-date-picker>
  </el-form-item>
</template>
<script>
export default {
  name: "dt_ProVisitTime",
  props: {
    dt_ProVisitTime: {
      value:String,
      isdisabled: Boolean
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
      value: this.dt_ProVisitTime.value,
      isdisabled: this.dt_ProVisitTime.isdisabled
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.dt_ProVisitTime.value;
    }
  }
};
</script>

<style scoped>
</style>
