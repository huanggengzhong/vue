import Mock from 'mockjs'
import { apiSeProcess } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const allData = Mock.mock({
    seBuReturnApplyOrderQueryFindList:
    {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 5,
        msg: 'success',
        rows: [{
            returnApplyOrderId: '123',
            returnApplyOrderCode: '456',
            billType: 'k',
            sourceCode: '789',
            sourceOrderId: 'qwe123',
            outStoreCode: 'asd123',
            carId: 'zxc123',
            vin: 'qzz123',
            carLicense: '粤A123',
            custName: '诸葛村夫',
            applyEmpId: '564',
            applyEmpName: '王司徒',
            applyDate: '2019-01-01',
            partNo: 'wer123',
            partName: '钛合金狗眼甲',
            returnApplyQty: '2',
            returnInQty: '2',
            returnState: '0',
            returnStateName: '待出库',
            updateControlId: '1',
            oemCode: '2',
            groupCode: '3',
            oemId: '4',
            groupId: '5'
        },
        {
            returnApplyOrderId: '123',
            returnApplyOrderCode: '456',
            billType: 'k',
            sourceCode: '789',
            sourceOrderId: 'qwe123',
            outStoreCode: 'asd123',
            carId: 'zxc123',
            vin: 'qzz123',
            carLicense: '粤A123',
            custName: '诸葛村夫',
            applyEmpId: '564',
            applyEmpName: '王司徒',
            applyDate: '2019-01-01',
            partNo: 'wer123',
            partName: '钛合金狗眼乙',
            returnApplyQty: '2',
            returnInQty: '2',
            returnState: '0',
            returnStateName: '待出库',
            updateControlId: '1',
            oemCode: '2',
            groupCode: '3',
            oemId: '4',
            groupId: '5'
        },
        {
            returnApplyOrderId: '123',
            returnApplyOrderCode: '456',
            billType: 'k',
            sourceCode: '789',
            sourceOrderId: 'qwe123',
            outStoreCode: 'asd123',
            carId: 'zxc123',
            vin: 'qzz123',
            carLicense: '粤A123',
            custName: '诸葛村夫',
            applyEmpId: '564',
            applyEmpName: '王司徒',
            applyDate: '2019-01-01',
            partNo: 'wer123',
            partName: '钛合金狗眼丙',
            returnApplyQty: '2',
            returnInQty: '2',
            returnState: '0',
            returnStateName: '已出库',
            updateControlId: '1',
            oemCode: '2',
            groupCode: '3',
            oemId: '4',
            groupId: '5'
        },
        {
            returnApplyOrderId: '123',
            returnApplyOrderCode: 'XP181206004',
            billType: 'k',
            sourceCode: 'XP181206004',
            sourceOrderId: 'qwe123',
            outStoreCode: 'asd123',
            carId: 'zxc123',
            vin: 'LGBH52E09FY384095',
            carLicense: '粤A0WJ98L',
            custName: '诸葛村夫',
            applyEmpId: '564',
            applyEmpName: '付娟',
            applyDate: '2018-11-12',
            partNo: '295B03NK0B',
            partName: '后制动灯灯泡',
            returnApplyQty: '2',
            returnInQty: '2',
            returnState: '0',
            returnStateName: '待出库',
            updateControlId: '1',
            oemCode: '2',
            groupCode: '3',
            oemId: '4',
            groupId: '5'
        },
        {
            returnApplyOrderId: '123',
            returnApplyOrderCode: 'XP181206003',
            billType: 'k',
            sourceCode: 'XP181206003',
            sourceOrderId: 'qwe123',
            outStoreCode: 'asd123',
            carId: 'zxc123',
            vin: 'LGBH52E09FY384095',
            carLicense: '粤A0WJ98L',
            custName: '诸葛村夫',
            applyEmpId: '564',
            applyEmpName: '付娟',
            applyDate: '2018-11-12',
            partNo: '295B03NK0B',
            partName: '前照灯总成，左',
            returnApplyQty: '2',
            returnInQty: '2',
            returnState: '0',
            returnStateName: '待出库',
            updateControlId: '1',
            oemCode: '2',
            groupCode: '3',
            oemId: '4',
            groupId: '5'
        }
    ]
    }
})

const stockData = Mock.mock({
    seBuReturnApplyOrderQueryFindStock:
    {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        rows: [{
            repairOrderCode:"sdsad",
            outStoreCode:"dasd",
            dlrCustNo:"dasd",
            custName:"阿强",
            vin:"123",
            carId:"das",
            carBrandCode:"dasd",
            carLicense:"粤A123",
            repairOrderId:"312",
            updateControlId:"312",
            saId:"312",
            saName:"阿珍",
            dlrId:"312",
            oemCode:"31",
            groupCode:"3123",
            oemId:"312",
            groupId:"123",
            
        }]
    }
})

