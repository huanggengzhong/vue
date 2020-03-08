/**
* description: 物流入库维护
* author: linsy
* createdDate: 2019-07-26
*/
import Mock from 'mockjs'

const cH = '/'
const veInStoreQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veInStoreQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            rows: [
                {
                    inStoreId:'1',
                    carBrandCn: '东风日产-日产',
                    caSeriesCode: '西玛',
                    carConfigCode: 'FDRALWZJ11EXA-----',
                    carColorCode: '珠光白/QAB',
                    carIncolorCode: '深内饰G/G',
                    vin: 'LGB2019ABCDE03811',
                    produceFactory: '花都工厂',
                    carOutStockHouseId: '花都中心库',
                    inStoreCode: 'WHBC201812250001',
                    saleReturnCode: 'WHBC201812250001',
                    inStoreDate: '2019-07-16',
                    inStoreType: '正常',
                    shiftOutStockLimit: '*',
                    leaseLimit: '*',
                    pdiLimit: '*',
                    overStoreLimit: '*',
                    wlLimit: '*',
                    hostQualityState: 'OK',
                    creatorUserName: '张三',
                    createDate: '2019-07-16',
                    jiexiState: '已完成',
                    jiexiTime: '2019-07-16',
                    remark: '无',
                    updateControlId:"asdfghjkl",
                },
                {
                    inStoreId:'2',
                    carBrandCn: '东风日产-启辰',
                    caSeriesCode: '新奇骏',
                    carConfigCode: 'FDRALWZJ11EXA-----',
                    carColorCode: '珠光白/QAB',
                    carIncolorCode: '深内饰G/G',
                    vin: 'LGB2019ABCDE03811',
                    produceFactory: '花都工厂',
                    carOutStockHouseId: '花都中心库',
                    inStoreCode: 'WHBC201812250001',
                    saleReturnCode: 'WHBC201812250001',
                    inStoreDate: '2019-07-16',
                    inStoreType: '正常',
                    shiftOutStockLimit: '',
                    leaseLimit: '',
                    pdiLimit: '',
                    overStoreLimit: '',
                    wlLimit: '',
                    hostQualityState: 'NG',
                    creatorUserName: '张三',
                    createDate: '2019-07-16',
                    jiexiState: '已完成',
                    jiexiTime: '2019-07-16',
                    remark: '无',
                    updateControlId:"qwertyui",
                }
            ]
        }
    }
})

// 物流入库信息导入、解析
const veInStoreImport = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veInStoreImport: {
            result: '1',
            msg: ''
        }
    }
})

// 物流入库信息删除
const veInStoreDel = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veInStoreDel: {
            result: '1',
            msg: ''
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veInStoreQry',
        type: 'post',
        response: config => {
            return veInStoreQry
        }
    },
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veInStoreImport',
        type: 'post',
        response: config => {
            return veInStoreImport
        }
    },
    {
        url: '/ly/mp/busicen/scc/graphql.do' + cH + 'v=veInStoreDel',
        type: 'post',
        response: config => {
            return veInStoreDel
        }
    }
]
