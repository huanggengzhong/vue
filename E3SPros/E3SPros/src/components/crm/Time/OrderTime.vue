<template>
  <section>
    <el-form-item label="订单时间">
      <el-date-picker v-model="value1" :readonly="isreadonly" type="date" placeholder="选择日期"></el-date-picker>
    </el-form-item>
  </section>
</template>
<script>
export default {
  name: "OrderTime",
  props:{
    OrderTime:{
      value:String,
      isreadonly: Boolean,
    }
  },
  data() {
    return {
      options: [],
      value: this.OrderTime.value,
      isreadonly:this.OrderTime.isreadonly,
      
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
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
      value1: "",
      value2: ""
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      // this.axios
      //   .get("/user", {
      //     params: {}
      //   })
      //   .then(function(response) {
      //     that.options = response.data;
      //     //console.log(response.data)
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    }
  }
};
</script>
