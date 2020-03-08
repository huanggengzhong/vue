<!--升级开始时段-->
<template>
  <div class="block">
    <span class="demonstration">开始时段</span>
    <el-date-picker v-model="value" type="datetime" placeholder="选择日期时间"></el-date-picker>
    <br />
  </div>
</template>

<script>
export default {
  name: "UpgradeStartTime",
  props: {
    UpgradeStartTime: {
      options: Array,
      value: String
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
      value: this.UpgradeStartTime.value
      //value: ''
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.UpgradeStartTime.value;
    }
  }
};
</script>

<style scoped>
</style>
