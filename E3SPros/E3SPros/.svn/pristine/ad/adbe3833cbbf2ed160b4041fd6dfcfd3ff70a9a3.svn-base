<!--
* description: 备件选择_单选
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="备件选择"
      :visible.sync="curPopupsVisible"
      width="1000px"
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
      />
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins'
import { seApis } from '@/api/graphQLApiList/se'
import OneTableTemplate from '@/components/templates/popupsOneTable'
export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
        //:dynamicIsShowSelect="false"
  name: 'SePaChoosePart',
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: seApis.PaChoosePartQuery,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: '查询'},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.sendCode('partNo', 'partNo'), text: '确认'},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.reset(), text: '导入查询'},
        {compKey: 'btnKey4', type: '', size: 'small', clickEvent: () => this.select(), text: '替换件选择'},
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName: '备件编码', codeField: 'partNo', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey2', labelName: '备件名称', codeField: 'partName', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
		{compKey: 'compKey3', labelName: '备件类别', codeField: 'IS_PERFECT', component: () => import('@/components/se/sePaChoosePart/partState'), type: 'dropdownList', isMust: true},

        // 隐藏组件
		{compKey: 'compKey4', labelName: '备件属性', codeField: 'IS_PERFECT', component: () => import('@/components/se/sePaChoosePart/partProperty'), type: 'dropdownList', isMust: false},
		{compKey: 'compKey5', labelName: '备件车系', codeField: 'IS_PERFECT', component: () => import('@/components/se/sePaChoosePart/pubSeriesCode'), type: 'dropdownList', isMust: false},
		{compKey: 'compKey6', labelName: '备件车型', codeField: 'IS_PERFECT', component: () => import('@/components/se/sePaChoosePart/pubCarType'), type: 'dropdownList', isMust: false},
      ],
      // 动态生成网格列
      tableCols: [
        { prop: 'partNo', label: '备件编码', width: 115, align: 'center' },
        { prop: 'partName', label: '备件名称', width: 0, align: 'center' },
        { prop: 'partTypeName', label: '备件类别', width: 0, align: 'center' },
        { prop: 'pubSeriesName', label: '备件车系', width: 100, align: 'center' },
        { prop: 'pubCarTypeCode', label: '备件车型', width: 0, align: 'center',  },
        { prop: 'storeQty', label: '实际库存', width: 0, align: 'center',  },
        { prop: 'purPackQty', label: '采购包装含量', width: 0, align: 'center' },
        { prop: 'dlrLeastSaleQty', label: '最小销售数量', width: 0, align: 'center',  },
        { prop: 'salePrice', label: '销售价', width: 0, align: 'center' },
        { prop: 'canUseQty', label: '可用库存', width: 0, align: 'center' },
        { prop: 'dlrOrderSwitchName', label: '订货开关', width: 0, align: 'center' },
        { prop: 'partFlowStateName', label: '备件状态', width: 0, align: 'center' }
        //hidden: true
      ],
      //表单查询数据（查询条件）
      formField:{
        partNo: '',
        partName: '',
        reserveOrderId: '',
        carLicenseNo: '',
        custName: '',
        reserveMan: ''
      }
    };
  },
  methods:{
      select(){

      }
  }
};
</script>
