import request from '@/utils/request'
import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis } from '@/api/graphQLApiList/se'
export function doQueryList(pageSize, pageIndex, dataInfo) { // 查询车辆信息列表
  const queryobj = {
    // 请求类型&参数 保存mutation 查询query
    type: 'query',
    typeParam:
    '($pageInde:Int,$pageSize:Int,$dataInfo:' + seApis.mdmCarQueryFindAll.InputType + ')',
    apiUrl: seApis.mdmCarQueryFindAll.APIUrl,
    apiServices: [
      {

        // API服务编码&参数
        apiServiceCode: seApis.mdmCarQueryFindAll.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'carBrandCode',
          'carBrandName',
          'vin',
          'carLicenseFirstsect',
          'carLicense',
          'carLicenseNo',
          'carColorId',
          'carColorName',
          'carSeriesCode',
          'carSeriesCn',
          'smallCarTypeCode',
          'smallCarTypeCn',
          'carIncolorId',
          'carIncolorName',
          'cdu',
          'engineCode',
          'engineNo',
          'batteryNumber',
          'batteryTypeNo',
          'screenNo',
          'carKeyNo',
          'saleDlrCode',
          'saleDlrShortName',
          'invoiceDate',
          'offlineDate',
          'batteryEnduranceMileage',
          'qualifiedCertNo',
          'buyCaruseCode',
          'buyCaruseName '
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

export function getQueryMock(data) {
  var requireQuery = data.query
  // 截取输入类型
  var str1 = requireQuery.substring(data.query.indexOf('{'))
  var inputType = str1.substring(1, str1.indexOf('('))
  // 截取url
  var url = data.apiUrl
  delete data.apiUrl
  return request({
    url: url + config.cH + 'v=' + inputType,
    method: 'post',
    data
  })
}
