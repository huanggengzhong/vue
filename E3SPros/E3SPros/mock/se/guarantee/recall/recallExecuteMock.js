import Mock from 'mockjs'
import { recallApi } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const queryData = Mock.mock({
    seDbRecallCaseQueryExecuteDetail: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        'rows|10': [{
            carBrandCn:"carBrandCn",		
            carBrandCode:"carBrandCode",		
            recallCaseId:"recallCaseId",		
            recallCaseCode:"recallCaseCode",		
            topic:"topic",		
            dlrCode:"dlrCode",		
            dlrShortName:"dlrShortName",		
            aimnum:"aimnum",		
            finish:"finish",		
            finishRate:"finishRate",		
            warrAmount:"warrAmount",	
            totalCount:"totalCount",
            totalAmount:'totalAmount'
        }]
    }

})

export default [
    {
        //召回专案执行情况明细
        url: recallApi.seDbRecallCaseQueryExecuteDetail.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseQueryExecuteDetail.ServiceCode,
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