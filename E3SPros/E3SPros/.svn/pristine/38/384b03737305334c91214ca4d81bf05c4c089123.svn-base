import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
    getParams
} from '@/utils/getParamter'
import { apiSeDbAcce } from '@/api/graphQLApiList/se'

// 精品套餐设置_保存
export function SeDbAcceMutationSave(dataInfo, accePart, acceWi, acceCarType) {
  const queryObj = {
    type: 'mutation',
    typeParam: '($dataInfo: ' + apiSeDbAcce.SeDbAcceMutationSave.InputType + ', $accePart: [' + apiSeDbAcce.SeDbAcceMutationSave.InputType + '], $acceWi: [' + apiSeDbAcce.SeDbAcceMutationSave.InputTyp + '], $acceCarType: [' + apiSeDbAcce.SeDbAcceMutationSave.InputTyp + '])',
    apiUrl: apiSeDbAcce.SeDbAcceMutationSave.APIUrl,
    apiServices: [
      {
        apiServiceCode: apiSeDbAcce.SeDbAcceMutationSave.ServiceCode,
        apiServiceParam: '(dataInfo: $dataInfo, accePart: $accePart, acceWi: $acceWi, acceCarType: $acceCarType)',
        apiQueryRow: [

        ]
      }
    ],
    variables: {
      dataInfo: dataInfo,
      accePart: accePart,
      acceWi: acceWi,
      acceCarType: acceCarType
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

// 精品套餐设置_启用/停用
export function seDbAcceMutationEnable(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam: '($dataInfo: ' + apiSeDbAcce.seDbAcceMutationEnable.InputType + ')',
    apiUrl: apiSeDbAcce.seDbAcceMutationEnable.APIUrl,
    apiServices: [
      {
        apiServiceCode: apiSeDbAcce.seDbAcceMutationEnable.ServiceCode,
        apiServiceParam: '(dataInfo: $dataInfo)',
        apiQueryRow: [

        ]
      }
    ],
    variables: {
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

//精品套餐设置_明细查询
export function seDbAcceQueryDetailFindAll(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + apiSeDbAcce.seDbAcceQueryDetailFindAll.InputType + ')',
    apiUrl: apiSeDbAcce.seDbAcceQueryDetailFindAll.APIUrl,
    apiServices: [
      {
        apiServiceCode: apiSeDbAcce.seDbAcceQueryDetailFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        apiQueryRow: [
          'accePart{accePartId partNo partName partQty partDiscount partSalePrice partPrice total saleUserPartAmount minSaleQty}',
          'acceWi{acceWiId acceCode wiCode wiName wiWorkQty}',
          'acceCarType{acceCarTypeId carBrandCode carBrandCn carSeriesCn carSeriesCode carTypeCode}',
          'updateControlId',
          'oemCode',
          'groupCode',
          'oemId',
          'groupId'
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