<!--
* description: 仓库输入框（含弹窗）
* author: linsy
* createdDate: 2019-08-08
-->
<template>
  <section class="orgDlr" v-show="curIsShow" :key="fullComponentKey">
    <el-col :span="span">
      <lableName   :isShowLabel="isShowLabel" :isRequire="isRequire"  :curLabelName="curLabelName">{{curLabelName}}</lableName>
      <el-input  :placeholder="placeholder" v-model="modelText" size="small" suffix-icon="el-icon-search" clearable @blur="sendCode"
        @clear="clearCode"  @closeWareHouse="close"  @focus="getFocusCode"></el-input>
        <validateFormate
      :curLabelName="curLabelName"
      :validrule="validrule"
    ></validateFormate>
    </el-col>


    <hostFatoryWareHouse
      :popupsVisible="curPopupsVisible"  :codeField="codeField" :comType="comType" :textField="textField"
      :popupsKey="popupsKey" :code="modelCode" :key="curPopupsKey" @changeCode="getComponentCode" :isMul="isMul"
    ></hostFatoryWareHouse>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins"
import { orgApis } from '@/api/graphQLApiList/org'
import validateFormate from "@/components/validateFormate";
import lableName from "@/components/lableName";
import hostFatoryWareHouse from '@/components/ve/hostFatoryWareHouse/hostFatoryWareHouse'
export default {
  // 组件混入对象
  mixins: [searchInputMixins],
  components: {
    hostFatoryWareHouse,
    lableName,
    validateFormate
  },
  data() {
    return {
     placeholder: this.$t('sys.tips.esTip0'),
    };
  },
  methods:{
  }
};
</script>
