<template>
  <section>
    <el-form-item label="预计到店时间">
      <el-date-picker
        v-model="value"
        type="date"
        placeholder="选择日期时间"
        align="right"
        :disabled="isreadonly"
         value-format="yyyy-MM-dd HH:mm:ss"
        :picker-options="pickerOptions1"
      ></el-date-picker>
    </el-form-item>
  </section>
</template>

<script>
export default {
  name: "PreOrderReachShopTime",
  props: {
    PreOrderReachShopTime: {
      options: Array,
      value: String,
      isreadonly: Boolean
    }
  },
  data() {
    return {
      value: this.PreOrderReachShopTime.value,
      isreadonly: this.PreOrderReachShopTime.isreadonly,
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
      value: this.PreOrderReachShopTime.value
      //value: ''
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.PreOrderReachShopTime.value;
    }
  }
};
</script>

<style scoped>
</style>