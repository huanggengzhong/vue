import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

// 保养参数设置保存
const MaintainMutationSave = Mock.mock({
  seDbMaintainMutationSave: {
    result: '1',
    msg: 'success'
  }
})

// 保养参数设置导入
const MaintainMutationImport = Mock.mock({
  seDbMaintainMutationImport: {
    result: '1',
    msg: 'success'
  }
})

// 保养参数设置删除
const MaintainMutationDelete = Mock.mock({
  seDbMaintainMutationDelete: {
    result: '1',
    msg: 'success'
  }
})

// 保养费用保存
const MaintainMutationSaveFee = Mock.mock({
  SeDbMaintainLevelMutationSave: {
    result: '1',
    msg: 'success'
  }
})

// 保养费用删除
const MaintainMutationDeleteFee = Mock.mock({
  SeDbMaintainLevelMutationDelete: {
    result: '1',
    msg: 'success'
  }
})

// 保养参数查询
const MaintainQueryFindAll = Mock.mock({
  seDbMaintainQueryFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        carBrandCn: '启程',
        carTypeCode: '2',
        maintainType: '首保',
        minMile: '100',
        maxMile: '200',
        minTime: '',
        maxTime: '',
        maitainId: '',
        carBrandCode: '2',
        carSeriesCode: '',
        carSeriesCn: '',
        carTypeCn: '',
        maintainCode: '1',
        creator: '',
        modifier: '',
        lastUpdatedDate: '',
        createdDate: '',
        mycatOpTime: '',
        updateControlId: '',
        isEnable: '',
        oemCode: '',
        groupCode: '',
        oemId: '',
        groupId: '',
        SeDbMaitainLevel: '',
        maintainLevelId: '',
        dlrLevel: '',
        maintainFee: '',
        remark: '',
        enableTime: '2019-01-02',
        disableDate: '2019-02-03'
      }, {
        carBrandCn: '日产',
        carTypeCode: '1',
        maintainType: '二保',
        minMile: '1000',
        maxMile: '2000',
        minTime: '',
        maxTime: '',
        maitainId: '',
        carBrandCode: '1',
        carSeriesCode: '',
        carSeriesCn: '',
        carTypeCn: '',
        maintainCode: '3',
        creator: '',
        modifier: '',
        lastUpdatedDate: '',
        createdDate: '',
        mycatOpTime: '',
        updateControlId: '',
        isEnable: '',
        oemCode: '',
        groupCode: '',
        oemId: '',
        groupId: '',
        SeDbMaitainLevel: '',
        maintainLevelId: '',
        dlrLevel: '',
        maintainFee: '',
        remark: '',
        enableTime: '2019-03-04',
        disableDate: '2019-04-04'
      }
    ]
  }
})
// 保养费用查询
const MaintainQueryFindFee = Mock.mock({
  seDbMaintainLevelQueryFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        carBrandCn: '启程',
        carTypeCode: '1',
        maintainType: '二保',
        maintainLevelId: '11',
        maitainId: '11',
        dlrLevel: '4',
        maintainFee: '11',
        remark: '11',
        enableTime: '2019-03-04',
        disableDate: '2019-05-04',
        carBrandCode: '1',
        creator: '11',
        modifier: '11',
        lastUpdatedDate: '11',
        mycatOpTime: '11',
        createdDate: '11',
        updateControlId: '11',
        isEnable: '11',
        oemCode: '11',
        groupCode: '11',
        oemId: '11',
        groupId: '11',
        maintainCode: '3'

      }, {
        carBrandCn: '东风',
        carTypeCode: '2',
        maintainType: '二保',
        maintainLevelId: '2',
        maitainId: '2',
        dlrLevel: '2',
        maintainFee: '2',
        remark: '2',
        enableTime: '2019-06-04',
        disableDate: '2019-08-04',
        carBrandCode: '2',
        creator: '2',
        modifier: '2',
        lastUpdatedDate: '2',
        mycatOpTime: '2',
        createdDate: '2',
        updateControlId: '2',
        isEnable: '2',
        oemCode: '2',
        groupCode: '2',
        oemId: '2',
        groupId: '2',
        maintainCode: '1'
      }
    ]
  }
})
export default [

  {// 保养参数设置查询
    url: seApis.seDbMaintainQueryFindAll.APIUrl + cH + 'v=' + seApis.seDbMaintainQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: MaintainQueryFindAll

      }
    }
  },

  {// 保养费用设置查询
    url: seApis.seDbMaintainLevelQueryFindAll.APIUrl + cH + 'v=' + seApis.seDbMaintainLevelQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: MaintainQueryFindFee

      }
    }
  },

  {// 保养参数设置保存
    url: seApis.seDbMaintainMutationSave.APIUrl + cH + 'v=' + seApis.seDbMaintainMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: MaintainMutationSave

      }
    }
  },

  {// 保养参数设置删除
    url: seApis.seDbMaintainMutationDelete.APIUrl + cH + 'v=' + seApis.seDbMaintainMutationDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: MaintainMutationDelete

      }
    }
  },

  {// 保养费用保存
    url: seApis.SeDbMaintainLevelMutationSave.APIUrl + cH + 'v=' + seApis.SeDbMaintainLevelMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: MaintainMutationSaveFee

      }
    }
  },

  {// 保养费用删除
    url: seApis.seDbMaintainMutationDeleteFee.APIUrl + cH + 'v=' + seApis.seDbMaintainMutationDeleteFee.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: MaintainMutationDeleteFee

      }
    }
  },
  {// 保养费用导入
    url: seApis.seDbMaintainMutationImport.APIUrl + cH + 'v=' + seApis.seDbMaintainMutationImport.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: MaintainMutationImport

      }
    }
  }
]
