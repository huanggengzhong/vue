<template>
  <el-form-item label="订单日期">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd"
    ></el-date-picker>
  </el-form-item>
</template>


<script>
export default {
  name: "OrderDateDouble",
  props: {
    OrderDateDouble: {
      value: Array,
      default:[]
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
      value: this.OrderDateDouble.value,
    };
  },
  mounted: function() {
    //this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.OrderDateDouble.value;
    },
    reset:function(){
      let that=this;
      this.value=""
    }
  }
};
</script>

<style scoped>
</style>
