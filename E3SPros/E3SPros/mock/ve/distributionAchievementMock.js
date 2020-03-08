import Mock from 'mockjs'

const cH = '/'
const mdmVeCarSeriesQueryListForPage = Mock.mock({
  result: '1',
  msg: '1',
  data: {
    distribAchieApi1: {
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
          dlrShortName: '广州丰日店',
          dlrCode: 'weh32t',
          carConfigId: 'DFL72AL2-LNC1',
          contractCode: 'wewt323t232t3',
          areaIdentification: '地区标识',
          carStates: '车辆状态A',
          carSeriesCn: '新逍客',
          ETPE: 'ETPE',
          moveIntoDestination: '搬入地A',
          carConfigCn: 'J11',
          purStatus: '状态A',
          testDrive: '试乘试驾A',
          curName: '客户名称A',
          deliveryMethods: '1',
          state: '在售',
          carColorCode: '红色',
          phone: '1554444477788',
          saType: '销售类型A',
          conName: '销售顾问A',
          receiptState: '单据状态A',
          carIncolorCode: '暗夜黑',
          optionalPackage: '选装包A',
          // 添加字段
          costPrice: 100000,
          targetAmount: 100000,
          discountAmount: 100000,
          assessmentMonth: '3月',
          currentPrice: 100000,
          packageFare: 100000,
          remark: '1',
          send: 100000,
          insurance: 100000,
          retreatNo: '23t2egh2ewghreg5',
          retirementType: '1',
          purType: '资金类型A',
          estimatedCost: 100000,
          Deduction: '10050',
          Inventory: '100',
          doneDate: '2019-06-21',
          isSend: true,
          specialAmount: 3534.64,
          isAtPin: '1',
          sellingPrice: 235253.34,
          boutiqueName: '精品A',
          boutiqueCode: 'GERHDFS',
          boutiquePrice: 154.84,
          InventoryLocation: '广州',
          vin: 'GRGWEWEBSFSDF32'
        },
        {
          phone: '1554444477788',
          carBrandCn: '东风日产',
          areaIdentification: '地区标识',
          conName: '销售顾问A',
          carStates: '车辆状态A',
          dlrCode: 'weh32t',
          deliveryMethods: '1',
          carSeriesCode: 'J11',
          moveIntoDestination: '搬入地A',
          carConfigId: 'DFL72AL2-LNC1',
          carSeriesCn: '新逍客',
          testDrive: '试乘试驾A',
          carConfigCn: 'J11',
          purStatus: '状态A',
          ETPE: 'ETPE',
          dlrShortName: '上海松江店',
          carColorCode: '红色',
          receiptState: '单据状态A',
          carIncolorCode: '暗夜黑',
          contractCode: 'wewt323t232t3',
          saType: '销售类型A',
          // 添加字段
          costPrice: '100000',
          discountAmount: '100000',
          retirementType: '1',
          retreatNo: '23t2egh2ewghreg5',
          curName: '客户名称A',
          vin: 'GRGWEWEBSFSDF32',
          send: 100000,
          optionalPackage: '选装包A',
          Deduction: '50',
          state: '在售',
          estimatedCost: 100000,
          targetAmount: '100000',
          purType: '资金类型A',
          remark: '1',
          assessmentMonth: '5月',
          Inventory: '100',
          doneDate: '2019-06-21',
          specialAmount: 3534.64,
          sellingPrice: 235253.34,
          isSend: false,
          isAtPin: '1',
          boutiqueName: '精品A',
          boutiqueCode: 'GERHDFS',
          boutiquePrice: 154.84,
          InventoryLocation: '广州'
        },
        {
          purStatus: '状态A',
          carBrandCn: '东风日产',
          carSeriesCode: 'J11',
          dlrShortName: '广州丰日店',
          dlrCode: 'weh32t',
          areaIdentification: '地区标识',
          carSeriesCn: '新逍客',
          carConfigId: 'DFL72AL2-LNC1',
          moveIntoDestination: '搬入地A',
          ETPE: 'ETPE',
          deliveryMethods: '1',
          carConfigCn: 'J11',
          carColorCode: '红色',
          testDrive: '试乘试驾A',
          carIncolorCode: '暗夜黑',
          // 添加字段
          contractCode: 'wewt323t232t3',
          phone: '1554444477788',
          carStates: '车辆状态A',
          receiptState: '单据状态A',
          optionalPackage: '选装包A',
          conName: '销售顾问A',
          costPrice: 100000,
          state: '在售',
          saType: '销售类型A',
          retreatNo: '23t2egh2ewghreg5',
          curName: '客户名称A',
          targetAmount: 100000,
          vin: 'GRGWEWEBSFSDF32',
          purType: '资金类型A',
          discountAmount: '100000',
          currentPrice: 100000,
          remark: '1',
          retirementType: '1',
          packageFare: 100000,
          send: 100000,
          insurance: 100000,
          estimatedCost: 100000,
          Deduction: '1000',
          assessmentMonth: '6月',
          Inventory: '100',
          specialAmount: 3534.64,
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
          conName: '销售顾问A',
          carBrandCn: '东风日产',
          carConfigId: 'DFL72AL2-LNC1',
          carSeriesCode: 'J11',
          purStatus: '状态A',
          dlrCode: 'weh32t',
          testDrive: '试乘试驾A',
          carStates: '车辆状态A',
          areaIdentification: '地区标识',
          deliveryMethods: '1',
          moveIntoDestination: '搬入地A',
          carSeriesCn: '新逍客',
          carConfigCn: 'J11',
          ETPE: 'ETPE',
          carColorCode: '红色',
          dlrShortName: '广州丰日店',
          carIncolorCode: '暗夜黑',
          contractCode: 'wewt323t232t3',
          phone: '1554444477788',
          optionalPackage: '选装包A',
          curName: '客户名称A',
          saType: '销售类型A',
          // 添加字段
          receiptState: '单据状态A',
          vin: 'GRGWEWEBSFSDF32',
          costPrice: 100000,
          targetAmount: 100000,
          discountAmount: 100000,
          currentPrice: 100000,
          packageFare: 100000,
          specialAmount: 3534.64,
          state: '在售',
          send: 100000,
          assessmentMonth: '5月',
          insurance: 100000,
          estimatedCost: 100000,
          Deduction: '1000',
          Inventory: '100',
          retreatNo: '23t2egh2ewghreg5',
          purType: '资金类型A',
          remark: '1',
          InventoryLocation: '广州',
          doneDate: '2019-06-21',
          sellingPrice: 235253.34,
          retirementType: '1',
          isSend: false,
          isAtPin: '1',
          boutiqueName: '精品A',
          boutiqueCode: 'GERHDFS',
          boutiquePrice: 154.84
        },
        {
          conName: '销售顾问A',
          carBrandCn: '东风日产',
          dlrCode: 'weh32t',
          carSeriesCode: 'J11',
          ETPE: 'ETPE',
          purStatus: '状态A',
          carConfigId: 'DFL72AL2-LNC1',
          carSeriesCn: '新逍客',
          testDrive: '试乘试驾A',
          carStates: '车辆状态A',
          curName: '客户名称A',
          deliveryMethods: '1',
          moveIntoDestination: '搬入地A',
          carConfigCn: 'J11',
          saType: '销售类型A',
          carColorCode: '红色',
          optionalPackage: '选装包A',
          dlrShortName: '兰州良智店',
          phone: '1554444477788',
          contractCode: 'wewt323t232t3',
          vin: 'GRGWEWEBSFSDF32',
          carIncolorCode: '暗夜黑',
          // 添加字段
          receiptState: '单据状态A',
          costPrice: 100000,
          assessmentMonth: '3月',
          remark: '1',
          targetAmount: 100000,
          discountAmount: 100000,
          areaIdentification: '地区标识',
          currentPrice: 100000,
          specialAmount: 3534.64,
          packageFare: 100000,
          InventoryLocation: '广州',
          send: 100000,
          purType: '资金类型A',
          insurance: 53262,
          estimatedCost: 4532,
          retirementType: '1',
          retreatNo: '23t2egh2ewghreg5',
          Deduction: '100',
          state: '在售',
          Inventory: '100',
          doneDate: '2019-06-21',
          sellingPrice: 235253.34,
          isSend: true,
          isAtPin: '1',
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
    distribAchieApi1: {
      result: '1',
      msg: '保存成功'
    }
  }
})

const veDbCarStockHouseQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    distribAchieApi3: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        carHouseCode: '1',
        carHouseName: '李三',
        carBrandName: '东风启辰-启辰',
        dlrShortName: '广州风日店',
        dlrId: '1',
        answer: 'A12',
        carHouseAddr: '广州风日店',
        carHouseFax: '5322678',
        carHouseTel: '1231321321',
        carHouseManager: 'AA',
        carStoreClass: '东风日产',
        isEnable: '是',
        updateControlId: '2131231231231234324sfdada'
      },
      {
        carHouseCode: '2',
        carHouseName: '李三天',
        carBrandName: '东风启辰-启辰',
        dlrShortName: '广州风日店',
        dlrId: '1',
        answer: 'A12',
        carHouseAddr: '广州风日店',
        carHouseFax: '5322678',
        carHouseTel: '1231321321',
        carHouseManager: 'AA',
        carStoreClass: '东风日产',
        isEnable: '是',
        updateControlId: '2131231231231234324sfdada'
      }, {
        carHouseCode: '3',
        carHouseName: '李宇三',
        carBrandName: '东风启辰-启辰',
        dlrShortName: '广州风日店',
        dlrId: '1',
        answer: 'A12',
        carHouseAddr: '广州风日店',
        carHouseFax: '5322678',
        carHouseTel: '1231321321',
        carHouseManager: 'AA',
        carStoreClass: '东风日产',
        isEnable: '是',
        updateControlId: '2131231231231234324sfdada'
      }, {
        carHouseCode: '4',
        carHouseName: '张三丰',
        carBrandName: '东风启辰-启辰',
        dlrShortName: '广州风日店',
        dlrId: '1',
        answer: 'A12',
        carHouseAddr: '广州风日店',
        carHouseFax: '5322678',
        carHouseTel: '1231321321',
        carHouseManager: 'AA',
        carStoreClass: '广州风日',
        isEnable: '是',
        updateControlId: '2131231231231234324sfdada'
      },
      {
        carHouseCode: '5',
        carHouseName: '王五',
        carBrandName: '东风启辰-启辰',
        dlrShortName: '广州风日店',
        dlrId: '1',
        answer: 'A12',
        carHouseAddr: '广州风日店',
        carHouseFax: '5322678',
        carHouseTel: '1231321321',
        carHouseManager: 'AA',
        carStoreClass: '广州风日',
        isEnable: '是',
        updateControlId: '2131231231231234324sfdada'
      }
      ]

    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=distribAchieApi1',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesQueryListForPage
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=distribAchieApi2',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesMutationSave
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=distribAchieApi3',
    type: 'post',
    response: config => {
      return veDbCarStockHouseQueryFindAll
    }
  }
]
