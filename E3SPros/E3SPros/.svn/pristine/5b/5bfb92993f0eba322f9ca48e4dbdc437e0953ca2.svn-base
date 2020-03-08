/**
 *  综合查询维修情况
 */
import Mock from 'mockjs'
import { apiSeRepairUnionReportQuery,
apiBuRepairHistoryQuery,
apiRepairReportQueryListDetail } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const seRepairUnionReportQueryData = Mock.mock({
  SeRepairReportQueryRepairUnionReport: {
    result: '1',
    pageindex: 1,
    pages: 3,
    records: 30,
    msg: '查询成功',
    'rows|30': [{
      dlrShortName: '广州风日',//专营店名称
      repairOrderId: '',//估价单ID
      repairOrderCode: 'H2901190717003',//估价单号(施工单号？)
      dlrCustNo: '',//客户编码
      carId: '',//车辆ID
      vin: 'LGBH52E04GY101460',//VIN码
      carLicense: '粤R23333',//车牌号
      repairMan: '刘幸文',//报修人(送修人？)
      repairTel: '16818******',//报修人电话
      custName: '刘幸文',//车主(客户姓名？)
      custTel: '16818******',//车主电话
      icCardNo: '',//会员卡号
      isMember: '',//是否会员
      saName: '',//服务代表
      carBrandCn: '东风日产',//品牌名称
      carSeriesName: '新轩逸',//车系
      carTypeCode: 'DFL7168(B172)',//车型
      engineNo: 'HR16529825Y',//发动机号
      isAccidentCn: '',//是否事故车
      repairTime: '',//进场日期(保修日期)(送修时间？)
      deliveryDate: '',//出厂日期(交车日期)
      balanceDate: '',//结算日期
      saleDate: '2019/8/5',//销售日期(购车日期？)
      mileage: '7111',//里程
      repairStatue: '1',//维修状态
      gatherState: '',//结算状态名称
      fastRepairType: '',//快保类型
      gatheringEmpName: '',//结算人
      cancelReason: '',//作废原因
      mainPayType: '',//最大的付费类别(金额最大的业务类别？)
      workitemFeeHj: '144.0',//工时费合计
      partFeeHj: '',//备件费合计
      otherFeeHj: '',//其他费合计
      feeAmount: '',//费用合计
      workitemFee: '',//工时费
      partFee: '',//备件费
      otherFee: '',//其他费
      oldprice: '5566.00',//应收费用
      realrebatefare: '5566.00',//结算折扣费用
      realincomefare: '4455.00',//结算实收费用
      runupAmount: '3456.00',//结算挂账费用
      pvPoint: '',//厂家积分
      pvVirtualPoint: '',//厂家虚拟积分(厂家会员优惠券)
      dlrPoint: '',//专营店积分
      cardAmount: '',//卡余额抵扣
      remark: '',
      isApp: '',//是否APP制单
      receptionTime: '',//APP接待时长
      reserveAmount: '',//自助预约衣服金额
      couponAmount: '',//优惠券抵扣金额
      disposeInfo: '',//处理方法
      csDesc: '',//送修问题
      recommendItem: '',//推荐项目
      isArtCase: '',//是否技术案件转
      sWorkitemFeeHj: '4192.00',//工时费用总计
      sPartFeeHj: '4144.00',//备件费用总计
      sOtherFeeHj: '4144.00',//其他费用总计
      sFeeAmount: '4336.00',//费用总计
      sWorkitemFee: '4556.00',//工时费预估总计
      sPartFee: '5678.00',//备件费预估总计
      sOtherFee: '4567.00',//其他费预估总计
      sOldprice: '5678.00',//费用预估总计
      sRealrebatefare: '3456.00',//优惠费总计
      sRealincomefare: '3456.00',//实收费总计
      sRunupAmount: '3456.00',//挂账费总计
      oemId: '',//厂商编码Id
      groupId: '',//集团编码Id
      oemCode: '',//厂商编码
      groupCode: '',//集团编码
      creator: '',//创建人
      createdDate: '',
      modifier: '',//修改人
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: '',
    }]
  }
})

