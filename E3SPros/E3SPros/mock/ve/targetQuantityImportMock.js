import Mock from 'mockjs'

const cH = '/'
const mdmVeCarSeriesQueryListForPage = Mock.mock({
  result: '1',
  msg: '1',
  data: {
    targetQuantityImport1: {
      result: '1',
      msg: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows': [
        {
          carBrandCn: '东方日产-日产',
          carBrandCode: '1',
          dlrShortName: '广州丰日店',
          engineCarpush: '2.0L',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          isEnable: '1',
          carTypeCode: 'DFL7200VBNL1-FAE',
          carConfigCn: 'FDRALVZJ11EXA---',
          CINItarget: '23.1%',
          CINNvehicles: '123',
          NEPEvehicles: '900',
          NCCIRRvehicles: '646',
          smallArea: '广州韶区',
          OCSIRRvehicles: '35',
          NEPRtarget: '90.1%',
          NCCIRRtarget: '90.1%',
          OCCIRRtarget: '90.1%',
          OCSIRRtarget: '90.1%',
          targetType: '交车类型',
          targetQuantityYM: '2019-09',
          targetQuaYear: '2019',
          village: '华南A小区',
          modelGroupName: '车型组A',
          bigarea: '华南一区',
          province: '广东',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          // 添加字段
          settlementSwitch: '1',
          cityName: '广州',
          Deduction: '10050',
          Inventory: '100',
          doneDate: '2019-06-21',
          isSend: true,
          specialAmount: 3534.64,
          area: '南区',
          sellingPrice: 235253.34,
          InventoryLocation: '广州',
          vin: 'GRGWEWEBSFSDF32'
        },
        {
          carBrandCn: '东方日产-日产',
          carBrandCode: '2',
          dlrShortName: '广州丰日店',
          engineCarpush: '2.0L',
          smallArea: '广州韶区',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          isEnable: '1',
          carTypeCode: 'DFL7200VBNL1-FAE',
          carConfigCn: 'FDRALVZJ11EXA---',
          targetQuaYear: '2019',
          CINItarget: '23.1%',
          CINNvehicles: '123',
          NEPEvehicles: '900',
          NCCIRRvehicles: '646',
          OCCIRRvehicles: '623',
          OCSIRRvehicles: '35',
          NEPRtarget: '90.1%',
          NCCIRRtarget: '90.1%',
          area: '南区',
          OCCIRRtarget: '90.1%',
          OCSIRRtarget: '90.1%',
          targetType: '交车类型',
          targetQuantityYM: '2019-09',
          village: '华南A小区',
          modelGroupName: '车型组A',
          province: '广东',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          bigarea: '华南一区',
          // 添加字段
          settlementSwitch: '1',
          cityName: '广州',
          Deduction: '10050',
          Inventory: '100',
          doneDate: '2019-06-21',
          isSend: true,
          specialAmount: 3534.64,
          isAtPin: '1',
          sellingPrice: 235253.34,
          InventoryLocation: '广州',
          vin: 'GRGWEWEBSFSDF32'
        },
        {
          carBrandCn: '东方日产-日产',
          carBrandCode: '2',
          dlrShortName: '广州丰日店',
          engineCarpush: '2.0L',
          targetQuaYear: '2019',
          carSeriesCn: '新逍客',
          area: '南区',
          smallArea: '广州韶区',
          supplyStatus: '生产供应',
          isEnable: '1',
          carTypeCode: 'DFL7200VBNL1-FAE',
          carConfigCn: 'FDRALVZJ11EXA---',
          CINItarget: '23.1%',
          CINNvehicles: '123',
          NEPEvehicles: '900',
          NCCIRRvehicles: '646',
          OCCIRRvehicles: '623',
          OCSIRRvehicles: '35',
          NEPRtarget: '90.1%',
          NCCIRRtarget: '90.1%',
          OCCIRRtarget: '90.1%',
          OCSIRRtarget: '90.1%',
          targetType: '交车类型',
          bigarea: '华南一区',
          targetQuantityYM: '2019-09',
          village: '华南A小区',
          modelGroupName: '车型组A',
          province: '广东',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          // 添加字段
          settlementSwitch: '1',
          cityName: '广州',
          Deduction: '10050',
          Inventory: '100',
          doneDate: '2019-06-21',
          isSend: true,
          specialAmount: 3534.64,
          isAtPin: '1',
          sellingPrice: 235253.34,
          InventoryLocation: '广州',
          vin: 'GRGWEWEBSFSDF32'
        },
        {
          carBrandCn: '东方日产-日产',
          carBrandCode: '2',
          dlrShortName: '广州丰日店',
          engineCarpush: '2.0L',
          area: '南区',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          targetQuaYear: '2019',
          smallArea: '广州韶区',
          isEnable: '1',
          carTypeCode: 'DFL7200VBNL1-FAE',
          carConfigCn: 'FDRALVZJ11EXA---',
          CINItarget: '23.1%',
          CINNvehicles: '123',
          NEPEvehicles: '900',
          NCCIRRvehicles: '646',
          OCCIRRvehicles: '623',
          OCSIRRvehicles: '35',
          NEPRtarget: '90.1%',
          NCCIRRtarget: '90.1%',
          OCCIRRtarget: '90.1%',
          OCSIRRtarget: '90.1%',
          targetType: '交车类型',
          targetQuantityYM: '2019-09',
          village: '华南A小区',
          modelGroupName: '车型组A',
          bigarea: '华南一区',
          province: '广东',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          // 添加字段
          settlementSwitch: '1',
          cityName: '广州',
          Deduction: '10050',
          Inventory: '100',
          doneDate: '2019-06-21',
          isSend: true,
          specialAmount: 3534.64,
          isAtPin: '1',
          sellingPrice: 235253.34,
          InventoryLocation: '广州',
          vin: 'GRGWEWEBSFSDF32'
        },
        {
          carBrandCn: '东方日产-日产',
          carBrandCode: '2',
          dlrShortName: '广州丰日店',
          engineCarpush: '2.0L',
          smallArea: '广州韶区',
          targetQuaYear: '2019',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          isEnable: '1',
          carTypeCode: 'DFL7200VBNL1-FAE',
          area: '南区',
          carConfigCn: 'FDRALVZJ11EXA---',
          CINItarget: '23.1%',
          CINNvehicles: '123',
          NEPEvehicles: '900',
          NCCIRRvehicles: '646',
          OCCIRRvehicles: '623',
          OCSIRRvehicles: '35',
          NEPRtarget: '90.1%',
          NCCIRRtarget: '90.1%',
          OCCIRRtarget: '90.1%',
          OCSIRRtarget: '90.1%',
          targetType: '交车类型',
          targetQuantityYM: '2019-09',
          village: '华南A小区',
          bigarea: '华南一区',
          modelGroupName: '车型组A',
          province: '广东',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          // 添加字段
          settlementSwitch: '1',
          cityName: '广州',
          Deduction: '10050',
          Inventory: '100',
          doneDate: '2019-06-21',
          isSend: true,
          specialAmount: 3534.64,
          isAtPin: '1',
          sellingPrice: 235253.34,
          InventoryLocation: '广州',
          vin: 'GRGWEWEBSFSDF32'
        },
        {
          carBrandCn: '东方日产-日产',
          carBrandCode: '2',
          dlrShortName: '广州丰日店',
          smallArea: '广州韶区',
          engineCarpush: '2.0L',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          isEnable: '1',
          carTypeCode: 'DFL7200VBNL1-FAE',
          carConfigCn: 'FDRALVZJ11EXA---',
          CINItarget: '23.1%',
          targetQuaYear: '2019',
          CINNvehicles: '123',
          NEPEvehicles: '900',
          NCCIRRvehicles: '646',
          bigarea: '华南一区',
          OCSIRRvehicles: '35',
          NEPRtarget: '90.1%',
          NCCIRRtarget: '90.1%',
          area: '南区',
          OCCIRRtarget: '90.1%',
          OCSIRRtarget: '90.1%',
          targetType: '交车类型',
          targetQuantityYM: '2019-09',
          village: '华南A小区',
          modelGroupName: '车型组A',
          province: '广东',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          // 添加字段
          settlementSwitch: '1',
          cityName: '广州',
          Deduction: '10050',
          Inventory: '100',
          doneDate: '2019-06-21',
          isSend: true,
          specialAmount: 3534.64,
          isAtPin: '1',
          sellingPrice: 235253.34,
          InventoryLocation: '广州',
          vin: 'GRGWEWEBSFSDF32'
        }
      ]
    }
  }
})

