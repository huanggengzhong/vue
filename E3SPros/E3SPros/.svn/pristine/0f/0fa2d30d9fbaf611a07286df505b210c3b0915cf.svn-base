import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const RepairOrderQueryMain = Mock.mock({
  seBuRepairOrderQueryMain:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [{
      repairOrderCode: 'H2901190619001',
      carLicenseNo: '粤ABVAD8',
      vin: 'LGBH52E09FY384095',
      custName: '郭思锐',
      repairStatusName: '已交车',
      isGatherName: '已结算',
      repairMan: '郭思锐',
      repairTel: '13889942813',
      repairTime: '2018/12/6 15:58:00',
      preGetDate: '2018/12/6 18:58:00',
      saName: '付娟',
      repairOrderId: '',
      saEmpId: '',
      mileage: '',
      repairOrderStatus: '31001',
      isGather: '',
      carid: '',
      trunRepairDate: '',
      custTel: '',
      lastUpdatedDate: '',
      updateControlId: '',
      createdDate: '',
      engineNo: '',
      carBrandCode: '',
      cardNo: '',
      oemCode: '',
      groupCode: '',
      oemId: '',
      groupId: ''
    },
    {
      repairOrderCode: 'H2901190619004',
      carLicenseNo: '粤A0WJ913',
      vin: 'LGBH52E09FY384215',
      custName: '冯豪',
      repairStatusName: '接待完毕',
      isGatherName: '未结算',
      repairMan: '丁敏',
      repairTel: '13889942214',
      repairTime: '2018/12/6 15:58:00',
      preGetDate: '2018/12/6 18:58:00',
      saName: '付娟',
      repairOrderId: '',
      saEmpId: '',
      mileage: '',
      repairOrderStatus: '31002',
      isGather: '',
      carid: '',
      trunRepairDate: '',
      custTel: '',
      lastUpdatedDate: '',
      updateControlId: '',
      createdDate: '',
      engineNo: '',
      carBrandCode: '',
      cardNo: '',
      oemCode: '',
      groupCode: '',
      oemId: '',
      groupId: ''
    }
    ]
  }
})
// 撤销派工
const RepairWorkCancel = Mock.mock({
  seBuWorkOrderMutationCancel: {
    result: '1',
    msg: 'success'
  }
})

//派工详情初始化
const RepairWorkQueryAll = Mock.mock({
  seBuWorkOrderQueryFindAllRD:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [{
      custName: '郭思锐',
      phone: '13889942813',
      remark: '备注备注备注',
      vin: 'LGBH52E09FY384095',
      carLicense: '粤ABVAD8',
      carBrandCn: '东风日产-日产',
      carSeriesCn: '新逍客',
      carTypeCode: 'DFL6440',
      carColorName: '红色',
      engineNo: 'E8383JDJUEU',
      repairOrderCode: 'H2901190619001',
      repairMan: '郭思锐',
      repairTel: '13889942813',
      saName: '付娟  ',
      repairTime: '2018/12/6 15:58',
      preGetDate: '2018/12/8 15:58',
      mileage: '3213',
      mainWorkitem: '每5千公里定期保养',
      maxBusinessType: '定期保养',
      recommendItem: '无',
      // ---------
      wiName: '更换顶部摄像头',
      saleWorkQty: '9.70',
      groupName: '机电一组',
      empName: '陈师傅',
      repairTypeName: '机电',
      repairStatusName: '已派工',
      isAdd: '否',
      partNo: 'KLAHC53040-Y375',
      partName: '顶部摄像头',
      partQty: '1',
      repairBeginDate: '2018/12/6 15:58',
      repairFinishDate: '2018/12/8 15:58',
      csDesc: 'xxxxxxxxxxxxxxx',
      disposeInfo: 'bbbbbbbbbbbbbbbbbbb',
      dealRelustDesc: 'iiiiiiiiiii',
      wiDueAmount: '392.40',
      partDueAmount: '327.98',
      otherDueAmount: '0',
      dlrShortName: '广州风日',
      repairgroup: [{
        repairGroupId: '1',
        workGroupCode: 'AAAC',
        groupName: '维修一组',
        workGroupType: '1'
      },
      {
        repairGroupId: '2',
        workGroupCode: 'AAAB',
        groupName: '维修二组',
        workGroupType: '2'
      }
      ],
      repairemp: [{
        empId: '1',
        empName: '陈师傅',
        repairGroupId: '1',
        groupName: '维修一组'
      },
      {
        empId: '2',
        empName: '何师傅',
        repairGroupId: '2',
        groupName: '维修二组'
      },
      {
        empId: '3',
        empName: '马师傅',
        repairGroupId: '2',
        groupName: '维修二组'
      },
      {
        empId: '4',
        empName: '王师傅',
        repairGroupId: '2',
        groupName: '维修二组'
      },
      {
        empId: '5',
        empName: '魏师傅',
        repairGroupId: '1',
        groupName: '维修一组'
      }]
    }
    ]
  }
})

// 维修派工保存
const RepairWorkMutationSave = Mock.mock({
  seBuRepairWorkMutationSave: {
    result: '1',
    msg: 'success'
  }
})
export default [

  {// 保养参数设置查询
    url: seApis.seBuRepairOrderQueryMain.APIUrl + cH + 'v=' + seApis.seBuRepairOrderQueryMain.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: RepairOrderQueryMain

      }
    }
  },
  {// 保养参数设置查询
    url: seApis.seBuWorkOrderMutationCancel.APIUrl + cH + 'v=' + seApis.seBuWorkOrderMutationCancel.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: RepairWorkCancel

      }
    }
  },
  {// 派工详情初始化
    url: seApis.seBuWorkOrderQueryFindAllRD.APIUrl + cH + 'v=' + seApis.seBuWorkOrderQueryFindAllRD.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: RepairWorkQueryAll
      }
    }
  }
  // ,
  // {
  //   url: seApis.seBuRepairWorkMutationSave.APIUrl + cH + 'v=' + seApis.seBuRepairWorkMutationSave.ServiceCode,
  //   type: 'post',
  //   response: config => {
  //     return {
  //       result: '1',
  //       msg: 'success',
  //       data: RepairWorkMutationSave
  //     }
  //   }
  // }
]
