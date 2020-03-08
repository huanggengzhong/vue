
import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
    getParams
} from '@/utils/getParamter'
import { recallApi } from '@/api/graphQLApiList/se'

export function dorecallSchedule(pageSize, pageIndex, dataInfo) { // 召回专案进度查询
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + recallApi.seDbRecallCaseQuerySchedule.InputType + ')',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseQuerySchedule.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseQuerySchedule.ServiceCode,
                apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
                // 表格中台返回网格的字段
                apiQueryRow: [
                    'carBrandCode',		
                    'carBrandCn',		
                    'recallCaseId',		
                    'recallCaseCode',		
                    'dutyCompTypeName',		
                    'vin',		
                    'carTypeCode',		
                    'offlineDate',		
                    'invoiceDate',		
                    'reserveDate',		
                    'repairDate',		
                    'recallStatusName',		
                    'dlrShortName',		
                    'belongDlrShortName'		
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