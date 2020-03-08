<!--
* description: 文本组件
* author: linwm
* createdDate: 2019-09-06
-->
<template>
  <el-col :span="span" style="text-align:left;display:inline-block;height:32px;line-height:36px">
    <span >{{curLabelName}}</span>
  </el-col>
</template>
<script>
import { labelMixins } from "@/components/mixins/labelMixins";
export default {
  mixins: [labelMixins],
};
</script>
