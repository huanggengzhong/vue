import Mock from 'mockjs'

const cH = '/'
const mdmVeCarSeriesQueryListForPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmVeCarSeriesQueryListForPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows': [
        {
          carBrandCn: '东风日产',
          carSeriesCode: 'J11',
          carSeriesCn: '新逍客',
          carSeriesEn: 'J11',
          orderNo: '1',
          isEnable: '1',
          // 添加字段
          carBrandCode: '1',
          carSeriesId: 'AABB1',
          partSeriesCode: 'AB36',
          beginDate: '2019-06-21',
          carBrandcode: '东方日产-启辰',
          dlrShortName: '深圳裕朋',
          endDate: '2020-06-21'
        },
        {
          carBrandCn: '东风日产',
          carSeriesCode: 'A36',
          carSeriesCn: '西玛',
          carSeriesEn: 'A36',
          carBrandcode: '东方日产-启辰',
          dlrShortName: '广州置业',
          orderNo: '2',
          isEnable: '0',
          // 添加字段
          carBrandCode: '2',
          carSeriesId: 'AABB2',
          partSeriesCode: 'AB37',
          beginDate: '2019-06-21',
          endDate: '2020-06-21'
        },
        {
          carBrandCn: '东风日产',
          carSeriesCode: '747',
          carSeriesCn: '派',
          carSeriesEn: 'AE86',
          orderNo: '3',
          dlrShortName: '深圳裕朋',
          isEnable: '1',
          // 添加字段
          carBrandCode: '4',
          carSeriesId: 'AABB3',
          partSeriesCode: 'AB38',
          beginDate: '2019-06-21',
          endDate: '2020-06-21'
        }
      ]
    }
  }
})

// 车系保存
const mdmVeCarSeriesMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmVeCarSeriesMutationSave: {
      result: '1',
      msg: '保存成功'
    }
  }
})
// 经销商交车超期预警设置
const veExceedFateSettingSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    veExceedFateSettingSave: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      'rows': [
        {
          carBrandCn: '东风日产',
          carSeriesCode: 'J11',
          carSeriesCn: '新逍客',
          carSeriesEn: 'J11',
          orderNo: '1',
          isEnable: '1',
          // 添加字段
          carBrandCode: '1',
          carSeriesId: 'AABB1',
          partSeriesCode: 'AB36',
          beginDate: '2019-06-21',
          carBrandcode: '东方日产-启辰',
          dlrShortName: '深圳裕朋',
          endDate: '2020-06-21'
        },
        {
          carBrandCn: '东风日产',
          carSeriesCode: 'A36',
          carSeriesCn: '西玛',
          carSeriesEn: 'A36',
          carBrandcode: '东方日产-启辰',
          dlrShortName: '广州置业',
          orderNo: '2',
          isEnable: '0',
          // 添加字段
          carBrandCode: '2',
          carSeriesId: 'AABB2',
          partSeriesCode: 'AB37',
          beginDate: '2019-06-21',
          endDate: '2020-06-21'
        },
        {
          carBrandCn: '东风日产',
          carSeriesCode: '747',
          carSeriesCn: '派',
          carSeriesEn: 'AE86',
          orderNo: '3',
          isEnable: '1',
          // 添加字段
          carBrandCode: '4',
          carSeriesId: 'AABB3',
          partSeriesCode: 'AB38',
          beginDate: '2019-06-21',
          endDate: '2020-06-21'
        }
      ]
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmVeCarSeriesQueryListForPage',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesQueryListForPage
    }
  },
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmVeCarSeriesMutationSave',
    type: 'post',
    response: config => {
      return mdmVeCarSeriesMutationSave
    }
  },
  {
    url: '/ly/mp/busicen/scs/graphql.do' + cH + 'v=veExceedFateSettingSave',
    type: 'post',
    response: config => {
      return veExceedFateSettingSave
    }
  }
]