const seBuRepairHistoryQueryData = Mock.mock({
  seBuRepairHistoryQuery: {
    result: '1',
    pageindex: 1,
    pages: 3,
    records: 30,
    msg: '查询成功',
    'rows|30': [{
      dlrId: '',
      dlrShortName: '广州风日',//专营店名称
      repairOrderId: '',//派工单ID
      repairOrderCode: 'H2901190717003',//估价单号(施工单号？)
      carId: '',//车辆ID
      dlrCustNo: '',//客户编码
      deliveryDate: '2019-7-01',//交车日期
      repairTime: '2019-8-25',//回厂日期
      repairMan: '刘兴文',//报修人
      repairTel: '16818******',//报修人电话
      mileage: 'LGBH52E04GY101460',//VIN码
      csDesc: '',//故障描述
      custName: '张三',//客户名称
      runupAmount: '',//挂账费用
      saName: '',//服务代表
      oemId: '',//厂商编码Id
      groupId: '',//集团编码Id
      oemCode: '',//厂商编码
      groupCode: ''//集团编码
    }]
  }
})

//派工结算明细查询
// const seRepairReportQueryListDetailData = Mock.mock({
//   seRepairReportQueryListDetail: {
//     result: '1',
//     pageindex: 1,
//     pages: 3,
//     records: 30,
//     msg: '查询成功',
//     'rows|30': [{
//       repairorderid: '',//估价单ID
//       repairordercode: 'B77201805020007',//估价单号
//       carlicense: '粤R23333',//车牌号
//       oemId: '',//厂商编码Id
//       groupId: '',//集团编码Id
//       oemCode: '',//厂商编码
//       groupCode: '',//集团编码
//       workbalancedetailwi: [{
//         dlrShortName: '',//网店名称
//         repairOrderCode: '',//估价单号
//         repairOrderId: '',//估价单ID
//         isFirst: '',//优先派工
//         saName: '',//服务代表
//         custName: '',//客户姓名
//         custTel: '',//联系电话
//         carLicense: '',//车牌号
//         carTypeCode: '',//车型
//         vin: '',//
//         carColorName: '',//车身颜色
//         addr: '',//联系地址
//         mileage: '',//行驶里程
//         csDesc: '',//故障现象描述
//         disposeInfo: '',//处理方法
//         repairDesc: '',//维修说明
//         dealRelustDesc: '',//处理结果
//         repairMan: '',//报修人
//         repairTel: '',//报修电话
//         repairTime: '',//保修时间
//         buyDate: '',//购车日期
//         trunRepairDate: '',//交修时间
//         preGetDate: '',//预计交车时间
//         repairFinishDate: '',//完工时间
//         qualityCheckMan: '',//总检人员
//         qualityCheckDate: '',//总检时间
//         deliveryDate: '',//交车日期
//         wiAmountSum: '',//工时费合计
//         partAmountSum: '',//备件费合计
//         otherAmountSum : '',//其他费合计
//         amountSum: '',//费用合计
//         wiDueAmount: '',//工时费预估
//         partDueAmount: '',//备件费预估
//         otherDueAmount: '',//其他费预估
//         dueAmount: '',//预估费总计
//         factAmount: '',//实收费用
//         disparityPrice: '',//优惠费
//         saleWorkQty: '',//销售工时
//         wiPrice: '',//工时单价
//         wiAmount: '',//工时费
//         wiPreAmoun: '',//工时费预估
//         gatheringEmpName: '',//结算人员(API原为b.GatheringEmpName)
//         wiCode: '',//工时编码
//         wiName: '',//维修内容
//         repairGroup: '',//维修班组
//         repairName: '',//维修人员
//         checkEmpName: '',//质检人员
//         checkDate: '',//质检时间
//         repairTypeName: '',//维修类型名称
//         payKindName: '',//付费性质名称
//         businessTypeName: '',//业务类别名称
//         note: ''//备注
//       }],
//       workbalancedetailpart: [{
//         dlrShortName: '',//网店名称
//         repairOrderCode: '',//估价单号
//         repairOrderId: '',//估价单ID
//         isFirst: '',//优先派工
//         saName: '',//服务代表
//         custName: '',//客户姓名
//         custTel: '',//联系电话
//         carLicense: '',//车牌号
//         carTypeCode: '',//车型
//         vin: '',//
//         carColorName: '',//车身颜色
//         addr: '',//联系地址
//         mileage: '',//行驶里程
//         csDesc: '',//故障现象描述
//         disposeInfo: '',//处理方法
//         repairDesc: '',//维修说明
//         dealRelustDesc: '',//处理结果
//         repairMan: '',//报修人
//         repairTel: '',//报修电话
//         repairTime: '',//保修时间
//         buyDate: '',//购车日期
//         trunRepairDate: '',//交修时间
//         preGetDate: '',//预计交车时间
//         repairFinishDate: '',//完工时间
//         qualityCheckMan: '',//总检人员
//         qualityFinishDate : '',//总检时间
//         deliveryDate: '',//交车日期
//         wiAmountSum: '',//工时费合计
//         partAmountSum: '',//备件费合计
//         otherAmountSum : '',//其他费合计
//         amountSum: '',//费用合计
//         wiDueAmount: '',//工时费预估
//         partDueAmount: '',//备件费预估
//         otherDueAmount: '',//其他费预估
//         dueAmount: '',//预估费总计
//         factAmount: '',//实收费用
//         disparityPrice: '',//优惠费
//         gatheringEmpName: '',//结算人员
//         partNo: '',//备件编码
//         partName: '',//备件名称
//         costAmount: '',//不含税成本
//         priceAmount: '',//含税成本
//         partPrice: '',//备件单价
//         partQty: '',//备件数量
//         outQty: '',//出库数量
//         pickQty: '',//领料数量
//         returnQty: '',//退货数量
//         partAmount: '',//备件费用
//         changePart: '',//是否换件
//         partPropertyName: '',//备件属性
//         partTypeName: '',//备件类别
//         repairTypeName: '',//维修类型名称
//         payKindName: '',//付费性质名称
//         businessTypeName: '',//业务类别名称
//         pickingPersonName: '',//领料人编码
//         note: '',//备注
//         oemCode: '',//厂商标识
//         groupCode: '',//集团标识
//         oemId: '',//厂商标识ID
//         groupId: ''//集团标识ID
//       }]
//     }]
//   }
// })

