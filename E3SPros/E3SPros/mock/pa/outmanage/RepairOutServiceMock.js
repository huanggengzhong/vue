import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const data = Mock.mock({
  RepaiOutService001: {
    result: '1',
    msg: '初始化成功',
    rows: {

      OEM_ID: 'A1231',
      GROUP_ID: 'A123112',
      OEM_CODE: 'DWA21',
      GROUP_CODE: 'DSA21'
    }
  }
})

const data1 = Mock.mock({
  RepaiOutService002: {
    result: '1',
    msg: '查询成功',
    rows: [
      {
        REPAIR_ORDER_ID: 'SDW21314',
        REPAIR_ORDER_CODE: 'WAS123018501',
        RELATE_ORDER_ID: 'SDW13142',
        RELATE_ORDER_CODE: 'HDS123151233',
        VIN: 'LGBR4SE47FR002111',
        CUST_NAME: '王梅',
        DLR_CUST_NO: 'A1000',
        CUST_TEL: '13707222213',
        CAR_BRAND_CODE: 'SD1231455',
        CAR_SERIES_CODE: 'DA1231455',
        CAR_TYPE_CODE: 'QWS123142',
        CAR_LICENSE: '粤B11234',
        SA_NAME: '徐玉',
        APPLIER_NAME: '',
        SA_EMP_ID: 'AWD12351ASD',
        REPAIR_TIME: '2019-1-15',
        PRE_GET_DATE: '2019-1-19',
        DLR_ID: 'III2131',
        UPDATE_CONTROL_ID: 'SDW123156721',
        IS_NEW_CAR_ACCE_OUT: '1',
        SALE_ORDER_CODE: 'WAS231521',
        OEM_ID: 'A1231',
        GROUP_ID: 'A123112',
        OEM_CODE: 'DWA21',
        GROUP_CODE: 'DSA21'
      },
      {
        REPAIR_ORDER_ID: 'SDW21314',
        REPAIR_ORDER_CODE: 'WAS123018501',
        RELATE_ORDER_ID: 'SDW13142',
        RELATE_ORDER_CODE: 'HDS123151233',
        VIN: 'LGBR4SE47FR002111',
        CUST_NAME: '李梅梅',
        DLR_CUST_NO: 'A1000',
        CUST_TEL: '13707222213',
        CAR_BRAND_CODE: 'SD1231455',
        CAR_SERIES_CODE: 'DA1231455',
        CAR_TYPE_CODE: 'QWS123142',
        CAR_LICENSE: '粤B11234',
        SA_NAME: '谢晓雨',
        APPLIER_NAME: '',
        SA_EMP_ID: 'AWD12351ASD',
        REPAIR_TIME: '2019-3-11',
        PRE_GET_DATE: '2019-3-14',
        DLR_ID: 'III2131',
        UPDATE_CONTROL_ID: 'SDW123156721',
        IS_NEW_CAR_ACCE_OUT: '1',
        SALE_ORDER_CODE: 'WAS231521',
        OEM_ID: 'A1231',
        GROUP_ID: 'A123112',
        OEM_CODE: 'DWA21',
        GROUP_CODE: 'DSA21'
      }
    ]

  }
})

const data2 = Mock.mock({
  RepaiOutService003: {
    result: '1',
    msg: '查询成功',
    rows: [{

      IS_CHECKED: '1',
      REPAIR_PART_ID: 'WAS123018501',
      PART_ID: 'WDS12313',
      PART_NO: 'WDS12313',
      PART_NAME: '机油滤清器总成',
      OWNER_TYPE: '',
      LINK_D_ID: 'WAS123018501',
      REPAIR_ORDER_ID: 'H2901181105007',
      PART_QTY: '4',
      OUT_STORE_QTY: '4',
      SALE_AMOUNT: '48.84',
      PART_PRICE: '12.21',
      SALE_PRICE: '12.21',
      REPAIR_TYPE: '定期保养',
      REPAIR_TYPE_CODE: 'Wsda',
      REPAIR_TYPE_NAME: '定期保养',
      BUSINESS_TYPE: '机电',
      BUSINESS_TYPE_NAME: '机电',
      PAY_KIND: 'dsad121',
      PAY_KIND_NAME: '自费',
      IS_ADD: '0',
      STORE_QTY: '50',
      CAN_USE_QTY_REAL: '40',
      CAN_USE_QTY_THEORY: '45',
      WAREHOUSE_ID: 'SFW12314111',
      WAREHOUSE_CODE: 'WSWFSACES21',
      WAREHOUSE_NAME: '精品库',
      PLACE_ID: 'WSD22221',
      PLACE_CODE: 'SDD211112',
      PART_BRAND_NAME: '12313',
      PART_BRAND_CODE: 'DSAW',
      UNIT: '个',
      PUB_CAR_TYPE_CODE: '12311',
      HAVE_OUT_STORE_QTY: '0',
      DLR_LEAST_SALE_QTY: '1',
      IMPORT_ATTRIBUTE_NAME: '',
      BATTERY_CODE: 'AS5200001',
      IS_RETROSPECT_PART: '1',
      OEM_ID: 'A1231',
      GROUP_ID: 'A123112',
      OEM_CODE: 'DWA21',
      GROUP_CODE: 'DSA21'
    },
    {
      IS_CHECKED: '1',
      REPAIR_PART_ID: 'WAS123018501',
      PART_ID: 'WDS12314',
      PART_NO: 'WDS12314',
      PART_NAME: '机油滤清器总成',
      OWNER_TYPE: '',
      LINK_D_ID: 'WAS123018501',
      REPAIR_ORDER_ID: 'H2901181105007',
      PART_QTY: '4',
      OUT_STORE_QTY: '4',
      SALE_AMOUNT: '68.84',
      PART_PRICE: '18.21',
      SALE_PRICE: '17.21',
      REPAIR_TYPE: '定期保养',
      REPAIR_TYPE_CODE: 'Wsda',
      REPAIR_TYPE_NAME: '定期保养',
      BUSINESS_TYPE: '机电',
      BUSINESS_TYPE_NAME: '机电',
      PAY_KIND: 'dsad121',
      PAY_KIND_NAME: '自费',
      IS_ADD: '0',
      STORE_QTY: '50',
      CAN_USE_QTY_REAL: '40',
      CAN_USE_QTY_THEORY: '45',
      WAREHOUSE_ID: 'SFW12314111',
      WAREHOUSE_CODE: 'WSWFSACES21',
      WAREHOUSE_NAME: '精品库',
      PLACE_ID: 'WSD22221',
      PLACE_CODE: 'SDD211112',
      PART_BRAND_NAME: '12313',
      PART_BRAND_CODE: 'DSAW',
      UNIT: '个',
      PUB_CAR_TYPE_CODE: '12311',
      HAVE_OUT_STORE_QTY: '0',
      DLR_LEAST_SALE_QTY: '1',
      IMPORT_ATTRIBUTE_NAME: '',
      BATTERY_CODE: 'AS5200001',
      IS_RETROSPECT_PART: '1',
      OEM_ID: 'A1231',
      GROUP_ID: 'A123112',
      OEM_CODE: 'DWA21',
      GROUP_CODE: 'DSA21'
    }
    ]
  }
})

