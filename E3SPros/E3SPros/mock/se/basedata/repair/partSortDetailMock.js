/**
 *  备件分类对应清单的模拟数据
 */
import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const CH = '/'
const alldata = Mock.mock({
  partSortQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [{
      partNo: '0009141030-A034',
      partName: '螺母',
      partTypeId: '1',
      partType: 're',
      remark: 'we',
      upcontrolId: '23451'
    },
    {
      partNo: '0009141030-A034',
      partName: '螺丝',
      partTypeId: '5',
      partType: 'r5',
      remark: 'w6',
      upcontrolId: '23455'
    }
    ]
  }
})
const partresolve = Mock.mock({

  result: '1',
  pageindex: 1,
  pages: 1,
  records: 4,
  msg: '',
  rows: [{

    备件编码: 'H2901',
    备件名称: '广州风日店',
    备件类型: '5',
    备注: '选项1'
  }
  ]

})

const save = Mock.mock({
  partSortDetailMutationSave: {
    result: '1',
    msg: 'success'
  }
})

const Delete = Mock.mock({
  partSortDetailDelete: {
    result: '1',
    msg: 'success'
  }
})
export default [
  {
    url: seApis.partSortQueryFindAll.APIUrl + CH + 'v=' + seApis.partSortQueryFindAll.ServiceCode,

    type: 'post',
    response: config => {
      return {
        result: '1',
        code: 2000,
        data: alldata
      }
    }
  },
  {
    url: seApis.partSortDetailMutationSave.APIUrl + CH + 'v=' + seApis.partSortDetailMutationSave.ServiceCode,

    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: save
      }
    }
  },
  {
    url: seApis.partSortDetailDelete.APIUrl + CH + 'v=' + seApis.partSortDetailDelete.ServiceCode,

    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: Delete
      }
    }
  },
  {
    url: seApis.partResolve.APIUrl + CH + 'v=' + seApis.partResolve.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        records: '5',
        msg: 'success',
        data: partresolve
      }
    }
  }
]

