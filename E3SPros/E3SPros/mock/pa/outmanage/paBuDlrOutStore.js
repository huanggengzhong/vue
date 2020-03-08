import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const data = Mock.mock({
  paBuDlrOutStoreQueryFindAll: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '4',
    msg: '查找成功',
    'rows|55': [
      {
        dlrShortName: '广州风日',
        outStoreCode: 'WOH1006190001',
        outStoreDate: '2019-06-19 17:25:11',
        relateOrderCode: 'H2901190619002',
        custName: '李汉群',
        billType: '维修出库',
        partVariety: '1',
        salePrice: '99.00',
        salePriceNotax: '90.00',
        saleAmountNotax: '99：00',
        storeCost: '84.62',
        storePrice: '99.00',
        outStoreQty: '3.00',
        saleAmount: '309.12',
        storeCostAmount: '84.62',
        storePriceAmount: '99.00',
        partProfit: '188.94',
        carLicense: '粤MVV811',
        vin: 'LGBF1AE00AR202817',
        remark: '',
        oemId: 'ASA123141',
        groupId: 'SQW21314',
        oemCode: 'AAAAAA',
        groupCode: 'SSSSSS'
      }
    ]
  }
})

const data1 = Mock.mock({
  paBuDlrOutStoreDQueryFindAll: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '1',
    msg: '查询成功',
    rows: [
      {
        dlrShortName: '广州风日',
        billTypeName: '维修出库',
        outStoreCode: 'WOH29011906190001',
        relateOrderCode: 'H2901190619002',
        custName: '李群',
        pickingPersonName: '王晓宇',
        vin: 'LGBF1AE00AR202817',
        carLicense: '粤MVV811',
        applierName: '广义',
        outStoreDate: '2019-06-19 17:25:11',
        partBrandName: '东风日产',
        partNo: '15208ED50A-C147',
        partName: '机油滤清器总成',
        outStoreQty: '3',
        salePrice: '99.00',
        saleAmount: '309.12',
        storeCostAmount: '84.62',
        storePriceAmount: '99.00',
        partProfit: '188.94',
        repairTypeName: '机电',
        businessTypeName: '正常维修',
        unit: '个',
        warehouseCode: '001',
        placeCode: '12-A1-0001-01',
        warehouseName: '精品库',
        relateOutStoreLinkCode: 'H2901190619002',
        partTypeCode: '保养件',
        partTypeName: 'XXN',
        partPropertyCode: 'wads',
        partPropertyName: '常用零件',
        seriesName:
          '楼兰+新骐达+新轩逸+N骏逸/骊威+逍客+新奇骏+轩逸经典+奇骏+老天籁+新蓝鸟+M50V+玛驰+颐达/骐达+阳光+新生代骐达+50系+全新天籁+T70+新楼兰+T90+骏逸/骊威+天籁+新阳光+西玛+新逍客+R30+370Z 硬顶',
        empName: '杨慧',
        drawTypeName: '',
        remark: '维修',
        payKindName: '普通付费',
        partVarietyName: '大灯',
        balanceStatusName: '已结算',
        partDiscount: '1',
        oemId: 'ASA123141',
        groupId: 'SQW21314',
        oemCode: 'AAAAAA',
        groupCode: 'SSSSSS'
      },
      {
        dlrShortName: '广州风日',
        billTypeName: '维修出库',
        outStoreCode: 'WOH29011906190001',
        relateOrderCode: 'H2901190619002',
        custName: '李汉群',
        pickingPersonName: '李晓宇',
        vin: 'LGBF1AE00AR202817',
        carLicense: '粤MVV811',
        applierName: '吴义',
        outStoreDate: '2019-06-19 17:25:11',
        partBrandName: '东风日产',
        partNo: '15208ED50A-C147',
        partName: '机油滤清器总成',
        outStoreQty: '3',
        salePrice: '99.00',
        saleAmount: '309.12',
        storeCostAmount: '84.62',
        storePriceAmount: '99.00',
        partProfit: '188.94',
        repairTypeName: '机电',
        businessTypeName: '正常维修',
        unit: '个',
        warehouseCode: '001',
        placeCode: '12-A1-0001-01',
        warehouseName: '精品库',
        relateOutStoreLinkCode: 'H2901190619002',
        partTypeCode: '保养件',
        partTypeName: 'XN',
        partPropertyCode: 'wads',
        partPropertyName: '常用零件',
        seriesName:
          '楼兰+新骐达+新轩逸+N骏逸/骊威+逍客+新奇骏+轩逸经典+奇骏+老天籁+新蓝鸟+M50V+玛驰+颐达/骐达+阳光+新生代骐达+50系+全新天籁+T70+新楼兰+T90+骏逸/骊威+天籁+新阳光+西玛+新逍客+R30+370Z 硬顶',
        empName: '吴敏慧',
        drawTypeName: '',
        remark: '维修',
        payKindName: '普通付费',
        partVarietyName: '大灯',
        balanceStatusName: '已结算',
        partDiscount: '1',
        oemId: 'ASA123141',
        groupId: 'SQW21314',
        oemCode: 'AAAAAA',
        groupCode: 'SSSSSS'
      }
    ]
  }
})
const data3 = Mock.mock({
  sparePartsWorkCalendarAll: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '1',
    msg: '查询成功',

    rows1: [
      { warehouseName: '全部', value: '全部' },
      { warehouseName: '公司日历', value: '公司日历' },
      { warehouseName: '仓库日历(一般配件)', value: '仓库日历(一般配件)' },
      { warehouseName: '仓库日历(化学品)', value: '仓库日历(化学品)' }
    ],
    rows2: [
      { warehouseAddr: '2019', value: '2019' },
      { warehouseAddr: '2018', value: '2018' },
      { warehouseAddr: '2017', value: '2017' },
      { warehouseAddr: '2016', value: '2016' }
    ],
    rows: [
      {
        workingCalendar: '工作日历',
        theCalendarName: 'SCM工作日历',
        calendarYear: '2019年',
        patternOfOrganization: '公司',
        groupNumber: '1',
        securitiesCompany: '221',
        numberOfDays: '221'
      },
      {
        workingCalendar: '工作日历',
        theCalendarName: 'SCM工作日历',
        calendarYear: '2019年',
        patternOfOrganization: '公司',
        groupNumber: '1',
        securitiesCompany: '221',
        numberOfDays: '221'
      },
      {
        workingCalendar: '工作日历',
        theCalendarName: 'SCM工作日历',
        calendarYear: '2019年',
        patternOfOrganization: '公司',
        groupNumber: '1',
        securitiesCompany: '221',
        numberOfDays: '221'
      }
    ]
  }
})
export default [
  {
    url:
      paApis.paBuDlrOutStoreQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paBuDlrOutStoreQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data
      }
    }
  },
  {
    url:
      paApis.paBuDlrOutStoreDQueryFindAll.APIUrl +
      cH +
      'v=' +
      paApis.paBuDlrOutStoreDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data1
      }
    }
  },
  // {
  //   url:
  //     paApis.sparePartsWorkCalendarAll.APIUrl +
  //     cH +
  //     'v=' +
  //     paApis.sparePartsWorkCalendarAll.ServiceCode,
  //   type: 'post',
  //   response: config => {
  //     return {
  //       data: data3
  //     }
  //   }
  // }
]
