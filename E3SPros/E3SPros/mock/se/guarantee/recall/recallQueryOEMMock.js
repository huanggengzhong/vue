/**
 *  召回专案查询OEM
 */
import Mock from 'mockjs'
import { recallApi } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

//查询主表
const recallQueryOEMData = Mock.mock({
  recallQueryOEM: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 30,
    msg: '',
    'rows|30': [{
        carBrandCn: "东风日产",
        carBrandCode: "1",
        recallId: "1",
        recallCode: "0000",
        theme: "召回专案",
        mainKillNo: "AA10000",
        faultLocation: "轮胎",
        recallStatus: "已停止",
        carNumber: "30",
        amount: "100",
        recallType: "1",
    }]
  }
})

//召回专案车辆查询
const recallCarQueryData = Mock.mock({
  seDbRecallCaseVinQueryList: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 30,
    msg: '',
    'rows|30': [{
        vin: "FEGIFBIFJBISOFNGCSD",
        engineNo: "fjdsfdsbif8765547",
        ownDlrCode: "0000",
        ownDlrName: "主机厂",
        realDlrCode: "1111",
        implementation: "已完成",
        repairEndTime: "2019-10-10"
    }]
  }
})

//召回专案查询
const recallQueryListData = Mock.mock({
  seDbRecallCaseQueryListForPage: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 30,
    msg: '',
    'rows|30': [{
        carBrandCn: "东风日产",
        carBrandCode: "1",
        recallCaseCode: "0000",
        topic: "CSDAVJIDSBBSDVJADI",
        pfpCode: "1111",
        caseStatus: "已停止",
        recallCaseType: "召回"
    }]
  }
})

//派工单选择查询
const seChooseRepairOrderQueryFindData = Mock.mock({
  seChooseRepairOrderQueryFind: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 30,
    msg: '',
    'rows|30': [{
      repairOrderId: '1',
      repairOrderCode: 'AA10000',
      custName: 'XXX',
      vin: '12345678',
      carLicense: 'FNEIGVHW93RRVAE',
      repairMan: 'XXX',
      repairTel: '18950394568',
      repairTime: '2019-10-22',
      preGetDate: '2019-10-22',
      guaranteeApplyCode: '8394T4Y905586',
      agreeNo: '1',
      sceneCode: 'ASC40009',
      saName: 'XXX'
    }]
  }
})

//选择备件弹窗查询
const seChoosePartListQueryFindData = Mock.mock({
  seChoosePartListQueryFind: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 30,
    msg: '',
    'rows|30': [{
      partId: '1',
      partBrandCodeName: '111',
      partNo: '111',
      elementNameCn: '11111',
      isRefine: '111',
      partTechSummary: '111',
      costPrice: '100',
      dlrPrice: '100',
      updateControlId: 'FH98EQFHEWVQ0ER9BHV09QV0'
    }]
  }
})
export default [
  {
    url: recallApi.recallQueryOEM.APIUrl + cH + 'v=' + recallApi.recallQueryOEM.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: recallQueryOEMData,
        result: '1'
      }
    }
  },
  {
    url: recallApi.seDbRecallCaseVinQueryList.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseVinQueryList.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: recallCarQueryData,
        result: '1'
      }
    }
  },
  {
    url: recallApi.seDbRecallCaseQueryListForPage.APIUrl + cH + 'v=' + recallApi.seDbRecallCaseQueryListForPage.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: recallQueryListData,
        result: '1'
      }
    }
  },
  {
    url: recallApi.seChooseRepairOrderQueryFind.APIUrl + cH + 'v=' + recallApi.seChooseRepairOrderQueryFind.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seChooseRepairOrderQueryFindData,
        result: '1'
      }
    }
  },
  {
    url: recallApi.seChoosePartListQueryFind.APIUrl + cH + 'v=' + recallApi.seChoosePartListQueryFind.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seChoosePartListQueryFindData,
        result: '1'
      }
    }
  }
]
