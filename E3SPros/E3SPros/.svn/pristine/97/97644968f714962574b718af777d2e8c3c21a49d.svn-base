/**
 *  维修工时类别的模拟数据
 */
import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'
var cloneObj = function(obj) {
  var newObj = {}
  if (obj instanceof Array) {
    newObj = []
  }
  for (var key in obj) {
    var val = obj[key]
    newObj[key] = typeof val === 'object' ? cloneObj(val) : val
  }
  return newObj
}

const carOwnerCustData = Mock.mock({// 客户车辆信息数据
  seCommonQueryCarCustInfo:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 15,
    msg: 'success',
    rows: [{
      carOwnerId: '1',
      carId: '1',
      modifyScenceFlag: '1',
      dlrCustNo: 's0012',
      vin: 'LMJ235HJY88342',
      isEnable: '1',
      custName: '陈晓明',
      custClassCode: '002',
      custClassName: '政府机关',
      genderName: '男',
      genderCode: '1',
      phone: '17384923345',
      addrProvince: '',
      addrCity: '',
      addrCounty: '',
      addrStreet: '',
      addr: '广东省广州市花都区花都广场xxxx小区xxxx栋xxx号',
      credTypeCode: '',
      credTypeName: '',
      credNo: '',
      birthDate: '',
      dlrId: '',
      dlrCode: '',
      carUserNo: '',
      saName: '',
      saempid: ''
    }
    ]
  }
})
const commonWiPrice = Mock.mock({// 工时单价
  seCommonWiPrice:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 15,
    msg: 'success',
    rows: [{
      oemCode: '', // 厂商标识
      groupCode: '', // 集团标识
      dlrId: '', // 经销商ID
      carBrandCode: '', // 品牌编码
      carSeriesCode: '', // 车系编码
      businessType: '', // 业务类别
      wiPrice: 120 // 工时单价
    }]
  }
})
const commonPartPrice = Mock.mock({// 备件单价
  SeBuRepairOrderPartPriceRate:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 15,
    msg: 'success',
    rows: [{
      partPrice: 180, // 备件单价
      partDiscount: '', // 备件折扣
      discountChange: '', // 备件折扣
      partAmount: '', // 备件费用合计
      prePartAmount: '', // 备件费用预估
      oemCode: '', // 厂商标识
      groupCode: '', // 集团标识
      oemId: '', // 厂商标识ID
      groupId: '' // 集团标识ID
    }
    ]
  }
})
const payBusinessData = Mock.mock({// 付费性质与业务类别关系数据
  seDbPayBusinessQuery:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 15,
    msg: 'success',
    rows: [{ payBusinessId: '101', payKind: '1', payKindName: '普通', businessType: '正常维修', businessTypeName: '正常维修' },
      { payBusinessId: '102', payKind: '1', payKindName: '普通', businessType: '定期保养', businessTypeName: '定期保养' },
      { payBusinessId: '103', payKind: '1', payKindName: '普通', businessType: '服务活动', businessTypeName: '服务活动' },
      { payBusinessId: '104', payKind: '1', payKindName: '普通', businessType: '返修', businessTypeName: '返修' },
      { payBusinessId: '201', payKind: '2', payKindName: '免保', businessType: '首保', businessTypeName: '首保' },
      { payBusinessId: '202', payKind: '2', payKindName: '免保', businessType: '终身免保', businessTypeName: '终身免保' },
      { payBusinessId: '301', payKind: '3', payKindName: '保修', businessType: '保修', businessTypeName: '保修' },
      { payBusinessId: '401', payKind: '4', payKindName: '内部', businessType: '正常维修', businessTypeName: '正常维修' },
      { payBusinessId: '402', payKind: '4', payKindName: '内部', businessType: '定期保养', businessTypeName: '定期保养' },
      { payBusinessId: '403', payKind: '4', payKindName: '内部', businessType: '服务活动', businessTypeName: '服务活动' },
      { payBusinessId: '404', payKind: '4', payKindName: '内部', businessType: '检查', businessTypeName: '检查' },
      { payBusinessId: '405', payKind: '4', payKindName: '内部', businessType: '返修', businessTypeName: '返修' },
      { payBusinessId: '501', payKind: '5', payKindName: '协议', businessType: '正常维修', businessTypeName: '正常维修' },
      { payBusinessId: '502', payKind: '5', payKindName: '协议', businessType: '定期保养', businessTypeName: '定期保养' },
      { payBusinessId: '503', payKind: '5', payKindName: '协议', businessType: '服务活动', businessTypeName: '服务活动' },
      { payBusinessId: '504', payKind: '5', payKindName: '协议', businessType: '检查', businessTypeName: '检查' },
      { payBusinessId: '505', payKind: '5', payKindName: '协议', businessType: '返修', businessTypeName: '返修' },
      { payBusinessId: '601', payKind: '6', payKindName: 'PDI', businessType: 'PDI', businessTypeName: 'PDI' },
      { payBusinessId: '701', payKind: '7', payKindName: '保险', businessType: '保险', businessTypeName: '保险' }
    ]
  }
})

