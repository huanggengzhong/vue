<template>
  <el-form-item label="离店时间">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      value-format="yyyy-MM-dd"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
  </el-form-item>
  <!--   :default-time="['12:00:00', '08:00:00']" -->
</template>

<script>
export default {
  name: "LeaveShopTimes",
  props: {
    LeaveShopTimes: {
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
      value: this.LeaveShopTimes.value
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.LeaveShopTimes.value;
    },
    reset: function(){
      let that=this;
      that.value=""
    }
  }
};
</script>

<style scoped>
</style>
