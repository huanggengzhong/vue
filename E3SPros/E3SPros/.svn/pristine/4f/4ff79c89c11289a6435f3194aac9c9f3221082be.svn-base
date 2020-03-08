import Mock from 'mockjs'
import { seApis,seComQueChoDlrApi } from '../../src/api/graphQLApiList/se'
const cH = '/'

const initData = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmOrgdlrQueryByPage: {
      'result': '1',
      'rows': [{
        'isSelect': '1',
        'dlrId': '1',
        'dlrCode': '123141241',
        'dlrShortName': '风神店',
        'dlrFullName': '广东封神店',
        'areaId': '4',
        'areaName': '粤东',
        'bigAreaId': '1',
        'bigAreaName': '大东区',
        'smallAreaId': '1',
        'smallAreaName': '小东区',
        'carBrandCode': '21412',
        'carBrandCn': '东风日产',
        'orgType': '12312',
        'orgTypeName': '风神店',
        'parentDlrId': '12421',
        'parentDlrCode': '2134',
        'parentDlrName': '4S店',
        'oemCode': '41231',
        'groupCode': '412412',
        'oemId': '3125',
        'groupId': '123124'
      },
      {
        'isSelect': '1',
        'dlrId': '2',
        'dlrCode': '123141241',
        'dlrShortName': '风神店',
        'dlrFullName': '广东封神店',
        'areaId': '4',
        'areaName': '粤东',
        'bigAreaId': '1',
        'bigAreaName': '大东区',
        'smallAreaId': '1',
        'smallAreaName': '小东区',
        'carBrandCode': '21412',
        'carBrandCn': '东风日产',
        'orgType': '12312',
        'orgTypeName': '风神店',
        'parentDlrId': '12421',
        'parentDlrCode': '2134',
        'parentDlrName': '4S店',
        'oemCode': '41231',
        'groupCode': '412412',
        'oemId': '3125',
        'groupId': '123124'
      }, {
        'isSelect': '1',
        'dlrId': '3',
        'dlrCode': '123141241',
        'dlrShortName': '风神店',
        'dlrFullName': '广东封神店',
        'areaId': '4',
        'areaName': '粤东',
        'bigAreaId': '1',
        'bigAreaName': '大东区',
        'smallAreaId': '1',
        'smallAreaName': '小东区',
        'carBrandCode': '21412',
        'carBrandCn': '东风日产',
        'orgType': '12312',
        'orgTypeName': '风神店',
        'parentDlrId': '12421',
        'parentDlrCode': '2134',
        'parentDlrName': '4S店',
        'oemCode': '41231',
        'groupCode': '412412',
        'oemId': '3125',
        'groupId': '123124'
      }, {
        'isSelect': '1',
        'dlrId': '4',
        'dlrCode': '123141241',
        'dlrShortName': '风神店',
        'dlrFullName': '广东封神店',
        'areaId': '4',
        'areaName': '粤东',
        'bigAreaId': '1',
        'bigAreaName': '大东区',
        'smallAreaId': '1',
        'smallAreaName': '小东区',
        'carBrandCode': '21412',
        'carBrandCn': '东风日产',
        'orgType': '12312',
        'orgTypeName': '风神店',
        'parentDlrId': '12421',
        'parentDlrCode': '2134',
        'parentDlrName': '4S店',
        'oemCode': '41231',
        'groupCode': '412412',
        'oemId': '3125',
        'groupId': '123124'
      }, {
        'isSelect': '1',
        'dlrId': '5',
        'dlrCode': '123141241',
        'dlrShortName': '风神店',
        'dlrFullName': '广东封神店',
        'areaId': '4',
        'areaName': '粤东',
        'bigAreaId': '1',
        'bigAreaName': '大东区',
        'smallAreaId': '1',
        'smallAreaName': '小东区',
        'carBrandCode': '21412',
        'carBrandCn': '东风日产',
        'orgType': '12312',
        'orgTypeName': '风神店',
        'parentDlrId': '12421',
        'parentDlrCode': '2134',
        'parentDlrName': '4S店',
        'oemCode': '41231',
        'groupCode': '412412',
        'oemId': '3125',
        'groupId': '123124'
      }, {
        'isSelect': '1',
        'dlrId': '6',
        'dlrCode': '123141241',
        'dlrShortName': '风神店',
        'dlrFullName': '广东封神店',
        'areaId': '4',
        'areaName': '粤东',
        'bigAreaId': '1',
        'bigAreaName': '大东区',
        'smallAreaId': '1',
        'smallAreaName': '小东区',
        'carBrandCode': '21412',
        'carBrandCn': '东风日产',
        'orgType': '12312',
        'orgTypeName': '风神店',
        'parentDlrId': '12421',
        'parentDlrCode': '2134',
        'parentDlrName': '4S店',
        'oemCode': '41231',
        'groupCode': '412412',
        'oemId': '3125',
        'groupId': '123124'
      }, {
        'isSelect': '1',
        'dlrId': '7',
        'dlrCode': '123141241',
        'dlrShortName': '风神店',
        'dlrFullName': '广东封神店',
        'areaId': '4',
        'areaName': '粤东',
        'bigAreaId': '1',
        'bigAreaName': '大东区',
        'smallAreaId': '1',
        'smallAreaName': '小东区',
        'carBrandCode': '21412',
        'carBrandCn': '东风日产',
        'orgType': '12312',
        'orgTypeName': '风神店',
        'parentDlrId': '12421',
        'parentDlrCode': '2134',
        'parentDlrName': '4S店',
        'oemCode': '41231',
        'groupCode': '412412',
        'oemId': '3125',
        'groupId': '123124'
      }]
    }
  }
})

const orgBrandData = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    OrgBrand: {
      'result': '1',
      'rows': [
        {
          label: '东方日产',
          value: '1'
        },
        {
          label: '启辰',
          value: '2'
        },
        {
          label: '东风汽车',
          value: '3'
        }
      ]
    }
  }
})

const busStatusData = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    BusStatus: {
      'result': '1',
      'rows': [
        {
          label: '营业',
          value: '1'
        },
        {
          label: '停业',
          value: '0'
        }
      ]
    }
  }
})

const orgTypeData = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    OrgType: {
      'result': '1',
      'rows': [
        {
          label: '全部',
          value: '0'
        },
        {
          label: '一级网点',
          value: '1'
        },
        {
          label: '4S店',
          value: '2'
        }
      ]
    }
  }
})

export default [
  {
    url: seComQueChoDlrApi.mdmOrgdlrQueryByPage.APIUrl + cH + 'v=' + seComQueChoDlrApi.mdmOrgdlrQueryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return initData
    }
  },
  {
    url: seApis.OrgBrand.APIUrl + cH + 'v=' + seApis.OrgBrand.ServiceCode,
    type: 'post',
    response: config => {
      return orgBrandData
    }
  },
  {
    url: seApis.BusStatus.APIUrl + cH + 'v=' + seApis.BusStatus.ServiceCode,
    type: 'post',
    response: config => {
      return busStatusData
    }
  },
  {
    url: seApis.OrgType.APIUrl + cH + 'v=' + seApis.OrgType.ServiceCode,
    type: 'post',
    response: config => {
      return orgTypeData
    }
  }
]

