<template>
  <el-form-item :label="labelname" prop="NextReturnVisitTime.value">
    <el-date-picker 
    v-model="value"  
    type="date" 
    :disabled="isdisabled" 
    placeholder="选择日期时间"
    value-format="yyyy-MM-dd HH:mm:ss"></el-date-picker>
  </el-form-item>
</template>
<script>
export default {
  name: "NextReturnVisitTime",
  props: {
    NextReturnVisitTime: {
      value:String,
      isdisabled: Boolean,
      labelname: {
        type:String,
        default:"下次回访时间"
      }
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
      value: this.NextReturnVisitTime.value,
      isdisabled: this.NextReturnVisitTime.isdisabled,
      labelname:(this.NextReturnVisitTime.labelname==undefined?"下次回访时间":this.NextReturnVisitTime.labelname),
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.NextReturnVisitTime.value;
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
