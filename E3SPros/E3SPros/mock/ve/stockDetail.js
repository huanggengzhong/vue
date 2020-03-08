/**
* description: 仓库明细查询
* author: linsy
* createdDate: 2019-07-24
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
            'rows|10': [
                {
                    carBrandCode:'东风启辰-启辰',
                    carSeriesCode:'西玛',
                    carConfigCode:'B2BJ36EXA-----',
                    carConfigId:'1',
                    carColorName:'珠光白/QAB',
                    carColorId:'1',
                    carIncolorCode:'深内饰G/G',
                    carIncolorId:'1',
                    vin:'LGB2019ABCDE03811',
                    engineNo:'F78879',
                    carHouseType:'在库车',
                    offLineDate:'2019.7.10',
                    preInStockDate:'2019.7.10',
                    carStockHouseName:'花都库',
                    carStockHouseId:'1',
                    moveStateName:'库存车',
                    moveState:'1',
                    tranInStockDate:'2019.7.10',
                    quatityName:'正常车辆',
                    quatityCode:'1',
                    hostLimitName:'正常',
                    WLLimitName:'是',
                    pdiName:'是',
                    overStoreLimitName:'是',
                    shiftOutStockLimitName:'是',
                    leaseLimitName:'是',
                    etptName:'ETPT',
                    assignCode:'223555'
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
