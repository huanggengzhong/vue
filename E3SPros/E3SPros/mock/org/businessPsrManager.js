/**
 * description: 业务岗位查询模拟数据
 * author: liyanm
 * createdDate: 2019-07-25
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 业务岗位查询
const mdmOrgStationQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgStationQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        stationCode: 'A0090209',
        stationName: '小区经理',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '1'
      },
      {
        stationCode: 'A0090203',
        stationName: '大区经理',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '2'
      },
      {
        stationCode: 'A0090200',
        stationName: '大区督导',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '3'
      },
      {
        stationCode: 'A0090205',
        stationName: '督导',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '4'
      },
      {
        stationCode: 'A0090209',
        stationName: '小区经理',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '5'
      },
      {
        stationCode: 'A0090203',
        stationName: '大区经理',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '6'
      },
      {
        stationCode: 'A0090200',
        stationName: '大区督导',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '7'
      },
      {
        stationCode: 'A0090205',
        stationName: '督导',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '8'
      },
      {
        stationCode: 'A0090209',
        stationName: '小区经理',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '9'
      },
      {
        stationCode: 'A0090203',
        stationName: '大区经理',
        stationDesc: '服务督导科描述',
        deptName: '服务督导科',
        stationId: '10'
      }
      ]
    }
  }
})
// 业务岗位保存
const mdmOrgStationMutationSaveById = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgStationMutationSaveById: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: []
    }
  }
})
export default [
  // 业务岗位查询
  {
    url: orgApis.mdmOrgStationQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmOrgStationQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgStationQueryFindAll
    }
  },
  // 业务岗位保存
  {
    url: orgApis.mdmOrgStationMutationSaveById.APIUrl + cH + 'v=' + orgApis.mdmOrgStationMutationSaveById.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgStationMutationSaveById
    }
  }

]
