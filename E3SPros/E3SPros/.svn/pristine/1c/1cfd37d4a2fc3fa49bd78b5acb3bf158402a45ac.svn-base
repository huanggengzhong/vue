<!--
* description: 选择车型
* author: ydche
* createdDate: 2019-08-09
-->
<template>
  <section class="carTypeConfig">
    <el-col :span="span">
      <label v-if="isShowLabel">{{curLabelName}}</label>
      <el-input placeholder="请选择" v-model="modelText" :disabled="disabled" size="small" suffix-icon="el-icon-search" clearable @blur="sendCode" @focus="getFocusCode"></el-input>
    </el-col>
    <pa-choose-part
      :popupsVisible="curPopupsVisible" :codeField="codeField" :comType="comType" ref="PaChoosePart"
      :popupsKey="popupsKey" :code="modelCode" :key="curPopupsKey" @changeCode="getComponentCode"
    ></pa-choose-part>
  </section>
</template>
<script>
import { searchInputMixins } from "@/components/mixins/searchInputMixins"
import { orgApis } from '@/api/graphQLApiList/org'
import PaChoosePart from '@/components/se/CarTypeModal/CarTypeModal'
export default {
  // 组件混入对象
  mixins: [searchInputMixins],
  components: {
    PaChoosePart
  },
  data() {
    return {
      curLabelName: this.labelName === '' ? '车型' : this.labelName
    };
  },
  methods:{
    reset(){
      this.modelText = ''
    },
    getData(val){
      console.log(val)
      let num = val
      this.modelText = num
    },
    getBrandData(val){
      this.$refs.PaChoosePart.getBrandData(val)
    }
  }
};
</script>
