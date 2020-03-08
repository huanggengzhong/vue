/*
 * @Author: xgz 
 * @Date: 2019-07-27 15:06:42 
 * @Last Modified by: //此处填修改人名字
 * @Last Modified time: 2019-08-05 08:27:28
 * :picker-options="pickerOptions1"
 *加重置函数
 */

<template>
  <el-form-item label="留资时间">
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :disabled="isdisabled"
    ></el-date-picker>
  </el-form-item>
</template>
<script>

export default {
  name:'dt_RetentionTime',
  props:{
    dt_RetentionTime:{
      value: String,
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
      value: this.dt_RetentionTime.value,
      isdisabled:this.dt_RetentionTime.isdisabled
    };
  },
   methods: {
    getData: function() {
      let that = this;
      that.value = this.dt_RetentionTime.value;
    },
    reset:function(){
      let that = this;
      that.value=""
    }
  }
};
</script>

<style scoped>
</style>
