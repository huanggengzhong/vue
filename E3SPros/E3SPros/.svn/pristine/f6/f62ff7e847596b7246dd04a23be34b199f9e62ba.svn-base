
//备件其他属性维护
//属性
import Mock from 'mockjs';
import { paApis } from '../../../src/api/graphQLApiList/pa'
const cH = '/'

const paDbVarietyMutation_attributeData = Mock.mock({
    "result": "1",
    "rows": [
        { attrValue: "SNP" },
        { attrValue: "最小采购包装" },
        { attrValue: "运输限制" },
        { attrValue: "采购开关" },
        { attrValue: "到货周期" },
        { attrValue: "运货周期" },

    ],
    "msg": "success"
})

//选择备件
const paChoosePartQuery = Mock.mock({
    paChoosePartQuery: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows|50": [{
            partId: "1234567890",
            partBrandCodeName: "N",
            partNo: "MD1234567890",
            partName: "螺钉",
            partStateName: "启用",
            dlrOrderSwitch: "关闭",
            logisticsFlag: "",
            isPvRequired: "",
            emphasisFlag: "",
            chemicalFlag: "",
            partVarietyCode: "",
            leastPackOut: "",
            leastPackIn: "",
            dlrLeastSaleQty: "",
            transitLimit: ""

        }]
    }
})

//手动维护删除备件
const paDbPartListMutationDeletePartNo = Mock.mock({
    paDbPartListMutationDeletePartNo: {
        "result": "1",
        "data": {
            "rows": [{
                "result": "1",
                "msg": "删除成功"
            },
            ]
        },
        "msg": "success"
    }

})

//手动维护保存修改
const paDbPartListMutationSavePartAttributel = Mock.mock({
    paDbPartListMutationSavePartAttributel: {
        "result": "1",
        "data": {
            "rows": [{
                "result": "1",
                "msg": "保存成功"
            },
            ]
        },
        "msg": "success"
    }
})

//备件价格维护
//备件价格维护查询
const paDbPriceQueryListForPage = Mock.mock({
    paDbPriceQueryListForPage: {
        "result": "1",
        "rows|55": [{
            "partBrandName": "N",
            "partNo": "0009141030-*S00",
            "partName": "螺钉11",
            "dlrPrice": "1930.40",
            "userPrice": "2570.00",
            "beforeDlrPrice": "50",
            "beforeUserPrice": "50",
            "pubSeriesName": "逍客",
            "partStatus": "停购",
            "auditStatusCn": "已启用",
            "beginDate": "2017-7-1",
            "partTypeName": "非易损件",
            "partSourceName": "国产件",
            "supplierShortName": "RD404",
            "accountQty": "0",
            "dealOpinion": "",
            "partId": "ab111111",
            "auditStatus": "",
            "updateControlId": ""
        },
        ],
        "msg": "success"
    }

})
//备件价格维护导入备件号
const paDbPartListMutationExportPartNo = Mock.mock({
    paDbPartListMutationExportPartNo: {
        "result": "1",
        "rows": [{
            "partId": "N",
            "partBrandCodeName": "0009141030-*S00",
            "partNo": "螺钉11",
            "partName": "1930.40",
            "partStateName": "2570.00",
            "dlrOrderSwitch": "50",
            "logisticsFlag": "50",
            "isPvRequired": "逍客",
            "emphasisFlag": "停购",
            "chemicalFlag": "已启用",
            "partVarietyCode": "2017-7-1",
            "leastPackIn": "非易损件",
            "leastPackOut": "国产件",
            "dlrLeastSaleQty": "RD404",
            "transitLimit": "0",
        },
        ],
        "msg": "success"
    }
})
//备件价格维护批量导入
const paDbPartListMutationBatchImportPartAttributel = Mock.mock({
    paDbPartListMutationBatchImportPartAttributel: {
        "result": "1",
        "rows|4": [{
            "partId": "N",
            "partBrandCodeName": "0009141030-*S00",
            "partNo": "螺钉11",
            "partName": "1930.40",
            "logisticsFlag": "2570.00",
            "isPvRequired": "50",
            "emphasisFlag": "50",
            "chemicalFlag": "逍客",
            "partVarietyCode": "停购",
            "leastPackOut": "已启用",
            "leastPackIn": "2017-7-1",
            "dlrLeastSaleQty": "非易损件",
            "transitLimit": "0",
        },
        ],
        "msg": "success"
    }

})
//备件价格维护批量导入--删除
const paDbPartListMutationImportDeletePartNo = Mock.mock({
    paDbPartListMutationImportDeletePartNo: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "删除成功"
        },
        ],
        "msg": "success"
    }
})
//备件价格维护批量导入--提交
const paDbPartListMutationImportSubmitPartNo = Mock.mock({
    paDbPartListMutationImportSubmitPartNo: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "保存成功"
        },
        ],
        "msg": "success"
    }
})
//备件价格维护保存
const paDbPriceTraceMutationStartSave = Mock.mock({
    paDbPriceTraceMutationStartSave: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "保存成功"
        },
        ],
        "msg": "success"
    }

})
//备件价格维护-导入
const paDbPriceMutationImport = Mock.mock({
    paDbPriceMutationImport: {
        "result": "1",
        "rows|4": [{
            "partId": "N",
            "partBrandCodeName": "0009141030-*S00",
            "partNo": "螺钉11",
            "partName": "1930.40",
            "logisticsFlag": "2570.00",
            "isPvRequired": "50",
            "emphasisFlag": "50",
            "chemicalFlag": "逍客",
            "partVarietyCode": "停购",
            "leastPackOut": "已启用",
            "leastPackIn": "2017-7-1",
            "dlrLeastSaleQty": "非易损件",
            "transitLimit": "0",
        },
        ],
        "msg": "success"
    }

})

