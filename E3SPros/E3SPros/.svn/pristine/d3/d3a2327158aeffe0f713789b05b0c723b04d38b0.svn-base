import Mock from 'mockjs'
import { seApis } from '../../../src/api/graphQLApiList/se'
const cH = '/'
var cloneObj = function(obj) {
  var newObj = {}
  if (obj instanceof Array) {
    newObj = []
  }
  for (var key in obj) {
    var val = obj[key]
    newObj[key] = typeof val === 'object' ? cloneObj(val) : val
  }
  return newObj
}
const repairGroupQueryData = Mock.mock({
  seDbRepairGroupQueryFindAll: {
    'result': '1',
    'msg': '查询成功！',
    'rows': [{
      'repairGroupId': '1',
      'workGroupCode': '1',
      'groupName': '清洁组',
      'workGroupType': '的萨格类型',
      'isEnable': '2',
      'updateControlId': '1'
    }]
  }
})

const repairGroupQueryTechData = Mock.mock({
  seDbWorkshopEmpQuryFind: {
    'result': '1',
    'msg': '查询成功！',
    'rows': [{
      'workshopEmpId': '1',
      'repairGroupId': '1',
      'empId': '1',
      'updateControlId': '1',
      'empCode': '54353462',
      'empName': '周三',
      'deptName': '五六七',
      'stationName': '一二三',
      'genderName': '轻井泽',
      'isEnableName': '1'
    }]
  }
})

const repairGroupInsert = Mock.mock({
  SeDbRepairGroupMutationSave: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const repairGroupUpdate = Mock.mock({
  SeDbRepairGroupUpdate: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const repairGroupDelete = Mock.mock({
  SeDbRepairGroupDelete: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const repairGroupTechInsert = Mock.mock({
  seDbWorkshopEmpMutationInsert: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const seDbRepairGroupEnable = Mock.mock({
  seDbRepairGroupMutationEnable: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const repairGroupTechDelete = Mock.mock({
  seDbWorkshopEmpMutatinDelete: {
    'result': '1',
    'msg': '保存成功！'
  }
})

const data = Mock.mock({
  ServiceCarSeries002: {
    'result': '1',
    'msg': '查询成功！',
    'rows': [{
      CAR_BRAND_CN: '1',
      CAR_SERIES_CODE: '1',
      CAR_SERIES_CN: '1',
      S_CARSERIES_CODE: '1',
      S_CARSERIES_DESC: '1',
      CAR_BRAND_CODE: '1',
      CAR_SERIES_ID: '1',
      UPDATE_CONTROL_ID: '1',
      OEM_CODE: '1',
      GROUP_CODE: '1',
      OEM_ID: '1',
      GROUP_ID: '1'
    },
    {
      CAR_BRAND_CN: '1',
      CAR_SERIES_CODE: '2',
      CAR_SERIES_CN: '1',
      S_CARSERIES_CODE: '1',
      S_CARSERIES_DESC: '1',
      CAR_BRAND_CODE: '1',
      CAR_SERIES_ID: '1',
      UPDATE_CONTROL_ID: '1',
      OEM_CODE: '1',
      GROUP_CODE: '1',
      OEM_ID: '1',
      GROUP_ID: '1'
    },
    {
      CAR_BRAND_CN: '1',
      CAR_SERIES_CODE: '3',
      CAR_SERIES_CN: '1',
      S_CARSERIES_CODE: '1',
      S_CARSERIES_DESC: '1',
      CAR_BRAND_CODE: '1',
      CAR_SERIES_ID: '1',
      UPDATE_CONTROL_ID: '1',
      OEM_CODE: '1',
      GROUP_CODE: '1',
      OEM_ID: '1',
      GROUP_ID: '1'
    }
    ]
  }
})

export default [
  {
    url: seApis.SeDbRepairGroupQuery.APIUrl + cH + 'v=' + seApis.SeDbRepairGroupQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: repairGroupQueryData
      }
    }
  },
  {
    url: seApis.seDbRepairGroupEnable.APIUrl + cH + 'v=' + seApis.seDbRepairGroupEnable.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairGroupEnable
      }
    }
  },
  {
    url: seApis.SeDbRepairGroupTechQuery.APIUrl + cH + 'v=' + seApis.SeDbRepairGroupTechQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: repairGroupQueryTechData
      }
    }
  },
  {
    url: seApis.SeDbRepairGroupInsert.APIUrl + cH + 'v=' + seApis.SeDbRepairGroupInsert.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: repairGroupInsert
      }
    }
  },
  {
    url: seApis.SeDbRepairGroupUpdate.APIUrl + cH + 'v=' + seApis.SeDbRepairGroupUpdate.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: repairGroupUpdate
      }
    }
  },
  {
    url: seApis.SeDbRepairGroupDelete.APIUrl + cH + 'v=' + seApis.SeDbRepairGroupDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: repairGroupDelete
      }
    }
  },
  {
    url: seApis.SeDbRepairGroupTechInsert.APIUrl + cH + 'v=' + seApis.SeDbRepairGroupTechInsert.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: repairGroupTechInsert
      }
    }
  },
  {
    url: seApis.SeDbRepairGroupTechDelete.APIUrl + cH + 'v=' + seApis.SeDbRepairGroupTechDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: repairGroupTechDelete
      }
    }
  }
]

