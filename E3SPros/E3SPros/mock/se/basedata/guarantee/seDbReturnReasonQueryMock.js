import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

// 查询
const seDbReturnReasonQueryFindAll = Mock.mock({
  seDbReturnReasonQueryFindAll: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '30',
    msg: '',
    'rows|30': [{
      returnReasonCodeId: '123',
      replyReasonCode: 'U123',
      replyReasonContent: '对应派工单号在系统中尚不存在',
      remark: '2018-创建',
      adaptType: '',
      replyReasonType: '',
      adaptTypeDesc: '免费保养',
      replyReasonTypeDesc: '退回',
      carBrandCode: '1',
      isEnable: '',
      isEnableName: '',
      updateControlId: '123'
    }]
  }
})

const seDbReturnReasonMutationSave = Mock.mock({
  seDbReturnReasonMutationSave: {
    result: '1',
    msg: 'success'

  }
})

const seDbReturnReasonDelete = Mock.mock({
  seDbReturnReasonDelete: {
    result: '1',
    msg: 'success'

  }
})
export default [
  {
    url: seApis.seDbReturnReasonQueryFindAll.APIUrl + cH + 'v=' + seApis.seDbReturnReasonQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: seDbReturnReasonQueryFindAll,
        result: '1'
      }
    }
  },
  {
    url: seApis.seDbReturnReasonMutationSave.APIUrl + cH + 'v=' + seApis.seDbReturnReasonMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: seDbReturnReasonMutationSave,
        result: '1'
      }
    }
  },
  {
    url: seApis.seDbReturnReasonDelete.APIUrl + cH + 'v=' + seApis.seDbReturnReasonDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: seDbReturnReasonDelete,
        result: '1'
      }
    }
  }
]
