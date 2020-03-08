<!--
* description: 主机厂库存
* author: ydche
* createdDate: 2019-10-10
-->
<template>
  <section class="carTypeConfig">
    <el-dialog
      :title="title"
      :visible.sync="curPopupsVisible"
      width="1200px"
      center
      @close="sendCode"
      :close-on-click-modal="false"
      :append-to-body="true"
      ref="dialogMultipleTable"
    >
      <div class="filter-container filter-params">
        <el-row
          :gutter="26"
          ref="vailComponentList"
        >
          <component
            v-for="comp in tableComponents.filter(o => o.isMust === true)"
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
            :span="comp.span || 6"
            :labelName="comp.labelName"
            :lookuptype="comp.lookuptype"
            :dateOptionsType="comp.dateOptionsType"
            :isMul="false"
          ></component>
        </el-row>
      </div>
      <div
        class=" textAlignRight"
        >
        <el-button
          v-for="comp in tableButtons"
          :key="comp.compKey"
          :type="comp.type"
          @click="comp.clickEvent"
        >{{comp.text}}</el-button>
      </div>
      <div
      class="filter-container filter-title lableNN top200"
      ref="resultTitleHeight"
    >{{this.$t('ve.label.imPurcOrderInfor')/*导入采购单信息*/}}</div>
      <one-table-template ref="multipleTables"
        :dynamicButtons="selectableButtons"
        :dynamicComponents="selectableComponents"
        :dynamicApiConfig="apiConfig"
        :dynamicTableOtherHeight="295"
        :dynamicTableCols="tableCols"
        :dynamicFormFields="formField"
        />
    <div
      class="filter-container filter-title lableNN"
      ref="resultTitleHeight"
    >{{this.$t('ve.label.imPurcOrderInfor')/*库存明细*/}}</div>
        <one-table-template ref="multipleTable"
        :dynamicButtons="noButtons"
        :dynamicComponents="noComponents"
        :dynamicIsInitTable="true"
        :dynamicTableOtherHeight="310"
        :dynamicApiConfig="apiConfig"
        :dynamicTableCols="InventdetatableCols"
        :dynamicFormFields="formField"
        />
    
    </el-dialog>
  </section>
</template>
<script>
import { oneTableWithViewTemplateMixins } from '@/components/mixins/oneTableWithViewTemplateMixins';
import { valueObjectMixins } from '@/components/mixins/valueObjectMixins';
import { oneTableTemplateMixins } from "@/components/mixins/oneTableTemplateMixins";
import { veApis } from '@/api/graphQLApiList/ve'
import OneTableTemplate from '@/components/templates/popupsOneTable'
import { CacheConfig } from '@/cache/configCache/index'

