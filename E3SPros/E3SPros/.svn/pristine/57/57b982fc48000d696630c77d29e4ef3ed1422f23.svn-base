<!--
* description: 选择其他费用
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="carTypeConfig">
    <el-col :span="span">
      <label v-if="isShowLabel">{{curLabelName}}</label>
      <el-input placeholder="请选择" v-model="modelText" :disabled="disabled" size="small" suffix-icon="el-icon-search" clearable @blur="sendCode" @focus="getFocusCode"></el-input>
    </el-col>
    <other-fee-type
      :popupsVisible="curPopupsVisible" :codeField="codeField" :comType="comType"
      :popupsKey="popupsKey" :code="modelCode" :key="curPopupsKey" @changeCode="getComponentCode"
    ></other-fee-type>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins"
import { orgApis } from '@/api/graphQLApiList/org'
import OtherFeeType from '@/components/se/chooseOtherFeeType/chooseOtherFeeType'
export default {
  // 组件混入对象
  mixins: [searchInputMixins],
  components: {
    OtherFeeType
  },
  data() {
    return {
      curLabelName: this.labelName === '' ? '其他费用' : this.labelName
    };
  },
  methods:{
    sendCode(){
      this.$emit('changeCodes', this.modelCode)

    }
  }
};
</script>
