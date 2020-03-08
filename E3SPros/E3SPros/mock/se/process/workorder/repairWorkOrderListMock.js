/**
 *  维修工时类别的模拟数据
 */
import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
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

const listData = Mock.mock({
  seBuRepairOrderQueryMain:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 15,
    msg: 'success',
    'rows|15': [{
      repairOrderCode: /WO_\d{3,5}/,
      repairOrderId: '112',
      saEmpId: '11',
      saName: '王大力',
      mileage: /[1-9]\d{1,2}400/,
      repairTime: '2019-12-20',
      preGetDate: '2019-12-23',
      'repairOrderStatus|+1': ['31016', '31016', '31011', '31016', '31010'],
      'repairStatusName|+1': ['质检完毕', '质检完毕', '已交车', '质检完毕', '结算进行中'],
      'isGather|+1': ['31101', '31102', '0', '0', '0'],
      'isGatherName|+1': ['未结算', '已结算', '未收款', '未收款', '未收款'],
      vin: 'LM234231231123341',
      carid: '11',
      carLicenseNo: /粤A[1-9A-Z]{5}/,
      trunRepairDate: '2019-12-20',
      custName: '@cname', // //随机生成中文名字
      custTel: /18\d{9}/, // 11位手机号
      repairMan: '@cname',
      repairTel: /18\d{9}/,
      lastUpdatedDate: '@datetime', // 随机生成日期时间
      updateControlId: '',
      createdDate: '@datetime',
      engineNo: '',
      carBrandCode: '',
      cardNo: '',
      oemCode: '',
      groupCode: '',
      oemId: '',
      groupId: ''
    }
    ]
  }

})

const seListData = Mock.mock({
  seCommonQueryServiceSa:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 3,
    msg: 'success',
    'rows|3': [{
      'empId|+1': 1000,
      deptId: 'd01',
      'empName|+1': ['王大力', '李明辉', '何其伟'],
      stationName: 'SE009',
      stationId: '',
      positionCode: 'SE009',
      positionName: '',
      isEnable: '1',
      dlrId: '',
      oemCode: '',
      groupCode: '',
      oemId: '',
      groupId: ''
    }
    ]
  }

})

export default [
  {// 查询大类列表/大类
    url: seApis.seBuRepairOrderQueryMain.APIUrl + cH + 'v=' + seApis.seBuRepairOrderQueryMain.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: listData
      }
    }
  },
  {// 查询大类列表/大类
    url: seApis.seCommonQueryServiceSa.APIUrl + cH + 'v=' + seApis.seCommonQueryServiceSa.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seListData
      }
    }
  }
]

