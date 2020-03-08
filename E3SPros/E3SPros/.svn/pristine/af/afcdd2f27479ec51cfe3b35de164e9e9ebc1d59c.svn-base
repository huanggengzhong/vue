/**
 * description: 车辆产品资料模拟数据
 * author: luojx
 * createdDate: 2019-07-23
 */
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
var cloneObj = function (obj) {
  var newObj = {}
  if (obj instanceof Array) {
    newObj = []
  }
  for (var key in obj) {
    var val = obj[key]
    newObj[key] = typeof val === 'object' ? cloneObj(val) : val
  }
  return newObj
}
const mdmCarBrandQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarBrandQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        carBrandCode: '1',
        carBrandCn: '东方日产-日产',
        carBrandEn: 'Nissian',
        isEnable: '1',
        updateControlId: '22caee2daceb40e7bd2601cb34893862'
      },
      {
        carBrandCode: '2',
        carBrandCn: '东方日产-启辰',
        carBrandEn: 'Venucia',
        isEnable: '1',
        updateControlId: '22caee2daceb40e7bd2601cb34893861'
      },
      {
        carBrandCode: '4',
        carBrandCn: '东方日产-进口尼桑',
        carBrandEn: '进口尼桑',
        isEnable: '1',
        updateControlId: '22caee2daceb40e7bd2601cb34893863'
      },
      {
        carBrandCode: '99',
        carBrandCn: '东方日产-其它',
        carBrandEn: 'Other',
        isEnable: '0',
        updateControlId: '22caee2daceb40e7bd2601cb34893864'
      }
      ]
    }
  }
})

// 品牌保存
const mdmCarBrandMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarBrandMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

// 竞争品牌查询
const mdmCompBrandQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCompBrandQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        compBrandCode: '1',
        compBrandCn: '法拉利',
        compBrandEn: 'Ferrari',
        compBrandSID: 'a37skil3',
        creator: '刘松',
        createdDate: '2019-03-12',
        modifyName: '杨婷',
        lastUpdatedDate: '2019-04-12',
        isEnable: '1',
        isEnableName: '是',
        updateControlId: '22caee2daceb40e7bd2601cb34893864'
      },
      {
        compBrandCode: '2',
        compBrandCn: '奔驰',
        compBrandEn: 'Mercedes-Benz',
        compBrandSID: '829skd7hj',
        creator: '万维',
        createdDate: '2019-03-21',
        modifyName: '何华',
        lastUpdatedDate: '2019-04-17',
        isEnable: '0',
        isEnableName: '否',
        updateControlId: '22caee2daceb40e7bd2601cb3483493862'
      },
      {
        compBrandCode: '3',
        compBrandCn: '宝马',
        compBrandEn: 'BMW',
        compBrandSID: '08j7h227hk',
        creator: '李进',
        createdDate: '2019-01-21',
        modifyName: '许巍',
        lastUpdatedDate: '2019-02-17',
        isEnable: '0',
        isEnableName: '否',
        updateControlId: '22caee2daceb40e7bd2601cb34893241'
      },
      {
        compBrandCode: '4',
        compBrandCn: '奥迪',
        compBrandEn: 'Audi',
        compBrandSID: '7462829sws',
        creator: '路路',
        createdDate: '2019-07-12',
        modifyName: '杨紫',
        lastUpdatedDate: '2019-10-12',
        isEnable: '1',
        isEnableName: '是',
        updateControlId: '22caee2daceb40e7bd2601cb34893863'
      },
      ]
    }
  }
})
// 竞争品牌保存
const mdmCompBrandMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCompBrandMutationSave: {
      result: '1',
      'records': 1,
      msg: ''
    }
  }
})

