<template>
  <div>
  <el-form-item label="下次回访时间" > 
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd HH:mm:ss"
      :disabled="isdisabled"
    ></el-date-picker>
  </el-form-item>
  </div>
</template>

<script>
export default {
  name: "NextReturnVisitTimes",
  props: {
    NextReturnVisitTimes: {
      options: Array,
      value: String,
      isdisabled: Boolean
    }
  },
  data() {
    return {
      pickerOptions2: {
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
      value: this.NextReturnVisitTimes.value,
      isdisabled: this.NextReturnVisitTimes.isdisabled==undefined?false:this.NextReturnVisitTimes.isdisabled,
      value2: ""
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.NextReturnVisitTimes.value;
    },
    reset: function() {
      let that = this;
      that.value = "";
    }
  }
};
</script>