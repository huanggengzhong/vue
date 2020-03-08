/**
 * description: 基础数据模拟数据
 * author: liyanm
 * createdDate: 2019-07-23
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'

// 替代车型查询 添加
const veDbReplaceCarConfigQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbReplaceCarConfigQueryFindAll: {
      result: '1',
      msg: '查询成功',
      pageindex: 1,
      pagesize: 10,
      pages: 5,
      records: 20,
      'rows': [
        {
          'carBrandCode': '1',
          'carBrandCn': '东风日产-日产',
          'carSeriesCn': '新轩逸',
          'carTypeCn': '西玛1',
          'carConfigId': '1111113322233322',
          'carConfigCn': 'FDRALWZJ11EXA-----',
          'replaceLevel': 1,
          'rpCarCn1': 'A22',
          'rpCarConfigCn1': 'FDRALWZJ11EXA-----',
          'rpCarCn2': 'B33',
          'rpCarConfigCn2': 'FDRALWZJ11EXA-----',
          'rpCarCn3': 'C44',
          'rpCarConfigCn3': 'FDRALWZJ11EXA-----',
          'rpCarCn4': 'D55',
          'rpCarConfigCn4': 'FDRALWZJ11EXA-----',
          'updateControlId': '23hhgksdhkj2gk2hg22g'
        },
        {
          'carBrandCode': '2',
          'carBrandCn': '东风日产-启辰',
          'carSeriesCn': 'X7',
          'carTypeCn': '西玛2',
          'carConfigId': '1111113322233322',
          'carConfigCn': 'FDRALWZJ11EXA-----',
          'replaceLevel': 2,
          'rpCarCn1': 'A22',
          'rpCarConfigCn1': 'FDRALWZJ11EXA-----',
          'rpCarCn2': 'B33',
          'rpCarConfigCn2': 'FDRALWZJ11EXA-----',
          'rpCarCn3': 'C44',
          'rpCarConfigCn3': 'FDRALWZJ11EXA-----',
          'rpCarCn4': 'D55',
          'rpCarConfigCn4': 'FDRALWZJ11EXA-----',
          'updateControlId': '892ygh34gkljgklh23gh23'
        },
        {
          'carBrandCode': '4',
          'carBrandCn': '东风日产-进口尼桑',
          'carSeriesCn': '天籁',
          'carTypeCn': '西玛3',
          'carConfigId': '1111113322233322',
          'carConfigCn': 'FDRALWZJ11EXA-----',
          'replaceLevel': 3,
          'rpCarCn1': 'A22',
          'rpCarConfigCn1': 'FDRALWZJ11EXA-----',
          'rpCarCn2': 'B33',
          'rpCarConfigCn2': 'FDRALWZJ11EXA-----',
          'rpCarCn3': 'C44',
          'rpCarConfigCn3': 'FDRALWZJ11EXA-----',
          'rpCarCn4': 'D55',
          'rpCarConfigCn4': 'FDRALWZJ11EXA-----',
          'updateControlId': '289giol4jh4lk5hjl45hj4'
        },
        {
          'carBrandCode': '99',
          'carBrandCn': '东风日产-其他',
          'carSeriesCn': '奇骏',
          'carTypeCn': '西玛4',
          'carConfigId': '1111113322233322',
          'carConfigCn': 'FDRALWZJ11EXA-----',
          'replaceLevel': 4,
          'rpCarCn1': 'A22',
          'rpCarConfigCn1': 'FDRALWZJ11EXA-----',
          'rpCarCn2': 'B33',
          'rpCarConfigCn2': 'FDRALWZJ11EXA-----',
          'rpCarCn3': 'C44',
          'rpCarConfigCn3': 'FDRALWZJ11EXA-----',
          'rpCarCn4': 'D55',
          'rpCarConfigCn4': 'FDRALWZJ11EXA-----',
          'updateControlId': '23rhig2hg23fh2kh2gk2g'
        }
      ]
    }
  }
})

// 替代车型保存 添加
const veDbReplaceCarConfigMutationSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbReplaceCarConfigMutationSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// VIN显示开关控制查询
const vinDisplaySwitchControlQuery = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    vinDisplaySwitchControlQuery: {
      result: '1',
      msg: '查询成功',
      pageindex: 1,
      pagesize: 10,
      pages: 5,
      records: 20,
      'rows': [
        {
          'carBrand': '东风日产-日产',
          'bigAreaName': '华南一区',
          'provinceName': '广东',
          'dlrName': '深圳裕朋',
          'isEnable': '是'
        },
        {
          'carBrand': '东风启辰-启辰',
          'bigAreaName': '华南二区',
          'provinceName': '北京',
          'dlrName': '深圳裕朋',
          'isEnable': '否'

        }

      ]
    }
  }
})

// VIN显示开关控制保存 添加
const vinDisplaySwitchControlSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbReplaceCarConfigMutationSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// 客户销退时间限制设置保存
const veSaleTimeLimitM = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veSaleTimeLimitM: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// 交车时间限制设置查询
const vedeliveryTimeLimitSetQuery = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    vedeliveryTimeLimitSetQuery: {
      result: '1',
      msg: '查询成功',
      pageindex: 1,
      pagesize: 10,
      pages: 5,
      records: 20,
      'rows|3': [
        {
          'carBrandCn': '东风启辰-启辰',
          'carBrandCode': '1',
          'pactCompanyName': '西区',
          'compFullName': '西区',
          'compShortName': '湖北区',
          'guno': '湖北',
          'compAddr': '武汉',
          'dlrName': '深圳欲朋',
          'isEnable': '是',
          'saleReturnBeginDate': '2020-10-10',
          'saleReturnEndDate': '2020-10-10',
          'limitSaleReturnBeginDate': '2020-10-26 00:00:00',
          'limitSaleReturnEndDate': '2020-10-26 00:00:00'
        },
        {
          'carBrandCn': '东风启辰-启辰',
          'carBrandCode': '1',
          'pactCompanyName': '南区',
          'compFullName': '华南二区',
          'compShortName': '广清韶区',
          'guno': '广东',
          'compAddr': '广州',
          'dlrName': '广州置业',
          'isEnable': '否',
          'saleReturnBeginDate': '2020-10-11',
          'saleReturnEndDate': '2020-10-11',
          'limitSaleReturnBeginDate': '2020-10-26 12:00:00',
          'limitSaleReturnEndDate': '2020-10-26 00:00:00'
        }
      ]
    }
  }
})

// 交车时间限制设置保存
const vedeliveryTimeLimitSetSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    vedeliveryTimeLimitSetSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 销售合同查询
const veContractQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veContractQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        saleTypeName: '销售类型',
        saleOrderCode: '1',
        saleContractCode: '合同编号1',
        custName: 'q',
        caEmpId: 'w',
        vin: 'e',
        roleId: '单据状态',
        abnormalName: '异常状态',
        carBrandCode: '车辆品牌1',
        abnormalName: '车型名称1',
        carTypeCode: '车型编码1',
        carColorName: '车身颜色1',
        builtIn: '内饰颜色1',
        preDeliveryDate: '预计交车时间1',
        chargeState: '收款状态1',
        ReceivedAmount: '已收定金1',
        contractPrice: '合同金额1',
        loanPoundage: '按揭手续费1',
        contractPrice: '应收总金额1',
        favoAmount: '优惠申请状态1',
        isLicence: '车务代办1',
        isPart: '精品业务1',
        isInsurance: '保险业务1',
        createDateBegin: '下单日期1'
      },
      {
        saleTypeName: '销售类型',
        saleOrderCode: '2',
        saleContractCode: '合同编号2',
        custName: '2',
        caEmpId: '2',
        vin: '2',
        roleId: '单据状态',
        abnormalName: '异常状态',
        carBrandCode: '车辆品牌2',
        abnormalName: '车型名称2',
        carTypeCode: '车型编码2',
        carColorName: '车身颜色2',
        builtIn: '内饰颜色1',
        preDeliveryDate: '预计交车时间2',
        chargeState: '收款状态1',
        ReceivedAmount: '已收定金2',
        contractPrice: '合同金额2',
        loanPoundage: '按揭手续费2',
        contractPrice: '应收总金额2',
        favoAmount: '优惠申请状态2',
        isLicence: '车务代办2',
        isPart: '精品业务2',
        isInsurance: '保险业务2',
        createDateBegin: '下单日期2'
      }]
    }
  }
})

// 采购单确认时机设置查询 添加
const veDbOrderConfirmQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbOrderConfirmQueryFindAll: {
      result: '1',
      msg: '查询成功',
      'rows|1': [{
        'timeType': '不能确认时间段',
        'cbDate': '13-22-23',
        'ceDate': '22-43-43',
        'bDate': '2019-06-21',
        'eDate': '2020-06-21'
      }]
    }
  }
})

// 采购单确认时机设置保存 添加
const veDbOrderConfirmMutationSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbOrderConfirmMutationSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 批次分配时机查询
const veDbBatchAssignTimeQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbBatchAssignTimeQueryFindAll: {
      result: '1',
      msg: '查询成功',
      rows: [{
        'carBrandCn': '东方日产-日产',
        'times': ['5:00', '7:00', '7:30']
      },
      { 'times': ['8:00', '13:00', '8:30'] },

      { 'times': ['5:00', '7:00', '7:30'] },
      { 'times': ['8:00', '13:00', '8:30'] },
      { 'times': ['8:00', '13:00', '8:30'] },
      { 'times': ['5:00', '7:00', '7:30'] },
      { 'times': ['8:00', '13:00', '8:30'] }
      ]
    }
  }
})
// 批次分配时机保存
const veDbBatchAssignTimeMutation = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbBatchAssignTimeMutation: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 批次分配车系查询
const veDbBatchBaseSeriesQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbBatchBaseSeriesQueryFindAll: {
      result: '1',
      msg: '查询成功',
      'rows|20': [{
        'carBrandCn': '东风日产',
        'carBranCode': '23',
        'carSeriesCn': '西玛',
        'carSeriesId': 'YTU878',
        'dlrId': '24423',
        'dlrShortName': '广州花都',
        'id': ''

      }]
    }
  }
})

// TP设置查询
const veTpDlrManageSetQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veTpDlrManageSetQueryFindAll: {
      result: '1',
      msg: '查询成功',
      'rows|20': [{
        'carBrandCn': '东风日产',
        carBrandCode: '1',
        carBrandCn: '2',
        areaId: '3',
        areaCode: '4',
        areaName: '5',
        bigAreaId: '6',
        bigAreaCode: '7',
        bigAreaName: '8',
        smallAreaId: '9',
        smallAreaCode: 'p',
        smallAreaName: 'l',
        provinceId: 'm',
        provinceCode: 'n',
        provinceName: 'a',
        cityId: 'b',
        cityCode: '6',
        cityName: '1',
        dlrId: '1',
        dlrCode: '1',
        dlrShortName: 'x',
        carSeriesId: 'x',
        carSeriesCode: 'x',
        carSeriesCn: 'c',
        carSeriesEn: 'b',
        isEnable: '1',
        isEnableName: '31',
        creator: '123',
        createdName: '123',
        createdDate: '123',
        modifier: '123',
        modifiedName: '123',
        lastUpdateDate: '12',
        updateControlId: '1'

      }]
    }
  }
})

// 批次分配作废方式设置查询
const veDbBatcinvalidWayQuery = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbBatcinvalidWayQuery: {
      result: '1',
      msg: '查询成功',
      rows: [{
        InvalidWay: 6,
        PurType: ['特殊采购单', '订单生产车型采购单']
      }]
    }
  }
})

// 批次分配作废方式设置保存
const veDbBatcinvalidWaySave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbBatcinvalidWaySave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 批次分配车系保存
const batchBaseSeriesMutationSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    batchBaseSeriesMutationSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// 资金类型保存
const veDbPurcashTypeMutationUpdate = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbPurcashTypeMutationUpdate: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: []
    }
  }
})

// 物流运输时效设置查询
const veLogisticsTransportationTimelineSettingsQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veLogisticsTransportationTimelineSettingsQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        placeOfDeparture: '花都中心库',
        typeName: '经销商',
        distributor: '广州丰日',
        moveIn: '郑州中心库',
        transportDays: '1',
        isEnable: '1',
        dlrId: '6'
      },
      {
        placeOfDeparture: '郑州中心库',
        typeName: '经销商',
        distributor: '广州丰日',
        moveIn: '花都中心库',
        transportDays: '1',
        isEnable: '1',
        dlrId: '6'
      }
      ]
    }
  }
})

// 批次分配车系保存
const veLogisticsTransportationTimelineSettingsSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veLogisticsTransportationTimelineSettingsSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 物流运输时效设置查询
const veDbDlrBankQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbDlrBankQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows|30': [{
        bankId: '花都中心库',
        carBrandCode: '经销商',
        carBrandCn: '广州丰日',
        dlrId: '郑州中心库',
        dlrCode: '1',
        dlrShortName: '1SF39J',
        bankCode: '广发银行',
        bankName: '123',
        bankAddr: '1233321',
        bankTypeId: '1',
        bankTypeName: '123',
        financeOrgTypeId: '123',
        financeOrgTypeName: '123',
        orderNo: '123',
        isEnable: '123',
        isEnableName: '123',
        creator: '213',
        createdDate: '123',
        modifyName: '123',
        lastUpdateDate: '123',
        updateControlId: '123'
      }
      ]
    }
  }
})

// 经销商银行信息设置
const veDbDlrBankMutationSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbDlrBankMutationSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 品牌资金类型查询
const veDbPurcashTypeBrandQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbPurcashTypeBrandQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        carBrandCn: '东方日产-日产',
        carBrandCode: '1',
        purcashTypeId: '1',
        purcashTypeName: '现金',
        cancelDay: '3',
        orderNo: '1',
        carOurPriortiy: '1',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        isEnable: '1'
      },
      {
        carBrandCn: '启辰',
        carBrandCode: '2',
        purcashTypeId: '2',
        purcashTypeName: '现金（工商融资）',
        cancelDay: '4',
        orderNo: '1',
        carOurPriortiy: '2',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        isEnable: '1'
      },
      {
        carBrandCn: '东方日产-日产',
        carBrandCode: '3',
        purcashTypeId: '3',
        purcashTypeName: '现金（自筹）',
        cancelDay: 'Nissian',
        orderNo: '1',
        carOurPriortiy: '3',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        isEnable: '1'
      },
      {
        carBrandCn: '东方日产-日产',
        carBrandCode: '4',
        purcashTypeId: '4',
        purcashTypeName: '保证金',
        cancelDay: '23',
        orderNo: '1',
        carOurPriortiy: '4',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        isEnable: '1'
      }
      ]
    }
  }
})
// 品牌资金类型保存
const veDbPurcashTypeBrandMutationUpdate = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbPurcashTypeBrandMutationUpdate: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: []
    }
  }
})
// 经销商资金类型查询
const veDbOrgPurcashTypeQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbOrgPurcashTypeQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        carBrandCn: '东方日产-日产',
        carBrandCode: '1',
        dlrId: '1',
        dlrShortName: '日产风日',
        statu: '1',
        purcashTypeId: '1',
        purcashTypeName: '现金',
        cancelDay: '3',
        orderNo: '1',
        carOurPriortiy: '1',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        isEnable: '1'
      },
      {
        carBrandCn: '启辰',
        carBrandCode: '2',
        dlrId: '2',
        dlrShortName: '启辰风日',
        statu: '1',
        purcashTypeId: '2',
        purcashTypeName: '现金（工商融资）',
        cancelDay: '4',
        orderNo: '1',
        carOurPriortiy: '2',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        isEnable: '1'
      },
      {
        carBrandCn: '东方日产-日产',
        carBrandCode: '3',
        dlrId: '3',
        dlrShortName: '日产风日',
        statu: '1',
        purcashTypeId: '3',
        purcashTypeName: '现金（自筹）',
        cancelDay: 'Nissian',
        orderNo: '1',
        carOurPriortiy: '3',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        isEnable: '1'
      },
      {
        carBrandCn: '东方日产-日产',
        carBrandCode: '4',
        dlrId: '4',
        dlrShortName: '日产风日',
        statu: '1',
        purcashTypeId: '4',
        purcashTypeName: '保证金',
        cancelDay: '23',
        orderNo: '1',
        carOurPriortiy: '4',
        isOnlineStatus: '1',
        isBatchStatus: '1',
        isEnable: '1'
      }
      ]
    }
  }
})
// 经销商资金类型保存
const veDbOrgPurcashTypeMutationUpdate = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbOrgPurcashTypeMutationUpdate: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: []
    }
  }
})

// 自动出货确认时机查询
const veDbCaroutTimeSetQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCaroutTimeSetQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        carBrandCn: '日产',
        carBrandCode: '1',
        runTimeDay: '星期一',
        runtime: '2019-07-12 05:30',
        outTimeTimeId: '1'
      },
      {
        carBrandCn: '启辰',
        carBrandCode: '99',
        runTimeDay: '星期二',
        runtime: '2019-07-12 00:00',
        outTimeTimeId: '2'
      },
      {
        carBrandCn: '日产',
        carBrandCode: '4',
        runTimeDay: '星期三',
        runtime: '2019-07-12 03:00',
        outTimeTimeId: '3'
      },
      {
        carBrandCn: '启辰',
        carBrandCode: '2',
        runTimeDay: '星期四',
        runtime: '2019-07-12 12:30',
        outTimeTimeId: '4'
      }
      ]
    }
  }
})
// 自动出货确认机设置保存
const veDbCaroutTimeSetMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCaroutTimeSetMutationSave: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: []
    }
  }
})
// 自动出货查询
const veDbCaroutConfigQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCaroutConfigQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows|10': [{
        carBrandCn: '东方日产-日产',
        carBrandCode: '1',
        carSeriesCn: '劲客/P153',
        carSeriesId: '1',
        carConfigCn: '1',
        carConfigId: '1',
        orderTypeCn: '1',
        orderTYpeId: '1',
        purcashTypeId: '1',
        purcashTypeName: '现金',
        dlrShortName: '上海宝钢、上海冠松、广州丰日、广州恒源',
        dlrId: '1'
      },
      {
        carBrandCn: '东方日产-日产',
        carBrandCode: '2',
        carSeriesCn: '骏逸/骊威/L10',
        carSeriesId: '2',
        carConfigCn: '2',
        carConfigId: '2',
        orderTypeCn: '2',
        orderTYpeId: '2',
        purcashTypeId: '2',
        purcashTypeName: '现金',
        dlrShortName: '上海宝钢、上海冠松、广州丰日、广州恒源',
        dlrId: '2'
      },
      {
        carBrandCn: '东方日产-日产',
        carBrandCode: '3',
        carSeriesCn: '轩逸经典/G11',
        carSeriesId: '3',
        carConfigCn: '3',
        carConfigId: '3',
        orderTypeCn: '3',
        orderTYpeId: '3',
        purcashTypeId: '3',
        purcashTypeName: '现金',
        dlrShortName: '上海宝钢、上海冠松、广州丰日、广州恒源',
        dlrId: '3'
      },
      {
        carBrandCn: '东方日产-日产',
        carBrandCode: '4',
        carSeriesCn: '老天籁/J31',
        carSeriesId: '4',
        carConfigCn: '4',
        carConfigId: '4',
        orderTypeCn: '4',
        orderTYpeId: '4',
        purcashTypeId: '4',
        purcashTypeName: '现金',
        dlrShortName: '上海宝钢、上海冠松、广州丰日、广州恒源',
        dlrId: '4'
      }
      ]
    }
  }
})

// // 车型分配模式查询
// const veDbCarconfigDismodeQueryFindAll = Mock.mock({
//   result: '1',
//   msg: '',
//   data: {
//     veDbCarconfigDismodeQueryFindAll: {
//       result: '1',
//       msg: '',
//       pageindex: 1,
//       pagesize: 1000,
//       pages: 1,
//       records: 3,
//       rows: [{
//         carBrandCode: '1',
//         carBrandCn: '东风日产-日产',
//         carSeriesCn: '西玛',
//         carConfigCode: 'FDRALWZJ11EXA--珠光白/QAB',
//         distributeModeName: '系统分配',
//         distributeMode: '122',
//         updateControlId: '12caee2daceb40e7bd2601cb34893864'
//       },
//       {
//         carBrandCode: '1',
//         carBrandCn: '东风日产-日产',
//         carSeriesCn: '西玛',
//         carConfigCode: 'FDRALWZJ11EXA--珠光白/QAB',
//         distributeModeName: '实时分配',
//         distributeMode: '123',
//         updateControlId: '22caee2daceb40e7bd2601cb34893864'
//       },
//       {
//         carBrandCode: '1',
//         carBrandCn: '东风日产-日产',
//         carSeriesCn: '西玛',
//         carConfigCode: 'FDRALWZJ11EXA--珠光白/QAB',
//         distributeModeName: '批次分配',
//         distributeMode: '124',
//         updateControlId: '32caee2daceb40e7bd2601cb34893864'
//       }
//       ]
//     }
//   }
// })

// 车型分配模式保存
const veDbCarconfigDismodeMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCarconfigDismodeMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

// 经销商可分配仓库设置查询
const veDbCarStockHouseCanUseQueyFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCarStockHouseCanUseQueyFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 2,
      rows: [{
        carBrandCode: '1',
        carBrandCn: '东风日产-日产',
        bigAreaName: '北区',
        smallAreaName: '吉林区',
        dlrShortName: '广州风日店',
        dlrId: '1',
        carHouseName1: '1',
        carHouseName2: '2',
        carHouseName3: '3',
        carHouseName4: '1',
        carHouseName5: '2',
        carHouseName6: '3',
        carHouseName7: '1',
        carHouseName8: '2',
        carHouseName9: '3',
        carHouseName10: '1',
        storeShowStatus: '否',
        storeShowStatusCode: '0',
        updateControlId: '12caee2daceb40e7bd2601cb34893882'
      },
      {
        carBrandCode: '1',
        carBrandCn: '东风日产-日产',
        bigAreaName: '北区',
        smallAreaName: '吉林区',
        dlrShortName: '惠州骏通店',
        dlrId: '2',
        carHouseName1: '2',
        carHouseName2: '3',
        carHouseName3: '1',
        carHouseName4: '2',
        carHouseName5: '3',
        carHouseName6: '1',
        carHouseName7: '2',
        carHouseName8: '3',
        carHouseName9: '1',
        carHouseName10: '2',
        storeShowStatus: '是',
        storeShowStatusCode: '1',
        updateControlId: '22caee2daceb40e7bd2601cb34893892'
      }
      ]
    }
  }
})

// 经销商可分配仓库设置保存
const veDbCarStockPriorityMutaionSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCarStockPriorityMutaionSave: {
      result: '1',
      msg: ''
    }
  }
})

// 经销商车型优先分配设置查询
const veDbCarConfigPriQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCarConfigPriQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows|3': [
        {
          carBranCode: '1',
          carBrandCn: '东风日产-日产',
          carSeriesCode: '轩逸/B13',
          priorityModel: 'DFL72AL2-LNC1',
          carConfigCode: 'FDRALWZJ11EXA-----',
          dlrIds: '1,2',
          dlrShortNames: '上海宝钢,上海冠松',
          updateControlId: '12caee2daceb40e7bd2601cb34893842'
        },
        {
          carBranCode: '1',
          carBrandCn: '东风日产-日产',
          carSeriesCode: '轩逸/B13',
          priorityModel: 'DFL72AL2-LNC1',
          carConfigCode: 'FDRALWZJ11EXA-----',
          dlrIds: '3,4',
          dlrShortNames: '广州丰日,广州恒源',
          updateControlId: '22caee2daceb40e7bd2601cb34893832'
        }
      ]
    }
  }
})

// 搬入地查询
const moveInAddressQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    moveInAddressQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      'rows|3': [
        {
          carHouseCode: '0176',
          isDefaultAddr: '1',
          isEnable: '1',
          carBranCode: '1',
          carBrandCn: '东风日产-日产',
          areaName: '北区',
          bigAreaName: '东北区',
          smallAreaName: '黑龙江区',
          provinceName: '黑龙江',
          cityName: '哈尔滨',
          dlrShortName: '广州风日店',
          dlrId: '1',
          carStockHouseId: '1',
          carHouseName: '大庆勤华瑞嘉主搬',
          carHouseAddr: '大庆市让胡路区经济开发区祥驰路17号',
          updateControlId: '12caee2daceb40e7bd2601cb34893842'
        },
        {
          carHouseCode: '0434',
          isDefaultAddr: '1',
          isEnable: '1',
          carBranCode: '1',
          carBrandCn: '东风日产-日产',
          areaName: '南区',
          bigAreaName: '西南区',
          smallAreaName: '广州区',
          provinceName: '广东',
          cityName: '广州',
          dlrShortName: '深圳裕朋',
          dlrId: '2',
          carStockHouseId: '2',
          carHouseName: '大庆勤华瑞嘉鸡西次搬',
          carHouseAddr: '黑龙江鸡西市鸡冠区红星乡汽车产业园区A-07-2',
          updateControlId: '22caee2daceb40e7bd2601cb34893842'
        }
      ]
    }
  }
})

// 搬入地保存
const veDbMoveInMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbMoveInMutationSave: {
      result: '1',
      msg: ''
    }
  }
})
// 用户小区设置保存
const userAreaMutation = Mock.mock({
  result: '1',
  msg: '',
  data: {
    userAreaMutation: {
      result: '1',
      msg: ''
    }
  }
})

// 储位查询
const veStockPlace = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veStockPlace: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          carStockHousePlaceId: '1',
          carHouseCode: '1',
          carHouseName: '花都中心库',
          carAreaName: '花都储区',
          carPlaceName: '花都储位',
          carPlaceManger: '管理员',
          isEnable: '1',
          updateControlId: '42caee2daceb40e7bd2601cb34893864'
        },
        {
          carStockHousePlaceId: '2',
          carHouseCode: '2',
          carHouseName: '郑州中心库',
          carAreaName: '大连储区',
          carPlaceName: '大连储位',
          carPlaceManger: '管理员',
          isEnable: '1',
          updateControlId: '52caee2daceb40e7bd2601cb34893864'
        },
        {
          carStockHousePlaceId: '3',
          carHouseCode: '3',
          carHouseName: '新疆分库',
          carAreaName: '新疆储区',
          carPlaceName: '新疆储位',
          carPlaceManger: '管理员',
          isEnable: '1',
          updateControlId: '62caee2daceb40e7bd2601cb34893864'
        }
      ]
    }
  }
})

// 储位保存
const veStockPlaceSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veStockPlaceSave: {
      result: '1',
      msg: ''
    }
  }
})

// 储区查询
const veStockArea = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veStockArea: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 2,
      rows: [{
        carStockAreaId: '1',
        carHouseCode: '1',
        carHouseName: '花都中心库',
        carAreaName: '花都储区',
        carAreaManger: '管理员',
        isEnable: '1',
        remark: '无',
        updateControlId: '12caee2daceb40e7bd2601cb34893864'
      },
      {
        carStockAreaId: '2',
        carHouseCode: '2',
        carHouseName: '郑州中心库',
        carAreaName: '郑州储区',
        carAreaManger: '管理员',
        isEnable: '1',
        remark: '无',
        updateControlId: '22caee2daceb40e7bd2601cb34893864'
      },
      {
        carStockAreaId: '3',
        carHouseCode: '3',
        carHouseName: '新疆分库',
        carAreaName: '郑州储区',
        carAreaManger: '管理员',
        isEnable: '1',
        remark: '无',
        updateControlId: '32caee2daceb40e7bd2601cb34893864'
      }
      ]
    }
  }
})

// 储区保存
const veStockAreaSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veStockAreaSave: {
      result: '1',
      msg: ''
    }
  }
})

// 经销商车型优先分配设置保存
const veDbCarConfigPriMutationUpdate = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCarConfigPriMutationUpdate: {
      result: '1',
      msg: ''
    }
  }
})

// 自动出货保存
const veDbCaroutConfigMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbCaroutConfigMutationSave: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: []
    }
  }
})

// 采购单作废
const veCancelOrder = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veCancelOrder: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: []
    }
  }
})
// 主机厂库存统计
const veInStockCarStatic = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veInStockCarStatic: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      'rows|3': [
        {
          oemGroupName: '主机厂',
          oemName: '日产',
          carBrandName: '东风日产-日产',
          carBrandCode: '0176',
          carSeriesCode: '1',
          carConfigCode: '1',
          carIncolorCode: '1',

          quantity: '2',
          total: '4',
          updateControlId: '12caee2daceb40e7bd2601cb34893842'
        },
        {
          oemGroupName: '主机厂',
          oemName: '日产',
          carBrandName: '东风日产-日产',
          carBrandCode: '0176',
          carSeriesCode: '1',
          carConfigCode: '1',
          carIncolorCode: '1',

          quantity: '2',
          total: '4',
          updateControlId: '12caee2daceb40e7bd2601cb34893842'
        }
      ]
    }
  }
})
// 本月提车进度
const vePurSpeedStatic = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurSpeedStatic: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      'rows|3': [
        {
          oemGroupName: '主机厂',
          oemName: '日产',
          carBrandName: '东风日产-日产',
          carBrandCode: '0176',
          carSeriesCode: '1',
          purFeate: '1',
          assigncount: '1',
          aim: '122',
          monthWaitAssignCnt: '2',
          waiAssignAmt: '4',
          purAmt: '2'
        },
        {
          oemGroupName: '主机厂',
          oemName: '日产',
          carBrandName: '东风日产-日产',
          carBrandCode: '0176',
          carSeriesCode: '1',
          purFeate: '1',
          assigncount: '1',
          aim: '122',
          monthWaitAssignCnt: '2',
          waiAssignAmt: '4',
          purAmt: '2'
        }
      ]
    }
  }
})

// 车型分配模式设置查询
const veDbCarconfigDismodeQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbCarconfigDismodeQueryFindAll: {
      result: '1',
      msg: '查询成功',
      'rows|10': [{
        'carBrandName': '不能确认时间段',
        'carSeriesCn': '13-22-23',
        'carConfigCn': '22-43-43',
        'carConfigCode': '2019-06-21',
        'carConfigId': '2020-06-21',
        'distributeModeName': '',
        'distributeMode': ''
      }]
    }
  }
})
// 非直营二级网点设置查询
const veDbPactCompanyQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbPactCompanyQueryFindAll: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      'rows|10': [{
        'carBrandCn': '东风日产',
        'carBrandCode': '1',
        'pactCompanyName': '类型1',
        'compFullName': '日产2网23123',
        'compShortName': '日产2网',
        'guno': '3123123',
        'compAddr': '广东省',
        'enableStatus': '是',
        'pactBegDate': '2020-06-21',
        'pactEndDate': '2020-06-21',
        'invBank': '广发',
        'isEnableName': '启用',
        'isEnable': '1',
        'pactUpdateControlId': '1'

      }]
    }
  }
})
// 发票面额与项目名称设置查询
const veReceiptnameSetting = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veReceiptnameSetting: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      rows: [{
        'carBrandCode': '东风日产-日产',
        'dlrShortName': '深圳裕朋',
        'dlrInvoLimitName': '300',
        'invoiceItemId': '价外费用',
        'creator': 'sdfsdf',
        'createdDate': '2019-08-26'
      },
      {
        'carBrandCode': '东风日产-启辰',
        'dlrShortName': '广州置业',
        'dlrInvoLimitName': '300',
        'invoiceItemId': '价外费用',
        'creator': '12efdsff',
        'createdDate': '2019-08-26'
      }]
    }
  }
})
// 库存周转率基准车系权重系数设置查询
const veInventoryTRSetting = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veInventoryTRSetting: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      rows: [{
        'carBrandCode': '东风日产-日产',
        'carSeries': '西玛',
        'WeightCorfficientts': '0.2'
      },
      {
        'carBrandCode': '东风日产-启辰',
        'carSeries': '新轩逸',
        'WeightCorfficientts': '0.2'
      }]
    }
  }
})
// 报备申请查询
const veApplicationForFiling = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veApplicationForFiling: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      rows: [{
        'carBrandCode': '东风日产-日产',
        'bigArea': '天河',
        'smallArea': '天猫',
        'prohibit': '广东',
        'cityName': '广州',
        'dlr': '深圳**',
        'custName': '爱思福',
        'custType': '个人',
        'credNo': '49498195919151151',
        'policyType': '购车补贴',
        'applyType': '是',
        'applyPeople': '王梅',
        'auditTime': '2019-9-16',
        'auditExplain': '成功',
        'validityPeriodOfFiling': '2021-9-16',
        'closingDate': '2025-9-16',
        'toReviewPeople': '赵玉',
        'toReviewDate': '2019-9-18',
        'toReviewExplain': '通过',
        'applyFrequency': '7',
        'useUnitName': '石家庄工业',
        'purchasingUnitAddress': '石家庄',
        'personInChargeName': '马瑞',
        'personInChargePost': '办事处专员',
        'personInChargePhoneNumber': '155115464652',
        'personInChargeLandline': '55557887',
        'decisionMakerName': '刘福',
        'decisionMakerPost': '策划组组长',
        'decisionMakerphoneNumber': '61651651',
        'decisionMakerLandline': '5548154',
        'thisTimePurchaseNumber': '59987',
        'estimatePurchaseDate': '2019-10-10',
        'thisYearPurchaseNumber': '70000',
        'businessScope': '全国',
        'beVisitedPeople': '刘辉',
        'beVisitedPeoplePost': '人事',
        'visitedType': '电话',
        'visitedDate': '2019-9-15',
        'negotiationResults': '通过',
        'orderNum': 'Ac247782144',
        'purOrderType': '电子文档',
        'orderDateBegin': '2019-9-18',
        'contractCode': '4344455521',
        'carConfigCn': 'QWEF45966551---',
        'carConfigId': '146555412',
        'carIncolorId': '711SEVJH',
        'carColorId': '1577164',
        'optionalPackage': '精装',
        'vin': '452456',
        'engineNo': 'ss44511',
        'certificateNo': '2019-9-15hg',
        'ArrivalDate': '2019-9-15',
        'salesConsultant': '黄丽',
        'salesDate': '2019-10-15',
        'wareHouseMultiCode': '东南集中仓',
        'PlaceCode': '1号区位',
        'AreaCode': '1号区',
        'phone': '17165495455',
        'credTypeCode': '身份证',
        'province': '广东',
        'district': '花都区',
        'outStockDate': '2019-10-15',
        'outStockPeople': '赵航',
        'carInspectionCategory': '备胎情况',
        'handoverPerson': '马倩'
      },
      {
        'carBrandCode': '东风日产-日产',
        'bigArea': '天河',
        'smallArea': '天猫',
        'prohibit': '广东',
        'cityName': '广州',
        'dlr': '深圳**',
        'custName': '爱思福',
        'custType': '个人',
        'credNo': '49498195919151151',
        'policyType': '购车补贴',
        'applyType': '是',
        'applyPeople': '王梅',
        'auditTime': '2019-9-16',
        'auditExplain': '成功',
        'validityPeriodOfFiling': '2021-9-16',
        'closingDate': '2025-9-16',
        'toReviewPeople': '赵玉',
        'toReviewDate': '2019-9-18',
        'toReviewExplain': '通过',
        'applyFrequency': '7',
        'useUnitName': '石家庄工业',
        'purchasingUnitAddress': '石家庄',
        'personInChargeName': '马瑞',
        'personInChargePost': '办事处专员',
        'personInChargePhoneNumber': '155115464652',
        'personInChargeLandline': '55557887',
        'decisionMakerName': '刘福',
        'decisionMakerPost': '策划组组长',
        'decisionMakerphoneNumber': '61651651',
        'decisionMakerLandline': '5548154',
        'thisTimePurchaseNumber': '59987',
        'estimatePurchaseDate': '2019-10-10',
        'thisYearPurchaseNumber': '70000',
        'businessScope': '全国',
        'beVisitedPeople': '刘辉',
        'beVisitedPeoplePost': '人事',
        'visitedType': '电话',
        'visitedDate': '2019-9-15',
        'negotiationResults': '通过',
        'orderNum': 'Ac247782144',
        'purOrderType': '电子文档',
        'orderDateBegin': '2019-9-18',
        'contractCode': '4344455521',
        'carConfigCn': 'QWEF45966551---',
        'carConfigId': '146555412',
        'carIncolorId': '711SEVJH',
        'carColorId': '1577164',
        'optionalPackage': '精装',
        'vin': '452456',
        'engineNo': 'ss44511',
        'certificateNo': '2019-9-15hg',
        'ArrivalDate': '2019-9-15',
        'salesConsultant': '黄丽',
        'salesDate': '2019-10-15',
        'wareHouseMultiCode': '东南集中仓',
        'PlaceCode': '1号区位',
        'AreaCode': '1号区',
        'phone': '17165495455',
        'credTypeCode': '身份证',
        'province': '广东',
        'district': '花都区',
        'outStockDate': '2019-10-15',
        'outStockPeople': '赵航',
        'carInspectionCategory': '操作手册',
        'handoverPerson': '马倩'
      }]
    }
  }
})
// 报备申请保存
const veApplicationForFilingSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veApplicationForFilingSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// 选装包查询
const veOptionalpackage = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veOptionalpackage: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      rows: [{
        'carSeriesCn': '50系/10C',
        'carConfigId': 'BDTALBF10CEXA---A-',
        'carColorCode': 'OP2102',
        'carConfigName': '电动全景天窗  前后一体式侧窗安全气帘',
        'carColorPrise': '100.00'
      },
      {
        'carSeriesCn': '50系/10C',
        'carConfigId': 'BDTALBF10CEXAAAA-',
        'carColorCode': 'OPCT01',
        'carConfigName': '宇宙黑  （深色主题内饰）',
        'carColorPrise': '200.00'
      },
      {
        'carSeriesCn': '50系/10C',
        'carConfigId': 'BDTALBF10CEXAAAA-',
        'carColorCode': 'OPCT01',
        'carConfigName': '宇宙黑  （深色主题内饰）',
        'carColorPrise': '200.00'
      },
      {
        'carSeriesCn': '50系/10C',
        'carConfigId': 'BDTALBF10CEXAAAA-',
        'carColorCode': 'OPCT01',
        'carConfigName': '宇宙黑  （深色主题内饰）',
        'carColorPrise': '200.00'
      },
      {
        'carSeriesCn': '50系/10C',
        'carConfigId': 'BDTALBF10CEXAAAA-',
        'carColorCode': 'OPCT01',
        'carConfigName': '宇宙黑  （深色主题内饰）',
        'carColorPrise': '200.00'
      }]
    }
  }
})
// 经销商风险店设置查询
const veDbDlrRiskSetQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDbDlrRiskSetQueryFindAll: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      rows: [{
        'carBrandCode': '东风启辰-启辰',
        'dlrShortName': '深圳裕朋',
        'RiskIdentification': '是',
        'RestrictingPeople': '田婷',
        'RestrictingDate': '2016-09-13 09:20:56',
        'RemovalRestrictor': '田婷',
        'RemovalRestrictorDate': '2019-8-19 08:56:18'
      },
      {
        'carBrandCode': '东风日产-日产',
        'dlrShortName': '广州置业',
        'RiskIdentification': '是',
        'RestrictingPeople': '孙鹏',
        'RestrictingDate': '2016-09-13 09:20:56',
        'RemovalRestrictor': '田婷',
        'RemovalRestrictorDate': '2019-8-19 08:56:18'
      }]
    }
  }
})
// 经销商风险店设置保存
const veDbDlrRiskSetMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbDlrRiskSetMutationSave: {
      result: '1',
      msg: '保存成功!'
    }
  }
})
// 经销商开关设置查询
const veDealerSwitchSetting = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veDealerSwitchSetting: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      rows: [{
        'carBrandCode': '东风日产-日产',
        'provinceld': '广东',
        'city': '广州',
        'dlr': '广州置业',
        'tdcmsbutton': '否',
        'syscobutton': '否',
        'area': '南区',
        'bigArea': '华南一区',
        'smallArea': '粤东区'
      },
      {
        'carBrandCode': '东风日产-日产',
        'provinceld': '广东',
        'city': '广州',
        'dlr': '广州置业',
        'tdcmsbutton': '是',
        'syscobutton': '是',
        'area': '南区',
        'bigArea': '华南一区',
        'smallArea': '粤东区'
      }]
    }
  }
})
// 调拨量设置查询
const veAllocationRule = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veAllocationRule: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      rows: [{
        'carBrandCode': '东风日产-日产',
        'bigArea': '天河',
        'province': '广东',
        'dlr': '广州置业',
        'monthYear': '2019-8',
        'LiftCarTarget': '500',
        'AllocationAmount': '400',
        'AllocationRate': '60',
        'AlreadyUsedAlreadyUsedAmount': '120',
        'SurplusAllocationAmount': '200',
        'CrossMarketShare': '是',
        'SameGroup': '是',
        'SameNonGroup': '是'
      },
      {
        'carBrandCode': '东风日产-日产',
        'bigArea': '天河',
        'province': '广东',
        'dlr': '广州置业',
        'monthYear': '2019-8',
        'LiftCarTarget': '500',
        'AllocationAmount': '400',
        'AllocationRate': '60',
        'AlreadyUsedAlreadyUsedAmount': '120',
        'SurplusAllocationAmount': '200',
        'CrossMarketShare': '是',
        'SameGroup': '是',
        'SameNonGroup': '是'
      }]
    }
  }
})
// 客户销退时间限制设置
const veSaleTimeLimitQry = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veSaleTimeLimitQry: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      'rows|10': [{
        'carBrandName': '东风日产-日产',
        'carBrandCode': '1',
        'areaName': '西区',
        'bigAreaName': '西区',
        'smallAreaName': '湖北区',
        'provinceName': '湖北',
        'cityName': '武汉',
        'dlrShortName': '深圳欲朋',
        'isEnable': '是',
        'saleReturnBeginDate': '20:20:15',
        'saleReturnEndDate': '20:20:20',
        'limitSaleReturnBeginDate': '2019-10-15 00:03:02',
        'limitSaleReturnEndDate': '2019-10-15 00:03:02'
      },
      {
        'carBrandName': '东风启辰-启辰',
        'carBrandCode': '1',
        'areaName': '南区',
        'bigAreaName': '华南二区',
        'smallAreaName': '广清韶区',
        'provinceName': '广东',
        'cityName': '广州',
        'dlrShortName': '广州置业',
        'isEnable': '否',
        'saleReturnBeginDate': '20:20:15',
        'saleReturnEndDate': '20:20:20',
        'limitSaleReturnBeginDate': '2019-10-15 00:03:02',
        'limitSaleReturnEndDate': '2019-10-15 00:03:02'
      }
      ]
    }
  }
})
// 用户小区设置
const userAreaQueryByPage = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    userAreaQueryByPage: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      'rows|10': [{
        'carBrandCn': '东风日产-日产',
        'orgName': '乘用车公司',
        'userName': '邓悄然',
        'loginName': 'cyc-dengqr',
        'userType': 'PV用户',
        'areaName': '华东区',
        'smallAreaName': ''
      },
      {
        'carBrandCn': '东风日产-日产',
        'orgName': '小鹏汽车',
        'userName': '张雁',
        'loginName': 'zhangyan',
        'userType': 'DLR用户',
        'areaName': '华南区',
        'smallAreaName': ''
      },
      {
        'carBrandCn': '东风日产-日产',
        'orgName': '小鹏汽车',
        'userName': '代颂娥',
        'loginName': 'daise',
        'userType': 'PV用户',
        'areaName': '华东区',
        'smallAreaName': ''
      },
      {
        'carBrandCn': '东风启辰-启辰',
        'orgName': '乘用车公司',
        'userName': '刘亚梅',
        'loginName': 'liuyamei',
        'userType': 'DLR用户',
        'areaName': '华南区',
        'smallAreaName': ''
      }]
    }
  }
})
// 用户经销商查询
const mdmEmployeeDlrQueryByPage = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    mdmEmployeeDlrQueryByPage: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      'rows|10': [{
        'carBrandCn': '东风日产-日产',
        'orgName': '乘用车公司',
        'userName': '邓悄然',
        'loginaccountname': 'cyc-dengqr',
        'UserClass': 'PV用户',
        'areaName': '华东区',
        'smallAreaName': ''
      },
      {
        'carBrandCn': '东风日产-日产',
        'orgName': '小鹏汽车',
        'userName': '张雁',
        'loginaccountname': 'zhangyan',
        'UserClass': 'DLR用户',
        'areaName': '华南区',
        'smallAreaName': ''
      },
      {
        'carBrandCn': '东风日产-日产',
        'orgName': '小鹏汽车',
        'userName': '代颂娥',
        'loginaccountname': 'daise',
        'UserClass': 'PV用户',
        'areaName': '华东区',
        'smallAreaName': ''
      },
      {
        'carBrandCn': '东风启辰-启辰',
        'orgName': '乘用车公司',
        'userName': '刘亚梅',
        'loginaccountname': 'liuyamei',
        'UserClass': 'DLR用户',
        'areaName': '华南区',
        'smallAreaName': ''
      }]
    }
  }
})
// 客户销退额度设置查询
const veCustomerSellingBack = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veCustomerSellingBack: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      rows: [{
        'carBrandCn': '东风日产-日产',
        'area': '南区',
        'cityName': '广州',
        'smallarea': '粤东区',
        'bigarea': '华南一区',
        'province': '广东',
        'dlr': '深圳裕朋',
        'takeEffectYear': '2019-8',
        'sellingbackQuota': '120',
        'AlreadyUsedQuota': '200',
        'SurplusQuota': '60'
      },
      {
        'carBrandCn': '东风日产-日产',
        'area': '南区',
        'cityName': '广州',
        'smallarea': '粤东区',
        'bigarea': '华南一区',
        'province': '广东',
        'dlr': '深圳裕朋',
        'takeEffectYear': '2019-8',
        'sellingbackQuota': '120',
        'AlreadyUsedQuota': '200',
        'SurplusQuota': '60'
      }]
    }
  }
})
// 非直营二级网点设置保存
const veDbPactCompanyMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbPactCompanyMutationSave: {
      result: '1',
      msg: '保存成功!'
    }
  }
})
// 车辆产品查询
const mdmVeCarProductQueryListForPage = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    mdmVeCarProductQueryListForPage: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      'rows|10': [{
        'carBrandCn': '东风日产',
        'carBrandCode': '1',
        'carSeriesCn': '西玛',
        'batchSeriesId': '2112',
        'carTypeName': '西玛2代',
        'carTypeCode': '3123123',
        'carConfigCode': 'YRYR75578-HY7',
        'powerType': '混动',
        'supplyStatus': '供应',
        'marketPrice': '10000',
        'sellingPrice': '10000'

      }]
    }
  }
})

// 不参与在线库存分配车型设置
const veNoOnlineStockCarTypeSetting = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veNoOnlineStockCarTypeSetting: {
      result: '1',
      msg: '查询成功',
      pageindex: 1,
      pagesize: 10,
      pages: 1,
      records: 30,
      'rows|5': [
        {
          carBrandCn: '东风日产',
          carSeriesCn: '新逍客',
          carTypeCode: 'DFL6430MBC1-PQC4R',
          carConfigCode: 'FDRALGYJ10EXA-A--C',
          carColor: '象牙白',
          carColorCode: 'QX1',
          // isEnableCode: '1',
          isEnable: '1',
          updateControlId: 'UDP138H45KTH9Y54'
        },
        {
          carBrandCn: '东风日产',
          carSeriesCn: '新逍客',
          carTypeCode: 'DFL6430MBC1-PQC2',
          carConfigCode: 'FDRALGYJ10EXACA-AD',
          carColor: '月光银',
          carColorCode: 'K23',
          // isEnableCode: '0',
          isEnable: '0',
          updateControlId: 'UDPFH92HFSIFSDA4'
        },
        {
          carBrandCn: '东风日产',
          carSeriesCn: '新逍客',
          carTypeCode: 'DFL6430MBC1-PQC3',
          carConfigCode: 'FDRALGYJ10EXAAA-BC',
          carColor: '翡丽灰',
          carColorCode: 'K51',
          // isEnableCode: '0',
          isEnable: '0',
          updateControlId: 'UDPDSF45JE3FKHDS'
        },
        {
          carBrandCn: '东风日产',
          carSeriesCn: '新逍客',
          carTypeCode: 'DFL6430MBC1-PQC3',
          carConfigCode: 'FDRNLHWJ10EXABK-BC',
          carColor: '风尚金',
          carColorCode: 'CAC',
          // isEnableCode: '1',
          isEnable: '1',
          updateControlId: 'UDP823Y8F43S53FIS'
        }
      ]
    }
  }
})
// 不参与在线库存分配车型设置保存
const veNoOnlineStockCarTypeSettingSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veNoOnlineStockCarTypeSettingSave: {
      result: '1',
      msg: '保存成功!'
    }
  }
})

// 经销商按店分配台数设置查询
const disNumQuery = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    disNumQuery: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      'rows|20': [{
        'carBrandCn': '东风日产',
        'carBranCode': '23',
        'carSeriesCn': '西玛',
        'carSeriesId': 'YTU878',
        'dlrId': '24423',
        'dlrShortName': '广州花都',
        'area': '南区',
        'bigAreaName': '华南区',
        'smallAreaName': '广深区',
        'province': '广东省',
        'city': '广州市',
        'everyNum': 3,
        'id': ''

      }]
    }
  }
})
// 经销商库存度运行时机设置查询
const dlrStockRuntimeSetQuery = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    dlrStockRuntimeSetQuery: {
      result: '1',
      msg: '查询成功',
      rows: [
        {
          'carBrandCn': '东方日产-日产',
          'times': ['5:00', '7:00', '7:30']
        },
        { 'times': ['8:00', '13:00', '8:30'] },
        { 'times': ['5:00', '7:00', '7:30'] },
        { 'times': ['8:00', '13:00', '8:30'] },
        { 'times': ['8:00', '13:00', '8:30'] },
        { 'times': ['5:00', '7:00', '7:30'] },
        { 'times': ['8:00', '13:00', '8:30'] }
      ]
    }
  }
})
// 经销商库存度运行时机设置保存
const dlrStockRuntimeSetSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    dlrStockRuntimeSetSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// 经销商按店分配台数设置保存
const disNumSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    disNumSave: {
      result: '1',
      msg: '保存成功!'
    }
  }
})
// 地库设置查询
const basementSetQuery = Mock.mock({
  result: '1',
  msg: '',
  data: {
    basementSetQuery: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        startHouseCode: '花都中心库',
        typeName: '经销商',
        dlrName: '广州丰日',
        moveIn: '郑州中心库',
        transportDays: '1',
        isEnable: '1',
        dlrId: '6',
        basement: '花都中心库2'
      },
      {
        startHouseCode: '郑州中心库',
        typeName: '经销商',
        dlrName: '广州丰日',
        moveIn: '花都中心库',
        transportDays: '1',
        isEnable: '1',
        dlrId: '6',
        basement: '花都中心库2'
      }
      ]
    }
  }
})
// 地库设置保存
const basementSetSave = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    basementSetSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 分配达成率目标导入
const veAssignGoalImportQry = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veAssignGoalImportQry: {
      result: '1',
      msg: '查询成功',
      pageindex: 1,
      pagesize: 10,
      pages: 1,
      records: 30,
      'rows|5': [
        {
          carBrandCn: '东风日产',
          dlrShortName: '惠州骏通',
          carSeriesCn: '新逍客',
          assignMonth: '201907',
          goalAmount: '100',
          createdDate: '2019-08-07',
          updateControlId: 'UDP138H45KTH9Y54'
        },
        {
          carBrandCn: '东风日产',
          dlrShortName: '广州喜龙',
          carSeriesCn: '新轩',
          assignMonth: '201908',
          goalAmount: '200',
          createdDate: '2019-04-01',
          updateControlId: 'UDPFH92HFSIFSDA4'
        },
        {
          carBrandCn: '东风日产',
          dlrShortName: '东莞东风南方振安',
          carSeriesCn: '新轩',
          assignMonth: '201904',
          goalAmount: '400',
          createdDate: '2019-05-20',
          updateControlId: 'UDPDSF45JE3FKHDS'
        },
        {
          carBrandCn: '东风日产',
          dlrShortName: '深圳裕朋',
          carSeriesCn: '新逍客',
          assignMonth: '201902',
          goalAmount: '300',
          createdDate: '2019-09-14',
          updateControlId: 'UDP823Y8F43S53FIS'
        }
      ]
    }
  }
})

// 目标量类型维护查询
const targetAmountTypeQry = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    targetAmountTypeQry: {
      result: '1',
      msg: '查询成功',
      pageindex: 1,
      pagesize: 10,
      pages: 1,
      records: 30,
      'rows|5': [
        {
          carBrandCn: '东风日产',
          carBrandCode: '1',
          targetType: '途达提车目标',
          isDecimal: '否',
          isDecimalCode: '0',
          carryingUnit: 'A',
          isStatistics: '是',
          isStatisticsCode: '1',
          isEnable: '1',
          updateControlId: 'UDPF32F47SIFSDA4'
        },
        {
          carBrandCn: '东风日产-启辰',
          carBrandCode: '2',
          targetType: 'PV市占率挑战2目标',
          isDecimal: '否',
          isDecimalCode: '0',
          carryingUnit: 'B',
          isStatistics: '是',
          isStatisticsCode: '1',
          isEnable: '0',
          updateControlId: 'UDPF32F47SIFSDA4'
        },
        {
          carBrandCn: '东风日产-进口尼桑',
          carBrandCode: '4',
          targetType: '上半年SUV交车目标',
          isDecimal: '是',
          isDecimalCode: '1',
          carryingUnit: 'C',
          isStatistics: '否',
          isStatisticsCode: '0',
          isEnable: '0',
          updateControlId: 'UDPF32F47SIFSDA4'
        },
        {
          carBrandCn: '东风日产-其它',
          carBrandCode: '99',
          targetType: '调拨量基数',
          isDecimal: '是',
          isDecimalCode: '1',
          carryingUnit: 'D',
          isStatistics: '否',
          isStatisticsCode: '0',
          isEnable: '1',
          updateControlId: 'UDPF32F47SIFSDA4'
        }
      ]
    }
  }
})

// 分配达成率目标导入保存
const veAssignGoalImportSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veAssignGoalImportSave: {
      result: '1',
      msg: '保存成功!'
    }
  }
})

// 目标量类型维护-保存
const targetAmountTypeSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    targetAmountTypeSave: {
      result: '1',
      msg: '保存成功!'
    }
  }
})

// 物流运输时限设置查询
const logTransTimeLimitSetQry = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    logTransTimeLimitSetQry: {
      result: '1',
      msg: '查询成功',
      pageindex: 1,
      pagesize: 10,
      pages: 1,
      records: 30,
      'rows|5': [
        {
          departure: '花都中心库',
          departureCode: '1',
          destinationType: '主机厂',
          destination: '新疆分库',
          warDestinationCode: '5',
          transportType: '自提',
          transportTypeCode: '58',
          logisticsTransCompany: '运输物流公司A',
          transportDate: '3',
          isEnable: '1',
          updateControlId: 'UDPF32F47SIFSDA4'
        },
        {
          departure: '郑州中心库',
          departureCode: '2',
          destinationType: '经销商',
          destination: '上海松江',
          dlrDestinationCode: '1',
          transportType: '自提',
          transportTypeCode: '58',
          logisticsTransCompany: '运输物流公司B',
          transportDate: '4',
          isEnable: '0',
          updateControlId: 'UDPF32F47SIFSDA4'
        },
        {
          departure: '新疆分库',
          departureCode: '3',
          destinationType: '主机厂',
          destination: '花都中心库',
          warDestinationCode: '6',
          transportType: '送货',
          transportTypeCode: '120',
          logisticsTransCompany: '运输物流公司C',
          transportDate: '5',
          isEnable: '0',
          updateControlId: 'UDPF32F47SIFSDA4'
        },
        {
          departure: '大连分库',
          departureCode: '4',
          destinationType: '经销商',
          destination: '上海诚隆',
          dlrDestinationCode: '2',
          transportType: '送货',
          transportTypeCode: '120',
          logisticsTransCompany: '运输物流公司D',
          transportDate: '7',
          isEnable: '1',
          updateControlId: 'UDPF32F47SIFSDA4'
        }
      ]
    }
  }
})

// // 物流运输时限设置-保存
// const logTransTimeLimitSetSave = Mock.mock({
//   result: '1',
//   msg: '',
//   data: {
//     logTransTimeLimitSetSave: {
//       result: '1',
//       msg: '保存成功!'
//     }
//   }
// })
// 客户销退时间限制设置-保存
const logCustomerReturnBackset = Mock.mock({
  result: '1',
  msg: '',
  data: {
    logCustomerReturnBackset: {
      result: '1',
      msg: '保存成功!'
    }
  }
})
// 目标量审核查询
const targetQuantityAuditQuery = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    targetQuantityAuditQuery: {
      result: '1',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 6,
      msg: '查询成功',
      'rows|20': [{
        'carBrandCn': '东风日产',
        'carBranCode': '23',
        'carSeriesCn': '西玛',
        'carSeriesId': 'YTU878',
        'dlrId': '24423',
        'dlrShortName': '广州花都',
        'area': '南区',
        'bigAreaName': '华南区',
        'smallAreaName': '广深区',
        'province': '广东省',
        'city': '广州市',
        'everyNum': 3,
        'targetQuantityMonth': '3月',
        'targetQuantityValue': '12',
        'id': ''
      }]
    }
  }
})

// 目标量审核-审核
const targetQuantityAuditcheck = Mock.mock({
  result: '1',
  msg: '',
  data: {
    targetQuantityAuditcheck: {
      result: '1',
      msg: '审核成功!'
    }
  }
})
// 目标量审核查询-驳回
const targetQuantityAuditReject = Mock.mock({
  result: '1',
  msg: '',
  data: {
    targetQuantityAuditReject: {
      result: '1',
      msg: '驳回成功!'
    }
  }
})

// 目标量确认函查询
const targetQuantityConfirmationLetterQuery = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    targetQuantityConfirmationLetterQuery: {
      result: '1',
      pageindex: 1,
      pagesize: 20,
      pages: 1,
      records: 20,
      msg: '查询成功',
      'rows|3': [
        {
          carBrandCn: '东风日产-日产',
          carBrandCode: '1',
          dlrId: '1',
          dlrCode: 'D1x11',
          dlrShortName: '上海松江',
          targetTypeId: '1',
          targetTypeName: '提车目标',
          month: '一月',
          year: '2019',
          confirmName: '01、02月度目标确认函',
          updateControlID: '22caee2daceb40e7bd2601cb34893863'
        },
        {
          carBrandCn: '东风日产-启辰',
          carBrandCode: '2',
          dlrId: '2',
          dlrCode: 'D2x12',
          dlrShortName: '上海诚隆',
          targetTypeId: '2',
          targetTypeName: '交车目标',
          month: '二月',
          year: '2019',
          confirmName: '03、04月度目标确认函',
          updateControlID: '22caee2daceb40e7bd2601cb34834256'
        },
        {
          carBrandCn: '东风日产-进口尼桑',
          carBrandCode: '4',
          dlrId: '3',
          dlrCode: 'D3x13',
          dlrShortName: '兰州良智',
          targetTypeId: '2',
          targetTypeName: '交车目标',
          month: '三月',
          year: '2019',
          confirmName: '05、06月度目标确认函',
          updateControlID: '22caee2daceb40e7bd2601cb34834136'
        },
        {
          carBrandCn: '东风日产-其他',
          carBrandCode: '99',
          dlrId: '4',
          dlrCode: 'D4x14',
          dlrShortName: '西安佳益',
          targetTypeId: '1',
          targetTypeName: '提车目标',
          month: '四月',
          year: '2019',
          confirmName: '07、08月度目标确认函',
          updateControlID: '22caee2daceb40e7bd2601cb34gt6756'
        }
      ]
    }
  }
})

// 调拨量调整申请 --查询
const veBuTransferTargetApplyQueryFindAll = Mock.mock({
  result: '1',
  msg: '操作成功',
  data: {
    veBuTransferTargetApplyQueryFindAll: {
      result: '1',
      pageindex: 1,
      pagesize: 20,
      pages: 1,
      records: 20,
      msg: '查询成功',
      'rows|5': [
        {
          carBrandCn: '东风日产-日产',
          carBrandCode: '1',
          transferTargetApplyCode: 'Ab3849273942934',
          transferInDlrId: '1',
          transferInDlrShortName: '上海松江',
          transferOutDlrId: '2',
          transferOutDlrShortName: '上海诚隆',
          month: '2019-09-10',
          qty: 10,
          inUsetargetValues: 20,
          auditInQty: 30,
          outUsetargetValues: 40,
          auditOutQty: 50,
          statusName: '是',
          status: '1',
          rejectRemark: 'asd456',
          updateControlID: '22caee2daceb40e7bd2601cb34893863'
        },
        {
          carBrandCn: '东风日产-启辰',
          carBrandCode: '2',
          transferTargetApplyCode: 'Ab29387957032523',
          transferInDlrId: '3',
          transferInDlrShortName: '兰州良智',
          transferOutDlrId: '4',
          transferOutDlrShortName: '西安佳益',
          month: '2019-10-10',
          qty: 20,
          inUsetargetValues: 20,
          auditInQty: 30,
          outUsetargetValues: 40,
          auditOutQty: 50,
          statusName: '否',
          status: '0',
          rejectRemark: 'qwe123',
          updateControlID: '22caee2daceb40e7bd2601cb34834256'
        }
      ]
    }
  }
})

// 调拨量调整申请 --申请
const veBuTransferTargetApplyMutationApply = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veBuTransferTargetApplyMutationApply: {
      result: '1',
      msg: '申请成功!'
    }
  }
})

export default [
  // 主机厂库存统计
  {
    url: veApis.veInStockCarStatic.APIUrl + cH + 'v=' + veApis.veInStockCarStatic.ServiceCode,
    type: 'post',
    response: config => {
      return veInStockCarStatic
    }
  },
  // 车型分配模式设置查询
  // {
  //   url: veApis.veDbCarconfigDismodeQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbCarconfigDismodeQueryFindAll.ServiceCode,
  //   type: 'post',
  //   response: config => {
  //     return veDbCarconfigDismodeQueryFindAll
  //   }
  // },
  // 本月提车进度
  {
    url: veApis.vePurSpeedStatic.APIUrl + cH + 'v=' + veApis.vePurSpeedStatic.ServiceCode,
    type: 'post',
    response: config => {
      return vePurSpeedStatic
    }
  },
  // 替代车型查询 添加
  {
    url: veApis.veDbReplaceCarConfigQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbReplaceCarConfigQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbReplaceCarConfigQueryFindAll
    }
  },
  // 替代车型保存 添加
  {
    url: veApis.veDbReplaceCarConfigMutationSave.APIUrl + cH + 'v=' + veApis.veDbReplaceCarConfigMutationSave.ServiceCode,
    // url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=' + 'veDbBatchAssignTimeQueryFindAll',
    type: 'post',
    response: config => {
      return veDbReplaceCarConfigMutationSave
    }
  },
  // VIN显示开关控制查询
  {
    url: veApis.vinDisplaySwitchControlQuery.APIUrl + cH + 'v=' + veApis.vinDisplaySwitchControlQuery.ServiceCode,
    type: 'post',
    response: config => {
      return vinDisplaySwitchControlQuery
    }
  },
  // VIN显示开关控制保存 添加
  {
    url: veApis.vinDisplaySwitchControlSave.APIUrl + cH + 'v=' + veApis.vinDisplaySwitchControlSave.ServiceCode,
    // url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=' + 'veDbBatchAssignTimeQueryFindAll',
    type: 'post',
    response: config => {
      return vinDisplaySwitchControlSave
    }
  },
  // 交车时间限制设置查询
  {
    url: veApis.vedeliveryTimeLimitSetQuery.APIUrl + cH + 'v=' + veApis.vedeliveryTimeLimitSetQuery.ServiceCode,
    type: 'post',
    response: config => {
      return vedeliveryTimeLimitSetQuery
    }
  },
  // 交车时间限制设置保存
  {
    url: veApis.vedeliveryTimeLimitSetSave.APIUrl + cH + 'v=' + veApis.vedeliveryTimeLimitSetSave.ServiceCode,
    // url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=' + 'veDbBatchAssignTimeQueryFindAll',
    type: 'post',
    response: config => {
      return vedeliveryTimeLimitSetSave
    }
  },
  // 采购单确认时机设置查询
  {
    url: veApis.veDbOrderConfirmQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbOrderConfirmQueryFindAll.ServiceCode,
    // url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=' + 'veDbBatchAssignTimeQueryFindAll',
    type: 'post',
    response: config => {
      return veDbOrderConfirmQueryFindAll
    }
  },
  // 采购单确认时机设置保存 添加
  {
    url: veApis.veDbOrderConfirmMutationSave.APIUrl + cH + 'v=' + veApis.veDbOrderConfirmMutationSave.ServiceCode,
    // url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=' + 'veDbBatchAssignTimeQueryFindAll',
    type: 'post',
    response: config => {
      return veDbOrderConfirmMutationSave
    }
  },
  // 批次分配时机查询
  {
    url: veApis.veDbBatchAssignTimeQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbBatchAssignTimeQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbBatchAssignTimeQueryFindAll
    }
  },

  // 批次分配作废方式设置查询
  {
    url: veApis.veDbBatcinvalidWayQuery.APIUrl + cH + 'v=' + veApis.veDbBatcinvalidWayQuery.ServiceCode,
    type: 'post',
    response: config => {
      return veDbBatcinvalidWayQuery
    }
  },
  // 批次分配作废方式设置保存
  {
    url: veApis.veDbBatcinvalidWaySave.APIUrl + cH + 'v=' + veApis.veDbBatcinvalidWaySave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbBatcinvalidWaySave
    }
  },

  // 批次分配时机保存
  {
    url: veApis.veDbBatchAssignTimeMutation.APIUrl + cH + 'v=' + veApis.veDbBatchAssignTimeMutation.ServiceCode,
    type: 'post',
    response: config => {
      return veDbBatchAssignTimeMutation
    }
  },
  // 批次分配车系查询
  {
    url: veApis.veDbBatchBaseSeriesQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbBatchBaseSeriesQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbBatchBaseSeriesQueryFindAll
    }
  },
  // 批次分配车系保存
  {
    url: veApis.batchBaseSeriesMutationSave.APIUrl + cH + 'v=' + veApis.batchBaseSeriesMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return batchBaseSeriesMutationSave
    }
  },
  // 资金类型保存
  {
    url: veApis.veDbPurcashTypeMutationUpdate.APIUrl + cH + 'v=' + veApis.veDbPurcashTypeMutationUpdate.ServiceCode,
    type: 'post',
    response: config => {
      return veDbPurcashTypeMutationUpdate
    }
  },
  // 品牌资金类型查询
  {
    url: veApis.veDbPurcashTypeBrandQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbPurcashTypeBrandQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbPurcashTypeBrandQueryFindAll
    }
  },

  // 物流运输时效查询
  {
    url: veApis.veLogisticsTransportationTimelineSettingsQueryFindAll.APIUrl + cH + 'v=' + veApis.veLogisticsTransportationTimelineSettingsQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veLogisticsTransportationTimelineSettingsQueryFindAll
    }
  },
  // 物流运输时效保存
  {
    url: veApis.veLogisticsTransportationTimelineSettingsSave.APIUrl + cH + 'v=' + veApis.veLogisticsTransportationTimelineSettingsSave.ServiceCode,
    type: 'post',
    response: config => {
      return veLogisticsTransportationTimelineSettingsSave
    }
  },
  // 查询经销商银行信息
  {
    url: veApis.veDbDlrBankQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbDlrBankQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbDlrBankQueryFindAll
    }
  },
  // 保存经销商银行信息
  {
    url: veApis.veDbDlrBankMutationSave.APIUrl + cH + 'v=' + veApis.veDbDlrBankMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbDlrBankMutationSave
    }
  },

  // 品牌资金类型保存
  {
    url: veApis.veDbPurcashTypeBrandMutationUpdate.APIUrl + cH + 'v=' + veApis.veDbPurcashTypeBrandMutationUpdate.ServiceCode,
    type: 'post',
    response: config => {
      return veDbPurcashTypeBrandMutationUpdate
    }
  },
  // 经销商资金类型查询
  {
    url: veApis.veDbOrgPurcashTypeQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbOrgPurcashTypeQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbOrgPurcashTypeQueryFindAll
    }
  },
  // 经销商资金类型保存
  {
    url: veApis.veDbOrgPurcashTypeMutationUpdate.APIUrl + cH + 'v=' + veApis.veDbOrgPurcashTypeMutationUpdate.ServiceCode,
    type: 'post',
    response: config => {
      return veDbOrgPurcashTypeMutationUpdate
    }
  },
  // 自动出货确认时机查询
  {
    url: veApis.veDbCaroutTimeSetQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbCaroutTimeSetQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCaroutTimeSetQueryFindAll
    }
  },
  // 自动出货确认机设置保存
  {
    url: veApis.veDbCaroutTimeSetMutationSave.APIUrl + cH + 'v=' + veApis.veDbCaroutTimeSetMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCaroutTimeSetMutationSave
    }
  },
  // 自动出货查询
  {
    url: veApis.veDbCaroutConfigQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbCaroutConfigQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCaroutConfigQueryFindAll
    }
  },
  // 自动出货保存
  {
    url: veApis.veDbCaroutConfigMutationSave.APIUrl + cH + 'v=' + veApis.veDbCaroutConfigMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCaroutConfigMutationSave
    }
  },
  // 车型分配模式查询
  {
    url: veApis.veDbCarconfigDismodeQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbCarconfigDismodeQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCarconfigDismodeQueryFindAll
    }
  },
  // 车型分配模式保存
  {
    url: veApis.veDbCarconfigDismodeMutationSave.APIUrl + cH + 'v=' + veApis.veDbCarconfigDismodeMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCarconfigDismodeMutationSave
    }
  },

  // TP设置查询
  {
    url: veApis.veTpDlrManageSetQueryFindAll.APIUrl + cH + 'v=' + veApis.veTpDlrManageSetQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veTpDlrManageSetQueryFindAll
    }
  },

  // 经销商可分配仓库设置查询
  {
    url: veApis.veDbCarStockHouseCanUseQueyFindAll.APIUrl + cH + 'v=' + veApis.veDbCarStockHouseCanUseQueyFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCarStockHouseCanUseQueyFindAll
    }
  },
  // 经销商可分配仓库设置保存
  {
    url: veApis.veDbCarStockPriorityMutaionSave.APIUrl + cH + 'v=' + veApis.veDbCarStockPriorityMutaionSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCarStockPriorityMutaionSave
    }
  },
  // 经销商车型优先分配设置查询
  {
    url: veApis.veDbCarConfigPriQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbCarConfigPriQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCarConfigPriQueryFindAll
    }
  },
  // 经销商车型优先分配设置保存
  {
    url: veApis.veDbCarConfigPriMutationUpdate.APIUrl + cH + 'v=' + veApis.veDbCarConfigPriMutationUpdate.ServiceCode,
    type: 'post',
    response: config => {
      return veDbCarConfigPriMutationUpdate
    }
  },
  // 搬入地查询
  {
    url: veApis.moveInAddressQueryFindAll.APIUrl + cH + 'v=' + veApis.moveInAddressQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return moveInAddressQueryFindAll
    }
  },
  // 搬入地保存
  {
    url: veApis.veDbMoveInMutationSave.APIUrl + cH + 'v=' + veApis.veDbMoveInMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbMoveInMutationSave
    }
  },
  // 用户小区设置保存
  {
    url: veApis.userAreaMutation.APIUrl + cH + 'v=' + veApis.userAreaMutation.ServiceCode,
    type: 'post',
    response: config => {
      return veDbMoveInMutationSave
    }
  },
  // 储位查询
  {
    url: veApis.veStockPlace.APIUrl + cH + 'v=' + veApis.veStockPlace.ServiceCode + veApis.veStockPlace.SpecailCode,
    type: 'post',
    response: config => {
      return veStockPlace
    }
  },
  // 储位保存
  {
    url: veApis.veStockPlaceSave.APIUrl + cH + 'v=' + veApis.veStockPlaceSave.ServiceCode,
    type: 'post',
    response: config => {
      return veStockPlaceSave
    }
  },
  // 储区查询
  {
    url: veApis.veStockArea.APIUrl + cH + 'v=' + veApis.veStockArea.ServiceCode + veApis.veStockArea.SpecailCode,
    type: 'post',
    response: config => {
      return veStockArea
    }
  },
  // 储位保存
  {
    url: veApis.veStockAreaSave.APIUrl + cH + 'v=' + veApis.veStockAreaSave.ServiceCode,
    type: 'post',
    response: config => {
      return veStockAreaSave
    }
  },
  // 采购单作废
  {
    url: veApis.veCancelOrder.APIUrl + cH + 'v=' + veApis.veCancelOrder.ServiceCode,
    type: 'post',
    response: config => {
      return veCancelOrder
    }
  },
  // 非直营二级网点设置查询
  {
    url: veApis.veDbPactCompanyQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbPactCompanyQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbPactCompanyQueryFindAll
    }
  },
  // 客户销退时间限制设置
  {
    url: veApis.veSaleTimeLimitQry.APIUrl + cH + 'v=' + veApis.veSaleTimeLimitQry.ServiceCode,
    type: 'post',
    response: config => {
      return veSaleTimeLimitQry
    }
  },
  // 客户销退时间限制设置保存
  {
    url: veApis.veSaleTimeLimitM.APIUrl + cH + 'v=' + veApis.veSaleTimeLimitM.ServiceCode,
    type: 'post',
    response: config => {
      return veSaleTimeLimitM
    }
  },
  // 用户小区设置查询
  {
    url: veApis.userAreaQueryByPage.APIUrl + cH + 'v=' + veApis.userAreaQueryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return userAreaQueryByPage
    }
  },
  // 用户经销商设置查询
  {
    url: veApis.mdmEmployeeDlrQueryByPage.APIUrl + cH + 'v=' + veApis.mdmEmployeeDlrQueryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmEmployeeDlrQueryByPage
    }
  },
  // 非直营二级网点设置保存
  {
    url: veApis.veDbPactCompanyMutationSave.APIUrl + cH + 'v=' + veApis.veDbPactCompanyMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbPactCompanyMutationSave
    }
  },
  // 发票面额与项目名称设置查询
  {
    url: veApis.veReceiptnameSetting.APIUrl + cH + 'v=' + veApis.veReceiptnameSetting.ServiceCode,
    type: 'post',
    response: config => {
      return veReceiptnameSetting
    }
  },
  // 库存周转率基准车系权重系数设置查询
  {
    url: veApis.veInventoryTRSetting.APIUrl + cH + 'v=' + veApis.veInventoryTRSetting.ServiceCode,
    type: 'post',
    response: config => {
      return veInventoryTRSetting
    }
  },
  // 报备申请查询
  {
    url: veApis.veApplicationForFiling.APIUrl + cH + 'v=' + veApis.veApplicationForFiling.ServiceCode,
    type: 'post',
    response: config => {
      return veApplicationForFiling
    }
  },
  // 报备申请保存
  {
    url: veApis.veApplicationForFilingSave.APIUrl + cH + 'v=' + veApis.veApplicationForFilingSave.ServiceCode,
    type: 'post',
    response: config => {
      return veApplicationForFilingSave
    }
  },
  // 选装包查询
  {
    url: veApis.veOptionalpackage.APIUrl + cH + 'v=' + veApis.veOptionalpackage.ServiceCode,
    type: 'post',
    response: config => {
      return veOptionalpackage
    }
  },
  // 调拨量设置查询
  {
    url: veApis.veAllocationRule.APIUrl + cH + 'v=' + veApis.veAllocationRule.ServiceCode,
    type: 'post',
    response: config => {
      return veAllocationRule
    }

  },
  // 调拨量设置查询
  {
    url: veApis.veCustomerSellingBack.APIUrl + cH + 'v=' + veApis.veCustomerSellingBack.ServiceCode,
    type: 'post',
    response: config => {
      return veCustomerSellingBack
    }

  },
  // 经销商开关设置查询
  {
    url: veApis.veDealerSwitchSetting.APIUrl + cH + 'v=' + veApis.veDealerSwitchSetting.ServiceCode,
    type: 'post',
    response: config => {
      return veDealerSwitchSetting
    }
  },
  // 经销商风险店设置查询
  {
    url: veApis.veDbDlrRiskSetQueryFindAll.APIUrl + cH + 'v=' + veApis.veDbDlrRiskSetQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veDbDlrRiskSetQueryFindAll
    }
  },
  // 经销商风险店设置保存
  {
    url: veApis.veDbDlrRiskSetMutationSave.APIUrl + cH + 'v=' + veApis.veDbDlrRiskSetMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbDlrRiskSetMutationSave
    }
  },
  // 车辆产品查询
  // 非直营二级网点设置保存
  {
    url: veApis.veDbPactCompanyMutationSave.APIUrl + cH + 'v=' + veApis.veDbPactCompanyMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return veDbPactCompanyMutationSave
    }
  },
  // 车辆产品查询
  {
    url: veApis.mdmVeCarProductQueryListForPage.APIUrl + cH + 'v=' + veApis.mdmVeCarProductQueryListForPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmVeCarProductQueryListForPage
    }

  },
  // 不参与在线库存分配车型设置
  {
    url: veApis.veNoOnlineStockCarTypeSetting.APIUrl + cH + 'v=' + veApis.veNoOnlineStockCarTypeSetting.ServiceCode,
    type: 'post',
    response: config => {
      return veNoOnlineStockCarTypeSetting
    }
  },

  // 不参与在线库存分配车型设置保存
  {
    url: veApis.veNoOnlineStockCarTypeSettingSave.APIUrl + cH + 'v=' + veApis.veNoOnlineStockCarTypeSettingSave.ServiceCode,
    type: 'post',
    response: config => {
      return veNoOnlineStockCarTypeSettingSave
    }
  },
  // 经销商按店分配台数设置查询
  {
    url: veApis.disNumQuery.APIUrl + cH + 'v=' + veApis.disNumQuery.ServiceCode,
    type: 'post',
    response: config => {
      return disNumQuery
    }
  },
  // 经销商按店分配台数设置保存
  {
    url: veApis.disNumSave.APIUrl + cH + 'v=' + veApis.disNumSave.ServiceCode,
    type: 'post',
    response: config => {
      return disNumSave
    }
  },
  // 分配达成率目标导入查询
  {
    url: veApis.veAssignGoalImportQry.APIUrl + cH + 'v=' + veApis.veAssignGoalImportQry.ServiceCode,
    type: 'post',
    response: config => {
      return veAssignGoalImportQry
    }
  },
  // 分配达成率目标导入保存
  {
    url: veApis.veAssignGoalImportSave.APIUrl + cH + 'v=' + veApis.veAssignGoalImportSave.ServiceCode,
    type: 'post',
    response: config => {
      return veAssignGoalImportSave
    }
  },
  // 目标量类型维护-查询
  {
    url: veApis.targetAmountTypeQry.APIUrl + cH + 'v=' + veApis.targetAmountTypeQry.ServiceCode,
    type: 'post',
    response: config => {
      return targetAmountTypeQry
    }
  },
  // 目标量类型维护-保存
  {
    url: veApis.targetAmountTypeSave.APIUrl + cH + 'v=' + veApis.targetAmountTypeSave.ServiceCode,
    type: 'post',
    response: config => {
      return targetAmountTypeSave
    }
  },
  // 经销商库存度运行时机设置查询
  {
    url: veApis.dlrStockRuntimeSetQuery.APIUrl + cH + 'v=' + veApis.dlrStockRuntimeSetQuery.ServiceCode,
    type: 'post',
    response: config => {
      return dlrStockRuntimeSetQuery
    }
  },
  // 经销商库存度运行时机设置保存
  {
    url: veApis.dlrStockRuntimeSetSave.APIUrl + cH + 'v=' + veApis.dlrStockRuntimeSetSave.ServiceCode,
    type: 'post',
    response: config => {
      return dlrStockRuntimeSetSave
    }
  },
  // 物流运输时限设置-查询
  {
    url: veApis.logTransTimeLimitSetQry.APIUrl + cH + 'v=' + veApis.logTransTimeLimitSetQry.ServiceCode,
    type: 'post',
    response: config => {
      return logTransTimeLimitSetQry
    }
  },
  // // 物流运输时限设置-保存
  {
    url: veApis.logTransTimeLimitSetSave.APIUrl + cH + 'v=' + veApis.logTransTimeLimitSetSave.ServiceCode,
    type: 'post',
    response: config => {
      return logTransTimeLimitSetSave
    }
  },
  // 客户销退时间限制设置-保存
  {
    url: veApis.logCustomerReturnBackset.APIUrl + cH + 'v=' + veApis.logCustomerReturnBackset.ServiceCode,
    type: 'post',
    response: config => {
      return logCustomerReturnBackset
    }
  },
  // 地库设置查询
  {
    url: veApis.basementSetQuery.APIUrl + cH + 'v=' + veApis.basementSetQuery.ServiceCode,
    type: 'post',
    response: config => {
      return basementSetQuery
    }
  },
  // 地库设置保存
  {
    url: veApis.basementSetSave.APIUrl + cH + 'v=' + veApis.basementSetSave.ServiceCode,
    type: 'post',
    response: config => {
      return basementSetSave
    }
  },
  // 目标量审核查询
  {
    url: veApis.targetQuantityAuditQuery.APIUrl + cH + 'v=' + veApis.targetQuantityAuditQuery.ServiceCode,
    type: 'post',
    response: config => {
      return targetQuantityAuditQuery
    }
  },
  // 目标量审核-审核
  {
    url: veApis.targetQuantityAuditcheck.APIUrl + cH + 'v=' + veApis.targetQuantityAuditcheck.ServiceCode,
    type: 'post',
    response: config => {
      return targetQuantityAuditcheck
    }
  },
  // 目标量审核查询-驳回
  {
    url: veApis.targetQuantityAuditReject.APIUrl + cH + 'v=' + veApis.targetQuantityAuditReject.ServiceCode,
    type: 'post',
    response: config => {
      return targetQuantityAuditReject
    }
  },
  // 目标量确认函查询
  {
    url: veApis.targetQuantityConfirmationLetterQuery.APIUrl + cH + 'v=' + veApis.targetQuantityConfirmationLetterQuery.ServiceCode,
    type: 'post',
    response: config => {
      return targetQuantityConfirmationLetterQuery
    }
  },

  // 销售合同查询
  {
    url: veApis.veContractQry.APIUrl + cH + 'v=' + veApis.veContractQry.ServiceCode,
    type: 'post',
    response: config => {
      return veContractQry
    }
  },

  // 调拨量调整申请--查询
  {
    url: veApis.veBuTransferTargetApplyQueryFindAll.APIUrl + cH + 'v=' + veApis.veBuTransferTargetApplyQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return veBuTransferTargetApplyQueryFindAll
    }
  },
  // 调拨量调整申请--申请
  {
    url: veApis.veBuTransferTargetApplyMutationApply.APIUrl + cH + 'v=' + veApis.veBuTransferTargetApplyMutationApply.ServiceCode,
    type: 'post',
    response: config => {
      return veBuTransferTargetApplyMutationApply
    }
  }

]
