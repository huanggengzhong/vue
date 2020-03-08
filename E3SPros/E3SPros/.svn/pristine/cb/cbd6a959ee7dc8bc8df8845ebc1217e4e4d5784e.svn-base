import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {getParams} from '@/utils/getParamter'
import { apiSeRepairUnionReportQuery,
  apiBuRepairHistoryQuery,
  apiRepairReportQueryListDetail} from '@/api/graphQLApiList/se'

export function seRepairReportQueryRepairUnionReport(dataInfo) { 
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.InputType + ')',
    // 请求API
    apiUrl: apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'dlrShortName    ',
          'repairOrderCode    ',
          'vin    ',
          'carLicense    ',
          'custName    ',
          'custTel    ',
          'carBrandCn    ',
          'engineNo    ',
          'carSeriesName    ',
          'carTypeCode    ',
          'mileage    ',
          'saleDate    ',
          'isAccidentCn    ',
          'repairMan    ',
          'repairTel    ',
          'repairTime    ',
          'repairStatue    ',
          'deliveryDate    ',
          'mainPayType    ',
          'gatherState    ',
          'balanceDate    ',
          'workitemFeeHj    ',
          'partFeeHj    ',
          'otherFeeHj    ',
          'sFeeAmount    ',
          'sWorkitemFee    ',
          'sPartFee    ',
          'sOtherFee    ',
          'sOldprice    ',
          'sRealrebatefare    ',
          'sRealincomefare    ',
          'sRunupAmount    ',
          'saName    ',
          'gatheringEmpName    ',
          'cancelReason    ',
          'disposeInfo    ',
          'csDesc    ',
          'recommendItem    '
        ]
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

export function seBuRepairHistoryQuery(dataInfo) { 
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiBuRepairHistoryQuery.seBuRepairHistoryQuery.InputType + ')',
    // 请求API
    apiUrl: apiBuRepairHistoryQuery.seBuRepairHistoryQuery.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiBuRepairHistoryQuery.seBuRepairHistoryQuery.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'dlrShortName    ',
          'repairOrderCode    ',
          'repairTime    ',
          'deliveryDate    ',
          'mileage    ',
          'repairMan    ',
          'repairTel    ',
          'saName    ',
          'runupAmount    ',
          'csDesc    '
        ]
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

export function seRepairReportQueryListDetail(dataInfo) { 
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' + apiRepairReportQueryListDetail.seRepairReportQueryList.InputType + ')',
    // 请求API
    apiUrl: apiRepairReportQueryListDetail.seRepairReportQueryList.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiRepairReportQueryListDetail.seRepairReportQueryList.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',
        // 返回的字段
        apiQueryRow: [
           'wiCode',
          'wiName',
      'businessTypeName',
      'repairStatusName',
      'payKindName',
      'repairTypeName',
      'saleWorkQty',
      'wiWorkQty',
      'wiPrice',
      'wiAmount',
      'wiPreAmount',
      'repairGroupName',
      'repairEmpName',
      'repairOrderId',
      'repairWiId',
      'repairWorkName',
      'oldprice',
          [
             'partNo',
        'partName',
        'partDiscount',
        'payKindName',
        'businessTypeName',
        'repairTypeName',
        'partQty',
        'outQty',
        'partPrice',
        'partAmount',
        'prePartAmount',
        'returnQty',
        'unit',
        'partTypeName',
        'stockSymbol',
        'partDiscount',
        'repairOrderId',
        'repairPartId'
          ],
            [
               'dlrShortName',
        'repairOrderId',
        'repairOrderCode',
        'dlrCustNo',
        'custName',
        'carId',
        'vin',
        'carTypeCode',
        'remark',
        'trunRepairDate',
        'deliveryDate',
        'repairTime',
        'repairTel',
        'preGetDate',
        'mileage',
        'csDesc',
        'dealRelustDesc',
        'disposeInfo',
        'carLicense',
        'wiAmount',
        'partAmount',
        'otherAmount',
        'repairOrderAmount',
        'saName',
        'recommendItem',
        'isFirst',
        'repairFinishDate',
        'serviceTel',
        'dlrId',
        'carColorName',
        'carInColorName',
        'oemCode',
        'groupCode',
        'oemId',
        'groupId'  
          ],
          [
            'itemName',
        'rrpairStatusName',
        'workWiQty',
        'repairGroupName',
        'repairEmpName',
        'workStationName',
        'repairOrderId',
        'wiCode'
          ],
          [
             'partNo',
        'partName',
        'partDiscount',
        'payKind',
        'businessType',
        'repairTypeCode',
        'partQty',
        'outQty',
        'partPrice',
        'partAmount',
        'prePartAmount',
        'returnQty',
        'unit',
        'partTypeName',
        'stockSymbol',
        'partDiscount',
        'repairOrderId'
          ],
          [
            'balanceOrderCode',
        'balanceDate',
        'receiptsAmount',
        'discountAmount',
        'totalAmount',
        'payType',
        'gatheringEmpName',
        'repairOrderId',
        'wiAmount',
        'runupAmount',
        'gatheringEmpName',
        'cashAmount',
        'bankAmount',
        'icCardNo',
        'pvPoint',
        'pvRealPoint',
        'pvVirtualPoint',
        'dlrPoint',
        'cardAmount'
          ],
          [
             'balanceOrderCode',
        'balanceDate',
        'receiptsAmount',
        'totalAmount',
        'payTypeCn',
        'gatheringEmpName',
        'cancelReason',
        'cancelDate',
        'cancelEmpName',
        'repairOrderId'
          ],
          [
             'outStoreCode',
        'outStoreDate',
        'partNo',
        'partName',
        'partTypeName',
        'unit',
        'placeCode',
        'empName',
        'outStoreQty',
        'partPrice',
        'partAmount',
        'prePartAmount',
        'payKindName',
        'businessTypeName',
        'repairTypeName',
        'repairOrderId'
          ],
          [
            'relateOrderCode',
        'outStoreDate',
        'partNo',
        'partName',
        'partTypeName',
        'unit',
        'placeCode',
        'empName',
        'outStoreQty',
        'partPrice',
        'partAmount',
        'prePartAmount',
        'payKindName',
        'businessTypeName',
        'repairTypeName',
        'repairOrderId'
          ],
          [
             'dlrCustNo',
        'custName',
        'phone',
        'genderName',
        'birthDate',
        'credNo',
        'addr',
        'vin',
        'mail'
          ],
          [
             'repairOrderId',
        'groupName',
        'repairOrderCode',
        'cleanFinishDate',
        'qualityFinishDate',
        'qualityCheckMan',
        'cleanEmpName',
          ],
          [
             'dlrCustNo',
        'carTypeCode',
        'carSeriesCode',
        'custName',
        'genderName',
        'phone',
        'addr',
        'credNo',
        'birthDate',
        'dlrId',
        'dlrCode',
        'vin',
        'carId',
        'carBrandCode',
        'carBrandCn',
        'engineNo',
        'tranType',
        'underpanNo',
        'carKeyNo',
        'carColorName',
        'carSeriesName',
        'carTypeName',
        'saleDate',
        'dlrShortName',
        'buyCaruseName',
        'carInColorName',
        'mail'
          ],
          [
             'repairOtherId',
        'repairOrderId',
        'repairOrderCode',
        'recallCaseType',
        'recallCaseCode',
        'servicePackageCode',
        'otherAmountId',
        'otherAmountType',
        'costTypeName',
        'otherAmount',
        'payKind',
        'businessType',
        'dutyMan',
        'dutyEmpId',
        'remark'
          ],
        ]
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

