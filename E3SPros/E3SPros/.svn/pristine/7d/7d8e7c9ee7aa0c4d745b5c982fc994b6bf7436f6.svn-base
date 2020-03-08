
/**
 * 领料单查询的模拟数据
 */

import Mock from 'mockjs'
import { apiSeProcess } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const allData = Mock.mock({
    seMaterialListFindAll:
    {
      result: '1',
      pageindex: 1,
      pages: 1,
      records: 5,
      msg: 'success',
      'rows|50': [{
        repairOrderId: '001',
        repairOrderCode: 'helloworld',
        carLicense: '粤A001',
        vin: 'vin001',
        repairTime: '2019-01-01',
        partNo: 'beijian001',
        partName: '备件一',
        repairTypeName: '镶金',
        businessTypeName: '业务类别-mock',
        pickPerson: 'kk',
        partQty: '100',
        outQty: '110',
        returnQty: '10',
        outFlag: 'true',
        oemCode: '厂商标识-mock',
        groupCode: '集团标识-mock',
        oemId: '厂商标识ID-mock',
        groupId: '集团标识ID-mock'        
      }
      
    
      
    ]
    }
})

export default [
    {
      url: apiSeProcess.seMaterialListFindAll.APIUrl + cH + 'v=' + apiSeProcess.seMaterialListFindAll.ServiceCode,
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