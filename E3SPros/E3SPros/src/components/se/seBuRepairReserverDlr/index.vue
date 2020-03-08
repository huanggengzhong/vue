<!--
* description: 维修工单_预约导入
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="carTypeConfig">
    <el-col :span="span">
      <label v-if="isShowLabel">{{curLabelName}}</label>
      <el-input placeholder="请选择" v-model="modelText" :disabled="disabled" size="small" suffix-icon="el-icon-search" clearable @blur="sendCode" @focus="getFocusCode"></el-input>
    </el-col>
    <car-type-config
      :popupsVisible="curPopupsVisible" :codeField="codeField" :comType="comType"
      :popupsKey="popupsKey" :code="modelCode" :key="curPopupsKey" @changeCode="getComponentCode"
    ></car-type-config>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins"
import { orgApis } from '@/api/graphQLApiList/org'
import CarTypeConfig from '@/components/se/seBuRepairReserverDlr/seBuRepairReserverDlr'
export default {
  // 组件混入对象
  mixins: [searchInputMixins],
  components: {
    CarTypeConfig
  },
  data() {
    return {
      curLabelName: this.labelName === '' ? '车型' : this.labelName
    };
  },
  methods:{
    sendCode(){
      this.$emit('changeCodes', this.modelCode)

    }
  }
};
</script>