const mdmVeCarSeriesQueryListForPageB = Mock.mock({
  result: '1',
  msg: '1',
  data: {
    majorCustoPolicyTypeMaint1: {
      result: '1',
      msg: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows': [
        {
          carBrandCn: '东方日产-日产',
          carBrandCode: '1',
          dlrShortName: '广州丰日店',
          targetType: '白漆减免',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          targetQuantityDist: '普通政策'
        }, {
          carBrandCn: '东方日产-日产',
          carBrandCode: '1',
          dlrShortName: '广州丰日店',
          targetType: '厂家待车交费',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          targetQuantityDist: '普通政策'
        }, {
          carBrandCn: '东方日产-日产',
          carBrandCode: '1',
          dlrShortName: '广州丰日店',
          targetType: '政府及事业单位',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          targetQuantityDist: '特殊政策'
        }, {
          carBrandCn: '东方日产-日产',
          carBrandCode: '1',
          dlrShortName: '广州丰日店',
          targetType: '白漆减免',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          targetQuantityDist: '普通政策'
        }, {
          carBrandCn: '东方日产-日产',
          carBrandCode: '1',
          dlrShortName: '广州丰日店',
          targetType: '厂家待车交费',
          carSeriesCn: '新逍客',
          supplyStatus: '生产供应',
          targetQuantityDist: '普通政策'
        }
      ]
    }
  }
})

// 车系保存
const mdmVeCarSeriesMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    targetQuantityImport2: {
      result: '1',
      msg: '保存成功'
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=targetQuantityImport1',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesQueryListForPage
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=targetQuantityImport2',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesMutationSave
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=majorCustoPolicyTypeMaint1',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesQueryListForPageB
    }
  }
]
