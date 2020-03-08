/**
* description: 已审核采购单查询
* author: linsy
* createdDate: 2019-08-04
*/
import Mock from 'mockjs'

const cH = '/'
const vePurAuditQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        vePurAuditQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    InventoryType:'null',
                    carBrandCn:'东风日产-日产',
                    carBrandCode:'1',
                    dlrShortName:'广州风日店',
                    purOrderCode:'H2901BU201906130004',
                    purOrderId:'null',
                    purOrderDCode:'H2901BU2019061304001',
                    purOrderDId:'1',
                    purState:'待分配',
                    purType:'null',
                    confirDate:'null',
                    CashTypeName:'现金（自筹）',
                    carProductPrice:'null',
                    configCode:'null',
                    carConfigName:'BDBALJWA36EXA-----',
                    carColorName:'宝石红/NBF',
                    carIncolorName:'深内饰G/G',
                    carColorPrice:'22',
                    carIncolorPrice:'22',
                    countrySubsidy:'null',
                    carPrice:'22',
                    carSeriseName:'西玛',
                    carTypeName:'DFL72AL2-LNC1',
                    carWarseHouse:'null',
                    tranportName:'送货',
                    houseAddr:'广州风日主搬',
                    creator:'null',
                    deductCashTypeId:'1',
                    deductCashName:'1',
                    purOrderTypeCode:'1',
                    updateControlId:'asdasdadasdas'
                }
            ]
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vePurAuditQry',
        type: 'post',
        response: config => {
            return vePurAuditQry
        }
    }
]
