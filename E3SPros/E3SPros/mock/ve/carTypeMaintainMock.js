/**
* description: 车型维护  -  车型小类查询
* author: zhhx
* createdDate: 2019-7-26
*/
import Mock from 'mockjs'
import { orgApis } from '../../src/api/graphQLApiList/org'

const cH = '/'
// 查询
// const mdmSmallCarTypeQueryListForPage = Mock.mock({
//   result: '1',
//   msg: '',
//   data: {
//     mdmSmallCarTypeQueryListForPage: {
//       result: '1',
//       msg: '',
//       pageindex: 1,
//       pagesize: 1000,
//       pages: 1,
//       records: 30,
//       'rows|30': [
//         {
//           carBrandCode: '2',
//           carBrandCn: '东风启辰-启辰',
//           carSeriesCode: 'V1341',
//           carSeriesId: '233222',
//           carSeriesEn: 'Nissian',
//           smallCarTypeCode: '22caee2da',
//           smallCarTypeCn: 'uiuui',
//           isEnable: '1'
//         }
//       ]
//     }
//   }
// })
// 保存
const mdmSmallCarTypeMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdmSmallCarTypeMutationSave: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 2,
      rows: [{
        carBrandCode: '2',
        carBrandCn: '东风启辰-启辰',
        carSeriesCode: 'V1341',
        carSeriesEn: 'Nissian',
        smallCarTypeCode: '22caee2daceb40e7bd2601cb34893862',
        smallCarTypeCn: 'uiuui',
        isEnable: '1'
      },
      {
        carBrandCode: '2',
        carBrandCn: '东风启辰-启辰',
        carSeriesCode: 'V1341',
        carSeriesEn: 'Nissian',
        smallCarTypeCode: '22caee2daceb40e7bd2601cb34893862',
        smallCarTypeCn: 'uiuui',
        isEnable: '1'
      }
      ]
    }
  }
})
export default [
//   {
//     url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdmSmallCarTypeQueryListForPage',
//     type: 'post',
//     response: config => {
//       return mdmSmallCarTypeQueryListForPage
//     }
//   }, // 保存
  {
    url: orgApis.mdmSmallCarTypeMutationSave.APIUrl + cH + 'v=' + orgApis.mdmSmallCarTypeMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return mdmSmallCarTypeMutationSave
    }
  }
]

