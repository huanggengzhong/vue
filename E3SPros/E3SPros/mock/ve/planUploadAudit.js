/**
* description: 经销商滚动需求上传审核查询
* author: linsy
* createdDate: 2019-07-31
*/

import Mock from 'mockjs'

const cH = '/'
const veMonthPlan3Query = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veMonthPlan3Query: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows|5': [
                {
                    carBrandName:'东风日产-日产',
                    carBrandCode:'1',
                    bigAreaName:'华东一区',
                    smallAreaName:'上海区',
                    ProvinceName:'上海',
                    cityName:'上海',
                    dlrShortName:'上海冠松',
                    dlrId:'1',
                    rejectReason:'理由不够充分，驳回'
                }
            ]
        }
    }
})

// veMonthPlanAudit
const veMonthPlanAudit = Mock.mock({
    result: '1',
    msg: '',
    data: {
        veMonthPlanAudit: {
            result: '1',
            msg: ''
        }
    }
  })

export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veMonthPlan3Query',
        type: 'post',
        response: config => {
            return veMonthPlan3Query
        }
    },
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veMonthPlanAudit',
        type: 'post',
        response: config => {
            return veMonthPlanAudit
        }
    }
]
