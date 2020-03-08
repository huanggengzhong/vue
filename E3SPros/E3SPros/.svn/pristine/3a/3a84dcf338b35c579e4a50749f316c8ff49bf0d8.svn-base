// import request from '@/utils/request'
// import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import { getParams } from '@/utils/getParamter'
import { paApis } from '@/api/graphQLApiList/pa'

export function doQueryList(pageIndex, pageSize, dataInfo) {
  // 查询工时备件关联列表
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($dataInfo: ' +
      paApis.paDbPurCalendModuleQueryFindAll.InputType + ',$pageIndex: Int, $pageSize: Int' +
      ')',
    // 请求API
    apiUrl: paApis.paDbPurCalendModuleQueryFindAll.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: paApis.paDbPurCalendModuleQueryFindAll.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'column1',
          'column10',
          'column2',
          'column3',
          'column4',
          'column5',
          'column6',
          'column7',
          'column8',
          'column9',
          'createdDate',
          'createdName',
          'creator',
          'date1',
          'date10',
          'date11',
          'date12',
          'date13',
          'date14',
          'date15',
          'date16',
          'date17',
          'date18',
          'date19',
          'date2',
          'date20',
          'date21',
          'date22',
          'date23',
          'date25',
          'date26',
          'date27',
          'date28',
          'date29',
          'date3',
          'date30',
          'date31',
          'date4',
          'date5',
          'date6',
          'date7',
          'date8',
          'date9',
          'groupCode',
          'groupId',
          'isEnable',
          'isSystem',
          'lastUpdatedDate',
          'modifier',
          'modifyName',
          'moduleId',
          'moduleName',
          'mycatOpTime',
          'oemCode',
          'oemId',
          'orderNo',
          'partBrandCode',
          'sdpOrgId',
          'sdpUserId',
          'updateControlId',
          'yearMonths'
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
