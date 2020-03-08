/**
 * 
 * 财务收款得模拟数据
 */
import Mock from 'mockjs'
import { apiSeBalance, seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const queryData = Mock.mock({
    seBuRepairBalanceQueryFind: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 3,
        msg: 'success',
        rows: [{
            repairOrderId: "施工单id-mock",
            repairOrderCode: "施工单号-mock",
            carLicense: "粤A123",
            vin: "adshdafd",
            repairMan: "小明",
            repairTel: "123123123",
            repairTime: "2019-01-01",
            preGetDate: "2019-02-01",
            isGather: "31101",
            isGatherName: "未结算",
            repairOrderStatus: "0",
            repairStatusName: "已完成",
            isAccident: "0",
            saName: "大明",
            updateControlId: "1",
            repairGatheringId: "结算单id-mock",
            balanceOrderCode: "结算单号-mock",
            wiAmount: "1000",
            partAmount: "2000",
            otherAmount: "3000",
            totalAmount: "6000",
            isCancel: "1",
            dlrCustNo: "123123",
            gatheringEmpName: "小强",
            carBrandCode: "5",
            policyCompanyId: "1",
            custName: "大强",
            custTel: "123123123213",
            mileage: "40000",
            carId: "5123",
            maxBusinessType: "6"

        },
        {
            repairOrderId: "施工单id-mock2",
            repairOrderCode: "施工单号-mock2",
            carLicense: "粤B123",
            vin: "adshdafd",
            repairMan: "诸葛村夫",
            repairTel: "123123123",
            repairTime: "2019-01-01",
            preGetDate: "2019-02-01",
            isGather: "31102",
            isGatherName: "已结算",
            repairOrderStatus: "0",
            repairStatusName: "已完成",
            isAccident: "0",
            saName: "王司徒",
            updateControlId: "1",
            repairGatheringId: "结算单id-mock",
            balanceOrderCode: "结算单号-mock",
            wiAmount: "1000",
            partAmount: "2000",
            otherAmount: "3000",
            totalAmount: "6000",
            isCancel: "1",
            dlrCustNo: "123123",
            gatheringEmpName: "阿香",
            carBrandCode: "5",
            policyCompanyId: "1",
            custName: "阿强",
            custTel: "123123123213",
            mileage: "40000",
            carId: "5123",
            maxBusinessType: "6"

        }]
    }

})

