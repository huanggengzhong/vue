import Mock from 'mockjs'
import { seApis } from '../../src/api/graphQLApiList/se'
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

const detaildata = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seBuRepairModeDetailQuery: {
      'result': '1',
      'rows': [{
        'repairModeCartypeId': '1',
        'repairModeId': '1',
        'carSeriesCode': '1',
        'carTypeCode': '1',
        'carTypeCn': '1',
        'wiAmount': '1',
        'partAmount': '1',
        'fixedAmount': '1',
        'isSystem': '1',
        'carBrandCode': '1',
        'oemId': '1',
        'groupId': '1',
        'oemCode': '1',
        'groupCode': '1',
        'creator': {
          'createdName': '1',
          'createdDate': '1',
          'modifier': '1',
          'modifyName': '1',
          'lastUpdatedDate': '1',
          'isEnable': '1',
          'updateControlId': '1'
        },
        'SeDbRepairModeWi': [{
          'repairModeWiId': '1',
          'repairModeId': '1',
          'wiCode': 'w001',
          'wiName': '发动机维修',
          'wiQty': 160,
          'businessType': '正常维修',
          'businessTypeName': '正常维修',
          'carTypeCode': '1',
          'isSystem': '1',
          'oemId': '1',
          'groupId': '1',
          'oemCode': '1',
          'groupCode': '1',
          'creator': '1',
          'createdName': '1',
          'createdDate': '1',
          'modifier': '1',
          'modifyName': '1',
          'lastUpdatedDate': '1',
          'isEnable': '1',
          'updateControlId': '1',
          'SeDbRepairModePart': '1'
        },
        {
          'repairModeWiId': '2',
          'repairModeId': '1',
          'wiCode': 'w002',
          'wiName': '车身修复',
          'wiQty': 32,
          'businessType': '正常维修',
          'businessTypeName': '正常维修',
          'carTypeCode': '1',
          'isSystem': '1',
          'oemId': '1',
          'groupId': '1',
          'oemCode': '1',
          'groupCode': '1',
          'creator': '1',
          'createdName': '1',
          'createdDate': '1',
          'modifier': '1',
          'modifyName': '1',
          'lastUpdatedDate': '1',
          'isEnable': '1',
          'updateControlId': '1',
          'SeDbRepairModePart': '1'
        }],
        'repairModePartId': [{
          'repairModeId': '1',
          'partNo': 'p001',
          'partName': '发动机',
          'partQty': 1,
          'partPrice': 16800.00,
          'businessType': '正常维修',
          'businessTypeName': '正常维修',
          'partTotalFee': 33600.00,
          'carTypeCode': '1',
          'isSystem': '1',
          'oemId': '1',
          'groupId': '1',
          'oemCode': '1',
          'groupCode': '1',
          'creator': '1',
          'createdName': '1',
          'createdDate': '1',
          'modifier': '1',
          'modifyName': '1',
          'lastUpdatedDate': '1',
          'isEnable': '1',
          'updateControlId': '1',
          'dlrLeastSaleQty': '1'
        },
        {
          'repairModeId': '1',
          'partNo': 'p002',
          'partName': '油漆',
          'partQty': 4,
          'partPrice': 168.00,
          'businessType': '正常维修',
          'businessTypeName': '正常维修',
          'partTotalFee': 672.00,
          'carTypeCode': '1',
          'isSystem': '1',
          'oemId': '1',
          'groupId': '1',
          'oemCode': '1',
          'groupCode': '1',
          'creator': '1',
          'createdName': '1',
          'createdDate': '1',
          'modifier': '1',
          'modifyName': '1',
          'lastUpdatedDate': '1',
          'isEnable': '1',
          'updateControlId': '1',
          'dlrLeastSaleQty': '1'
        }]
      }
      ]
    }
  }
})

const modeImportData = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seBuRepairModeImport: {
      'result': '1',
      'rows': [
        {
          label: '施工单模板',
          children: [{
            label: '10000公里保养'
          },
          {
            label: '20000公里保养'
          }, {
            label: '保养套餐1'
          }]
        }
      ]
    }
  }
})

const adapTypeData = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    AdapType: {
      'result': '1',
      'rows': [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: 'A'
        },
        {
          value: '2',
          label: 'B'
        },
        {
          value: '3',
          label: 'C'
        }
      ]
    }
  }
})

export default [
  {
    url: seApis.seBuRepairModeDetailQuery.APIUrl + cH + 'v=' + seApis.seBuRepairModeDetailQuery.ServiceCode,
    type: 'post',
    response: config => {
      return detaildata
    }
  },
  {
    url: seApis.seBuRepairModeImport.APIUrl + cH + 'v=' + seApis.seBuRepairModeImport.ServiceCode,
    type: 'post',
    response: config => {
      return modeImportData
    }
  },
  {
    url: seApis.AdapType.APIUrl + cH + 'v=' + seApis.AdapType.ServiceCode,
    type: 'post',
    response: config => {
      return adapTypeData
    }
  }
]

