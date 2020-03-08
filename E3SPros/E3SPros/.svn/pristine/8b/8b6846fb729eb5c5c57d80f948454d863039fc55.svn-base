<template>
<section>
  <el-form-item label="预计跟进时间">
    <el-date-picker :disabled="isreadonly" v-model="value" type="date" placeholder="选择日期" :picker-options="pickerOptions"></el-date-picker>
  </el-form-item>
</section>
</template>
<script>
export default {
  name: "ExpectedFollowTime",
  props: {
    ExpectedFollowTime: {
      value: String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      options:'',
      value: this.ExpectedFollowTime.value,
      isreadonly:this.ExpectedFollowTime.isreadonly,
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
    };
  },
    mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.ExpectedFollowTime.value;
    }
  }
};
</script>
<style scoped>
</style>
