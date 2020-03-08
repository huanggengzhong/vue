import Mock from 'mockjs'

const data = Mock.mock({
  'items|55': [{
    choose: 'true',
    brandName: '东风日产-日产',
    carSeries: '新逍客',
    catType: 'DFL7200VBNL2-FJE',
    carTypeConfig: 'BDBALJWA36EXA',
    replaceCarType1: '',
    replaceCarTypeConfig1: ''
  }]
})

const vehicleConfigurationData = Mock.mock({
  'items|55': [{
    choose: 'true',
    brandName: '东风日产-日产',
    carSeries: '西玛',
    vehicleConfigurationCode: 'FDRALWZJ11EXA--珠光白/QAB',
    distributionModel: '实时分配'
  }]
})

const colorMaintenanceData = Mock.mock({
  'items|10': [{
    brandName: '东风日产-日产',
    carColorCode: 'A40',
    carColorName: '珊瑚红A40',
    supplyStatus: 'C4L',
    isEnable: '启用'
  }, {
    brandName: '东风日产-启辰',
    carColorCode: 'A40',
    carColorName: '珊瑚红A40',
    supplyStatus: 'C4L',
    isEnable: '启用'
  }]
})

const accountMaintenanceData = Mock.mock({
  'items|10': [{
    accountCode: '1',
    accountName: '尼桑账户',
    moduleName: '整车',
    creator: '超级管理员',
    createTime: '2019-05-09'
  }, {
    accountCode: '2',
    accountName: '尼桑账户',
    moduleName: '整车',
    creator: '超级管理员',
    createTime: '2019-05-09'
  }]
})

const interiorColorMainData = Mock.mock({
  'items|10': [{
    brandName: '东风日产-日产',
    carIncolorCode: 'A',
    carIncolorName: '深内饰A',
    supplyStatus: 'C4L',
    isEnable: '启用'
  }, {
    brandName: '东风日产-启辰',
    carIncolorCode: 'A',
    carIncolorName: '深内饰A',
    supplyStatus: 'C4L',
    isEnable: '启用'
  }]
})

// 测试网格动态列通过中台返回
const testTableColConfig = Mock.mock({
  items: [
    { prop: 'carBrandCn', label: '品牌', width: 110, align: 'center' },
    { prop: 'carBrandCode', label: '品牌编号', width: 0, align: 'center', hidden: true },
    { prop: 'dlrShortName', label: '经销商', width: 100, align: 'center' },
    { prop: 'purOrderDId', label: '采购单ID', width: 180, align: 'center', hidden: true },
    { prop: 'purOrderCode', label: '采购单号', width: 180, align: 'center' },
    { prop: 'purOrderDCode', label: '采购子单号', width: 200, align: 'center' },
    { prop: 'purOrderTypeName', label: '采购单类型', width: 100, align: 'center' },
    { prop: 'purState', label: '子单状态', width: 80, align: 'center' },
    { prop: 'purOrderTypeCode', label: '采购单类型编码', width: 0, align: 'center', hidden: true },
    { prop: 'deductCashName', label: '扣款资金类型名称', width: 0, align: 'center', hidden: true },
    { prop: 'deductCashTypeId', label: '扣款资金类型ID', width: 0, align: 'center', hidden: true },
    { prop: 'cashTypeName', label: '资金类型', width: 120, align: 'center' },
    { prop: 'configCode', label: '车型简码', width: null, align: 'center' },
    { prop: 'carConfigName', label: '车型配置', width: 120, align: 'center' },
    { prop: 'carColorName', label: '车身颜色', width: null, align: 'center' },
    { prop: 'carIncolorName', label: '内饰色', width: null, align: 'center' },
    { prop: 'carColorPrice', label: '颜色价', width: null, align: 'center' },
    { prop: 'carIncolorPrice', label: '内饰价', width: null, align: 'center' },
    { prop: 'countrySubsidy', label: '补贴价', width: null, align: 'center' },
    { prop: 'carPrice', label: '产品价格', width: null, align: 'center' },
    { prop: 'carProductPrice', label: '采购价格', width: null, align: 'center' },
    { prop: 'carSeriseName', label: '车系', width: 130, align: 'center' },
    { prop: 'deliverModeName', label: '送货方式', width: null, align: 'center' },
    { prop: 'receiveShId', label: '搬入地', width: null, align: 'center' },
    { prop: 'creator', label: '下单人', width: null, align: 'center' },
    { prop: 'confirDate', label: '确认日期', width: 128, align: 'center' },
    { prop: 'updateControlId', label: '并发控制', width: 0, align: 'center', hidden: true }
  ]
})

// 测试网格动态条件通过中台返回
const testTableCompConfig = Mock.mock({
  items: [
    { compKey: 'compKey1', labelName: '品牌', codeField: 'carBrandCode', component: 'org/carBrand/carBrand', type: 'dropdownList', isMust: true },
    { compKey: 'compKey2', labelName: '采购单号', codeField: 'purOrderCode', component: 'org/commonInput', type: 'inputText', isMust: true },
    { compKey: 'compKey3', labelName: 'VIN码', codeField: 'vin', component: 'org/commonInput', type: 'inputText', isMust: true },
    { compKey: 'compKey4', labelName: '资金类型', codeField: 'cashTypeCode', component: 've/PurcashType', type: 'dropdownList', isMust: true },
    { compKey: 'compKey5', labelName: '经销商', codeField: 'dlr', component: 'org/orgDlr', type: 'propus', isMust: false },
    { compKey: 'compKey6', labelName: '车型', codeField: 'carConfigId', component: 'org/carTypeConfig', type: 'propus', isMust: false },
    { compKey: 'compKey7', labelName: '车身颜色', codeField: 'carColorId', component: 'org/carColor', type: 'propus', isMust: false },
    { compKey: 'compKey8', labelName: '内饰色', codeField: 'carIncolorId', component: 'org/TrimPopupColor', type: 'propus', isMust: false },
    { compKey: 'compKey9', labelName: '审核开始', codeField: 'auditDateBegin', component: 'org/datePicker/datePicker', type: 'datePicker', dateOptionsType: '0', isMust: false },
    { compKey: 'compKey10', labelName: '审核结束', codeField: 'auditDateEnd', component: 'org/datePicker/datePicker', type: 'datePicker', dateOptionsType: '0', isMust: false },
    { compKey: 'compKey11', labelName: '送货方式', lookuptype: 'VE0079', codeField: 'sendTypeCode', component: 'org/LookupValue', type: 'dropdownList', isMust: false }
  ]
})

export default [
  {
    url: '/table/list',
    type: 'post',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }, {
    url: '/vehicleConfiguration/list',
    type: 'post',
    response: config => {
      const items = vehicleConfigurationData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }, {
    url: '/colorMaintenance/list',
    type: 'post',
    response: config => {
      const items = colorMaintenanceData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }, {
    url: '/interiorColorMain/list',
    type: 'post',
    response: config => {
      const items = interiorColorMainData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }, {
    url: '/accountMaintenance/list',
    type: 'post',
    response: config => {
      const items = accountMaintenanceData.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }, {
    url: '/yzc/eccommon/ilogs/testdycols\.*',
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: '',
        rows: testTableColConfig.items
      }
    }
  }, {
    url: '/yzc/eccommon/ilogs/testdycomps\.*',
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: '',
        rows: testTableCompConfig.items
      }
    }
  }

]
