

/**
 * description: 扣款时限设置
 * author: liXB
 * createdDate: 2019-10-14
 * logs:
 */
import Mock from 'mockjs'

const cH = '/'
const veDeductTimeLimitQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDeductTimeLimitQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          carBrandCode: "1",
          carBrandCn: "东风日产-日产",
          carSeriesId: "1",
          carSeriesCode: "西玛",
          purcashTypeId: "1",
          purcashTypeName: "现金",
          deductDay: "3",
          updateControlId: "",
        },
        {
          carBrandCode: "2",
          carBrandCn: "东风日产-启辰",
          carSeriesId: "1",
          carSeriesCode: "T50",
          purcashTypeId: "1",
          purcashTypeName: "现金",
          deductDay: "5",
          updateControlId: "",
        }
      ]
    }
  }
})

// 保存
const vedeductTimeLimitM = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    vedeductTimeLimitMsg: {
      result: '1',
      msg: '操作失败'
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDeductTimeLimitQry',
    type: 'post',
    response: config => {
      return veDeductTimeLimitQry
    }
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vedeductTimeLimitM',
    type: 'post',
    response: config => {
      return vedeductTimeLimitM
    }
  }
]
