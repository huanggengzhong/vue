<template>
  <el-form-item :label="labelname">
    <el-date-picker
      :disabled="isdisabled"
      v-model="value"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
    ></el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "ComplaintDate",
  props: {
    ComplaintDate: {
      options: Array,
      value: String,
      isdisabled:Boolean,
      labelname: {
        type:String,
        default:"投诉日期"
      }
    }
  },
  data() {
    return {
      isdisabled:(this.ComplaintDate.isdisabled==undefined?false:this.ComplaintDate.isdisabled),
      labelname:(this.ComplaintDate.labelname==undefined?"投诉日期":this.ComplaintDate.labelname),
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
      options: this.ComplaintDate.options,
      value: this.ComplaintDate.value
    };
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.ComplaintDate.value;
    }
  }
};
</script>

<style  scoped>
</style>

