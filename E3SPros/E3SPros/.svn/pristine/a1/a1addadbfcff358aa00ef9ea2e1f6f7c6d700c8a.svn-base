import Mock from 'mockjs'
import { apiSeReport } from '../../../../src/api/graphQLApiList/se'
const CH = '/'

const allData1 = Mock.mock({
  seRepairReportQueryListFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 1,
    msg: '',
    rows: [
      {
        repairOrderId: "估价单ID-mock",
        repairOrderCode: "估价单号-mock	",
        carLicense: "车牌号-mock",
        oemCode: "厂商标识-mock",
        groupCode: "集团标识-mock",
        oemId: "厂商标识ID-mock",
        groupId: "集团标识ID-mock",
        repairDeliveryDate: '2019-01-01'
      },
      {
        repairOrderId: "估价单ID-mock",
        repairOrderCode: "估价单号-mock	",
        carLicense: "车牌号-mock",
        oemCode: "厂商标识-mock",
        groupCode: "集团标识-mock",
        oemId: "厂商标识ID-mock",
        groupId: "集团标识ID-mock",
        repairDeliveryDate: '2019-02-02'
      },
      {
        repairOrderId: "估价单ID-mock",
        repairOrderCode: "估价单号-mock	",
        carLicense: "车牌号-mock",
        oemCode: "厂商标识-mock",
        groupCode: "集团标识-mock",
        oemId: "厂商标识ID-mock",
        groupId: "集团标识ID-mock",
        repairDeliveryDate: '2019-03-03'
      }

    ]
  }
})

const allData2 = Mock.mock({
  seRepairReportQueryListDetail: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 1,
    msg: '',
    'rows|5': [{
      repairorderid: "1",
      repairordercode: "1",
      carlicense: "1",
      oemcode: "1",
      groupcode: "1",
      oemid: "1",
      groupid: "1",
      workbalancedetailwi: {
        dlrShortName: "1",
        repairOrderCode: "1",
        repairOrderId: "1",
        isFirst: "1",
        saName: "1",
        custName: "1",
        custTel: "1",
        carLicense: "1",
        carTypeCode: "1",
        vin: "1",
        carColorName: "1",
        addr: "1",
        mileage: "1",
        csDesc: "1",
        disposeInfo: "1",
        repairDesc: "1",
        dealRelustDesc: "1",
        repairMan: "1",
        repairTel: "1",
        repairTime: "1",
        buyDate: "1",
        trunRepairDate: "1",
        preGetDate: "1",
        repairFinishDate: "1",
        qualityCheckMan: "1",
        qualityFinishDate: "1",
        repairDeliveryDate: "2019-01-01",
        wiAmountSum: "1",
        partAmountSum: "1",
        otherAmountSum: "1",
        amountSum: "1",
        wiDueAmount: "1",
        partDueAmount: "1",
        otherDueAmount: "1",
        dueAmount: "1",
        factAmount: "1",
        disparityPrice: "1",
        saleWorkQty: "1",
        wiPrice: "1",
        wiAmount: "1",
        wiPreAmoun: "1",
        gatheringEmpName: "1",
        wiCode: "1",
        wiName: "1",
        repairGroup: "1",
        repairName: "1",
        checkEmpName: "1",
        checkDate: "1",
        repairTypeName: "1",
        payKindName: "1",
        businessTypeName: "1",
        note: "1"
      },

      workbalancedetailpart: {
        dlrShortName: "1",
        repairOrderCode: "1",
        repairOrderId: "1",
        isFirst: "1",
        saName: "1",
        custName: "1",
        custTel: "1",
        carLicense: "1",
        carTypeCode: "1",
        vin: "1",
        carColorName: "1",
        addr: "1",
        mileage: "1",
        csDesc: "1",
        disposeInfo: "1",
        repairDesc: "1",
        dealRelustDesc: "1",
        repairMan: "1",
        repairTel: "1",
        buyDate: "1",
        repairTime: "1",
        trunRepairDate: "1",
        preGetDate: "1",
        repairFinishDate: "1",
        qualityCheckMan: "1",
        qualityFinishDate: "1",
        repairDeliveryDate: "2019-01-01",
        wiAmountSum: "1",
        partAmountSum: "1",
        otherAmountSum: "1",
        amountSum: "1",
        wiDueAmount: "1",
        partDueAmount: "1",
        otherDueAmount: "1",
        dueAmount: "1",
        factAmount: "1",
        disparityPrice: "1",
        gatheringEmpName: "1",
        partNo: "1",
        partName: "1",
        costAmount: "1",
        priceAmount: "1",
        partPrice: "1",
        partQty: "1",
        outQty: "1",
        pickQty: "1",
        returnQty: "1",
        partAmount: "1",
        changePart: "1",
        partPropertyName: "1",
        partTypeName: "1",
        repairTypeName: "1",
        payKindName: "1",
        businessTypeName: "1",
        pickingPersonName: "1",
        note: "1",
        oemCode: "1",
        groupCode: "1",
        oemId: "1",
        groupId: "1"
      },

    }]

  }
})


export default [
  {
    url: apiSeReport.seRepairReportQueryListFindAll.APIUrl + CH + 'v=' + apiSeReport.seRepairReportQueryListFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: allData1
      }
    }
  },
  {
    url: apiSeReport.seRepairReportQueryListDetail.APIUrl + CH + 'v=' + apiSeReport.seRepairReportQueryListDetail.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: allData2
      }
    }
  }

]