export default {
  // 组件混入对象：{data[listQuery] methods[queryTable]}
  mixins: [oneTableWithViewTemplateMixins,oneTableTemplateMixins, valueObjectMixins],
  components: {
    OneTableTemplate
  },
  data() {
    return {
        noButtons:[],
        noComponents:[],
      // 弹窗页面标识
      popupsPageCode: '/components/org/carTypeConfig/carTypeConfig',
      // 网格查询API配置对象
      apiConfig: veApis.distribAchieApi1,
      // 动态组件-按钮
      tableButtons: [
        {compKey: 'btnKey1', type: 'primary', size: 'small', clickEvent: () => this.importExcel(1), text: this.$t('sys.button.import')},//导入
        {compKey: 'btnKey2', type: '', size: 'small', clickEvent: () => this.reset(), text: this.$t('ve.label.generatePurchaseOrder')},//生成采购单
        {compKey: 'btnKey3', type: '', size: 'small', clickEvent: () => this.sendCode('carConfigId', 'carConfigCode'), text:this.$t('sys.button.reject')},//驳回
      ],
      selectableButtons:[
        {compKey: 'btnKey4', type: 'primary', size: 'small', clickEvent: () => this.queryTable(1), text: this.$t('sys.button.query')},//查询
        {compKey: 'btnKey5', type: '', size: 'small', clickEvent: () => this.reset(), text:  this.$t('sys.button.reset')},//重置
        {compKey: 'btnKey6', type: '', size: 'small', clickEvent: () => this.sendCode('carConfigId', 'carConfigCode'), text:this.$t('sys.button.export')},//导出
      ],
      // 动态组件-查询条件
      tableComponents: [],
      selectableComponents:[
        {compKey: 'compKey4', labelName: this.$t('org.label.carBrandCn')/*品牌*/, codeField: 'carBrandCode', component: () => import('@/components/org/carBrand/carBrand'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey5', labelName: this.$t('org.label.carConfig')/*车型*/,parentFileds:'carBrandCode', codeField: 'carConfigId', component: () => import('@/components/org/carTypeConfig'), type: 'propus', isMust: true},
        {compKey: 'compKey6', labelName: this.$t('org.label.vin')/*VIN码*/, codeField: 'vin', component: () => import('@/components/org/commonInput'), type: 'inputText', isMust: true},
        {compKey: 'compKey7', labelName: this.$t('ve.label.importStartDate')/*开始日期*/, codeField: 'offLineDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey8', labelName: this.$t('ve.label.importEndDate')/*开始日期*/, codeField: 'offLineDateBegin', component: () => import('@/components/org/datePicker/datePicker'), type: 'datePicker', dateOptionsType: '0', isMust: false },
        {compKey: 'compKey9',
          labelName: this.$t('ve.label.importResult'),//导入结果
           lookuptype: 'VE0079',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList', isMust: false
        },
        {compKey: 'compKey10', labelName: this.$t('ve.label.areaIdentification')/*地区标识*/, lookuptype: 'VE0627', codeField: 'hostLimitReasonId', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: false},
      ],
      // 动态组件-查询条件
      staticTableComponents: CacheConfig.cacheData[this.$route.path] && CacheConfig.cacheData[this.$route.path].tableComponents && CacheConfig.cacheData[this.$route.path].tableComponents.length > 0 ? CacheConfig.cacheData[this.$route.path].tableComponents: [
        { compKey: "compKey1",
          codeField: "file",
          span:10,
          component: () => import("@/components/ve/upLoad"),
          type: "propus",
          isMust: true
        },
        { compKey: "compKey11",
          labelName: '',
          codeField: "file",
          span:2,
          component: () => import("@/components/ve/batchImportTemplate"),
          type: "propus",
          isMust: true
        },
        {compKey: 'compKey2', labelName: this.$t('org.label.carHouseType')/*库存类型*/, lookuptype: 'VE0079', codeField: 'carHouseType', component: () => import('@/components/org/LookupValue'), type: 'dropdownList', isMust: true},
        {compKey: 'compKey3',
          labelName: this.$t('ve.label.getETPTCode'),//ETPT车
           lookuptype: 'VE0079',
           codeField: 'roleOrgType',
           component: () => import('@/components/org/LookupValue'),
           type: 'dropdownList', isMust: true
        },
    ],
      // 动态生成网格列
      tableCols: [

      ],
      // 静态生成网格列
      staticTableCols: [
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: 115, align: 'center' },//品牌
        { prop: 'dlrCode', label: this.$t('org.label.dlrCode')/*经销商编码*/, width: 100, align: 'center' },
        { prop: 'curName', label: this.$t('org.label.dlrName')/*经销商*/, width: 100, align: 'center' },
        { prop: 'retreatNo', label: this.$t('ve.label.purOrderNo')/*采购单编号*/, width: 120, align: 'center' },//采购单编号
        { prop: "purStatus",label: this.$t("ve.label.purStatus") /**"采购单状态"*/,width: 150,align: "center"},
        { prop: "purType",label:this.$t("ve.label.capitalType")+'('+this.$t("sys.button.import")+')'/*"资金类型（导入）"*/,width: 120,align: "center"},
        { prop: "purType",label:this.$t("ve.label.capitalType")+'('+this.$t("sys.button.export")+')'/*"资金类型（导出）"*/,width: 120,align: "center"},
        { prop: 'vin', label:  this.$t('org.label.vin')/*vin码*/, width:180, align: 'center' },
        { prop: 'testDrive', label:  this.$t('ve.label.testDrive')/*试乘试驾*/, width:80, align: 'center' },
        { prop: 'receiptState', label: this.$t('ve.label.areaIdentification')/*地区标识*/, width: 100, align: 'center' },
        { prop: 'receiptState', label: this.$t('ve.label.importResultType')/*导入结果类型*/, width: 120, align: 'center' },
        { prop: 'receiptState', label: this.$t('ve.label.generateResultType')/*生成结果类型*/, width: 120, align: 'center' },
        { prop: 'createDatetime', label: this.$t('ve.label.importTime')/*导入时间*/, width: 100, align: 'center' },
        { prop: 'receiptState', label: this.$t('ve.label.updateTime')/*更新时间*/, width: 100, align: 'center' },
        { prop: 'curName', label: this.$t('ve.label.remark')+"("+this.$t('ve.label.reasonForFailure')+")"/*备注（失败原因）*/, width: 150, align: 'center' },
        { prop: 'curName', label: this.$t('ve.label.importID')/*导入标识*/, width: 120, align: 'center' },
      ],
      InventdetatableCols:[
        { prop: 'carBrandCn', label: this.$t('org.label.carBrandCn'), width: 115, align: 'center' },//品牌
        { prop: 'curName', label: this.$t('org.label.dlrName')/*经销商*/, width: 100, align: 'center' },
        {
          prop: "moveIntoDestination",
          label: this.$t('ve.label.destinaMoveIn')+"+",/*搬入目的地*/
          width: 130,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              isMul: false,
              codeField: "moveIntoDestination",
              textField: "moveIntoDestination",
              lookuptype: "VE0188",
              clickEvent: () => null,
              component: () => import("@/components/org/commonInput")
            }
          ]
        },
        {
          prop: "testDrive",
          label: this.$t('ve.label.testDrive')+"+",//试乘试驾车
          width: 130,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              isMul: false,
              codeField: "testDrive",
              textField: "testDrive",
              lookuptype: "VE0188",
              clickEvent: () => null,
              component: () => import("@/components/org/commonInput")
            }
          ]
        },
        {
          prop: "deliveryMethods",
          label: this.$t('ve.label.tranportName')+"+",//送货方式
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              isMul: false,
              codeField: "deliveryMethods",
              textField: "deliveryMethods",
              lookuptype: "VE0188",
              clickEvent: () => null,
              component: () => import("@/components/org/LookupValue")
            }
          ]
        },
        {
          prop: "deliveryMethods",
          label: this.$t('ve.label.purcashTypeId')+"+",//资金类型
          width: 120,
          align: "center",
          isComponent: true,
          comps: [
            {
              compKey: "propKey1",
              isShowLabel: false,
              isMul: false,
              codeField: "deliveryMethods",
              textField: "deliveryMethods",
              clickEvent: () => null,
              component: () => import("@/components/ve/PurcashType")
            }
          ]
        },
        { prop: 'curName', label: 'ETPE'/*ETPE*/, width: 90, align: 'center' },
        { prop: 'curName', label: this.$t('org.label.carSerise')/*车系*/, width: 100, align: 'center' },
        { prop: 'carSeriesCn', label: this.$t('org.label.carType')/*车型*/, width: 120, align: 'center' },
        { prop: 'carConfigCn', label: this.$t('ve.label.carConfig')/*车型配置 */, width: 175, align: 'center' },
        { prop: 'carColorCode', label: this.$t('ve.label.carColor')/*车身颜色*/, width: 100, align: 'center' },
        { prop: 'carIncolorCode', label: this.$t('org.label.carIncolor')/*内饰色*/, width: 100, align: 'center' },
        { prop: 'curName', label: this.$t('org.label.basicCarPrice')/*基本车价*/, width: 120, align: 'center' },
        { prop: 'curName', label: this.$t('ve.label.countrySubsidy')/*补贴价*/, width: 120, align: 'center' },
        { prop: 'curName', label: this.$t('ve.label.totalPrice')/*总价*/, width: 120, align: 'center' },
        { prop: 'vin', label:  this.$t('org.label.vin')/*vin码*/, width: 175, align: 'center' },
        { prop: 'receiptState', label:this.$t('ve.label.areaIdentification')/*地区标识*/, width: 100, align: 'center' },
        { prop: 'contractCode', label: this.$t('org.label.warnHome')/*仓库*/, width: 120, align: 'center' },
        { prop: 'carStates', label: this.$t('ve.label.moveStateName')/*车辆状态*/, width: 100, align: 'center' },
        { prop: 'receiptState', label:  this.$t('ve.label.pdiName')/*PDI限制*/, width: 100, align: 'center' },
      ],
      //表单查询数据（查询条件）
      formField:{
        carBrandCode: '',
        carSeriesId: '',
        smallCarTypeId: '',
        carConfigCode: '',
        carConfigCn: '',
        motorType: '',
        carTypeShortCode: ''
      },
      title:this.$t('ve.label.specialSingleBatchImport')/*特殊单批量导入*/
    }
  },
  methods:{
    queryTable(page, dataType, size, filterObj, cb, dto) {
      // validpopups 组件弹窗  validpage 表单查询
      this.$utils.validataMoth(this, 'validpage')
      if (this.valid) {
        this.resetKey()
        this.$refs.multipleTables.queryTable(page, dataType, size, filterObj, cb, dto)
      }
    },
      importExcel(){
        let file = this.$refs.compKey1[0].file
        if(!file.name){
            this.$message({
                message:  this.$t('org.message.selectTheTemplateFile'),/*请选择要导入的模板文件*/
                type: 'warning',
                duration: 2000
            })
        }else{
            // do import

            this.$message({
                message: this.$t('sys.tips.esTip18')/*导入成功*/,
                type: 'success',
                duration: 2000,
            });
            this.queryTable(1)
        }
    }
  }
};
</script>
<style scoped>
/deep/.textAlignRight{
    text-align: right;
    padding-right: 10px;
    margin-bottom: 5px;
}
/deep/.el-col-10 label{
    width: 21.5%;
}
/deep/.top200{
  position: absolute;
  top: 200px;
}
/deep/.filter-container.filter-params {
    margin-bottom: 5px;
}
/deep/.el-col.el-col-2{
  padding-left: 0!important;
}
/deep/.el-input.el-input--small.el-input-group.el-input-group--append {
    width: 76%;
}
</style>