const initData = Mock.mock({

    seBuRepairBalanceInit: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 17,
        msg: 'success',
        rows: {
            repairOrderId: "df3r2rfasfsdqrfwscdadsfa",
            repairOrderCode: "H2901190709004",
            billType: "",
            guaranteeApplyCode: "",
            retRepairCode: "",
            dlrCode: "H2091",
            carColorName: "白色",
            repairTel: "18677777777",
            deliveryDate: "2019-07-09",
            isAccident: "1",
            custTel: "18677777777",
            isCancelBalance: "0",
            otherAmount: 0,
            engineNo: "kj322",
            factAmount: 200,
            preGetDate: "2019-07-09",
            guaranteeType: "1",
            carLicense: "皖R23675",
            repairTime: "2019-07-09",
            isMessage: "",
            isFirst: "1",
            repairDesc: "",
            dutyEmpId: "",
            discountAmount: "",
            disposeInfo: "",
            repairOrderDesc: "",
            isCombo: "",
            repairOrderAmount: "",
            carTypeCode: "DFL7168(B172)",
            remark: "",
            isUsedCar: "",
            dlrCustNo: "",
            saEmpId: "",
            saName: "吴敏慧",
            remindState: "",
            isRemaintain: "",
            fastRepairType: "",
            carBrandCode: "1",
            carBrandName: "东风日产-日产",
            vin: "LGBH52E08HY302795",
            custCarRelationCode: "",
            mileage: 26483,
            trunRepairDate: "2019-07-09",
            policyCompanyCode: "",
            oil: "39",
            csDesc: "",
            custName: "谢晓庆",
            partDueFee: "",
            recommendItem: "",
            sumOtherDueAmount: "",
            partAmount: "",
            reserveOrderCode: "",
            carKeyNo: "",
            carSeriesCode: "新轩逸",
            wiDueAmount: "",
            isWait: "0",
            balanceTimes: "",
            mainWorkitem: "",
            dealRelustDesc: "",
            carId: "",
            wiAmount: "",
            runupAmount: "",
            repairMan: "",
            carSaleOrder: "",
            isClean: "",
            isComeQty: "",
            repairOrderStatus: "",
            isEnable: "",
            updateControlId: "",
            dlrId: "",
            isGather: "",
            isGatherName: "",
            policyCompanyId: "",
            maxBusinessType: "",
            mainPartitem: "",
            maxRepairTypeCode: "",
            buyDate: "2019-07-01",
            repairFinishDate: "",
            qualityFinishDate: "",
            cardNo: "",
            cardDegreeName: "",
            // 估价单工时集合
            repairOrderWIList: [
                {
                    repairWiId: "asdf2321321ad",
                    repairOrderId: "sdfadasf2131213dsc",
                    repairTypeCode: "",
                    repairTypeName: "",
                    isCanEdit: "",
                    isAdd: "",
                    recallCaseType: "",
                    payKind: "31301",
                    payKindName: "普通",
                    wiCode: "AA30A2",
                    wiName: "发动机中缸总成 - 更换",
                    saleWorkQty: 10.0,
                    wiPrice: 160,
                    wiDiscountRate: 100,
                    wiAmount: 1600,
                    wiPreAmount: 1600,
                    guaranteeAddPriceCoef: "",
                    dutyEmpId: "",
                    dutyMan: "",
                    repairEmpId: "",
                    checkEmpId: "",
                    acceCode: "",
                    assignWorkDate: "",
                    vin: "",
                    recallCaseCode: "",
                    qcDoubleDate: "",
                    acceQty: "",
                    repairOrderCode: "",
                    isBackRepair: "",
                    note: "",
                    comboSaleCode: "",
                    retRepairType: "",
                    actionCode: "",
                    rrpairStatus: "",
                    rrpairStatusName: "",
                    adaptCarTypeCode: "",
                    isCustPay: "",
                    repairGroup: "",
                    groupName: "",
                    parentWiCode: "",
                    isBackWi: "",
                    businessType: "",
                    businessTypeName: "",
                    wiTypeCode: "",
                    wiWorkQty: "",
                    lastUpdatedDate: "",
                    isEnable: "",
                    isEnableName: "",
                    updateControlId: "",
                    empNamerepairName: "",
                    wiId: "",
                }
            ],
            // 估价单备件集合
            repairOrderPartList: [
                {
                    repairOrderPartList: "safa234312",
                    repairPartId: "sfddasfde123131",
                    repairOrderId: "123dsf21321ed",
                    repairOrderCode: "H2901190709004",
                    repairTypeCode: "",
                    repairTypeName: "",
                    isCanEdit: "",
                    isAdd: "",
                    recallCaseType: "",
                    partDiscount: 100,
                    payKind: "31302",
                    payKindName: "免保",
                    guaranteeAddPriceCoef: "",
                    partName: "前翼子板饰件，右",
                    partNo: "668944GA0B-A206",
                    partQty: 1,
                    blanceQty: 1,
                    outQty: 1,
                    dlrPrice: "",
                    partPrice: 78.48,
                    prePartAmount: 78.48,
                    costAmount: 78.48,
                    priceAmount: 78.48,
                    acceCode: "",
                    isBackPart: "",
                    partBackRepiarQty: "",
                    vin: "",
                    recallCaseCode: "",
                    acceQty: "",
                    isShare: "",
                    isBackRepair: "",
                    note: "",
                    comboSaleCode: "",
                    retRepairType: "",
                    actionCode: "",
                    returnQty: "",
                    relatePartCode: "",
                    isCustPay: "",
                    parentWiCode: "",
                    businessType: "",
                    businessTypeName: "",
                    wiTypeCode: "",
                    pickingPersonCode: "",
                    lastUpdatedDate: "",
                    isEnable: "",
                    isEnableName: "",
                    updateControlId: "",
                    EmpNamepickingPersonName: "",
                    unit: "",
                    partTypeName: "",
                    returnBackRepiarQty: "",
                    dlrLeastSaleQty: "",

                }
            ],
            // 估价单其他费用集合
            repairOrderOtherFeeList: [],
            //应收费用集合
            dueAmountByPayKind: null,
            // 备件分摊费用
            shareAmountByPayKind: [
                {
                    custAmount: 10,
                    otherAmount: 68.84,
                    payKind: "31302"
                }
            ],
            // 结算单主表集合
            repairBalanceOrder:
            {
                dlrId: "",
                modifier: "",
                lastUpdatedDate: "",
                creator: "",
                createdDate: "",
                isEnable: "",
                dueAmount: "",
                payMode: "",
                vin: "",
                repairBalanceCode: "",
                repairOrderCode: "",
                repairSummaryId: "",
                gatheringState: "31101"

            }
            ,
            // 结算单明细集合
            balanceOrderDetail: [{
                repairGatheringDId: "213jlk3hh4k32jhjed",
                repairGatheringId: "34klj764hkjjlk132k",
                balanceOrderCode: "",
                payMode: "31301",
                payCompany: "",
                insureType: "",
                payType: "1",
                dueAmount: 1600,
                factAmount: "",
                discountReason: "",
                runupBalanceDate: "",
                runupEmpId: "",
                runupEmpName: "",
                remark: "",
                balanceType: "",
                balanceState: "",
                gatheringEmpId: "",
                gatheringEmpName: "",
                gatheringDate: "",
                checkEmpId: "",
                checkEmpName: "",
                checkDate: "",
                checkState: "",
                invoiceNo: "",
                invoiceDate: "",
                invoiceAmount: "",
                billType: "",
                isEnable: "",
                isEnableName: "",
                updateControlId: ""

            },
            {
                repairGatheringDId: "213jlk3hh4k32jhjed",
                repairGatheringId: "34klj764hkjjlk132k",
                balanceOrderCode: "",
                payMode: "31302",
                payCompany: "",
                insureType: "",
                payType: "3",
                dueAmount: 78.48,
                factAmount: "",
                discountReason: "",
                runupBalanceDate: "",
                runupEmpId: "",
                runupEmpName: "",
                remark: "",
                balanceType: "",
                balanceState: "",
                gatheringEmpId: "",
                gatheringEmpName: "",
                gatheringDate: "",
                checkEmpId: "",
                checkEmpName: "",
                checkDate: "",
                checkState: "",
                invoiceNo: "",
                invoiceDate: "",
                invoiceAmount: "",
                billType: "",
                isEnable: "",
                isEnableName: "",
                updateControlId: ""

            }],
            // 应收费用合计
            repairBlaceApplySum: [{
                dlrId: "",
                modifier: "",
                lastUpdatedDate: "",
                creator: "",
                createdDate: "",
                isEnable: "",
                dueAmount: 1600,
                payMode: "31301",
                vin: "",
                repairBalanceCode: "",
                repairOrderCode: "",
                repairSummaryId: ""

            }, {
                dlrId: "",
                modifier: "",
                lastUpdatedDate: "",
                creator: "",
                createdDate: "",
                isEnable: "",
                dueAmount: 78.48,
                payMode: "31302",
                vin: "",
                repairBalanceCode: "",
                repairOrderCode: "",
                repairSummaryId: ""

            }],
            //查询索赔单信息
            claimInfo: null,
            // 查询协议单位信息
            policyCompany: null,
            // 会员积分消费明细
            pointDetaile: null,
            // 折让项目集合
            balanceDiscountItems: [{
                repairDiscountId: "fsakj2lk34j32l4j",
                repairGatheringId: "sdfsjfljl23423",
                balanceOrderCode: "H23889433",
                discountItemCode: "0",
                discountItemName: "折扣券",
                discountAmount: 13,
                wiDiscount: 10,
                partDiscount: 3,
                remarkv: "",
                isEnable: "",
                updateControlId: "乏32432fsdc"
            }

            ],
            // 默认付款单位集合
            sysInfo: null,
            // 加载界面顶端主要信息
            loadingthemaininformation: null,
            // 查询定保提醒时间
            remindDate: null
        }


    }


})

