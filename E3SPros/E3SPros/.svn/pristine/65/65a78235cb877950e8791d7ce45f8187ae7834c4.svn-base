/**
* description: 账号维护模拟数据
* author: linwm
* createdDate: 2019-07-23
*/
import Mock from 'mockjs'

const cH = '/'
const veDbDlrAccountQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbDlrAccountQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
            accountCode: '1',
            accountName: '尼桑账户',
            moduleName: '整车',
            creator: '超级管理员',
            createTime: '2019-05-09',
            isEnable:"是"
        },
        {
            accountCode: '1',
            accountName: '尼桑账户',
            moduleName: '公共',
            creator: '超级管理员',
            createTime: '2019-05-09',
            isEnable:"是"
        },
        {
            accountCode: '1',
            accountName: '尼桑账户',
            moduleName: '服务',
            creator: '超级管理员',
            createTime: '2019-05-09',
            isEnable:"是"
        },
        {
            accountCode: '1',
            accountName: '尼桑账户',
            moduleName: '整车',
            creator: '超级管理员',
            createTime: '2019-05-09',
            isEnable:"是"
        }
      ]
    }
  }
})


export default [
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbDlrAccountQueryFindAll',
    type: 'post',
    response: config => {
      return veDbDlrAccountQueryFindAll
    }
  }
]