// 竞争车系查询
const mdmCcompCarseriesQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCcompCarseriesQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows': [
        {
          compBrandCn: '法拉利',
          compBrandCode: '1',
          compBrandEn: 'Ferrari',
          compCarseriesID: 'AABB1',
          compCarseriesCode: '1',
          compCarseriesName: 'Ferrari-Enzo',
          compCarSeriesRowID: '1',
          creator: '刘松',
          createdDate: '2019-03-12',
          modifyName: '杨婷',
          lastUpdatedDate: '2019-04-12',
          isEnable: '1',
          isEnableName: '是',
          updateControlID: '22caee2daceb40e7bd2601cb34893863',
        },
        {
          compBrandCode: '2',
          compBrandCn: '奔驰',
          compBrandEn: 'Mercedes-Benz',
          compCarseriesID: 'AABB2',
          compCarseriesCode: '2',
          compCarseriesName: 'Benz-G350',
          compCarSeriesRowID: '2',
          creator: '万维',
          createdDate: '2019-03-21',
          modifyName: '何华',
          lastUpdatedDate: '2019-04-17',
          isEnable: '0',
          isEnableName: '否',
          updateControlID: '22caee2daceb40e7bd2601cb34899876',
        },
        {
          compBrandCode: '3',
          compBrandCn: '宝马',
          compBrandEn: 'BMW',
          compCarseriesID: 'AABB3',
          compCarseriesCode: '3',
          compCarseriesName: 'BMW-X7',
          compCarSeriesRowID: '3',
          creator: '李进',
          createdDate: '2019-01-21',
          modifyName: '许巍',
          lastUpdatedDate: '2019-02-17',
          isEnable: '0',
          isEnableName: '否',
          updateControlID: '22caee2daceb40e7bd2601cb34899876',
        },
        {
          compBrandCode: '4',
          compBrandCn: '奥迪',
          compBrandEn: 'Audi',
          compCarseriesID: 'AABB4',
          compCarseriesCode: '4',
          compCarseriesName: 'Audi-A8',
          compCarSeriesRowID: '4',
          creator: '路路',
          createdDate: '2019-07-12',
          modifyName: '杨紫',
          lastUpdatedDate: '2019-10-12',
          isEnable: '1',
          isEnableName: '是',
          updateControlID: '22caee2daceb40e7bd2601cb34893873',
        },
      ]
    }
  }
})

// 竞争车系保存
const mdmCcompCarseriesMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCcompCarseriesMutationSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 竞争车型查询
const mdmCompCarTypeQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCompCarTypeQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 1,
      records: 30,
      'rows': [{
        carBrandCn: '东风日产-日产',
        carBrandCode: '1',
        compBrandCode: 'b1',
        compBrandCn: '法拉利',
        compBrandEn: 'Ferrari',
        compCarseriesID: 's27395',
        compCarseriesCode: 's1',
        compCarseriesName: '法拉利-拉法',
        compCarseriesEn: 'Ferrari-LaFerrari',
        compCartypeID: 't317029',
        compCartypeSID: '1',
        compCartypeCode: 't1',
        compCartypeCn: '812 SUPERFAST',
        creator: '刘松',
        createdDate: '2019-03-12',
        modifyName: '杨婷',
        lastUpdatedDate: '2019-04-12',
        isEnable: '1',
        isEnableName: '是',
        updateControlID: '22caee2daceb40e7bd2601cb34893863',
      },
      {
        carBrandCn: '东风日产-启辰',
        carBrandCode: '2',
        compBrandCode: 'b2',
        compBrandCn: '奔驰',
        compBrandEn: 'Mercedes-Benz',
        compCarseriesID: 's28760',
        compCartypeSID: '2',
        compCarseriesCode: '2',
        compCarseriesName: '奔驰C级',
        compCarseriesEn: 'Benz-C',
        compCartypeID: 't378390',
        compCartypeCode: 't2',
        compCartypeCn: 'C300L',
        creator: '万维',
        createdDate: '2019-03-21',
        modifyName: '何华',
        lastUpdatedDate: '2019-04-17',
        isEnable: '0',
        isEnableName: '否',
        updateControlID: '22caee2daceb40e7bd2601cb34899876',
      },
      {
        carBrandCn: '东风日产-进口尼桑',
        carBrandCode: '4',
        compBrandCode: 'b3',
        compBrandCn: '宝马',
        compBrandEn: 'BMW',
        compCarseriesID: 's47812',
        compCarseriesCode: 's3',
        compCarseriesName: '宝马7系',
        compCarseriesEn: 'BMW-X7',
        compCartypeID: 't47810',
        compCartypeSID: '3',
        compCartypeCode: 't3',
        compCartypeCn: 'M760Li',
        creator: '李进',
        createdDate: '2019-01-21',
        modifyName: '许巍',
        lastUpdatedDate: '2019-02-17',
        isEnable: '0',
        isEnableName: '否',
        updateControlID: '22caee2daceb40e7bd2601cb34899876',
      },
      {
        carBrandCn: '东风日产-其它',
        carBrandCode: '99',
        compBrandCode: 'b4',
        compBrandCn: '奥迪',
        compBrandEn: 'Audi',
        compCarseriesID: 's77890',
        compCarseriesCode: 's4',
        compCarseriesName: '奥迪-A8',
        compCarseriesEn: 'Audi-A8',
        compCartypeID: 't78013',
        compCartypeSID: '4',
        compCartypeCode: 't4',
        compCartypeCn: 'TFSI quattro',
        creator: '路路',
        createdDate: '2019-07-12',
        modifyName: '杨紫',
        lastUpdatedDate: '2019-10-12',
        isEnable: '1',
        isEnableName: '是',
        updateControlID: '22caee2daceb40e7bd2601cb34893873',
      },
      ]
    }
  }
})