const saveBalance = Mock.mock({
    seBuRepairBalanceSave: {
        result: '1',
        msg: 'success'

    }
})

const valueList = Mock.mock({
    mdsLookupValueQueryByPage: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 3,
        msg: 'success',
        rows: [
            {
                lookupTypeCode: "SE0022",
                lookupTypeName: "付费性质",
                lookupValueCode: "31301",
                lookupValueName: "普通"

            }, {
                lookupTypeCode: "SE0022",
                lookupTypeName: "付费性质",
                lookupValueCode: "31302",
                lookupValueName: "免保"

            }, {
                lookupTypeCode: "SE0022",
                lookupTypeName: "付费性质",
                lookupValueCode: "31303",
                lookupValueName: "保修"

            }, {
                lookupTypeCode: "SE0022",
                lookupTypeName: "付费性质",
                lookupValueCode: "31304",
                lookupValueName: "保险"

            }, {
                lookupTypeCode: "SE0022",
                lookupTypeName: "付费性质",
                lookupValueCode: "31305",
                lookupValueName: "内部"

            }, {
                lookupTypeCode: "SE0022",
                lookupTypeName: "付费性质",
                lookupValueCode: "31306",
                lookupValueName: "协议"

            }, {
                lookupTypeCode: "SE0022",
                lookupTypeName: "付费性质",
                lookupValueCode: "31307",
                lookupValueName: "PDI"

            }, {
                lookupTypeCode: "FI0001",
                lookupTypeName: "付款方式",
                lookupValueCode: "0",
                lookupValueName: "现金"

            }, {
                lookupTypeCode: "FI0001",
                lookupTypeName: "付款方式",
                lookupValueCode: "1",
                lookupValueName: "银行"

            }, {
                lookupTypeCode: "FI0001",
                lookupTypeName: "付款方式",
                lookupValueCode: "2",
                lookupValueName: "内部"

            }, {
                lookupTypeCode: "FI0001",
                lookupTypeName: "付款方式",
                lookupValueCode: "3",
                lookupValueName: "挂账"

            }, {
                lookupTypeCode: "FI0001",
                lookupTypeName: "付款方式",
                lookupValueCode: "4",
                lookupValueName: "预收款"

            }, {
                lookupTypeCode: "FI0001",
                lookupTypeName: "付款方式",
                lookupValueCode: "5",
                lookupValueName: "微信"

            }, {
                lookupTypeCode: "FI0001",
                lookupTypeName: "付款方式",
                lookupValueCode: "5",
                lookupValueName: "支付宝"

            }
        ]

    }
})

