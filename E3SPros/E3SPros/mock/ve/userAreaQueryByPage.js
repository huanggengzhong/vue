/**
* description: 仓库明细查询
* author: linsy
* createdDate: 2019-07-24
*/

import Mock from 'mockjs'

const cH = '/'
const userAreaQueryByPage = Mock.mock({
    result: '1',
    msg: '',
    data: {
        userAreaQueryByPage: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|10': [
                {
                    CarBrandCn:'东风启辰-启辰',
                    carBrandCode:'1',
                    orgName:'乘用车公司',
                    userName:'邓悄然',
                    userID:'1',
                    areaName:'asdasda',
                    areaId:'',
                    smallAreaName:'',
                    smallAreaId:'1',
                }
            ]
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=userAreaQueryByPage',
        type: 'post',
        response: config => {
            return userAreaQueryByPage
        }
    }
]
