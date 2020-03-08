import Mock from 'mockjs'
import { seApis } from '../../../src/api/graphQLApiList/se'

const cH = '/'

const seBuRepairReserverQuery = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seBuRepairReserverQuery: {
      'result': '1',
      'pageindex': 1,
      'pages': 1,
      'records': 1,
      'msg': '成功！',
      'rows': [
        {
          reserveOrderId: '23G23',
          reserveOrderCode: 'R23REW',
          vin: 'T23REW',
          carLicenseNo: '粤AY3E7F',
          carBrandId: 'GEWGSDSD',
          carBrandCode: 'GWEF2323G',
          carBrandName: '天籁',
          carSeriseId: 'GWEGSDF',
          carSeriseCode: 'WGEWSDF',
          carSeriseCn: '日产',
          carTypeId: 'F23FWER',
          carTypeCode: 'RQWDQWF',
          carTypeName: '蓝鸟',
          carColorName: '蓝色',
          custName: '周三',
          custTel: '1165475646223',
          reserveMan: '李四',
          reserveTel: '13532523632',
          reserveState: '314214123',
          preComeDate: '2018-12-12',
          createdDate: '2018-12-12',
          oemCode: '32423',
          groupCode: 'qgqwfafs',
          oemId: 'wqfqwga',
          groupId: 'dsgweg23'
        },
        {
          reserveOrderId: '23G23',
          reserveOrderCode: 'R23REW',
          vin: 'T23REW',
          carLicenseNo: '粤AY3E7F',
          carBrandId: 'GEWGSDSD',
          carBrandCode: 'GWEF2323G',
          carBrandName: '天籁',
          carSeriseId: 'GWEGSDF',
          carSeriseCode: 'WGEWSDF',
          carSeriseCn: '日产',
          carTypeId: 'F23FWER',
          carTypeCode: 'RQWDQWF',
          carTypeName: '蓝鸟',
          carColorName: '蓝色',
          custName: '周三',
          custTel: '1165475646223',
          reserveMan: '李四',
          reserveTel: '13532523632',
          reserveState: '314214123',
          preComeDate: '2018-12-12',
          createdDate: '2018-12-12',
          oemCode: '32423',
          groupCode: 'qgqwfafs',
          oemId: 'wqfqwga',
          groupId: 'dsgweg23'
        },
        {
          reserveOrderId: '23G23',
          reserveOrderCode: 'VSDSD',
          vin: 'GQEGDSG',
          carLicenseNo: '粤AGDSG',
          carBrandId: 'GEWGSDSD',
          carBrandCode: 'GWEF2323G',
          carBrandName: '天籁1',
          carSeriseId: 'GWEGSDF',
          carSeriseCode: 'WGEWSDF',
          carSeriseCn: '日产1',
          carTypeId: 'F23FWER',
          carTypeCode: 'RQWDQWF',
          carTypeName: '蓝鸟1',
          carColorName: '蓝色1',
          custName: '王五',
          custTel: '1165475646223',
          reserveMan: '伍佰',
          reserveTel: '13532523632',
          reserveState: '314214123',
          preComeDate: '2019-12-12',
          createdDate: '2018-12-12',
          oemCode: '32423',
          groupCode: 'qgqwfafs',
          oemId: 'wqfqwga',
          groupId: 'dsgweg23'
        },
        {
          reserveOrderId: '23G23',
          reserveOrderCode: 'R23REW',
          vin: 'T23REW',
          carLicenseNo: '粤FVSDV',
          carBrandId: 'GEWGSDSD',
          carBrandCode: 'GWEF2323G',
          carBrandName: '天-籁',
          carSeriseId: 'GWEGSDF',
          carSeriseCode: 'WGEWSDF',
          carSeriseCn: '日-产',
          carTypeId: 'F23FWER',
          carTypeCode: 'RQWDQWF',
          carTypeName: '蓝鸟',
          carColorName: '蓝-色',
          custName: '周杰伦',
          custTel: '1165475646223',
          reserveMan: '陈奕迅',
          reserveTel: '13532523632',
          reserveState: '314214123',
          preComeDate: '2018-12-12',
          createdDate: '2018-12-12',
          oemCode: '32423',
          groupCode: 'qgqwfafs',
          oemId: 'wqfqwga',
          groupId: 'dsgweg23'
        },
        {
          reserveOrderId: '23G23',
          reserveOrderCode: 'R23REW',
          vin: 'T23REW',
          carLicenseNo: '粤AY3E7F',
          carBrandId: 'GEWGSDSD',
          carBrandCode: 'GWEF2323G',
          carBrandName: '天籁',
          carSeriseId: 'GWEGSDF',
          carSeriseCode: 'WGEWSDF',
          carSeriseCn: '日产',
          carTypeId: 'F23FWER',
          carTypeCode: 'RQWDQWF',
          carTypeName: '蓝鸟',
          carColorName: '蓝色',
          custName: '陆六',
          custTel: '1165475646223',
          reserveMan: '林俊杰',
          reserveTel: '13532523632',
          reserveState: '314214123',
          preComeDate: '2018-12-12',
          createdDate: '2018-12-12',
          oemCode: '32423',
          groupCode: 'qgqwfafs',
          oemId: 'wqfqwga',
          groupId: 'dsgweg23'
        }
      ]
    }
  }
})

const seBuRepairReserverImport = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seBuRepairReserverImport: {
      'result': '1',
      'msg': '查询成功',
      'rows': [
        {
          reserveOrderCode: 'WEG3',
          reserveOrderId: 'GDSFEW',
          reserveMan: '周杰伦',
          reserveTel: '12366654435',
          reserveState: '1',
          saName: '李明辉',
          preComeDate: '2018-12-12',
          csDesc: '车窗有点异响，麻烦看看',
          isClean: '1',
          'reservewi|2': [{
            wiCode: /wi00\d{5}/,
            wiName: /工时00\d{5}/,
            saleWorkQty: 2,
            wiWorkQty: 2,
            'wiPrice|+1': [80, 100, 60, 46],
            'wiPreAmount|+1': [160, 200, 120, 92],
            businessType: '1',
            wiDiscountRate: 0.9,
            wiTypeCode: '1',
            wiId: /W_\d{5}/
          }],
          'reservepart': [{
            partNo: /p00\d{5}/,
            partName: /备件00\d{5}/,
            partQty: 4,
            'partPrice|+1': [20, 30, 40],
            partDiscountRate: 0.8,
            'prePartAmount|+1': [64, 96, 128],
            businessType: '1',
            dlrPrice: '20',
            dlrLeastSaleQty: '1'
          }],
          reserveother: [{
            otherAmount: 120,
            costTypeCode: 'FQWFASFEWFWE',
            costTypeName: '费用1',
            businessType: '1',
            payKind: '1',
            costTypeId: '1'
          }]
        }
      ]
    }
  }
})

export default [
  {
    url: seApis.seBuRepairReserverQuery.APIUrl + cH + 'v=' + seApis.seBuRepairReserverQuery.ServiceCode,
    type: 'post',
    response: config => {
      return seBuRepairReserverQuery
    }
  },
  {
    url: seApis.seBuRepairReserverImport.APIUrl + cH + 'v=' + seApis.seBuRepairReserverImport.ServiceCode,
    type: 'post',
    response: config => {
      return seBuRepairReserverImport
    }
  }
]

