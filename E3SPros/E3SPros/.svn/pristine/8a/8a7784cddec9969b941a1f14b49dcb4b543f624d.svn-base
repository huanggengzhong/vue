/**
 *  经销商售后扩展信息
 */
import Mock from 'mockjs'
import { apiMOrgDlr } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

//查询
const mdmOrgDlrExtendInfoQueryList = Mock.mock({
    mdmOrgDlrExtendInfoQueryList: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 30,
        msg: 'success',
        'rows|10': [{
            extendInfoId: "主键ID",
            smallAreaName: "小区名称",
            cityName: "城市名称",
            provinceName: "省份名称",
            dlrId: "经销商ID",
            dlrCode: "经销商编码",
            dlrShortName: "经销商简称",
            dlrStatus: "经销商状态",
            dlrStatusName: "经销商状态名称",
            repairQuotiety: "保修工时系数",
            preQuotiety: "新车地区系数",
            mtainQuotiety: "保养地区系数",
            limitJe: "备件费用限额",
            squotiety1: "备件结算系数1",
            squotiety2: "备件结算系数2",
            modifyName: "维护人",
            remark: "备注",
            lastUpdatedDate: "维护时间",
            modifydateRef: "系数维护时间",
            remarkRef: "系数维护备注",
            updateControlId: "并发控制字段1"
        }, {
            extendInfoId: "主键ID---22221111",
            smallAreaName: "小区名称---22221111",
            cityName: "城市名称---22221111",
            provinceName: "省份名称---22221111",
            dlrId: "经销商ID---22221111",
            dlrCode: "经销商编码---22221111",
            dlrShortName: "经销商简称---22221111",
            dlrStatus: "经销商状态---22221111",
            dlrStatusName: "经销商状态名称---22221111",
            repairQuotiety: "保修工时系数---22221111",
            preQuotiety: "新车地区系数---22221111",
            mtainQuotiety: "保养地区系数---22221111",
            limitJe: "备件费用限额---22221111",
            squotiety1: "备件结算系数1---22221111",
            squotiety2: "备件结算系数2---22221111",
            modifyName: "维护人---22221111",
            remark: "备注---22221111",
            lastUpdatedDate: "维护时间---22221111",
            modifydateRef: "系数维护时间---22221111",
            remarkRef: "系数维护备注---22221111",
            updateControlId: "并发控制字段---222211111"
        }]
    }
})



//保存
const mdmOrgDlrExtendInfoMutationSave = Mock.mock({
    mdmOrgDlrExtendInfoMutationSave: {
        result: '1',
        msg: 'success'
    }
})


//查询
const mdmOrgDlrAssessCoefficientQueryList = Mock.mock({
    mdmOrgDlrAssessCoefficientQueryList: {
        result: "1",
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: "success",
        rows: [{
            assessCoefficientId: 'yyyhahah',
            dlrId: 'yyyhahah',
            dlrCode: 'yyyhahah',
            evalidDate: 'yyyhahah',
            assessCoefficient: 'yyyhahah',
            updateControlId: 'yyyhahah',
            modifyName: 'yyyhahah',
            lastUpdatedDate: 'yyyhahah',
        }]

    }
})



export default [
    {
        url: apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.APIUrl + cH + 'v=' + apiMOrgDlr.mdmOrgDlrExtendInfoQueryList.ServiceCode,
        type: 'post',
        response: config => {
            return {
                msg: 'success',
                data: mdmOrgDlrExtendInfoQueryList,
                result: '1'
            }
        }
    },
    {
        url: apiMOrgDlr.mdmOrgDlrExtendInfoMutationSave.APIUrl + cH + 'v=' + apiMOrgDlr.mdmOrgDlrExtendInfoMutationSave.ServiceCode,
        type: 'post',
        response: config => {
            return {
                code: 20000,
                data: mdmOrgDlrExtendInfoMutationSave,
                result: '1'
            }
        }
    },
    {
        url: apiMOrgDlr.mdmOrgDlrAssessCoefficientQueryList.APIUrl + cH + 'v=' + apiMOrgDlr.mdmOrgDlrAssessCoefficientQueryList.ServiceCode,
        type: 'post',
        response: config => {
            return {
                msg: 'success',
                data: mdmOrgDlrAssessCoefficientQueryList,
                result: '1'
            }
        }
    },
]


