import Mock from 'mockjs'
import { apiRepairBalanceApply } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const queryData = Mock.mock({
    seBuAntiRepairBalanceQuery: {
        result: '1',
        pageindex: 1,
        pages: 1,
        records: 3,
        msg: 'success',
        rows: [{
            repairOrderId: "123",
            repairOrderCode: "adsa",
            carLicense: "粤A123",
            vin: "sdgbfisudfbw",
            repairMan: "小明",
            repairTel: "13432263213",
            repairTime: "2019-01-01",
            balanceDate: "2019-01-01",
            isGather: "31101",
            repairOrderStatus: "afhk",
            saName: "大明",
            updateControlId: "21323",
            repairGatheringId: "1",
            balanceOrderCode: "1",
            wiAmount: "1",
            partAmount: "1",
            otherAmount: "1",
            totalAmount: "1000.00",
            dlrCustNo: "1",
            dlrPoint: "1",
            pvPoint: "1",
            cardAmount: "1",
            icCardNo: "1",
            cancelEmpName: "阿强",
            cancelDate: "2019-01-01",
            cancelReason: "1"
        },
        {
            repairOrderId: "123",
            repairOrderCode: "adsa",
            carLicense: "粤A123",
            vin: "sdgbfisudfbw",
            repairMan: "小明",
            repairTel: "13432263213",
            repairTime: "2019-01-01",
            balanceDate: "2019-01-01",
            isGather: "31101",
            repairOrderStatus: "afhk",
            saName: "大明",
            updateControlId: "21323",
            repairGatheringId: "1",
            balanceOrderCode: "1",
            wiAmount: "1",
            partAmount: "1",
            otherAmount: "1",
            totalAmount: "2000",
            dlrCustNo: "1",
            dlrPoint: "1",
            pvPoint: "1",
            cardAmount: "1",
            icCardNo: "1",
            cancelEmpName: "阿明",
            cancelDate: "2019-01-01",
            cancelReason: "1"
        },
        {
            repairOrderId: "123",
            repairOrderCode: "adsa",
            carLicense: "粤A123",
            vin: "sdgbfisudfbw",
            repairMan: "小明",
            repairTel: "13432263213",
            repairTime: "2019-01-01",
            balanceDate: "2019-01-01",
            isGather: "31101",
            repairOrderStatus: "afhk",
            saName: "大明",
            updateControlId: "21323",
            repairGatheringId: "1",
            balanceOrderCode: "1",
            wiAmount: "1",
            partAmount: "1",
            otherAmount: "1",
            totalAmount: "3000",
            dlrCustNo: "1",
            dlrPoint: "1",
            pvPoint: "1",
            cardAmount: "1",
            icCardNo: "1",
            cancelEmpName: "诸葛村夫",
            cancelDate: "2019-01-01",
            cancelReason: "1"
        }]
    }

})

const saveData = Mock.mock({
    seBuAntiRepairBalanceSave: {
        result: '1',
        msg: 'success'
    }
})

export default [
    {    // 维修反结算-查询
      url: apiRepairBalanceApply.seBuAntiRepairBalanceQuery.APIUrl + cH + 'v=' + apiRepairBalanceApply.seBuAntiRepairBalanceQuery.ServiceCode,
      type: 'post',
      response: config => {
        return {
          result: '1',
          msg: 'success',
          data: queryData
        }
      }
    },
    {    // 维修反结算-反结算保存
        url: apiRepairBalanceApply.seBuAntiRepairBalanceSave.APIUrl + cH + 'v=' + apiRepairBalanceApply.seBuAntiRepairBalanceSave.ServiceCode,
        type: 'post',
        response: config => {
          return {
            result: '1',
            msg: 'success',
            data: saveData
          }
        }
      }
]