/**
 *  精品套餐设置
 */
import Mock from 'mockjs'
import { apiSeDbAcce } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

//查询主表
const seDbAcceQueryData = Mock.mock({
  seDbAcceQueryFindAllPage: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 30,
    msg: '',
    'rows|30': [{
        acceId: "1",
        acceCode: "JPHM18050001",
        acceName: "ADBJPV001",
        acceAmount: "955.34",
        workWiQty: "0.40",
        isSystemCn: "主机厂定制",
        isSystem: "主机厂定制",
        isEnable: "启用",
        isRepairCn: "是",
        isRecommendCn: "是",
        lowDiscount: "100.00",
        acceDiscount: "100.00",
        updateControlId: "sdvhdivhsidfubh132918e",
        oemCode: "",
        groupCode: "",
        oemId: "",
        groupId: ""
    }]
  }
})

// 精品套餐设置_明细查询
const seDbAcceQueryDetailData = Mock.mock({
    seDbAcceQueryDetailFindAll: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        rows: [{
            accePart: [{
                accePartId: "accePartId",
                partNo: "partNo",
                partName: "partName",
                partQty: "1",//数量
                partDiscount: "90%",//备件折扣
                partSalePrice: "100.00",//销售价
                partPrice: "100.00",//单价
                total: "100.00",//合计
                saleUserPartAmount: "100.00",
                minSaleQty: "1"
            }],
            acceWi: [{
                acceWiId: "acceWiId",
                acceCode: "acceCode",
                wiCode: "wiCode",
                wiName: "wiName",
                wiWorkQty: "wiWorkQty"
            }],
            acceCarType: [{
                acceCarTypeId: "acceCarTypeId",
                carBrandCode: "carBrandCode",
                carBrandCn: "carBrandCn",
                carSeriesCn: "carSeriesCn",
                carSeriesCode: "carSeriesCode",
                carTypeCode: "carTypeCode"
            }],
            updateControlId: "updateControlId",
            oemCode: "oemCode",
            groupCode: "groupCode",
            oemId: "oemId",
            groupId: "groupId"
        }]
    }
})

// 精品套餐设置_保存
const saveData = Mock.mock({
    SeDbAcceMutationSave: {
        result: '1',
        msg: 'success'
    }
})

// 精品套餐设置_停/启用
const seDbEnbleData = Mock.mock({
    seDbAcceMutationEnable: {
        result: '1',
        msg: 'success'
    }
})

export default [
  {
    url: apiSeDbAcce.seDbAcceQueryFindAllPage.APIUrl + cH + 'v=' + apiSeDbAcce.seDbAcceQueryFindAllPage.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbAcceQueryData,
        result: '1'
      }
    }
  },
  {
    url: apiSeDbAcce.seDbAcceQueryDetailFindAll.APIUrl + cH + 'v=' + apiSeDbAcce.seDbAcceQueryDetailFindAll.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbAcceQueryDetailData,
        result: '1'
      }
    }
  },
  {
    url: apiSeDbAcce.SeDbAcceMutationSave.APIUrl + cH + 'v=' + apiSeDbAcce.SeDbAcceMutationSave.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: saveData,
        result: '1'
      }
    }
  },
  {
    url: apiSeDbAcce.seDbAcceMutationEnable.APIUrl + cH + 'v=' + apiSeDbAcce.seDbAcceMutationEnable.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbEnbleData,
        result: '1'
      }
    }
  }
]
