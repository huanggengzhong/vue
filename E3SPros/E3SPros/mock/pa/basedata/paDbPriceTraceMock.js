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
// 备件价格业务审核_查询
const paDbPriceTraceQueryListForPage = Mock.mock({
  rows: [{
    partBrandName: "备件品牌1",
    partBrandCode: "备件编码1",
    partNo: "备件名称1",
    dlrPrice: "网点价1",
    partStatus: "备件状态1",
    auditStatusCn: "审核状态1",
    partTypeName: "备件类别1",
    partSourceName: "备件来源1"
  },
  {
    partBrandName: "备件品牌2",
    partBrandCode: "备件编码2",
    partNo: "备件名称2",
    dlrPrice: "网点价2",
    partStatus: "备件状态2",
    auditStatusCn: "审核状态2",
    partTypeName: "备件类别2",
    partSourceName: "备件来源2"
  }, {
    partBrandName: "备件品牌3",
    partBrandCode: "备件编码3",
    partNo: "备件名称3",
    dlrPrice: "网点价3",
    partStatus: "备件状态3",
    auditStatusCn: "审核状态3",
    partTypeName: "备件类别3",
    partSourceName: "备件来源3"
  }, {
    partBrandName: "备件品牌4",
    partBrandCode: "备件编码4",
    partNo: "备件名称4",
    dlrPrice: "网点价4",
    partStatus: "备件状态4",
    auditStatusCn: "审核状态4",
    partTypeName: "备件类别4",
    partSourceName: "备件来源4"
  }, {
    partBrandName: "备件品牌5",
    partBrandCode: "备件编码5",
    partNo: "备件名称5",
    dlrPrice: "网点价5",
    partStatus: "备件状态5",
    auditStatusCn: "审核状态5",
    partTypeName: "备件类别5",
    partSourceName: "备件来源5"
  }
  ]
})
// 备件价格业务审核_审核
const paDbPriceTraceMutationBsAuditSave = Mock.mock({
  rows: [{
    message: '审核成功'
  }
  ]
})
// 备件价格业务审核_驳回
const apaDbPriceTraceMutationBsAuditSaveReject = Mock.mock({
  rows: [{
    message: '驳回成功'
  }
  ]
})

export default [
  // 备件价格业务审核_查询
  {
    url: paApis.paDbPriceTraceQueryListForPage.APIUrl + cH + 'v=' + paApis.paDbPriceTraceQueryListForPage.ServiceCode,
    type: 'post',
    response: config => {
      const items = paDbPriceTraceQueryListForPage
      return {
        code: 20000,
        data: {
          total: items.rows.length,
          paDbPriceTraceQueryListForPage: items
        }
      }
    }
  },
  // 备件价格业务审核_审核
  {
    url: paApis.paDbPriceTraceMutationBsAuditSave.APIUrl + cH + 'v=' + paApis.paDbPriceTraceMutationBsAuditSave.ServiceCode,
    type: 'post',
    response: config => {
      const items = paDbPriceTraceMutationBsAuditSave
      return {
        code: 20000,
        data: {
          total: items.rows.length,
          paDbPriceTraceMutationBsAuditSave: items
        }
      }
    }
  },
  // 备件价格业务审核_驳回
  {
    url: paApis.apaDbPriceTraceMutationBsAuditSaveReject.APIUrl + cH + 'v=' + paApis.apaDbPriceTraceMutationBsAuditSaveReject.ServiceCode,
    type: 'post',
    response: config => {
      const items = apaDbPriceTraceMutationBsAuditSaveReject
      return {
        code: 20000,
        data: {
          total: items.rows.length,
          apaDbPriceTraceMutationBsAuditSaveReject: items
        }
      }
    }
  }
]