/**
 * description: 最小层组件：品牌、状态、省份城市等的模拟数据
 * author: yangmin
 * createdDate: 2019-07-16
*/
import Mock from 'mockjs'

// 品牌
const brandData = Mock.mock({
  'rows': [{
    'code': '1',
    text: '东风日产-日产'
  },
  {
    'code': '2',
    text: '东风日产-启辰'
  },
  {
    'code': '4',
    text: '东风日产-进入尼桑'
  }]
})

// 是否可用
const isEnableData = Mock.mock({
  'rows': [
    {
      code: '0',
      text: '否'
    },
    {
      code: '1',
      text: '是'
    }
  ]
})

// 设置状态
const setStatusData = Mock.mock({
  'rows': [
    {
      code: '0',
      text: '未设置'
    },
    {
      code: '1',
      text: '已设置'
    }
  ]
})

// 车型网格
const carTypeData = Mock.mock({
  'items|15': [{
    brandName: '东风日产-日产',
    carSeries: '新逍客',
    catType: 'DFL7200VBNL2-FJE',
    carColorCode: 'BDBALJWA36EXA',
    carColorName: '银灰色',
  }]
})

// 车系网格
const carSeriesData = Mock.mock({
  'items|15': [{
    brandName: '东风日产-日产',
    carSeriesCode: 'A36',
    catSeriesChinese: '西玛',
    catSeriesEnglish: 'A36'
  }]
})

// 颜色网格
const carColorData = Mock.mock({
  'items|15': [{
    brandName: '东风日产-日产',
    carSeries: '轩逸',
    carColorCode: 'BDBALJWA36EXA',
    carColorName: '银灰色',
  }]
})

// 车系弹框
const carSeriesDataM = Mock.mock({
  'items|15': [{
    brandName: '东风日产-日产',
    carSeriesCode: 'BDBALJWA36EXA',
    carSeriesName: '西玛',
    carSeriesEn: 'A36'
  }]
})

// 岗位网格
const positionData = Mock.mock({
  'items|15': [{
    positionCode: 'BDBALJWA36EXA',
    positionName: '二手车专员',
    apartment: '销售部',
  }]
})

//授权状态
const authorizationStatusData = Mock.mock({
  'rows': [
    {
      code: '0',
      text: '未授权'
    },
    {
      code: '1',
      text: '已授权'
    }
  ]
})

//仓库
const wareHouseInfo = Mock.mock({
  'rows': [
    {
      bigWareHouseName: "中心库",
      selected: false,
      partitionId: 1,
      isIndeterminate: false,
      wareHouse: [
        {
          code: "1",
          wareHouseName: "大连中心库",
          selected: false
        },
        {
          code: "2",
          wareHouseName: "花都中心库",
          selected: false
        },
        {
          code: "3",
          wareHouseName: "襄阳中心库",
          selected: false
        },
        {
          code: "4",
          wareHouseName: "郑州中心库",
          selected: false
        },
        {
          code: "5",
          wareHouseName: "中牟中心库",
          selected: false
        },
        {
          code: "6",
          wareHouseName: "广州中心库",
          selected: false
        },
        {
          code: "7",
          wareHouseName: "北京中心库",
          selected: false
        },
        {
          code: "8",
          wareHouseName: "上海中心库",
          selected: false
        },
        {
          code: "9",
          wareHouseName: "天津中心库",
          selected: false
        }
      ],
    },
    {
      bigWareHouseName: "配送库",
      selected: false,
      partitionId: 2,
      isIndeterminate: false,
      wareHouse: [
        {
          code: "10",
          wareHouseName: "北京配送中心",
          selected: false
        },
        {
          code: "11",
          wareHouseName: "大连水运配送库",
          selected: false
        },
        {
          code: "12",
          wareHouseName: "海口水运配送库",
          selected: false
        },
        {
          code: "13",
          wareHouseName: "南沙配送库",
          selected: false
        },
        {
          code: "14",
          wareHouseName: "上海配送中心",
          selected: false
        },
        {
          code: "15",
          wareHouseName: "西安配送中心",
          selected: false
        },
        {
          code: "16",
          wareHouseName: "烟台配送中心",
          selected: false
        },
        {
          code: "17",
          wareHouseName: "烟台水运配送库",
          selected: false
        },
        {
          code: "18",
          wareHouseName: "郑州铁路配送库",
          selected: false
        },
        {
          code: "19",
          wareHouseName: "重庆配送中心",
          selected: false
        },
        {
          code: "20",
          wareHouseName: "重庆水云配送库",
          selected: false
        }
      ]
    }, {

      bigWareHouseName: "分库",
      selected: false,
      partitionId: 3,
      isIndeterminate: false,

    }
  ]
})

