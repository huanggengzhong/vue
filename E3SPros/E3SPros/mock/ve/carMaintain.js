/**
* description: 车辆限制查询
* author: linsy
* createdDate: 2019-07-24
*/
import Mock from 'mockjs'

const cH = '/'
const carSeriesMutaionUpdate = Mock.mock({
    result: '1',
    msg: '',
    data: {
        carSeriesMutaionUpdate: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            rows: [
                {
                    restrictingRemarks: '无',
                    limitStatus: '限制车辆',
                    restrictingReason: '新车展出',
                    brand: '东风日产-日产',
                    carSeries: '西玛',
                    carTypeConfig: 'FDRALWZJ11EXA-----',
                    carColor: '珠光白/QAB',
                    RemarksColor: '深内饰G/G',
                    VINCode: 'LGB2019ABCDE03811',
                    EngineNum: '56AB55',
                    WareHouse: '花都中心库',
                    WareHouseType: '在库',
                    systemTime: '2019-07-16',
                    EstimateSystemTime: '2019-07-16',
                    carStatus: '库存车',
                    OnRdEstimateTime: '2019-07-16',
                    PDILimit: '否',
                    waterCarIdentifying: '非水浸车',
                    QualityStatus: '良好',
                    isETPTCar: '非ETPT车'
                },
                {
                    restrictingRemarks: '无',
                    limitStatus: '限制车辆',
                    restrictingReason: '新车展出',
                    brand: '东风日产-日产',
                    carSeries: '西玛',
                    carTypeConfig: 'FDRALWZJ11EXA-----',
                    carColor: '珠光白/QAB',
                    RemarksColor: '深内饰G/G',
                    VINCode: 'LGB2019ABCDE03811',
                    EngineNum: '56AB55',
                    WareHouse: '花都中心库',
                    WareHouseType: '在库',
                    systemTime: '2019-07-16',
                    EstimateSystemTime: '2019-07-16',
                    carStatus: '库存车',
                    OnRdEstimateTime: '2019-07-16',
                    PDILimit: '否',
                    waterCarIdentifying: '非水浸车',
                    QualityStatus: '良好',
                    isETPTCar: '非ETPT车'
                }
            ]
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=carSeriesMutaionUpdate',
        type: 'post',
        response: config => {
            return carSeriesMutaionUpdate
        }
    }
]
