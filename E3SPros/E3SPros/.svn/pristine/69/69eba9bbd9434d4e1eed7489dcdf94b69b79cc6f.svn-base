<!--
* description: 交车信息
* author: liyanm
* createdDate: 2019-07-27
 *   
-->
<template>
  <div class="handedCars">
    <span class="handedCar">使用人信息</span>
<div class="filter-container filter-params">
    <el-row :gutter="26">
      <component
        v-for="comp in tableComponentsone.filter(o => o.isMust === true)"
        :ref="comp.isRequire ? comp.isRequire+ comp.compKey : comp.compKey"
        :validrule="comp.validrule"
        :key="comp.compKey"
        :codeField="comp.codeField"
        :textField="comp.textField"
        :popupsKey="comp.compKey"
        :is="comp.component"
        :code="formField[comp.codeField]"
        @changeCode="getComponentCode"
        @focusCode="getFocusCode"
        :disabled="comp.disabled"
        :isRequire="comp.isRequire"
        :isMul="comp.isMul"
        :span="comp.span || 6"
        :labelName="comp.labelName"
        :lookuptype="comp.lookuptype"
        :dateOptionsType="comp.dateOptionsType"
      ></component>
    </el-row>
  </div>
  </div>
</template>

<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from "@/api/graphQLApiList/ve";
import OneTableTemplate from "@/components/templates/popupsOneTable";
import { CacheConfig } from "@/cache/configCache/index";
  export default {
     name: "orgBrandManage",
  // 组件混入对象
  mixins: [formMixins],
    data() {
    return {
      tableComponentsone: [
         // component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', 
        // component: () => import('@/components/org/commonInput'), type: 'inputText',
        {
          compKey: "compKey88",
           labelName: this.$t("ve.label.carOwnRelation"),
          //车主关系
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
         component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', 
          disabled:true,
          isMust: true
        },   
           {
          compKey: "compKey61",
           labelName: this.$t("ve.label.relationExplain"),
          //关系说明
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import('@/components/org/commonInput'), type: 'inputText',
          disabled:true,
          isMust: true
        },
         {
          compKey: "compKey236",
           labelName: this.$t("ve.label.buyCustId"),
          //客户名称
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
         component: () => import('@/components/org/commonInput'), type: 'inputText',
          disabled:true,
          isMust: true
        },
           {
          compKey: "compKey206",
           labelName: this.$t("ve.label.phone"),
          //联系电话
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import('@/components/org/commonInput'), type: 'inputText',
          disabled:true,
          isMust: true
        },
         
            {
          compKey: "compKey136",
           labelName: this.$t("ve.label.IDType"),
          //证件类型
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', 
          disabled:true,
          isMust: true
        },
           {
          compKey: "compKey146",
           labelName: this.$t("ve.label.credNo"),
          //证件号码
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
        component: () => import('@/components/org/commonInput'), type: 'inputText',
          disabled:true,
          isMust: true
        },
      
          {
          compKey: "compKey166",
           labelName: this.$t("ve.label.uploadAttachment"),
          //上传附件
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputFile",
          disabled:true,
          isMust: true
        },
      {
          compKey: "compKey136",
           labelName: this.$t("ve.label.city"),
          //城市
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
         component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', 
          disabled:false,
          isMust: true
        },
           {
          compKey: "compKey206",
           labelName: this.$t("ve.label.province"),
          //省份
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
        component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', 
          disabled:false,
          isMust: true
        },
         
           
           {
          compKey: "compKey146",
           labelName: this.$t("ve.label.area"),
          //县区
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
         component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', 
          disabled:false,
          isMust: true
        },
        
          {
          compKey: "compKey256",
           labelName: this.$t("ve.label.detailedAddress"),
          //详细地址
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputFile",
          disabled:true,
          isMust: true
        },
         {
          compKey: "compKey256",
           labelName: this.$t("ve.label.gender"),
          //性别
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputFile",
          disabled:true,
          isMust: true
        },
         {
          compKey: "compKey256",
           labelName: this.$t("ve.label.Birthdate"),
          //出生日期
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputFile",
          disabled:true,
          isMust: true
        },
         {
          compKey: "compKey246",
           labelName: this.$t("ve.label.firstContact"),
          //首选联系方式
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputFile",
          disabled:true,
          isMust: true
        },
         {
          compKey: "compKey246",
           labelName: this.$t("ve.label.FaxNumber"),
          //传真号码
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputFile",
          disabled:true,
          isMust: true
        },
         {
          compKey: "compKey246",
           labelName: this.$t("ve.label.homeTelephone"),
          //家庭电话
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputFile",
          disabled:true,
          isMust: true
        },
          {
          compKey: "compKey246",
           labelName: this.$t("ve.label.officePhone"),
          //办公电话
          codeField: "carSeriesCn",
          parentFileds:'carBrandCode',
          component: () => import("@/components/org/carTypeConfig"),
          type: "inputFile",
          disabled:true,
          isMust: true
        },
              
      ],
     
    }
    }
  }
</script>

<style lang="scss" scoped>
.tab-content div[data-v-db326a18]{
   text-align: left;
}
.handedCars{
  margin-top: 20px;
   text-align: left;
}
.filter-params{
  border: 1px solid rgb(228, 208, 208);
}
.handedCar{
  text-align: left;
}
</style>