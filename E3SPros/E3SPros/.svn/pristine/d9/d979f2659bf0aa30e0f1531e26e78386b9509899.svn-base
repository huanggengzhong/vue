/**
* description: 仓库信息维护
* author: linsy
* createdDate: 2019-08-12
*/
import Mock from 'mockjs'

const cH = '/'
//储位查询
const veStockHouse = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veStockHouse: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            rows: [
                {
                    carBrandName: '东风启辰-启辰',
                    carHouseCode: 'A-1',
                    carHouseName: 'BAS',
                    dlrShortName: '广州风日店',
                    dlrId: '1',
                    answer: 'A12',
                    carHouseAddr: '广州风日店',
                    carHouseFax: '5322678',
                    carHouseManager: 'AA',
                    isEnable: '是',
                    updateControlId: '2131231231231234324sfdada'
                }
            ]
        }
    }
})


export default [
    {
        url: '/ly/mp/busicen/scs/graphql.do' + cH + 'v=veStockHouse',
        type: 'post',
        response: config => {
            return veStockHouse
        }
    }
]

