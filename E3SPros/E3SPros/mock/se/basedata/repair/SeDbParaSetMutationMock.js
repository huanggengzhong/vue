/**
 *  服务参数设置的模拟数据
 */
import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const CH = '/'
const alldata = Mock.mock({
  result: '1',
  pageindex: 1,
  pages: 1,
  records: 4,
  msg: '',
  rows: [{
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-启辰',
    serviceSysParaCode: '300',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '70',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-进入桑尼',
    serviceSysParaCode: '600',
    serviceSysParaName: '保修鉴定单据时间',
    serviceSysParaValue: '90',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  },
  {
    brandCode: '东风日产-日产',
    serviceSysParaCode: '7100',
    serviceSysParaName: '保修鉴定填写单据时间',
    serviceSysParaValue: '80',
    remarks: '单位/时'
  }
  ]
})
export default [
  {
    url: '/ly/mp/busicen/asc/graphql.do' + CH + 'v=' + 'SeDbParaSetQueryFindAll',

    type: 'post',
    response: config => {
      return {
        code: 2000,
        data: alldata
      }
    }
  },
  {
    url: seApis.SeDbParaSetMutationSave.APIUrl + CH + 'v=' + seApis.SeDbParaSetMutationSave.ServiceCode,

    type: 'post',
    response: config => {
      return {
        code: 2000,
        data: alldata
      }
    }
  }
]
