<template>
<div class="block">
  <span class="demonstration">回复日期</span>
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      value-format="yyyy-MM-dd">
    </el-date-picker>
</div>
</template>

<script>
  export default {
     name: "dt_ReplyDateDouble",
  props: {
    dt_ReplyDateDouble: {
      options:Array,
      value: String,
      input:String
    },
    dt_ReplyDateDouble1: {
      options:Array,
      value: String,
      input:String
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
        value: this.dt_ReplyDateDouble.value
        //value7: ''
      };
    },
    mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.dt_ReplyDateDouble.value;
    },
    reset:function(){
    let that =this;
    that.value=''
  }
  }
  };
</script>