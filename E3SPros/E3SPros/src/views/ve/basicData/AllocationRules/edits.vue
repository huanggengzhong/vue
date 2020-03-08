<!--
* description: 调拨量共享设置弹窗
* author: yangsq
* createdDate: 2019-09-24
-->
<template>
  <section class="editCarBrand">
    <el-dialog
      :close-on-click-modal="false"
      :title="textMap[popupsState]"
      :append-to-body="true"
      :visible.sync="dialogVisible"
      @close="sendCode"
      :key="popupsTableKey"
      width="1000px">
      <div class="filter-container filter-params">
        <el-row :gutter="26">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">{{$t('ve.label.allCheck')}}</el-checkbox>

            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
        </el-row>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button v-for="comp in tableButtons" :key="comp.compKey" :type="comp.type" @click="comp.clickEvent">{{comp.text}}</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script>
import { formMixins } from "@/components/mixins/formMixins";
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/popupsOneTable'
export default {
  // 组件混入对象
  mixins: [formMixins],
  props:{
      dialogVisible:{type:Boolean,default:false}
  },
  data() {
    return {
      // 保存API配置对象
      apiConfig: veApis.veAllocationRule,
      // 动态组件-按钮
        cities: [this.$t("ve.label.CrossCityPercentageAssessmentAreaPercentage"),
  this.$t("ve.label.NonCityPercentageAssessmentAreaPercentage"),
   this.$t("ve.label.NonCityPercentageAssessmentAreaNonPercentage")],
      tableButtons: [
        {compKey: 'btnKey3', type: 'primary', size: 'small', clickEvent: () => this.save(), text: this.$t("sys.button.save")},
      ],
      // 动态组件-查询条件
      tableComponents: [],
      // 静态组件-查询条件
      // 标题
      textMap: {
        add: '调拨量共享设置'
      },
        checkAll: false,
        checkedCities: ['跨市占率考核辖区'],
        isIndeterminate: true,
      // 表单数据（无需赋值，由混入对象赋值）
      formField: {
        carBrandCode: '',
        dlrShortName: '',
        RiskIdentification: ''
      }
    };
  },
  methods: {
    //保存
    save(){
      const that = this;
      //保存表单
      this.saveForm()
    },
    close(){
        this.curPopupsVisible = false;
    },
          handleCheckAllChange(val) {
        this.checkedCities = val ? this.cities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },

      sendCode(){
          this.$emit("changeCode");
      },
  }
};
</script>
<style scoped>
/deep/ .el-checkbox {
    width: 20%;
}
</style>
