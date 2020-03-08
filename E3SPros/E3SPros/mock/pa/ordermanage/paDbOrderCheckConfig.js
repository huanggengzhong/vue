import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const data = Mock.mock({
  paDbOrderCheckConfigQueryFindAll: {

    'result': '1',
    'msg': '查询成功',
    'pageindex': '',
    'pages': '',
    'records': '55',
    'rows|55': [{
      orderCheckConfigId: '4a4fcdaba1a3452088f24aa2d5d5f762',
      aduitDateWeek: 'zhou',
      aduitDateWeekName: '星期一',
      purAssignTypeName: '常规订单',
      purAssignType: 'SDAJKBGKEQDASQ',
      aduitDateBegin: '08:00',
      aduitDateEnd: '18:00',
      aduitDateQuantum: '4',
      aduitDateType: '小时',
      isEnable: '否',
      oemId: '111111',
      groupId: '222222',
      oemCode: 'adadadad',
      groupCode: 'wwwwwwww',
      timeType: '2'
    }]
  }
})

const data2 = Mock.mock({
  paDbOrderCheckConfigMutationSave: {
    'result': '1',
    'mag': '保存成功'
  }
})

const data3 = Mock.mock({
  paDbOrderConfigDQueryFindAll: {

    'result': '1',
    'msg': '查询成功',
    'pageindex': '',
    'pages': '',
    'records': '55',
    'rows': [{
      orderCheckConfigId: '4a4fcdaba1a3452088f24aa2d5d5f761',
      orderCheckCfDId: '3d3fcdabr21345ds28fdg46hd59sjed1',
      oemId: '111111',
      groupId: '222222',
      oemCode: 'adadadad',
      groupCode: 'wwwwwwww',
      aduitDate: '12:00'
    }, {
      orderCheckConfigId: '4a4fcdaba1a3452088f24aa2d5d5f762',
      orderCheckCfDId: '3d3fcdabr21345ds28fdg46hd59sjed1',
      oemId: '111111',
      groupId: '222222',
      oemCode: 'adadadad',
      groupCode: 'wwwwwwww',
      aduitDate: '13:00'
    }, {
      orderCheckConfigId: '4a4fcdaba1a3452088f24aa2d5d5f763',
      orderCheckCfDId: '3d3fcdabr21345ds28fdg46hd59sjed1',
      oemId: '111111',
      groupId: '222222',
      oemCode: 'adadadad',
      groupCode: 'wwwwwwww',
      aduitDate: '14:00'
    }]
  }
})

export default [
  {
    url: paApis.paDbOrderCheckConfigQueryFindAll.APIUrl + cH + 'v=' + paApis.paDbOrderCheckConfigQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data
      }
    }
  },
  {
    url: paApis.paDbOrderCheckConfigMutationSave.APIUrl + cH + 'v=' + paApis.paDbOrderCheckConfigMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {

        data: data2
      }
    }
  },
  {
    url: paApis.paDbOrderConfigDQueryFindAll.APIUrl + cH + 'v=' + paApis.paDbOrderConfigDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {

        data: data3
      }
    }
  }
]