//备件价格启用查询
const paDbPriceTraceQueryListForPage = Mock.mock({
    paDbPriceTraceQueryListForPage: {
        "result": "1",
        "rows|55": [{
            "partBrandName": "N",
            "partNo": "0009141030-*S00",
            "partName": "螺钉11",
            "dlrPrice": "1930.40",
            "userPrice": "2570.00",
            "beforeDlrPrice": "50",
            "beforeUserPrice": "50",
            "pubSeriesName": "逍客",
            "partStatus": "停购",
            "auditStatusCn": "已启用",
            "beginDate": "2017-7-1",
            "partTypeName": "非易损件",
            "partSourceName": "国产件",
            "supplierShortName": "RD404",
            "accountQty": "0",
            "dealOpinion": "",
            "partId": "ab111111",
            "auditStatus": "",
            "updateControlId": ""
        },
        ],
        "msg": "success"
    }

})

//备件价格启用-启用
const paDbPriceTraceMutationStartSave = Mock.mock({
    paDbPriceTraceMutationStartSave: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "启用成功"
        },
        ],
        "msg": "success"
    }

})





//公共弹窗-供应商
const chooseSupplier = Mock.mock({
    "result": "1",
    "rows|55": [{
        DLR_SHORT_NAME: "",
        SUPPLIER_CODE: "*010",
        SUPPLIER_SHORT_NAME: "武汉标准件",
        SUPPLIER_ADDR: "中国武汉",
        ZIP: "",
        SUPPLIER_FAX: "",
        SUPPLIER_TEL: "",
        LINK_MAN: "",
        LINK_MAN_TEL: "",
        EMAIL: "",
        REMARK: "",
        OEM_CODE: "",
        OEM_ID: "",
        GROUP_ID: ""
    },
    ],
    "msg": "success"
})