const sebuRepairOrderMutationSaveData = Mock.mock({
  sebuRepairOrderMutationSave: {
    result: '1',
    msg: 'success'
  }
})
const queryRepairOrderDetailData = Mock.mock({// 施工单明细查询
  seBuRepairOrderQueryFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 15,
    msg: 'success',
    rows: [{
      repairOrderId: '2018081000001', // 施工单号ID
      repairOrderCode: 'W2018081000001', // 施工单号
      billType: '0', // 单据类型,值列表：SE0060
      guaranteeApplyCode: '', // 保修申请单
      reserveOrderCode: '', // 预约单号
      isRemaintain: '', // 是否返修
      retRepairCode: '', // 返修单号
      isCombo: '', // 是否定保套餐
      fastRepairType: '', // 快保类型
      carSaleOrder: '', // 销售单号
      carOwnerId: '', // 人车关联ID
      dlrCustNo: '', // 经销商客户编码
      custTel: '18578774960', // 客户电话
      custName: '张三', // 客户名称
      repairMan: '张三', // 报修人
      repairTel: '18578774960', // 报修人电话
      carId: 'car01', // 车辆id
      vin: 'LVSH1989778855412', // VIN码
      carLicense: '粤A12H23', // 车牌号
      carBrandCode: '454', // 品牌编码
      carBrandCn: 'XX汽车', // 品牌名称
      carSeriesCn: 'XX车系', // 车系名称
      carSeriesCode: 'SER000121', // 车系编码
      carTypeCode: 'CT001212', // 车型编码
      carTypeCn: '1.5T风尚型', // 车型名称
      carColorName: '高原红', // 车身颜色
      engineNo: 'LG112233', // 发动机号
      mileage: '6500', // 行驶里程
      oil: '4', // 油量
      isAccident: '0', // 是否事故车
      policyCompanyId: '1', // 协议单位ID
      policyCompanyCode: 'cmp01', // 协议单位编码
      saEmpId: '1', // 服务顾问ID
      saName: '王大力', // 服务顾问
      dutyEmpId: '', // 制单责任人ID
      repairTime: '2019-03-07', // 报修时间
      preGetDate: '2019-03-15', // 预计交车日期
      trunRepairDate: '2019-03-07', // 送修日期
      isMessage: '0', // 是否发送短信
      isFirst: '1', // 是否优先派工
      isWait: '1', // 是否在店等待
      remindState: '', // 交车提醒状态
      csDesc: '左翼挂彩', // 故障现象描述
      repairDesc: '维修说明', // 维修说明
      repairDeliveryDate: '', // 维修交车日期
      disposeInfo: '处理方法', // 处理方法
      recommendItem: '推荐项目', // 推荐项目
      mainWorkitem: '主要维修项目', // 主要维修项目
      dealRelustDesc: '处理结果', // 处理结果
      repairOrderStatus: '', // 施工单状态编码
      isClean: '1', // 是否洗车
      isRescue: '0', // 是否救援
      wiDueAmount: 120, // 工时预估费用
      partDueAmount: 150, // 备件预估费用
      otherDueAmount: 80, // 其它预估费用
      discountAmount: 0, // 折扣费用
      repairDueAmount: 350, // 维修预估费用
      wiAmount: 120, // 工时费用
      partAmount: 150, // 备件费用
      otherAmount: 80, // 其它费用
      repairAmount: 350, // 维修费用
      factAmount: 350, // 实收费用
      runupAmount: 0, // 挂账费用
      isGather: '0', // 结算标志编码
      balanceTimes: '', // 结算次数
      remark: '', // 备注
      dlrCode: '', // 经销商编码
      dlrId: '', // 经销商ID
      cancelDate: '', // 作废日期
      cancelReason: '', // 作废原因
      cancelEmpId: '', // 作废人
      maxBusinessType: '', // 最大业务类别
      mainPartitem: '', // 维修主要备件
      maxRepairTypeCode: '', // 最大维修类别
      sendRepairStatus: '', // 送修状态
      isSendRepair: '', // 是否送修
      sendRepairShop: '', // 送修经销商
      sendRepairBillCode: '', // 送修单号
      sendRepairShopSa: '', // 送修店SA
      receptionTime: '', // 接待时间
      ifsEcaseStatus: '', // 是否发送国家电子档案
      serviceLine: '', // 服务快线
      isArtCase: '', // 是否技术方案转入
      oemId: '', // 厂商标识ID
      groupId: '', // 集团标识ID
      oemCode: '', // 厂商编码
      groupCode: '', // 集团编码
      creator: '', // 创建人
      createdDate: '', // 创建日期
      modifier: '', // 修改人
      lastUpdatedDate: '', // 最后更新日期
      isEnable: '1', // 是否可用
      updateControlId: 'afadafafklaf25a5f5a', // 并发控制ID
      cardNo: '', // 会员单号
      carType: '', // 保修类别
      SeBuRepairWi: [{
        repairWiId: 'p001211', // 维修项目ID
        repairOrderId: '2018081000001', // 施工单号ID
        repairOrderCode: 'W2018081000001', // 施工单号
        isCanEdit: '', // 是否可编辑
        isAdd: '', // 是否追加
        recallCaseType: '', // 召回专案类型
        recallCaseCode: '', // 召回专案编码
        comboSaleCode: '', // 定保套餐编码
        actionCode: '', // 活动编码
        reserveOrderCode: '', // 预约单编码
        wiCode: 'wi0001', // 工时编码
        wiName: '维修工时1', // 工时名称
        saleWorkQty: 1, // 销售工时数
        wiWorkQty: 1, // 派工工时数
        wiRepairQty: 1, // 作业工时数
        wiPrice: 120, // 工时单价
        wiAmount: 120, // 工时费用
        wiDiscountRate: 100, // 工时折扣率
        wiCoef: 0, // 保修加价率
        wiDueAmount: 120, // 工时预估费用
        isShare: '1', // 是否分摊
        payKind: '1', // 付费性质编码
        payKindName: '普通', // 付费性质
        businessType: '定期保养', // 业务类别编码
        businessTypeName: '定期保养', // 业务类别
        repairTypeCode: '', // 维修类别编码
        repairTypeName: '', // 维修类别
        dutyEmpId: '', // 制单责任人ID
        repairEmpId: '', // 维修技师ID
        checkEmpId: '', // 质检技师ID
        acceCode: '', // 精品编码
        acceQty: '', // 精品数量
        assignWorkDate: '', // 派工日期
        repairGroup: '', // 维修班组
        repairStatus: '', // 施工状态
        qcDoubleDate: '', // 质检复核时间
        isBackRepair: '', // 是否反修
        isBackWi: '', // 返修工时
        retRepairType: '', // 返修维修类型
        note: '', // 备注
        adaptCarTypeCode: '', // 适用车型
        isCustPay: '', // 是否客户付费
        parentWiCode: '', // 父工时
        wiTypeCode: '', // 工时小类
        wiId: '', // 工时编码
        dutyMan: '', // 制单责任人
        checkResult: '', // 质检结果
        checkResons: '', // 质检不通过原因
        orderNo: '', // 排序
        isCombo: '', // 是否定保套餐
        dlrId: '', // 经销商ID
        repairTime: '', // 报修时间
        oemId: '', // 厂商标识ID
        groupId: '', // 集团标识ID
        oemCode: '', // 厂商标识
        groupCode: '', // 集团标识
        creator: '', // 创建人
        createdDate: '', // 创建日期
        modifier: '', // 修改人
        lastUpdatedDate: '', // 最后更新日期
        isEnable: '', // 是否可用
        updateControlId: '' // 并发控制ID
      }
      ],
      SeBuRepairPart: [{
        repairPartId: 'rep0001', // 维修备件ID
        repairOrderId: '2018081000001', // 施工单号ID
        repairOrderCode: 'W2018081000001', // 施工单号
        reserveOrderCode: '', // 预约单号
        recallCaseType: '', // 召回专案类型
        recallCaseCode: '', // 召回专案编码
        comboSaleCode: '', // 定保套餐编码
        actionCode: '', // 活动编码
        partNo: 'p0001', // 备件编码
        partName: '备件01', // 备件名称
        partQty: 1, // 备件数量
        partPrice: 150, // 备件价格
        dlrPrice: 150, // 网点价
        partDiscount: 100, // 备件折扣率
        priceAmount: 150, // 含税成本
        partAmount: 150, // 备件费用
        costAmount: 135, // 不含税成本
        isNeedOut: '1', // 是否需要出库
        outQty: 0, // 出库数量
        dlrLeastSaleQty: 1, // 最小销售数量
        applyReturnQty: 0, // 申请退货数量
        returnQty: 0, // 退货数量
        partCoef: 0, // 备件加价率
        partDueAmount: 150, // 备件预估费用
        isShare: '1', // 是否分摊
        payKind: '1', // 付费性质编码
        payKindName: '普通', // 付费性质
        businessType: '定期保养', // 业务类别编码
        businessTypeName: '定期保养', // 业务类别
        repairTypeCode: '', // 维修类别编码
        repairTypeName: '', // 维修类别
        dutyMan: '', // 制单责任人
        isCanEdit: '1', // 是否可编辑
        isAdd: '0', // 是否追加
        acceCode: '', // 精品编码
        acceQty: '', // 精品数量
        isBackRepair: '', // 是否返修
        isBackPart: '', // 返修备件
        retRepairType: '', // 返修维修类型
        partBackRepiarQty: '', // 备件返修数量
        relatePartCode: '', // 关联备件编码
        note: '', // 说明
        isCustPay: '', // 是否客户付费
        parentWiCode: '', // 父工时编码
        wiTypeCode: '', // 维修类别名称
        pickingPersonCode: '', // 领料人
        dutyEmpId: '', // 制单责任人ID
        unit: '', // 单位
        orderNo: '', // 排序
        isCombo: '', // 是否基础保养套餐
        dlrId: '', // 经销商ID
        accountCostId: '', // 核算类别ID
        maintainParttype: '', // 备件类别
        oemId: '', // 厂商标识ID
        groupId: '', // 集团标识ID
        oemCode: '', // 厂商标识
        groupCode: '', // 集团标识
        creator: '', // 创建人
        createdDate: '', // 创建日期
        modifier: '', // 修改人
        lastUpdatedDate: '', // 最后更新日期
        isEnable: '', // 是否可用
        updateControlId: '' // 并发控制ID
      }
      ],
      SeBuRepairOther: [{
        repairOtherId: '', // 维修其它费用ID
        repairOrderId: '2018081000001', // 施工单号ID
        repairOrderCode: 'W2018081000001', // 施工单号
        recallCaseType: '', // 召回专案类型
        recallCaseCode: '', // 召回专案编码
        servicePackageCode: '', // 服务套餐编码
        otherAmountId: 'other001', // 其它费用ID
        otherAmountType: '费用类别01', // 其它费用类别
        otherAmount: 80, // 其它费用
        payKind: '1', // 付费性质编码
        payKindName: '普通', // 付费性质
        businessType: '定期保养', // 业务类别编码
        businessTypeName: '定期保养', // 业务类别
        dutyMan: '', // 制单责任人
        dutyEmpId: '', // 制单责任人ID
        otherItem: '', // 附加项目
        remark: '', // 备件
        oemId: '', // 厂商标识ID
        groupId: '', // 集团标识ID
        oemCode: '', // 厂商标识
        groupCode: '', // 集团标识
        creator: '', // 创建人
        createdDate: '', // 创建日期
        modifier: '', // 修改人
        lastUpdatedDate: '', // 最后更新日期
        isEnable: '', // 是否可用
        updateControlId: '' // 并发控制ID
      }
      ],
      SeBuRepairPartShare: [{
        repairPartShareId: 'share0001', // 费用分摊ID
        repairOrderId: '2018081000001', // 施工单号ID
        repairOrderCode: 'W2018081000001', // 施工单号
        partNo: 'p0001', // 备件编码
        partName: '备件01', // 备件名称
        partQty: 1, // 备件数量
        custAmount: 135, // 客户付费金额
        custDiscount: 90, // 客户分摊比例
        custDueAmount: 135, // 客户承担金额
        custPrice: 150, // 客户付费单价
        otherPrice: 150, // 厂家付费单价
        otherAmount: 15, // 厂家付费金额
        otherDiscount: 10, // 厂家承担比例
        otherDueAmount: 15, // 厂家承担金额
        dueAmount: 135, // 应付金额
        businessType: '保修', // 业务类别
        payKind: '', // 付费性质
        dutyEmpId: '', // 制单责任人ID
        carBrandCode: '', // 车辆品牌
        dlrId: '', // 经销商ID
        repairPartId: '', // 维修备件ID
        oemId: '', // 厂商标识ID
        groupId: '', // 集团标识ID
        oemCode: '', // 厂商标识
        groupCode: '', // 集团标识
        creator: '', // 创建人
        createdDate: '', // 创建日期
        modifier: '', // 修改人
        lastUpdatedDate: '', // 最后更新日期
        isEnable: '', // 是否可用
        updateControlId: '', // 并发控制ID
        shareType: '', // 分摊类型
        remark: '' // 备注
      }],
      SeBuRepairPersent: []
    }
    ]
  }
})
export default [
  {// 客户车辆信息查询
    url: seApis.seCommonQueryCarCustInfo.APIUrl + cH + 'v=' + seApis.seCommonQueryCarCustInfo.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: carOwnerCustData
      }
    }
  },
  {// 付费性质和业务类别关系查询
    url: seApis.seDbPayBusinessQuery.APIUrl + cH + 'v=' + seApis.seDbPayBusinessQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: payBusinessData
      }
    }
  },
  {// 查询工时单价
    url: seApis.seCommonWiPrice.APIUrl + cH + 'v=' + seApis.seCommonWiPrice.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: commonWiPrice
      }
    }
  },
  {// 查询备件单价
    url: seApis.SeBuRepairOrderPartPriceRate.APIUrl + cH + 'v=' + seApis.SeBuRepairOrderPartPriceRate.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: commonPartPrice
      }
    }
  },
  {// 施工单保存
    url: seApis.sebuRepairOrderMutationSave.APIUrl + cH + 'v=' + seApis.sebuRepairOrderMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: sebuRepairOrderMutationSaveData
      }
    }
  },
  {// 查询施工单明细
    url: seApis.seBuRepairOrderQueryFindAll.APIUrl + cH + 'v=' + seApis.seBuRepairOrderQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: queryRepairOrderDetailData
      }
    }
  }
]

