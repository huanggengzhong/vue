import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
    getParams
} from '@/utils/getParamter'
import { recallApi } from '@/api/graphQLApiList/se'

export function dorecallFindingDetail(pageSize, pageIndex, dataInfo) { // 召回专案查询-明细
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + recallApi.seDbRecallCaseQueryListDetail.InputType + ')',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseQueryListDetail.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseQueryListDetail.ServiceCode,
                apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
                // 表格中台返回网格的字段
                apiQueryRow: [
                    // 'carBrandCn',	
                    // 'carBrandCode',		
                    // 'recallCaseTypeName',		
                    // 'recallCaseType',		
                    // 'operDate',		
                    // 'topic',		
                    // 'caseStatus',		
                    // 'remark',		
                    // 'caseStatus',		
                    // 'operator',		
                    // 'pfpCode',		
                    // 'faultPartCode',		
                    // 'wiCoef',		
                    // 'csCode',		
                    // 'ctCode',		
                    // 'productFactory',	
                    // 'aimnum',		
                    // 'dutyCompTypeName',		
                    // 'dutyCompType',		
                    // 'dutyComp',		
                    // 'dutyCompName',		
                    // 'limitDays',		
                    // 'limitMile',		
                    // 'estimateCompleteDate',		
                    // 'isRemind',		
                    // 'isschedualmanagement',		
                    // 'otherAmount',		
                    // 'wiAmount',		
                    // 'partAmount',		
                    // 'recallTypeName',		
                    // 'recallType',		
                    // 'isLinkRecallCase',		
                    'seDbRecallCaseVin{vin dlrCode recallCaseVinId recallCaseId dlrId belongDlrShortName}',		
                    'seDbRecallCaseWi{recallCaseId recallWiId wiName wiCode wiPrice}',		
                    'seDbRecallCasePart{recallCaseId recallPartId}',		
                    'seDbRecallCaseOther{recallCaseId costTypeCode}'
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

export function doseDbRecallCaseVinQueryList(pageSize, pageIndex, dataInfo) { // 召回专案车辆查询
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + recallApi.seDbRecallCaseVinQueryList.InputType + ')',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseVinQueryList.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseVinQueryList.ServiceCode,
                apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
                // 表格中台返回网格的字段
                apiQueryRow: [
                    'vin',		
                    'engineNo',		
                    'belongDlrShortName',		
                    'dlrShortName',		
                    'recallStatusName',		
                    'repairDate'		
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

export function doseDbRecallCaseQueryListForPage(pageSize, pageIndex, dataInfo) { // 召回专案查询
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + recallApi.seDbRecallCaseQueryListForPage.InputType + ')',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseQueryListForPage.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseQueryListForPage.ServiceCode,
                apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
                // 表格中台返回网格的字段
                apiQueryRow: [
                    'carBrandCode',		
                    'pfpCode',		
                    'topic',		
                    'faultPartCode',		
                    'caseStatus',		
                    'aimnum',		
                    //'amount',		
                    'recallCaseType'		
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