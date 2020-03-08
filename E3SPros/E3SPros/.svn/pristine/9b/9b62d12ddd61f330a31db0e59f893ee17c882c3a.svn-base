/**
* description: 车辆报废设置
* author: linsy
* createdDate: 2019-07-24
*/
import Mock from 'mockjs'

const cH = '/'
const veStockDiscardQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veStockDiscardQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|10': [
                {
                    userId:'1',
                    isDiscard: '是',
                    discardType: '全损',
                    discardTypeCode: '151',
                    discardDescription: '出险',
                    discardDescriptionCode: '152',
                    discardDate: '2019.7.2',
                    carBrandCode: '东风启辰-启辰',
                    carSeries: '西玛',
                    carConfig: 'B2BJ36EXA-----',
                    Color: '珠光白/QAB',
                    carInColor: '深内饰G/G',
                    vinCode: 'LGB2019ABCDE03811',
                    engineNo: 'T6868',
                    produceDate: '2018.7.2',
                    produceAddr: '广东',
                    moveStateName: '报废',
                    updateControlId:'1565645asdadadadqwwqr'
                }
            ]
        }
    }
})


// 保存
const veStockDiscardSave = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veStockDiscardSave: {
        result: '1',
        msg: ''
      }
    }
  })

export default [
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veStockDiscardQry',
        type: 'post',
        response: config => {
            return veStockDiscardQry
        }
    },
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veStockDiscardSave',
        type: 'post',
        response: config => {
            return veStockDiscardSave
        }
    }
]
