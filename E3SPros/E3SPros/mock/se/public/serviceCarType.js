import Mock from 'mockjs'
import { seApis } from '../../../src/api/graphQLApiList/se'
const cH = '/'
import { serviceCarType } from '../../../src/api/graphQLApiList/se'

const carState = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    carState: {
      'result': '1',
      'rows': [{
        stateId: '0',
        stateName: '全部'
      }, {
        stateId: '1',
        stateName: '已维护'
      }, {
        stateId: '2',
        stateName: '未维护'
      }]
    }
  }
})

const startupState = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    startupState: {
      'result': '1',
      'rows': [{
        stateId: '0',
        stateName: '全部'
      }, {
        stateId: '1',
        stateName: '启动'
      }, {
        stateId: '2',
        stateName: '禁用'
      }]
    }
  }
})

const ServiceCarType002 = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    ServiceCarType002: {
      'result': '1',
      'pageindex'	:1,	
      'pages' :1,	
      'records' :1,	
      'records' :1,	
      'rows': [{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'东风日产',
        CAR_SERIES_CODE:'123124241',
        CAR_SERIES_CN:'GSGEBDSBDF',
        CAR_SERIES_CODES:'34624623524',
        CAR_SERIES_CNS:'SDGWEBSDSDF',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'VDSDSDVSDBS',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'SDVSDBREHBDF',
        IS_DUTY_CAR_TYPE_CN	:'sdvsdbsdb',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'0',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      },{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'东风日产',
        CAR_SERIES_CODE:'123124241',
        CAR_SERIES_CN:'twegwe',
        CAR_SERIES_CODES:'rew',
        CAR_SERIES_CNS:'SDGWEBrweSDSDF',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'2rwegew',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'wqfqwf23',
        IS_DUTY_CAR_TYPE_CN	:'gdsfwefw',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'1',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      },{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'东风日产',
        CAR_SERIES_CODE:'123124241',
        CAR_SERIES_CN:'32r32r23twe',
        CAR_SERIES_CODES:'34624623524',
        CAR_SERIES_CNS:'SDGWEBSDSDF',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'VDSDSDVSDBS',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'SDVSDBREHBDF',
        IS_DUTY_CAR_TYPE_CN	:'sdvsdbsdb',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'1',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      },{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'东风日产',
        CAR_SERIES_CODE:'123124241',
        CAR_SERIES_CN:'rwqeqw',
        CAR_SERIES_CODES:'r32',
        CAR_SERIES_CNS:'r32r23t',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'VDSDSDVSDBS',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'SDVSDBREHBDF',
        IS_DUTY_CAR_TYPE_CN	:'sdvsdbsdb',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'1',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      },{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'东风日产',
        CAR_SERIES_CODE:'32',
        CAR_SERIES_CN:'23rwerewt',
        CAR_SERIES_CODES:'34624623524',
        CAR_SERIES_CNS:'tewrwerwe',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'etwerwer32',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'SDVSDBREHBDF',
        IS_DUTY_CAR_TYPE_CN	:'sdvsdbsdb',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'1',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      },{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'东风日产',
        CAR_SERIES_CODE:'123124241',
        CAR_SERIES_CN:'t23rewr',
        CAR_SERIES_CODES:'34624623524',
        CAR_SERIES_CNS:'SDGWEBSDSDF',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'t23rwerwe',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'SDVSDBREHBDF',
        IS_DUTY_CAR_TYPE_CN	:'t23tewrw',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'1',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      },{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'东风日产',
        CAR_SERIES_CODE:'123132t32te24241',
        CAR_SERIES_CN:'23tewtweg',
        CAR_SERIES_CODES:'34624623524',
        CAR_SERIES_CNS:'t23te',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'rwer23r',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'SDVSDBREHBDF',
        IS_DUTY_CAR_TYPE_CN	:'sdvsdbsdb',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'1',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      },{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'日产',
        CAR_SERIES_CODE:'34t3',
        CAR_SERIES_CN:'t34tret',
        CAR_SERIES_CODES:'34624623524',
        CAR_SERIES_CNS:'23r3f',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'t23teg',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'SDVSDBREHBDF',
        IS_DUTY_CAR_TYPE_CN	:'3t23te',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'1',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      },{
        CAR_BRAND_CODE:'21424123',	
        CAR_BRAND_CN:'东风-日产',
        CAR_SERIES_CODE:'123124241',
        CAR_SERIES_CN:'fsdgweg',
        CAR_SERIES_CODES:'gwe343',
        CAR_SERIES_CNS:'t34ter',
        SMALL_CAR_TYPE_CODE	:'3r3252323',
        SMALL_CAR_TYPE_CN	:'43t34te',
        SERVICE_CAR_TYPE:'DSVSDBSBEBH',
        IS_DUTY_CAR_TYPE:'SDVSDBREHBDF',
        IS_DUTY_CAR_TYPE_CN	:'t34tgre',
        SMALL_CAR_TYPE_ID	:'safdsgewgw',
        UPDATE_CONTROL_ID	:'sdvsdbsdb',
        S_CARSERIES_CODE:'sdvsdbsdb',
        CAR_CONFIG_CODE:'sdvsdbsdb',
        POWER_TYPE:'sdvsdbsdb',
        SUPPLY_STATUS_NAME	:'sdvsdbsdb',	
        SUPPLY_STATUS	:'1',
        CAR_CONFIG_CN:'sdvsdbsdb',
        OEM_CODE		:'sdvsdbsdb',
        GROUP_CODE		:'sdvsdbsdb',
        OEM_ID		:'sdvsdbsdb',
        GROUP_ID		:'sdvsdbsdb',
      }]
    }
  }
})

export default [
  {
    url: serviceCarType.carState.APIUrl + cH + 'v=' + serviceCarType.carState.ServiceCode,
    type: 'post',
    response: config => {
      return carState
    }
  },
  {
    url: serviceCarType.startupState.APIUrl + cH + 'v=' + serviceCarType.startupState.ServiceCode,
    type: 'post',
    response: config => {
      return startupState
    }
  },
  {
    url: serviceCarType.ServiceCarType002.APIUrl + cH + 'v=' + serviceCarType.ServiceCarType002.ServiceCode,
    type: 'post',
    response: config => {
      return ServiceCarType002
    }
  }
]

