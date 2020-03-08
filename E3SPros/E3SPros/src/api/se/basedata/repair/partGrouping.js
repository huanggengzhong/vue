import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'

//  零件分类设置-主表查询
export function seDbPartGroupingQueryFind(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
        '($dataInfo: ' + seApis.seDbPartGroupingQueryFind.InputType + ')',
    apiUrl: seApis.seDbPartGroupingQueryFind.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbPartGroupingQueryFind.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo)',

        apiQueryRow: []
      }
    ],

    variables: {
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

// 零件分类设置-保存
export function seDbPartGroupingSave(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbPartGroupingSave.InputType + ')',
    apiUrl: seApis.seDbPartGroupingSave.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbPartGroupingSave.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',

        apiQueryRow: []
      }
    ],

    variables: {
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}

// 零件分类设置删除
export function seDbPartGroupingDelet(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam:
      '($dataInfo: ' + seApis.seDbPartGroupingDelet.InputType + ')',
    apiUrl: seApis.seDbPartGroupingDelet.APIUrl,
    apiServices: [
      {
        apiServiceCode: seApis.seDbPartGroupingDelet.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo)',

        apiQueryRow: []
      }
    ],

    variables: {
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryObj)
  return requestGraphQL(paramD)
}
