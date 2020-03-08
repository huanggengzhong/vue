<template>
  <el-form-item label="可核销期限">
    <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd" prefix-icon="none">
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: "sureDestoryDeadline",
  props: {
    sureDestoryDeadline: {
      options: Array,
      value: String
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
      value: this.sureDestoryDeadline.value
      //value: ""
    };
  },
  mounted: function() {
    //this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.sureDestoryDeadline.value;
    },
    reset: function() {
      let that = this;
      this.value = "";
    }
  }
};
</script>