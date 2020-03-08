/**
 *  制作精品销售单
 */
import Mock from 'mockjs'
import { apiSeBuAcceOrder } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

// 制作精品销售单--查询
const seBuAcceOrderQueryFindAllData = Mock.mock({
    seBuAcceOrderQueryFindAll: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 30,
        msg: 'success',
        'rows|30': [{
          acceOrderId: "1",
          carBrandCode: "JPHM18050001",
          carBrandCn: "ADBJPV001",
          acceOrderCode: "955.34",
          carLicense: "0.40",
          custName: "主机厂定制",
          linkManTel: "主机厂定制",
          saleEmp: "启用",
          acceOrderStateName: "是",
          vin: "是",
          carTypeCode: "100.00",
          buyDate: "100.00",
          sumDueAmount: "100.00",
          factAmount: "",
          preAmount: "",
          isEnable: "1",
          updateControlId: "sdvhdivhsidfubh132918e",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: ""
       }]
    }
})

// 制作精品销售单--查询明细
const seBuAccePartQueryFindAllData = Mock.mock({
    seBuAccePartQueryFindAll: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        'rows|5': [{
          accePartId: "1",
          acceOrderCode: "JPHM18050001",
          partNo: "ADBJPV001",
          partName: "955.34",
          partPrice: "0.40",
          partQty: "主机厂定制",
          partAmount: "主机厂定制",
          partDiscount: "启用",
          preAmount: "是",
          outQty: "是",
          returnQty: "100.00",
          applyReturnQty: "100.00",
          updateControlId: "sdvhdivhsidfubh132918e",
          oemCode: "",
          groupCode: "",
          oemId: "",
          groupId: ""
       }]
    }
})

// 制作精品销售单_修改查询
const SeBuAccePartUpdateQueryData = Mock.mock({
    SeBuAccePartUpdateQuery: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        rows: [{
          vin: "vin",
          carLicense: "carLicense",
          carBrandCn: "",
          engineNo: "",
          carSeriesName: "",
          carColorName: "",
          carTypeCode: "",
          custName: "XXX",
          phone: "11111111",
          addr: "",
          acceOrderCode: "acceOrderCode",
          saleEmp: "saleEmp",
          subDueAmount: "subDueAmount",
          partAcceQty: "1",
          outAcceOutQty: "",
          partAmount: [
            {
              accePartId: "1",
              partNo: "partNo",
              partName: "partName",
              partPrice: 100,
              partQty: 1,
              outQty: 1,
              partAmount: 100,
              partDiscount: 100,
              preAmount: 90,
              isEnable: "1",
              dlrLeastSaleQty: 10,
              remark: "remark",
              oemCode: "",
              groupCode: "",
              oemId: "",
              groupId: ""
            }
          ]
      }]
    }
})

// 制作精品销售单_作废
const seBuAcceOrderMutationCancelData = Mock.mock({
    seBuAcceOrderMutationCancel: {
        result: '1',
        msg: 'success'
    }
})

export default [
  {
    url: apiSeBuAcceOrder.seBuAcceOrderQueryFindAll.APIUrl + cH + 'v=' + apiSeBuAcceOrder.seBuAcceOrderQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seBuAcceOrderQueryFindAllData,
        result: '1'
      }
    }
  },
  {
    url: apiSeBuAcceOrder.seBuAccePartQueryFindAll.APIUrl + cH + 'v=' + apiSeBuAcceOrder.seBuAccePartQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seBuAccePartQueryFindAllData,
        result: '1'
      }
    }
  },
  {
    url: apiSeBuAcceOrder.SeBuAccePartUpdateQuery.APIUrl + cH + 'v=' + apiSeBuAcceOrder.SeBuAccePartUpdateQuery.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: SeBuAccePartUpdateQueryData,
        result: '1'
      }
    }
  },
  {
    url: apiSeBuAcceOrder.seBuAcceOrderMutationCancel.APIUrl + cH + 'v=' + apiSeBuAcceOrder.seBuAcceOrderMutationCancel.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seBuAcceOrderMutationCancelData,
        result: '1'
      }
    }
  }
]
