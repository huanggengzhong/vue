/**
* description:通知模板模拟数据
* author: linwm
* createdDate: 2019-08-04
*/
import Mock from 'mockjs'

const cH = '/'
const mdsSysMsgModuleQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsSysMsgModuleQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
            moduleId:"1",
            moduleCode: 'SE004',
            moduleName:"TSB通报发布",
            module:"SE",
            moduleCn:"服务",
            isEnable:"1",
            titleModule:"TSB通报：[发行号]",
            contentModule:"TSB通报：发行号[发行号]，主题是[主题]",
            updateControlId:"22caee2daceb40e7bd2601cb34893842"
        },
        {
            moduleId:"2",
            moduleCode: 'PA004',
            moduleName:"备件销售结算",
            module:"PA",
            moduleCn:"备件",
            isEnable:"0",
            titleModule:"备件销售结算",
            contentModule:"专营店编号为:[专营店编号]的账户,通过折扣单编号为：[折扣单编号]的单据更新资金账户,上账金额为:[金额]元",
            updateControlId:"12caee2daceb40e7bd2601cb34893842"
        }
      ]
    }
  }
})

// 通知场景保存
const mdsSysMsgModuleMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsSysMsgModuleMutationSave: {
      result: '1',
      msg: ''
    }
  }
})


export default [
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdsSysMsgModuleQueryByPage',
    type: 'post',
    response: config => {
      return mdsSysMsgModuleQueryByPage
    }
  },
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdsSysMsgModuleMutationSave',
    type: 'post',
    response: config => {
      return mdsSysMsgModuleMutationSave
    }
  }
]
