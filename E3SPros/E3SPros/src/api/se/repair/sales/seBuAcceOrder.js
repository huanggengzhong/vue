import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { apiSeBuAcceOrder } from '@/api/graphQLApiList/se'

// 召回专案查询明细
export function SeBuAccePartUpdateQuery(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + apiSeBuAcceOrder.SeBuAccePartUpdateQuery.InputType + ')',
    apiUrl: apiSeBuAcceOrder.SeBuAccePartUpdateQuery.APIUrl,
    apiServices: [
      {
        apiServiceCode: apiSeBuAcceOrder.SeBuAccePartUpdateQuery.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        apiQueryRow: [
          'carLicense',
          'carBrandCn',
          'engineNo',
          'carSeriesName',
          'carColorName',
          'carTypeCode',
          'custName',
          'phone',
          'custName',
          'phone',
          'addr',
          'partAmount{accePartId acceOrderCode saleEmp subDueAmount partAcceQty outAcceOutQty partNo partName partPrice partQty outQty partAmount partDiscount preAmount isEnable dlrLeastSaleQty remark oemCode groupCode oemId groupId}'
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

//制作精品销售单-作废
export function seBuAcceOrderMutationCancel(dataInfo) {
  const queryObj = {
    type: 'mutation',
    typeParam: '($dataInfo: ' + apiSeBuAcceOrder.seBuAcceOrderMutationCancel.InputType + ')',
    apiUrl: apiSeBuAcceOrder.seBuAcceOrderMutationCancel.APIUrl,
    apiServices: [
      {
        apiServiceCode: apiSeBuAcceOrder.seBuAcceOrderMutationCancel.ServiceCode,
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



