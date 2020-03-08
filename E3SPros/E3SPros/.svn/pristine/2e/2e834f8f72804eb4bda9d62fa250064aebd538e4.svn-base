import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const data = Mock.mock({
  paBuOemStorageQueryFindAll: {

    'result': '1',
    'msg': '查询成功',
    'pageindex': '',
    'pages': '',
    'records': '6',
    'rows|6': [{
      partNo: 'A131231',
      partName: '螺帽',
      unit: '东风日产',
      warehouseName: '武汉仓库',
      placeCode: 'SUE1213SWW',
      storeQty: '10000',
      borrowQty: '1000',
      canUseQtyReal: '8000',
      canUseQtyTheory: '9000',
      wayQty: '300',
      oweQty: '800',
      DlrPrice: '5.5',
      salePrice: '10',
      lastInDate: '2019/07/21',
      lastOutDate: '2019/07/22',
      overStoreMonths: '1',
      maxStoreQty: '15000',
      minStoreQty: '2000',
      safeQty: '3000',
      partBrandCode: 'SSS',
      partTypeName: 'N',
      partPropertyName: '耐用',
      partVariety: 'SSR',
      ownerTypeName: '主机厂',
      isEnableName: '启用',
      isEnable: '1',
      pubPartSeries: 'XNS213151321',
      pubPartCarType: 'UUN21321412',
      updateControlId: 'SS12120',
      oemId: '10000',
      groupId: '10000',
      oemCode: '10000',
      groupCode: '10000'

    }]
  }
})

const data2 = Mock.mock({
  paBuDlrStorageMutationSave: {

    'result': '1',
    'msg': '停用成功'
  }
})

export default [
  {
    url: paApis.paBuDlrStorageQueryFindAll.APIUrl + cH + 'v=' + paApis.paBuDlrStorageQueryFindAll.ServiceCode,
    // url: '/ly/mp/busicen/prc/graphql.do/v=paBuDlrStorageQueryFindAll',
    type: 'post',
    response: config => {
      return {
        data: data
      }
    }
  },
  {
    url: paApis.paBuDlrStorageMutationSave.APIUrl + cH + 'v=' + paApis.paBuDlrStorageMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data2
      }
    }
  }
]
