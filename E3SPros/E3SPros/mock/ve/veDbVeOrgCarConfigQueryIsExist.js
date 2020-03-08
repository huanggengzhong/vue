/**
* description:车型授权情况查询
* author: linsy
* createdDate: 2019-08-05
*/
import Mock from 'mockjs'

const cH = '/'
const veDbVeOrgCarConfigQueryIsExist = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veDbVeOrgCarConfigQueryIsExist: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    carBrandCn:'东风日产-日产',
                    carBrandCode:'1',
                    dlrShortName:'广州风日店',
                    carSeriesCn:'西玛',
                    smallCarTypeCn:'DFL72AL2-LNC1',
                    carConfigId:'DFL72AL2-LNC1',
                    carSeriesCnCode:'B2BJ36EXA---',
                    authStatuCode:'已授权',
                    column1:'不生产供应',
                    column1Id:'1',
                    column2:'电动',
                    column3:'2019-07-06',
                    column4:'是',
                    column5:'温带'
                },
                {
                    carBrandCode:'1',
                    carBrandCn:'东风日产-日产',
                    dlrShortName:'广州风日店',
                    carSeriesCn:'西玛',
                    smallCarTypeCn:'DFL72AL2-LNC1',
                    carConfigId:'DFL72AL2-LNC1',
                    carSeriesCnCode:'B2BJ36EXA---',
                    authStatuCode:'未授权',
                    column1:'生产不供应',
                    column1Id:'1',
                    column2:'电动',
                    column3:'2019-07-06',
                    column4:'是',
                    column5:'寒带'
                }
            ]
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbVeOrgCarConfigQueryIsExist',
        type: 'post',
        response: config => {
            return veDbVeOrgCarConfigQueryIsExist
        }
    }
]
