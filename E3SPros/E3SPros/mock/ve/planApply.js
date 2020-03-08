/**
* description: 滚动需求计划申请
* author: linsy
* createdDate: 2019-07-24
*/
import Mock from 'mockjs'

const cH = '/'
const veMonthPlan2Query = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veMonthPlan2Query: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    carBrandName:'东风日产-日产',
                    carSeriesName:'西玛',
                    carConfigCode:'BDTALDZB17EXA',
                    carColorName:'珠光白/QAB',
                    carIncolorName:'深内饰G/G',
                    planMonth:'06',
                    quantity:'1',
                    makeUserName:'管理员',
                    makeDate:'2019/7/8 11:50',
                    isEnable:'待制作',
                    auditorUserName:'管理员',
                    auditDate:'2019/7/8 11:50',
                    zjcshenhe:'null'
                }
            ]
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veMonthPlan2Query',
        type: 'post',
        response: config => {
            return veMonthPlan2Query
        }
    }
]
