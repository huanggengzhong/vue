import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'
const data = Mock.mock({

  seDbFaultPartQueryFindAll: {
    result: '1',
    pageindex: '',
    pages: '',
    records: '',
    msg: '',
    'rows|30': [{
      faultPlaceId: 'true',
      faultPartName: '车胎问题',
      isenable: '新逍客',
      updatecontrolid: 'DFL7200VBNL2-FJE',
      faultPartCode: 'BDBALJWA36EXA',
      remark: 'success',
      oemcode: '12313',
      groupcode: '1231',
      oemid: '1312',
      groupid: '31312'
    }]
  }
})

const seDbFaultPartSave = Mock.mock({
  SeDbWiPartMutationSave: {
    result: '1',
    msg: 'success'

  }
})

export default [
  {
    url: seApis.seDbFaultPartQueryFindAll.APIUrl + cH + 'v=' + seApis.seDbFaultPartQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: data
      }
    }

  },
  {
    url: seApis.seDbFaultPartMutationSave.APIUrl + cH + 'v=' + seApis.seDbFaultPartMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbFaultPartSave
      }
    }
  }
]
