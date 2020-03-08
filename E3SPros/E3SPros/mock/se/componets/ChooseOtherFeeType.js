import Mock from 'mockjs'
import { seApis } from '../../../src/api/graphQLApiList/se'

const cH = '/'

const ChooseOtherFeeType002 = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seDbCostTypeQueryFindAll: {
      'result': '1',
      'pageindex': '1',
      'pages': '1',
      'records': '1',
      'msg': '成功！',
      'rows': [
        {
          isSelect: '1',
          costTypeCode: '1',
          costTypeId: '1',
          costTypeName: '其他费用1',
          costMust: 24124,
          carBrandCode: '1',
          carBrandCn: '车辆品牌1',
          isSystem: '1',
          isSystemName: '系统1',
          remark: '备注。。。。。。。。。。。。。。。',
          CreatedDate: '2019-09-09',
          isEnable: '1',
          dlrCode: '1',
          dlrId: '1',
          oemCode: '1',
          groupCode: '1',
          oemId: '1',
          groupId: '1'
        },
        {
          isSelect: '2',
          costTypeCode: '2',
          costTypeId: '2',
          costTypeName: '其他费用2',
          costMust: 241.24,
          carBrandCode: '2',
          carBrandCn: '车辆品牌2',
          isSystem: '2',
          isSystemName: '系统2',
          remark: '备注。222222。。。。。。。。',
          CreatedDate: '2019-09-09',
          isEnable: '1',
          dlrCode: '2',
          dlrId: '2',
          oemCode: '2',
          groupCode: '2',
          oemId: '2',
          groupId: '2'
        },
        {
          isSelect: '3',
          costTypeCode: '3',
          costTypeId: '3',
          costTypeName: '其他费用3',
          costMust: 24.24,
          carBrandCode: '3',
          carBrandCn: '车辆品牌3',
          isSystem: '3',
          isSystemName: '系统3',
          remark: '备注333333333',
          CreatedDate: '2019-09-09',
          isEnable: '0',
          dlrCode: '3',
          dlrId: '3',
          oemCode: '3',
          groupCode: '3',
          oemId: '3',
          groupId: '3'
        }
      ]
    }
  }
})

const ChooseOtherFeeTypeIsEnable = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    ChooseOtherFeeTypeIsEnable: {
      'result': '1',
      'pageindex': '1',
      'pages': '1',
      'records': '1',
      'msg': '成功！',
      'rows': [
        {
          isEnable: '1',
          isEnableName: '启动'
        },
        {
          isEnable: '0',
          isEnableName: '禁用'
        }
      ]
    }
  }
})

const ChooseOtherFeeTypeIsSystem = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    ChooseOtherFeeTypeIsSystem: {
      'result': '1',
      'pageindex': '1',
      'pages': '1',
      'records': '1',
      'msg': '成功！',
      'rows': [
        {
          isSystem: '1',
          isSystemName: '主机厂'
        },
        {
          isSystem: '0',
          isSystemName: '专营店'
        }
      ]
    }
  }
})

export default [
  {
    // url: 'ly/mp/busicen/prc/bff/common/se/chooseotherfeetypei/queryChooseOtherFeeType.do' + cH + 'v=' + 'ChooseOtherFeeType002',
    url: seApis.ChooseOtherFeeType002.APIUrl + cH + 'v=' + seApis.ChooseOtherFeeType002.ServiceCode,
    type: 'post',
    response: config => {
      return ChooseOtherFeeType002
    }
  },
  {
    url: seApis.ChooseOtherFeeTypeIsEnable.APIUrl + cH + 'v=' + seApis.ChooseOtherFeeTypeIsEnable.ServiceCode,
    type: 'post',
    response: config => {
      return ChooseOtherFeeTypeIsEnable
    }
  },
  {
    url: seApis.ChooseOtherFeeTypeIsSystem.APIUrl + cH + 'v=' + seApis.ChooseOtherFeeTypeIsSystem.ServiceCode,
    type: 'post',
    response: config => {
      return ChooseOtherFeeTypeIsSystem
    }
  }
]

