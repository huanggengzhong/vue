import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'
const seMainCulpritFindAll = Mock.mock({

  seMainCulpritFindAll: {
    result: '1',
    pageindex: '',
    pages: '',
    records: '',
    msg: '',
    'rows|30': [{
      mainCulpritCode: 'R1508',
      mainCulpritName: '底盘防火灾件',
      applicableCar: '所有',
      applicableModels: '所有',
      a1: '启用',
      remark: '20060321日产专案',
      a2: '0',
      a4: '',
      a5: '',
      a6: '',
      a7: ''
    }]
  }
})

const seMainCulpritMutationSave = Mock.mock({
  seMainCulpritMutationSave: {
    result: '1',
    msg: 'success'

  }
})
export default [
  {
    url: seApis.seMainCulpritFindAll.APIUrl + cH + 'v=' + seApis.seMainCulpritFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seMainCulpritFindAll
      }
    }

  },
  {
    url: seApis.seMainCulpritMutationSave.APIUrl + cH + 'v=' + seApis.seMainCulpritMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seMainCulpritMutationSave
      }
    }

  }

]
