<template>
  <section>
    <el-col :span="span">
      <span class="demonstration">{{timeName}}</span>
      <el-date-picker
        v-model="value"
        type="date"
        :picker-options="pickerOptions"
        placeholder="选择日期"
        @change="change()"
      ></el-date-picker>
    </el-col>
  </section>
</template>

<script>
export default {
  props: {
    span: {
      type: Number,
      default: function() {
        return 6;
      }
    },
    valueF: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    timeName:{
      type:'',
      default:function(){
        return '默认'
      }
    },
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value: ""
    };
  },
  created() {},
  watch: {
    valueF(newValue,oldValue) {
      this.value = "";
    }
  },
  methods: {
    change(){
      this.$emit("changeCode",this.value)
    }
  }
};
</script>