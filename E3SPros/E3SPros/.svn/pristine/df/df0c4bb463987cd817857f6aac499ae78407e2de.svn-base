import Mock from 'mockjs'
import {
  apiGuarantee
} from '../../../../src/api/graphQLApiList/se'
const cH = '/'




const queryData = Mock.mock({
  seDbEngineCarTypeQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 1,
    msg: 'success',
    'rows|9': [{
      engineCarTypeId: 'engineCarTypeId',
      carSeriesCode: 'carSeriesCode',
      carSeriesCn: 'carSeriesCn',
      carTypeCode: 'carTypeCode',
      engineType: 'engineType',
      engineTypeCn: 'engineTypeCn',
      createdName: 'createdName',
      createdDate: 'createdDate',
      modifier: 'modifier',
      lastUpdatedDate: 'lastUpdatedDate',
      oemCode: 'oemCode',
      groupCode: 'groupCode',
      updateControlId: 'updateControlId'
    }]
  }

})

const saveData = Mock.mock({
  SeDbEngineCarTypeMutationSave: {
      result: '1',
      msg: 'success'

  }
})

const deleteData = Mock.mock({
  seDbEngineCarTypeMutationDelete: {
    result: '1',
    msg: 'success'
}
})


export default [
  {
  //发动机公告车型维护-查询
  url: apiGuarantee.seDbEngineCarTypeQueryFindAll.APIUrl + cH + 'v=' + apiGuarantee.seDbEngineCarTypeQueryFindAll.ServiceCode,
  type: 'post',
  response: config => {
    return {
      result: '1',
      msg: 'success',
      data: queryData
    }
  }
},

{
  // 发动机公告车型维护-保存
  url: apiGuarantee.SeDbEngineCarTypeMutationSave.APIUrl + cH + 'v=' + apiGuarantee.SeDbEngineCarTypeMutationSave.ServiceCode,
  type: 'post',
  response: config => {
      return {
          result: '1',
          msg: 'success',
          data: saveData
      }
  }
},


{
  //发动机公告车型维护-删除
  url: apiGuarantee.seDbEngineCarTypeMutationDelete.APIUrl + cH + 'v=' + apiGuarantee.seDbEngineCarTypeMutationDelete.ServiceCode,
  type: 'post',
  response: config => {
    return {
      result: '1',
      msg: 'success',
      data: deleteData
    }
  }
},



]
