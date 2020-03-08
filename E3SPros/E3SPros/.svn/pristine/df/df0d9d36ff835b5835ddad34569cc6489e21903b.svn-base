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

const paDbDlrUseOrderTypeList = Mock.mock({
  paDbDlrUseOrderTypeQueryFindAll: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    limit: 20,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        dlrUseOrderTypeId: 1,
        orderTypeCode: '经销商正常订单',
        dlrList: [
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'H2901',
            dlrShortName: '广州风日',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'G2811',
            dlrShortName: '厦门赛尔富',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'F1620',
            dlrShortName: '商丘威祥',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          }
        ]
      },
      {
        dlrUseOrderTypeId: 2,
        orderTypeCode: '经销商三包订单',
        dlrList: [
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'F1620',
            dlrShortName: '商丘威祥',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'F1620',
            dlrShortName: '商丘威祥',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'F1620',
            dlrShortName: '商丘威祥',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          }
        ]
      },
      {
        dlrUseOrderTypeId: 3,
        orderTypeCode: '经销商紧急订单',
        dlrList: [
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'F1617',
            dlrShortName: '南阳威昌',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'F1617',
            dlrShortName: '南阳威昌',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'F1617',
            dlrShortName: '南阳威昌',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          }
        ]
      },
      {
        dlrUseOrderTypeId: 4,
        orderTypeCode: '允许外购订单',
        dlrList: [
          {
            carBrandCode: 'A35',
            carBrandCn: '东风启辰',
            dlrId: '',
            dlrCode: 'E2020',
            dlrShortName: '上海欲兴',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风启辰',
            dlrId: '',
            dlrCode: 'E2020',
            dlrShortName: '上海欲兴',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风启辰',
            dlrId: '',
            dlrCode: 'E2020',
            dlrShortName: '上海欲兴',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          }
        ]
      },
      {
        dlrUseOrderTypeId: 5,
        orderTypeCode: '物流商流订单',
        dlrList: [
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'B1002',
            dlrShortName: '宜兴日友',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'B1002',
            dlrShortName: '宜兴日友',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'B1002',
            dlrShortName: '宜兴日友',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'B1002',
            dlrShortName: '宜兴日友',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          }
        ]
      },
      {
        dlrUseOrderTypeId: 6,
        orderTypeCode: '特殊订单',
        dlrList: [
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'G1500',
            dlrShortName: '郑州友田',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'G1500',
            dlrShortName: '郑州友田',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'G1500',
            dlrShortName: '郑州友田',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          }
        ]
      },
      {
        dlrUseOrderTypeId: 7,
        orderTypeCode: '化学品订单',
        dlrList: [
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'S5507',
            dlrShortName: '大同世纪',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'S5507',
            dlrShortName: '大同世纪',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'S5507',
            dlrShortName: '大同世纪',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          }
        ]
      },
      {
        dlrUseOrderTypeId: 8,
        orderTypeCode: '服务二网采购订单',
        dlrList: [
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'Z0080',
            dlrShortName: '广州神龙',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'Z0080',
            dlrShortName: '广州神龙',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          },
          {
            carBrandCode: 'A35',
            carBrandCn: '东风日产',
            dlrId: '',
            dlrCode: 'Z0080',
            dlrShortName: '广州神龙',
            updateControlId: '',
            oemId: '',
            groupId: '',
            oemCode: '',
            groupCode: ''
          }
        ]
      }
    ]
  }
})
//经销商可用订单类型保存
const paDbDlrUseOrderTypeMutationSave = Mock.mock({
  paDbDlrUseOrderTypeMutationSave: {
    result: '1',
    rows: [
      {
        result: '1',
        msg: '保存成功'
      }
    ],
    msg: 'success'
  }
})
export default [
  // 品牌
  {
    url:
      paApis.paDbDlrUseOrderTypeQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paDbDlrUseOrderTypeQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: paDbDlrUseOrderTypeList
      }
    }
  },
  {
    url:
      paApis.paDbDlrUseOrderTypeMutationSave.APIUrl +
      cH +
      'v=' +
      paApis.paDbDlrUseOrderTypeMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: paDbDlrUseOrderTypeMutationSave
      }
    }
  }
]
