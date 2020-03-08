import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'
var cloneObj = function(obj) {
  var newObj = {}
  if (obj instanceof Array) {
    newObj = []
  }
  for (var key in obj) {
    var val = obj[key]
    newObj[key] = typeof val === 'object' ? cloneObj(val) : val
  }
  return newObj
}

const paOrderShortPartsList = Mock.mock({
  paOrderShortPartsQuery: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    pages: 1,
    records: 4,
    msg: '查询成功',
    'rows|10': [
      {
        partBrandCn: 'N',
        jinjichengdu: '正常订单',
        orderType: '主机厂正常订单',
        partNo: '备件号',
        partName: '备件名称',
        qianboyuanyin: '欠拨修改原因+',
        pinci: '频次',
        dinghuoshuliang: '订货数量',
        quejianshuliang: '缺件数量',
        kucun: '库存',
        qianbocangku: '欠拨仓库',
        qianbodate: '欠拨生产日期'
      }
    ]
  }
})
export default [
  // 品牌
  {
    url:
      paApis.paOrderShortPartsQuery.APIUrl +
      cH +
      'v=' +
      paApis.paOrderShortPartsQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        result: '1',
        data: paOrderShortPartsList
      }
    }
  }
]
