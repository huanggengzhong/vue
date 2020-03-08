/**
 * description: 估价单模板
 * author: zjinhang
 * createdDate: 2019-07-23
*/
import Mock from 'mockjs'
const cH = '/'
import { apiRepairOrderModel } from '../../../../src/api/graphQLApiList/se'

const data = Mock.mock({
  seDbRepairModeQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 3,
    msg: 'success',
    'rows|55': [{
      brandName: '东风日产-日产',
      repairModeCode: 'E',
      repairModeName: '二保',
      isEnable: '是',
      payKind: '2',
      isSystem: '是',
      repairModeId: '23121312354321345324sdfsdwqe',
      brandCode: '1',
      updateControlId: '',
      payKindName: '免保'
    }]
  }
})

const saveModelSuccessData = Mock.mock({
  seDbRepairModeMutationSave: {
    result: '1',
    msg: '保存成功'

  }
})

const seDbRepairModeCarTypeDelete = Mock.mock({
  seDbRepairModeTypeMutationDelete: {
    result: '1',
    msg: '删除成功'
  }
})

// 保存模板车型
const seDbRepairModeCarTypeSave = Mock.mock({
  seDbRepairModeCarTypeSave: {
    result: '1',
    msg: '保存成功'
  }
})

// 保存模板车型工时
const seDbRepairModeWiSave = Mock.mock({
  seDbRepairModeWiMutationSave: {
    result: '1',
    msg: '保存成功'
  }
})

// 保存模板车型备件
const seDbRepairModePartSave = Mock.mock({
  seDbRepairModePartMutationSave: {
    result: '1',
    msg: '保存成功'
  }
})

// 删除模板车型工时
const seDbRepairModeWiDelete = Mock.mock({
  seDbRepairModeWiMutationDelete: {
    result: '1',
    msg: '保存成功'
  }
})

// 删除模板车型备件
const seDbRepairModePartDelete = Mock.mock({
  seDbRepairModePartMutationDelete: {
    result: '1',
    msg: '保存成功'
  }
})

// 新增模板车型All
const seDbRepairModeChooseSave = Mock.mock({
  seDbRepairModeChooseSave: {
    result: '1',
    msg: '保存成功'
  }
})

// 模板车型查询结果
const ModelCatTypeList = Mock.mock({
  seDbRepairModeTypeQueryFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 2,
    msg: '',
    rows: [
      {
        repairModeCartypeId: '0001',
        repairModeId: '',
        carSeriesCode: '',
        carTypeCode: 'DFL7181',
        carTypeCn: 'DFL7181',
        wiAmount: 0,
        partAmount: 694,
        fixedAmount: 694,
        isSystem: '',
        carBrandCode: '1',
        oemId: '',
        groupId: '',
        oemCode: '',
        groupCode: '',
        creator: '',
        createdName: '',
        createdDate: '',
        modifier: '',
        modifyName: '',
        lastUpdatedDate: '',
        isEnable: '1',
        updateControlId: '',
        carSeriesCn: '新轩逸'

      }, {
        repairModeCartypeId: '0001',
        repairModeId: '',
        carSeriesCode: '',
        carTypeCode: 'DFL7181',
        carTypeCn: 'DFL7181',
        wiAmount: 0,
        partAmount: 694,
        fixedAmount: 694,
        isSystem: '',
        carBrandCode: '1',
        oemId: '',
        groupId: '',
        oemCode: '',
        groupCode: '',
        creator: '',
        createdName: '',
        createdDate: '',
        modifier: '',
        modifyName: '',
        lastUpdatedDate: '',
        isEnable: '1',
        updateControlId: '',
        carSeriesCn: '新轩逸'
      }
    ]
  }
})

