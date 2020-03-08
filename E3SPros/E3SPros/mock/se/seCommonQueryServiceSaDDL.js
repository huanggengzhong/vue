import Mock from 'mockjs'
import { seApis } from '../../src/api/graphQLApiList/se'
import { seCommonQueryServiceSaApi } from '../../src/api/graphQLApiList/se'

const cH = '/'

const seCommonQueryServiceSa = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seCommonQueryServiceSa: {
      'result': '1',
      'rows': [
        {
          empId: '1',
          deptId: '1',
          empName: '周三',
          stationName: '开发岗',
          stationId: '1',
          positionCode: '1',
          positionName: '1',
          isEnable: '1',
          dlrId: '1',
          oemCode: '1',
          groupCode: '1',
          oemId: '1',
          groupId: '1'
        },
        {
          empId: '2',
          deptId: '1',
          empName: '羊羊羊',
          stationName: '开发岗',
          stationId: '1',
          positionCode: '1',
          positionName: '1',
          isEnable: '1',
          dlrId: '1',
          oemCode: '1',
          groupCode: '1',
          oemId: '1',
          groupId: '1'
        },
        {
          empId: '3',
          deptId: '1',
          empName: '李四',
          stationName: '开发岗',
          stationId: '1',
          positionCode: '1',
          positionName: '1',
          isEnable: '1',
          dlrId: '1',
          oemCode: '1',
          groupCode: '1',
          oemId: '1',
          groupId: '1'
        },
        {
          empId: '6',
          deptId: '1',
          empName: '王五',
          stationName: '开发岗',
          stationId: '1',
          positionCode: '1',
          positionName: '1',
          isEnable: '1',
          dlrId: '1',
          oemCode: '1',
          groupCode: '1',
          oemId: '1',
          groupId: '1'
        }
      ]
    }
  }
})

export default [
  {
    url: seCommonQueryServiceSaApi.seCommonQueryServiceSa.APIUrl + cH + 'v=' + seCommonQueryServiceSaApi.seCommonQueryServiceSa.ServiceCode,
    type: 'post',
    response: config => {
      return seCommonQueryServiceSa
    }
  }
]

