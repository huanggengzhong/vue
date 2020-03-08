import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'
const seBugCauseCodegetList = Mock.mock({

  seBugCauseCodegetList: {
    result: '1',
    pageindex: '',
    pages: '',
    records: '',
    msg: '',
    'rows|30': [{
      faultPartCode: '引擎机械',
      carBrandCode: '1',
      faultPartType: 'EB',
      symptomReasonCode: 'H1',
      symptomReasonName: '60天或3000公里内严重故障换车'
    }]
  }
})

export default [
  {
    url: seApis.seBugCauseCodegetList.APIUrl + cH + 'v=' + seApis.seBugCauseCodegetList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seBugCauseCodegetList
      }
    }

  }

]