// 模板车型工时关系查询结果
const weDbRepairModeWiQuery = Mock.mock({
  seDbRepairModeWiQueryFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        repairModeWiId: '1312sffsfsd',
        repairModeId: '1312sffsfsd',
        wiCode: 'WA0002',
        wiName: '二保',
        wiQty: 0.9,
        wiPrice: 100,
        businessType: '1',
        businessTypeName: '定期保养',
        wiTotalFee: 90,
        isEnable: '',
        isSystem: '',
        updateControlId: '213141231321312',
        carTypeId: '1331214l23xxdkfsk',
        dlrId: '',
        oemCode: '',
        groupCode: '',
        oemId: '',
        groupId: '',
        carTypeCode: '1331214l23xxdkfsk'
      },
      {
        repairModeWiId: '1312sffsfsd',
        repairModeId: '1312sffsfsd',
        wiCode: 'WA0002',
        wiName: '二保',
        wiQty: 0.9,
        wiPrice: 100,
        businessType: '1',
        businessTypeName: '定期保养',
        wiTotalFee: 90,
        isEnable: '',
        isSystem: '',
        updateControlId: '213141231321312',
        carTypeId: '1331214l23xxdkfsk',
        dlrId: '',
        oemCode: '',
        groupCode: '',
        oemId: '',
        groupId: '',
        carTypeCode: '1331214l23xxdkfsk'
      }
    ]
  }
})

// 模板车型备件关系查询结果
const seDbRepairModePartQuery = Mock.mock({
  seDbRepairModePartQueryFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        repairModeId: '23wqeww',
        partNo: 'HXLKN10300-L260',
        partName: '制动液，NISSAN车系',
        partQty: 2,
        partPrice: 62,
        businessType: '1',
        businessTypeName: '定期保养',
        partTotalFee: 124,
        carTypeCode: 'sfs',
        isSystem: '',
        oemId: '',
        groupId: '',
        oemCode: '',
        groupCode: '',
        creator: '',
        createdName: '',
        createdDate: '',
        modifier: '',
        modifyName: '',
        lastUpdatedDate: 'ssfrefsd',
        isEnable: '',
        updateControlId: 'afwerfsd',
        dlrLeastSaleQty: ''

      },
      {
        repairModeId: '23wqeww',
        partNo: '278913DN0A-D403',
        partName: '空调过滤器总成',
        partQty: 1,
        partPrice: 116,
        businessType: '1',
        businessTypeName: '定期保养',
        partTotalFee: 116,
        carTypeCode: 'sfs',
        isSystem: '',
        oemId: '',
        groupId: '',
        oemCode: '',
        groupCode: '',
        creator: '',
        createdName: '',
        createdDate: '',
        modifier: '',
        modifyName: '',
        lastUpdatedDate: 'ssfrefsd',
        isEnable: '',
        updateControlId: 'afwerfsd',
        dlrLeastSaleQty: ''
      }
    ]
  }
})

export default [
  {

    url: apiRepairOrderModel.seDbRepairModeQueryFindAll.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModeQueryFindAll.ServiceCode,
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
    url: '/ly/mp/busicen/asc/graphql.do' + cH + 'v=' + 'seDbRepairModeMutationSave',
    type: 'post',
    response: config => {
      return {
        code: 20000,
        data: saveModelSuccessData
      }
    }
  },
  {
    url: apiRepairOrderModel.seDbRepairModeCarTypeQuery.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModeCarTypeQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: ModelCatTypeList
      }
    }
  },
  {
    url: apiRepairOrderModel.seDbRepairModeCarTypeDelete.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModeCarTypeDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairModeCarTypeDelete
      }
    }

  },
  {

    url: apiRepairOrderModel.weDbRepairModeWiQuery.APIUrl + cH + 'v=' + apiRepairOrderModel.weDbRepairModeWiQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: weDbRepairModeWiQuery
      }
    }
  },
  {

    url: apiRepairOrderModel.seDbRepairModePartQuery.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModePartQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairModePartQuery
      }
    }
  },
  {
    url: apiRepairOrderModel.seDbRepairModeCarTypeSave.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModeCarTypeSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairModeCarTypeSave
      }
    }
  },
  {
    url: apiRepairOrderModel.seDbRepairModeWiSave.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModeWiSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairModeWiSave
      }
    }
  },
  {

    url: apiRepairOrderModel.seDbRepairModePartSave.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModePartSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairModePartSave
      }
    }
  },
  {
    url: apiRepairOrderModel.seDbRepairModeWiDelete.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModeWiDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairModeWiDelete
      }
    }
  },
  {
    url: apiRepairOrderModel.seDbRepairModePartDelete.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModePartDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairModePartDelete
      }
    }
  },
  {
    url: apiRepairOrderModel.seDbRepairModeChooseSave.APIUrl + cH + 'v=' + apiRepairOrderModel.seDbRepairModeChooseSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbRepairModeChooseSave
      }
    }
  }

]
