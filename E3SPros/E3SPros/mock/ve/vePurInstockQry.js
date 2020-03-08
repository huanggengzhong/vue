/**
* description: 待验收采购单查询
* author: linsy
* createdDate: 2019-08-06
*/
import Mock from 'mockjs'

const cH = '/'
const vePurInstockQry = Mock.mock({
    result: '1',
    msg: '',
    data: {
        vePurInstockQry: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    orderCode:'H2901BU201906130004',
                    vin:'LGB2019ABCDE03811',
                    engineNo:'56AB55',
                    purTypeName:'一般采购单',
                    houseAddr:'广州风日主搬',
                    linkOrderdate:'2019-07-09',
                    carBrandName:'东风日产-日产',
                    carSeriesCode:'西玛',
                    carTypeShortCode:'DFL72AL2-LNC1',
                    carConfigCode:'FDRALWZJ11EXA-----',
                    carColorCode:'珠光白/QAB',
                    carIncolorCode:'深内饰G/G',
                    certificateNo:'996655321',
                    driverName:'陈代',
                    driverTel:'18943215566',
                    purPrice:'null',
                    produceDate:'2019-07-03',
                    producePlace:'花都',
                    carKey:'1',
                    witTaxCost:'222',
                    invTax:'3333',
                    taxRate:'1.2',
                    noTaxPrice:'312321'
                }
            ]
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vePurInstockQry',
        type: 'post',
        response: config => {
            return vePurInstockQry
        }
    }
]
