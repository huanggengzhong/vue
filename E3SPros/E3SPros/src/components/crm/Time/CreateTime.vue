<template>
  <el-form-item label="创建时间">
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
  name: "CreateTime",
  props: {
    CreateTime: {
      value: String
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
      value: this.CreateTime.value,
      value2: ""
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.CreateTime.value;
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
