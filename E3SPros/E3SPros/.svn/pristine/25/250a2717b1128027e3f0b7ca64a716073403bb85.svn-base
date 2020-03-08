<template>
 <el-form-item label="限定登录起始时间设置" prop="beginLandingTime.value">
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="请选择日期"
      value-format="yyyy-MM-dd HH:mm:ss"
    ></el-date-picker>
 </el-form-item>
</template>

<script>
  export default {
     name: "LimitedLoginStartTimeSet",
  props: {
    LimitedLoginStartTimeSet: {
      value: String,
    },
  },
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value: this.LimitedLoginStartTimeSet.value
        //value7: ''
      };
    },
    mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.LimitedLoginStartTimeSet.value;
    },
    reset:function(){
    let that =this;
    that.value=''
  }
  }
  };
</script>



</script>
<style scoped>
</style>