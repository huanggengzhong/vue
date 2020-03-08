/**
* description: 经销商订单预测
* author: 林泽文
* createdDate: 2019-7-26
*/
import Mock from 'mockjs'

const cH = '/'
// 查询
const veOrderForecast = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veOrderForecast: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          carBrandName: '东风日产-日产',
          carBrandCode: '1',
          dlrShortName: '广州风日店',
          carSeriesName: 'A36',
          carConfigName: 'B2BJ36EXA-----',
          carConfig: 'DFL72AL2-LNC1',
          referenceDelivery: '30',
          stockRt: '20',
          safeStock: '1.5',
          baseStock: '1.5',
          monthDelivery: '30',
          refMessure: '35'
        }
      ]
    }
  }
})

const veTypesOfAgencyProjects = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veTypesOfAgencyProjects: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          proCode: '12abc',
          carBrandCn: '全品牌',
          carBrandCode: '1',
          proName: '车辆购置附加税',
          isEnable: '1',
          isSysName: '是',
          isSysCode: '1'
        }
      ]
    }
  }
})

const veRiskDlrMessageCtrl = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veRiskDlrMessageCtrl: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          isEnable1: '限制发运',
          isEnable2: '东风启辰-启辰',
          isEnable3: '华南一区',
          isEnable4: '粤东区',
          isEnable5: '广东',
          isEnable6: '广州风日店',
          isEnable7: '银行存款',
          isEnable8: '银行冻结',
          isEnable9: 'LGBH12F21FV276194',
          isEnable10: '2019/09/20',
          isEnable11: '花都库',
          isEnable12: '西玛',
          isEnable13: '轩逸',
          isEnable14: 'DFL72AL2-LNC1',
          isEnable15: '珠光白/QAB',
          isEnable16: '深内饰G/G',
          isEnable17: '安全气帘',
          isEnable18: '1，000，000',
          isEnable19: '一般采购单',
          isEnable20: '*28475Dwf',
          isEnable21: '已审核',
          isEnable22: '2019/07/04',
          isEnable23: '刘备',
          isEnable24: '2019/08/20',
          isEnable25: '自取'
        }
      ]
    }
  }
})

const VeDbCarAgentQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    VeDbCarAgentQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 10,
      rows: [
        {
          agentName: '全套服务',
          agentAddr: '广州市花都区风神大道12号',
          agentTypeName: '外包',
          createdDate: '2018/5/16',
          agentRemark: '五十一次',
          carAgentItemCost: '50',
          agentProject: "保险",
          agentCode: '12abc',
          agentType: '11',
          updateControlId: '12'
        },
        {
          agentName: '全套服务',
          agentAddr: '广州市花都区风神大道12号',
          agentTypeName: '外包',
          createdDate: '2018/5/16',
          agentRemark: '五十一次',
          carAgentItemCost: '50',
          agentProject: "洗车",
          agentCode: '12abc',
          agentType: '11',
          updateControlId: '12'
        },
      ]
    }
  }
})

// 代办项目类型设置
const veBuAgentProjectTypeMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veBuAgentProjectTypeMutationSave: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 10,
      rows: [
        {
          agentProjectCode: '1',
          carBrandCn: '全品牌',
          carBrandCode: '1',
          agentProjectName: '车船税',
          isEnable: '1',
          isSysInlay: '是',
        },
        {
          agentProjectCode: '2',
          carBrandCn: '全品牌',
          carBrandCode: '1',
          agentProjectName: '养路税',
          isEnable: '1',
          isSysInlay: '是',
        },
        {
          agentProjectCode: 'a',
          carBrandCn: '全品牌',
          carBrandCode: '1',
          agentProjectName: '上牌服务税',
          isEnable: '1',
          isSysInlay: '是',
        },
      ]
    }
  }
})

const targetQuantityConfirmationLetterQuery = Mock.mock({
  result: '1',
  msg: '',
  data: {
    targetQuantityConfirmationLetterQuery: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          isEnable1: '东风日产-日产',
          isEnable2: '深圳裕朋',
          isEnable3: '提车目标',
          isEnable4: '201909',
          isEnable5: '02、09月度目标确认函',
          isEnable6: 'B01032019061020180302154335.pdf',
          isEnable7: '0.12KB',
          isEnable8: '2018-03-02 15:43:40'
        }
      ]
    }
  }
})

