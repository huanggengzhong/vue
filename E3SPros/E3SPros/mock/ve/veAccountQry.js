/**
* description: 资金记录查询
* author: linsy
* createdDate: 2019-08-07
*/
import Mock from 'mockjs'

const cH = '/'
const veAccountQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veAccountQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    dlrShortName: '广州风日店',
                    dlrCode: '1',
                    dlrAccountName: '账户名称',
                    dlrAccountCode:'1',//账户编码
                    amount: '2,0000,000',
                    businessTypeName: '到款',
                    purcashTypeId:'1',//资金记录ID
                    businessClassName: '银行承兑汇票',//明细类别
                    businessClass: '1',//明细类别编码
                    pvBandk: '工商银行',
                    pvAccount: '12354982',
                    ticketNo: '56789522131',
                    expireDate: '2019-07-19',
                    outTicketDate: '2019-07-09',
                    createDate: '2019-07-14',
                    bankNumber: '85456451321',
                    auditStatusName: '申请',
                    modelName: '模块名称',
                    creator: '录入人',
                    createTime: '录入时间',
                    remark: '备注++++++',
                    updateControlId: '365549848915313132'
                }
            ]
        }
    }
})

// 资金类型驳回
const veAccountReject = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veAccountReject: {
            result: '1',
            msg: ''
        }
    }
})


export default [
    {
        url: '/ly/mp/busicen/fic/graphql.do' + cH + 'v=veAccountQry',
        type: 'post',
        response: config => {
            return veAccountQry
        }
    },
    {
        url: '/ly/mp/busicen/fic/graphql.do' + cH + 'v=veAccountReject',
        type: 'post',
        response: config => {
            return veAccountReject
        }
    }
]
