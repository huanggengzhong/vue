// import request from '@/utils/request'
// import config from '@/utils/config'
import { requestGraphQL } from '@/api/commonRequest'
import { seApis } from '@/api/graphQLApiList/se'
import { getParams } from '@/utils/getParamter'
export function doQueryList(
  pageSize,
  pageIndex,
  dataInfo,
  dataType = '',
  excelName = '',
  excelSheetName = '',
  tableColumns = null
) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      seApis.seBuRepairOrderQueryMain.InputType +
      ')',
    // 请求API
    apiUrl: seApis.seBuRepairOrderQueryMain.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seBuRepairOrderQueryMain.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: [
          'repairOrderCode',
          'repairOrderId',
          'saEmpId',
          'saName',
          'mileage',
          'repairTime',
          'preGetDate',
          'repairOrderStatus',
          'repairStatusName',
          'isGather',
          'isGatherName',
          'vin',
          'carId',
          'carLicense',
          'trunRepairDate',
          'custName',
          'custTel',
          'repairMan',
          'isAccident',
          'repairTel',
          'lastUpdatedDate',
          'updateControlId',
          'createdDate',
          'engineNo',
          'carBrandCode',
          'cardNo',
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
  if (dataType === 'excel') {
    if (tableColumns == null) tableColumns = []
    var tmpCols = tableColumns // .filter(o => o.hidden !== true)
    // 网格列对象转为excel列对象
    var excelCols = {}
    for (var i = 0; i < tmpCols.length; i++) {
      if (tmpCols[i].property != null)
        excelCols[tmpCols[i].property] = tmpCols[i].label
    }
    // 数据类型
    paramD.dataType = 'excel'
    // excel文件名称
    paramD.excelName = excelName
    // 根据请求API描述excel数据对象
    paramD.excels = [
      {
        // excel sheet名称
        title: excelSheetName,
        // 对应API服务编码
        actionName: queryObj.apiServices.apiServiceCode,
        // excel列
        columns: excelCols
      }
    ]
  }
  return requestGraphQL(paramD)
}
export function doQuerySaList(pageSize, pageIndex, dataInfo) {
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: 'query',
    typeParam:
      '($pageIndex: Int, $pageSize: Int, $dataInfo: ' +
      seApis.seCommonQueryServiceSa.InputType +
      ')',
    // 请求API
    apiUrl: seApis.seCommonQueryServiceSa.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seCommonQueryServiceSa.ServiceCode,
        apiServiceParam:
          '(dataInfo: $dataInfo, pageIndex: $pageIndex, pageSize: $pageSize)',
        // 表格中台返回网格的字段
        apiQueryRow: ['empId', 'empName']
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
export function queryseCustAndCar(dataInfo) {
  const that = this;
  const queryObj = {
    // 请求类型&参数 保存mutation  查询query
    type: "query",
    typeParam:
      "($dataInfo: " + seApis.seCustAndCarQueryBack.InputType + ")",
    // 请求API
    apiUrl: seApis.seCustAndCarQueryBack.APIUrl,
    // 需要调用的API服务配置
    apiServices: [
      {
        // API服务编码&参数
        apiServiceCode: seApis.seCustAndCarQueryBack.ServiceCode,
        apiServiceParam: "(dataInfo: $dataInfo)",
        // 表格中台返回网格的字段
        apiQueryRow: [
          "dlrCustNo",
          "carId",
          "dlrId",
          "dlrCustNo",
          "carOwner.carOwnerId",
          "carOwner.dlrCustNo",
          "carOwner.weiCode",
          "carOwner.custName",
          "carOwner.phone",
          "carOwner.custClassCode",
          "carOwner.addr",
          "carOwner.mileage",
          "carOwner.remark",
          "carOwner.complain",
          "carOwner.birthDate",
          "carUser.dlrCustNo",
          "carUser.custName",
          "carUser.phone",
          "carUser.addr",
          "carInfo.vin",
          "carInfo.carLicense",
          "carInfo.carBrandCode",
          "carInfo.carBrandCn",
          "carInfo.carSeriesCode",
          "carInfo.carSeriesName",
          "carInfo.carTypeCode",
          "carInfo.carTypeName",
          "carInfo.carKeyNo",
          "carInfo.engineNo",
          "carInfo.carColorName",
          "carInfo.deliveryDate",
          "carInfo.invoiceDate",
          "carInfo.saleDate",
          "carInfo.isWaterCar",
          "carInfo.etptCar",
          "carInfo.exchangeFlag",
          "carInfo.mileage",
          "carInfo.custComeTypeName",
          "carInfo.offlineDate"
        ]
      }
    ],
    // 条件/实体参数（变量），根据typeParam中的定义配置
    variables: {
      // 当前中台使用的名称有dataInfo、info，具体查看API文档
      dataInfo: dataInfo
    }
  };
  //转换了中台请求格式数据
  var paramD = getParams(queryObj);
  // 调用中台API方法（可复用）
  return requestGraphQL(paramD)
}

//设置日期时间 
export function getDate() {
  var date = new Date();
  var sDate = '';
  sDate = date.getFullYear() + '-' + ((date.getMonth() + 1 > 9) ? date.getMonth() + 1 : '0' + (date.getMonth() + 1));
  sDate += '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
  return sDate;
}

//返回格式：2019-01-01
export function getDayChange(serverTime, days, months, years) {
  var d = new Date(serverTime);
  var now = new Date(d.getFullYear() + (years ? years : 0), d.getMonth() + (months ? months : 0), d.getDate() + (days ? days : 0))
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  var nowdate = year + "-" + month + "-" + day;
  return nowdate;
}
//返回格式：2019-01-01 12:02
export function getDateChange(serverTime, days, hours) {
  var d = new Date(serverTime);
  var now = new Date(d.getFullYear(), d.getMonth(), d.getDate() + days, d.getHours() + hours, d.getMinutes())
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  var nowdate = year + "-" + month + "-" + day + " " + hour + ":" + minute;
  return nowdate;
}