//订货日历
//订货日历_查询
const paDbPurCalendarQueryFindAll = Mock.mock({
    paDbPurCalendarQueryFindAll: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows|5": [{
            purCalendarId: "1234567890",
            carBrandCn: "东风日产-日产",
            dlrCode: "D2305",
            dlrShortName: "杭州万风",
            smallAreaName: "嘉杭区",
            yearMonth: "2018-4",
            date1: true,
            date2: "",
            date3: "",
            date4: "",
            date5: "",
            date6: "",
            date7: "",
            date8: "",
            date9: false,
            date10: "",
            date11: "",
            date12: "",
            date13: "",
            date14: "",
            date15: true,
            date16: "",
            date17: "",
            date18: "",
            date19: "",
            date20: false,
            date21: "",
            date22: "",
            date23: "",
            date24: true,
            date25: "",
            date26: "",
            date27: "",
            date28: "",
            date29: false,
            date30: "",
            date31: true,
        },
        {
            purCalendarId: "1234567890",
            carBrandCn: "东风日产-启辰",
            dlrCode: "V2903",
            dlrShortName: "启辰广州万江",
            smallAreaName: "粤中区",
            yearMonth: "2018-7",
            date1: true,
            date2: "",
            date3: "",
            date4: "",
            date5: "",
            date6: "",
            date7: "",
            date8: "",
            date9: false,
            date10: "",
            date11: "",
            date12: "",
            date13: "",
            date14: "",
            date15: true,
            date16: "",
            date17: "",
            date18: "",
            date19: "",
            date20: false,
            date21: "",
            date22: "",
            date23: "",
            date24: true,
            date25: "",
            date26: "",
            date27: "",
            date28: "",
            date29: false,
            date30: "",
            date31: true,
        },
        ]
    }
})
//订货日历_保存
const paDbPurCalendarMutationSave = Mock.mock({
    paDbPurCalendarMutationSave: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "启用成功"
        },
        ],
        "msg": "success"
    }

})

