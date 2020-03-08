/**
 * description: 经销商扣款、车辆产品维护模拟数据
 * author: liyanm
 * createdDate: 2019-07-26
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 车辆产品维护查询
const mdmVeCarConfigPriceQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmVeCarConfigPriceQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        oemCode: '3333',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        carSalePrice: '116500.00',
        dlrPurPrice: '113000.00',
        priceValidBeginDate: '2019-06-21',
        priceValidEndDate: '2020-06-21',
        carSeriesId: '无',
        mdmVeCarSeriesExtend: '无',
        carSeriesCode: 'A36',
        carSeriesCn: '西玛',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '无',
        carConfigCode: 'B2BJ36EXA-----',
        mdmVeCarConfigExtend: '无',
        carConfigCn: '智享版红色17寸轮毂',
        supplyStatusCn: '生产供应',
        smallCarTypeId: '无',
        mdmSmallCarTypeExtend: '无',
        smallCarTypeCode: 'B2BJ36EXA-----',
        smallCarTypeCn: '东风日产-日产',
        carConfigPriceId: '无',
        updateControlId: '无',
        modifierName: '张玲',
        lastUpdatedDate: '2019-06-21'
      },
      {
        oemCode: '3333',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        carSalePrice: '116500.00',
        dlrPurPrice: '113000.00',
        priceValidBeginDate: '2019-06-21',
        priceValidEndDate: '2020-06-21',
        carSeriesId: '无',
        mdmVeCarSeriesExtend: '无',
        carSeriesCode: 'A36',
        carSeriesCn: '西玛',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '无',
        carConfigCode: 'B2BJ36EXA-----',
        mdmVeCarConfigExtend: '无',
        carConfigCn: '智享版红色17寸轮毂',
        supplyStatusCn: '生产供应',
        smallCarTypeId: '无',
        mdmSmallCarTypeExtend: '无',
        smallCarTypeCode: 'B2BJ36EXA-----',
        smallCarTypeCn: '东风日产-日产',
        carConfigPriceId: '无',
        updateControlId: '无',
        modifierName: '张玲',
        lastUpdatedDate: '2019-06-21'
      }
      ]
    }
  }
})
// 车辆产品维护保存
const mdmVeCarConfigPriceMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmVeCarConfigPriceMutationSave: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        oemCode: '3333',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        carSalePrice: '116500.00',
        dlrPurPrice: '113000.00',
        priceValidBeginDate: '2019-06-21 至 2020-06-21',
        priceValidEndDate: '无',
        carSeriesId: '无',
        mdmVeCarSeriesExtend: '无',
        carSeriesCode: 'A36',
        carSeriesCn: '西玛',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '无',
        carConfigCode: 'B2BJ36EXA-----',
        mdmVeCarConfigExtend: '无',
        carConfigCn: '智享版红色17寸轮毂',
        supplyStatusCn: '生产供应',
        smallCarTypeId: '无',
        mdmSmallCarTypeExtend: '无',
        smallCarTypeCode: 'B2BJ36EXA-----',
        smallCarTypeCn: '东风日产-日产',
        carConfigPriceId: '无',
        updateControlId: '无'
      },
      {
        oemCode: '3333',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        carSalePrice: '116500.00',
        dlrPurPrice: '113000.00',
        priceValidBeginDate: '2019-06-21 至 2020-06-21',
        priceValidEndDate: '无',
        carSeriesId: '无',
        mdmVeCarSeriesExtend: '无',
        carSeriesCode: 'A36',
        carSeriesCn: '西玛',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '无',
        carConfigCode: 'B2BJ36EXA-----',
        mdmVeCarConfigExtend: '无',
        carConfigCn: '智享版红色17寸轮毂',
        supplyStatusCn: '生产供应',
        smallCarTypeId: '无',
        mdmSmallCarTypeExtend: '无',
        smallCarTypeCode: 'B2BJ36EXA-----',
        smallCarTypeCn: '东风日产-日产',
        carConfigPriceId: '无',
        updateControlId: '无'
      }
      ]
    }
  }
})
// 经销商账户品牌扣款查询
const orcDbPurcashBrandQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    orcDbPurcashBrandQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows': [{
        oemCOde: 'V13221',
        groupCode: '222222',
        dlrId: '1',
        dlrCode: '222222',
        dlrShortName: '风日',
        usedCarBrandCode: 'A222222',
        carBrandCode: 'VB43322',
        dlrAccountName: '日产账户',
        isEnable: '1',
        isEnableCn: '是',
        purcashBrandRelId: '1',
        updateControlId: '222222'
      },
      {
        oemCOde: 'V132212',
        groupCode: '2222222',
        dlrId: '2',
        dlrCode: '2222222',
        dlrShortName: '风日',
        usedCarBrandCode: 'A2222222',
        carBrandCode: 'VB433222',
        dlrAccountName: '日产账户',
        isEnable: '2',
        isEnableCn: '是',
        purcashBrandRelId: '2',
        updateControlId: '2222222'
      },
      {
        oemCOde: 'V132213',
        groupCode: '2222223',
        dlrId: '3',
        dlrCode: '2222223',
        dlrShortName: '风日',
        usedCarBrandCode: 'A2222223',
        carBrandCode: 'VB433223',
        dlrAccountName: '尼桑账户',
        isEnable: '3',
        isEnableCn: '是',
        purcashBrandRelId: '3',
        updateControlId: '2222223'
      },
      {
        oemCOde: 'V132214',
        groupCode: '2222224',
        dlrId: '4',
        dlrCode: '2222224',
        dlrShortName: '风日',
        usedCarBrandCode: 'A2222224',
        carBrandCode: 'VB433224',
        dlrAccountName: '尼桑账户',
        isEnable: '4',
        isEnableCn: '是',
        purcashBrandRelId: '4',
        updateControlId: '2222224'
      },
      {
        oemCOde: 'V132215',
        groupCode: '2222225',
        dlrId: '5',
        dlrCode: '2222225',
        dlrShortName: '风日',
        usedCarBrandCode: 'A2222225',
        carBrandCode: 'VB433225',
        dlrAccountName: '尼桑账户',
        isEnable: '5',
        isEnableCn: '是',
        purcashBrandRelId: '5',
        updateControlId: '2222225'
      },
      {
        oemCOde: 'V132216',
        groupCode: '2222226',
        dlrId: '6',
        dlrCode: '2222226',
        dlrShortName: '风日',
        usedCarBrandCode: 'A2222226',
        carBrandCode: 'VB433226',
        dlrAccountName: '尼桑账户',
        isEnable: '6',
        isEnableCn: '是',
        purcashBrandRelId: '6',
        updateControlId: '2222226'
      },
      {
        oemCOde: 'V132217',
        groupCode: '2222227',
        dlrId: '7',
        dlrCode: '2222227',
        dlrShortName: '风日',
        usedCarBrandCode: 'A2222227',
        carBrandCode: 'VB433227',
        dlrAccountName: '尼桑账户',
        isEnable: '7',
        isEnableCn: '是',
        purcashBrandRelId: '7',
        updateControlId: '2222227'
      },
      {
        oemCOde: 'V132218',
        groupCode: '2222228',
        dlrId: '8',
        dlrCode: '2222228',
        dlrShortName: '风日',
        usedCarBrandCode: 'A2222228',
        carBrandCode: 'VB433228',
        dlrAccountName: '尼桑账户',
        isEnable: '8',
        isEnableCn: '是',
        purcashBrandRelId: '8',
        updateControlId: '2222228'
      }
      ]
    }
  }
})
// 经销商账户品牌扣款保存
const orcDbPurcashBrandMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    orcDbPurcashBrandMutationSave: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows': []
    }
  }
})

// 车辆补贴价格查询
const veBuDlrSubsidyQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veBuDlrSubsidyQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows|10': [{
        oemCode: '3333',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        dlrId: '1',
        dlrCode: 'B23232',
        dlrShortName: '广州风日店',
        countrySubsidy: '5000',
        areaSubsidy: '1000',
        otherSubsidy: '1000',
        priceValidBeginDate: '2019-06-21 ',
        priceValidEndDate: '2020-06-21',
        carSeriesId: '1',
        carSeriesCode: 'A36',
        carSeriesCn: 'A36',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '1',
        carConfigCode: 'B2BJ36EXA-----',
        carConfigCn: 'B2BJ36EXA-----',
        smallCarTypeId: '1',
        smallCarTypeCode: 'B2BJ36EXA-----',
        smallCarTypeCn: '东风日产-日产',
        dlrSubsidyId: '3000',
        carSalePrice: '2000',
        dlrPurPrice: '1500',
        updateControlId: '222'
      },
      {
        oemCode: '3333',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        dlrId: '2',
        dlrCode: 'B23232',
        dlrShortName: '深圳裕朋',
        countrySubsidy: '5000',
        areaSubsidy: '1000',
        otherSubsidy: '1000',
        priceValidBeginDate: '2019-06-21 ',
        priceValidEndDate: '2020-06-21',
        carSeriesId: '2',
        carSeriesCode: 'A36',
        carSeriesCn: 'A36',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '2',
        carConfigCode: 'B2BJ36EXA-----',
        carConfigCn: 'B2BJ36EXA-----',
        smallCarTypeId: '2',
        smallCarTypeCode: 'B2BJ36EXA-----',
        smallCarTypeCn: '东风日产-日产',
        dlrSubsidyId: '3000',
        carSalePrice: '2000',
        dlrPurPrice: '1500',
        updateControlId: '222'
      },
      {
        oemCode: '3333',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        dlrId: '3',
        dlrCode: 'B23232',
        dlrShortName: '广州置业',
        countrySubsidy: '5000',
        areaSubsidy: '1000',
        otherSubsidy: '1000',
        priceValidBeginDate: '2019-06-21 ',
        priceValidEndDate: '2020-06-21',
        carSeriesId: '3',
        carSeriesCode: 'B17',
        carSeriesCn: 'B17',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '3',
        carConfigCode: 'B2BJ36EXA-----',
        carConfigCn: 'DFL6FD2-QYC2',
        smallCarTypeId: '3',
        smallCarTypeCode: 'B2BJ36EXA-----',
        smallCarTypeCn: '东风日产-日产',
        dlrSubsidyId: '3000',
        carSalePrice: '2000',
        dlrPurPrice: '1500',
        updateControlId: '222'
      }
      ]
    }
  }
})
// 车辆补贴价格历史查询
const veBuDlrSubsidyHistoryQueryList = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veBuDlrSubsidyHistoryQueryList: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows|10': [{
        oemCode: '3333',
        countrySubsidy: '4333',
        areaSubsidy: '2000',
        otherSubsidy: '3000',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        dlrId: '1',
        dlrCode: 'B23232',
        priceValidBeginDate: '2019-03-12',
        priceValidEndDate: '2020-03-12',
        lastUpdatedDate: '2019-05-12',
        modifierName: '程玲',
        dlrShortName: '广州风日店',
        countrySubsidy: '5000',
        areaSubsidy: '1000',
        otherSubsidy: '1000',
        carSeriesId: '1',
        carSeriesCode: 'A36',
        carSeriesCn: 'A36',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '1',
        carConfigCode: 'B2BJ36EXA-----',
        carConfigCn: 'B2BJ36EXA-----',
        mdmSmallCarTypeExtend: {
          smallCarTypeCode: 'B2BJ36EXA-----',
          smallCarTypeCn: '东风日产-日产'
        },
        smallCarTypeId: '1',
        dlrSubsidyId: '3000',
        updateControlId: '222'
      },
      {
        oemCode: '3333',
        countrySubsidy: '5500',
        areaSubsidy: '3000',
        otherSubsidy: '2000',
        groupCode: '4343433',
        priceValidBeginDate: '2019-03-12',
        priceValidEndDate: '2020-03-12',
        lastUpdatedDate: '2019-05-12',
        modifierName: '程玲',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        dlrId: '2',
        dlrCode: 'B23232',
        dlrShortName: '深圳裕朋',
        countrySubsidy: '5000',
        areaSubsidy: '1000',
        otherSubsidy: '1000',
        carSeriesId: '2',
        carSeriesCode: 'A36',
        carSeriesCn: 'A36',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '2',
        carConfigCode: 'B2BJ36EXA-----',
        carConfigCn: 'B2BJ36EXA-----',
        smallCarTypeId: '2',
        mdmSmallCarTypeExtend: {
          smallCarTypeCode: 'B2BJ36EXA-----',
          smallCarTypeCn: '东风日产-日产'
        },
        dlrSubsidyId: '3000',
        updateControlId: '222'
      },
      {
        oemCode: '3333',
        countrySubsidy: '5500',
        areaSubsidy: '3000',
        otherSubsidy: '2000',
        groupCode: '4343433',
        carBrandCode: 'C3333',
        carBrandCn: '东风日产-日产',
        dlrId: '3',
        dlrCode: 'B23232',
        priceValidBeginDate: '2019-03-12',
        priceValidEndDate: '2020-03-12',
        lastUpdatedDate: '2019-05-12',
        modifierName: '程玲',
        dlrShortName: '广州置业',
        countrySubsidy: '5000',
        areaSubsidy: '1000',
        otherSubsidy: '1000',
        carSeriesId: '3',
        carSeriesCode: 'B17',
        carSeriesCn: 'B17',
        carTypeCode: 'DFL72AL2-LNC1',
        carConfigId: '3',
        carConfigCode: 'B2BJ36EXA-----',
        carConfigCn: 'DFL6FD2-QYC2',
        smallCarTypeId: '3',
        mdmSmallCarTypeExtend: {
          smallCarTypeCode: 'B2BJ36EXA-----',
          smallCarTypeCn: '东风日产-日产'
        },
        dlrSubsidyId: '3000',
        updateControlId: '222'
      }
      ]
    }
  }
})
// 车辆补贴价格保存
const veBuDlrSubsidyMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veBuDlrSubsidyMutationSave: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows': []
    }
  }
})
// 车辆产品资料查询
const mdmVeCarProductQueryListForPage = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    mdmVeCarProductQueryListForPage: {
      result: '1',
      msg: '查询成功',
      'rows|5': [{
        oemCode: '东风日产',
        groupCode: '东风日产',
        carBrandCode: '3',
        carBrandCn: '东风日产',
        carSalePrice: '轩逸',
        dlrPurPrice: '30000',
        carSeriesId: '2',
        carSeriesCode: '222',
        carSeriesCn: '西玛',
        smallCarTypeId: '22',
        smallCarTypeCode: '3232',
        smallCarTypeCn: '轩逸',
        carConfigId: '44',
        carConfigCode: '33',
        carConfigCn: 'B2BJ36EXA-----',
        supplyStatusCn: '生产供应',
        carIncolorId: '22',
        carIncolorCode: '443',
        carIncolorName: '深内饰G/G',
        carColorId: '443',
        carColorCode: '3434',
        carColorName: '珠光白/QAB',
        supplyColorPrice: '40000',
        supplyIncolorPrice: '1'
      }]
    }
  }
})
export default [{
  url: orgApis.mdmVeCarConfigPriceMutationSave.APIUrl + cH + 'v=' + orgApis.mdmVeCarConfigPriceMutationSave.ServiceCode,
  type: 'post',
  response: config => {
    return mdmVeCarConfigPriceMutationSave
  }
}, // 保存
{
  url: orgApis.mdmVeCarConfigPriceQueryListForPage.APIUrl + cH + 'v=' + orgApis.mdmVeCarConfigPriceQueryListForPage.ServiceCode,
  type: 'post',
  response: config => {
    return mdmVeCarConfigPriceQueryListForPage
  } // 查询
},
{
  url: orgApis.orcDbPurcashBrandQueryListForPage.APIUrl + cH + 'v=' + orgApis.orcDbPurcashBrandQueryListForPage.ServiceCode,
  type: 'post',
  response: config => {
    return orcDbPurcashBrandQueryListForPage
  } // 经销商账户品牌扣款查询
},
{
  url: orgApis.orcDbPurcashBrandMutationSave.APIUrl + cH + 'v=' + orgApis.orcDbPurcashBrandMutationSave.ServiceCode,
  type: 'post',
  response: config => {
    return orcDbPurcashBrandMutationSave
  } // 经销商账户品牌扣款保存
},
{
  url: orgApis.veBuDlrSubsidyQueryListForPage.APIUrl + cH + 'v=' + orgApis.veBuDlrSubsidyQueryListForPage.ServiceCode,
  type: 'post',
  response: config => {
    return veBuDlrSubsidyQueryListForPage
  } // 车辆补贴价格查询
},
{
  url: orgApis.veBuDlrSubsidyHistoryQueryList.APIUrl + cH + 'v=' + orgApis.veBuDlrSubsidyHistoryQueryList.ServiceCode,
  type: 'post',
  response: config => {
    return veBuDlrSubsidyHistoryQueryList
  } // 车辆补贴价格历史查询
},
{
  url: orgApis.veBuDlrSubsidyMutationSave.APIUrl + cH + 'v=' + orgApis.veBuDlrSubsidyMutationSave.ServiceCode,
  type: 'post',
  response: config => {
    return veBuDlrSubsidyMutationSave
  } // 车辆补贴价格保存
},
// 车辆产品资料查询
{
  url: orgApis.mdmVeCarProductQueryListForPage.APIUrl + cH + 'v=' + orgApis.mdmVeCarProductQueryListForPage.ServiceCode,
  type: 'post',
  response: config => {
    return mdmVeCarProductQueryListForPage
  }
}
]
