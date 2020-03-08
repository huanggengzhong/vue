/**
* description: 用户经销商
* author: linsy
* createdDate: 2019-07-25
*/

import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'
const cH = '/'
const mdmEmployeeDlrQueryByPage = Mock.mock({
    result: '1',
    msg: '',
    data: {
        mdmEmployeeDlrQueryByPage: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows': [
                { carBrand: '东风日产-日产', userName: '邓悄然', loginName: 'cyc-dengqr', userType: 'PV用户', department: '市场部', distributor: '上海宝钢、上海冠松、广州丰日、广州恒源' },
                { carBrand: '东风日产-启辰', userName: '张雁', loginName: 'zhangyan', userType: 'PV用户', department: '网络发展科', distributor: '上海宝钢、上海冠松、广州丰日、广州恒源' },
                { carBrand: '东风日产-启辰', userName: '代颂娥', loginName: 'daise', userType: 'PV用户', department: '经销商指导科', distributor: '上海宝钢、上海冠松、广州丰日、广州恒源' },
                { carBrand: '东风日产-日产', userName: '张茂华', loginName: 'cyc-zhangmh', userType: 'DLR用户', department: '客户支援科', distributor: '上海宝钢、上海冠松、广州丰日、广州恒源' },
                { carBrand: '东风日产-启辰', userName: '刘亚梅', loginName: 'liuyamei', userType: 'DLR用户', department: '售后服务部', distributor: '上海宝钢、上海冠松、广州丰日、广州恒源' },
                { carBrand: '东风日产-日产', userName: '易楠', loginName: 'yinan', userType: 'DLR用户', department: '售后服务部', distributor: '上海宝钢、上海冠松、广州丰日、广州恒源' }]
        }
    }
})
// 用户经销商设置-保存
const mdmEmployeeDlrMutation = Mock.mock({
    result: '1',
    msg: '',
    data: {
        mdmEmployeeDlrMutation: {
        result: '1',
        msg: '保存成功!'
      }
    }
  })
export default [
    {
        url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=mdmEmployeeDlrQueryByPage',
        type: 'post',
        response: config => {
            return mdmEmployeeDlrQueryByPage
        }
    },
     // 用户经销商设置-保存
  {
    url: orgApis.mdmEmployeeDlrMutation.APIUrl + cH + 'v=' + orgApis.mdmEmployeeDlrMutation.ServiceCode,
    type: 'post',
    response: config => {
      return mdmEmployeeDlrMutation
    }
  }
]