// 仓库多选下拉列表
const wareHouseMulti = Mock.mock({
  'rows': [{
    code: '0',
    text: '大连中心库'
  },
  {
    code: '1',
    text: '花都中心库'
  },
  {
    code: '2',
    text: '深圳中心库'
  },
  {
    code: '3',
    text: '香港中心库'
  },
  {
    code: '4',
    text: '郑州中心库'
  }
  ]
})

// 到款银行 工商 招商
const cashInBank = Mock.mock({
  'rows': [{
    code: '1', text: '工商银行'
  }
    , { code: '2', text: '招商银行' }]
})

// 车系
const carSeries = Mock.mock({
  'rows': [
    {
      code: 'A36', text: '西玛'
    }, {
      code: 'B17', text: '新轩逸'
    },
    {
      code: 'C13', text: '新生代骐达'
    },
    {
      code: 'E52Q', text: '贵士(进口)'
    }
  ]
})

// 车型
const carType = Mock.mock({
  'rows': [{ code: '1', text: '东风日产车' }, { code: '2', text: '东风日产-轩逸' }, { code: '3', text: '东风日产-逍客' }]
})

// 车型配置
const carTypeConfig = Mock.mock({
  'rows': [
    { code: '132', text: '后雨刷' },
    { code: '133', text: '感应雨刷' },
    { code: '134', text: '真皮方向盘' },
    { code: '135', text: '方向盘上下调节' },
    { code: '136', text: '方向盘前后调节' },
    { code: '137', text: '方向盘电动调节' },
    { code: '138', text: '多功能方向盘' }
  ]
})
// 车型配置网格
const carTypeConfigData = Mock.mock({
  'items': [{
    brandName: '东风日产-启程',
    carSeries: '50系/10C',
    carType: 'DFL7166MCL5-SAV2',
    carTypeName: 'MT 时尚版',
    carTypeConfig: 'BDTALBF10CEXA---A-',
    displacement: '1.6L'
  }, {
    brandName: '东风日产-日产',
    carSeries: '50系/10C',
    carType: 'DFL7166MCL5-SNV',
    carTypeName: 'MT 精英版',
    carTypeConfig: 'BDTALBF10CEXA---A-',
    displacement: '1.6L'
  }, {
    brandName: '东风日产-启程',
    carSeries: '50系/10C',
    carType: 'DFL7166MCL6-SBV2',
    carTypeName: 'MT 豪华版',
    carTypeConfig: 'BDTALHF10CEXA---A-',
    displacement: '1.6L'
  }]
})

