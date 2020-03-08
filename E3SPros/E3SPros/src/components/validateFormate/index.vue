<!--
* description: 校验提示样式通用模块
* author: liyanm
* createdDate: 2019-08-10
-->
<template>
  <section
    class="cssvalidateFormate"
    ref="validateFormate"
  >
    <i
      v-if="iconV == 1"
      @mouseenter="validatevisible"
      @mouseleave="validateinvisible"
      class="el-iconposition el-icon-warning"
    ></i>
    <i
      v-if="iconV == 2"
      class="el-iconposition el-icon-success"
    ></i>
    <!-- <i
      v-if="iconV == 3"
      class="el-iconposition el-icon-error"
    ></i> -->
    <div
      v-if="validateshow"
      class="validateshowBG"
    ><span></span>{{validataMessage}}</div>
  </section>
</template>
<script>
import { validateMixins } from "@/components/mixins/validateMixins";
export default {
  name: "validateFormate",
  mixins: [validateMixins]
};
</script>
