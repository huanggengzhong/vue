/**
* description: 用户车系权限
* author: linsy
* createdDate: 2019-08-12
*/
import Mock from 'mockjs'

const cH = '/'
const veUserSeriesQueryFindAll = Mock.mock({
  result: '1',
    msg: '',
    data: {
      veUserSeriesQueryFindAll: {
            result: '1',
            msg: '',
            pageindex: 1,
            pagesize: 1000,
            pages: 1,
            records: 3,
            'rows': [
                { carBrandCode: '东风启辰-启辰', CarBrandID: '1', userName: '霸哥', userID: '1', baseCarSeries: 'A36', funCode: '采购单手工分配', menuId: '1' },
                { carBrandCode: '东风启辰-启辰', CarBrandID: '1', userName: '奇怪的上单', userID: '1', baseCarSeries: 'B17', funCode: '经销商车型节配额设置', menuId: '2' },
                { carBrandCode: '东风启辰-日产', CarBrandID: '1', userName: '她叫乐芙兰', userID: '1', baseCarSeries: 'C46', funCode: '经销商车型节配额设置', menuId: '3' },
                { carBrandCode: '东风启辰-日产', CarBrandID: '1', userName: '张小九', userID: '1', baseCarSeries: 'T136', funCode: '采购单手工分配', menuId: '4' },
                { carBrandCode: '东风启辰-启辰', CarBrandID: '1', userName: '章工', userID: '1', baseCarSeries: 'T312', funCode: '经销商车型节配额设置', menuId: '5' },
                { carBrandCode: '东风启辰-日产', CarBrandID: '1', userName: '张工', userID: '1', baseCarSeries: 'B36', funCode: '车辆限制设置', menuId: '6' },
                { carBrandCode: '东风启辰-启辰', CarBrandID: '1', userName: '李星星', userID: '1', baseCarSeries: 'A36', funCode: '模拟分配调用', menuId: '7' }
            ]
        }
    }
})



export default [
    {
        url: '/ly/mp/busicen/orc/graphql.do' + cH + 'v=veUserSeriesQueryFindAll',
        type: 'post',
        response: config => {
            return veUserSeriesQueryFindAll
        }
    }
]
