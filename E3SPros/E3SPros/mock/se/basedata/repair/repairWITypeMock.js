/**
 *  维修工时类别的模拟数据
 */
import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
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

const allData = Mock.mock({
  seDbOpratePlaceQueryFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: 'success',
    rows: [{
      operatePartId: '0001',
      operatePartCode: 'S',
      faultPartCode: '',
      faultPartName: '',
      opratePlaceName: 'S车身',
      isSystem: '1',
      isSystemName: '主机厂',
      dlrCode: 'H2901',
      dlrId: '231',
      remark: '',
      oemId: '',
      oemCode: '',
      groupId: '',
      groupCode: '',
      creator: '',
      createdDate: '',
      modifier: '',
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: '',
      seDbWiType: [{
        wiSmallKindId: 's00007',
        repairSmallKindCode: 'S07',
        operatePartCode: '',
        repairSmallKindName: 'S07仪表板',
        operatePartId: '',
        isSystem: '',
        dlrCode: '',
        dlrId: '',
        oemId: '',
        oemCode: '',
        groupId: '',
        groupCode: '',
        creator: '',
        createdDate: '',
        modifier: '',
        lastUpdatedDate: '',
        isEnable: '',
        updateControlId: '222222'
      },
      {
        wiSmallKindId: 's00008',
        repairSmallKindCode: 'S08',
        operatePartCode: '',
        repairSmallKindName: 'S08控制台',
        operatePartId: '',
        isSystem: '',
        dlrCode: '',
        dlrId: '',
        oemId: '',
        oemCode: '',
        groupId: '',
        groupCode: '',
        creator: '',
        createdDate: '',
        modifier: '',
        lastUpdatedDate: '',
        isEnable: '',
        updateControlId: '111111'
      }
      ]
    },
    {
      operatePartId: '0002',
      operatePartCode: 'Y',
      faultPartCode: '',
      faultPartName: '',
      opratePlaceName: 'Y油漆',
      isSystem: '1',
      isSystemName: '主机厂',
      dlrCode: 'H2901',
      dlrId: '231',
      remark: '',
      oemId: '',
      oemCode: '',
      groupId: '',
      groupCode: '',
      creator: '',
      createdDate: '',
      modifier: '',
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: '',
      seDbWiType: [{
        wiSmallKindId: 'y00001',
        repairSmallKindCode: 'Y01',
        operatePartCode: '',
        repairSmallKindName: 'Y01油漆',
        operatePartId: '',
        isSystem: '',
        dlrCode: '',
        dlrId: '',
        oemId: '',
        oemCode: '',
        groupId: '',
        groupCode: '',
        creator: '',
        createdDate: '',
        modifier: '',
        lastUpdatedDate: '',
        isEnable: '',
        updateControlId: '333333'
      }]

    }

    ]
  }

})

const smallData = Mock.mock({
  seDbWiTypeQueryFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: 'success',
    rows: [
      {
        wiSmallKindId: '',
        repairSmallKindCode: 'S07',
        operatePartCode: 'S',
        repairSmallKindName: 'S07仪表板',
        operatePartId: '',
        isSystem: '1',
        dlrCode: '',
        dlrId: '',
        oemId: '',
        oemCode: '',
        groupId: '',
        groupCode: '',
        creator: '',
        createdDate: '',
        modifier: '',
        lastUpdatedDate: '',
        isEnable: '1',
        updateControlId: ''
      },
      {
        wiSmallKindId: '',
        repairSmallKindCode: 'S08',
        operatePartCode: 'S',
        repairSmallKindName: 'S08控制台',
        operatePartId: '',
        isSystem: '1',
        dlrCode: '',
        dlrId: '',
        oemId: '',
        oemCode: '',
        groupId: '',
        groupCode: '',
        creator: '',
        createdDate: '',
        modifier: '',
        lastUpdatedDate: '',
        isEnable: '1',
        updateControlId: ''
      }
    ]
  }

})

const saveBigSuccessData = Mock.mock({
  seDbOpratePlaceMutationSaveBig: {
    result: '1',
    msg: 'success'
  }
})

const saveSmallSuccessData = Mock.mock({
  seDbOpratePlaceMutationSaveSmall: {
    result: '1',
    msg: 'success'
  }
})

const deleteBigSuccessData = Mock.mock({
  seDbOpratePlaceMutationDeleteBig: {
    result: '1',
    msg: 'success'
  }
})
const deleteSmallSuccessData = Mock.mock({
  seDbOpratePlaceMutationDeleteSmall: {
    result: '1',
    msg: 'success'
  }
})
export default [
  {// 查询大类列表/大类
    url: seApis.seDbOpratePlaceQueryFindAll.APIUrl + cH + 'v=' + seApis.seDbOpratePlaceQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: allData
      }
    }
  },
  {// 查询小类列表
    url: seApis.seDbOpratePlaceQueryFindSmalll.APIUrl + cH + 'v=' + seApis.seDbOpratePlaceQueryFindSmalll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: smallData
      }
    }
  },
  {// 保存大类
    url: seApis.seDbOpratePlaceMutationSaveBig.APIUrl + cH + 'v=' + seApis.seDbOpratePlaceMutationSaveBig.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: saveBigSuccessData
      }
    }
  },
  {// 保存小类
    url: seApis.seDbOpratePlaceMutationSaveSmall.APIUrl + cH + 'v=' + seApis.seDbOpratePlaceMutationSaveSmall.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: saveSmallSuccessData
      }
    }
  },
  {// 删除大类
    url: seApis.seDbOpratePlaceMutationDeleteBig.APIUrl + cH + 'v=' + seApis.seDbOpratePlaceMutationDeleteBig.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: deleteBigSuccessData
      }
    }
  },
  {// 删除小类
    url: seApis.seDbOpratePlaceMutationDeleteSmall.APIUrl + cH + 'v=' + seApis.seDbOpratePlaceMutationDeleteSmall.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: deleteSmallSuccessData
      }
    }
  }
  // {
  //   url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=mdmCarListQueryDemo',
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
  /*
        //普通查询
         var query =data.query;
      */

  //   return {
  //     ...returnData
  //     // ...query
  //   }
  // }
  // }
]