const printData = Mock.mock({
    seBuRepairBalancePrint: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 17,
        msg: 'success',
        rows: {
          repairOrderCode: "H2901190709004",
          isFirst: "1",
          saName: "苏亚峰",
          custName: "张三",
          addr: "广东省广州市花都区风神大道",
          custTelphone: "13777777777",
          carSeriesCode: "12312",
          carTypeCode: "DFL7168(B172)",
          vin: "LGBH52E08HY302795",
          carLicense: "粤A9089",
          engineNo: "878hk33",
          deliveryDate: "2015-07-01",
          carColorName: "钛古金",
          submitBalanceDate: "2015-07-01",
          mileage: 32343,
          invoiceDate: "2015-07-01",
          repairTime: "2019-08-10",
          preGetDate: "2019-08-11",
          trunRepairDate: "2019-08-12",
          repairFinishDate: "2019-08-13",
          csDesc: "好厉害",
          disposeInfo: "真棒",
          recommendItem: "真棒",
          wiAmount: 1610,
          partAmount: 68.48,
          otherAmount: 0,
          amountTotal: 1678.48,
          wiDueAmount: 1610,
          partDueFee: 68.48,
          sumOtherDueAmount: 0,
          dueAmountTotal: 1678.48,
          receiptsAmount:1678.48,
          pactRunupAmount: 0,
          discountAmount: 0,
          amountTotal: 1678.48,
          repairMan: "小明",
          repairTel: "213223423",
          storesinformation: 
            [{
              dlrFullName: "商丘市银丰汽车销售有限公司",
              dlrCode: "56756",
              dlrId: "7567",
              dlrShortName: "34345",
              linkAddr: "民主西路",
              serviceTel: "18666666666"
            },
            {
              dlrFullName: "商丘市银丰汽车销售有限公司",
              dlrCode: "2342",
              dlrId: "4234",
              dlrShortName: "4234",
              linkAddr: "民主西路",
              serviceTel: "18666666666"
            },
            {
              dlrFullName: "商丘市银丰汽车销售有限公司",
              dlrCode: "42342",
              dlrId: "23423",
              dlrShortName: "234234",
              linkAddr: "民主西路",
              serviceTel: "18666666666"
            }],
          otherexpenses: [
            {
              preOtherAmount:"12",		
              otherAmount:"13",		
              costTypeName:"13",		
              businessTypeName:"大保健",		
              remark:"很棒"		
            },
            {
              preOtherAmount:"12",		
              otherAmount:"13",		
              costTypeName:"13",		
              businessTypeName:"大保健",		
              remark:"很棒"		
            },
            {
              preOtherAmount:"12",		
              otherAmount:"13",		
              costTypeName:"13",		
              businessTypeName:"大保健",		
              remark:"很棒"		
            },
            
          ],
          maintenancerepairparts: [
            {
              partNo: "668944GA0B-A206",
              partName: "前翼子板饰件，右",
              partQty: 1,
              partPrice: 78.48,
              partAmount: 78.48,
              prePartAmount: 78.48,
              businessTypeName: "保修",
              note: "好强啊"
            },
            {
              partNo: "668944GA0B-A206",
              partName: "前翼子板饰件，右",
              partQty: 1,
              partPrice: 78.48,
              partAmount: 78.48,
              prePartAmount: 78.48,
              businessTypeName: "保修",
              note: "好强啊"
    
            },
            {
              partNo: "668944GA0B-A206",
              partName: "前翼子板饰件，右",
              partQty: 1,
              partPrice: 78.48,
              partAmount: 78.48,
              prePartAmount: 78.48,
              businessTypeName: "保修",
              note: "好强啊"
    
            }
          ],
          maintenancework: [
            {
              wiCode: "AA30A2",
              wiName: "发动机中缸总成 - 更换",
              saleWorkQty: "13",
              wiPrice: 160,
              wiAmount: 1600,
              wiPreAmount: 1600,
              businessTypeName: "普通",
              note: "厉害了"
    
            },
            {
              wiCode: "AA30A2",
              wiName: "发动机中缸总成 - 更换",
              saleWorkQty: "13",
              wiPrice: 160,
              wiAmount: 1600,
              wiPreAmount: 1600,
              businessTypeName: "普通",
              note: "厉害了"
    
            },
            {
              wiCode: "AA30A2",
              wiName: "发动机中缸总成 - 更换",
              saleWorkQty: "13",
              wiPrice: 160,
              wiAmount: 1600,
              wiPreAmount: 1600,
              businessTypeName: "普通",
              note: "真厉害"
    
            }
          ]
    
        }
      }
})



export default [
    {// 财务结算收款-查询
        url: apiSeBalance.seBuRepairBalanceQueryFind.APIUrl + cH + 'v=' + apiSeBalance.seBuRepairBalanceQueryFind.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: queryData
            }
        }
    }
    , {
        // 财务结算收款-财务收款详情加载
        url: apiSeBalance.seBuRepairBalanceInit.APIUrl + cH + 'v=' + apiSeBalance.seBuRepairBalanceInit.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: initData
            }
        }
    }, {
        // 财务结算收款-保存
        url: apiSeBalance.seBuRepairBalanceSave.APIUrl + cH + 'v=' + apiSeBalance.seBuRepairBalanceSave.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: saveBalance
            }
        }
    }, {
        // 值列表
        url: seApis.mdsLookupValueQueryByPage.APIUrl + cH + 'v=' + seApis.mdsLookupValueQueryByPage.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: valueList
            }
        }
    }, {
        // 打印结算单
        url: apiSeBalance.seBuRepairBalancePrint.APIUrl + cH + 'v=' + apiSeBalance.seBuRepairBalancePrint.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: printData
            }
        }
    }
]
