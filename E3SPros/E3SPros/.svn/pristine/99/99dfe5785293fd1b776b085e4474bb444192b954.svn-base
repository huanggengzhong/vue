import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
    getParams
} from '@/utils/getParamter'
import { recallApi } from '@/api/graphQLApiList/se'

//召回专案设定-查询主表
export function seDbRecallCaseQueryListForPage(pageSize, pageIndex, dataInfo, flag) {
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + recallApi.seDbRecallCaseQueryListForPage.InputType + ',$flag: String)',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseQueryListForPage.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseQueryListForPage.ServiceCode,
                apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize, flag: $flag)',
                // 表格中台返回网格的字段
                apiQueryRow: [
                    'aimnum',
                    'belongDlrShortName',
                    'carBrandCn',
                    'carBrandCode',
                    'carTypeCode',
                    'caseStatus',
                    'createdDate',
                    'createdName',
                    'creator',
                    'csCode',
                    'ctCode',
                    'dlrShortName',
                    'dutyCompCode',
                    'dutyCompName',
                    'dutyCompType',
                    'dutyCompTypeName',
                    'estimateCompleteDate',
                    'faultPartCode',
                    'finish',
                    'finishRate',
                    'finishState',
                    'groupCode',
                    'groupId',
                    'invoiceDate',
                    'isEnable',
                    'isPublish',
                    'isRemind',
                    'isSchedualManagement',
                    'isStop',
                    'lastUpdatedDate',
                    'limitDays',
                    'limitMile',
                    'modifier',
                    'modifyName',
                    'mycatOpTime',
                    'oemCode',
                    'oemId',
                    'offlineDate',
                    'operDate',
                    'operator',
                    'opratePlaceName',
                    'otherAmount',
                    'partAmount',
                    'pfpCode',
                    'productFactory',
                    'prrsonName',
                    'recallCaseCode',
                    'recallCaseFlag',
                    'recallCaseId',
                    'recallCaseType',
                    'recallCaseTypeName',
                    'recallStatusName',
                    'recallType',
                    'releaseDate',
                    'releaseMan',
                    'remark',
                    'repairDate',
                    'reserveDate',
                    'sdpOrgId',
                    'sdpUserId',
                    'seqRecallCaseId',
                    'stopDate',
                    'stopMan',
                    'tastState',
                    'topic',
                    'totalAmount',
                    'totalCount',
                    'updateControlId',
                    'vin',
                    'warrAmount',
                    'wiAmount',
                    'wiCoef',
                    'wiOrderNo'
                ]
            }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
            pageSize: pageSize,
            pageIndex: pageIndex,
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: dataInfo,
            flag: flag
        }
    }
    var paramD = getParams(queryObj)
    return requestGraphQL(paramD)
}

//召回专案设定-保存
export function dorecallFindingSettingSave(dataInfo) {
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'mutation',
        typeParam:
            '($dataInfo: ' + recallApi.seDbRecallCaseMutationSave.InputType + ')',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseMutationSave.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseMutationSave.ServiceCode,
                apiServiceParam: '(dataInfo: $dataInfo)',
                // 表格中台返回网格的字段
                apiQueryRow: []
            }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: dataInfo
        }
    }
    var paramD = getParams(queryObj)
    return requestGraphQL(paramD)
}

//召回专案-发布
export function doseDbRecallCaseMutationSaveIsPublish(dataInfo) {
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'mutation',
        typeParam:
            '($dataInfo: ' + recallApi.seDbRecallCaseMutationSaveIsPublish.InputType + ')',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseMutationSaveIsPublish.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseMutationSaveIsPublish.ServiceCode,
                apiServiceParam: '(dataInfo: $dataInfo)',
                // 表格中台返回网格的字段
                apiQueryRow: []
            }
        ],
        // 条件/实体参数（变量），根据typeParam中的定义配置
        variables: {
            // 当前中台使用的名称有dataInfo、info，具体查看API文档
            dataInfo: dataInfo
        }
    }
    var paramD = getParams(queryObj)
    return requestGraphQL(paramD)
}

//召回专案设定-vin码查询
export function doseDbRecallCaseVinQueryListForPage(pageSize, pageIndex, dataInfo) {
    const queryObj = {
        // 请求类型&参数 保存mutation  查询query
        type: 'query',
        typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + recallApi.seDbRecallCaseVinQueryListForPage.InputType + ')',
        // 请求API
        apiUrl: recallApi.seDbRecallCaseVinQueryListForPage.APIUrl,
        // 需要调用的API服务配置
        apiServices: [
            {
                // API服务编码&参数
                apiServiceCode: recallApi.seDbRecallCaseVinQueryListForPage.ServiceCode,
                apiServiceParam:
                    '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
                // 表格中台返回网格的字段
                apiQueryRow: [
                    "vin",
                    "dlrCode",
                    "belongDlrShortName"
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