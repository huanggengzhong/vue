import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

/**
 * 系统预设路由
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    menuId: 'home',
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: '首页',
        menuId: 'home',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'icon-home-fill' }
      }
    ]
  },
  // 服务页面跳转用路由
  {
    path: '/se',
    hidden: true,
    component: Layout,
    children: [
      {
        path: 'repairBalanceApplyDetail',
        name: 'repairBalanceApplyDetail',
        component: () =>
          import('@/views/se/repair/finance/repairBalanceApplyDetail'),
        meta: { title: '制作结算申请单', icon: 'iconbotton-icon-baidi-zhizuojiesuanshenqingdan' }
      },
      {
        path: 'seBuRepairPartReturnSon',
        name: 'seBuRepairPartReturnSon',
        component: () =>
          import('@/views/se/process/return/seBuRepairPartReturnSon'),
        meta: { title: '新建维修退料申请', icon: 'dashboard' }
      },
      {
        path: 'seBuReserveOrderMutationSave',
        name: 'seBuReserveOrderMutationSave',
        component: () =>
          import('@/views/se/repair/appointment/seBuReserveOrderMutationSave/seBuReserveOrderMutationSave'),
        meta: { title: '预约登记', icon: 'dashboard' }
      },
      {
        path: 'seBuRepairBalanceQuery_Main',
        name: 'seBuRepairBalanceQuery_Main',
        component: () =>
          import('@/views/se/process/settlement/seBuRepairBalanceQuery_Main'),
        meta: { title: '收银主界面', icon: 'dashboard' }
      },
      {
        path: 'vehicleDataView',
        name: 'vehicleDataView',
        component: () => import('@/views/se/carInfo/vehicleDataView'),
        meta: { title: '车辆数据图', icon: 'dashboard' }
      },
      {
        path:
          '/seModule/seModuleRepair/seWorkorderManage/seRepairWorkOrderEdit',
        name: 'seRepairWorkOrderEdit',
        component: () =>
          import('@/views/se/process/workorder/repairWorkOrderEdit'),
        meta: { title: '维修施工单详情', icon: 'dashboard' }
      },
      {
        path: 'boutiqueSales',
        name: 'boutiqueSales',
        component: () => import('@/views/se/repair/sales/boutiqueSales'),
        meta: { title: '制作精品退料申请单', icon: 'dashboard' }
      },
      {
        path: 'recallSettingDetail',
        name: 'recallSettingDetail',
        component: () =>
          import('@/views/se/guarantee/recall/recallSettingDetail'),
        meta: { title: '召回专案设定详情', icon: 'dashboard' }
      },
      {
        path: 'recallQueryOEMDetail',
        name: 'recallQueryOEMDetail',
        component: () =>
          import('@/views/se/guarantee/recall/recallQueryOEMDetail'),
        meta: { title: '召回专案详情', icon: 'dashboard' }
      },
      {
        path: 'seDbAcceSettingMaintain',
        name: 'seDbAcceSettingMaintain',
        component: () =>
          import('@/views/se/repair/sales/seDbAcceSettingMaintain'),
        meta: { title: '精品套餐维护', icon: 'dashboard' }
      },
      {
        path: 'seBuAcceOrderMaintain',
        name: 'seBuAcceOrderMaintain',
        component: () =>
          import('@/views/se/repair/sales/seBuAcceOrderMaintain'),
        meta: { title: '精品销售单维护', icon: 'dashboard' }
      }
    ]
  },

  // 备件pa页面跳转用路由
  {
    path: '/pa',
    hidden: true,
    component: Layout,
    children: [
      {
        path: 'creatOrder',
        name: 'creatOrder',
        component: () =>
          import('@/views/pa/storepurchaseorder/creatOrder/creatOrder'),
        meta: { title: '新建订单', icon: 'iconbotton-icon-baidi-xinjiandingdan' }
      },
      {
        path: 'dynamicInventoryStart',
        name: 'dynamicInventoryStart',
        component: () =>
          import('@/views/pa/orderAuditConfigurationItem/dynamicInventoryStart'),
        meta: { title: '新建盘点', icon: 'dashboard' }
      },
      {
        path: 'dynamicInventoryfinancial',
        name: 'dynamicInventoryfinancial',
        component: () =>
          import('@/views/pa/orderAuditConfigurationItem/dynamicInventoryfinancial'),
        meta: {
          title: '财务审核', icon: 'iconbotton-icon-baidi-caiwushenhe'
        }
      },
      {
        path: 'paNewFlitOrder',
        name: 'paNewFlitOrder',
        component: () => import('@/views/pa/dlrFlitOrder/paNewFlitOrder'),
        meta: { title: '新建调拨单', icon: 'dashboard' }
      },
      {
        path: 'calendarEditor',
        name: 'calendarEditor',
        component: () => import('@/views/pa/calendarEditor/calendarEditor'),
        meta: {}
      }
    ]
  },

  // crm页面跳转用路由
  {
    path: '/crm',
    hidden: true,
    component: Layout,
    children: [
      {
        name: 'ComplaintAssistHand',
        path: '/ComplaintAssistHand',
        component: () => import('@/views/crm/csc/ComplaintAssistHand'),
        meta: { title: '投诉协助处理', icon: 'dashboard' }
      },
      {
        name: 'ClueDetail',
        path: '/ClueDetail',
        component: () => import('@/views/crm/coc/ClueDetail'),
        meta: { title: '线索单详情', icon: 'dashboard' }
      },
      {
        name: 'crmCustomerInfoEdit',
        path: '/crmCustomerInfoEdit',
        component: () => import('@/views/crm/basedata/crmCustomerInfoEdit'),
        meta: { title: '客户维护明细', icon: 'dashboard' }
      },
      {
        name: 'crmThreadReturn',
        path: '/crmThreadReturn',
        component: () => import('@/views/crm/coc/crmThreadReturn'),
        meta: { title: '线索回访', icon: 'dashboard' }
      },
      {
        name: 'crmToBeCleanClueDetail',
        path: '/crmToBeCleanClueDetail',
        component: () => import('@/views/crm/csc/crmToBeCleanClueDetail'),
        meta: { title: '待清洗线索详情', icon: 'dashboard' }
      },
      {
        name: 'ResponsAreaDialog',
        path: '/ResponsAreaDialog',
        component: () => import('@/views/crm/csc/ResponsAreaDialog'),
        meta: { title: '责任区分配', icon: 'dashboard' }
      },
      {
        name: 'ComplAppealRev',
        path: '/ComplAppealRev',
        component: () => import('@/views/crm/csc/ComplAppealRev'),
        meta: { title: '投诉申诉审核', icon: 'dashboard' }
      },
      {
        name: 'ComplaintReVisit',
        path: '/ComplaintReVisit',
        component: () => import('@/views/crm/csc/ComplaintReVisit'),
        meta: { title: '投诉回访', icon: 'dashboard' }
      },
      {
        name: 'ComplAppealDeal',
        path: '/ComplAppealDeal',
        component: () => import('@/views/crm/csc/complaint/ComplAppealDeal'),
        meta: { title: '投诉申诉申请', icon: 'dashboard' }
      },
      {
        name: 'crmToBeCleanClueDetail',
        path: '/crmToBeCleanClueDetail',
        component: () => import('@/views/crm/csc/crmToBeCleanClueDetail'),
        meta: { title: '线索清洗', icon: 'dashboard' }
      },
      // 过程查看跳转
      {
        name: 'crmClueFollowHis',
        path: '/crmClueFollowHis',
        component: () => import('@/views/crm/csc/crmClueFollowHis'),
        meta: { title: '线索跟踪历史', icon: 'dashboard' }
      },

      // 我的已办——投诉详情
      {
        name: 'ComplaintDetail',
        path: '/ComplaintDetail',
        component: () => import('@/views/crm/csc/ComplaintDetail.vue'),
        meta: { title: '投诉详情', icon: 'dashboard' }
      },
      // 我的草稿箱——新建服务单
      {
        name: 'crmNewSerMenu',
        path: '/crmNewSerMenu',
        component: () => import('@/views/crm/csc/crmNewSerMenu.vue'),
        meta: { title: '新建服务单', icon: 'dashboard' }
      },

      // 我的待办——处理
      {
        name: 'Complainthand',
        path: '/Complainthand',
        component: () => import('@/views/crm/csc/Complainthand'),
        meta: { title: '投诉处理', icon: 'dashboard' }
      },
      {
        name: 'ComplainReview',
        path: '/ComplainReview',
        component: () => import('@/views/crm/csc/ComplainReview'),
        meta: { title: '投诉审核', icon: 'dashboard' }
      },
      {
        name: 'crmClueDetail',
        path: '/crmClueDetail',
        component: () => import('@/views/crm/csc/crmClueDetail'),
        meta: { title: '线索详情', icon: 'dashboard' }
      },
      {
        name: 'AddcomplOrder',
        path: '/AddcomplOrder',
        component: () => import('@/views/crm/csc/AddcomplOrder'),
        meta: { title: '追加投诉单', icon: 'dashboard' }
      },
      {
        name: 'AddConsultOrder',
        path: '/AddConsultOrder',
        component: () =>
          import('@/views/crm/csc/consult/AddConsultInfo/AddConsultOrder'),
        meta: { title: '追加咨询单', icon: 'dashboard' }
      },
      {
        name: 'ComplaintAssistHand',
        path: '/ComplaintAssistHand',
        component: () => import('@/views/crm/csc/ComplaintAssistHand'),
        meta: { title: '投诉协助处理', icon: 'dashboard' }
      },
      {
        name: 'customerRemian',
        path: '/customerRemian',
        component: () =>
          import('@/views/crm/coc/customerFollowUp/customerRemian'),
        meta: { title: '客户留档', icon: 'dashboard' }
      },
      {
        name: 'addRegister',
        path: '/addRegister',
        component: () => import('@/views/crm/coc/customerFollowUp/addRegister'),
        meta: { title: '新增登记', icon: 'dashboard' }
      },
      {
        name: 'TestDrivingedit',
        path: '/TestDrivingedit',
        component: () =>
          import('@/views/crm/coc/customerFollowUp/crmTestDrivingManage/TestDrivingedit'),
        meta: { title: '试乘试驾维护', icon: 'dashboard' }
      },
      {
        name: 'TestDrvStatistics',
        path: '/TestDrvStatistics',
        component: () =>
          import('@/views/crm/coc/customerFollowUp/crmTestDrivingManage/TestDrvStatistics'),
        meta: { title: '试乘试驾统计查询', icon: 'dashboard' }
      },
      {
        name: 'ActivityTracking',
        path: '/ActivityTracking',
        component: () =>
          import('@/views/crm/coc/customerFollowUp/crmActivityTrack/ActivityTracking'),
        meta: { title: '活动跟踪', icon: 'dashboard' }
      },

      // 维护升级设置
      {
        name: 'UpdateSet',
        path: '/UpdateSet',
        component: () => import('@/views/crm/csc/UpdateSet'),
        meta: { title: '维护升级设置', icon: 'dashboard' }
      },
      // 维护提醒设置
      {
        name: 'RemindSet',
        path: '/RemindSet',
        component: () => import('@/views/crm/csc/RemindSet'),
        meta: { title: '维护提醒设置', icon: 'dashboard' }
      },
      // 发送邮件
      {
        name: 'crmMailDetail',
        path: '/crmMailDetail',
        component: () => import('@/views/crm/basedata/crmMailDetail'),
        meta: { title: '发送邮件', icon: 'dashboard' }
      },
      // 问卷编辑
      {
        name: 'TopicEdit',
        path: '/TopicEdit',
        component: () => import('@/views/crm/basedata/QuestionTopicEdit'),
        meta: { title: '问卷编辑', icon: 'dashboard' }
      },
      // 问卷答题
      {
        name: 'Questionnaire',
        path: '/Questionnaire',
        component: () => import('@/components/crm/Question/Questionnaire'),
        meta: { title: '问卷答题', icon: 'dashboard' }
      },
      {
        path: '/editCom',
        name: 'editCom',
        component: () => import('@/views/crm/cu/CustInfo/editCom'),
        meta: { title: '公司客户信息维护', icon: 'dashboard' }
      },
      {
        name: 'editPer',
        path: '/editPer',
        component: () => import('@/views/crm/cu/CustInfo/editPer'),
        meta: { title: '个人客户信息维护', icon: 'dashboard' }
      },
      {
        name: 'publicPerMess',
        path: '/publicPerMess',
        component: () => import('@/views/crm/cu/CustInfo/publicPerMess'),
        meta: { title: '公共人员信息', icon: 'dashboard' }
      },
      {
        name: 'rescueInquire',
        path: '/rescueInquire',
        component: () => import('@/views/crm/cu/CustInfo/rescueInquire'),
        meta: { title: '追加救援单-查询', icon: 'dashboard' }
      },
      {
        name: 'rescueDetail',
        path: '/rescueDetail',
        component: () => import('@/views/crm/csc/rescue/rescueDetail'),
        meta: { title: '救援单明细', icon: 'dashboard' }
      },
      {
        name: 'PerInfo',
        path: '/PerInfo',
        component: () => import('@/views/crm/cu/CustInfo/PerInfo'),
        meta: { title: '个人客户视图', icon: 'dashboard' }
      },
      {
        name: 'ComInfo',
        path: '/ComInfo',
        component: () => import('@/views/crm/cu/CustInfo/ComInfo'),
        meta: { title: '公司客户视图', icon: 'dashboard' }
      },
      {
        name: 'carOwnerInfo',
        path: '/carOwnerInfo',
        component: () => import('@/views/crm/cu/custCreatReview/carOwnerInfo'),
        meta: { title: '车主信息维护审核', icon: 'dashboard' }
      },
      {
        name: 'carOwnerChange',
        path: '/carOwnerChange',
        component: () => import('@/views/crm/cu/custCreatReview/carOwnerChange'),
        meta: { title: '车主变更审核', icon: 'dashboard' }
      },
      {
        name: 'keyInfo',
        path: '/keyInfo',
        component: () => import('@/views/crm/cu/custCreatReview/keyInfo'),
        meta: { title: '关键信息审核', icon: 'dashboard' }
      },
      // // 确认到店
      // {
      //   name: 'sureToShop',
      //   path: '/sureToShop',
      //   component: () => import('@/views/crm/coc/customerFollowUp/sureToShop'),
      //   meta: { title: '确认到店', icon: 'dashboard' }
      //   },
      // // 客户留档
      // {
      //   name: 'customerRemian',
      //   path: '/customerRemian',
      //   component: () => import('@/views/crm/coc/customerFollowUp/customerRemian'),
      //   meta: { title: '客户留档', icon: 'dashboard' }
      // },
      // 客户留档
      {
        name: 'changeowner',
        path: '/edit',
        component: () => import('@/views/crm/cu/OwnerChange/edit'),
        meta: { title: '变更人车关系', icon: 'dashboard' }
      },
      // // 客户留档
      // {
      //   name: 'customerRemian',
      //   path: '/customerRemian',
      //   component: () => import('@/views/crm/coc/customerFollowUp/customerRemian'),
      //   meta: { title: '客户留档', icon: 'dashboard' }
      // },

      // 结案延期申请审核（投诉）
      {
        name: 'ComplaintExReview',
        path: '/ComplaintExReview',
        component: () => import('@/views/crm/csc/ComplaintExReview'),
        meta: { title: '投诉延期审核x', icon: 'dashboard' }
      },
      {
        name: 'ComplaintMonitorDetail',
        path: '/ComplaintMonitorDetail',
        component: () =>
          import('@/views/crm/csc/ComplaintMonitor/ComplaintMonitorDetail'),
        meta: { title: '投诉延期审核', icon: 'dashboard' }
      },
      {
        name: 'edit',
        path: '/edit',
        component: () => import('@/views/crm/cu/OwnerChange/edit'),
        meta: { title: '变更人车关系', icon: 'dashboard' }
      },
      // 丢失电话回访处理
      {
        name: 'LostPhoneCallbackDeal',
        path: '/LostPhoneCallbackDeal',
        component: () => import('@/views/crm/csc/LostPhoneCallbackDeal'),
        meta: { title: '丢失电话回访处理', icon: 'dashboard' }
      },
      // 自定义页面管理--页面维护
      {
        name: 'pageMaintenance',
        path: '/pageMaintenance',
        component: () =>
          import('@/views/crm/marketCRM/HDNRGL/customPageManage/pageMaintenance'),
        meta: { title: '页面维护', icon: 'dashboard' }
      },
      // 意向客户跟进--活动跟踪
      {
        name: 'activityFollow',
        path: '/activityFollow',
        component: () =>
          import('@/views/crm/coc/customerFollowUp/intenCustomerFollow/activityFollow'),
        meta: { title: '商机跟进_活动跟踪', icon: 'dashboard' }
      },
      // 咨询处理
      {
        name: 'consulthand',
        path: '/consulthand',
        component: () => import('@/views/crm/csc/consult/consulthand'),
        meta: { title: '咨询处理', icon: 'dashboard' }
      },
      // 咨询回访
      {
        name: 'consultvisit',
        path: '/consultvisit',
        component: () => import('@/views/crm/csc/consult/consultvisit'),
        meta: { title: '咨询回访', icon: 'dashboard' }
      }
    ]
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export const resetRouter = function() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
