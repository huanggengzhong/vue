/**
* description: 验收入库方法
* author: linsy
* createdDate: 2019-08-06
*/
import Mock from 'mockjs'
const cH = '/'

// 储区保存
const vePurInstockHouse = Mock.mock({
    result: '1',
    msg: '',
    data: {
        vePurInstockHouse: {
            result: '1',
            msg: ''
        }
    }
})

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=vePurInstockHouse',
        type: 'post',
        response: config => {
            return vePurInstockHouse
        }
    }

]