import Mock from 'mockjs'
import { param2Obj } from '../src/utils'
import user from './user'
import table from './table'
import componentsMock from './componentsMock'
import tableQuery from './tableQuery'
import orgcomponentsMock from './org/orgcomponentsMock'
import repairWITypeMock from './se/basedata/repair/repairWITypeMock'
// import repairOrderModelMock from './se/basedata/repair/repairOrderModelMock'
// import basedata from './pa/basedata/basedata'
import payType from './se/seCommonMock'
import organization from './ve/organization'
import targetQuantityImportMock from './ve/targetQuantityImportMock'
import carProduct from './org/carProduct'
import carMaintain from './ve/carMaintain'
import dlrSalesReturn from './ve/dlrSalesReturn'
import taxControl from './ve/taxControl'

import sysManagement from './org/sysManagement'
import fiBuGatheringOrderMock from './se/repair/sales/fiBuGatheringOrderMock'
import jpxsjsMock from './se/repair/sales/jpxsjsMock'
// import boutiqueSalesReQueryMock from './se/repair/sales/boutiqueSalesReQueryMock'
import partSortDetailMock from './se/basedata/repair/partSortDetailMock'
import seDbFavoPowerMock from './se/basedata/repair/SeDbFavoPowerMock'
import seDbParaSetMutationMock from './se/basedata/repair/SeDbParaSetMutationMock'
import seDbNetLevleMock from './se/basedata/repair/SeDbNetLevleMock'
import seDbMaintainWiCoefMock from './se/basedata/repair/SeDbMaintainWiCoefMock'
import mdmCarMock from './se/carInfo/mdmCarMock'
import employeeInfo from './org/employeeInfo'
import basicDataMock from './ve/basicDataMock'
import vepurOrder from './ve/vepurOrder'
import vepurcashType from './ve/vepurcashType'
import stockDetail from './ve/stockDetail'
// import stockLease from './ve/stockLease'
import userDistributor from './org/userDistributor'
import carScrapSetting from './ve/carScrapSetting'
import logisticsCheckout from './ve/outStore'
import logisticsCheckin from './ve/InStore'
import planningApplication from './ve/planningApplication'
import planApply from './ve/planApply'
import planUploadAudit from './ve/planUploadAudit'
import planDetailQry from './ve/planDetailQry'
import purOrderAssign from './ve/vepurOrderAssign'
import wiPartsLinkSetMock from './se/basedata/repair/wiPartsLinkSetMock'
import carSeriesMotationMock from './ve/carSeriesMotationMock'
import dlxMoke from './ve/dlxMoke'
import dlrtanchuangMoke from './ve/dlrtanchuangMoke'
import vePurReqQry from './ve/vePurReqQry'
import settlementSwitchSetMock from './ve/settlementSwitchSetMock'
import distributionAchievementMock from './ve/distributionAchievementMock'
import mdmOrgInfoQuery from './org/mdmOrgInfoQuery'

// import dlrkeYongZiJin from './ve/dlrkeYongZiJin'
import businessPsrManager from './org/businessPsrManager'
import paChoosePart from './se/paChoosePart'
import seChooseWiSelect from './se/seChooseWiSelect'
import VeBuPurOrderD from './ve/VeBuPurOrderD'
import organizationalChart from './org/organizationalChart'
import seDbFaultPartQuery from './se/basedata/repair/seDbFaultPartQueryMock'
import dlrAccountManageMock from './pa/basedata/dlrAccountManageMock'
import paDbTransitRelationMock from './pa/basedata/paDbTransitRelationMock'
import paPartsDlrWareHouseMock from './pa/basedata/paPartsDlrWareHouseMock'
import paDbDlrUseOrderTypeMock from './pa/basedata/paDbDlrUseOrderTypeMock'

