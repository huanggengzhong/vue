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

const data = Mock.mock({
  seCustAndCarQueryFind: {
    'result': '1',
    pageindex: 1,
    pages: 1,
    records: 1,
    'rows': [
      {
        'carBrandCode': '1',
        'carBrandCn': 'xxx汽车',
        'carBrandId': '1',
        'carSeriesCode': '1',
        'carSeriesCn': '1',
        'carTypeCode': '1',
        'carTypeCn': '1.5T 锐享型',
        'custName': '陈晓明',
        'phone': '17384923345',
        'carLicenseNo': '粤A235QW',
        'vin': 'LMJ235HJY88342',
        'engineNo': '1',
        'carColorName': '红色',
        'carOwnerId': '1',
        'carId': '1',
        'dlrCustNo': 's000112',
        'deliveryDate': '2018-09-09',
        'offlineDate': '2018-09-09',
        'invoiceDate': '2018-09-01',
        'creator': '1',
        'oemCode': '1',
        'groupCode': '1',
        'oemId': '1',
        'groupId': '1',
        'dlrShortName': 'XX专营店'
      },
      {
        'carBrandCode': '2',
        'carBrandCn': 'xxx汽车',
        'carBrandId': '1',
        'carSeriesCode': '1',
        'carSeriesCn': '1',
        'carTypeCode': '1',
        'carTypeCn': '1.5T 锐享型',
        'custName': '陈晓明',
        'phone': '17384923345',
        'carLicenseNo': '粤A235QW',
        'vin': 'LMJ235HJY88342',
        'engineNo': '1',
        'carColorName': '红色',
        'carOwnerId': '1',
        'carId': '1',
        'dlrCustNo': 's000112',
        'deliveryDate': '2018-09-09',
        'offlineDate': '2018-09-09',
        'invoiceDate': '2018-09-01',
        'creator': '1',
        'oemCode': '1',
        'groupCode': '1',
        'oemId': '1',
        'groupId': '1',
        'dlrShortName': 'XX专营店'
      },
      {
        'carBrandCode': '3',
        'carBrandCn': 'xxx汽车',
        'carBrandId': '1',
        'carSeriesCode': '1',
        'carSeriesCn': '1',
        'carTypeCode': '1',
        'carTypeCn': '1.5T 锐享型',
        'custName': '陈晓明',
        'phone': '17384923345',
        'carLicenseNo': '粤A235QW',
        'vin': 'LMJ235HJY88342',
        'engineNo': '1',
        'carColorName': '红色',
        'carOwnerId': '1',
        'carId': '1',
        'dlrCustNo': 's000112',
        'deliveryDate': '2018-09-09',
        'offlineDate': '2018-09-09',
        'invoiceDate': '2018-09-01',
        'creator': '1',
        'oemCode': '1',
        'groupCode': '1',
        'oemId': '1',
        'groupId': '1',
        'dlrShortName': 'XX专营店'
      }
    ]
  }
})
const seCustAndCarQueryBack = Mock.mock({
  seCustAndCarQueryBack: {
    'result': '1',
    pageindex: 1,
    pages: 1,
    records: 1,
    'rows': [
      {
        dlrCustNo: '342342',
        carId: '52352342',
        dlrId: '23523425',
        carOwner: [{
          carOwnerId: '1532524',
          dlrCustNo: '52342325',
          weiCode: '52352323',
          custName: '张小奇',
          phone: '1556665334',
          custClassCode: '123325264335',
          addr: '广州市XX大道XX号',
          mileage: '156',
          remark: '备注111',
          complain: '客户抱怨11111',
          birthDate: '2019-08-08'
        }],
        carUser: [{
          dlrCustNo: '4124325236252234',
          custName: '张小奇',
          phone: '1556665334',
          addr: '广州市XX大道XX号'
        }],
        carInfo: [{
          vin: '142212312',
          carLicense: '粤AGBDW3',
          carBrandCode: '23423423',
          carBrandCn: '车辆品牌1',
          carSeriesCode: '412123',
          carSeriesName: '车系A',
          carTypeCode: '1312413',
          carTypeName: '车型A',
          carKeyNo: '3424234',
          engineNo: '4213125',
          carColorName: '颜色B',
          deliveryDate: '2019-08-08',
          invoiceDate: '2019-08-08',
          saleDate: '2019-08-08',
          isWaterCar: '0',
          etptCar: '1',
          exchangeFlag: '1',
          mileage: '432',
          custComeTypeName: '客户返厂类型A',
          offlineDate: '2019-08-08'
        }]
      }
    ]
  }
})

export default [
  {
    url: seApis.seCommonQueryCarOwnerCustInfo.APIUrl + cH + 'v=' + seApis.seCommonQueryCarOwnerCustInfo.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: data
      }
    }
  },
  {
    url: seApis.seCustAndCarQueryBack.APIUrl + cH + 'v=' + seApis.seCustAndCarQueryBack.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seCustAndCarQueryBack
      }
    }
  }
]

