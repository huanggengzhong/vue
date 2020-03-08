/**
* description: 仓库统计
* author: linsy
* createdDate: 2019-07-24
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
            'rows|2': [
                {
                    brandName: '东风启辰-启辰',
                    carSeries: '西玛',
                    carColor: '珠光白/QAB',
                    carInColor: '深内饰G/G',
                    count:'2'
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