// import paBuPurOrder from './pa/dealerpurchases/paBuPurOrderMock'
import carPriceMaintain from './org/carPriceMaintain'
// import partsCarTypeModal from './se/partsCarTypeModal'
import seDbPolicyCompanyMock from './se/basedata/repair/seDbPolicyCompanyMock'
import seRepairReportMaintainVehicleMock from './se/basedata/repair/seRepairReportMaintainVehicleMock'
import seBuRepairHistoryQueryDetailMock from './se/basedata/repair/seBuRepairHistoryQueryDetailMock'
import paDbOrderCheckConfig from './pa/ordermanage/paDbOrderCheckConfig'
// import seDbWiPriceModelMock from './se/basedata/repair/seDbWiPriceModelMock'
import veCertificatQry from './ve/veCertificatQry'
import seReservePartQueryMain from './se/repair/appointment/SeReservePartQueryMock'
import seReservePartQueryDetail from './se/repair/appointment/SeReservePartQueryMock'
import orderAuditionMock from './pa/orderAudit/orderAudition'
// import seDbRepairGroup from './se/basedata/seDbRepairGroup'
import paBuQemStorageQuery from './pa/inventoryManage/paBuQemStorageQuery'
// import seRepairBalanceApplyMokc from './se/repair/finance/repairBalanceApplyMock'
import seCarOwnerCustModal from './se/seCarOwnerCustModal'
import seRepairReportQueryListMock from './se/basedata/repair/seRepairReportQueryListMock'
import seRepairReportQueryRepairDailyMock from './se/basedata/repair/seRepairReportQueryRepairDailyMock'
import seDbWiQueryMock from './se/basedata/repair/seDbWiQueryMock'
import carTypeMaintainMock from './ve/carTypeMaintainMock'
import mdsSysPosition from './org/mdsSysPosition'
import veBattchAssignLog from './ve/veBattchAssignLog'
import veAutoConfirmOutLog from './ve/veAutoConfirmOutLog'
import vePurAuditQry from './ve/vePurAuditQry'
import varStockStaticQry from './ve/varStockStaticQry'
import veDbVeOrgCarConfigQueryIsExist from './ve/veDbVeOrgCarConfigQueryIsExist'
import vePurInstockQry from './ve/vePurInstockQry'
import carSellSetMock from './ve/carSellSetMock'
import vePurInstockHouse from './ve/vePurInstockHouse'
import veAccountQry from './ve/veAccountQry'
import veStockStaticQry from './ve/veStockStaticQry'
import userSeriesQueryFindAll from './ve/userSeriesQueryFindAll'
// import veDbCarStockHouseQueryFindAll from './ve/veDbCarStockHouseQueryFindAll'
import sysSceneSetting from './org/sysSceneSetting'
import seDbMaintainMock from './se/basedata/repair/seDbMaintainMock'
// import SeReserveOrderQuery from './se/repair/appointment/InputSeReserveOrderTrackMock'
import paNetToStoreMock from './pa/basedata/paNetToStoreMock'
import partsOemWareHouseQueryMock from './pa/basedata/partsOemWareHouseQueryMock'
import seCommonQueryChooseDlr from './se/seCommonQueryChooseDlr'
// import seBuRepairModeModal from './se/seBuRepairModeModal'
// import partsOemWareHouseQueryMock from './pa/basedata/partsOemWareHouseQueryMock'
import sysMsgModule from './org/sysMsgModule'
import seRepairUnionReportQueryMock from './se/report/repair/seRepairUnionReportQueryMock'
import seComQueChoMuMock from './se/seComQueChoMuMock'
// import veBuDlrAccountRInfoMock from './pa/capitalAccount/veBuDlrAccountRInfoMock'

import vepurOrderAssign from './ve/vepurOrderAssign'
import withholdPurcashTypeMock from './ve/withholdPurcashTypeMock'
import capitalManage from './ve/capitalManage'

