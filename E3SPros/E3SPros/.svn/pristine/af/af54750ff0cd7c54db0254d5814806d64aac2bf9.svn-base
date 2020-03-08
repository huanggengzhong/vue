<!--
* description: 双日期选择器
* author: yxyan
* createdDate: 2019-07-27
-->
<template>
  <section>
    <el-col :span="span">
    <span class="demonstration">{{timeName}}</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
    </el-col>
  </section>
</template>

<script>

export default {
  props:{
    span:{
      type:Number,
      default:function(){
        return 6
      }
    },
     timeName:{
      type:'',
      default:function(){
        return '默认'
      }
    },
       value1: '',
  },
  data() {
    return {
       pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },

        },

        // value2: '',
    };
  },
  created() {

  },
  methods: {

  }
};
</script>
