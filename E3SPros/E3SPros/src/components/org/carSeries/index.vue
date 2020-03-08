<!--
* description: 车系输入框（含弹窗）
* author: linsy
* createdDate: 2019-08-12
-->
<template>
  <section class="carSeries">
    <el-col :span="span">
      <label v-if="isShowLabel">{{curLabelName}}</label>
      <el-input  :placeholder="placeholder" v-model="modelText" size="small" suffix-icon="el-icon-search" clearable @blur="sendCode" @focus="getFocusCode"></el-input>
    </el-col>
    <carSeries
      :popupsVisible="curPopupsVisible" :codeField="codeField" :comType="comType"
      :popupsKey="popupsKey" :code="modelCode" :key="curPopupsKey" @changeCode="getComponentCode"
    ></carSeries>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins";
import { orgApis } from '@/api/graphQLApiList/org'
import carSeries from './carSeries'
export default {
  // 组件混入对象
  mixins: [searchInputMixins],
  components: {
    carSeries
  },
  data() {
    return {
       placeholder: this.$t('sys.tips.esTip0'),
      curLabelName: this.labelName === '' ? '车系' : this.labelName
    };
  }
};
</script>
