
import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { apiSeReport } from '@/api/graphQLApiList/se'

export function doDetailList(pageSize, pageIndex, dataInfo) { // 查询业务权限设置列表       //实际上不应该访问FindAll接口应该访问其他大约十个接口，获取数据
  const queryobj = {
    // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
      '($pageInde:Int,$pageSize:Int,$dataInfo:' + apiSeReport.seBuRepairHistoryQueryDetailFindAll.InputType + ')',
    apiUrl: apiSeReport.seBuRepairHistoryQueryDetailFindAll.APIUrl,
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: apiSeReport.seBuRepairHistoryQueryDetailFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          //工时
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
          //维修备件
          'dtrepairpart',

          //工单信息
          'dtrepairorder',

          //客户车辆信息
          'dtcarcustinfo',

          //其他费用集合
          'dtRepairOther',
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      pageSize: pageSize,
      pageIndex: pageIndex,
      // 当前中台使用的名称有datainfo、info,具体查看API文档
      dataInfo: dataInfo
    }
  }
  var paramD = getParams(queryobj)
  return requestGraphQL(paramD)
}