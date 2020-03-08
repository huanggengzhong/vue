import Mock from 'mockjs'
import { seApis } from '../../src/api/graphQLApiList/se'
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

const data = Mock.mock({
  seDbOpratePlaceQueryFindSmalll: {
    'result': '1',
    'rows': [{
      wiSmallKindId: '1',
      repairSmallKindCode: 'XXX',
      operatePartCode: 'XXX',
      repairSmallKindName: 'XXX',
      operatePartId: 'XXX',
      isSystem: 'XXX',
      dlrCode: 'XXX',
      dlrId: 'XXX',
      oemId: 'XXX',
      oemCode: 'XXX',
      groupId: 'XXX',
      groupCode: 'XXX',
      creator: 'XXX',
      createdDate: 'XXX',
      modifier: 'XXX',
      lastUpdatedDate: 'XXX',
      isEnable: 'XXX',
      updateControlId: 'XXX'
    },
    {
      wiSmallKindId: '2',
      repairSmallKindCode: 'XXX2',
      operatePartCode: 'XXX2',
      repairSmallKindName: 'XXX2',
      operatePartId: 'XXX2',
      isSystem: 'XXX2',
      dlrCode: 'XXX',
      dlrId: 'XXX',
      oemId: 'XXX',
      oemCode: 'XXX',
      groupId: 'XXX',
      groupCode: 'XXX',
      creator: 'XXX',
      createdDate: 'XXX',
      modifier: 'XXX',
      lastUpdatedDate: 'XXX',
      isEnable: 'XXX',
      updateControlId: 'XXX'
    }, 
    {
      wiSmallKindId: '3',
      repairSmallKindCode: 'XXX3',
      operatePartCode: 'XXX3',
      repairSmallKindName: 'XXX3',
      operatePartId: 'XXX3',
      isSystem: 'XXX3',
      dlrCode: 'XXX3',
      dlrId: 'XXX3',
      oemId: 'XXX',
      oemCode: 'XXX',
      groupId: 'XXX',
      groupCode: 'XXX',
      creator: 'XXX',
      createdDate: 'XXX',
      modifier: 'XXX',
      lastUpdatedDate: 'XXX',
      isEnable: 'XXX',
      updateControlId: 'XXX'
    }
    ]
  }
})

export default [
  {
    url: seApis.seDbOpratePlaceQueryFindSmalll.APIUrl + cH + 'v=' + seApis.seDbOpratePlaceQueryFindSmalll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: data
      }
    }
  }
]