//派工结算明细
const seRepairReportQueryListDetailData = Mock.mock({
  seRepairReportQueryList: {
    result: '1',
    pageindex: 1,
    pages: 3,
    records: 30,
    msg: '查询成功',
    rows: [{
      wiCode: 'CHECKALL-CHEC',//工时编码
      wiName: 'XXXXX',//工时名称(是否为维修内容？)
      businessTypeName: '检查',//业务类别名称
      repairStatusName: '质检已通过',//维修项目状态名称
      payKindName: '客付',//付费性质名称
      repairTypeName: '机电',//维修类型名称
      saleWorkQty: '1.00',//销售工时数量
      wiWorkQty: '1.00',//派工工时数量
      wiPrice: '70',//工时单价
      wiAmount: '￥70.00',//工时费用
      wiPreAmount: '',//预估费用
      repairGroupName: '',//维修班组名称
      repairEmpName: '',//维修技师名称
      repairOrderId: '',//维修工单ID
      repairWiId: '',//维修项目ID
      repairWorkName: '',//维修工位(API上缺失)
      oldprice: '',//应收费(API上缺失)
      dtrepairpart: [{//维修备件(对应维修备件)
        partNo: '474Z-14-302 L6',//备件编号
        partName: '合成机油',//备件名称
        partDiscount: '',//备件折扣
        payKindName: '保修',//付费性质名称
        businessTypeName: '检查',//业务类别名称
        repairTypeName: '机电',//维修类型名称
        partQty: '1',//备件数量(是否为需求数量，API缺需求数量)
        outQty: '12',//出库数量
        partPrice: '46.00',//备件单价
        partAmount: '￥0.00',//备件费用(是否为合计金额？API缺合计金额)
        prePartAmount: '',//预估费用
        returnQty: '0',//退货数量
        unit: '7',//单位
        partTypeName: '机油',//备件类别
        stockSymbol: '已出库',//库存标志(是否为出库标志？ API缺出库标志)
        partDiscount: '',//折扣
        repairOrderId: '',//维修工单ID
        repairPartId: ''//维修备件ID
      },{//维修备件
        partNo: '474Z-14-302 L6',//备件编号
        partName: '合成机油',//备件名称
        partDiscount: '',//备件折扣
        payKindName: '保修',//付费性质名称
        businessTypeName: '检查',//业务类别名称
        repairTypeName: '机电',//维修类型名称
        partQty: '1',//备件数量(是否为需求数量，API缺需求数量)
        outQty: '12',//出库数量
        partPrice: '46.00',//备件单价
        partAmount: '￥0.00',//备件费用(是否为合计金额？API缺合计金额)
        prePartAmount: '',//预估费用
        returnQty: '0',//退货数量
        unit: '7',//单位
        partTypeName: '机油',//备件类别
        stockSymbol: '已出库',//库存标志(是否为出库标志？ API缺出库标志)
        partDiscount: '',//折扣
        repairOrderId: '',//维修工单ID
        repairPartId: ''//维修备件ID
      }],
      dtrepairorder: [{//工单信息(对应派工资料)
        dlrShortName: '',//专营店名称
        repairOrderId: '',//派工单ID
        repairOrderCode: '',//估价单编码
        dlrCustNo: '',//客户编码
        custName: '',//客户名称
        carId: '',//车辆ID
        vin: '',//VIN码
        carTypeCode: '',//车型编码
        remark: '',//备注
        trunRepairDate: '2019-07-18 18:08',//交修时间
        deliveryDate: '2019-07-18 18:06',//交车时间
        repairTime: '2019-07-18 17:57',//报修日期
        repairTel: '',//报修人电话
        preGetDate: '2019-07-18 19:57',//预计交车时间
        mileage: '59463',//行驶里程
        csDesc: '球头(方向机,外,左右)',//故障现象描述(是否为送修问题)
        dealRelustDesc: '',//处理结果
        disposeInfo: '球头(方向机,外,左右)',//处理方法及结果
        carLicense: '',//车牌号
        wiAmount: '￥70.00',//工时费用
        partAmount: '￥70.00',//备件费用
        otherAmount: '￥70.00',//其他费用
        repairOrderAmount: '￥210.00',//工单总费用
        saName: '苏亚峰',//服务代表名称
        recommendItem: '洗车',//推荐项目
        isFirst: '是',//是否优先派工
        //mileage: '',//行驶里程(API多了一个行驶里程)
        repairFinishDate: '2019-07-18 18:06',//完工时间
        serviceTel: '',//电话
        dlrId: '',//门店ID
        carColorName: '',//车身颜色
        carInColorName: '',//内饰颜色
        oemCode: '',//厂商标识
        groupCode: '',//集团标识
        oemId: '',//厂商标识ID
        groupId: ''//集团标识ID
      }],
      dtrepairassign: [{//维修派工记录(对应维修项目)
        itemName: '维修',//维修内容
        rrpairStatusName: '质检已通过',//维修项目状态名称
        workWiQty: '1.00',//派工工时数
        repairGroupName: '机电一组',//维修班组
        repairEmpName: '张三',//维修技师
        workStationName: '',//维修工位
        repairOrderId: '',//派工单ID
        wiCode: ''//工时编码
      }],
      dtrepairgather: [{//结算单信息(对应结算记录)
        balanceOrderCode: '',//结算单号
        balanceDate: '2019/8/10',//结算日期
        receiptsAmount: '',//实收费
        discountAmount: '',//折算金额
        totalAmount: '',//应收总费
        payType: '',//付费类型
        gatheringEmpName: '',//结算人员
        repairOrderId: '',//派工单ID
        wiAmount: '',//工时总价
        partAmount: '',//零件总价
        otherAmount: '',//其他总价
        receiptsAmount: '',//实收费用
        runupAmount: '',//挂账费用
        gatheringEmpName: '',//收款人员
        cashAmount: '',//现金
        bankAmount: '',//银行
        collectAmount: '',//预收款
        factoyrRunupAmount: '',//厂家挂账
        pactRunupAmount: '',//协议单位挂账
        insureRunupAmount: '',//保险公司挂账
        dlrId: '',//专营店ID
        icCardNo: '',//会员卡号
        pvPoint: '',//厂家积分抵扣额
        pvRealPoint: '',//厂家真实积分
        pvVirtualPoint: '',//厂家虚拟积分
        dlrPoint: '',//专营店积分抵扣额
        cardAmount: ''//卡金额支付额
      }],
      dtrepairrefund: [{//反结算记录(对应反结算信息)
        balanceOrderCode: '',//结算单号
        balanceDate: '2019/8/10',//结算日期
        receiptsAmount: '',//应收费
        totalAmount: '',//应收总费(是否对应实收费？)
        payTypeCn: '',//付费类型
        gatheringEmpName: '',//结算人员
        cancelReason: '',//反结算原因
        cancelDate: '',//反结算日期
        cancelEmpName: '',//反结算人员
        repairOrderId: ''//派工单ID
      }],
      dtrepairoutpart: [{//维修出库(对应维修出库单)
        outStoreCode: 'B77180813W00001',//出库单号
        outStoreDate: '2018/8/13',//出库时间
        partNo: 'MA12-32-280',//备件编号
        partName: '合成机油',//备件名称
        partTypeName: '机油',//备件类别
        unit: '瓶',//单位
        placeCode: 'A14-10-83',//仓位编号
        empName: '张三',//仓库人员
        outStoreQty: '12',//出库数量
        partPrice: '46',//备件单价
        partAmount: '552',//备件费(是否对应合计？)
        prePartAmount: '552',//备件预估(是否对应应收费？)
        payKindName: '保修',//付费性质名称
        businessTypeName: '理赔',//业务类别名称
        repairTypeName: '机电',//维修类型名称
        repairOrderId: ''//派工单ID
      }],
      dtrepairoutreturn: [{//出库退货(对应出库退货)
        relateOrderCode: 'XXXXXX',//退料申请单号
        outStoreDate: '2018/9/12',//出库时间
        partNo: 'XXXXXXX',//备件编号
        partName: '',//备件名称
        partTypeName: '',//备件类别
        unit: '',//单位
        placeCode: '',//仓位编号
        empName: '',//仓库人员
        outStoreQty: '',//出库数量
        partPrice: '',//备件单价
        partAmount: '',//备件费
        prePartAmount: '',//备件预估
        payKindName: '',//付费性质名称
        businessTypeName: '',//业务类别名称
        repairTypeName: '',//维修类型名称
        repairOrderId: ''//派工单ID
      }],
      dtuser: [{//使用人信息
        dlrCustNo: '1001',//客户编码
        custName: '张三',//客户名称
        phone: '15173456578',//电话
        genderName: '',//性别名称
        birthDate: '',//出生日期
        credNo: '',//证件号
        addr: '',//地址
        vin: '',//VIN码
        mail: ''//邮箱(API上缺失)
      }],
      dtworkorder: [{//维修派工主表信息(对应其他资料？)
        repairOrderId: '',//派工单ID
        groupName: '清洁一组',//清洁班组
        repairOrderCode: '',//估价单号
        cleanFinishDate: '',//清洁完工时间
        qualityFinishDate: '',//质检完工时间(是否对应总检时间？)
        qualityCheckMan: '',//总检人员名称(是否为总检签字)
        cleanEmpName: '',//清洁人员名称
      }],
      dtcarcustinfo: [{//获取客户车辆信息(对应客户/车辆信息)
        dlrCustNo: '',//专营店客户编码
        carTypeCode: '',//车型编码
        carSeriesCode: '',//车系编码
        custName: '张三',//车主名字
        genderName: '男',//性别名称
        phone: '18265007787',//车主电话
        addr: '山东省曹县安蔡楼镇陈河行政村陈河村180号',//车主地址
        credNo: 'XXXXXXXXXXX',//证件号
        birthDate: '1988-8-26',//出生日期
        dlrId: '',//专营店ID
        dlrCode: '',//专营店编码
        vin: 'LMVAFLEC1DA031042',//VIN码
        carId: '',//车辆ID
        carBrandCode: '',//品牌编码
        carBrandCn: '海马汽车',//品牌编码
        engineNo: '30029314',//发动机号
        tranType: '',//变速箱类型
        underpanNo: '',//底盘号
        carKeyNo: '',//钥匙号
        carColorName: '红色',//车身颜色
        carSeriesName: 'M3',//车系名称
        carTypeName: 'HMA7150DA4W',//车型名称
        saleDate: '',//交车日期(是否为购车日期？API缺购车日期)
        dlrShortName: '商丘银丰',//经销商名称
        buyCaruseName: '家用',//购买用途
        carInColorName: '',//内饰颜色
        mail: ''//邮箱(API上缺失)
      }],
      dtRepairOther: [{//其他费用集合
        repairOtherId: '',//其他费用ID
        repairOrderId: '',//施工单ID
        repairOrderCode: '',//施工单号
        recallCaseType: '',//召回专家类型
        recallCaseCode: '',//召回专家编码
        servicePackageCode: '',//服务套餐编码
        otherAmountId: '',//其他费用ID
        otherAmountType: '',//其他费用类别
        costTypeName: '',//其他费用费用类别
        otherAmount: '￥0.00',//其他费用
        payKind: '',//付费性质
        businessType: '',//业务类别
        dutyMan: '',//制单人
        dutyEmpId: '',//制单人ID
        remark: ''//备注
      }],
      appearRecordSrc: 'http://pic21.nipic.com/20120507/10005327_235742133113_2.jpg'//外观记录图片链接地址
    }]
  }
})

export default [
  {
    url: apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.APIUrl + cH + 'v=' + apiSeRepairUnionReportQuery.SeRepairReportQueryRepairUnionReport.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seRepairUnionReportQueryData
      }
    }
  },
  {
    url: apiBuRepairHistoryQuery.seBuRepairHistoryQuery.APIUrl + cH + 'v=' + apiBuRepairHistoryQuery.seBuRepairHistoryQuery.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seBuRepairHistoryQueryData
      }
    }
  },
   {
    url: apiRepairReportQueryListDetail.seRepairReportQueryList.APIUrl + cH + 'v=' + apiRepairReportQueryListDetail.seRepairReportQueryList.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seRepairReportQueryListDetailData
      }
    }
  }
]
