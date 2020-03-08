<!--
* description: 车型配置车身颜色关系弹出框
* author: yangmin
* createdDate: 2019-08-03
-->
<template>
  <section class="carColor">
    <el-dialog
      :title="$t('org.label.carColor')"
      :visible.sync="curPopupsVisible"
      width="800px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
    >  <!-- "车身颜色" -->
      <one-table-template ref="multipleTable"
        :dynamicButtons="tableButtons"
        :dynamicComponents="tableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        :dynamicIsShowSelect="isMul"
        :dynamicIsShowMoreBtn="false"
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { orgApis } from '@/api/graphQLApiList/org'
import OneTableTemplate from '@/components/templates/popupsOneTable'
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: orgApis.mdmCarTypeColorQueryListForPage,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text:this.$t('sys.button.query')},//查询
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.sendCode('carColorId', 'mdmCarColorExtend.carColorName'), text:this.$t('sys.button.confirm')},//确认
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {compKey: 'compKey1', span: 10, labelName:this.$t('org.label.carColor')+'ID', codeField: 'carColorId', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},// '车身颜色ID'
      ],
      // 动态生成网格列
      tableCols: [
        { prop: 'carTypeColorId', label: '车型配置车身颜色关系ID', width: 0, align: 'center', hidden: true },
        { prop: 'carConfigId', label: '车型配置Id', width: 0, align: 'center', hidden: true },
        { prop: 'mdmVeCarConfigExtend.carConfigCn', label: this.$t('org.label.carConfig'),width: 215, align: 'center' },/*车型配置*/
        { prop: 'carColorId', label: '车身颜色ID', width: 0, align: 'center', hidden: true },
        { prop: 'mdmCarColorExtend.carColorCode', label:this.$t('org.label.carColorCode'), width: 215, align: 'center' },//'车身颜色编码'
        { prop: 'mdmCarColorExtend.carColorName', label: this.$t('org.label.carColor'), width: 205, align: 'center' }//车身颜色
      ],
      //表单查询数据（查询条件）
      formField:{
        carConfigId: '',
        carColorId: '',
        isEnable: '1'
      }
    };
  }
};
</script>
