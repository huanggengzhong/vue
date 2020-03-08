/**
 *  召回专案任务分配
 */
import Mock from 'mockjs'
import { recallApi } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

//召回专案任务分配-查询主表
const recallTaskAssignQueryData = Mock.mock({
  recallTaskAssignQuery: {
    result: '1',
    pageIndex: 1,
    pageSize: 10,
    pages: 1,
    records: 20,
    msg: '',
    'rows|20': [{
        a0: '111',
        a1: '专案',
        recallCaseCode: 'ZA123453',
        a3: '主动招揽专案231234',
        a4: '123123-A37',
        a5: '广州风日',
        a6: '2019-10-11',
        vin: 'KSDJQW',
        a8: '已完成',
        a9: '未分配',
        a10: '1',
        prrsonName: 'AAA'
    }]
  }
})

//查询责任人-下拉框
const chargePersonQueryData = Mock.mock({
  chargePersonQuery: {
    result: '1',
    msg: '',
    rows: [
      {
        personUseId: '1',
        personName: 'AAA'
      },
      {
        personUseId: '2',
        personName: 'BBB'
      },
      {
        personUseId: '3',
        personName: 'CCC'
      },
      {
        personUseId: '4',
        personName: 'DDD'
      },
      {
        personUseId: '5',
        personName: 'EEE'
      },
    ]
  }
})

//召回专案任务分配-保存
const recallTaskAssignSaveData = Mock.mock({
  seDbRecallCaseVinMutationSaveTastAllocation: {
    'result': '1',
    'msg': '保存成功！'
  }
})

//召回专案任务分配-导入
const recallTaskAssignImportData = Mock.mock({
  recallTaskAssignImport: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 10,
    msg: '',
    'rows|2': [{
      //recallCaseTypeName: '专案1', 
      召回专案编码: 'FDSOVHFDSUVSDVFB', 
      // topic: 'adsjafdsfdvdf',
      // pfpCode: '123123-A371',
      // dlrShortName: '广州风日1',
      // releaseDate: '2019-10-11',
      VIN码: 'FHSDGCDSVSFD',
      // finishState: '已完成1',
      // tastState: '分配',
      负责人: 'fhd'
    }]
  }
})

export default [
  {
    url: recallApi.recallTaskAssignQuery.APIUrl + cH + 'v=' + recallApi.recallTaskAssignQuery.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: recallTaskAssignQueryData,
        result: '1'
      }
    }
  },
  {
    url: recallApi.chargePersonQuery.APIUrl + cH + 'v=' + recallApi.chargePersonQuery.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: chargePersonQueryData,
        result: '1'
      }
    }
  },
  {
    url: recallApi.seDbRecallCaseVinMutationSaveTastAllocation.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseVinMutationSaveTastAllocation.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: recallTaskAssignSaveData,
        result: '1'
      }
    }
  },
  {
    url: recallApi.recallTaskAssignImport.APIUrl + cH + 'v=' + recallApi.recallTaskAssignImport.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: recallTaskAssignImportData
      }
    }
  }
]