const regional = Mock.mock({
  'rows': [{
    BigArea: '华东一区',
    checked: false,
    SmallArea: [
      {
        Name: '上海区',
        checked: false,
        Area: [
          { Name: '上海诚隆', checked: false },
          { Name: '上海宝网', checked: false }]
      },
      {
        Name: '航嘉区',
        checked: false,
        Area: [{ Name: '海宁百盛', checked: false, }, { Name: '海宁旅行者', checked: false }]
      }
    ]
  }
  ]
})
//小区弹框数据
const smallAreaModalData = Mock.mock({
  'rows': [{
    bigArea: '华东一区',
    bigAreaCode:'001',
    checked: false,
    smallArea: [
      {
        name: '上海区',
        code:'01',
        checked: false
      },
      {
        name: '航嘉区',
        code:'02',
        checked: false
      },
      {
        name: '广州区',
        code:'03',
        checked: false
      },
      {
        name: '航嘉区',
        code:'04',
        checked: false
      }
    ]
  },{
    bigArea: '华东一区',
    bigAreaCode:'001',
    checked: false,
    smallArea: [
      {
        name: '上海区',
        code:'01',
        checked: false
      },
      {
        name: '航嘉区',
        code:'02',
        checked: false
      },
      {
        name: '广州区',
        code:'03',
        checked: false
      },
      {
        name: '航嘉区',
        code:'04',
        checked: false
      }
    ]
  },{
    bigArea: '华东一区',
    bigAreaCode:'001',
    checked: false,
    smallArea: [
      {
        name: '上海区',
        code:'01',
        checked: false
      },
      {
        name: '航嘉区',
        code:'02',
        checked: false
      },
      {
        name: '广州区',
        code:'03',
        checked: false
      },
      {
        name: '航嘉区',
        code:'04',
        checked: false
      }
    ]
  },{
    bigArea: '华东一区',
    bigAreaCode:'001',
    checked: false,
    smallArea: [
      {
        name: '上海区',
        code:'01',
        checked: false
      },
      {
        name: '航嘉区',
        code:'02',
        checked: false
      },
      {
        name: '广州区',
        code:'03',
        checked: false
      },
      {
        name: '航嘉区',
        code:'04',
        checked: false
      }
    ]
  },


  ]
})
//分配模式
const distributionModelData = Mock.mock({
  'rows': [{
    'code': '1',
    text: '实时分配'
  },
  {
    'code': '2',
    text: '批次分配'
  },
  {
    'code': '3',
    text: '系统分配'
  }]
})

// 用户小区
const userVillage=Mock.mock({
'rows':[{carBrand:'东风日产-日产',organize:'乘用车公司',user:'邓悄然',loginName:'cyc-dengqr',userType:'PV用户'}
,{carBrand:'东风日产-日产',organize:'小鹏汽车',user:'张雁',loginName:'zhangyan',userType:'PV用户'},
{carBrand:'东风日产-日产',organize:'小鹏汽车',user:'代颂娥',loginName:'daise',userType:'PV用户'},
{carBrand:'东风日产-启辰',organize:'乘用车公司',user:'张茂华',loginName:'cyc-zhangmh',userType:'DLR用户'},
{carBrand:'东风日产-启辰',organize:'神龙公司',user:'刘亚梅',loginName:'liuyamei',userType:'DLR用户'},
{carBrand:'东风日产-启辰',organize:'神龙公司',user:'易楠',loginName:'yinan',userType:'DLR用户'},
{carBrand:'东风日产-启辰',organize:'小鹏汽车',user:'客服中心',loginName:'customercare',userType:'DLR用户'},
{carBrand:'东风日产-日产',organize:'乘用车公司',user:'售后管理员',loginName:'pvadmin1',userType:'DLR用户'}]
})

const userDistributor=Mock.mock({
  'rows':[
    {carBrand:'东风日产-日产',userName:'邓悄然',loginName:'cyc-dengqr',userType:'PV用户',department:'市场部',distributor:'上海宝钢、上海冠松、广州丰日、广州恒源'},
    {carBrand:'东风日产-启辰',userName:'张雁',loginName:'zhangyan',userType:'PV用户',department:'网络发展科',distributor:'上海宝钢、上海冠松、广州丰日、广州恒源'},
    {carBrand:'东风日产-启辰',userName:'代颂娥',loginName:'daise',userType:'PV用户',department:'经销商指导科',distributor:'上海宝钢、上海冠松、广州丰日、广州恒源'},
    {carBrand:'东风日产-日产',userName:'张茂华',loginName:'cyc-zhangmh',userType:'DLR用户',department:'客户支援科',distributor:'上海宝钢、上海冠松、广州丰日、广州恒源'},
    {carBrand:'东风日产-启辰',userName:'刘亚梅',loginName:'liuyamei',userType:'DLR用户',department:'售后服务部',distributor:'上海宝钢、上海冠松、广州丰日、广州恒源'},
    {carBrand:'东风日产-日产',userName:'易楠',loginName:'yinan',userType:'DLR用户',department:'售后服务部',distributor:'上海宝钢、上海冠松、广州丰日、广州恒源'}]
})


const userChoose=Mock.mock({
  'rows':[
    {userName:'8哥',userCode:'1011141',store:'乘用车公司',department:'车辆业务科'},
    {userName:'CIP运维管理员',userCode:'1012081',store:'乘用车公司',department:'深圳联友科技有限公司测试'},
    {userName:'CWS备用',userCode:'CSR20006',store:'乘用车公司',department:'客户服务中心'}
  ]
})

