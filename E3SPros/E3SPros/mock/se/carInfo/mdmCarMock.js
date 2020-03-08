/**
 *  车辆信息的模拟数据
 */
import Mock from 'mockjs'
import { seApis } from '../../../src/api/graphQLApiList/se'
const cH = '/'
const alldata = Mock.mock({
  mdmCarQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [{
      vin: 'LGBH52E09FY384095',	// VIN码
      carLicense: '粤A • 080M1',	// 车牌号
      cdu: '2323424',	// 电控编号
      engineCode: '123421', // 电机编号
      carSeriesCn: 'G3', // 车系名称
      smallCarTypeCn: '尊享版', // 车型名称
      batteryEnduranceMileage: '350', // 电池包续航里程
      carColorName: '紫色', // 车身颜色
      batteryNumber: '731', // 电池编号
      offlineDate: '2019-10-01', // 下线日期
      invoiceDate: '2018-10-01',	// 开票日期	暂代前端表格属性'交付日期'
      saleDlrShortName: '广州风日店', // 销售网点名称 即'交付门店'
      oemCode: '', // 厂商编码
      groupCode: ''// 集团编码

      // carSeriesCode: '1', // 车系编码
      // saleDlrCode: '2', // 销售网点编码
      // qualifiedCertNo: '3', // 合格证编号
      // buyCaruseCode: '4', // 车辆用途编码
      // buyCaruseName: '名', // 车辆用途名称
      // carColorId: '5',	// 车身颜色ID
      // carIncolorId: '6', // 内饰色ID
      // screenNo: '7', // 大屏编号
      // carBrandCode: '8', // 品牌编码
      // carBrandName: '9', // 品牌名称
      // carKeyNo: '10',	// 钥匙号
      // smallCarTypeCode: '11', // 车型编码
      // carIncolorName: '12',	// 内饰色
      // engineNo: '13',	// 电机型号
      // batteryTypeNo: '14', // 电池型号
      // carLicenseFirstsect: 's',	// 车牌号前缀
      // carLicenseNo: '广州xxxx' // 车牌号全称
    },
    {
      vin: 'LGBH52E09FY384095',	// VIN码
      carLicense: '粤A • 080M1',	// 车牌号
      cdu: '2323424',	// 电控编号
      engineCode: '123421', // 电机编号
      carSeriesCn: 'G3', // 车系名称
      smallCarTypeCn: '尊享版', // 车型名称
      batteryEnduranceMileage: '350', // 电池包续航里程
      carColorName: '紫色', // 车身颜色
      batteryNumber: '731', // 电池编号
      offlineDate: '2019-10-01', // 下线日期
      invoiceDate: '2018-10-01',	// 开票日期	暂代前端表格属性'交付日期'
      saleDlrShortName: '广州风日店', // 销售网点名称 即'交付门店'
      oemCode: '', // 厂商编码
      groupCode: ''// 集团编码
    },
    {
      vin: 'LGBH52E09FY384095',	// VIN码
      carLicense: '粤A • 080M1',	// 车牌号
      cdu: '2323424',	// 电控编号
      engineCode: '123421', // 电机编号
      carSeriesCn: 'G3', // 车系名称
      smallCarTypeCn: '尊享版', // 车型名称
      batteryEnduranceMileage: '350', // 电池包续航里程
      carColorName: '紫色', // 车身颜色
      batteryNumber: '731', // 电池编号
      offlineDate: '2019-10-01', // 下线日期
      invoiceDate: '2018-10-01',	// 开票日期	暂代前端表格属性'交付日期'
      saleDlrShortName: '广州风日店', // 销售网点名称 即'交付门店'
      oemCode: '', // 厂商编码
      groupCode: ''// 集团编码
    },
    {
      vin: 'LGBH52E09FY384095',	// VIN码
      carLicense: '粤A • 080M1',	// 车牌号
      cdu: '2323424',	// 电控编号
      engineCode: '123421', // 电机编号
      carSeriesCn: 'G3', // 车系名称
      smallCarTypeCn: '尊享版', // 车型名称
      batteryEnduranceMileage: '350', // 电池包续航里程
      carColorName: '紫色', // 车身颜色
      batteryNumber: '731', // 电池编号
      offlineDate: '2019-10-01', // 下线日期
      invoiceDate: '2018-10-01',	// 开票日期	暂代前端表格属性'交付日期'
      saleDlrShortName: '广州风日店', // 销售网点名称 即'交付门店'
      oemCode: '', // 厂商编码
      groupCode: ''// 集团编码
    },
    {
      vin: 'LGBH52E09FY384095',	// VIN码
      carLicense: '粤A • 080M1',	// 车牌号
      cdu: '2323424',	// 电控编号
      engineCode: '123421', // 电机编号
      carSeriesCn: 'G3', // 车系名称
      smallCarTypeCn: '尊享版', // 车型名称
      batteryEnduranceMileage: '350', // 电池包续航里程
      carColorName: '紫色', // 车身颜色
      batteryNumber: '731', // 电池编号
      offlineDate: '2019-10-01', // 下线日期
      invoiceDate: '2018-10-01',	// 开票日期	暂代前端表格属性'交付日期'
      saleDlrShortName: '广州风日店', // 销售网点名称 即'交付门店'
      oemCode: '', // 厂商编码
      groupCode: ''// 集团编码
    }
    ]
  }
}
)
export default [
  {
    url: seApis.mdmCarQueryFindAll.APIUrl + cH + 'v=' + seApis.mdmCarQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        code: 2000,
        data: alldata
      }
    }
  }
]
