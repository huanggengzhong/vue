/**
* description: 库存统计查询
* author: linsy
* createdDate: 2019-08-08
*/
import Mock from 'mockjs'

const cH = '/'
const veStockStaticQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veStockStaticQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    carBrandCode:'东风日产-日产',
                    carSeriesCode:'西玛',
                    carTypeCode:'DFL72AL2-LNC1',
                    carConfigCode:'B2BJ36EXA-----',
                    carColorCode:'珠光白/QAB',
                    carIncolorCode:'深内饰G/G',
                    cnt:'2'
                }
            ]
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veStockStaticQry',
        type: 'post',
        response: config => {
            return veStockStaticQry
        }
    }
]
