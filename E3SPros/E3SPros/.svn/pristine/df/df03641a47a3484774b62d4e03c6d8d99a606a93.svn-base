import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
    getParams
} from '@/utils/getParamter'
import { recallApi } from '@/api/graphQLApiList/se'

export function dorecallExecute(pageSize, pageIndex, dataInfo) { // 召回专案执行情况明细
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + recallApi.seDbRecallCaseQueryExecuteDetail.InputType + ')',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseQueryExecuteDetail.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseQueryExecuteDetail.ServiceCode,
                apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
                // 表格中台返回网格的字段
                apiQueryRow: [
                    'carBrandCn',		
                    'carBrandCode',		
                    'recallCaseId',		
                    'recallCaseCdoe',		
                    'topic',		
                    'dlrCode',		
                    'dlrShortName',		
                    'aimnum',		
                    'finish',		
                    'finishRate',		
                    'warrAmount',
                    'totalCount',
                    'totalAmount'		
                ]
            }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
            pageSize: pageSize,
            pageIndex: pageIndex,
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: dataInfo
        }
    }
    var paramD = getParams(queryObj)
    return requestGraphQL(paramD)
}