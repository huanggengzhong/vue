
import { getDate, getDateChange, getDayChange  } from '@/api/se/process/workorder/repairWorkOrderList'
// 施工单页面数据定义
export const repairDataMixin = {
  data() {
    return {
      flag: '', // 页面是否修改，有估价单ID时
      repairTimeOptions: this.getRepairTimeOptions(),
      preGetDateOptions: this.getPreGetDateOptions(),
      timeoutId: {}, // 工时-wi,备件-part
      syncComplate: {}, // 每行的工时单价加载状态
      payKind: '', // 付费性质
      saveData: {
        dlrId: '', // 门店ID
        repairOrderId: '', // 施工单ID
        repairOrderCode: '', // 施工单号
        billType: '', // 单据类型
        saName: '', // 服务代表
        saCode: this.$store.getters.orgInfo.userId,
        mileage: '', // 行驶里程
        repairTime: getDateChange(new Date(), '', ''), // 报修时间
        preGetDate: getDateChange(new Date(), '',2), // 预计交车时间
        vin: '', // VIN码
        carLicenseNo: '', // 车牌号
        carBrandCode: '', // 车辆品牌编码
        carBrandName: '', // 车辆品牌名称
        carSeriseCode: '', // 车系编码
        carSeriseCn: '', // 车系名称
        carTypeCode: '', // 车型
        carTypeName: '', // 车型名称
        carColorName: '', // 颜色
        custName: '', // 客户姓名
        custTel: '', // 客户电话
        repairMan: '', // 送修人
        repairTel: '', // 送修人电话
        buyDate: '', // 购车日期
        isRescue: '', // 是否救援
        isWait: '', // 在店等待
        isClean: '', // 是否洗车
        isFirst: '', // 是否优先派工
        isRescueB: false, // 救援
        isWaitB: false,
        isCleanB: false,
        isFirstB: false, // 优先派工
        reserveOrderCode: '', // 预约单号
        custClassName: '', // 车主性质
        addr: '', // 客户地址
        csDesc: '', // 客户描述
        disposeInfo: '', // 处理方法
        recommendItem: '', // 推荐项目
        wiDueAmount: 0, // 工时金额
        partDueFee: 0, // 配件金额
        otherAmount: 0, // 其它费用金额
        discountAmount: 0, // 折扣金额
        factAmount: 0, // 预估总费用-折后合计
        repairOrderAmount: 0, // 维修总费用-整单合计
        engineNo: '', // 发动机号
        delieverDate: '', // 销售交车日期
        dlrLevelCode: '', // 门店级别
        icCardNo: '', // 会员卡号
        cardDegreeCode: '', // 会员级别
        memDiscount: '', // 会员折扣
        creator: '', // 创建人
        modifier: '', // 最后修改人
        updateControlId: '', // 并发控制字段
        oil: '', // 油量
        electricPercent: '', // 电量
        wiinfo: [], // 工时信息
        partinfo: [], // 备件信息
        otherfeeinfo: [], // 其他费用信息
        partshare: []// 备件分摊集合
      },
      checkFreePartRow: {
        partNo: '',
        partName: '',
        partQty: '',
        partPrice: '',
        payKind: '',
        dueAmount: '',
        otherPrice: '',
        otherDiscount: '',
        otherDueAmount: '',
        custPrice: '',
        custDiscount: '',
        custDueAmount: '',
        businessType: '',
        discountAmount: ''
      }, 
      // 免保补差价参数数据行
      feeInfo: {// 费用统计：普通-付费，保修，免保，内部，协议，保险
        普通: 0.00, // 普通-付费
        保修: 0.00, // 保修
        免保: 0.00, // 免保
        内部: 0.00, // 内部
        协议: 0.00, // 协议
        保险: 0.00// 保险
      },
      oilOptions: [],//油量值
      electricOptions: [],//电量值
      seCarOwnerCustModalVisible: false,
      seBuRepairModeModalVisible: false,
      dialogWiModelVisible: false,
      // seChooseWiSelectVisible: false,
      paChoosePartVisible: false,
      saEmpOptions: [],
      custInfo: {// 客户车辆信息
      },
      userCompanyQuery: {// 查询协议公司-参数
        oemCode: '',
        groupCode: '',
        dlrId: '1',
        custName: ''
      },
      fastSearchModel: {// 快速搜索文本框
        wiCodeOrName: '', // 工时编码或工时名称
        partCodeOrName: '', // 备件号或备件名称
        otherCodeOrName: ''// 其他费用类别编码或名称
      },
      userCompanyInfo: {// 协议公司、有效期显示
        custFullName: '',
        policyBegDate: '',
        policyEndDate: ''
      },
      carCustInfoQuery: {// 查询用户车辆信息-参数
        oemCode: '',
        groupCode: '',
        dlrId: '',
        dlrCustNo: ''
      },
      repairReserverQuery: {
        oemcode: '', // 厂商标识
        groupCode: '', // 集团标识
        dlrId: '', // 门店ID
        reserveOrderId: '', // 预约单ID
        carId: '', // 车籍ID
        carBrandId: '', // 车辆品牌ID
        vin: '' // VIN码
      },
      payKindOptions: [], // 付费性质下拉框
      businessTypeDatas: {}, // 付费性质对应的业务类别数据，key为payKind的编码
      businessTypeOptions: {}, // 每行的业务类别下拉框，工时的key为 wi0,wi1……，备件的key为part0,
      repairTypeOptions: [], // 维修类别
      menu: {
        wi: { top: 0, botton: 0, left: 0, visible: false, curindex: null, curPayKindName: '' },
        part: { top: 0, botton: 0, left: 0, visible: false, curindex: null, curPayKindName: '' },
        other: { top: 0, botton: 0, left: 0, visible: false, curindex: null }
      },
      wiSearchDataList: [{
        wiCode: 'AX-s00123',
        wiName: '轮胎更换'
      }, {
        wiCode: 'AX-k00123',
        wiName: '上机油'
      }, {
        wiCode: 'AX-f00123',
        wiName: '螺丝更换'
      }, {
        wiCode: 'AX-k00125',
        wiName: '漆面养护'
      }],
      partSearchDataList: [{
        partNo: 'PA001',
        partName: '轮胎'
      }, {
        partNo: 'PA301',
        partName: '机油'
      }, {
        partNo: 'PA203',
        partName: '螺丝'
      }, {
        partNo: 'PA501',
        partName: '油漆5L'
      }]
    }
  }
}
