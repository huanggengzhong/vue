<template>
  <el-form-item label="申请延期时间">
    <el-date-picker v-model="value" type="datetime" placeholder="选择日期时间"></el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "ApplyExtensionTime",
  props: {
    ApplyExtensionTime: {
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
      value: this.ApplyExtensionTime.value
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.ApplyExtensionTime.value;
    }
  }
};
</script>

<style scoped>
</style>
