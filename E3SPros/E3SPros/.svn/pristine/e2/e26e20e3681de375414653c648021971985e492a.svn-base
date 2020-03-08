/**
 * description: 车系编码查询模拟数据
 * author: liyanm
 * createdDate: 2019-07-23
 */
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
      rows: [{
        carSeriesCode: '1',
        carSeriesCn: '东方日产-日产',
        carSeriesEn: 'Nissian',
        isEnable: '1',
        carBrandCode: '22caee2daceb40e7bd2601cb34893862',
        sapCarseriesCode: '22caee2daceb40e7bd2601cb34893862',
        sCarseriesDesc: '22caee2daceb40e7bd2601cb34893862',
        carBrandCn: '东风日产-日产'
      },
      {
        carSeriesCode: '2',
        carSeriesCn: '东方日产-启辰',
        carSeriesEn: 'Venucia',
        isEnable: '1',
        CarBrandcode: '1',
        carBrandCode: '22caee2daceb40e7bd2601cb34893862',
        sapCarseriesCode: '22caee2daceb40e7bd2601cb34893862',
        sCarseriesDesc: '22caee2daceb40e7bd2601cb34893862'
      },
      {
        carSeriesCode: '3',
        carSeriesCn: '东方日产-进口尼桑',
        carSeriesEn: '进口尼桑',
        isEnable: '0',
        carBrandCode: '22caee2daceb40e7bd2601cb34893862',
        sapCarseriesCode: '22caee2daceb40e7bd2601cb34893862',
        sCarseriesDesc: '22caee2daceb40e7bd2601cb34893862'
      },
      {
        carSeriesCode: '3',
        carSeriesCn: '东方日产-其它',
        carSeriesEn: 'Other',
        isEnable: '0',
        carBrandCode: '22caee2daceb40e7bd2601cb34893862',
        sapCarseriesCode: '22caee2daceb40e7bd2601cb34893862',
        sCarseriesDesc: '22caee2daceb40e7bd2601cb34893862'
      },
      {
        CarSeriesCode: '1',
        controlBtn: '',
        CarBrandcode: '东风启辰-启辰',
        dlrShortName: '深圳裕朋',
        oneday: '0',
        twoday: '22caee2daceb40e7bd2601cb34893862',
        threeday: '22caee2daceb40e7bd2601cb34893862',
        isEnable: '1'
      },
      {
        CarSeriesCode: '2',
        controlBtn: '',
        dlrShortName: '广州置业',
        CarBrandcode: '东风启辰-启辰',
        oneday: '0',
        twoday: '22caee2daceb40e7bd2601cb34893862',
        threeday: '22caee2daceb40e7bd2601cb34893862',
        isEnable: '1'
      }
      ]
    }
  }
})

export default [{
  url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmVeCarSeriesQueryListForPage',
  type: 'post',
  response: config => {
    return mdmVeCarSeriesQueryListForPage
  }
}

]