const timePeriodSettingsInNoVehicleAssignment = Mock.mock({
  result: '1',
  msg: '',
  data: {
    timePeriodSettingsInNoVehicleAssignment: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|15': [
        {
          carBrand: '东风日产-日产',
          carSeries: '西玛',
          carType: 'EQ7200-II-A',
          carTypeName: 'FDRALWZJ11EXA-----',
          storeType: '在线库存',
          statues: '1',
          noPartStartTime: '2019/07/20',
          noPartEndTime: '2019/09/20'
        },
        {
          carBrand: '东风日产-启辰',
          carSeries: '西玛',
          carType: 'EQ7200-II-A',
          carTypeName: 'FDRALWZJ11EXA-----',
          storeType: '在线库存',
          statues: '1',
          noPartStartTime: '2018/07/02',
          noPartEndTime: '2018/09/02'
        }
      ]
    }
  }
})

const VeDbCarAgentItemQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    VeDbCarAgentItemQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 10,
      rows: [
        {
          agentProject: '代上保险',
          carAgentItemCost: '50'
        }, {
          agentProject: '代交话费',
          carAgentItemCost: '50'
        }, {
          agentProject: '代洗车',
          carAgentItemCost: '50'
        }, {
          agentProject: '代架',
          carAgentItemCost: '50'
        }, {
          agentProject: '代练',
          carAgentItemCost: '50'
        }
      ]
    }
  }
})

const orgconfigurablePageManagement = Mock.mock({
  result: '1',
  msg: '',
  data: {
    orgconfigurablePageManagement: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          moduleName: '东风日产-日产',
          moduleCode: 've',
          pageName: '采购单驳回',
          pageCode: '/vemodule/vePurchase/vePurchaseReject',
          pageId: '123456',
          isEnable: '1',
          pageType: '页面视图',
          pageArea: '客户信息,订单信息,合同信息,配车信息',
          isEnable3: '管理员',
          isEnable4: '2019-09-07',
          isEnable5: '管理员',
          isEnable6: '2019-09-07',
          isEnable7: 'njwnaocbi1287tde328'
        }
      ]
    }
  }
})

const orgconfigurablePageComponentsManagement = Mock.mock({
  result: '1',
  msg: '',
  data: {
    orgconfigurablePageComponentsManagement: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          pageId: '123',
          pageName: '采购单驳回',
          compType: 'QUERY',
          compKey: 'compKey1',
          isShowLabel: '是',
          labelName: '品牌',
          langLabelName: '品牌',
          codeField: 'carBrandCode',
          textField: 'carBrandName',
          parentFileds: '1',
          componet: 'org/carBrand/carBrand',
          type: 'dropdownList',
          isMust: '是',
          isMul: '是',
          isRequire: '是',
          span: '6',
          sort: '1',
          isEnableName: '是',
          isEnableCode: '1',
          clearable: '2',
          filterable: '3',
          colsId: '4',
          inputType: '5',
          dateOptionsType: '6',
          format: '7',
          dateType: '8',
          lookuptype: '9',
          clickEvent: '10',
          isSys: '11',
          compareField: '12',
          pageArea: '客户信息',
          compareValue: '13',
          contWay: '14',
          isEnable7: '15'
        }
      ]
    }
  }
})

const orgconfigurablePageTableManagement = Mock.mock({
  result: '1',
  msg: '',
  data: {
    orgconfigurablePageTableManagement: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          pageId: '12gqq',
          pageName: '采购单驳回',
          colsId: 'Page00147',
          isComponent: '是',
          labelName: '车型配置名称',
          langLabelName: '车型配置名称',
          width: '150',
          align: 'center',
          hidden: '否',
          sort: '3',
          sortable: '1',
          isEnableName: '是',
          isEnableCode: '1',
          isSys: '否'
        }
      ]
    }
  }
})

const vebackIntoStorage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vebackIntoStorage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          carBrandCn: '东风日产-日产',
          isEnable1: 'H2901SA201908120005',
          isEnable2: 'H2901HT201908130001',
          isEnable3: 'LGBH12E01HY529175',
          isEnable4: '西玛',
          isEnable5: 'DFL72AL2-LNC1',
          isEnable6: '珠光白/QAB',
          isEnable7: '深内饰G/G',
          isEnable8: '安全气帘',
          isEnable9: 'WAC230004080832',
          isEnable10: 'HR16239692Y',
          isEnable11: 'ABC123',
          isEnable12: '109800.00',
          isEnable13: '2018/10/18',
          isEnable14: '花都',
          isEnable15: '杭州东风南方滨安主搬',
          isEnable16: 'H2901HT201810180002'
        }
      ]
    }
  }
})

const veDrlAccountQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDrlAccountQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          carBrandCode: '1',
          dlrShortName: '广州风日店',
          dlrCode: 'H2972',
          purcashTypeName: '营业保证金',
          remainAmount: '2,223,454',
          creditAmout: '66,234',
          usingCashAmount: '2,223,454',
          usingCreditAmount: '3,454',
          freezeCashAmount: '2,223',
          freezeCreditAmount: '2,333,454',
          tempCreditAmount: '0',
          tempCreditExpireDate: '2019-9-7',
          county: '南区',
          bigarea: '华南一区',
          smallArea: '广清区',
          province: '广东',
          city: '广州'
        }
      ]
    }
  }
})

// 保存
const mdmOrgCityMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgCityMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

const mdmVeCarConfigMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmVeCarConfigMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

const mdsLookupValueSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsLookupValueSave: {
      result: '1',
      msg: ''
    }
  }
})

const veBaseCycleStockSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veBaseCycleStockSave: {
      result: '1',
      msg: ''
    }
  }
})

const veAccountQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veAccountQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 30,
      'rows|30': [
        {
          carBrandName: '尼桑账户',
          dlrShortName: '广州风日店',
          amount: '3150.00',
          ticketNo: '324234324324',
          auditStatusName: '审核',
          businessTypeName: '到款',
          businessClassName: '银行承兑汇票',
          createDate: '2019-02-01',
          auditDate: '2019-02-03',
          outTicketDate: '2019-02-06',
          expireDate: '2019-4-24',
          pvBandk: '招商银行',
          pvAccount: '现金（账户）',
          county: '南区',
          remark: '保修',
          bigArea: '华南二区',
          smallArea: '广州',
          province: '广东',
          city: '广州'
        }
      ]
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veOrderForecast',
    type: 'post',
    response: config => {
      return veOrderForecast
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vebackIntoStorage',
    type: 'post',
    response: config => {
      return vebackIntoStorage
    }
  },
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=orgconfigurablePageManagement',
    type: 'post',
    response: config => {
      return orgconfigurablePageManagement
    }
  },
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=orgconfigurablePageComponentsManagement',
    type: 'post',
    response: config => {
      return orgconfigurablePageComponentsManagement
    }
  },
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=orgconfigurablePageTableManagement',
    type: 'post',
    response: config => {
      return orgconfigurablePageTableManagement
    }
  },
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=mdsLookupValueSave',
    type: 'post',
    response: config => {
      return mdsLookupValueSave
    }
  }, {
    url: '/ly/mp/busicen/fic/graphql.do' + cH + 'v=veDrlAccountQry',
    type: 'post',
    response: config => {
      return veDrlAccountQry
    }
  },
  {
    url: '/ly/mp/busicen/fic/graphql.do' + cH + 'v=veAccountQry',
    type: 'post',
    response: config => {
      return veAccountQry
    }
  },
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmOrgCityMutationSave',
    type: 'post',
    response: config => {
      return mdmOrgCityMutationSave
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veTypesOfAgencyProjects',
    type: 'post',
    response: config => {
      return veTypesOfAgencyProjects
    }
  },
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmVeCarConfigMutationSave',
    type: 'post',
    response: config => {
      return mdmVeCarConfigMutationSave
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veBaseCycleStockSave',
    type: 'post',
    response: config => {
      return veBaseCycleStockSave
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=VeDbCarAgentQueryFindAll',
    type: 'post',
    response: config => {
      return VeDbCarAgentQueryFindAll
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veBuAgentProjectTypeMutationSave',
    type: 'post',
    response: config => {
      return veBuAgentProjectTypeMutationSave
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=VeDbCarAgentItemQueryFindAll',
    type: 'post',
    response: config => {
      return VeDbCarAgentItemQueryFindAll
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veRiskDlrMessageCtrl',
    type: 'post',
    response: config => {
      return veRiskDlrMessageCtrl
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=timePeriodSettingsInNoVehicleAssignment',
    type: 'post',
    response: config => {
      return timePeriodSettingsInNoVehicleAssignment
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=targetQuantityConfirmationLetterQuery',
    type: 'post',
    response: config => {
      return targetQuantityConfirmationLetterQuery
    }
  }
]

