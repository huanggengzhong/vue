/**
 * description: 税控信息维护 /
 * author: chenjinm
 * createdDate: 2019-10-22
 * logs:
 */
import Mock from 'mockjs'
import { veApis } from '../../src/api/graphQLApiList/ve'

const cH = '/'
// 查询
const vemaintenanceInformation = Mock.mock({
    result: '1',
    msg: 'success',
    data: {
        vemaintenanceInformation: {
            result: '1',
            records: 33,
            pageindex: 1,
            pages: 3,
            msg: '查询成功',
            'rows|5': [
                {
                    "franchiser": "广州置业",
                    "ShowProducerName": "百旺金赋",
                    "Ensure": "DD89686868",
                    "registration": "bc4400dbcb520a8f5fbd2513d78c685f693b232c5a03df966de9c1",
                    "Fiscal": "YUU757578",
                    "taxnumber": "1",
                },
                {
                    "franchiser": "广州",
                    "ShowProducerName": "金赋",
                    "Ensure": "DD896123123",
                    "registration": "123123123d2513d78c685f693b232c5a03df966de9c1",
                    "Fiscal": "YUU71238",
                    "taxnumber": "2",
                }


            ]
        }
    }
})



//    保存
const veSaleOrdMutation = Mock.mock({
    'result': '1',
    'data': {
        'veSaleOrdMutation': {
            'result': '1',
            'records': 1,
            'msg': '1',
            'rows': []
        }
    }
})

export default [
    {
        url: veApis.vemaintenanceInformation.APIUrl + cH + 'v=' + veApis.vemaintenanceInformation.ServiceCode,
        type: 'post',
        response: config => {
            return vemaintenanceInformation
        }
    },
    {
        url: veApis.veSaleOrdMutation.APIUrl + cH + 'v=' + veApis.veSaleOrdMutation.ServiceCode,
        type: 'post',
        response: config => {
            return veSaleOrdMutation
        }
    }
]
