/**
* description:账户维护模拟数据
* author: linwm
* createdDate: 2019-08-04
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
            dlrAccountId: '1',
            dlrAccountCode:'001',
            dlrShortName: '尼桑账户',
            modelName: '整车',
            createBy: '超级管理员',
            createTime: '2019-05-09',
            isEnable:"1",
            updateControlId:"12caee2daceb40e7bd2601cb34893822"
        },
        {
            dlrAccountId: '2',
            dlrAccountCode:'002',
            dlrShortName: '尼桑账户',
            modelName: '整车',
            createBy: '超级管理员',
            createTime: '2019-05-09',
            isEnable:"1",
            updateControlId:"22caee2daceb40e7bd2601cb34893822"
        },
        {
            dlrAccountId: '3',
            dlrAccountCode:'003',
            dlrShortName: '尼桑账户',
            modelName: '整车',
            createBy: '超级管理员',
            createTime: '2019-05-09',
            isEnable:"1",
            updateControlId:"32caee2daceb40e7bd2601cb34893822"
        },
        {
            dlrAccountId: '4',
            dlrAccountCode:'004',
            dlrShortName: '尼桑账户',
            modelName: '整车',
            createBy: '超级管理员',
            createTime: '2019-05-09',
            isEnable:"1",
            updateControlId:"42caee2daceb40e7bd2601cb34893822"
        }
      ]
    }
  }
})


// 保存
const veDbDlrAccountMutationSave = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veDbDlrAccountMutationSave: {
        result: '1',
        msg: ''
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
  },
  {
    url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbDlrAccountMutationSave',
    type: 'post',
    response: config => {
      return veDbDlrAccountMutationSave
    }
  }
]