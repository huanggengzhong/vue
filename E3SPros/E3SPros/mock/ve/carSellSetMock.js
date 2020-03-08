import Mock from 'mockjs'

const cH = '/'
const mdmVeCarSeriesQueryListForPage = Mock.mock({
  result: '1',
  msg: '1',
  data: {
    carSellSetMock1: {
      result: '1',
      msg: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows': [
        {
          carBrandCn: '东风日产',
          carSeriesCode: 'J11',
          receiptState: '申请中',
          dlrName: '广州风日店',
          moveIn: '163463737342345',
          carSeriesCn: '新逍客',
          carConfigCn: 'NSDGEWHQNNSD32',
          address: '风神大道12号',
          comName: '小王',
          contractCode: '164372342',
          state: '在售',
          carColorCode: '红色',
          orderNums: '153262235',
          remark: '备注A',
          Email: '166263434@163.com',
          reson: '退订原因A',
          city: '广州',
          type: '销退类型',
          optionalPackage: '选装包A',
          carIncolorCode: '暗夜黑',
          // 添加字段
          costPrice: 100000,
          states: '申请中',
          marketGuidancePrice: 100000,
          discountAmount: 100000,
          currentPrice: 100000,
          province: '广东省',
          packageFare: 100000,
          typeName: '身份证',
          send: 100000,
          insurance: 100000,
          estimatedCost: 100000,
          phone: '15122415161',
          estimatedInvoicingSpread: 100000,
          county: '花都区',
          sex: '男',
          Inventory: '100',
          doneDate: '2019-06-21',
          isSend: true,
          specialAmount: '3534.64',
          isEnable: '1',
          isAtPin: '1',
          sellingPrice: 235253.34,
          boutiqueName: '精品A',
          boutiqueCode: 'GERHDFS',
          boutiquePrice: 154.84,
          InventoryLocation: '广州',
          vin: 'GRGWEWEBSFSDFDSF32'
        },
        {
          carBrandCn: '东风日产',
          contractCode: '164372342',
          carConfigCn: 'NSDGEWHQNNSD32',
          remark: '备注A',
          carSeriesCode: 'J11',
          orderNums: '153262235',
          moveIn: '163463737342345',
          type: '退订类型',
          isEnable: '1',
          city: '广州',
          optionalPackage: '选装包A',
          reson: '退订原因A',
          receiptState: '申请中',
          specialAmount: '3534.64',
          carSeriesCn: '新逍客',
          address: '风神大道12号',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          states: '申请中',
          comName: '小王',
          // 添加字段
          dlrName: '广州风日店',
          Email: '166263434@163.com',
          costPrice: 100000,
          marketGuidancePrice: 100000,
          typeName: '身份证',
          discountAmount: 100000,
          vin: 'GRGWEWEBSFSDF32',
          currentPrice: 100000,
          packageFare: 100000,
          send: 100000,
          county: '花都区',
          insurance: 100000,
          province: '广东省',
          state: '在售',
          sex: '男',
          phone: '1512415161',
          estimatedCost: 100000,
          estimatedInvoicingSpread: 100000,
          Inventory: '100',
          doneDate: '2019-06-21',
          sellingPrice: 235253.34,
          isSend: false,
          isAtPin: '1',
          boutiqueName: '精品A',
          boutiqueCode: 'GERHDFS',
          boutiquePrice: 154.84,
          InventoryLocation: '广州'
        },
        {
          carBrandCn: '东风日产',
          carSeriesCode: 'J11',
          specialAmount: '3534.64',
          carSeriesCn: '新逍客',
          Email: '166263434@163.com',
          reson: '退订原因A',
          carConfigCn: 'NSDGEWHQNNSD32',
          address: '风神大道12号',
          city: '广州',
          receiptState: '申请中',
          optionalPackage: '选装包A',
          isEnable: '1',
          type: '销退类型',
          moveIn: '163463737342345',
          orderNums: '153262235',
          dlrName: '广州风日店',
          remark: '备注A',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          // 添加字段
          states: '申请中',
          costPrice: 100000,
          comName: '小王',
          state: '在售',
          marketGuidancePrice: 100000,
          vin: 'GRGWEWEBSFSDF32',
          discountAmount: 100000,
          typeName: '身份证',
          sex: '男',
          currentPrice: 100000,
          county: '花都区',
          packageFare: 100000,
          send: 100000,
          phone: '1512415161',
          province: '广东省',
          contractCode: '164372342',
          insurance: 100000,
          estimatedCost: 100000,
          estimatedInvoicingSpread: 100000,
          Inventory: '100',
          doneDate: '2019-06-21',
          sellingPrice: 235253.34,
          isSend: false,
          isAtPin: '1',
          InventoryLocation: '广州',
          boutiqueName: '精品A',
          boutiqueCode: 'GERHDFS',
          boutiquePrice: 154.84
        },
        {
          carBrandCn: '东风日产',
          city: '广州',
          carSeriesCode: 'J11',
          isEnable: '1',
          carSeriesCn: '新逍客',
          receiptState: '申请中',
          reson: '退订原因A',
          carColorCode: '红色',
          carIncolorCode: '暗夜黑',
          carConfigCn: 'NSDGEWHQNNSD32',
          Email: '166263434@163.com',
          orderNums: '153262235',
          comName: '小王',
          address: '风神大道12号',
          remark: '备注A',
          moveIn: '163463737342345',
          dlrName: '广州风日店',
          // 添加字段
          specialAmount: '3534.64',
          vin: 'GRGWEWEBSFSDF32',
          costPrice: 100000,
          optionalPackage: '选装包A',
          type: '销退类型',
          marketGuidancePrice: 100000,
          province: '广东省',
          discountAmount: 100000,
          currentPrice: 100000,
          packageFare: 100000,
          contractCode: '164372342',
          states: '申请中',
          typeName: '身份证',
          state: '在售',
          county: '花都区',
          phone: '1512415161',
          send: 100000,
          insurance: 100000,
          estimatedCost: 100000,
          estimatedInvoicingSpread: 100000,
          Inventory: '100',
          sex: '男',
          InventoryLocation: '广州',
          doneDate: '2019-06-21',
          sellingPrice: 235253.34,
          isSend: false,
          isAtPin: '1',
          boutiqueName: '精品A',
          boutiqueCode: 'GERHDFS',
          boutiquePrice: 154.84
        },
        {
          carBrandCn: '东风日产',
          carSeriesCode: 'J11',
          carSeriesCn: '新逍客',
          city: '广州',
          contractCode: '164372342',
          carConfigCn: 'NSDGEWHQNNSD32',
          reson: '退订原因A',
          isEnable: '1',
          sex: '男',
          carColorCode: '红色',
          receiptState: '申请中',
          comName: '小王',
          Email: '166263434@163.com',
          orderNums: '153262235',
          address: '风神大道12号',
          dlrName: '广州风日店',
          province: '广东省',
          remark: '备注A',
          phone: '1512415161',
          moveIn: '163463737342345',
          optionalPackage: '选装包A',
          specialAmount: '3534.64',
          vin: 'GRGWEWEBSFSDF32',
          carIncolorCode: '暗夜黑',
          // 添加字段
          costPrice: 100000,
          type: '销退类型',
          marketGuidancePrice: 100000,
          discountAmount: 100000,
          currentPrice: 100000,
          states: '申请中',
          packageFare: 100000,
          InventoryLocation: '广州',
          typeName: '身份证',
          send: 100000,
          insurance: 100000,
          estimatedCost: 100000,
          estimatedInvoicingSpread: 100000,
          state: '在售',
          Inventory: '100',
          doneDate: '2019-06-21',
          sellingPrice: 235253.34,
          isSend: true,
          isAtPin: '1',
          county: '花都区',
          boutiqueName: '精品A',
          boutiqueCode: 'GERHDFS',
          boutiquePrice: 154.84
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
    carSellSetMock2: {
      result: '1',
      msg: '保存成功'
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=carSellSetMock1',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesQueryListForPage
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=carSellSetMock2',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesMutationSave
    }
  }
]
