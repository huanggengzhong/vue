import Mock from 'mockjs'
import { recallApi } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const queryData = Mock.mock({
    seDbRecallCaseQueryListForPage: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        'rows|5': [{
            recallCaseCode: "recall001",
            pfpCode: "mainMurder001",
            topic: "theme001",
            carBrandCn: "carBrandName001",
            carBrandCode: "carBrandCode001",
            operDate: "recordTime001",
            recallCaseType: "recallType001",
            recallCaseTypeName: "recallType001",
            operatePlaceName: "operatePlaceName001",
            caseStatus: "recallStatus001",
            isLinkRecallCase: "isLinkRecallCase001",
            recallCaseId: "recallId001",
            updateControlId: "updateControllerId001"
        }]
    }

})

const saveData = Mock.mock({
    seDbRecallCaseMutationSave: {
        result: '1',
        msg: 'success'

    }
})

const publishData = Mock.mock({
    seDbRecallCaseMutationSaveIsPublish: {
        result: '1',
        msg: 'success'

    }
})

const vinData = Mock.mock({
    seDbRecallCaseVinQueryListForPage: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        'rows|5': [{
            vin:"vin001",		
            dlrCode:"dlrCode001",		
            belongDlrShortName:"belongDlrShortName001"		
        }]
    }
})

export default [
    {
        //召回专案设定-查询
        url: recallApi.seDbRecallCaseQueryListForPage.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseQueryListForPage.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: queryData
            }
        }
    },
    {
        // 召回专案设定-保存
        url: recallApi.seDbRecallCaseMutationSave.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseMutationSave.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: saveData
            }
        }
    },
    {
        // 召回专案设定-发布
        url: recallApi.seDbRecallCaseMutationSaveIsPublish.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseMutationSaveIsPublish.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: publishData
            }
        }
    },
    {
        //召回专案设定-vin码查询
        url: recallApi.seDbRecallCaseVinQueryListForPage.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseVinQueryListForPage.ServiceCode,
        type: 'post',
        response: config => {
            return {
                result: '1',
                msg: 'success',
                data: vinData
            }
        }
    }
]