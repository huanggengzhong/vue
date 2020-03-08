/**
* description: 自动出发优先标识设置模拟数据
* author: linwm
* createdDate: 2019-07-23
*/
import Mock from 'mockjs'

const cH = '/'
const veBattchAssignLogQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veBattchAssignLogQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            rows: [
                {
                    carBrandCode:'1',
                    battchAssign:"批次分配运行日志,品牌:东风日产-日产",
                    battchAssignLog:'待分配采购子单总数量：635,本次已分配数量：120。',
                    battchAssignLogDate: '2019-07-09 10:30',
                    updateControlId: '12caee2daceb40e7bd2601cb34893864'
                },
                {
                    carBrandCode:'2',
                    battchAssign:"批次分配运行日志,品牌:东风日产-日产",
                    battchAssignLog:'分配采购子单总数量：635,本次已分配数量：120。',
                    battchAssignLogDate: '2019-07-09 10:30',
                    updateControlId: '22caee2daceb40e7bd2601cb34893864'
                }
            ]
        }
    }
})

// 执行
const veBattchAssign = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veBattchAssign: {
            result: '1',
            msg: ''
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veBattchAssignLogQry',
        type: 'post',
        response: config => {
            return veBattchAssignLogQry
        }
    },
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veBattchAssign',
        type: 'post',
        response: config => {
            return veBattchAssign
        }
    }
]
