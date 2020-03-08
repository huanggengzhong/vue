/**
* description: 自动出发优先标识设置模拟数据
* author: linwm
* createdDate: 2019-07-23
*/
import Mock from 'mockjs'

const cH = '/'
const veBuPurOrderDQueryFindAll = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veBuPurOrderDQueryFindAll: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            rows: [
                {
                    carOutPriFlag:'0',
                    canOutConfirmDate:'@DATETIME("yyyy-MM-dd")',
                    purOrderDCode: 'A000001',
                    carBrandCn: '东风日产-日产',
                    dlrId: '广州丰日',
                    purcashTypeId: '现金(自筹)',
                    carSeriesCode: '轩逸/B13',
                    carTypeCode: 'DFL7200VBNL2-FJE',
                    carTypeConfig: 'FDRALWZJ11EXA-----',
                    carColor: '炫风橙/EBB',
                    carInColor: '深内饰G/G',
                    vin:'LGB20190406DE3821',
                    carProductPrice:'162800',
                    orderTypeName:'一般采购单',
                    purOrderCode:'H2901BU201907090001',
                    purDate:'2019-07-09 10:42:01',
                    purStatus:'采购单已审核',
                    purQty:'1',
                    deliverModeCn:'运货',
                    updateControlId:"22caee2daceb40e7bd2601cb34893812"
                },
                {
                    carOutPriFlag:'1',
                    canOutConfirmDate:'@DATETIME("yyyy-MM-dd")',
                    purOrderDCode: 'A000001',
                    carBrandCn: '东风日产-日产',
                    dlrId: '广州喜龙',
                    purcashTypeId: '现金(DNAF融资)',
                    carSeriesCode: '轩逸/B13',
                    carTypeCode: 'DFL6440VAL1-FI1',
                    carTypeConfig: 'FDRALWZJ11EXA-----',
                    carColor: '炫风橙/EBB',
                    carInColor: '深内饰G/G',
                    vin:'LGB20190406DE3821',
                    carProductPrice:'162800',
                    orderTypeName:'特殊采购单',
                    purOrderCode:'H2901BU201907090005',
                    purDate:'2019-06-18 15:19:27',
                    purStatus:'等待出货确认指示',
                    purQty:'16',
                    deliverModeCn:'运货',
                    updateControlId:"22caee2daceb40e7bd2601cb34893822"
                }
            ]
        }
    }
})

// 品牌保存
const veBuPurOrderDMutationSave = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veBuPurOrderDMutationSave: {
            result: '1',
            msg: ''
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veBuPurOrderDQueryFindAll',
        type: 'post',
        response: config => {
            return veBuPurOrderDQueryFindAll
        }
    },
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veBuPurOrderDMutationSave',
        type: 'post',
        response: config => {
            return veBuPurOrderDMutationSave
        }
    }
]
