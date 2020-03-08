/**
 *  员工权限设置的模拟数据
 */
import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const CH = '/'
const alldata = Mock.mock({
  seDbFavoPowerQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [{
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '是',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '李四',
      deptName: '售后服务部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '是',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '王五',
      deptName: '财务部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '是',
      cancelRepairName: '是',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    },
    {
      empName: '张三',
      deptName: '销售部',
      wiRate: '80',
      favoRate: '80',
      wiPowerName: '否',
      cancelRepairName: '否',
      mobile: '13517651111',
      stationName: '服务代表',
      isEnable: '在职'
    }
    ]
  }
})

const save = Mock.mock({
  seDbFavoPowerMutationSave: {
    result: '1',
    msg: 'success'

  }
})
export default [
  {
    url: seApis.seDbFavoPowerQueryFindAll.APIUrl + CH + 'v=' + seApis.seDbFavoPowerQueryFindAll.ServiceCode,

    type: 'post',
    response: config => {
      return {
        code: 2000,
        data: alldata
      }
    }
  },
  {
    url: seApis.seDbFavoPowerMutationSave.APIUrl + CH + 'v=' + seApis.seDbFavoPowerMutationSave.ServiceCode,

    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: save
      }
    }
  }
]