// 竞争车型保存
const mdmCompCarTypeMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCompCarTypeMutationSave: {
      result: '1',
      msg: '保存成功!'
    }
  }
})

// 车型小类查询
const mdmSmallCarTypeQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmSmallCarTypeQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 1,
      records: 30,
      'rows': [{
        mdmCarBrandExtend: {
          carBrandCn: '东风日产-日产',
          carBrandCode: '1'
        },
        mdmMiddleCarTypeExtend: {
          mdmLargeCarTypeExtend: {
            mdmVeBaseSeriesExtend: {
              mdmVeCarSeriesExtend: {
                carSeriesCode: 'V13221',
                carSeriesEn: 'Nissian'
              }
            }
          }
        },
        carSeriesId: 'AABB1',
        smallCarTypeId: '11111111111',
        smallCarTypeCode: '23F4G34G3G',
        smallCarTypeCn: '宝马',
        smallCarTypeEn: 'BMW',
        isEnable: '0',
        isEnableCn: '否',
        updateControlId: '1111111111222221',
        stdCarId: 'xxxxxxx'
      },
      {
        mdmCarBrandExtend: {
          carBrandCn: '东风日产-启辰',
          carBrandCode: '2'
        },
        mdmMiddleCarTypeExtend: {
          mdmLargeCarTypeExtend: {
            mdmVeBaseSeriesExtend: {
              mdmVeCarSeriesExtend: {
                carSeriesCode: 'V1344',
                carSeriesEn: 'Venucia'
              }
            }
          }
        },
        carSeriesId: 'AABB2',
        smallCarTypeId: '11111111111',
        smallCarTypeCode: '3RF234G23F',
        smallCarTypeCn: '奔驰',
        smallCarTypeEn: 'Benz',
        isEnable: '1',
        isEnableCn: '是',
        updateControlId: '1111111111222221',
        stdCarId: 'xxxxxxx'
      },
      {
        mdmCarBrandExtend: {
          carBrandCn: '东风日产-进口尼桑',
          carBrandCode: '4'
        },
        mdmMiddleCarTypeExtend: {
          mdmLargeCarTypeExtend: {
            mdmVeBaseSeriesExtend: {
              mdmVeCarSeriesExtend: {
                carSeriesCode: 'V1344232',
                carSeriesEn: '进口尼桑'
              }
            }
          }
        },
        carSeriesId: 'AABB3',
        smallCarTypeId: '11111111111',
        smallCarTypeCode: '434G34G34G',
        smallCarTypeCn: '奥迪',
        smallCarTypeEn: 'Audi',
        isEnable: '0',
        isEnableCn: '否',
        updateControlId: '1111111111222221',
        stdCarId: 'xxxxxxx'
      },
      ]
    }
  }
})

