/**
 *  维修工时类别的模拟数据
 */
import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'
// var cloneObj = function(obj) {
//   var newObj = {}
//   if (obj instanceof Array) {
//     newObj = []
//   }
//   for (var key in obj) {
//     var val = obj[key]
//     newObj[key] = typeof val === 'object' ? cloneObj(val) : val
//   }
//   return newObj
// }

const allData = Mock.mock({
  seDbWipartQueryFind:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        wiPartId: '0001',
        wiId: '1',
        wiCode: 'A0101X-T-X',
        wiName: '气缸盖螺栓紧固，包括气缸盖罩垫（B0403）拆装',
        partNo: 'YAPL-SL-5W40-30',
        partName: '发动机机油',
        partQty: '',
        multiCarTypeCode: '',
        isSystem: '1',
        dlrCode: '',
        dlrId: '',
        oemId: '',
        groupId: '',
        oemCode: '',
        groupCode: '',
        creator: '',
        createdDate: '',
        modifier: '',
        lastUpdatedDate: '',
        isEnable: '',
        updateControlId: '000001',
        partTypeCode: '',
        partPropertyCode: '',
        partTypeName: '机油',
        partPropertyName: '油品'
      },
      {
        wiPartId: '0002',
        wiId: '2',
        wiCode: 'A0108X-A-X',
        wiName: '发动机点火正时检查调整',
        partNo: '',
        partName: '',
        partQty: '',
        multiCarTypeCode: '',
        isSystem: '1',
        dlrCode: '',
        dlrId: '',
        oemId: '',
        groupId: '',
        oemCode: '',
        groupCode: '',
        creator: '',
        createdDate: '',
        modifier: '',
        lastUpdatedDate: '',
        isEnable: '',
        updateControlId: '',
        partTypeCode: '',
        partPropertyCode: '',
        partTypeName: '',
        partPropertyName: ''
      }
    ]
  }

})

const linkSaveData = Mock.mock({
  seDbWiPartMutationSave: {
    result: '1',
    msg: 'success'

  }
})

const linkRemoveData = Mock.mock({
  seDbWiPartMutationRemove: {
    result: '1',
    msg: 'success'
  }
})
export default [
  {
    url: seApis.SeDbWiPartQueryFindAll.APIUrl + cH + 'v=' + seApis.SeDbWiPartQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: allData
      }
    }
  },
  {
    url: seApis.SeDbWiPartMutationSave.APIUrl + cH + 'v=' + seApis.SeDbWiPartMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: linkSaveData
      }
    }
  },
  {
    url: seApis.SeDbWiPartMutationRemove.APIUrl + cH + 'v=' + seApis.SeDbWiPartMutationRemove.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: linkRemoveData
      }
    }
  }
  // {
  //   url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=mdmCarListQuery11Demo1111',
  //   type: 'post',
  //   response: config => {
  //     // 获取查询条件
  //     var params = config.body.variables
  //     // var query =data.query;
  //     var dataInfo = config.body.variables.dataInfo
  //     var response = []
  //     var str1 = config.body.query.substring(config.body.query.indexOf('{'))
  //     var inputType = str1.substring(1, str1.indexOf('('))
  //     var returnData = cloneObj(allData)
  //     // 需要查询的条件 单一
  //     if (dataInfo.isEnable !== '') {
  //       for (var i = 0; i < returnData.data[inputType].rows.length; i++) {
  //         if (returnData.data[inputType].rows[i].isEnable === params.dataInfo.isEnable) {
  //           response.push(returnData.data[inputType].rows[i])
  //         }
  //       }
  //       returnData.data[inputType].rows = response
  //       returnData.data[inputType].records = response.length
  //     }

  //     // 分页查询
  //     if (params.pageIndex === 1) {
  //       returnData.data[inputType].rows = returnData.data[inputType].rows.slice(0, params.pageSize)
  //     } else if (params.pageIndex !== 1 && params.pageIndex !== returnData.data[inputType].pages + 1) {
  //       returnData.data[inputType].rows = returnData.data[inputType].rows.slice(parseInt(params.pageIndex * params.pageSize - params.pageSize), params.pageIndex * params.pageSize)
  //     } else {
  //       returnData.data[inputType].rows = returnData.data[inputType].rows.slice(-(returnData.data[inputType].records) % params.pageSize)
  //     }
  //     /*
  //       //普通查询
  //        var query =data.query;
  //     */

  //     return {
  //       ...returnData
  //       // ...query
  //     }
  //   }
  // }
]
