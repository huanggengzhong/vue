import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

// 保养参数查询
const seDbMaintainConfigQueryFindAll = Mock.mock({
  seDbMaintainConfigQueryFindAll:
    {
      result: '1',
      pageindex: 1,
      pages: 1,
      records: 4,
      msg: '',
      rows: [
        {
          maintainConfigId: '123',
          carTypeCode: 'DFL6430',
          nextMaintainType: '二保',
          maxMile: '1000',
          maxTime: '30',
          remark: '',
          maintainCode: '首保',
          maintainType: '',
          carSeriesCode: '',
          carBrandCode: '东风日产-启辰',
          carBrandCn: '',
          minTime: '10',
          minMile: '500',
          oemId: '',
          groupId: '',
          oemCode: '',
          groupCode: '',
          dlrId: '',
          dlrCode: '',
          creator: '',
          createdName: '',
          createdDate: '',
          modifier: '',
          modifyName: '',
          lastUpdatedDate: '',
          isEnable: '',
          updateControlId: ''

        }, {
          maintainConfigId: '123',
          carTypeCode: 'DFL6430',
          nextMaintainType: '二保',
          maxMile: '800',
          maxTime: '50',
          remark: '',
          maintainCode: '首保',
          maintainType: '',
          carSeriesCode: '',
          carBrandCode: '东风日产',
          carBrandCn: '',
          minTime: '15',
          minMile: '300',
          oemId: '',
          groupId: '',
          oemCode: '',
          groupCode: '',
          dlrId: '',
          dlrCode: '',
          creator: '',
          createdName: '',
          createdDate: '',
          modifier: '',
          modifyName: '',
          lastUpdatedDate: '',
          isEnable: '',
          updateControlId: ''

        }
      ]
    }
})
const seDbMaintainConfigMutationSave = Mock.mock({

  result: '1',
  msg: 'success'
})
const seDbMaintainConfigMutationRemove = Mock.mock({

  result: '1',
  msg: 'success'
})

const seDbMaintainConfigMutationImport = Mock.mock({

  result: '1',
  msg: 'success'
})
export default [

  {// 定期保养参数设置查询
    url: seApis.seDbMaintainConfigQueryFindAll.APIUrl + cH + 'v=' + seApis.seDbMaintainConfigQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbMaintainConfigQueryFindAll

      }
    }
  },
  {// 定期保养参数设置保存
    url: seApis.seDbMaintainConfigMutationSave.APIUrl + cH + 'v=' + seApis.seDbMaintainConfigMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbMaintainConfigMutationSave

      }
    }
  },
  {// 定期保养参数设置删除
    url: seApis.seDbMaintainConfigMutationRemove.APIUrl + cH + 'v=' + seApis.seDbMaintainConfigMutationRemove.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbMaintainConfigMutationRemove

      }
    }
  },
  {// 定期保养参数设置导入
    url: seApis.seDbMaintainConfigMutationImport.APIUrl + cH + 'v=' + seApis.seDbMaintainConfigMutationImport.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbMaintainConfigMutationImport

      }
    }
  }
]