import repairWorkOrderListMock from './se/process/workorder/repairWorkOrderListMock'
import repairWorkOrderEditMock from './se/process/workorder/repairWorkOrderEditMock'
import varCarLimitQry from './ve/varCarLimitQry'
import veCarLimit from './ve/veCarLimit'
import seMaterialListMock from './se/basedata/repair/seMaterialListMock'
import seBuRepairPartReturnMock from './se/basedata/repair/seBuRepairPartReturnMock'
import serviceCarType from './se/public/serviceCarType'
import newCarMaintainMock from './se/basedata/guarantee/newCarMaintainMock'
import engineCarTypeMock from './se/basedata/guarantee/engineCarTypeMock'
import paBuDlrStorage from './pa/dealerStorage/paBuDlrStorage'
import paBuDlrOutStore from './pa/outmanage/paBuDlrOutStore'
// import repairOutServiceMock from './pa/outmanage/RepairOutServiceMock'
// import seBuRepairWorkMock from './se/repair/maintain/seBuRepairWorkMock'
import paBuOemDlrAccountQueryMock from './pa/financemanage/paBuOemDlrAccountQueryMock'
import seCommonQueryServiceSaDDL from './se/seCommonQueryServiceSaDDL'
// import seBuAntiRepairBalanceMock from './se/basedata/repair/seBuAntiRepairBalanceMock'
import DbDlrAccount from './ve/DbDlrAccount'
import seBuRepairReserverDlr from './se/componets/seBuRepairReserverDlr'
import veBuDlrAccountRLogMock from './pa/financemanage/veBuDlrAccountRLogMock'
// import partsCarTypeSelect from './se/partsCarTypeSelect'
// import chooseCarSeriesSelect from './se/chooseCarSeriesSelect'
import batchAllocation from './ve/batchAllocation'
import orgCityQueryFindAll from './org/orgCityQueryFindAll'
import orgProvinceQueryFindAll from './org/orgProvinceQueryFindAll'
// import seBuRepairCheckMock from './se/repair/maintain/seBuRepairCheckMock'
// import seBuRepairBalanceQueryMock from './se/process/settlement/seBuRepairBalanceQueryMock'
import paBuStockUpQueryMock from './pa/dealerpurchases/paBuStockUpQueryMock'
import buStockDetailMock from './pa/dealerpurchases/buStockDetailMock'
import seReserveOrderQueryFindAll from './se/repair/appointment/seReserveOrderQueryFindAllMock'
import seBuReserveOrderMutationSave from './se/repair/appointment/seReserveOrderQueryFindAllMock'
import RepairOutReturnService from './pa/outmanage/RepairOutReturnServiceMock'
import PaBuDlrInStoreMock from './pa/storageManage/PaBuDlrInStoreMock'
import sparePartswork from './pa/sparePartswork/sparePartswork'
import seBuRepairOrderQueryPrint from './se/componets/seBuRepairOrderQueryPrint'
import ChooseOtherFeeType from './se/componets/ChooseOtherFeeType'
import seReserveCanQueryFactQty from './se/repair/appointment/seReserveOrderQueryFindAllMock'
import chooseSmallKind from './se/chooseSmallKind'
import vehicleDataView from './se/carInfo/vehicleDataView'
import seDbMaintainConfigQueryFindAll from './se/basedata/repair/seDbMaintainConfigQueryMock'
// import paDbPriceTraceMock from './pa/basedata/paDbPriceTraceMock'
import batchDistPurOrderSet from './ve/batchDistPurOrderSet'
import errorRateSetMock from './ve/errorRateSetMock'
import dlrStock from './ve/dlrStock'
import veDbMtargettimeSetMock from './ve/veDbMtargettimeSetMock'
// import dlrFinanceConfirmMock from './ve/dlrFinanceConfirmMock'
import vedbgl from './ve/vedbgl'
import replyContentsSetMock from './se/basedata/guarantee/replyContentsSetMock'
import paOutBoundQueryMock from './pa/storageManage/paOutBoundQueryMock'
import recallSettingMock from './se/guarantee/recall/recallSettingMock.js'
import paOrderShortPartsMock from './pa/storageManage/paOrderShortPartsMock'
import secondbasedata from './pa/basedata/secondbasedata'
// import recallQueryOEMMock from './se/guarantee/recall/recallQueryOEMMock.js'
import bigClientOrderDMock from './ve/bigClientOrderDMock.js'
import veSaleOrdDateBase from './ve/veSaleOrdDateBase.js'

