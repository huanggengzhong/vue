import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const data = Mock.mock({
  seBuReturnApplyOrderQueryFindAll: {
    result: '1',
    msg: '查询成功',
    pageIndex: '1',
    pageSize: '1',
    query: '2',
    rows: [
      {
        returnApplyOrderCode: 'H2901181105007',
        sourceCode: 'H2901181105007',
        applyDate: '2018-12-27',
        custName: '李代彬',
        applyEmpName: '',
        carLicense: '粤B11234',
        vin: 'LGBR4SE47FR002111',
        outStoreCode: 'H2901181105007',
        returnApplyOrderId: '',
        updateControlId: '',
        oemId: 'A1231',
        groupId: 'A123112',
        oemCode: 'DWA21',
        groupCode: 'DSA21'
      },
      {
        returnApplyOrderCode: 'H2901181105008',
        sourceCode: 'H2901181105008',
        applyDate: '2018-12-27',
        custName: '李永康',
        applyEmpName: '',
        carLicense: '粤B12534',
        vin: 'LGBR4SE47FR002112',
        outStoreCode: 'H2901181105008',
        returnApplyOrderId: '',
        updateControlId: '',
        oemId: 'A1231',
        groupId: 'A123112',
        oemCode: 'DWA21',
        groupCode: 'DSA21'
      }
    ]
  }
})

const data1 = Mock.mock({
  seBuReturnApplyOrderDQueryFindAll: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '2',
    msg: '查询成功',
    rows: [
      {

        partNo: '15208ED50A-C147',
        partName: '机油滤清器总成',
        unit: '个',
        outStoreQty: '2',
        salePrice: '12.21',
        saleAmount: '12.21',
        warehouseName: '精品库',
        placeCode: '001',
        repairTypeName: '定期保养',
        businessTypeName: '机电',
        partBrandName: 'xxx',
        returnApplyPartId: '1111111',
        returnApplyOrderId: '22222222',
        updateControlId: 'SDA1212131',
        oemId: 'A1231',
        groupId: 'A123112',
        oemCode: 'DWA21',
        groupCode: 'DSA21'
      },
      {

        partNo: '15208ED50A-C147',
        partName: '机油滤清器总成',
        unit: '个',
        outStoreQty: '2',
        salePrice: '23.21',
        saleAmount: '46.42',
        warehouseName: '精品库',
        placeCode: '001',
        repairTypeName: '定期保养',
        businessTypeName: '机电',
        partBrandName: 'xxx',
        returnApplyPartId: '1111111',
        returnApplyOrderId: '22222222',
        updateControlId: 'SDA1212131',
        oemId: 'A1231',
        groupId: 'A123112',
        oemCode: 'DWA21',
        groupCode: 'DSA21'
      }
    ]
  }
})

const data2 = Mock.mock({
  paBuDlrOutStoreMutationSave: {
    result: '1',
    msg: '保存成功'

  }
})

const data3 = Mock.mock({
  RepairOutReturnService004: {
    result: '1',
    msg: '查询成功',
    rows: [
      {

        OUT_STORE_CODE: 'WOH29011812070002',
        PART_NO: '15208ED50A',
        PART_NAME: '机油滤清器总成',
        UNIT: '个',
        SALE_PRICE: '12.21',
        OUT_STORE_QTY: '2',
        SALE_AMOUNT: '24.42',
        PAY_KIND_NAME: '',
        WAREHOUSE_NAME: '精品库',
        PLACE_CODE: '001',
        REMARK: '',
        BILL_TYPE: '',
        CUST_NAME: '李勇生',
        VIN: 'LGBR4SE47FR002111',
        OUT_STORE_DATE: '2018-12-08',
        WAREHOUSE_USER: '张一一',
        CAR_LICENSE: '粤A213424',
        RELATE_ORDER_CODE: '',
        PICKING_PERSON_NAME: '',
        OEM_ID: '',
        GROUP_ID: '',
        OEM_CODE: '',
        GROUP_CODE: ''
      },
      {

        OUT_STORE_CODE: 'WOH29011812070002',
        PART_NO: '15208ED50A',
        PART_NAME: '机油滤清器总成',
        UNIT: '个',
        SALE_PRICE: '12.21',
        OUT_STORE_QTY: '2',
        SALE_AMOUNT: '24.42',
        PAY_KIND_NAME: '',
        WAREHOUSE_NAME: '精品库',
        PLACE_CODE: '001',
        REMARK: '',
        BILL_TYPE: '',
        CUST_NAME: '李生',
        VIN: 'LGBR4SE47FR002111',
        OUT_STORE_DATE: '2018-12-08',
        WAREHOUSE_USER: '黄玉',
        CAR_LICENSE: '粤A213424',
        RELATE_ORDER_CODE: '',
        PICKING_PERSON_NAME: '',
        OEM_ID: '',
        GROUP_ID: '',
        OEM_CODE: '',
        GROUP_CODE: ''
      }
    ]
  }

})

export default [
  {

    url: paApis.seBuReturnApplyOrderQueryFindAll.APIUrl + cH + 'v=' + paApis.seBuReturnApplyOrderQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data
      }
    }
  },
  {

    url: paApis.seBuReturnApplyOrderDQueryFindAll.APIUrl + cH + 'v=' + paApis.seBuReturnApplyOrderDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data1
      }
    }
  },
  {
    url: paApis.paBuDlrOutStoreMutationSave.APIUrl + cH + 'v=' + paApis.paBuDlrOutStoreMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data2
      }
    }
  },
  {
    url: '/ly/mp/busicen/bff/scc/scm/pa/RepairOutReturn/PrintRepairOutReturn.do/v=RepairOutReturnService004',
    type: 'post',
    response: config => {
      return {
        data: data3
      }
    }
  }
]
