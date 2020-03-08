import Mock from 'mockjs'
import { apiSeReport } from '../../../../src/api/graphQLApiList/se'
const CH = '/'


const allData = Mock.mock({
    seBuRepairHistoryQueryDetailFindAll:
    {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 2,
        msg: '',
        'rows|10': [
            {
                //工时
                wiCode: '工时编码',
                wiName: '工时名称',
                businessTypeName: '业务类别名称',
                repairStatusName: '维修项目状态名称',
                payKindName: '付费性质名称',
                repairTypeName: '维修类型名称',
                saleWorkQty: '销售工时数量',
                wiWorkQty: '派工工时数量',
                wiPrice: '工时单价',
                wiAmount: '工时费用',
                wiPreAmount: '预估费用',
                repairGroupName: '维修班组名称',
                repairEmpName: '维修技师名称',
                repairOrderId: '维修工单ID',
                repairWiId: '维修项目ID',
                //维修备件
                dtrepairpart: {
                    partNo: '备件编号',
                    partName: '备件名称',
                    partDiscount: '备件折扣',
                    payKindName: '付费性质名称',
                    businessTypeName: '业务类别名称',
                    repairTypeName: '维修类型名称',
                    partQty: '备件数量',
                    outQty: '出库数量',
                    partPrice: '备件单价',
                    partAmount: '备件费用',
                    prePartAmount: '预估费用',
                    returnQty: '退货数量',
                    unit: '单位',
                    partTypeName: '备件类别',
                    stockSymbol: '库存标志',
                    partDiscount: '折扣',
                    repairOrderId: '维修工单ID',
                    repairPartId: '维修备件ID'
                },
                //工单信息
                dtrepairorder: {
                    dlrShortName: '专营店',
                    repairOrderId: '派工单ID',
                    repairOrderCode: '估价单编码',
                    dlrCustNo: '客户编码',
                    custName: '客户名称',
                    carId: '车辆ID',
                    vin: 'VIN码',
                    carTypeCode: '车型编码',
                    remark: '备注',
                    trunRepairDate: '交修时间',
                    deliveryDate: '交车日期',
                    repairTime: '报修日期',
                    repairTel: '报修人电话',
                    preGetDate: '预计交车时间',
                    mileage: '行驶里程',
                    csDesc: '故障现象描述',
                    dealRelustDesc: '处理结果',
                    disposeInfo: '处理方法及结果',
                    carLicense: '车牌号',
                    wiAmount: '工时费用',
                    partAmount: '备件费用',
                    otherAmount: '其他费用',
                    repairOrderAmount: '工单总费用',
                    saName: '服务代表',
                    recommendItem: '推荐项目',
                    isFirst: '是否优先派工',
                    mileage: '里程',
                    repairFinishDate: '完工时间',
                    serviceTel: '电话',
                    dlrId: '门店ID',
                    oemCode: '厂商标识',
                    groupCode: '集团标识',
                    oemId: '厂商标识ID',
                    groupId: '集团标识ID'
                },
                //获取客户车辆信息
                dtcarcustinfo: {
                    dlrCustNo: '专营店客户编码',
                    carTypeCode: '车型编码',
                    carSeriesCode: '车系编码',
                    custName: '车主名字',
                    genderName: '性别名称',
                    phone: '车主电话',
                    addr: '车主地址',
                    credNo: '证件号',
                    birthDate: '出生日期',
                    dlrId: '专营店ID',
                    dlrCode: '专营店编码',
                    vin: 'VIN码',
                    carId: '车辆ID',
                    carBrandCode: '品牌编码',
                    carBrandCn: '品牌编码',
                    engineNo: '发动机号',
                    tranType: '变速箱类型',
                    underpanNo: '底盘号',
                    carKeyNo: '钥匙号',
                    carColorName: '车身颜色',
                    carSeriesName: '车系名称',
                    carTypeName: '车型名称',
                    saleDate: '交车日期',
                    dlrShortName: '经销商名称',
                    buyCaruseName: '购买用途',
                    carInColorName: '内饰颜色'
                },
                //其他费用集合
                dtRepairOther: {
                    repairOtherId: '其它费用ID',
                    repairOrderId: '施工单ID',
                    repairOrderCode: '施工单号',
                    recallCaseType: '召回专案类型',
                    recallCaseCode: '召回专案编码',
                    servicePackageCode: '服务套餐编码',
                    otherAmountId: '其它费用ID',
                    otherAmountType: '其它费用类别',
                    costTypeName: '其它费用类别',
                    otherAmount: '其它费用',
                    payKind: '付费性质',
                    businessType: '业务类别',
                    dutyMan: '制单人',
                    dutyEmpId: '制单人ID',
                    remark: '备注'
                },


            }
        ]
    }
})

export default [
    {
        url: apiSeReport.seBuRepairHistoryQueryDetailFindAll.APIUrl + CH + 'v=' + apiSeReport.seBuRepairHistoryQueryDetailFindAll.ServiceCode,

        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: allData
            }
        }
    }
]