<template>
  <div class="block">
    <span class="demonstration">发布日期</span>
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
  export default {
    name: "ReleaseDate",
  props: {
    ReleaseDate: {
      options:Array,
      value: String
    }
  },
    data() {
      return {
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
         value: this.ApplicationTime.value,
        value2: ''
      };
    },
     mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.ReleaseDate.value;
    }
  }
  };
</script>

<style scoped>

</style>
