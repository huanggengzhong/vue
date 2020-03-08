/**
 * 采购需求维护模拟数据
 * xulfan
 */
import Mock from 'mockjs'
const cH = '/'

const vePurReqQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurReqQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows|5': [{
        carBrandName: '东风日产-启辰',
        carSeriesCode: '西玛/A36',
        carConfigId: '1111113322233322',
        carConfigCode: 'DFL72AL2-LNC1',
        carConfigName: 'FDRALWZJ11EXA-----',
        carColorName: '珠光白/QAB',
        carColorId: 'xd33343333',
        carIncolorName: '深内饰',
        quantity: '1',
        preInStockDate: '2019-07-01',
        subMitDate: '2019-06-20',
        creator: '张小姐',
        carBrandCode: '2',
        purRequireId: 'H2901BU',
        purReqId: '123467',
        dlrId: 'HUBLKJ3213',
        secDlrId: 'QIFVQOQFH789',
        updateControlId: '123hkjh23hihkashfjhkhfk2f'
      }
      ]
    }
  }
})

const vePurReqSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurReqSave: {
      result: '1',
      msg: ''
    }
  }
})

const vePurReqDel = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurReqDel: {
      result: '1',
      msg: ''
    }
  }
})

export default [
  // 采购需求查询
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vePurReqQry',
    type: 'post',
    response: config => {
      return vePurReqQry
    }
  },
  // 采购需求查询保存
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vePurReqSave',
    type: 'post',
    response: config => {
      return vePurReqSave
    }
  },
  // 采购需求查询删除
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vePurReqDel',
    type: 'post',
    response: config => {
      return vePurReqDel
    }
  }
]

