import Mock from 'mockjs'
import { recallApi } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const queryData = Mock.mock({
    seDbRecallCaseQueryListDetail: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        rows: [{
            carBrandCn: "carBrandCn",
            carBrandCode: "1",
            recallCaseTypeName: "recallCaseTypeName",
            recallCaseType: "0",
            operDate: "operDate",
            topic: "topic",
            caseStatus: "caseStatus",
            remark: "remark",
            caseCode: "caseCode",
            operator: "operator",
            pfpCode: "pfpCode",
            faultPartCode: "faultPartCode",
            wiCoef: "wiCoef",
            csCode: "csCode",
            ctCode: "ctCode",
            productFactory: "productFactory",
            aimnum: "aimnum",
            dutyCompTypeName: "dutyCompTypeName",
            dutyCompType: "dutyCompType",
            dutyComp: "dutyComp",
            dutyCompName: "dutyCompName",
            limitDays: "limitDays",
            limitMile: "limitMile",
            estimateCompleteDate: "estimateCompleteDate",
            isRemind: true,
            isschedualmanagement: "isschedualmanagement",
            otherAmount: "otherAmount",
            wiAmount: "wiAmount",
            partAmount: "partAmount",
            recallTypeName: "recallTypeName",
            recallType: "recallType",
            isLinkRecallCase: true,
            seDbRecallCaseVin: [{
                vin: "vin",
                dlrCode: "dlrCode",
                recallCaseVinId: "recallCaseVinId",
                recallCaseId: "recallCaseId",
                dlrId: "dlrId",
                belongDlrShortName: "belongDlrShortName"
            }],
            seDbRecallCaseWi: [{
                recallCaseId: "recallCaseId",
                recallWiId: "recallWiId",
                wiName: "wiName",
                wiCode: "wiCode",
                wiPrice: "wiPrice",
                wiSaleQty: "wiSaleQty",
                wiCoef: "wiCoef",
                wiAmount: "wiAmount",
                linkOrderCode: "linkOrderCode"
            }],

            seDbRecallCasePart: [{
                recallCaseId: "recallCaseId",
                recallPartId: "recallPartId",
                oldLoadPartNo: "oldLoadPartNo",
                partNo: "partNo",
                partName: "partName",
                partQty: "partQty",
                isMust:true,
                partPrice: "partPrice",
                partCoef: "partCoef",
                partAmount: "partAmount",
                linkOrderCode: "linkOrderCode"
            }],

            seDbRecallCaseOther: [{
                recallCaseId: "recallCaseId",
                costTypeCode: "costTypeCode",
                costTypeName: "costTypeName",
                costCoef: "costCoef",
                price: "price",
                otherAmount: "otherAmount",
                linkOrderCode: "linkOrderCode",
                remark: "remark"
            }]

        }]
    }

})

const carData = Mock.mock({
    seDbRecallCaseVinQueryList: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        rows: [{
            vin: "vin",
            engineNo: "engineNo",
            belongDlrShortName: "belongDlrShortName",
            dlrShortName: "dlrShortName",
            recallStatusName: "recallStatusName",
            repairDate: "repairDate"

        }]
    }

})


export default [
    {
        //召回专案车辆查询
        url: recallApi.seDbRecallCaseQueryListDetail.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseQueryListDetail.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: queryData
            }
        }
    },
    {
        //召回专案车辆-查询
        url: recallApi.seDbRecallCaseVinQueryList.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseVinQueryList.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: carData
            }
        }
    }
]