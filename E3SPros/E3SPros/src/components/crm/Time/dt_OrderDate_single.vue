<template>
  <section>
    <div class="block">
        <!-- 订单时间（单日期） -->
        <span>订单时间</span>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    </div>
  </section>
</template>
<script>
export default {
  name: "dt_OrderDate_single",
  data() {
    return {
      options: [],
      value: "",
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
      this.axios
        .get("/user", {
          params: {}
        })
        .then(function(response) {
          that.options = response.data;
          //console.log(response.data)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