import seDbAcceSettingMock from './se/repair/sales/seDbAcceSettingMock'
import seBuReserveCanQueryFactQtyMock from './se/repair/appointment/seBuReserveCanQueryFactQtyMock'
import recallFindingMock from './se/guarantee/recall/recallFindingMock.js'
import recallExecuteMock from './se/guarantee/recall/recallExecuteMock.js'
import recallScheduleMock from './se/guarantee/recall/recallScheduleMock.js'
// import seBuAcceOrderMock from './se/repair/sales/seBuAcceOrderMock'
// import paDlrOutStore from './pa/outmanage/paDlrOutStore'
import seBugCauseCodeMock from './se/basedata/repair/seBugCauseCodeMock'
import paDlrstorageMock from './pa/storageManage/paDlrstorageMock'
import RepairActivityMock from './se/basedata/repair/RepairActivity'
import paDlrOutStoreReturnMock from './pa/outmanage/paDlrOutStoreReturnMock'
import paDlrOutStore from './pa/outmanage/paDlrOutStore'
import seDbReturnReasonQueryMock from './se/basedata/guarantee/seDbReturnReasonQueryMock'
import seMainCulpritMock from './se/basedata/repair/seMainCulpritMock'
import partGroupingMock from './se/basedata/repair/partGroupingMock'
import seExtendsInfoMock from './se/basedata/guarantee/seExtendsInfoMock'
import seMaintenanceMock from './se/basedata/guarantee/seMaintenanceMock'

