/**
* description: 物流出库维护
* author: linsy
* createdDate: 2019-07-26
*/
import Mock from 'mockjs'

const cH = '/'
const veOutStoreQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veOutStoreQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|2': [
                {   outStoreId:"1",
                    carBrandCn: '东风日产-日产',
                    caSeriesCode: '西玛',
                    carConfigCode: 'FDRALWZJ11EXA-----',
                    carColorCode: '珠光白/QAB',
                    carIncolorCode: '深内饰G/G',
                    vin: 'LGB2019ABCDE03811',
                    produceFactory: '花都工厂',
                    carOutStockHouseId: '花都中心库',
                    carAimStockHouseId: '郑州中心库',
                    carOutStoreCode: 'WHBC201812250001',
                    outStoreDate: '2019-07-16',
                    creatorUserName: '张三',
                    createDatetime: '2019-07-16',
                    jiexiState: '已完成',
                    jiexiTime: '2019-07-16',
                    remark: '',
                    updateControlId:"asdfghjkl",
                },
                
                {   outStoreId:"2",
                    carBrandCn: '东风日产-启辰',
                    caSeriesCode: '新奇骏',
                    carConfigCode: 'FDRALWZJ11EXA-----',
                    carColorCode: '珠光白/QAB',
                    carIncolorCode: '深内饰G/G',
                    vin: 'LGB2019ABCDE03811',
                    produceFactory: '花都工厂',
                    carOutStockHouseId: '花都中心库',
                    carAimStockHouseId: '郑州中心库',
                    carOutStoreCode: 'WHBC201812250001',
                    outStoreDate: '2019-07-16',
                    creatorUserName: '张三',
                    createDatetime: '2019-07-16',
                    jiexiState: '已完成',
                    jiexiTime: '2019-07-16',
                    remark: '',
                    updateControlId:"qwertyui",
                }
            ]
        }
    }
})

//物流出库信息导入
const veOutStoreImport = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veOutStoreImport: {
            result: '1',
            msg: ''
        }
    }
})

//物流出库信息删除
const veOutStoreDel = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veOutStoreDel: {
            result: '1',
            msg: ''
        }
    }
})

//物流出库信息解析
const veOutStoreSave = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veOutStoreSave: {
            result: '1',
            msg: ''
        }
    }
})
export default [
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veOutStoreQry',
        type: 'post',
        response: config => {
            return veOutStoreQry
        }
    },
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veOutStoreImport',
        type: 'post',
        response: config => {
            return veOutStoreImport
        }
    },
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veOutStoreDel',
        type: 'post',
        response: config => {
            return veOutStoreDel
        }
    },
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veOutStoreSave',
        type: 'post',
        response: config => {
            return veOutStoreSave
        }
    }
]
