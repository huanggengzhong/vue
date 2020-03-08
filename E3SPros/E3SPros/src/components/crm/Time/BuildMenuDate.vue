<template>
 <div class="block">
    <span class="demonstration">建单日期</span>
    <el-date-picker
      v-model="value"
      type="datetime"
      placeholder="请选择日期"
    ></el-date-picker>
  </div>
</template>

<script>
  export default {
     name: "BuildMenuDate",
  props: {
    BuildMenuDate: {
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
        value: this.BuildMenuDate.value
        //value7: ''
      };
    },
    mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.BuildMenuDate.value;
    },
    reset:function(){
    let that =this;
    that.value=''
  }
  }
  };
</script>