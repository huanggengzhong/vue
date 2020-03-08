import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

// 零件分类设置-主表查询
const seDbPartGroupingQueryFind = Mock.mock({
  seDbPartGroupingQueryFind:
    {
      result: '1',
      pageindex: 1,
      pages: 1,
      records: 2,
      msg: '',
      rows: [
        {
          C1: '主键ID',
          A1: '类型A',
          remark: '备注',
          partNo: 'Pn9201',
          partName: '手把'
        }, {
          C1: '主键ID',
          A1: '类型B',
          remark: '备注2',
          partNo: 'vom3891',
          partName: '车窗玻璃'
        }
      ]
    }
})

// 零件分类设置-保存
const seDbPartGroupingSave = Mock.mock({
  seDbPartGroupingSave: {
    result: '1',
    msg: 'success'
  }
})

// 零件分类设置-删除
const seDbPartGroupingDelet = Mock.mock({
  seDbPartGroupingDelet: {
    result: '1',
    msg: 'success'
  }
})
export default [
  { // 零件分类设置-主表查询
    url: seApis.seDbPartGroupingQueryFind.APIUrl + cH + 'v=' + seApis.seDbPartGroupingQueryFind.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbPartGroupingQueryFind

      }
    }
  },
  {// 零件分类设置-保存
    url: seApis.seDbPartGroupingSave.APIUrl + cH + 'v=' + seApis.seDbPartGroupingSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbPartGroupingSave

      }
    }
  },
  {// 零件分类设置-删除
    url: seApis.seDbPartGroupingDelet.APIUrl + cH + 'v=' + seApis.seDbPartGroupingDelet.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbPartGroupingDelet

      }
    }
  }
]