//订货日历分组_查询
const paDbPurCalendModuleQueryFindAll = Mock.mock({
    paDbPurCalendModuleQueryFindAll: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows": [
            {
                moduleId: "1234567890",
                moduleName: "",
                yearMonth: "2019-08",
                lastUpdatedDate: "",
                updateControlId: "",
                isEnable: "2",
                isEnableCn: "启用",
                calendDlrId: "1111",
                date: [{
                    date1: false,
                    date2: "",
                    date3: "",
                    date4: "",
                    date5: "",
                    date6: "",
                    date7: "",
                    date8: "",
                    date9: false,
                    date10: "",
                    date11: "",
                    date12: "",
                    date13: "",
                    date14: "",
                    date15: true,
                    date16: "",
                    date17: "",
                    date18: "",
                    date19: "",
                    date20: false,
                    date21: "",
                    date22: "",
                    date23: "",
                    date24: true,
                    date25: "",
                    date26: "",
                    date27: "",
                    date28: "",
                    date29: false,
                    date30: "",
                }]
            },
            {
                moduleId: "1234567890",
                moduleName: "",
                yearMonth: "2017-06",
                lastUpdatedDate: "",
                updateControlId: "",
                isEnable: "3",
                isEnableCn: "停用",
                calendDlrId: "2222",
                rightList: [{
                    id: "2",
                    calendDlrId: "1111",
                    dlrId: "",
                    carBrandCn: "",
                    dlrCode: "D0210",
                    dlrShortName: "上海绅协绅通",
                }, {
                    id: "3",
                    calendDlrId: "1222",
                    dlrId: "",
                    carBrandCn: "",
                    dlrCode: "D0310",
                    dlrShortName: "广州启辰",
                }],
                date: [{
                    date1: true,
                    date2: "",
                    date3: "",
                    date4: "",
                    date5: "",
                    date6: "",
                    date8: "",
                    date9: false,
                    date10: "",
                    date11: "",
                    date12: "",
                    date14: "",
                    date15: true,
                    date16: "",
                    date19: "",
                    date20: false,
                    date21: "",
                    date22: "",
                    date24: true,
                    date25: "",
                    date27: "",
                    date28: "",
                    date29: false,
                    date30: "",
                }]
            },
        ]
    }
})
//订货日历分组_使用店清单
const paDbCalendDlrQueryFindAll = Mock.mock({
    paDbCalendDlrQueryFindAll: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows": [
            {
                calendDlrId: "1111",
                dlrId: "",
                carBrandCn: "",
                dlrCode: "D0210",
                dlrShortName: "上海绅协绅通",
                moduleId: '',
                updateControlId: ''
            },
        ]
    }
})
//订货日历分组_保存
const paDbPurCalendModuleMutationSave = Mock.mock({
    paDbPurCalendModuleMutationSave: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "启用成功"
        },
        ],
        "msg": "success"
    }

})
//备件状态开关日志查询_查询
const paDbPartLogQueryList = Mock.mock({
    paDbPartLogQueryList: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows": [
            {
                partBrandCode: "N",
                operTypeName: "最小出库包装",
                partNo: "00912252A-999",
                operator: "彭欣洁",
                oprerTime: "2019-08-06 14:04:24",
                oldName: "2",
                newName: "是",
                operateReason: "测试来的",
            },
            {
                partBrandCode: "V",
                operTypeName: "最小销售包装",
                partNo: "0091444B-998",
                operator: "超级管理员",
                oprerTime: "2019-07-06 14:04:24",
                oldName: "是",
                newName: "100",
                operateReason: "SNC系统同步",
            },
            {
                partBrandCode: "NVI",
                operTypeName: "物流商流标记",
                partNo: "0093333A-989",
                operator: "超级管理员",
                oprerTime: "2018-08-06 14:04:24",
                oldName: "否",
                newName: "暂停",
                operateReason: "使用者",
            },
            {
                partBrandCode: "NV",
                operTypeName: "销售开关",
                partNo: "22222252A-949",
                operator: "PA_SYS",
                oprerTime: "2019-08-06 09:04:24",
                oldName: "暂停",
                newName: "开放",
                operateReason: "SNC系统同步",
            },

        ]
    }
})
//备件目录_查询
const paDbPartCartypeRfQueryList = Mock.mock({
    paDbPartCartypeRfQueryList: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows": [
            {
                partId: "N",
                partNo: "G31121DAAA-075",
                partName: "顶盖（普通型）",
                partPropertyName: "非常用零件",
                partVarietyName: "喷涂件",
                partTypeId: "2019-08-06 14:04:24",
                partTypeName: "非易损件",
                partBrandName: "N",
                dlrPriceNr: "3,365.60",
                userPriceNr: "3365.60",
                salePriceNr: "3365.60",
                dlrOrderSwitchName: "关闭",
                minStoreQty: "",
                maxStoreQty: "",
                safeQty: "2",
                factStorage: "缺货",
                unit: "个",
                ownerTypeName: "主机厂",
                purPackQty: "1",
                dlrLeastSaleQty: "1.00",
                pubCarTypeName: "奇骏+天籁",
                partMaintianTypeDesc: "其他",
                partFlowState: "停用",
                remark: "",
                partType: "0"
            },
            {
                partId: "N",
                partNo: "G31121DAAA-075",
                partName: "前门总成,左",
                partPropertyName: "非常用零件",
                partVarietyName: "喷涂件",
                partTypeId: "",
                partTypeName: "非易损件",
                partBrandName: "N",
                dlrPriceNr: "3,365.60",
                userPriceNr: "3365.60",
                salePriceNr: "3365.60",
                dlrOrderSwitchName: "关闭",
                minStoreQty: "",
                maxStoreQty: "",
                safeQty: "2",
                factStorage: "缺货",
                unit: "个",
                ownerTypeName: "主机厂",
                purPackQty: "1",
                dlrLeastSaleQty: "1.00",
                pubCarTypeName: "奇骏+天籁",
                partMaintianTypeDesc: "其他",
                partFlowState: "停用",
                remark: "",
                partType: "0"
            },
            {
                partId: "N",
                partNo: "G31121DAAA-075",
                partName: "前门锁总成，右",
                partPropertyName: "非常用零件",
                partVarietyName: "喷涂件",
                partTypeId: "",
                partTypeName: "非易损件",
                partBrandName: "N",
                dlrPriceNr: "3,365.60",
                userPriceNr: "3365.60",
                salePriceNr: "3365.60",
                dlrOrderSwitchName: "关闭",
                minStoreQty: "",
                maxStoreQty: "",
                safeQty: "2",
                factStorage: "缺货",
                unit: "个",
                ownerTypeName: "主机厂",
                purPackQty: "1",
                dlrLeastSaleQty: "1.00",
                pubCarTypeName: "奇骏+天籁",
                partMaintianTypeDesc: "其他",
                partFlowState: "停用",
                remark: "",
                partType: "0"
            },
            {
                partId: "N",
                partNo: "G31121DAAA-075",
                partName: "钥匙(不打齿-钥匙坯)",
                partPropertyName: "非常用零件",
                partVarietyName: "喷涂件",
                partTypeId: "",
                partTypeName: "非易损件",
                partBrandName: "N",
                dlrPriceNr: "3,365.60",
                userPriceNr: "3365.60",
                salePriceNr: "3365.60",
                dlrOrderSwitchName: "关闭",
                minStoreQty: "",
                maxStoreQty: "",
                safeQty: "2",
                factStorage: "缺货",
                unit: "个",
                ownerTypeName: "主机厂",
                purPackQty: "1",
                dlrLeastSaleQty: "1.00",
                pubCarTypeName: "奇骏+天籁",
                partMaintianTypeDesc: "其他",
                partFlowState: "停用",
                remark: "",
                partType: "0"
            },

        ]
    }
})
//备件目录_查询价格调整历史_查询
const paDbDlrPartPriceHisQueryList = Mock.mock({
    paDbDlrPartPriceHisQueryList: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows": [
            {
                paOwnerType: "主机厂",
                partNo: "G31121DAAA-075",
                partName: "顶盖（普通型）",
                priceType: "建议零售价",
                beforePrice: "300",
                afterPrice: "500",
                modifier: "xtadmin",
                lastUpdatedDate: "2019-01-12",
            },
            {
                paOwnerType: "主机厂",
                partNo: "B31121DAAA-075",
                partName: "钥匙(不打齿-钥匙坯)",
                priceType: "零售价",
                beforePrice: "150",
                afterPrice: "280",
                modifier: "xtadmin",
                lastUpdatedDate: "2019-07-12",
            },
            {
                paOwnerType: "主机厂",
                partNo: "C31121DAAA-075",
                partName: "前门锁总成，右",
                priceType: "零售价",
                beforePrice: "220",
                afterPrice: "320",
                modifier: "xtadmin",
                lastUpdatedDate: "2018-08-12",
            },
            {
                paOwnerType: "主机厂",
                partNo: "F31121DAAA-075",
                partName: "法兰面螺栓",
                priceType: "建议零售价",
                beforePrice: "430",
                afterPrice: "340",
                modifier: "xtadmin",
                lastUpdatedDate: "2018-05-12",
            },

        ]
    }
})

