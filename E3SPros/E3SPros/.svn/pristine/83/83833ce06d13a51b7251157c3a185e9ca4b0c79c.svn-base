import Mock from 'mockjs'
import { seApis } from '../../src/api/graphQLApiList/se'
import { seComQueChoDlrApi } from '../../src/api/graphQLApiList/se'

const cH = '/'

const initData = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seComQueChoMuQuery: {
      'result': '1',
      'rows': [{
        id: 1,
        label: '广东省',
        children: [{
          id: 2,
          label: '广州市',
          children: [{
            id: 3,
            label: '广州丰日店'
          }, {
            id: 4,
            label: '广州东风南方中大'
          }]
        }, {
          id: 5,
          label: '惠州市',
          children: [{
            id: 6,
            label: '惠州骏通'
          }]
        }]
      }, {
        id: 7,
        label: '山东省',
        children: [{
          id: 8,
          label: '济南市',
          children: [{
            id: 9,
            label: '济南大友'
          },
          {
            id: 10,
            label: '济南俊大友'
          }]
        }, {
          id: 11,
          label: '烟台市',
          children: [{
            id: 12,
            label: '烟台天航'
          }]
        }]
      }]
    }
  }
})

const seStoreTypeData = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seStoreType: {
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

const seCommonQueryChooseDlr = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    mdmOrgdlrQueryByPage: {
      'result': '1',
      'rows': [
        {
          'isSelect': '',
          'dlrId': '1',
          'dlrCode': '34242352342',
          'dlrShortName': '丰日店',
          'dlrFullName': '广州丰日店',
          'areaId': '',
          'areaName': '',
          'bigAreaId': '1',
          'bigAreaName': '',
          'smallAreaId': '',
          'smallAreaName': '',
          'provinceId': '1',
          'provinceName': '广东省',
          'cityId': '1',
          'cityName': '广州市',
          'carBrandCode': '',
          'carBrandCn': '',
          'orgType': '',
          'orgTypeName': '',
          'parentDlrId': '',
          'parentDlrCode': '',
          'parentDlrName': '',
          'oemCode': '',
          'groupCode': '',
          'oemId': '',
          'groupId': ''
        }, {
          'isSelect': '',
          'dlrId': '2',
          'dlrCode': '234235234',
          'dlrShortName': '风神店',
          'dlrFullName': '广州风神大道店',
          'areaId': '',
          'areaName': '',
          'bigAreaId': '',
          'bigAreaName': '',
          'smallAreaId': '',
          'smallAreaName': '',
          'provinceId': '1',
          'provinceName': '广东省',
          'cityId': '1',
          'cityName': '广州市',
          'carBrandCode': '',
          'carBrandCn': '',
          'orgType': '',
          'orgTypeName': '',
          'parentDlrId': '',
          'parentDlrCode': '',
          'parentDlrName': '',
          'oemCode': '',
          'groupCode': '',
          'oemId': '',
          'groupId': ''
        }, {
          'isSelect': '',
          'dlrId': '3',
          'dlrCode': '234235234',
          'dlrShortName': '龙岗',
          'dlrFullName': '深圳龙岗店',
          'areaId': '',
          'areaName': '',
          'bigAreaId': '3',
          'bigAreaName': '',
          'smallAreaId': '',
          'smallAreaName': '',
          'provinceId': '1',
          'provinceName': '广东省',
          'cityId': '2',
          'cityName': '深圳市',
          'carBrandCode': '',
          'carBrandCn': '',
          'orgType': '',
          'orgTypeName': '',
          'parentDlrId': '',
          'parentDlrCode': '',
          'parentDlrName': '',
          'oemCode': '',
          'groupCode': '',
          'oemId': '',
          'groupId': ''
        }, {
          'isSelect': '',
          'dlrId': '4',
          'dlrCode': '132425',
          'dlrShortName': '外滩',
          'dlrFullName': '上海外滩店',
          'areaId': '',
          'areaName': '',
          'bigAreaId': '4',
          'bigAreaName': '',
          'smallAreaId': '',
          'smallAreaName': '',
          'provinceId': '2',
          'provinceName': '上海市',
          'cityId': '3',
          'cityName': '上海市',
          'carBrandCode': '',
          'carBrandCn': '',
          'orgType': '',
          'orgTypeName': '',
          'parentDlrId': '',
          'parentDlrCode': '',
          'parentDlrName': '',
          'oemCode': '',
          'groupCode': '',
          'oemId': '',
          'groupId': ''
        }, {
          'isSelect': '',
          'dlrId': '6',
          'dlrCode': '1241235',
          'dlrShortName': '',
          'dlrFullName': '上海金滩店',
          'areaId': '',
          'areaName': '',
          'bigAreaId': '1',
          'bigAreaName': '',
          'smallAreaId': '',
          'smallAreaName': '',
          'provinceId': '2',
          'provinceName': '上海市',
          'cityId': '3',
          'cityName': '上海市',
          'carBrandCode': '',
          'carBrandCn': '',
          'orgType': '',
          'orgTypeName': '',
          'parentDlrId': '',
          'parentDlrCode': '',
          'parentDlrName': '',
          'oemCode': '',
          'groupCode': '',
          'oemId': '',
          'groupId': ''
        }, {
          'isSelect': '',
          'dlrId': '10',
          'dlrCode': '124124325',
          'dlrShortName': '西湖店',
          'dlrFullName': '杭州西湖店',
          'areaId': '',
          'areaName': '',
          'bigAreaId': '10',
          'bigAreaName': '',
          'smallAreaId': '',
          'smallAreaName': '',
          'provinceId': '3',
          'provinceName': '浙江省',
          'cityId': '8',
          'cityName': '杭州市',
          'carBrandCode': '',
          'carBrandCn': '',
          'orgType': '',
          'orgTypeName': '',
          'parentDlrId': '',
          'parentDlrCode': '',
          'parentDlrName': '',
          'oemCode': '',
          'groupCode': '',
          'oemId': '',
          'groupId': ''
        }
      ]
    }
  }
})

export default [
  {
    url: seApis.seComQueChoMuQuery.APIUrl + cH + 'v=' + seApis.seComQueChoMuQuery.ServiceCode,
    type: 'post',
    response: config => {
      return initData
    }
  },
  {
    url: seApis.seStoreType.APIUrl + cH + 'v=' + seApis.seStoreType.ServiceCode,
    type: 'post',
    response: config => {
      return seStoreTypeData
    }
  },
  {
    url: seComQueChoDlrApi.mdmOrgdlrQueryByPage.APIUrl + cH + 'v=' + seComQueChoDlrApi.mdmOrgdlrQueryByPage.ServiceCode + '$',
    type: 'post',
    response: config => {
      return seCommonQueryChooseDlr
    }
  }
]

