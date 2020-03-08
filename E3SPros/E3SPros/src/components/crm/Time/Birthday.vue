<template>
  <el-form-item label="生日">
    <el-date-picker
    :readonly="isreadonly"
      v-model="value"
      type="date"
      placeholder="选择日期时间"
      prefix-icon="none"
      value-format="yyyy-MM-dd HH:mm:ss">
    </el-date-picker>
  </el-form-item>
</template>

<script>
  export default {
    name: "Birthday",
  props: {
    Birthday: {
      value: String,
      isreadonly: Boolean,
    }
  },
    data() {
      return {
        value:this.Birthday.value,
        isreadonly:this.Birthday.isreadonly,
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
         value: this.Birthday.value
    };
  },
  mounted: function() {
    this.getData();
  },
  methods: {
    getData: function() {
      let that = this;
      that.value = this.Birthday.value;
    }
  }
  };
</script>

<style scoped>

</style>