const WareHouse = Mock.mock({
  'rows': [{ brandName: '东风启辰-启辰', WareHoseCode: 'A-1', WareHouseName: 'BAS', StoreName: '广州风日店', ANSWERCode: 'A12', WareHouseAddress: '广州风日店', Fax: '5322678', WareHouseManager: 'AA', isEffect: '是' }
    , { brandName: '东风启辰-启辰', WareHoseCode: 'A-2', WareHouseName: 'E22', StoreName: '广州风日店', ANSWERCode: 'ERQ', WareHouseAddress: '广州风日店', Fax: '5322678', WareHouseManager: 'XZ', isEffect: '是' }
  ]
})

const InteriorColor = Mock.mock({
  'rows': [{ carSeries: 'A36', ColorCode: 'Y', Color: '深内饰Y' },
  { carSeries: 'T312', ColorCode: 'A', Color: '深内饰A' },
  { carSeries: 'B17', ColorCode: 'G', Color: '深内饰G' }]
})

// 车系权限表格
const userCarSeriesJurisdiction = Mock.mock({
  'rows': [{ brandName: '东风启辰-启辰', userName: '霸哥', carSeries: 'A36', func: '采购单手工分配' },
  { brandName: '东风启辰-启辰', userName: '奇怪的上单', carSeries: 'B17', func: '经销商车型节配额设置' },
  { brandName: '东风启辰-日产', userName: '她叫乐芙兰', carSeries: 'C46', func: '经销商车型节配额设置' },
  { brandName: '东风启辰-日产', userName: '张小九', carSeries: 'T136', func: '采购单手工分配' },
  { brandName: '东风启辰-启辰', userName: '章工', carSeries: 'T312', func: '经销商车型节配额设置' },
  { brandName: '东风启辰-日产', userName: '张工', carSeries: 'B36', func: '车辆限制设置' },
  { brandName: '东风启辰-启辰', userName: '李星星', carSeries: 'A36', func: '模拟分配调用' }]
})

// 功能名称
const funcName = Mock.mock({
  'rows': [{ code: '1', text: '采购单手工分配' }, { code: '2', text: '专营店车型节额配置' }
    , { code: '3', text: '专营店基准车系节额配置' }, { code: '4', text: '配车解除' },
  { code: '5', text: '车辆限制设置' }, { code: '6', text: '采购单驳回' }
  ]
})
// 部门选择
const departmentChoose = Mock.mock({
  'rows': [{
    label: '根节点', children: [
      { label: '东风日产', children: [{ label: '东风日产1' }, { label: '东风日产2' }, { label: '东风日产3' }] },
      { label: '总部派驻', children: [{ label: '总部派驻1' }, { label: '总部派驻2' }, { label: '总部派驻3' }] },
      { label: '东风启辰', children: [{ label: '启辰部门Test' }, { label: '部门20190322' }, { label: '启辰部门20190624' }] }
    ]
  }]
})

// limitStatus
const limitStatus = Mock.mock({
  'rows': [{ code: '0', text: '无限制' }, { code: '1', text: '展厅车' }, { code: '2', text: '试乘试驾车' }, { code: '3', text: '代保管车' }, { code: '9', text: '其他限制' }]
})

const restrictingReason = Mock.mock({
  'rows': [{ code: '0', text: '空白' }, { code: '1', text: '全部' }, { code: '2', text: '车展' }, { code: '3', text: '大客户预留' }, { code: '4', text: '制作技术' }, { code: '0', text: '生产滞留' }]
})

const isETPT = Mock.mock({
  'rows': [{ code: '0', text: '是' }, { code: '1', text: '否' }]
})

const QualityStatus = Mock.mock({
  'rows': [{ code: 'A', text: '正常' }, { code: 'B', text: 'NG/待修' }, { code: 'C', text: '车损报废' }]
})
const WareHouseType = Mock.mock({
  'rows': [{ code: '1', text: '在线库存' }, { code: '0', text: '在库库存' }, { code: '2', text: 'OCF库存' }]
})