// 车型配置查询
const mdmVeCarConfigQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmVeCarConfigQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 1,
      records: 13,
      'rows|13': [{
        carBrandCn: '东风日产-日产',
        mdmVeCarSeriesExtend: {
          carSeriesCn: '新奇骏'
        },
        mdmSmallCarTypeExtend: {
          smallCarTypeId: 'xxxxxxxx',
          smallCarTypeCode: 'DFL72AL2-LNC1',
          smallCarTypeCn: 'DFL72AL2-LNC1'
        },
        carConfigId: '1111113322233322',
        Cn: 'FDRALWZJ11EXA-----',
        carConfigCn: 'FDRALWZJ11EXA-----',
        motorType: 'A',
        carConfigCode: '321325113',
        powerType: '汽油动力',
        batteryType: '乙醇电池',
        carTypeShortCode: '456161',
        emissionStandard: '国标',
        eleConType: '智能',
        supplyStatus: '正常',
        carConfigCodeCn: 'A',
        isNewCar: '是',
        orderNo: "1",
        purState: '2.0L',
        isEnable: '1',
        updateControlId: 'ccccccc111122222'
      }
      ]
    }
  }
})

// 车型配置车身颜色关系查询
const mdmCarTypeColorQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarTypeColorQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 1,
      records: 13,
      'rows|5': [{
        carTypeColorId: '1111111112c4',
        mdmVeCarConfigExtend: {
          carConfigId: 'xdfdsssdd',
          carConfigCn: 'B2BJ36EXA-----'
        },
        carColorId: 'xd33343333',
        mdmCarColorExtend: {
          carColorCode: 'QAB',
          carColorName: '珠光白/QAB'
        },
        CarIncolorId: 'AFHKQ&&',
        supplyColorPrice: '1000',
        isEnable: '1',
        updateControlId: 'HFHFOQ71684'
      }]
    }
  }
})

/**
 *  内饰色查询
 * xulfan
 */
const mdmCarTypeIncolorQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarTypeIncolorQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        mdmCarIncolorExtend: {
          carIncolorCode: 'B',
          carIncolorName: '黑色'
        },
        carConfigId: 'xhjukdssdd',
        carIncolorId: '711SEVJH',
        supplyColorPrice: 100,
        isEnable: '1',
        carTypeIncolorId: 'B187HD',
        updateControlId: 'HAIFIQH#3HFA**&'
      },
      {
        mdmCarIncolorExtend: {
          carIncolorCode: 'B',
          carIncolorName: '黑色'
        },
        carConfigId: 'xhjukdssdd',
        carIncolorId: '711SEVJH',
        supplyColorPrice: 100,
        isEnable: '0',
        carTypeIncolorId: 'B187HD',
        updateControlId: 'HAIFIQH#3HFA**&'
      },
      {
        mdmCarIncolorExtend: {
          carIncolorCode: 'B',
          carIncolorName: '黑色'
        },
        carConfigId: 'xhjukdssdd',
        carIncolorId: '711SEVJH',
        supplyColorPrice: 100,
        isEnable: '0',
        carTypeIncolorId: 'B187HD',
        updateControlId: 'HAIFIQH#3HFA**&'
      },
      {
        mdmCarIncolorExtend: {
          carIncolorCode: 'B',
          carIncolorName: '黑色'
        },
        carConfigId: 'xhjukdssdd',
        carIncolorId: '711SEVJH',
        supplyColorPrice: 100,
        isEnable: '1',
        carTypeIncolorId: 'B187HD',
        updateControlId: 'HAIFIQH#3HFA**&'
      }]
    }
  }
})

