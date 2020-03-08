import Mock from 'mockjs'
import { apiSeReport } from '../../../../src/api/graphQLApiList/se'
const CH = '/'

const allData = Mock.mock({
  seRepairReportMaintainVehicleFindAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 2,
    msg: '',
    rows: [
      {
        carId: '123456',
        vin: 'LMJ2738H87321H',
        carLicenseNo: '粤A87532',
        repairOrderCode: 'XP001201812280001',
        repairOrderId: 'xxx',
        seburepairdetail: '[赠送]全车检查（含底盘、刹车、发动机、滤芯油水、四门润滑、四轮等免费检查免费检测）',
        dlrShortName: 'xxxx店',
        credNo: '1234561234561234',
        custName: '王耀生',
        custTel: '12345678910',
        carBrandCn: 'xxx品牌',
        carSeriesCn: 'xxx车系',
        carTypeCn: 'xxx车型',
        CarColorName: '红色',
        buyDate: '2018-01-01',
        repairTime: '2019-07-07',
        repairDeliveryDate: '2019-07-17',
        custClassName: '个人',
        addr: '广东省广州市xxxx',
        engineNo: 'MX234S'
      },
      {
        carId: '123789',
        vin: 'LMJ2738H87456H',
        carLicenseNo: '粤A31233',
        repairOrderCode: 'XP001201812280002',
        repairOrderId: 'xxx',
        seburepairdetail: '后保险杠喷漆',
        dlrShortName: 'xxxx店',
        credNo: '1234561234561234',
        custName: '张耀生',
        custTel: '12345678910',
        carBrandCn: 'xxx品牌',
        carSeriesCn: 'xxx车系',
        carTypeCn: 'xxx车型',
        CarColorName: '红色',
        buyDate: '2018-01-01',
        repairTime: '2019-07-10',
        repairDeliveryDate: '2019-07-20',
        custClassName: '个人',
        addr: '广东省广州市xxxx',
        engineNo: 'MX123S'
      }
    ]
  }
})

export default [
  {
    url: apiSeReport.seRepairReportMaintainVehicleFindAll.APIUrl + CH + 'v=' + apiSeReport.seRepairReportMaintainVehicleFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: allData
      }
    }
  }
]

