import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'
// 订单类型
const orderData = Mock.mock({
    'rows': [{
        attrValue: 'orderType00001'
    },
    {
        attrValue: 'orderType00002'
    },
    {
        attrValue: 'orderType00003'
    },
    {
        attrValue: 'orderType00004'
    },
    {
        attrValue: 'orderType00005'
    }]
})
// 运输方式
const transportData = Mock.mock({
    'rows': [{
        attrValue: '公路'
    },
    {
        attrValue: '自提'
    },
    {
        attrValue: '航空'
    }]
})
// 备件订单制作主表网格
const paBuPurOrderQueryFindAll = Mock.mock({
    rows: [{
        purOrderCode: "H2901181226DU01",

        purOrderType: "紧急订单",
        purDate: "2018-12-28",
        purAmount: "1000.00",
        orderVariety: "1",
        orderStatus: "未提交",
        transportTypeCode: "公路",
        creatorName: "总管",
        oemAuditDate: "208-12-28 08:40:30",
        creatorName: "张总",
        oemAuditDate: "208-12-28 08:47:30",
        creatorName: "王生",
        createdDate: "2018-12-28",
        orderSource: ""
    },
    {
        purOrderCode: "H2901181226DU02",

        purOrderType: "紧急订单",
        purDate: "2018-12-28",
        purAmount: "1000.00",
        orderVariety: "1",
        orderStatus: "未提交",
        transportTypeCode: "公路",
        creatorName: "总管",
        oemAuditDate: "208-12-28 08:40:30",
        creatorName: "张总",
        oemAuditDate: "208-12-28 08:47:30",
        creatorName: "王生",
        createdDate: "2018-12-28",
        orderSource: ""
    },
    {
        purOrderCode: "H2901181226DU03",

        purOrderType: "紧急订单",
        purDate: "2018-12-28",
        purAmount: "1000.00",
        orderVariety: "1",
        orderStatus: "未提交",
        transportTypeCode: "公路",
        creatorName: "总管",
        oemAuditDate: "208-12-28 08:40:30",
        creatorName: "张总",
        oemAuditDate: "208-12-28 08:47:30",
        creatorName: "王生",
        createdDate: "2018-12-28",
        orderSource: ""
    }
    ]
})
//新建订单 主机厂库存查询
const paBuOemStorageQueryFindAll = Mock.mock({
    paBuOemStorageQueryFindAll: [{
        brandName: 'H50322GDMA-B255',
        carSeries: '后保险杠加强件1',
        catType: '上海分库',
        carTypeConfig: '正常',
        purOrderType: '华南分库',
        replaceCarTypeConfig1: '正常'
    },
    {
        brandName: 'H50322GDMA-B256',
        carSeries: '后保险杠加强件2',
        catType: '广州分库',
        carTypeConfig: '正常',
        purOrderType: '华南分库',
        replaceCarTypeConfig1: '正常'
    },
    {
        brandName: 'H50322GDMA-B257',
        carSeries: '后保险杠加强件3',
        catType: '北京分库',
        carTypeConfig: '正常',
        purOrderType: '华南分库',
        replaceCarTypeConfig1: '正常'
    }
    ]
})
//新建订单_销售历史查询
const paBuDlrOutStoreQuerySaleHis = Mock.mock({
    paBuDlrOutStoreQuerySaleHis: [{
        brandName: 'H50322GDMA-B255',
        carSeries: '后保险杠加强件1',
        catType: '上海分库',
        carTypeConfig: '正常',
        purOrderType: '华南分库',
        replaceCarTypeConfig1: '正常'
    },
    {
        brandName: 'H50322GDMA-B256',
        carSeries: '后保险杠加强件2',
        catType: '广州分库',
        carTypeConfig: '正常',
        purOrderType: '华南分库',
        replaceCarTypeConfig1: '正常'
    },
    {
        brandName: 'H50322GDMA-B257',
        carSeries: '后保险杠加强件3',
        catType: '北京分库',
        carTypeConfig: '正常',
        purOrderType: '华南分库',
        replaceCarTypeConfig1: '正常'
    }
    ]
})
//新建订单_关联订单查询
const paBuPurOrderQueryRelate = Mock.mock({
    paBuPurOrderQueryRelate: [{
        brandName: 'C1301181123AN03',
        carSeries: '常规订单',
        catType: '11',
        carTypeConfig: '11',
        purOrderType: '0',
        replaceCarTypeConfig1: '0',
        modeoftransportation: '4',
        dealerauditor: '6',
        dealerreviewtime: '',
        mainengineauditor: '2018/12/4'
    },
    {
        brandName: 'C1301181123AN03',
        carSeries: '常规订单',
        catType: '11',
        carTypeConfig: '11',
        purOrderType: '0',
        replaceCarTypeConfig1: '0',
        modeoftransportation: '4',
        dealerauditor: '6',
        dealerreviewtime: '',
        mainengineauditor: '2018/12/4'
    }
    ]
})
// 新建订单_替换件库存查询
const paBuReplacementStock = Mock.mock({
    paBuReplacementStock: [{
        brandName: '769135E920-075',
        carSeries: '中立柱上饰板，右',
        catType: '个',
        carTypeConfig: '12',
        purOrderType: '11',
        replaceCarTypeConfig1: '关闭',
        param2: '华南分库',
        param3: '停用',
        param4: '正常'
    },
    {
        brandName: '769135E920-076',
        carSeries: '中立柱上饰板，左',
        catType: '个',
        carTypeConfig: '12',
        purOrderType: '11',
        replaceCarTypeConfig1: '关闭',
        param2: '华南分库',
        param3: '停用',
        param4: '正常'
    }
    ]
})
// 新建订单_数据验证结果查询
const paBudataVerification = Mock.mock({
    paBudataVerification: [{
        brandName: 'C1301181123AN07',
        carSeries: 'KLALD10304-L416',
        catType: '[订货开关不是开放状态] [备件状态为停用或作废]'
    },
    {
        brandName: 'C1301181123AN08',
        carSeries: 'KLALD10304-L417',
        catType: '[订货开关不是开放状态] [备件状态为停用或作废]'
    }
    ]
})
// 备件订单制作订单明细查询
const paBuPurOrderDQueryFindAll = Mock.mock({
    paBuPurOrderDQueryFindAll: [{
        dlrCode: "H2265",
        dlrShortName: '广州风日',
        purOrderCode: 'H2264512354222',
        purOrderType: '1',
        purDate: '2019-08-12',
        purAmount: '订货金额',
        orderVariety: '1',
        orderStatus: '主机厂已审核',
        transportTypeCode: '公路',
        creater: '李老八',
        createTime: '2019-08-11',
        orderSource: '专营店订单',
        auditTime: '2019-08-12',
        choose: 'true',
        brandName: 'H2901181226DU01',
        carSeries: '紧急订单',
        catType: '2019-07-22',
        carTypeConfig: '30000',
        replaceCarType1: '1',
        replaceCarTypeConfig1: '未提交',
        modeoftransportation: '公路',
        dealerauditor: '总管',
        dealerreviewtime: '2018-12-28 08:40:30',
        mainengineauditor: '张总',
        mainengineaudittime: '2018-12-28 08:47:30',
        preparedby: '王生',
        documentationdate: '2018-12-12',
        dismissreason: '原因1',
        bottomList: [{
            partBrandCode: 'IN',
            partNo: '873615RF1A-A177',
            partName: '主驾坐垫泡棉',
            snp: '1',
            purQty: '1',
            unit: '个',
            purPrice: '50',
            purAmount: '50',
            vin: 'LGBM4DE45ED002022'
        },
        {
            partBrandCode: 'LM',
            partNo: '9545515RF1A-A380',
            partName: '后视镜',
            snp: '1',
            purQty: '1',
            unit: '个',
            purPrice: '188',
            purAmount: '188',
            vin: 'LGBM4DE45ED8866951'
        },
        {
            partBrandCode: 'KI',
            partNo: '545475RF1A-S505',
            partName: '进气格栅',
            snp: '1',
            purQty: '1',
            unit: '个',
            purPrice: '80',
            purAmount: '80',
            vin: 'LGBM4DE45ED1211554'
        }
        ]
    },
    {
        dlrCode: "S8080",
        dlrShortName: '长沙龙美',
        purOrderCode: 'LM201905251120',
        purOrderType: '1',
        purDate: '2019-08-12',
        purAmount: '订货金额',
        orderVariety: '1',
        orderStatus: '主机厂待审核',
        transportTypeCode: '公路',
        creater: '刘二',
        createTime: '2019-05-25',
        orderSource: '专营店订单',
        auditTime: '2019-05-26',
        choose: 'true',
        brandName: 'H2901181226DU01',
        carSeries: '正常订单',
        catType: '2019-07-23',
        carTypeConfig: '30000',
        replaceCarType1: '1',
        replaceCarTypeConfig1: '未提交',
        modeoftransportation: '铁路',
        dealerauditor: '总管',
        dealerreviewtime: '2018-12-28 08:40:30',
        mainengineauditor: '张总',
        mainengineaudittime: '2018-12-28 08:47:30',
        preparedby: '王生',
        documentationdate: '2018-12-12',
        dismissreason: '原因1',
        bottomList: [{
            partBrandCode: 'CK',
            partNo: '9898784RF1A-A668',
            partName: '轮胎',
            snp: '1',
            purQty: '1',
            unit: '个',
            purPrice: '688',
            purAmount: '688',
            vin: 'LGBM4DE45ED4551155'
        }]
    },
    {
        dlrCode: "AA181",
        dlrShortName: '上海国粤',
        purOrderCode: 'GY201905041212',
        purOrderType: '1',
        purDate: '2019-08-12',
        purAmount: '订货金额',
        orderVariety: '1',
        orderStatus: '主机厂已审核',
        transportTypeCode: '公路',
        creater: '王大朗',
        createTime: '2019-06-01',
        orderSource: '专营店订单',
        auditTime: '2019-06-02',
        choose: 'true',
        brandName: 'H2901181226DU01',
        carSeries: '过期订单',
        catType: '2019-07-24',
        carTypeConfig: '30000',
        replaceCarType1: '1',
        replaceCarTypeConfig1: '未提交',
        modeoftransportation: '飞机',
        dealerauditor: '总管',
        dealerreviewtime: '2018-12-28 08:40:30',
        mainengineauditor: '张总',
        mainengineaudittime: '2018-12-28 08:47:30',
        preparedby: '王生',
        documentationdate: '2018-12-12',
        dismissreason: '原因1'
    }
    ]
})
// 订单号弹出框主表网格
const popoverdata = Mock.mock({
    'items': [
        {
            choose: 'true',
            brandName: '769152FL0C',
            carSeries: '中立柱下饰板',
            catType: '142323238',
            carTypeConfig: '饰盖',
            replaceCarType1: '1',
            replaceCarTypeConfig1: '232.40',
            modeoftransportation: '0',
            dealerauditor: '个',
            dealerreviewtime: '正常',
            mainengineauditor: '停购',
            mainengineaudittime: 'EQ7250',
            preparedby: 'N',
            documentationdate: '一般易损件',
            dismissreason: '饰板'
        },
        {
            choose: 'true',
            brandName: '769152FL0C2',
            carSeries: '下饰板2',
            catType: '1423232382',
            carTypeConfig: '饰盖',
            replaceCarType1: '2',
            replaceCarTypeConfig1: '2220',
            modeoftransportation: '0',
            dealerauditor: '2个',
            dealerreviewtime: '正常2',
            mainengineauditor: '停购2',
            mainengineaudittime: 'EQ72502',
            preparedby: '2N',
            documentationdate: '一般易损件2',
            dismissreason: '饰板2'
        },
        {
            choose: 'true',
            brandName: '769152FL0C3',
            carSeries: '中立柱下饰板3',
            catType: '1423232383',
            carTypeConfig: '饰盖',
            replaceCarType1: '23',
            replaceCarTypeConfig1: '2323.40',
            modeoftransportation: '03',
            dealerauditor: '3个',
            dealerreviewtime: '3正常',
            mainengineauditor: '停购3',
            mainengineaudittime: 'EQ72503',
            preparedby: 'N3',
            documentationdate: '一般易损件3',
            dismissreason: '饰板3'
        },
        {
            choose: 'true',
            brandName: '769152FL0C4',
            carSeries: '中立柱下饰板4',
            catType: '1423232384',
            carTypeConfig: '饰盖',
            replaceCarType1: '24',
            replaceCarTypeConfig1: '232.404',
            modeoftransportation: '04',
            dealerauditor: '个4',
            dealerreviewtime: '正常4',
            mainengineauditor: '停购4',
            mainengineaudittime: 'EQ72504',
            preparedby: 'N4',
            documentationdate: '一般易损件4',
            dismissreason: '饰板4'
        },
        {
            choose: 'true',
            brandName: '769152FL0C5',
            carSeries: '中立柱下饰板5',
            catType: '1423232385',
            carTypeConfig: '饰盖',
            replaceCarType1: '25',
            replaceCarTypeConfig1: '232.405',
            modeoftransportation: '05',
            dealerauditor: '5个',
            dealerreviewtime: '正常5',
            mainengineauditor: '停购5',
            mainengineaudittime: 'EQ72505',
            preparedby: 'N5',
            documentationdate: '一般易损5件',
            dismissreason: '饰5板'
        },
        {
            choose: 'true',
            brandName: '7691562FL0C',
            carSeries: '中立柱6下饰板',
            catType: '1423263238',
            carTypeConfig: '饰盖',
            replaceCarType1: '26',
            replaceCarTypeConfig1: '2326.40',
            modeoftransportation: '06',
            dealerauditor: '6个',
            dealerreviewtime: '正6常',
            mainengineauditor: '停6购',
            mainengineaudittime: 'EQ72650',
            preparedby: 'N6',
            documentationdate: '一般易6损件',
            dismissreason: '饰板6'
        },
        {
            choose: 'true',
            brandName: '769152FL0C7',
            carSeries: '中立柱下7饰板',
            catType: '1423273238',
            carTypeConfig: '饰盖',
            replaceCarType1: '27',
            replaceCarTypeConfig1: '2327.40',
            modeoftransportation: '70',
            dealerauditor: '个7',
            dealerreviewtime: '正7常',
            mainengineauditor: '停7购',
            mainengineaudittime: 'E7Q7250',
            preparedby: 'N7',
            documentationdate: '一般易7损件',
            dismissreason: '饰7板'
        },
        {
            choose: 'true',
            brandName: '7691528FL0C',
            carSeries: '中立柱下饰8板',
            catType: '1423283238',
            carTypeConfig: '饰盖',
            replaceCarType1: '28',
            replaceCarTypeConfig1: '2382.40',
            modeoftransportation: '80',
            dealerauditor: '个8',
            dealerreviewtime: '正8常',
            mainengineauditor: '停8购',
            mainengineaudittime: 'EQ72580',
            preparedby: 'N8',
            documentationdate: '一般8易损件',
            dismissreason: '饰8板'
        },
        {
            choose: 'true',
            brandName: '769152F9L0C',
            carSeries: '中立柱下9饰板',
            catType: '1423232389',
            carTypeConfig: '饰盖',
            replaceCarType1: '29',
            replaceCarTypeConfig1: '2329.40',
            modeoftransportation: '0',
            dealerauditor: '个9',
            dealerreviewtime: '正9常',
            mainengineauditor: '停9购',
            mainengineaudittime: 'EQ97250',
            preparedby: 'N9',
            documentationdate: '一般易9损件',
            dismissreason: '饰9板'
        },
        {
            choose: 'true',
            brandName: '769152FL0C11',
            carSeries: '中立柱下饰11板',
            catType: '14232113238',
            carTypeConfig: '饰盖1',
            replaceCarType1: '211',
            replaceCarTypeConfig1: '23112.40',
            modeoftransportation: '011',
            dealerauditor: '11个',
            dealerreviewtime: '正11常',
            mainengineauditor: '停11购',
            mainengineaudittime: 'EQ711250',
            preparedby: '11N',
            documentationdate: '一般易11损件',
            dismissreason: '饰11板'
        },
        {
            choose: 'true',
            brandName: '76915212FL0C',
            carSeries: '中立柱12下饰板',
            catType: '14232123238',
            carTypeConfig: '饰盖',
            replaceCarType1: '212',
            replaceCarTypeConfig1: '23122.40',
            modeoftransportation: '012',
            dealerauditor: '个12',
            dealerreviewtime: '正12常',
            mainengineauditor: '停12购',
            mainengineaudittime: 'EQ127250',
            preparedby: 'N12',
            documentationdate: '一般易12损件',
            dismissreason: '饰板12'
        },
        {
            choose: 'true',
            brandName: '76915213FL0C',
            carSeries: '中立柱下13饰板',
            catType: '14232133238',
            carTypeConfig: '饰盖',
            replaceCarType1: '213',
            replaceCarTypeConfig1: '232.1340',
            modeoftransportation: '130',
            dealerauditor: '13个',
            dealerreviewtime: '正13常',
            mainengineauditor: '停13购',
            mainengineaudittime: 'EQ137250',
            preparedby: 'N13',
            documentationdate: '一般易13损件',
            dismissreason: '饰板13'
        },
        {
            choose: 'true',
            brandName: '76915142FL0C',
            carSeries: '中立柱14下饰板',
            catType: '14232143238',
            carTypeConfig: '饰盖',
            replaceCarType1: '214',
            replaceCarTypeConfig1: '21432.40',
            modeoftransportation: '140',
            dealerauditor: '个14',
            dealerreviewtime: '正14常',
            mainengineauditor: '停14购',
            mainengineaudittime: 'EQ147250',
            preparedby: 'N14',
            documentationdate: '一般易14损件',
            dismissreason: '饰14板'
        },
        {
            choose: 'true',
            brandName: '76911552FL0C',
            carSeries: '中立柱下饰15板',
            catType: '14232323815',
            carTypeConfig: '饰盖',
            replaceCarType1: '215',
            replaceCarTypeConfig1: '23152.40',
            modeoftransportation: '015',
            dealerauditor: '15个',
            dealerreviewtime: '正15常',
            mainengineauditor: '停15购',
            mainengineaudittime: 'EQ715250',
            preparedby: 'N15',
            documentationdate: '一般易15损件',
            dismissreason: '饰15板'
        }
    ]
})
// 品牌
const tradeMarkData = Mock.mock({
    'rows': [{
        'code': '1',
        text: 'brand00001'
    },
    {
        'code': '2',
        text: 'brand00002'
    },
    {
        'code': '3',
        text: 'brand00003'
    },
    {
        'code': '4',
        text: 'brand00004'
    },
    {
        'code': '5',
        text: 'brand00005'
    }]
})
// 大区
const regionData = Mock.mock({
    'rows': [{
        'code': '1',
        text: '华东一区'
    },
    {
        'code': '2',
        text: '华中一区'
    },
    {
        'code': '3',
        text: '华南一区'
    },
    {
        'code': '4',
        text: '华北一区'
    }]
})
// 省份
const provinceData = Mock.mock({
    'rows': [{
        'code': '1',
        text: '广东省'
    },
    {
        'code': '2',
        text: '广西省'
    },
    {
        'code': '3',
        text: '北京市'
    },
    {
        'code': '4',
        text: '上海市'
    }]
})
//备件订单制作修改保存
const saveSuccess = Mock.mock({
    sparepartsordermakeSave: {
        result: '1',
        rows: [
            {
                message: '保存成功'
            }
        ]
    }
})
//新建订单保存
const newOrderSaveSuccess = Mock.mock({
    paDbDlrUseOrderTypeMutationDelete: {
        result: '1',
        rows: [
            {
                message: '保存成功'
            }
        ]
    }
})
//备件订单制作_提交
const submitSuccess = Mock.mock({
    sparepartsordermakeSubmit: {
        result: '1',
        rows: [
            {
                message: '提交成功'
            }
        ]
    }
})
//采购订单审核
const orderReview = Mock.mock({
    sparepartsorderReview: {
        result: '1',
        rows: [
            {
                message: '审核成功'
            }
        ]
    }
})
//采购订单驳回
const orderReject = Mock.mock({
    sparepartsorderReject: {
        result: '1',
        rows: [
            {
                message: '已驳回'
            }
        ]
    }
})
//新建订单_从缺件生成订单
const paBuLackPartOrderQueryFindAll = Mock.mock({
    paBuLackPartOrderQueryFindAll: [{
        isCanLack: '是',
        applyDirDeliverType: '网点所属分库备货',
        assignWorkCode: 'H2901190409004',
        partNo: '2240153J06-999',
        partName: '火花塞',
        mayOrderQty: '4',
        unit: '个',
        dlrPrice: '75.20',
        purQty: '4',
        purAmount: '300.80',
        vin: 'LGBC1AE022Y028162',
        carLicense: '浙DK1705',
        custName: '陈马川',
        custTel: '13366760116',
        engineNo: 'LGBC1AE022Y028162',
        column1: 'LGBC1AE022Y028162',
        register: '专营店管理员',
        factQty: '0',
        freeQty: '-4',
        wayQty: '0',
        oweQty: '0',
        businissTypeName: '定期保养',
        purchaseStateName: '关闭',
        stockStateName: '缺货',
        partStateName: '正常',
        isSpecTran: '否',
        assemblyName: '否',
        hopeReceiveDate: '2018-07-26',
        intendReceiveDate: '2018-07-27'
    },
    {
        isCanLack: '否',
        applyDirDeliverType: '允许跨分库直送',
        assignWorkCode: 'H2901190409005',
        partNo: '2240153J06-111',
        partName: '锁紧销',
        mayOrderQty: '10',
        unit: '个',
        dlrPrice: '52.40',
        purQty: '10',
        purAmount: '524',
        vin: 'LGBH52E03EY239715',
        carLicense: '粤A9GF36',
        custName: '邓焯祯',
        custTel: '13710377780',
        engineNo: 'LGBC1AE022Y028162',
        column1: 'LGBC1AE022Y028162',
        register: '专营店管理员',
        factQty: '0',
        freeQty: '-4',
        wayQty: '0',
        oweQty: '0',
        businissTypeName: '正常维修',
        purchaseStateName: '开放',
        stockStateName: '缺货',
        partStateName: '正常',
        isSpecTran: '否',
        assemblyName: '否',
        hopeReceiveDate: '2018-07-27',
        intendReceiveDate: '2018-07-28'
    }
    ]
})
export default [
    // 订单类型
    {
        url: '/getOrderType/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: orderData
            }
        }
    },
    // 运输方式
    {
        url: '/getTransport/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: transportData
            }
        }
    },
    // 
    {
        url: '/orderSearch/list',
        type: 'post',
        response: config => {
            const items = paBuPurOrderQueryFindAll.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    },
    //备件订单制作主表网格
    {
        url: paApis.paBuPurOrderQueryFindAll.APIUrl + cH + 'v=' + paApis.paBuPurOrderQueryFindAll.ServiceCode,
        type: 'post',
        response: config => {
            const items = paBuPurOrderQueryFindAll
            return {
                code: 20000,
                data: {
                    total: items.rows.length,
                    paBuPurOrderQueryFindAll: items
                }
            }
        }
    },
    //新建订单 主机厂库存查询
    {
        url: paApis.paOrderBuOemStorageQueryFindAll.APIUrl + cH + 'v=' + paApis.paOrderBuOemStorageQueryFindAll.ServiceCode,
        type: 'post',
        response: config => {
            const items = paBuOemStorageQueryFindAll
            return {
                code: 20000,
                data: {
                    total: items.paBuOemStorageQueryFindAll.length,
                    items: items
                }
            }
        }
    },
    //新建订单_销售历史查询
    {
        url: paApis.paBuDlrOutStoreQuerySaleHis.APIUrl + cH + 'v=' + paApis.paBuDlrOutStoreQuerySaleHis.ServiceCode,
        type: 'post',
        response: config => {
            const items = paBuDlrOutStoreQuerySaleHis
            return {
                code: 20000,
                data: {
                    total: items.paBuDlrOutStoreQuerySaleHis.length,
                    items: items
                }
            }
        }
    },
    //新建订单_关联订单查询
    {
        url: paApis.paBuPurOrderQueryRelate.APIUrl + cH + 'v=' + paApis.paBuPurOrderQueryRelate.ServiceCode,
        type: 'post',
        response: config => {
            const items = paBuPurOrderQueryRelate
            return {
                code: 20000,
                data: {
                    total: items.paBuPurOrderQueryRelate.length,
                    items: items
                }
            }
        }
    },
    //新建订单_替换件库存查询
    {
        url: paApis.paBuReplacementStock.APIUrl + cH + 'v=' + paApis.paBuReplacementStock.ServiceCode,
        type: 'post',
        response: config => {
            const items = paBuReplacementStock
            return {
                code: 20000,
                data: {
                    total: items.paBuReplacementStock.length,
                    items: items
                }
            }
        }
    },
    //新建订单_数据验证结果查询
    {
        url: paApis.paBudataVerification.APIUrl + cH + 'v=' + paApis.paBudataVerification.ServiceCode,
        type: 'post',
        response: config => {
            const items = paBudataVerification
            return {
                code: 20000,
                data: {
                    total: items.paBudataVerification.length,
                    items: items
                }
            }
        }
    },
    //备件订单制作订单明细查询
    {
        url: paApis.paBuPurOrderDQueryFindAll.APIUrl + cH + 'v=' + paApis.paBuPurOrderDQueryFindAll.ServiceCode,
        type: 'post',
        response: config => {
            const items = paBuPurOrderDQueryFindAll
            return {
                code: 20000,
                data: {
                    total: items.paBuPurOrderDQueryFindAll.length,
                    items: items
                }
            }
        }
    },
    // 订单号弹出框主表网格
    {
        url: '/getOrderNo/list',
        type: 'post',
        response: config => {
            const items = popoverdata.items
            return {
                code: 20000,
                data: {
                    total: items.length,
                    items: items
                }
            }
        }
    },
    // 品牌
    {
        url: '/getTradeMark/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: tradeMarkData
            }
        }
    },
    // 大区
    {
        url: '/getRegion/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: regionData
            }
        }
    },
    // 省份
    {
        url: '/getProvince/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: provinceData
            }
        }
    },
    //备件订单制作修改保存
    {
        url: '/ly/mp/spareParts/orderMake/editSave.do/' + 'v=' + 'sparepartsordermakeSave',
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: saveSuccess
            }
        }
    },
    //新建订单保存
    {
        url: '/ly/mp/busicen/orc/graphqlsave.do/' + 'v=' + 'paDbDlrUseOrderTypeMutationDelete',
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: newOrderSaveSuccess
            }
        }
    },
    //备件订单制作_提交
    {
        url: '/ly/mp/spareParts/orderMake/submit.do/' + 'v=' + 'sparepartsordermakeSubmit',
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: submitSuccess
            }
        }
    },
    //审核
    {
        url: '/ly/mp/spareParts/sparePartsOrder/review.do/' + 'v=' + 'sparepartsorderReview',
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: orderReview
            }
        }
    },
    //驳回
    {
        url: '/ly/mp/spareParts/sparePartsOrder/reject.do/' + 'v=' + 'sparepartsorderReject',
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: orderReject
            }
        }
    },
    //新建订单_从缺件生成订单
    {
        url:
            paApis.paBuLackPartOrderQueryFindAll.APIUrl +
            cH +
            'v=' +
            paApis.paBuLackPartOrderQueryFindAll.ServiceCode,
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: paBuLackPartOrderQueryFindAll
            }
        }
    }
]