/**
 * 内饰色保存
 * xulfan
 */
const mdmCarTypeIncoloMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarTypeIncoloMutationSave: {
      result: '1',
      msg: ''
    }
  }
})
/**
 * 车型配置车身颜色关系查询 - 车身颜色保存
 * xulfan
 */
const mdmCarTypeColorMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarTypeColorMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

// 内饰色查询
const mdmCarIncolorQueryList = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarIncolorQueryList: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 10,
      pages: 2,
      records: 13,
      'rows|10': [{
        oemCode: '1333',
        groupCode: '1344',
        carIncolorId: '1',
        updateControlId: '2232232323322323',
        supplyStatusCn: '生产供应',
        supplyStatus: 'SP',
        isEnable: '1',
        isEnableCn: '是',
        carBrandCode: '1',
        carIncolorNameCode: '深内饰Y/B12333',
        mdmCarBrandExtend: {
          carBrandCn: '东风日产-日产',
          carIncolorName: '深内饰Y',
          carIncolorCode: 'B12333'
        }
      }
      ]
    }
  }
})

// 车辆颜色查询
const mdmCarColorQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarColorQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          carColorId: '1',
          carBrandCode: '1',
          carColorCode: 'A40',
          carColorName: '珊瑚红A40',
          supplyStatus: 'SP',
          supplyStatusCn: '生产供应',
          isEnable: '1',
          mdmCarBrandExtend: {
            carBrandCn: '东风日产-日产'
          },
          updateControlId: 'zxcvbnm'
        },
        {
          carColorId: '2',
          carBrandCode: '1',
          carBrandCn: '东风日产-日产',
          carColorCode: 'B40',
          carColorName: '玫瑰红B40',
          supplyStatus: 'SP',
          supplyStatusCn: '生产供应',
          isEnable: '1',
          mdmCarBrandExtend: {
            carBrandCn: '东风日产-日产'
          },
          updateControlId: 'asdfghjkl'
        }
      ]
    }
  }
})

// 车辆颜色保存
const mdmCarColorMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarColorMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

// 集团组织架构查询
const mdmOrgInfoQueryGroupMenueByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgInfoQueryGroupMenueByPage: {
      result: '1',
      msg: '',
      rows: [
        {
          label: '一级 1',
          groupType: '33',
          groupCode: '123',
          groupName: '一级',
          isEnable: 1,
          children: [{
            label: '二级 1-1',
            groupType: '22',
            groupCode: '123',
            groupName: '二级 1-1',
            isEnable: 1,
            children: [{
              label: '三级 1-1-1',
              groupType: '444',
              groupCode: '123',
              groupName: '三级 1-1-1'
            }]
          }]
        }]

    }
  }
})

// 车系编码
const data = Mock.mock({
  query: {
    result: '1',
    msg: '',
    data: {
      mdmVeCarSeriesQueryListForPage: {
        result: '1',
        records: 4,
        pageindex: 1,
        pages: 1,
        msg: '查询成功',
        rows: [{
          carSeriesCode: 'V13221',
          carSeriesCn: '东方日产-日产',
          carSeriesEn: 'Nissian',
          carBrandCode: '22caee2daceb40e7bd2601cb34893862',
          sapCarseriesCode: '22caee2daceb40e7bd2601cb34893862',
          sCarseriesDesc: '22caee2daceb40e7bd2601cb34893862',
          orderNo: 1,
          isEnable: '启用'
        },
        {
          carSeriesCode: 'V132',
          carSeriesCn: '东方日产-启辰',
          carSeriesEn: 'Venucia',
          carBrandCode: '22caee2daceb40e7bd2601cb34893862',
          sapCarseriesCode: '22caee2daceb40e7bd2601cb34893862',
          sCarseriesDesc: '22caee2daceb40e7bd2601cb34893862',
          orderNo: 2,
          isEnable: '启用'
        },
        {
          carSeriesCode: 'V1344',
          carSeriesCn: '东方日产-进口尼桑',
          carSeriesEn: '进口尼桑',
          carBrandCode: '22caee2daceb40e7bd2601cb34893862',
          sapCarseriesCode: '22caee2daceb40e7bd2601cb34893862',
          sCarseriesDesc: '22caee2daceb40e7bd2601cb34893862',
          orderNo: 3,
          isEnable: '启用'

        },
        {
          carSeriesCode: 'V1341',
          carSeriesCn: '东方日产-其它',
          carSeriesEn: 'Other',
          carBrandCode: '22caee2daceb40e7bd2601cb34893862',
          sapCarseriesCode: '22caee2daceb40e7bd2601cb34893862',
          sCarseriesDesc: '22caee2daceb40e7bd2601cb34893862',
          orderNo: 4,
          isEnable: '启用'
        }
        ]
      }
    }
  }
})

