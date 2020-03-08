import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
    getParams
} from '@/utils/getParamter'
import { recallApi } from '@/api/graphQLApiList/se'

export function seDbRecallCaseVinMutationSaveTastAllocation(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam: '($dataInfo: ' + recallApi.seDbRecallCaseVinMutationSaveTastAllocation.InputType + ')',
    apiUrl: recallApi.seDbRecallCaseVinMutationSaveTastAllocation.APIUrl,
    apiServices: [
      {
        apiServiceCode: recallApi.seDbRecallCaseVinMutationSaveTastAllocation.ServiceCode,
        apiServiceParam: '(dataInfo: $dataInfo)',
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