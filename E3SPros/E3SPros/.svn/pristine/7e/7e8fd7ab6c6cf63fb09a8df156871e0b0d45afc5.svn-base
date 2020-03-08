/**
* description: 经销商车型优先分配设置模拟数据
* author: linwm
* createdDate: 2019-07-25
*/
import Mock from 'mockjs'

const cH = '/'
const veDbCarConfigPriQueryFindAll = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veDbCarConfigPriQueryFindAll: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|3': [
                {
                    carBrandCn: '东风日产-日产',
                    carSeriesCode: '轩逸/B13',
                    priorityModel:'DFL72AL2-LNC1',
                    carConfigCode: 'FDRALWZJ11EXA-----',
                    dlrIds: '1,2',
                    dlrShortNames:'上海宝钢,上海冠松',
                    updateControlId:"22caee2daceb40e7bd2601cb34893842"
                },
                {
                    carBrandCn: '东风日产-日产',
                    carSeriesCode: '轩逸/B13',
                    priorityModel:'DFL72AL2-LNC1',
                    carConfigCode: 'FDRALWZJ11EXA-----',
                    dlrIds: '1,2',
                    dlrShortNames:'广州丰日,广州恒源',
                    updateControlId:"22caee2daceb40e7bd2601cb34893832"
                }
            ]
        }
    }
})


const veDbCarConfigPriMutationUpdate = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veDbCarConfigPriMutationUpdate: {
            result: '1',
            msg: ''
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbCarConfigPriQueryFindAll',
        type: 'post',
        response: config => {
            return veDbCarConfigPriQueryFindAll
        }
    },
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veDbCarConfigPriMutationUpdate',
        type: 'post',
        response: config => {
            return veDbCarConfigPriMutationUpdate
        }
    }
]