// 区县管理
const mdmOrgZoneQueryFindAll = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgZoneQueryFindAll: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [{
        communityId: 'V13221',
        communityName: '洱源',
        provinceId: '234',
        provinceName: '云南',
        cityId: '23422',
        cityName: '大理',
        isEnable: 1,
        updateControlId: '22caee2daceb40e7bd2601cb34893862'
      }
      ]
    }
  }
})

// 区县保存
const mdmOrgCommutiySave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmOrgCommutiySave: {
      result: '1',
      msg: '保存成功'
    }
  }
})

// 内饰色保存
const mdmCarIncolorMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmCarIncolorMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

export default [
  // 品牌查询
  {
    url: orgApis.mdmCarBrandQueryByPage.APIUrl + cH + 'v=' + orgApis.mdmCarBrandQueryByPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCarBrandQueryByPage
    }
  },
  // 品牌保存
  {
    url: orgApis.mdmCarBrandBizSave.APIUrl + cH + 'v=' + orgApis.mdmCarBrandBizSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCarBrandMutationSave
    }
  },
  // 竞争品牌查询
  {
    url: orgApis.mdmCompBrandQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmCompBrandQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCompBrandQueryFindAll
    }
  },
  // 竞争品牌保存
  {
    url: orgApis.mdmCompBrandMutationSave.APIUrl + cH + 'v=' + orgApis.mdmCompBrandMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCompBrandMutationSave
    }
  },
  // 竞争车系查询
  {
    url: orgApis.mdmCcompCarseriesQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmCcompCarseriesQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCcompCarseriesQueryFindAll
    }
  },
  // 竞争车系保存
  {
    url: orgApis.mdmCcompCarseriesMutationSave.APIUrl + cH + 'v=' + orgApis.mdmCcompCarseriesMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCcompCarseriesMutationSave
    }
  },
  // 竞争车型查询
  {
    url: orgApis.mdmCompCarTypeQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmCompCarTypeQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCompCarTypeQueryFindAll
    }
  },
  // 竞争车型保存
  {
    url: orgApis.mdmCompCarTypeMutationSave.APIUrl + cH + 'v=' + orgApis.mdmCompCarTypeMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCompCarTypeMutationSave
    }
  },

  // 车型小类查询
  {
    url: orgApis.mdmSmallCarTypeQueryListForPage.APIUrl + cH + 'v=' + orgApis.mdmSmallCarTypeQueryListForPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmSmallCarTypeQueryListForPage
    }
  },

  // 车型配置查询
  {
    url: orgApis.mdmVeCarConfigQueryListForPage.APIUrl + cH + 'v=' + orgApis.mdmVeCarConfigQueryListForPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmVeCarConfigQueryListForPage
    }
  },

  // 车型配置车身颜色关系查询
  {
    url: orgApis.mdmCarTypeColorQueryListForPage.APIUrl + cH + 'v=' + orgApis.mdmCarTypeColorQueryListForPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCarTypeColorQueryListForPage
    }
  },
  /**
   * 车型配置车身颜色-内饰色保存
   * xulfan
   */
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmCarTypeIncoloMutationSave',
    type: 'post',
    response: config => {
      return mdmCarTypeIncoloMutationSave
    }
  },
  /**
   * 车型配置车身颜色-车身色保存
   * xulfan
   */
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmCarTypeColorMutationSave',
    type: 'post',
    response: config => {
      return mdmCarTypeColorMutationSave
    }
  },

  // 车型配置内饰关系查询
  {
    url: orgApis.mdmCarTypeIncolorQueryListForPage.APIUrl + cH + 'v=' + orgApis.mdmCarTypeIncolorQueryListForPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCarTypeIncolorQueryListForPage
    }
  },
  // 车辆颜色查询
  {
    url: orgApis.mdmCarColorQueryListForPage.APIUrl + cH + 'v=' + orgApis.mdmCarColorQueryListForPage.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCarColorQueryListForPage
    }
  },
  // 车辆颜色保存
  {
    url: orgApis.mdmCarColorMutationSave.APIUrl + cH + 'v=' + orgApis.mdmCarColorMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCarColorMutationSave
    }
  },
  // 集团组织架构查询
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=mdmOrgInfoQueryGroupMenueByPage',
    type: 'post',
    response: config => {
      return mdmOrgInfoQueryGroupMenueByPage
    }
  },
  // 车系编码
  {
    // url:RegExp(/\/ly\/mp\/busicen\/orc\/graphql\.do\?/),
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=mdmVeCarSeriesQueryListForPage',
    type: 'post',
    response: config => {
      // 获取查询条件
      var params = config.body.variables
      //  var query =data.query;
      var dataInfo = config.body.variables.dataInfo
      var response = []
      var str1 = config.body.query.substring(config.body.query.indexOf('{'))
      var inputType = str1.substring(1, str1.indexOf('('))
      var returnData = cloneObj(data.query)
      // 需要查询的条件 单一 没有这个条件就注释
      if (dataInfo.carBrandCn !== '') {
        for (var i = 0; i < returnData.data[inputType].rows.length; i++) {
          if (returnData.data[inputType].rows[i].carBrandCn === params.dataInfo.carBrandCn) {
            response.push(returnData.data[inputType].rows[i])
          }
        }
        returnData.data[inputType].rows = response
        returnData.data[inputType].records = response.length
      }

      // 分页查询
      if (params.pageIndex === 1) {
        returnData.data[inputType].rows = returnData.data[inputType].rows.slice(0, params.pageSize)
      } else if (params.pageIndex !== 1 && params.pageIndex !== returnData.data[inputType].pages + 1) {
        returnData.data[inputType].rows = returnData.data[inputType].rows.slice(parseInt(params.pageIndex * params.pageSize - params.pageSize), params.pageIndex * params.pageSize)
      } else {
        returnData.data[inputType].rows = returnData.data[inputType].rows.slice(-(returnData.data[inputType].records) % params.pageSize)
      }
      /*
        //普通查询
         var query =data.query;
      */

      return {
        ...returnData
        // ...query
      }
    }
  },
  // 区县查询
  {
    url: orgApis.mdmOrgZoneQueryFindAll.APIUrl + cH + 'v=' + orgApis.mdmOrgZoneQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgZoneQueryFindAll
    }
  },

  // 区县保存
  {
    url: orgApis.mdmOrgCommutiySave.APIUrl + cH + 'v=' + orgApis.mdmOrgCommutiySave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmOrgCommutiySave
    }
  },

  // 内饰色保存
  {
    url: orgApis.mdmCarIncolorMutationSave.APIUrl + cH + 'v=' + orgApis.mdmCarIncolorMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCarIncolorMutationSave
    }
  },

  // 内饰色查询
  {
    url: orgApis.mdmCarIncolorQueryList.APIUrl + cH + 'v=' + orgApis.mdmCarIncolorQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return mdmCarIncolorQueryList
    }
  }

]
