/**
 *  工时单价模板
 */
import Mock from 'mockjs'
import { apiSeDbWiPriceModel } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const allData1 = Mock.mock({
  seDbWiPriceModelMQueryFindAll: {
    result: '1',
    pageindex: '',
    pages: '',
    records: '',
    msg: '',
    'rows|30': [{
      wiModelId: '0001', // 工时价格模板ID
      wiModelCode: 'SH',
      wiModelName: '上海地区专营店1',
      remark: '',
      payKind: '1', // 付费性质
      payKindName: '1', // 付费性质
      dlrCode: 'H2901',
      dlrId: '231',
      oemId: '', // 厂商标识ID
      oemCode: '', // 厂商标识
      groupId: '', // 集团标识ID
      groupCode: '', // 集团标识
      creator: '', // 创建人
      createdDate: '',
      modifier: '',
      lastUpdatedDate: '',
      isEnable: '1', // 是否可用
      updateControlId: ''// 并发控制ID
    }]
  }
})

// 模板对应业务类别和车系查询
const allData2 = Mock.mock({
  seDbWiPriceModelDQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 2,
    msg: '',
    rows: [{
      wiModelDId: '69d67906daca4945bde4eddb24e3f22c', // 工时价格明细ID
      wiModelId: '0001', // 工时价格ID
      carSeriesCode: '000000', // 车系编码
      carSeriesCn: '贵士(进口)', // 车系名称
      wiModelCode: 'SH',
      wiModelName: '上海地区专营店', // (API表没有)
      payKind: '1', // 付费性质
      businessType: 'XXX',
      businessTypeName: '保险',
      repairPrice: '300', // 单价
      carBrandCode: '00000X', // 车辆品牌
      carBrandCn: '东风日产-日产', // 车辆品牌名称
      oemId: '',
      groupId: '',
      oemCode: '',
      dlrCode: 'H2901',
      groupCode: '',
      creator: '',
      createdDate: '',
      modifier: '',
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: '716e3789797446d49afab3f1d171948f'
    },
    {
      wiModelDId: '2', // 工时价格明细ID
      wiModelId: '0001', // 工时价格ID
      carSeriesCode: '000000', // 车系编码
      carSeriesCn: '贵士(进口)', // 车系名称
      wiModelCode: 'SH',
      wiModelName: '上海地区专营店', // (API表没有)
      payKind: '1', // 付费性质
      businessType: 'XXX',
      businessTypeName: '保险',
      repairPrice: '300', // 单价
      carBrandCode: '00000X', // 车辆品牌
      carBrandCn: '东风日产-日产', // 车辆品牌名称
      oemId: '',
      groupId: '',
      oemCode: '',
      dlrCode: 'H2901',
      groupCode: '',
      creator: '',
      createdDate: '',
      modifier: '',
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: ''
    }]
  }
})

// 模板对应经销商数据
const allData3 = Mock.mock({
  seDbWiPriceModelDlrQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 3,
    records: 33,
    msg: '查询成功',
    'rows|33': [{
      wiPriceDlrId: '1', // 设置经销商Id
      wiModelId: '0001', // 主表Id
      wiModelCode: 'SH',
      dlrCode: 'H2901', // 专营店编码
      dlrId: '231',
      dlrShortName: '上海东昌', // 专营店名称
      oemId: '',
      groupId: '',
      oemCode: '',
      groupCode: '',
      creator: '',
      createdDate: '',
      modifier: '',
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: '',
      wiModelName: 'A类地区专营店1', // (表格中没有，暂时模拟)
      areaId: '', // 地区编码ID
      areaName: '', // 地区编码
      bigAreaId: '', // 大区编码ID
      bigAreaName: '华东一区', // 大区编码
      smallAreaId: '', // 小区编码ID
      smallAreaName: '上海区'// 小区编码
    }]
  }
})

const importDlr = Mock.mock({
  seDbWiPriceModelDlrImport: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 10,
    msg: '',
    'rows|10': [{
      wiModelCode: 'SH1', 
      wiModelName: '上海地区1', 
      bigAreaName: '华东一区1',
      smallAreaName: '上海区1',
      dlrCode: '2311111',
      dlrShortName: '上海东昌1'
    }]
  }
})

// 下拉框-业务类别
const businessTypeData = Mock.mock({
  'result': '1',
  'data': {
    'wiBusinessTypeQuery': {
      'rows': [{
        businessTypeId: '1',
        businessTypeName: '正常维修'
      },
      {
        businessTypeId: '2',
        businessTypeName: '定期保养'
      },
      {
        businessTypeId: '3',
        businessTypeName: '保险'
      },
      {
        businessTypeId: '4',
        businessTypeName: '保修'
      }
      ]
    }
  },
  'msg': 'success'

})

const saveWiModelData = Mock.mock({
  seDbWiPriceModelMMutationSave: {
    result: '1',
    msg: 'success'
  }
})

const saveDetailData = Mock.mock({
  seDbWiPriceModelDMutationSave: {
    result: '1',
    msg: 'success'
  }
})

const deleteDetailData = Mock.mock({
  seDbWiPriceModelDMutationDelete: {
    result: '1',
    msg: 'success'
  }
})

const deleteDlrData = Mock.mock({
  seDbWiPriceModelDlrMutationDelete: {
    result: '1',
    msg: 'success'
  }
})

const saveDlrData = Mock.mock({
  seDbWiPriceModelDlrMutationSave: {
    result: '1',
    msg: 'success'
  }
})

export default [
  {
    url: apiSeDbWiPriceModel.seDbWiPriceModelMQueryFindAll.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelMQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: allData1
      }
    }
  }, {
    url: apiSeDbWiPriceModel.seDbWiPriceModelDQueryFindAll.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: allData2
      }
    }
  }, {
    url: apiSeDbWiPriceModel.seDbWiPriceModelDlrQueryFindAll.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelDlrQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: allData3
      }
    }
  }, {
    url: '/ly/mp/busicen/asc/graphql.do' + cH + 'getBusinessType',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: businessTypeData
      }
    }
  }, {
    url: apiSeDbWiPriceModel.seDbWiPriceModelMMutationSave.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelMMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: saveWiModelData
      }
    }
  },
   {
    url: apiSeDbWiPriceModel.seDbWiPriceModelDMutationSave.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelDMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: saveDetailData
      }
    }
  },
  {
    url: apiSeDbWiPriceModel.seDbWiPriceModelDMutationDelete.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelDMutationDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: deleteDetailData
      }
    }
  }, {
    url: apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationDelete.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: deleteDlrData
      }
    }
  }, {
    url: apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationSave.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelDlrMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: saveDlrData
      }
    }
  }, {
    url: apiSeDbWiPriceModel.seDbWiPriceModelDlrImport.APIUrl + cH + 'v=' + apiSeDbWiPriceModel.seDbWiPriceModelDlrImport.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: importDlr
      }
    }
  }
]
