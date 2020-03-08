<!--
* description: 文本按钮通用组件
* author: luojx
* createdDate: 2019-08-05
-->
<template>
  <section v-if="curIsShow">
    <a @click="sendCode" v-if="curIsShowLabel">{{curLabelName}}</a>
  </section>
</template>
<script>
import { linkButtonMixins } from '@/components/mixins/linkButtonMixins'
export default {
  mixins: [linkButtonMixins]
}
</script>
<style scoped>
section {
  float:left;
  margin-right: 5px;
}
</style>
