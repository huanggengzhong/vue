<template>
  <el-col :span="6">
    <el-form-item label="车主信息">
      <el-select v-model="value" placeholder="请选择" @change="sendCode">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-form-item>
  </el-col>
</template>

<script>
// import {} form
import { format } from 'path';
export default {
  name: "sct_CarInfo",
  data() {
    return {
      value: "1",
      options: [
        {
          value: "1",
          label: "维护使用人"
        },
        {
          value: "2",
          label: "变更车主"
        }
      ]
    };
  },
  methods: {
    sendCode() {
      debugger
      let val = this.value;
      this.$emit("changeCode", val);
    }
  }
};
</script>