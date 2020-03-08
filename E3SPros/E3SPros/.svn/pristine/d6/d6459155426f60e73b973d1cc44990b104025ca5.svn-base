/**
 * description: 主机厂资金管理
 * author: mjq
 * createdDate: 2019-07-24
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 资金记录查询
const veAccountQry = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veAccountQry: {
      result: '1',
      records: 33,
      pageindex: 1,
      pages: 3,
      msg: '查询成功',
      'rows|33': [{
        'orgId|+1': 1,
        'dlrShortName|1': [
          '广州风日店',
          '上海汽车',
          '长安汽车'
        ],
        'dlrCode|1': [
          '1009211',
          '2100111'
        ],
        'cashTypeId|1': [
          '公共资金',
          '私有资金'
        ],
        'purcashTypeId|1': [
          '转账',
          '现金支付'
        ],
        'pvAccount|1': [
          '尼桑账户',
          'SAVA',
          'PA'
        ],
        'createDate|1': [
          '2009-01-06',
          '2012-04-03'
        ],
        'businessType|1': [
          '资金操作'
        ],
        'businessTypeName|1': [
          '现金(自筹)',
          '贷款'
        ],
        'businessClassName|1': [
          '银行电汇',
          '贷款'
        ],
        'businessClass|1': [
          '资金类型'

        ],
        'amount|1': [
          '1,000.00',
          '12111',
          '22111'
        ],
        'purState|1': [
          '到款',
          '到款',
          '到款'
        ],
        'pvBandk|1': [
          '银行电汇',
          '银行电汇'
        ],
        'bankNumber|1': [
          '124,124'
        ],
        'ticketNo|1': [
          '3602026819200669896',
          '4220202681920066980'
        ],
        'outTicketDate|1': [
          '2019.4.9',
          '2019.5.9'
        ],
        'recieveDate|1': [
          '2019-04-09',
          '2019-05-02'
        ],
        'recieveTicketDate|1': [
          '2019.1.2'
        ],
        'expireDate|1': [
          '2019.1.2',
          '2019.4.2'
        ],
        'ticketType|1': [
          'userName1',
          'userName2',
          'admin1'
        ],
        'isOutTicketMan|1': [
          '是',
          '否'
        ],
        'outTicketManName|1': [
          'userName1',
          'userName2',
          'admin1'
        ],
        'tickBank|1': [
          '工商',
          '招商',
          '平安'
        ],
        'remark|1': [
          'remark1',
          'remark2',
          'remark4444'
        ],
        'updateControlId|1': [
          'userName1',
          'userName2',
          'admin1'
        ]

      }]
    }
  }
})

// 保存资金记录
const veAccountSave = Mock.mock({
  'result': '1',
  'data': {
    'veAccountSave': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

// 删除资金记录
const veAccountDel = Mock.mock({
  'result': '1',
  'data': {
    'veAccountDel': {
      'result': '1',
      'records': 1,
      'msg': '1',
      'rows': []
    }
  }
})

// 经销商资金查询
const veDrlAccountQry = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    veDrlAccountQry: {
      result: '1',
      records: 13,
      pageindex: 1,
      pages: 2,
      msg: '查询成功',
      'rows|33': [{
        'orgId|+1': 1,
        'dlrShortName|1': [
          '广州风日店',
          '上海汽车',
          '长安汽车'
        ],
        'dlrCode|1': [
          'D0211',
          'DASSS',
          'AAADV'
        ],
        'carBrandCode|1': [
          '尼桑账户',
          '尼城账户'
        ],
        'purcashTypeName|1': [
          '现金(自筹)',
          '贷款'
        ],
        'remainAmount|1': [
          '334',
          '22111',
          '22111'
        ],
        'creditAmout|1': [
          '124,124',
          '312,211'
        ],
        'usingCashAmount|1': [
          '124,124',
          '312,211'
        ],
        'usingCreditAmount|1': [
          '124,124',
          '312,211'
        ],
        'freezeCashAmount|1': [
          '124,124',
          '312,211'
        ],
        'freezeCreditAmount|1': [
          '124,124',
          '312,211'
        ],
        'tempCreditAmount|1': [
          '124,124',
          '312,211'
        ],
        'county|1': [
          '南区',
          '北区'
        ],
        'bigarea|1': [
          '华南二区',
          '华北一区'
        ],
        'smallArea|1': [
          '广清韶区',
          '韶关'
        ],
        'province|1': [
          '广东',
          '广西'
        ],
        'city|1': [
          '广州',
          '上海',
          '深圳'
        ]
      }]
    }
  }
})

// 资金记录查询
export default [
  {
    url: veApis.veAccountQry.APIUrl + cH + 'v=' + veApis.veAccountQry.ServiceCode,
    type: 'post',
    response: config => {
      return veAccountQry
    }
  },
  {
    url: veApis.veAccountSave.APIUrl + cH + 'v=' + veApis.veAccountSave.ServiceCode,
    type: 'post',
    response: config => {
      return veAccountSave
    }
  },
  {
    url: veApis.veAccountDel.APIUrl + cH + 'v=' + veApis.veAccountDel.ServiceCode,
    type: 'post',
    response: config => {
      return veAccountDel
    }
  },
  {
    url: veApis.veDrlAccountQry.APIUrl + cH + 'v=' + veApis.veDrlAccountQry.ServiceCode,
    type: 'post',
    response: config => {
      return veDrlAccountQry
    }
  }
]