const stockDetailData = Mock.mock({
    seBuReturnApplyOrderQueryFindStockD:
    {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 1,
        msg: 'success',
        rows: [{
            outStoreCode:"出库单号-mock",
            outPartId:"出库备件ID-mock	",
            sourcePartId:"维修备件ID-mock	",
            partNo:"备件编号-mock-001",
            partName:"备件名称-mock--001",
            partSource:"备件来源-mock",
            partQty:"备件需求数量-mock	",
            outStoreQty:"10",
            hasApplyReturnQty:"5",
            returnApplyQty:"5",
            costAmount:"不含税成本总价-mock",
            priceAmount:"含税成本总价-mock",
            partPrice:"70",
            partAmount:"70",
            unit:"个",
            updateControlId:"并发控制ID-mock",
            oemCode:"厂商标识-mock	",
            groupCode:"集团标识-mock	",
            oemId:"厂商标识ID-mock	",
            groupId:"集团标识ID-mock	"
        },
        {
            outStoreCode:"出库单号-mock",
            outPartId:"出库备件ID-mock	",
            sourcePartId:"维修备件ID-mock	",
            partNo:"备件编号-mock--002",
            partName:"备件名称-mock--002",
            partSource:"备件来源-mock",
            partQty:"备件需求数量-mock	",
            outStoreQty:"10",
            hasApplyReturnQty:"5",
            returnApplyQty:"5",
            costAmount:"不含税成本总价-mock",
            priceAmount:"含税成本总价-mock",
            partPrice:"70",
            partAmount:"70",
            unit:"个",
            updateControlId:"并发控制ID-mock",
            oemCode:"厂商标识-mock	",
            groupCode:"集团标识-mock	",
            oemId:"厂商标识ID-mock	",
            groupId:"集团标识ID-mock	"
        },
        {
            outStoreCode:"出库单号-mock",
            outPartId:"出库备件ID-mock	",
            sourcePartId:"维修备件ID-mock	",
            partNo:"备件编号-mock--003",
            partName:"备件名称-mock--003",
            partSource:"备件来源-mock",
            partQty:"备件需求数量-mock	",
            outStoreQty:"10",
            hasApplyReturnQty:"5",
            returnApplyQty:"5",
            costAmount:"不含税成本总价-mock",
            priceAmount:"含税成本总价-mock",
            partPrice:"80",
            partAmount:"80",
            unit:"个",
            updateControlId:"并发控制ID-mock",
            oemCode:"厂商标识-mock	",
            groupCode:"集团标识-mock	",
            oemId:"厂商标识ID-mock	",
            groupId:"集团标识ID-mock	"
        }
    ]
    }
})

const saveData = Mock.mock({
    seBuRepairPartReturnSave:
    {
        result: '1',
        msg: 'success'
    }
})

const cancelData = Mock.mock({
    seBuReturnApplyOrderMutationCancel:
    {
        result: '1',
        msg: 'success'
    }
})

export default [
    {    // 维修退料查询
      url: apiSeProcess.seBuReturnApplyOrderQueryFindList.APIUrl + cH + 'v=' + apiSeProcess.seBuReturnApplyOrderQueryFindList.ServiceCode,
      type: 'post',
      response: config => {
        return {
          result: '1',
          msg: 'success',
          data: allData
        }
      }
    },
    {    // 维修退料申请查询出库单
        url: apiSeProcess.seBuReturnApplyOrderQueryFindStock.APIUrl + cH + 'v=' + apiSeProcess.seBuReturnApplyOrderQueryFindStock.ServiceCode,
        type: 'post',
        response: config => {
          return {
            result: '1',
            msg: 'success',
            data: stockData
          }
        }
      },
      {    // 维修退料申请查询出库单明细
        url: apiSeProcess.seBuReturnApplyOrderQueryFindStockD.APIUrl + cH + 'v=' + apiSeProcess.seBuReturnApplyOrderQueryFindStockD.ServiceCode,
        type: 'post',
        response: config => {
          return {
            result: '1',
            msg: 'success',
            data: stockDetailData
          }
        }
      },
      {    // 维修退料申请保存
        url: apiSeProcess.seBuRepairPartReturnSave.APIUrl + cH + 'v=' + apiSeProcess.seBuRepairPartReturnSave.ServiceCode,
        type: 'post',
        response: config => {
          return {
            result: '1',
            msg: 'success',
            data: saveData
          }
        }
      },
      {    // 维修退料申请作废
        url: apiSeProcess.seBuReturnApplyOrderMutationCancel.APIUrl + cH + 'v=' + apiSeProcess.seBuReturnApplyOrderMutationCancel.ServiceCode,
        type: 'post',
        response: config => {
          return {
            result: '1',
            msg: 'success',
            data: cancelData
          }
        }
      },


]