const data3 = Mock.mock({
  paBuDlrOutStoreMutationSave: {
    result: '1',
    msg: '保存成功'
  }
})

const data4 = Mock.mock({
  RepaiOutService005: {
    result: '1',
    msg: '查询成功',
    rows: {
      DLR_SHORT_NAME: '',
      BILL_TYPE_NAME: '',
      OUT_STORE_CODE: 'WOH29011812070002',
      RELATE_ORDER_CODE: '',
      OLD_OUT_STORE_CODE: '',
      RepairOLD_OUT_STORE_CODE: '',
      CUST_NAME: '李勇生',
      OUT_STORE_DATE: '2018-12-08',
      PART_VARIETY: '',
      OUT_STORE_QTY: '',
      SALE_AMOUNT: '',
      STORE_COST_AMOUNT: '',
      STORE_PRICE_AMOUNT: '',
      PART_PROFIT: '',
      REMARK: '',
      VIN: 'LGBR4SE47FR002111',
      CAR_LICENSE: '粤A213424'

    },
    Detail: [{
      PART_NO: '15208ED50A-C147',
      PART_NAME: '机油滤清器总成',
      UNIT: '个',
      OUT_STORE_QTY: '2',
      SALE_PRICE: '12.21',
      SALE_AMOUNT: '24.42',
      RETAIL_PRICE: '',
      DLR_PRICE: '',
      USER_PRICE: '',
      PUB_SERIES_NAME: '',
      STORE_COST_AMOUNT: '',
      STORE_COST: '',
      STORE_PRICE: '',
      STORE_PRICE_AMOUNT: '',
      PART_PROFIT: '',
      WAREHOUSE_NAME: '精品库',
      PLACE_CODE: '001',
      PART_BRAND_NAME: '',
      PART_PROPERTY_NAME: '',
      PART_TYPE_NAME: '',
      CAR_BRAND_NAME: '',
      OUT_STORE_CODE: '',
      OUT_STORE_DATE: '',
      USE_DEPT_NAME: '',
      PICKING_PERSON_NAME: '李晓晓',
      BILL_TYPE_NAME: '',
      BILL_TYPE: '',
      REMARK: ''
    },
    {
      PART_NO: '15208ED50A-C147',
      PART_NAME: '机油滤清器总成',
      UNIT: '个',
      OUT_STORE_QTY: '2',
      SALE_PRICE: '12.21',
      SALE_AMOUNT: '24.42',
      RETAIL_PRICE: '',
      DLR_PRICE: '',
      USER_PRICE: '',
      PUB_SERIES_NAME: '',
      STORE_COST_AMOUNT: '',
      STORE_COST: '',
      STORE_PRICE: '',
      STORE_PRICE_AMOUNT: '',
      PART_PROFIT: '',
      WAREHOUSE_NAME: '精品库',
      PLACE_CODE: '001',
      PART_BRAND_NAME: '',
      PART_PROPERTY_NAME: '',
      PART_TYPE_NAME: '',
      CAR_BRAND_NAME: '',
      OUT_STORE_CODE: '',
      OUT_STORE_DATE: '',
      USE_DEPT_NAME: '',
      PICKING_PERSON_NAME: '李晓晓',
      BILL_TYPE_NAME: '',
      BILL_TYPE: '',
      REMARK: ''
    }]

  }
})

export default [
  {
    // url: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/initRepairOut.do/v=RepaiOutService001',
    url: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/initRepairOut.do' + cH + 'v=' + paApis.RepaiOutService001.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data
      }
    }
  },
  {
    url: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/queryRepairOutM.do' + cH + 'v=' + paApis.RepaiOutService002.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data1
      }
    }
  },
  {
    url: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/queryRepairOutD.do' + cH + 'v=' + paApis.RepaiOutService003.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data2
      }
    }
  },
  {
    url: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/saveRepairOut.do' + cH + 'v=' + paApis.paBuDlrOutStoreMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data3
      }
    }
  },
  {
    url: '/ly/mp/busicen/bff/scc/wm/pa/RepairOut/printRepairOut.do' + cH + 'v=' + paApis.RepaiOutService005.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data4
      }
    }
  }

]

