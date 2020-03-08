/*
 * @Author:  
 * @Date: 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-06 11:25:36
 *增加props
 */

<template>
  <el-form-item label="下发时间">
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
  name: "DeliveryTime",
  props: {
    DeliveryTime: {
      options: Array,
      value: String
    },
    DeliveryTimex: {
      value: String
    }
  },
  data() {
    return {
      pickerOptions1: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value: this.DeliveryTime.value
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.DeliveryTime.value;
    },
    reset: function() {
      let that = this;
      that.value = "";
    }
  }
};
</script>

<style scoped>
</style>