var mocks = [
  ...user,
  ...table,
  ...componentsMock,
  ...tableQuery,
  ...orgcomponentsMock,
  ...repairWITypeMock,
  // ...repairOrderModelMock,
  ...distributionAchievementMock,
  ...settlementSwitchSetMock,
  ...paOrderShortPartsMock,
  //  ...basedata,
  ...secondbasedata,
  ...engineCarTypeMock,
  ...carSellSetMock,
  ...payType,
  ...organization,
  ...carProduct,
  ...dlrSalesReturn,
  ...carMaintain,
  ...targetQuantityImportMock,
  // ...vepurOrder,
  ...stockDetail,
  ...userDistributor,
  ...carScrapSetting,
  ...logisticsCheckout,
  ...logisticsCheckin,
  ...planningApplication,
  ...planApply,
  ...planUploadAudit,
  ...planDetailQry,
  ...purOrderAssign,
  ...basicDataMock,
  ...businessPsrManager,
  ...vepurcashType,
  ...sysManagement,
  ...wiPartsLinkSetMock,
  ...employeeInfo,
  ...paChoosePart,
  ...seChooseWiSelect,
  ...VeBuPurOrderD,
  ...seDbFaultPartQuery,
  // ...paBuPurOrder,
  ...organizationalChart,
  ...carPriceMaintain,
  // ...partsCarTypeModal,
  ...seDbPolicyCompanyMock,
  ...seRepairReportMaintainVehicleMock,
  ...seBuRepairHistoryQueryDetailMock,
  ...paDbOrderCheckConfig,
  // ...seDbWiPriceModelMock,
  ...veCertificatQry,
  ...seReservePartQueryMain,
  ...seReservePartQueryDetail,
  ...dlrAccountManageMock,
  ...paDbTransitRelationMock,
  ...paPartsDlrWareHouseMock,
  ...paDbDlrUseOrderTypeMock,
  ...paBuQemStorageQuery,
  // ...seDbRepairGroup,
  // ...seRepairBalanceApplyMokc,
  ...seCarOwnerCustModal,
  ...seRepairReportQueryListMock,
  ...seRepairReportQueryRepairDailyMock,
  ...seDbWiQueryMock,
  ...carTypeMaintainMock,
  ...veBattchAssignLog,
  ...veAutoConfirmOutLog,
  ...vePurAuditQry,
  ...varStockStaticQry,
  ...veDbVeOrgCarConfigQueryIsExist,
  ...vePurInstockQry,
  ...vePurInstockHouse,
  ...veAccountQry,
  ...veStockStaticQry,
  ...userSeriesQueryFindAll,
  // ...veDbCarStockHouseQueryFindAll,
  ...dlrtanchuangMoke,
  ...carSeriesMotationMock,
  ...dlxMoke,
  ...vePurReqQry,
  ...mdmOrgInfoQuery,
  ...fiBuGatheringOrderMock,
  ...jpxsjsMock,
  // ...boutiqueSalesReQueryMock,
  ...partSortDetailMock,
  ...seDbFavoPowerMock,
  ...seDbParaSetMutationMock,
  ...seDbNetLevleMock,
  ...seDbMaintainWiCoefMock,
  ...mdmCarMock,
  ...orderAuditionMock,
  ...mdsSysPosition,
  ...sysSceneSetting,
  ...seDbMaintainMock,
  ...withholdPurcashTypeMock,
  // ...SeReserveOrderQuery,
  ...paNetToStoreMock,
  ...partsOemWareHouseQueryMock,
  ...seCommonQueryChooseDlr,
  // ...seBuRepairModeModal,
  ...sysMsgModule,
  ...repairWorkOrderListMock,
  ...seRepairUnionReportQueryMock,
  ...seComQueChoMuMock,
  // ...veBuDlrAccountRInfoMock,
  ...repairWorkOrderEditMock,
  ...varCarLimitQry,
  ...veCarLimit,
  ...vepurOrderAssign,
  ...seMaterialListMock,
  ...seBuRepairPartReturnMock,
  ...serviceCarType,
  ...capitalManage,
  ...paBuDlrStorage,
  ...paBuDlrOutStore,
  // ...seBuRepairWorkMock,
  ...paBuOemDlrAccountQueryMock,
  ...seCommonQueryServiceSaDDL,
  // ...seBuAntiRepairBalanceMock,
  ...DbDlrAccount,
  ...seBuRepairReserverDlr,
  // ...repairOutServiceMock,
  ...veBuDlrAccountRLogMock,
  // ...partsCarTypeSelect,
  // ...chooseCarSeriesSelect,
  ...batchAllocation,
  ...orgCityQueryFindAll,
  ...orgProvinceQueryFindAll,
  // ...seBuRepairCheckMock,
  // ...seBuRepairBalanceQueryMock,
  ...paBuStockUpQueryMock,
  ...buStockDetailMock,
  ...seReserveOrderQueryFindAll,
  ...seBuReserveOrderMutationSave,
  ...RepairOutReturnService,
  ...PaBuDlrInStoreMock,
  ...seBuRepairOrderQueryPrint,
  ...ChooseOtherFeeType,
  ...seReserveCanQueryFactQty,
  ...chooseSmallKind,
  ...vehicleDataView,
  ...seDbMaintainConfigQueryFindAll,
  ...batchDistPurOrderSet,
  ...errorRateSetMock,
  ...dlrStock,
  ...veDbMtargettimeSetMock,
  // ...dlrFinanceConfirmMock,
  // ...paDbPriceTraceMock
  ...vedbgl,
  ...replyContentsSetMock,
  ...paOutBoundQueryMock,
  ...recallSettingMock,
  // ...recallQueryOEMMock,
  ...bigClientOrderDMock,
  ...veSaleOrdDateBase,
  // ...recallFindingMock,
  // ...SeBuReserveCanQuery,
  ...paDlrstorageMock,
  // ...recallTaskAssignMock,
  ...seDbAcceSettingMock,
  ...seBuReserveCanQueryFactQtyMock,
  ...recallFindingMock,
  ...recallExecuteMock,
  ...recallScheduleMock,
  // ...seBuAcceOrderMock
  ...paDlrOutStore,
  ...paDlrOutStoreReturnMock,
  ...seBugCauseCodeMock,
  ...RepairActivityMock,
  ...seDbReturnReasonQueryMock,
  ...seMainCulpritMock,
  ...sparePartswork,
  ...partGroupingMock,
  ...taxControl,
  ...newCarMaintainMock,
  ...seExtendsInfoMock,
  //...seMaintenanceMock
  ...seMaintenanceMock,
]

// const mockFiles = require.context('./org', true, //.js$/)
// mockFiles.keys().reduce((allMocks, modulePath) => {
//   const moduleName = modulePath.replace(/^/.//(.*)/./w+$/, '$1')
//   if (moduleName !== 'menuListMock') {
//     // const value = mockFiles(modulePath)
//     // mocks.push(...value.default)
//   }
// }, {})

// 前端mock
export function mockXHR() {
  // mock patch
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function () {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function (options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        result = respond({
          method: type,
          body: JSON.parse(body),
          query: param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(
      new RegExp(i.url),
      i.type || 'get',
      XHR2ExpressReqWrap(i.response)
    )
  }
}

// 服务器mock
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`/mock${url}`),
    type: type || 'get',
    response(req, res) {
      res.json(
        Mock.mock(respond instanceof Function ? respond(req, res) : respond)
      )
    }
  }
}

export default mocks.map(route => {
  return responseFake(route.url, route.type, route.response)
})
