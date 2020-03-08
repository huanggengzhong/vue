/**
 * description: 采购模拟数据
 * author: liyanm
 * createdDate: 2019-07-23
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'

// 采购单冻结金额查询
const veDbBaseseriesFreezeBailQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbBaseseriesFreezeBailQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '轩逸',
        seriesId: '1',
        orderTypeName: '大客户订单',
        orderTypeId: '1',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1,2',
        dlrShortName: '广州丰日,广州恒源'

      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '西玛',
        seriesId: '1',
        orderTypeName: '采购单1',
        orderTypeId: '1',
        purcashTypeName: '现金',
        purcashTypeId: '2',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '上海宝钢、广州恒源',
        dlrId: '1,2',
        dlrShortName: '广州丰日,广州恒源'
      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '西玛',
        seriesId: '1',
        orderTypeName: '采购单1',
        orderTypeId: '1',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '3',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '上海宝钢、上海冠松',
        dlrId: '1,2',
        dlrShortName: '广州丰日,广州恒源'
      },
      {
        carBrandCn: '启辰',
        carBrandCode: '2',
        seriesCn: 'T90',
        seriesId: '2',
        orderTypeName: '一般采购单',
        orderTypeId: '2',
        purcashTypeName: '现金',
        purcashTypeId: '4',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '2',
        freezeWayName: '冻结比例',
        freezeWayId: '2',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '广州丰日、广州恒源'
      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '轩逸',
        seriesId: '1',
        orderTypeName: '大客户订单',
        orderTypeId: '1',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '5',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '广州丰日、广州恒源'

      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '西玛',
        seriesId: '1',
        orderTypeName: '采购单1',
        orderTypeId: '1',
        purcashTypeName: '现金',
        purcashTypeId: '6',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '上海宝钢、广州恒源'
      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '西玛',
        seriesId: '1',
        orderTypeName: '采购单1',
        orderTypeId: '1',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '上海宝钢、上海冠松'
      },
      {
        carBrandCn: '启辰',
        carBrandCode: '2',
        seriesCn: 'T90',
        seriesId: '2',
        orderTypeName: '一般采购单',
        orderTypeId: '2',
        purcashTypeName: '现金',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '2',
        freezeWayName: '冻结比例',
        freezeWayId: '2',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '广州丰日、广州恒源'
      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '轩逸',
        seriesId: '1',
        orderTypeName: '大客户订单',
        orderTypeId: '1',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '广州丰日、广州恒源'

      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '西玛',
        seriesId: '1',
        orderTypeName: '采购单1',
        orderTypeId: '1',
        purcashTypeName: '现金',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '上海宝钢、广州恒源'
      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '西玛',
        seriesId: '1',
        orderTypeName: '采购单1',
        orderTypeId: '1',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '上海宝钢、上海冠松'
      },
      {
        carBrandCn: '启辰',
        carBrandCode: '2',
        seriesCn: 'T90',
        seriesId: '2',
        orderTypeName: '一般采购单',
        orderTypeId: '2',
        purcashTypeName: '现金',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '2',
        freezeWayName: '冻结比例',
        freezeWayId: '2',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '广州丰日、广州恒源'
      }, {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '轩逸',
        seriesId: '1',
        orderTypeName: '大客户订单',
        orderTypeId: '1',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '广州丰日、广州恒源'

      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '西玛',
        seriesId: '1',
        orderTypeName: '采购单1',
        orderTypeId: '1',
        purcashTypeName: '现金',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '上海宝钢、广州恒源'
      },
      {
        carBrandCn: '日产',
        carBrandCode: '1',
        seriesCn: '西玛',
        seriesId: '1',
        orderTypeName: '采购单1',
        orderTypeId: '1',
        purcashTypeName: '现金(自筹)',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '1',
        freezeWayName: '冻结比例',
        freezeWayId: '1',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '上海宝钢、上海冠松'
      },
      {
        carBrandCn: '启辰',
        carBrandCode: '2',
        seriesCn: 'T90',
        seriesId: '2',
        orderTypeName: '一般采购单',
        orderTypeId: '2',
        purcashTypeName: '现金',
        purcashTypeId: '1',
        stockTypeName: '库存1',
        freezeBail: '12%',
        stockTyopeId: 'V15521',
        freezeNodeName: '确认',
        freezeNodeId: '2',
        freezeWayName: '冻结比例',
        freezeWayId: '2',
        isEnable: '1',
        dlrId: '1',
        dlrShortName: '广州丰日、广州恒源'
      }
      ]
    }
  }
})

// 采购单冻结金额保存
const veDbBaseseriesFreezeBailMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbBaseseriesFreezeBailMutationSave: {
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
// 冻结金额经销商开关保存
const purOrderFreezeOnOffMutaionUpdate = Mock.mock({
  result: '1',
  msg: '',
  data: {
    purOrderFreezeOnOffMutaionUpdate: {
      result: '1',
      msg: '操作成功',
      data: {
        batchBaseSeriesMutationSave: {
          result: '1',
          msg: '保存成功'
        }
      }
      // result: '1',
      // msg: '',
      // pageindex: 1,
      // pagesize: 1000,
      // pages: 1,
      // records: 3,
      // rows: []
    }
  }
})
// 采购单类型品牌查询
const veDbOrderTypeBrandQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbOrderTypeBrandQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        oemCOde: 'V13221',
        groupCode: '222222',
        carBrandName: '东风日产-启辰',
        carBrandCode: 'VB43322',
        orderTypeId: '134343',
        orderTypeName: '一般采购单',
        disOrder: '1',
        orderNo: '1',
        carOurPriortiy: '6',
        caroutOrder: 'VB43322',
        isOnlineStatus: 'VR4343343',
        isBatchStatus: '采购单1',
        orderTypeBrandId: '1',
        isEnable: '1',
        updateControlId: '1212fqwfqr2rfwqf'
      },
      {
        oemCOde: 'V13221',
        groupCode: '222222',
        carBrandName: '东风日产-日产',
        carBrandCode: 'VB43322',
        orderTypeId: '24343',
        orderTypeName: '特殊采购单',
        disOrder: '2',
        orderNo: '2',
        caroutOrder: 'VB43322',
        carOurPriortiy: '2',
        isOnlineStatus: 'VR4343343',
        isBatchStatus: '采购单1',
        orderTypeBrandId: '2',
        isEnable: '1',
        updateControlId: '1212fqwfqr2rfwqf'
      },
      {
        oemCOde: 'V13221',
        groupCode: '222222',
        carBrandName: '东风日产-进入尼桑',
        carBrandCode: 'VB43322',
        orderTypeId: '323232',
        orderTypeName: '订单生产车型',
        disOrder: '3',
        orderNo: '3',
        caroutOrder: 'VB43322',
        carOurPriortiy: '4',
        isOnlineStatus: 'VR4343343',
        isBatchStatus: '采购单1',
        orderTypeBrandId: '3',
        isEnable: '1',
        updateControlId: '1212fqwfqr2rfwqf'
      },
      {
        oemCOde: 'V13221',
        groupCode: '222222',
        carBrandName: '东风日产-进入尼桑',
        carBrandCode: 'VB43322',
        orderTypeId: '4323232',
        orderTypeName: '订单余量',
        disOrder: '1',
        orderNo: '1',
        caroutOrder: 'VB43322',
        carOurPriortiy: '5',
        isOnlineStatus: 'VR4343343',
        isBatchStatus: '采购单1',
        orderTypeBrandId: '4',
        isEnable: '1',
        updateControlId: '1212fqwfqr2rfwqf'
      },
      {
        oemCOde: 'V13221',
        groupCode: '222222',
        carBrandName: '东风日产-启辰',
        carBrandCode: 'VB43322',
        orderTypeId: '132323',
        orderTypeName: '一般采购单',
        disOrder: '2',
        orderNo: '2',
        caroutOrder: 'VB43322',
        carOurPriortiy: '5',
        isOnlineStatus: 'VR4343343',
        isBatchStatus: '采购单1',
        orderTypeBrandId: '5',
        isEnable: '1',
        updateControlId: '1212fqwfqr2rfwqf'
      },
      {
        oemCOde: 'V13221',
        groupCode: '222222',
        carBrandName: '东风日产-日产',
        carBrandCode: 'VB43322',
        orderTypeId: '23232',
        orderTypeName: '特殊采购单',
        caroutOrder: 'VB43322',
        orderNo: '5',
        disOrder: '5',
        carOurPriortiy: '5',
        isOnlineStatus: 'VR4343343',
        isBatchStatus: '采购单1',
        orderTypeBrandId: '6',
        isEnable: '1',
        updateControlId: '1212fqwfqr2rfwqf'
      },
      {
        oemCOde: 'V13221',
        groupCode: '222222',
        carBrandName: '东风日产-进入尼桑',
        carBrandCode: 'VB43322',
        orderTypeId: '3323',
        orderTypeName: '订单生产车型',
        caroutOrder: 'VB43322',
        disOrder: '6',
        orderNo: '6',
        carOurPriortiy: '3',
        isOnlineStatus: 'VR4343343',
        isBatchStatus: '采购单1',
        orderTypeBrandId: '7',
        isEnable: '1',
        updateControlId: '1212fqwfqr2rfwqf'
      },
      {
        oemCOde: 'V13221',
        groupCode: '222222',
        carBrandName: '东风日产-进入尼桑',
        carBrandCode: 'VB43322',
        orderTypeId: '4232',
        orderTypeName: '订单余量',
        disOrder: '4',
        orderNo: '4',
        caroutOrder: 'VB43322',
        carOurPriortiy: '1',
        isOnlineStatus: 'VR4343343',
        isBatchStatus: '采购单1',
        orderTypeBrandId: '8',
        isEnable: '1',
        updateControlId: '1212fqwfqr2rfwqf'
      }
      ]
    }
  }
})

// 已审核采购单查询
const vePurAuditQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurAuditQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows|10': [{
        stockType: '在线库存',
        stockTypeCode: '139',
        carBrandCn: '东风日产-日产',
        carBrandCode: '1',
        dlrShortName: '广州风日',
        purOrderTypeCode: '1',
        purOrderTypeName: '一般采购单',
        purOrderCode: 'H2901BU201906130004',
        cashTypeName: '现金（自筹）',
        purOrderDCode: 'H2901BU201906130004001',
        deductCashTypeId: '1',
        deductCashName: '整车账户',
        freezeCashCode: '22',
        freezeCashName: '冻结资金名称',
        confirmCashCode: '33',
        confirmCashName: '扣款资金类型',
        remain: '130000',
        purState: '待分配',
        carSeriesId: '22',
        carSeriseName: '新奇骏/T32',
        carTypeCode: '2341',
        carTypeName: '新奇骏',
        carConfigId: 'B2BJ36EXA-----',
        carConfigCode: 'B2BJ36EXA-----',
        carConfigName: '323/T32 223',
        carColorId: '1',
        carColorCode: '22332',
        carColorName: '红色',
        carIncolorId: '2',
        carIncolorCode: '2323',
        carIncolorName: '深内饰',
        configCode: '2341',
        carColorPrice: '3323',
        carIncolorPrice: '23',
        countrySubsidy: '223',
        houseAddr: '搬入目的地',
        deliveryDlrShortName: '广州风日',
        assignNo: 'H2232l23',
        veStateName: '质量状态名称',
        tranportName: '空运',
        tranportCode: '223',
        carPrice: '2200000',
        carProductPrice: '2200000',
        freezeTime: '2019-07-26 12:30',
        bail: '2200000',
        oldCarConfigName: '2322HDSS',
        oldCarColorName: '白色',
        oldCarIncolorName: '浅内饰',
        firstPreInstockDate: '2019-07-25',
        pvInstoreDate: '2019-07-25',
        confirDate: '2019-07-24',
        pdiAssginFlag: 'HS#(SK',
        creator: '余芳',
        purOrderDId: 'H2901BU201906130004001',
        oldReceiveShId: '广州风日',
        deliverModeName: '空运',
        receiveShId: '33222',
        updateControlId: 'absdf2wsdf-sdfsasdfasdfa-sdf'
      }]
    }
  }
})

// 采购单驳回
const veRejectOrder = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veRejectOrder: {
      result: '1',
      msg: ''
    }
  }
})
// 采购单统计表查询
const vePurstaticQry = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurstaticQry: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows|10': [{
        groupName: '1',
        oemName: '1',
        carSeriseName: '西玛',
        seriesId: '1',
        carBrandCn: '日产',
        carBrandcCode: '10',
        carConfigName: 'B2BJ36EXA-----',
        waitAssignSum: '50',
        remainAssignSum: '20',
        addPurSum: '10',
        cancelPurSum: '10',
        assignSum: '5',
        waitComfirmSum: '20',
        waitSendSum: '10',
        waitInStockSum: '20',
        cashOnStock: '20',
        dlcOnStock: '15',
        cashOnLine: '30',
        dlcOnLine: '15',
        wlplan: '50',
        sendcar: '15',
        confirmout: '20',
        outStock: '50',
        onStock: '30',
        dlrShortName: '广州风日店'
      }]
    }
  }
})

// 采购单查询
const vePurOrderQuery = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurOrderQuery: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows|10': [{
        // 添加字段
        purchaseOrderTypeName: '一般采购单',
        cashtypeid: '现金(自筹)',
        PurPrice: '5000000',
        engineCarpush: '2.0',
        logisticsPlaceName: '花都中心库',
        carHouseAddr: '广州风神大道13号',
        auditDate: '2019-09-12',
        assignDate: '2019-09-12',
        outconfirimdate: '2019-07-02',
        checkInstockDate: '2019-07-02',
        cancelDate: '2019-07-02',
        purQty: '1',
        sendShName: '花都中心库',
        endCause: '作废',
        purStatus: '合同已签署',
        purOrderId: 'KHFQFF6986',
        controlUpdatedId: 'fwohfowhefohasfksah',
        // -------------
        carBrandCn: '东风日产-日产',
        carBrandCode: '1',
        dlrShortName: '广州风日',
        purOrderTypeCode: '1',
        purOrderTypeName: '一般采购单',
        purOrderCode: 'H2901BU201906130004',
        CashTypeName: '现金（自筹）',
        purOrderDCode: 'H2901BU201906130004001',
        deductCashTypeId: '1',
        deductCashName: '整车账户',
        FreezeCashCode: '22',
        FreezeCashName: '冻结资金名称',
        confirmCashCode: '33',
        confirmCashName: '扣款资金类型',
        remain: '130000',
        purState: '待分配',
        carSeriesId: '22',
        carSeriseName: '新奇骏/T32',
        carTypeCode: '2341',
        carTypeName: '新奇骏',
        carConfigId: 'B2BJ36EXA-----',
        carConfigCode: 'B2BJ36EXA-----',
        carConfigName: '323/T32 223',
        carColorId: '1',
        carColorCode: '22332',
        carColorName: '红色',
        carIncolorId: '2',
        carIncolorCode: '2323',
        carIncolorName: '深内饰',
        configCode: '2341',
        carColorPrice: '3323',
        carIncolorPrice: '23',
        countrySubsidy: '223',
        houseAddr: '搬入目的地',
        deliveryDlrShortName: '广州风日',
        assignNo: 'H2232l23',
        veStateName: '质量状态名称',
        tranportName: '空运',
        tranportCode: '223',
        carPrice: '2200000',
        disCountSum: '2200000',
        sbusidy: '4200000',
        carProductPrice: '2200000',
        freezeTime: '2019-07-26 12:30',
        bail: '2200000',
        oldCarConfigName: '2322HDSS',
        oldCarColorName: '白色',
        oldCarIncolorName: '浅内饰',
        firstPreInstockDate: '2019-07-25',
        pvInstoreDate: '2019-07-25',
        confirDate: '2019-07-24',
        pdiAssginFlag: 'HS#(SK',
        creator: '余芳',
        purOrderDId: 'H2901BU201906130004001',
        oldReceiveShId: '广州风日',
        deliverModeName: '空运',
        receiveShId: '33222',
        updateControlId: 'absdf2wsdf-sdfsasdfasdfa-sdf',
        vlStatusName: '出货确认',
        NextVIStatusName: '已经收货',
        vin: 'LGB2019ABCDE03811',
        lastLogisticsTime: '2019-08-10',
        lastDeliveryTime: '2019-07-10',
        lastOutStockTime: '2013-12-11',
        lastOutDoorTime: '2019-12-11'
      }]
    }
  }
})

// 采购单保存 xulfan
const vePurOrderSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurOrderSave: {
      result: '1',
      msg: ''
    }
  }
})

// 采购单确认 xulfan
const vePurOrderConfirm = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurOrderConfirm: {
      result: '1',
      msg: ''
    }
  }
})

// 采购车辆运输操作保存
const vePurOrderVlStatus = Mock.mock({
  result: '1',
  msg: '',
  data: {
    vePurOrderVlStatus: {
      result: '1',
      msg: ''
    }
  }
})

// 采购单类型品牌保存
const veDbOrderTypeBrandMutationUpdate = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veDbOrderTypeBrandMutationUpdate: {
      result: '1',
      msg: ''
    }
  }
})

export default [{
  url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbBaseseriesFreezeBailQueryFindAll',
  type: 'post',
  response: config => {
    return veDbBaseseriesFreezeBailQueryFindAll
  } // 采购单冻结金额查询
},
{
  url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbOrderTypeBrandQueryFindAll',
  type: 'post',
  response: config => {
    return veDbOrderTypeBrandQueryFindAll
  } // 采购单类型品牌查询
},
{
  url: veApis.vePurAuditQry.APIUrl + cH + 'v=' + veApis.vePurAuditQry.ServiceCode,
  type: 'post',
  response: config => {
    return vePurAuditQry
  } // 采购单查询
},
{
  url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vePurOrderSave',
  type: 'post',
  response: config => {
    return vePurOrderSave
  }// 采购单保存 xulfan
},
{
  url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vePurOrderConfirm',
  type: 'post',
  response: config => {
    return vePurOrderConfirm
  }// 采购单确认 xulfan
},
{
  url: veApis.veRejectOrder.APIUrl + cH + 'v=' + veApis.veRejectOrder.ServiceCode,
  type: 'post',
  response: config => {
    return veRejectOrder
  } // 采购单驳回
},
{
  url: veApis.vePurstaticQry.APIUrl + cH + 'v=' + veApis.vePurstaticQry.ServiceCode,
  type: 'post',
  response: config => {
    return vePurstaticQry
  } // 采购单统计表查询
},
{
  url: veApis.vePurOrderQuery.APIUrl + cH + 'v=' + veApis.vePurOrderQuery.ServiceCode,
  type: 'post',
  response: config => {
    return vePurOrderQuery
  } // 采购单审核
},
{
  url: veApis.vePurOrderVlStatus.APIUrl + cH + 'v=' + veApis.vePurOrderVlStatus.ServiceCode,
  type: 'post',
  response: config => {
    return vePurOrderVlStatus
  } // 采购车辆运输操作保存
},
{
  url: veApis.veDbBaseseriesFreezeBailMutationSave.APIUrl + cH + 'v=' + veApis.veDbBaseseriesFreezeBailMutationSave.ServiceCode,
  type: 'post',
  response: config => {
    return veDbBaseseriesFreezeBailMutationSave
  } // 采购单冻结金额保存
},
{
  url: veApis.purOrderFreezeOnOffMutaionUpdate.APIUrl + cH + 'v=' + veApis.purOrderFreezeOnOffMutaionUpdate.ServiceCode,
  type: 'post',
  response: config => {
    return purOrderFreezeOnOffMutaionUpdate
  } // 冻结金额经销商开关保存
},
{
  url: veApis.veDbOrderTypeBrandMutationUpdate.APIUrl + cH + 'v=' + veApis.veDbOrderTypeBrandMutationUpdate.ServiceCode,
  type: 'post',
  response: config => {
    return veDbOrderTypeBrandMutationUpdate
  } // 采购单类型品牌保存
}
]
