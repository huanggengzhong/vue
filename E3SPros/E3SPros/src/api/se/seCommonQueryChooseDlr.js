import request from '@/utils/request'
import { requestGraphQL } from '@/api/commonRequest'
import {
  getParams
} from '@/utils/getParamter'
import { seApis,seComQueChoDlrApi } from '@/api/graphQLApiList/se'

export function doseCommonQueryChooseDlr(pageSize, pageIndex, dataInfo) { // 查询模板明细
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
          '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seComQueChoDlrApi.mdmOrgdlrQueryByPage.InputType + ')',
    // 请求API
    apiUrl: seComQueChoDlrApi.mdmOrgdlrQueryByPage.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seComQueChoDlrApi.mdmOrgdlrQueryByPage.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'aiDlrCode',
          'areaId',
          'areaName',
          'balanceCertificate',
          'balanceDate',
          'belongModule',
          'bigAreaId',
          'bigAreaName',
          'capDlrCode',
          'carBrandCn',
          'carBrandCode',
          'ceo',
          'ceoConn',
          'certificateFlag',
          'cityId',
          'cityName',
          'climateStatus',
          'compName',
          'compNameOld',
          'compSpell',
          'compType',
          'companyAreaCode',
          'companyName',
          'companyUniqueCode',
          'countyId',
          'countyName',
          'coverAcreage',
          'createdDate',
          'createdName',
          'creator',
          'deptModelId',
          'dlr4sLevel',
          'dlrAnswerCode',
          'dlrBussDate',
          'dlrCode',
          'dlrDebutTime',
          'dlrEnName',
          'dlrFullName',
          'dlrHardwareClass',
          'dlrId',
          'dlrLevel',
          'dlrNameOld',
          'dlrReleation',
          'dlrShortName',
          'dlrSort',
          'dlrStatus',
          'dlrStatusName',
          'dlrSymbol',
          'dlrType',
          'fareRange',
          'fax',
          'groupCode',
          'groupId',
          'guno',
          'initDate',
          'initFlag',
          'isEnable',
          'isOkCare',
          'isSecurity',
          'isSend',
          'isSsaFalf',
          'isSsaFast',
          'isSsaSelf',
          'isSsaSpray',
          'isSynchronous',
          'lastUpdatedDate',
          'lat',
          'legalPerson',
          'legalPersonCard',
          'legalPersonCardType',
          'linkAddr',
          'linkDlrId',
          'lng',
          'maintainCertDate',
          'maintainCertificate',
          'managerName',
          'managerTel',
          'mdsBigAreaId',
          'mobile',
          'modifier',
          'modifyName',
          'mycatOpTime',
          'netId',
          'oemCode',
          'oemId',
          'oldDlrId',
          'onLineName',
          'onlineFlag',
          'onlineTime',
          'orderNo',
          'orgType',
          'orgTypeName',
          'pDlrCode',
          'parentDlrId',
          'phone',
          'printTemplet',
          'provinceId',
          'provinceName',
          'pvCompCode',
          'registerMoney',
          'releationStatus',
          'remark',
          'roleId',
          'sAddr',
          'sDlrCode',
          'sMaster',
          'sMasterConn',
          'sRegisterMoney',
          'saleEmail',
          'saleFax',
          'saleTel',
          'sapDlrId',
          'sdpOrgId',
          'sdpUserId',
          'serviceEmail',
          'serviceFax',
          'serviceTel',
          'showAcreage',
          'smallAreaId',
          'smallAreaName',
          'spFlag',
          'tatolAcreage',
          'transportLicense',
          'ucDlrCode',
          'updateControlId',
          'urgSosTel',
          'userName',
          'vDlrCode',
          'wechat',
          'zip'
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

export function doseBuRepairModeImport(pageSize, pageIndex, dataInfo) { // 导入模板
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
            '($pageIndex: Int, $pageSize: Int, $dataInfo: ' + seApis.seBuRepairModeImport.InputType + ')',
    // 请求API
    apiUrl: seApis.seBuRepairModeImport.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuRepairModeImport.ServiceCode,
        apiServiceParam:
                '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'seDbRepairMode'
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

export function doseOrgBrand(dataInfo) { // 组织品牌
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
        '($dataInfo: ' + seApis.OrgBrand.InputType + ')',
    // 请求API
    apiUrl: seApis.OrgBrand.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.OrgBrand.ServiceCode,
        apiServiceParam:
            '(dataInfo: $dataInfo)',
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

export function doseBusStatus(dataInfo) { // 组织品牌
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
          '($dataInfo: ' + seApis.BusStatus.InputType + ')',
    // 请求API
    apiUrl: seApis.BusStatus.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.BusStatus.ServiceCode,
        apiServiceParam:
              '(dataInfo: $dataInfo)',
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

export function doseOrgType(dataInfo) { // 组织品牌
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
            '($dataInfo: ' + seApis.OrgType.InputType + ')',
    // 请求API
    apiUrl: seApis.OrgType.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.OrgType.ServiceCode,
        apiServiceParam:
                '(dataInfo: $dataInfo)',
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