const carStatus = Mock.mock({
  'rows': [{ code: '0', text: "在库车" }, { code: '1', text: "在途车" }]
})

const isProduction = Mock.mock({
  'rows': [{ code: '0', text: '是' }, { code: '1', text: '否' }]
})

const isShowStock = Mock.mock({
  'rows': [{ code: '0', text: '是' }, { code: '1', text: '否' }]
})
export default [
  // 品牌
  {
    url: '/getBrand/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: brandData
      }
    }
  },

  // 是否可用
  {
    url: '/getIsEnable/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: isEnableData
      }
    }
  },

  // 设置状态
  {
    url: '/getSetStatus/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: setStatusData
      }
    }
  },

  // 车型网格
  {
    url: '/getCarType/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: carTypeData
      }
    }
  },

  // 车系弹框
  {
    url: '/getCarSeies/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: carSeriesDataM
      }
    }
  },
  // 小区弹框
  {
    url: '/getSmallAreaModal/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: smallAreaModalData
      }
    }
  },


  // 车系网格
  {
    url: '/getPosition/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: positionData
      }
    }
  },

  // 颜色网格
  {
    url: '/getCarColor/list',
    type: 'get',
    response: config => {
      return {
        code: 202000,
        data: carColorData
      }
    }
  },

  // 车系网格
  {
    url: '/getCarSeriesM/list',
    type: 'get',
    response: config => {
      return {
        code: 202000,
        data: carSeriesDataM
      }
    }
  },

  //授权状态
  {
    url: '/getAuthorizationStatus/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: authorizationStatusData
      }
    }
  },
  //仓库
  {
    url: '/getWareHouse/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: wareHouseInfo
      }
    }
  },
  // 仓库多选下拉列表
  {
    url: '/getWareHouseMulti/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: wareHouseMulti
      }
    }
  }, {
    url: '/getCashInBank/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: cashInBank
      }
    }
  },
  {
    url: '/getcarSeries/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: carSeries
      }
    }
  }, {
    url: '/getCarType1/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: carType
      }
    }
  }, {
    url: '/getCarTypeConfig/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: carTypeConfig
      }
    }
  }, {
    url: '/getCarTypeConfigData/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: carTypeConfigData
      }
    }
  },
  {
    url: '/getRegional/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: regional
      }
    }
  },
  {
    url: '/getDistributionModel/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: distributionModelData
      }
    }
  },{
    url: '/getUserVillage/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: userVillage
      }
    }
  },
  {
    // getUserDistributor
    url: '/getUserDistributor/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: userDistributor
      }
    }
  },
  {
    // isEffective
    url: '/getIsEffective/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: isEffective
      }
    }
  }, {
    url: '/WareHouse/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: WareHouse
      }
    }
  }, {
    // InteriorColor
    url: '/InteriorColor/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: InteriorColor
      }
    }
  }, {
    // 用户车系权限
    url: '/userCarSeriesJurisdiction/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: userCarSeriesJurisdiction
      }
    }
  },
  // 功能名称funcName
  {
    url: '/funcName/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: funcName
      }
    }
  }, {
    url: '/departmentChoose/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: departmentChoose
      }
    }
  },
  // 限制状态
  {
    url: '/limitStatus/list',
    type: 'get',
    response: config => {
      return limitStatus
    }
  },
  //限制原因
  {
    url: '/restrictingReason/list',
    type: 'get',
    response: config => {
      return restrictingReason
    }
  },
  // 是否是etpt
  {
    url: '/isETPT/list',
    type: 'get',
    response: config => {
      return isETPT
    }
  },
  // 质量状态
  {
    url: '/QualityStatus/list',
    type: 'get',
    response: config => {
      return QualityStatus
    }
  },
  // 库存类型
  {
    url: '/WareHouseType/list',
    type: 'get',
    response: config => {
      return WareHouseType
    }
  },
  // 车辆状态
  {
    url: '/carStatus/list',
    type: 'get',
    response: config => {
      return carStatus
    }
  },

  {
    // 库存是否显示
    url: '/isShowStock/list',
    type: 'get',
    response: config => {
      return isShowStock
    }
  },
  {
    // 是否订单生产车型
    url: '/isProduction/list',
    type: 'get',
    response: config => {
      return isProduction
    }
  }
]
