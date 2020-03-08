/**
* description: 经销商滚动需求计划制定时机查询
* author: linsy
* createdDate: 2019-07-27
*/

import Mock from 'mockjs'

const cH = '/'
const veMonthPlanQuery = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veMonthPlanQuery: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|10': [
                {
                    carBrandName: '东风日产-日产',
                    makeMonth: '07',
                    carSeriesName: '西玛',
                    carTypeName: 'DFL72AL2-LNC1',
                    carConfigCode: 'B2BJ36EXA----',
                    carColorName: '珠光白/QAB',
                    carIncolorName: '深内饰G/G'
                }
            ]
        }
    }
})

const verMonthPlanSave = Mock.mock({
    result: '1',
    msg: '',
    data: {
        verMonthPlanSave: {
            result: '1',
            msg: '保存成功',
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veMonthPlanQuery',
        type: 'post',
        response: config => {
            return veMonthPlanQuery
        }
    },
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=verMonthPlanSave',
        type: 'post',
        response: config => {
            return verMonthPlanSave
        }
    }
]
