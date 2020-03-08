/**
* description: 自动出发优先标识设置模拟数据
* author: linwm
* createdDate: 2019-07-23
*/
import Mock from 'mockjs'

const cH = '/'
const veAutoConfirmOutLogQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veAutoConfirmOutLogQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            rows: [
                {
                    carBrandCode:'1',
                    autoComfirmOutLogId:"自动出货确认运行日志,品牌:东风日产-日产",
                    autoComfirmOutLog:'待出货采购子单总数量：121,本次已分配数量：110。',
                    autoComfirmOutDate: '2019-07-09 10:30',
                    updateControlId: '12caee2daceb40e7bd2601cb34893864'
                },
                {
                    carBrandCode:'2',
                    autoComfirmOutLogId:"自动出货确认运行日志,品牌:东风日产-日产",
                    autoComfirmOutLog:'待出货采购子单总数量：121,本次已分配数量：110。',
                    autoComfirmOutDate: '2019-07-09 10:30',
                    updateControlId: '22caee2daceb40e7bd2601cb34893864'
                }
            ]
        }
    }
})

// 执行
const veAutoConfirmOut = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veAutoConfirmOut: {
            result: '1',
            msg: ''
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veAutoConfirmOutLogQry',
        type: 'post',
        response: config => {
            return veAutoConfirmOutLogQry
        }
    },
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veAutoConfirmOut',
        type: 'post',
        response: config => {
            return veAutoConfirmOut
        }
    }
]
