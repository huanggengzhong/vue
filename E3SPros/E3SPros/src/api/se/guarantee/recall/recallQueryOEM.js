import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { recallApi } from '@/api/graphQLApiList/se'

// 召回专案查询明细
export function recallFindingDetail(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + recallApi.recallFindingDetail.InputType + ')',
    apiUrl: recallApi.recallFindingDetail.APIUrl,
    apiServices: [
      {
        apiServiceCode: recallApi.recallFindingDetail.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        apiQueryRow: [
          'carBrandCode',
          'recallType',
          'theme',
          'recallNo',
          'mainKillNo',//主凶件号
          'faultLocation',
          'faultPhenomenonCode',
          'faultCauseCode',
          'productPlant',
          'dutyUnitType',
          'dutyUnitCode',
          'dutyUnitName',
          'warrantyPeriod',
          'mileage',
          'recallType',
          'expectDate',
          'isRemind',
          'recallCarDetail{repairOrderId repairWiId wiCode wiName repairTypeCode repairTypeName saleWorkQty wiWorkQty repairStatus isAdd}',
          'partDetail{partNo partName partQty outQty returnQty repairTypeName isAdd}',
          'otherFeeDetail{repairOrderCode repairMan repairTime mainWorkitem recommendItem maxBusinessType oemCode groupCode oemId groupId dlrId dlrCode}'
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



