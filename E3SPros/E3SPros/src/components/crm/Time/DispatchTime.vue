<template>
  <el-form-item label="派单时间">
    <el-date-picker
      v-model="value"
      type="daterange"
      prefix-icon="none"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd">
    </el-date-picker> 
  </el-form-item>
</template>

<script>
  export default {
    name: 'DispatchTime',
    props:{
      DispatchTime:{
        value:String
      }
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
        value: this.DispatchTime.value,
        // value: ''
      };
    },
    methods:{
      reset(){
        let that=this;
        that.value=''
      }
    }
  };
</script>

<style scoped>

</style>

