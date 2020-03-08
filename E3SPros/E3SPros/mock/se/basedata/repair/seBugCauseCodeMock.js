import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'
const seDbCsCtQueryFindAll = Mock.mock({

  seDbCsCtQueryFindAll: {
    result: '1',
    pageindex: '',
    pages: '',
    records: '',
    msg: '',
    'rows|30': [{
      carBrandCn: '东风日产',
      carBrandCode: '1',
      csCtType: 'EB',
      csCtCode: 'H1',
      csCtMark: '60天或3000公里内严重故障换车',
      remark: '换车原因',
      csCtId: '',
      updateControlId: ''
    }]
  }
})

const seDbCsCtMutationSave = Mock.mock({
  seDbCsCtMutationSave: {
    result: '1',
    msg: 'success'

  }
})
export default [
  {
    url: seApis.seDbCsCtQueryFindAll.APIUrl + cH + 'v=' + seApis.seDbCsCtQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbCsCtQueryFindAll
      }
    }

  },
  {
    url: seApis.seDbCsCtMutationSave.APIUrl + cH + 'v=' + seApis.seDbCsCtMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbCsCtMutationSave
      }
    }

  }

]