//备件目录_保存
const paDbDlrPartListMutationUpdateSalePrice = Mock.mock({
    paDbDlrPartListMutationUpdateSalePrice: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "启用成功"
        },
        ],
        "msg": "success"
    }
})
//备件目录_保存-----修改，新增按钮弹窗保存
const paDbDlrPartListMutationSave = Mock.mock({
    paDbDlrPartListMutationSave: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "启用成功"
        },
        ],
        "msg": "success"
    }
})
//备件目录--导入零售价格
const paDbDlrPartListMutationImportSalePrice = Mock.mock({
    paDbDlrPartListMutationImportSalePrice: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "msg": "success",
        "rows": [
            {
                partId: "11111",
                partNo: "G31121DAAA-075",
                partName: "顶盖（普通型）",
                partType: "非易损件",
                priceType: "建议零售价",
                userPrice: "400",
                oldSalePrice: "500",
                partTypeName: "250",
            },
            {
                partId: "2222",
                partNo: "G31121DAAA-076",
                partName: "顶盖总成（天窗型）",
                partType: "易损件",
                priceType: "建议零售价",
                userPrice: "500",
                oldSalePrice: "600",
                partTypeName: "250",
            },
            {
                partId: "3333",
                partNo: "G31121DAAA-077",
                partName: "前门总成,左",
                partType: "非易损件",
                priceType: "建议零售价",
                userPrice: "100",
                oldSalePrice: "200",
                partTypeName: "250",
            },
            {
                partId: "4444",
                partNo: "G31121DAAA-078",
                partName: "钥匙(不打齿-钥匙坯)",
                partType: "易损件",
                priceType: "建议零售价",
                userPrice: "300",
                oldSalePrice: "500",
                partTypeName: "250",
            },

        ]
    }
})
//备件清单维护备件信息查询_查询 
const paDbPartListQueryList = Mock.mock({
    paDbPartListQueryList: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows": [
            {
                partBrandCodeName: "N",
                partNo: "G31121DAAA-075",
                partName: "螺钉111",
                partStateName: "正常",
                partTypeCode: "5",
                stockStateName: "开放",
                purStateName: "",
                saleStateName: "开放",
                replacePartNo: "001252GJOD-2222",
                replaceCode: "8",
                lastUpdatedDate: "2019-01-12",
                updateControlId: "",
            },
            {
                partBrandCodeName: "NI",
                partNo: "G31121DAAA-875",
                partName: "螺帽111",
                partStateName: "不正常",
                partTypeCode: "12",
                stockStateName: "关闭",
                purStateName: "",
                saleStateName: "开放",
                replacePartNo: "001252GJOD-4444",
                replaceCode: "8",
                lastUpdatedDate: "2019-02-12",
                updateControlId: "",
            },
            {
                partBrandCodeName: "NVI",
                partNo: "G31121DAAA-125",
                partName: "螺帽111",
                partStateName: "不正常",
                partTypeCode: "12",
                stockStateName: "关闭",
                purStateName: "",
                saleStateName: "开放",
                replacePartNo: "001252GJOD-765",
                replaceCode: "8",
                lastUpdatedDate: "2019-05-12",
                updateControlId: "",
            },
            {
                partBrandCodeName: "VI",
                partNo: "A31121DAAA-875",
                partName: "螺帽111",
                partStateName: "不正常",
                partTypeCode: "12",
                stockStateName: "关闭",
                purStateName: "",
                saleStateName: "开放",
                replacePartNo: "001252GJOD-4444",
                replaceCode: "8",
                lastUpdatedDate: "2018-11-12",
                updateControlId: "",
            },

        ]
    }
})
// 备件清单维护备件信息查询_备件替换链信息 
const paDbReplaceListQueryFindAll = Mock.mock({
    paDbReplaceListQueryFindAll: {
        pageindex: 1,
        pages: 1,
        records: 4,
        result: "1",
        "rows": [
            {
                replaceChainCode: "2",
                replaceOrderNo: "1",
                partNo: "234562134-111",
                replaceCode: "反向替代",
                partTechSummary: "",
                csPartNo: "",
                partFlowState: "停用",
            },
            {
                replaceChainCode: "3",
                replaceOrderNo: "1",
                partNo: "234562134-222",
                replaceCode: "反向替代",
                partTechSummary: "",
                csPartNo: "",
                partFlowState: "正常",
            },
            {
                replaceChainCode: "4",
                replaceOrderNo: "1",
                partNo: "234562134-333",
                replaceCode: "反向替代",
                partTechSummary: "",
                csPartNo: "",
                partFlowState: "停用",
            },
            {
                replaceChainCode: "5",
                replaceOrderNo: "1",
                partNo: "234562134-444",
                replaceCode: "反向替代",
                partTechSummary: "",
                csPartNo: "",
                partFlowState: "正常",
            },

        ]
    }
})
//备件清单维护备件信息查询---备件信息维护保存
const paDbPartListMutationSave = Mock.mock({
    paDbPartListMutationSave: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "保存成功"
        },
        ],
        "msg": "success"
    }
})
//备件清单维护备件信息查询---备件信息维护保存替换
const paDbReplaceMutationSave = Mock.mock({
    paDbReplaceMutationSave: {
        "result": "1",
        "rows": [{
            "result": "1",
            "msg": "保存成功"
        },
        ],
        "msg": "success"
    }
})
export default [
    //备件其他属性维护
    {
        url: '/paDbVarietyMutation_attributeData/list',
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: paDbVarietyMutation_attributeData
            }
        }
    },
    //选择备件公共弹窗
    {
        url: paApis.paChoosePartQuery.APIUrl + cH + 'v=' + paApis.paChoosePartQuery.ServiceCode,
        type: 'post',
        response: config => {
            return paChoosePartQuery
        }
    },
    // 备件其他属性手动维护_删除
    {
        url: paApis.paDbPartListMutationDeletePartNo.APIUrl + cH + 'v=' + paApis.paDbPartListMutationDeletePartNo.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartListMutationDeletePartNo
        }
    },
    //手动维护保存修改
    {
        url: paApis.paDbPartListMutationSavePartAttributel.APIUrl + cH + 'v=' + paApis.paDbPartListMutationSavePartAttributel.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartListMutationSavePartAttributel
        }
    },
    //备件其他属性手动维护_导入备件号
    {
        url: paApis.paDbPartListMutationExportPartNo.APIUrl + cH + 'v=' + paApis.paDbPartListMutationExportPartNo.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartListMutationExportPartNo
        }
    },
    //备件其他属性手动维护_批量导入
    {
        url: paApis.paDbPartListMutationBatchImportPartAttributel.APIUrl + cH + 'v=' + paApis.paDbPartListMutationBatchImportPartAttributel.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartListMutationBatchImportPartAttributel
        }
    },
    //备件其他属性手动维护_批量导入--删除
    {
        url: paApis.paDbPartListMutationImportDeletePartNo.APIUrl + cH + 'v=' + paApis.paDbPartListMutationImportDeletePartNo.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartListMutationImportDeletePartNo
        }
    },
    //备件其他属性手动维护_批量导入--提交
    {
        url: paApis.paDbPartListMutationImportSubmitPartNo.APIUrl + cH + 'v=' + paApis.paDbPartListMutationImportSubmitPartNo.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartListMutationImportSubmitPartNo
        }
    },
    //备件价格维护-查询
    {
        url: paApis.paDbPriceQueryListForPage.APIUrl + cH + 'v=' + paApis.paDbPriceQueryListForPage.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPriceQueryListForPage
        }
    },
    //备件价格维护-保存
    {
        url: paApis.paDbPriceMutationSave.APIUrl + cH + 'v=' + paApis.paDbPriceMutationSave.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPriceMutationSave
        }
    },
    //备件价格维护-导入
    {
        url: paApis.paDbPriceMutationImport.APIUrl + cH + 'v=' + paApis.paDbPriceMutationImport.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPriceMutationImport
        }
    },
    //备件价格启用-查询
    {
        url: paApis.paDbPriceTraceQueryListForPage.APIUrl + cH + 'v=' + paApis.paDbPriceTraceQueryListForPage.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPriceTraceQueryListForPage
        }
    },

    //备件价格启用-启用
    {
        url: paApis.paDbPriceTraceMutationStartSave.APIUrl + cH + 'v=' + paApis.paDbPriceTraceMutationStartSave.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPriceTraceMutationStartSave
        }
    },

    //公共弹窗-供应商
    {
        url: '/chooseSupplier/list',
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: chooseSupplier
            }
        }
    },
    // 订货日历_查询
    {
        url: paApis.paDbPurCalendarQueryFindAll.APIUrl + cH + 'v=' + paApis.paDbPurCalendarQueryFindAll.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPurCalendarQueryFindAll
        }
    },
    //订货日历_保存
    {
        url: paApis.paDbPurCalendarMutationSave.APIUrl + cH + 'v=' + paApis.paDbPurCalendarMutationSave.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPurCalendarMutationSave
        }
    },
    //订货日历分组_查询
    {
        url: paApis.paDbPurCalendModuleQueryFindAll.APIUrl + cH + 'v=' + paApis.paDbPurCalendModuleQueryFindAll.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPurCalendModuleQueryFindAll
        }
    },
    //订货日历分组_保存
    {
        url: paApis.paDbPurCalendModuleMutationSave.APIUrl + cH + 'v=' + paApis.paDbPurCalendModuleMutationSave.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPurCalendModuleMutationSave
        }
    },
    //订货日历分组使用店清单信息
    {
        url: paApis.paDbCalendDlrQueryFindAll.APIUrl + cH + 'v=' + paApis.paDbCalendDlrQueryFindAll.ServiceCode,
        type: 'post',
        response: config => {
            return paDbCalendDlrQueryFindAll
        }
    },
    //备件状态开关日志查询_查询
    {
        url: paApis.paDbPartLogQueryList.APIUrl + cH + 'v=' + paApis.paDbPartLogQueryList.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartLogQueryList
        }
    },
    //备件目录_查询
    {
        url: paApis.paDbPartCartypeRfQueryList.APIUrl + cH + 'v=' + paApis.paDbPartCartypeRfQueryList.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartCartypeRfQueryList
        }
    },
    //备件目录_查询价格调整历史
    {
        url: paApis.paDbDlrPartPriceHisQueryList.APIUrl + cH + 'v=' + paApis.paDbDlrPartPriceHisQueryList.ServiceCode,
        type: 'post',
        response: config => {
            return paDbDlrPartPriceHisQueryList
        }
    },
    //备件目录_保存
    {
        url: paApis.paDbDlrPartListMutationUpdateSalePrice.APIUrl + cH + 'v=' + paApis.paDbDlrPartListMutationUpdateSalePrice.ServiceCode,
        type: 'post',
        response: config => {
            return paDbDlrPartListMutationUpdateSalePrice
        }
    },
    //备件目录_保存-------修改，新增弹窗保存
    {
        url: paApis.paDbDlrPartListMutationSave.APIUrl + cH + 'v=' + paApis.paDbDlrPartListMutationSave.ServiceCode,
        type: 'post',
        response: config => {
            return paDbDlrPartListMutationSave
        }
    },
    //备件目录_导入零售价格
    {
        url: paApis.paDbDlrPartListMutationImportSalePrice.APIUrl + cH + 'v=' + paApis.paDbDlrPartListMutationImportSalePrice.ServiceCode,
        type: 'post',
        response: config => {
            return paDbDlrPartListMutationImportSalePrice
        }
    },
    //备件清单维护备件信息查询_查询
    {
        url: paApis.paDbPartListQueryList.APIUrl + cH + 'v=' + paApis.paDbPartListQueryList.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartListQueryList
        }
    },
    //备件清单维护备件信息查询_备件信息维护_查询
    {
        url: paApis.paDbReplaceListQueryFindAll.APIUrl + cH + 'v=' + paApis.paDbReplaceListQueryFindAll.ServiceCode,
        type: 'post',
        response: config => {
            return paDbReplaceListQueryFindAll
        }
    },
    //备件清单维护备件信息查询_备件信息维护_保存
    {
        url: paApis.paDbPartListMutationSave.APIUrl + cH + 'v=' + paApis.paDbPartListMutationSave.ServiceCode,
        type: 'post',
        response: config => {
            return paDbPartListMutationSave
        }
    },
    //备件清单维护备件信息查询_备件信息维护_保存替换
    {
        url: paApis.paDbReplaceMutationSave.APIUrl + cH + 'v=' + paApis.paDbReplaceMutationSave.ServiceCode,
        type: 'post',
        response: config => {
            return paDbReplaceMutationSave
        }
    },
]

