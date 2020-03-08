<template>
  <el-form-item label="咨询日期">
    <el-date-picker v-model="value" type="date" placeholder="选择日期"></el-date-picker>
  </el-form-item>
</template>
<script>
export default {
  name: "ConsultDate",
  props: {
    ConsultDate: {
      options:Array,
      value: String
    }
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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
      options:this.ConsultDate.options,
      value: this.ConsultDate.value
    };
  },
    mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.ConsultDate.value;
    }
  }
};
</script>
<style scoped>
</style>
