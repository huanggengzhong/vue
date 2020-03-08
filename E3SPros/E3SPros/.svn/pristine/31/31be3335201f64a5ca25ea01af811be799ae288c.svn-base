<!--
* description:明细弹出框
* author: linsy
* createdDate: 2019-08-14
-->
<template>
  <section class="carColor">
    <el-dialog
      title="经销商滚动需求上传审核明细"
      :visible.sync="popupsVisible"
      width="1100px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >
      <one-table-template ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowMoreBtn="false"
        :dynamicIsShowSelect='false'
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/popupsOneTable'
export default {
  name:'planDetialDialog',
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: veApis.veMonthPlanDetailQuery,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(), text: this.$t('sys.button.query')/*查询*/},
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName: this.$t('org.label.wayToShow')/*显示方式*/, codeField: 'showType',code:'1', isMul:false,component: () => import('./showTypeSel.vue'), type: 'dropdownList', isMust: true}
      ],
      // 动态生成网格列
      tableCols: [
        { prop: 'dlrShortName', label: this.$t('org.label.dlrName')/*经销商*/, width: 215, align: 'center' },
        { prop: 'carBrandName', label: this.$t('org.label.carBrand')/*品牌*/, width: 215, align: 'center' },
        { prop: 'carSeriesName', label:this.$t('org.label.carSerise')/*车系*/, width: 215, align: 'center'},
        { prop: 'carTypeName', label: this.$t('org.label.carType')/*车型*/, width: 215, align: 'center',hidden:this.formField.showType==1},
        { prop: 'carConfigName', label: this.$t('org.label.carConfig')/*车型配置*/, width: 215, align: 'center' },
        { prop: 'makeMonth', label: this.$t('org.label.monthYear')/*年月*/, width: 215, align: 'center' },
      ],
      //表单查询数据（查询条件）
      formField:{
        showType:''
      }
    }
  },
  methods:{
    isShow(col){
      const that=this
      that.$nextTick(() => {
      console.log(that.formField)
        if(col=='carType'){
          if(that.formField.showType=='1' || that.formField.showType=='2'){
            return true;
          }else{
            return false;
          }
        }
      })
    }
  }
};
</script>
