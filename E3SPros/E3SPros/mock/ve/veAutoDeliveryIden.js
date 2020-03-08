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
                    isDedFirst:'是',
                    allowAutoDeliveryTime:'@DATETIME("yyyy-MM-dd")',
                    purchaseOrderChild: 'A000001',
                    brandName: '东风日产-日产',
                    distributor: '广州丰日',
                    fundsType: '现金(自筹)',
                    carSeriesCode: '轩逸/B13',
                    carTypeCode: 'DFL7200VBNL2-FJE',
                    carTypeConfig: 'FDRALWZJ11EXA-----',
                    carColor: '炫风橙/EBB',
                    interiorColor: '深内饰G/G',
                    VIN:'LGB20190406DE3821',
                    carProductPrice:'162800',
                    purchaseOrderType:'一般采购单',
                    purchaseOrder:'H2901BU201907090001',
                    orderTime:'2019-07-09 10:42:01',
                    purchaseOrderStatus:'采购单已审核',
                    purchaseNumber:'1',
                    transportMode:'运货'
                },
                {
                    isDedFirst:'否',
                    allowAutoDeliveryTime:'@DATETIME("yyyy-MM-dd")',
                    purchaseOrderChild: 'A000001',
                    brandName: '东风日产-日产',
                    distributor: '广州喜龙',
                    fundsType: '现金(DNAF融资)',
                    carSeriesCode: '轩逸/B13',
                    carTypeCode: 'DFL6440VAL1-FI1',
                    carTypeConfig: 'FDRALWZJ11EXA-----',
                    carColor: '炫风橙/EBB',
                    interiorColor: '深内饰G/G',
                    VIN:'LGB20190406DE3821',
                    carProductPrice:'162800',
                    purchaseOrderType:'特殊采购单',
                    purchaseOrder:'H2901BU201907090005',
                    orderTime:'2019-06-18 15:19:27',
                    purchaseOrderStatus:'等待出货确认指示',
                    purchaseNumber:'16',
                    transportMode:'运货'
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
