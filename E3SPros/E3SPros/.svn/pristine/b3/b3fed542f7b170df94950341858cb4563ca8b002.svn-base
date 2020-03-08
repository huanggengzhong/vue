/**
 *  省份城市等的模拟数据
 */
import Mock from 'mockjs'

const orgManageData = Mock.mock({
    "result": "1",
    "data": {
        "mdsSupplyStatusQueryByPage": {
            "rows": [{
                orgCode: 'TR',
                orgName: '不生产不供应',
                isEnable:'1'
            }]
        }
    },
    "msg": "success"
})

const saveorgManageData = Mock.mock({
    "result": "1",
    "msg": "success"
})

export default [
    // 集团管理查询
    {
        url: '/getOrgManageList/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: orgManageData
            }
        }
    },

    // 集团管保存
    {
        url: '/saveOrgManage/list',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: saveorgManageData
            }
        }
    },
    
    
]
