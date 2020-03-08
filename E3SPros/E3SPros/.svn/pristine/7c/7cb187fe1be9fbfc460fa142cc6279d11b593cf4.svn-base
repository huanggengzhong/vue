import Mock from 'mockjs'
import { seApis } from '../../../src/api/graphQLApiList/se'

const cH = '/'

const seBuRepairOrderQueryPrint = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seBuRepairOrderQueryPrint: {
      'result': '1',
      'pageindex': '1',
      'pages': '1',
      'records': '1',
      'msg': '成功！',
      'rows': [
        {
          repairOrderCode: '1',
          saName: '周生',
          mileage: '124',
          repairTime: '2019-08-08',
          preGetDate: '2019-08-08',
          vin: 'FWEG23RWERW',
          carLicenseNo: '粤AWWGEF',
          carBrandCode: 'T34GE3',
          carBrandName: '日产',
          carSeriseCode: 'F3RFW',
          carSeriseCn: '蓝鸟',
          carTypeCode: 'DFSDFWEF',
          carTypeName: 'T43TF',
          carColorName: '蓝色',
          custName: '李生',
          custTel: '12333346777',
          repairMan: '杨生',
          repairTel: '12344353626',
          buyDate: '2019-08-08',
          isReserve: '1',
          isWait: '1',
          isClean: '1',
          reserveOrderCode: 'G4T3ET2',
          addr: '广东省XX市XX区',
          csDesc: '机油漏了',
          disposeInfo: '换机油',
          wiDueAmount: '321.76',
          partDueFee: '543.65',
          otherAmount: '543.25',
          discountAmount: '525.43',
          factAmount: '523.65',
          repairOrderAmount: '125.32',
          engineNo: '223T233',
          delieverDate: '2019-08-08',
          dlrLevelCode: '2323425',
          icCardNo: '5326235',
          cardDegreeCode: '55323',
          memDiscount: '10',
          oemCode: '432523',
          groupCode: '5234235',
          oemId: '234235',
          groupId: '652323',
          wiinfo: [
            {
              repairWiId: '325323',
              businessType: '1',
              repairTypeCode: '1',
              payKind: '1',
              payKindName: '现金',
              businessTypeName: '业务类别1',
              repairTypeName: '维修类别1',
              wiCode: '1',
              wiName: '工时1',
              saleWorkQty: 1,
              wiPrice: 24543.234,
              wiAmount: 4124,
              discountAmount: 4213,
              remark: '不错'
            },
            {
              repairWiId: '325323',
              businessType: '2',
              repairTypeCode: '2',
              payKind: '2',
              payKindName: '现金',
              businessTypeName: '业务类别2',
              repairTypeName: '维修类别2',
              wiCode: '2',
              wiName: '工时1',
              saleWorkQty: 2,
              wiPrice: 324.234,
              wiAmount: 53242,
              discountAmount: 0,
              remark: '不错2'
            },
            {
              repairWiId: '325323',
              businessType: '2',
              repairTypeCode: '2',
              payKind: '2',
              payKindName: '现金',
              businessTypeName: '业务类别2',
              repairTypeName: '维修类别2',
              wiCode: '2',
              wiName: '工时1',
              saleWorkQty: 2,
              wiPrice: 324.234,
              wiAmount: 53242,
              discountAmount: 0,
              remark: '不错2'
            }
          ],
          partinfo: [
            {
              businessType: '1',
              repairPartId: '1',
              repairTypeCode: '1',
              payKind: '1',
              payKindName: '付费2',
              businessTypeName: '业务类别2',
              partNo: '124123',
              partName: '备件1',
              partQty: 543,
              partPrice: 446.45,
              partAmount: 326,
              discountAmount: 436,
              remark: '可以的'
            },
            {
              businessType: '1',
              repairPartId: '1',
              repairTypeCode: '1',
              payKind: '1',
              payKindName: '付费2',
              businessTypeName: '业务类别3',
              partNo: '124123',
              partName: '备件4',
              partQty: 543,
              partPrice: 4325.45,
              partAmount: 4324,
              discountAmount: 0,
              remark: '可以的'
            },
            {
              businessType: '1',
              repairPartId: '1',
              repairTypeCode: '1',
              payKind: '1',
              payKindName: '付费5',
              businessTypeName: '业务类别4',
              partNo: '124123',
              partName: '备件4',
              partQty: 3232,
              partPrice: 5234235.45,
              partAmount: 4235,
              discountAmount: 0,
              remark: '可以的'
            }
          ],
          otherfeeinfo: [
            {
              businessType: '1412',
              repairOtherId: '51234',
              businessTypeName: '业务类别2',
              costTypeName: '其他费用1',
              otherAmount: 0,
              remark: '备注2',
              payKind: '3523',
              payKindName: '付费性质1'
            }
          ],
          dlrinfo: [
            {
              dlrId: '235345',
              dlrCode: '52342',
              dlrShortName: '简称1',
              dlrFullName: '广州丰日店',
              serviceTel: '4366236345',
              linkAddr: '广东省广州市XX大道XX号'
            }
          ]

        }
      ]
    }
  }
})

export default [
  {
    url: seApis.seBuRepairOrderQueryPrint.APIUrl + cH + 'v=' + seApis.seBuRepairOrderQueryPrint.ServiceCode,
    type: 'post',
    response: config => {
      return seBuRepairOrderQueryPrint
    }
  }
]

