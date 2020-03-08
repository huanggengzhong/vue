import Mock from 'mockjs'
import { recallApi } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const queryData = Mock.mock({
    seDbRecallCaseQuerySchedule: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        'rows|10': [{
            carBrandCode:"carBrandCode",		
            carBrandCn:"carBrandCn",		
            recallCaseId:"recallCaseId",		
            recallCaseCode:"recallCaseCode",		
            dutyCompTypeName:"dutyCompTypeName",		
            vin:"vin",		
            carTypeCode:"carTypeCode",	
            offlineDate:"offlineDate",		
            invoiceDate:"invoiceDate",		
            reserveDate:"reserveDate",		
            repairDate:"repairDate",		
            recallStatusName:"recallStatusName",		
            dlrShortName:"dlrShortName",		
            belongDlrShortName:"belongDlrShortName"	
        }]
    }

})

export default [
    {
        //召回专案进度查询
        url: recallApi.seDbRecallCaseQuerySchedule.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseQuerySchedule.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: queryData
            }
        }
    }
]