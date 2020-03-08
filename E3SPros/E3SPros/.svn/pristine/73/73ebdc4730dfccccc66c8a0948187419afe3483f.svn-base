/**
* description: 库存明细查询
* author: linsy
* createdDate: 2019-08-04
*/
import Mock from 'mockjs'

const cH = '/'
const varStockStaticQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        varStockStaticQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    carBrandCode:'东风日产-日产',
                    carSeriesName:'西玛',
                    carTypeName:'B2BJ36EXA-----',
                    carColorName:'珠光白/QAB',
                    carIncolorName:'深内饰G/G',
                    vin:'LGB2019ABCDE03811',
                    wareHouse:'null',
                    offLineDate:'2019-07-01',
                    preInStockDate:'2019-07-01',
                    ETPT:'null',
                    xianzhiState:'null',
                    xainzhiReason:'null',
                    xainzhiReasonBz:'null',
                    carHouseType:'在库',
                    HouseType:'null',
                    zhiliangState:'null',
                    butiePrice:'null',
                    carPrice:'null',
                    carConfigCode:'DFL72AL2-LNC1',
                    facheHouse:'null',
                    purType:'null',
                    HouseIn:'null',
                    ceator:'null'
                }
            ]
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=varStockStaticQry',
        type: 'post',
        response: config => {
            return varStockStaticQry
        }
    }
]
