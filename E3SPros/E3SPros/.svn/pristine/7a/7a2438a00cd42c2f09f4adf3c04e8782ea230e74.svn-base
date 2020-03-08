/**
* description: 经销商滚动需求上传审核明细查询
* author: linsy
* createdDate: 2019-07-31
*/

import Mock from 'mockjs'

const cH = '/'
const veMonthPlanDetailQuery = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veMonthPlanDetailQuery: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    dlrShortName:'广州风日店',
                    carBrandName:'东风日产-日产',
                    carSeriesName:'西玛',
                    carTypeName:'DFL72AL2-LNC1',
                    carConfigName:'B2BJ36EXA-----',
                    carColorName:'xxx',
                    carIncolorName:'xxx',
                    makeMonth:'1'
                }
            ]
        }
    }
})


export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veMonthPlanDetailQuery',
        type: 'post',
        response: config => {
            return veMonthPlanDetailQuery
        }
    }
]
