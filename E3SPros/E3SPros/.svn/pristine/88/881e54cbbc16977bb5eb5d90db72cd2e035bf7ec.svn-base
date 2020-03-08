/**
* description: 车身颜色模拟数据
* author: linwm
* createdDate: 2019-07-23
*/
import Mock from 'mockjs'

const cH = '/'
const mdmCarColorQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarColorQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows|3': [
        {
          carBrandCode:"1",
          carBrandCn:"东风日产-日产",
          carColorCode:"B",
          carColorName:"珊瑚红A40",
          supplyStatus:"SP",
          supplyStatusCn:"生产供应",
          isEnable:"1"
        },
        {
          carBrandCode:"1",
          carBrandCn:"东风日产-日产",
          carColorCode:"A",
          carColorName:"玫瑰红B40",
          supplyStatus:"SP",
          supplyStatusCn:"生产供应",
          isEnable:"1"
        }
      ]
    }
  }
})

// 品牌保存
const mdmCarColorMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarColorMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmCarColorQueryListForPage',
    type: 'post',
    response: config => {
      return mdmCarColorQueryListForPage
    }
  },
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmCarColorMutationSave',
    type: 'post',
    response: config => {
      return mdmCarColorMutationSave
    }
  }
]
