<template>
 <el-form-item label="结案日期">
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
     name: "CloseCaseDate",
  props: {
    CloseCaseDate: {
      value: String
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
        value: this.CloseCaseDate.value
        //value7: ''
      };
    },
    mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.CloseCaseDate.value;
    },
    reset:function(){
      let that=this;
      this.value=""
    }
  }
  };
</script>