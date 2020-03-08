<!--
* description: 维修工单_预约导入
* author: ydche
* createdDate: 2019-08-08
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      title="预约导入"
      :visible.sync="curPopupsVisible"
      width="1000px"
      center
      @close="closeDialog"
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
  mixins: [oneTableWithViewTemplateMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
      // 网格查询API配置对象
      apiConfig: seApis.seBuRepairReserverQuery,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: '查询'},
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: '重置'},
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.sendCode('reserveOrderId', 'reserveOrderId'), text: '确认'}
      ],
      // 动态组件-查询条件
      tableComponents: [
        // 显示组件
        {compKey: 'compKey1', labelName: '预计回厂时间', codeField: 'preComeBegDate', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: true },
        {compKey: 'compKey2', labelName: '至', codeField: 'preComeEndDate', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: true },
        {compKey: 'compKey3', labelName: '预约单号', codeField: 'reserveOrderId', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        // 隐藏组件
        {compKey: 'compKey4', labelName: '车牌号', codeField: 'carLicenseNo', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        {compKey: 'compKey5', labelName: '客户名称', codeField: 'custName', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
        {compKey: 'compKey6', labelName: '预约人', codeField: 'reserveMan', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: false},
      ],
      // 动态生成网格列
      tableCols: [
        { prop: 'reserveOrderCode', label: '预约单号', width: 115, align: 'center' },
        { prop: 'preComeDate', label: '预约来店时间', width: 0, align: 'center' },
        { prop: 'reserveState', label: '预约状态', width: 0, align: 'center' },
        { prop: 'carLicenseNo', label: '车牌号', width: 100, align: 'center' },
        { prop: 'custTel', label: '客户电话', width: 0, align: 'center',  },
        { prop: 'custName', label: '客户姓名', width: 0, align: 'center',  },
        { prop: 'reserveMan', label: '预约人', width: 0, align: 'center' },
        { prop: 'reserveTel', label: '预约人电话', width: 0, align: 'center',  },
        { prop: 'vin', label: 'VIN码', width: 0, align: 'center' },
        { prop: 'carTypeCode', label: '车型', width: 0, align: 'center' },
        { prop: 'createdDate', label: '预约时间', width: 0, align: 'center' }
        //hidden: true
      ],
      //表单查询数据（查询条件）
      formField:{
        preComeBegDate: '',
        preComeEndDate: '',
        reserveOrderId: '',
        carLicenseNo: '',
        custName: '',
        reserveMan: ''
      }
    };
  },
  methods:{
    open(){
      this.curPopupsVisible = true
      this.reset()
    },
    sendCode(arrayCodeField, arrayTextField) {
      // 获取嵌套组件的选中的值
      const that = this.$refs.multipleTable
      const selectData = that.$refs.multipleTable.selection
      if (selectData && selectData.length > 0) {
        if (arrayCodeField) {
          this.modelCode = this.$utils.getArrayFromJsonArray(selectData, arrayCodeField)
        } else {
          this.modelCode = this.$utils.getArrayFromJsonArray(selectData, arrayCodeField)
        }
        if (arrayTextField) {
          this.modelText = this.$utils.getArrayFromJsonArray(selectData, arrayTextField)
        } else {
          this.modelText = this.$utils.getArrayFromJsonArray(selectData, arrayTextField)
        }
      } else {
        this.modelCode = []
        this.modelText = []
      }
      var code = typeof (this.modelCode) === 'string' ? this.modelCode : this.modelCode.join(',')
      var text = typeof (this.modelText) === 'string' ? this.modelText : this.modelText.join(',')
      this.$emit('changeCode', code, text, this.codeField, this.comType, this.popupsKey)
      this.curPopupsVisible = false
    },
    closeDialog(){
      this.curPopupsVisible = false
    }
  }
};
</script>
