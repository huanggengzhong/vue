import Mock from 'mockjs'
import { seApis } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

// 撤销审核
const RepairCheckCancel = Mock.mock({
  seBuRepairCheckCancel: {
    result: '1',
    msg: 'success'
  }
})

// 维修复核详情初始化
const RepairCheckQueryAll = Mock.mock({
  seBuRepairCheckQueryAll:
  {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        repairOrderId: '',
        dlrCustNo: '',
        dlrId: '',
        repairOrderCode: '',
        carLicense: '豫N8110T',
        carId: 'LMVAFLFD8HA063256',
        vin: '',
        carBrandCode: '',
        carBrandCn: '海马汽车',
        carColorName: '珠峰白',
        carKeyNo: '',
        engineNo: '71001961',
        carSeriesCn: 'M6',
        carTypeCode: 'HMA7160DA4CW',
        repairMan: '王黎明',
        repairTel: '15537050755',
        custName: '',
        custTel: '',
        saName: '苏亚峰',
        repairTime: '2019/7/17 11:04',
        preGetDate: '2019/7/17 13:04',
        isWait: '',
        isFirst: '1',
        isClean: '1',
        isAccident: '1',
        oil: '10%',
        fastRepairType: '',
        csDesc: '',
        disposeInfo: '',
        repairDesc: '',
        dealRelustDesc: '',
        recommendItem: '',
        custCarRelationCode: '',
        mileage: '2200',
        repairOrderStatus: '',
        repairStatusName: '',
        updateControlId: '',
        isGather: '',
        repairBeginDate: '2019-07-17 11:10',
        repairFinishDate: '2019-08-01 00:00',
        wiDueAmount: '70',
        partDueAmount: '100',
        otherDueAmount: '0',
        delayReason: '',
        delayPlot: '',
        cleanGroupNo: '清洁一组',
        cleanFinishDate: '',
        qualityCheckMan: '苏亚峰',
        qualityFinishDate: '2019-08-02 00:00',
        buyDate: '',
        oemCode: '',
        groupCode: '',
        oemId: '',
        groupId: '',

        repairwilist: [
          {
            repairOrderId: '',
            repairWiId: '1',
            wiCode: '',
            wiName: '车辆检测',
            repairTypeName: '机电',
            saleWorkQty: '',
            repairStatus: '',
            repairStatusName: '质检已通过',
            businessType: '',
            repairEmpName: '杨叫兽',
            repairGroupName: '机电二组',
            checkEmpId: '',
            checkEmpName: '',
            checkDate: '2019-07-17 11:10  ',
            isAdd: '否',
            workDId: 'WXB77190717003',
            updateControlId: '',
            oemCode: '',
            groupCode: '',
            oemId: '',
            groupId: '',
            dlrId: ''
          }
        ],
        repairpartlist: [
          {
            partNo: '10010',
            partName: '反光镜',
            partQty: '100',
            outQty: '10',
            returnQty: '1',
            repairTypeName: '机电',
            isAdd: ' 否',
            oemCode: '',
            groupCode: '',
            oemId: '',
            groupId: '',
            dlrId: ''
          }
        ],
        repairhistorylist: [
          {
            repairOrderCode: 'WXB77190717005',
            repairMan: '王黎明',
            repairTime: '2019/7/17 11:04',
            mainWorkitem: '连杆拆除和更换',
            maxBusinessType: '技术升级',
            oemCode: '',
            groupCode: '',
            oemId: '',
            groupId: '',
            dlrId: '',
            dlrCode: ''
          }
        ],
        checkemployeelist: [
          {
            empId: '',
            empName: '苏亚峰 ',
            repairGroupId: '',
            groupName: '',
            oemCode: '',
            groupCode: '',
            oemId: '',
            groupId: ''
          }
        ],
        cleangrouplist: [
          {
            repairGroupId: '',
            workGroupCode: '',
            groupName: '',
            oemCode: '',
            groupCode: '',
            oemId: '',
            groupId: ''
          }
        ],
        carowerinfolist: [
          {
            carOwnerId: '',
            dlrCustNo: '',
            custName: '王黎明',
            phone: '15537050755',
            custClassName: '',
            addr: '',
            mileage: '',
            remark: '',
            complain: '',
            birthDate: '',
            oemCode: '',
            groupCode: '',
            oemId: '',
            groupId: ''
          }
        ],
        caruserinfolist: [
          {
            dlrCustNo: '',
            custName: '王黎明',
            phone: '',
            addr: '',
            oemCode: '',
            groupCode: '',
            oemId: '',
            groupId: ''
          }
        ],
        repairgroup: [
          {
            repairGroupId: '',
            workGroupCode: '',
            groupName: '',
            workGroupType: '',
            oemCode: '',
            groupCode: '',
            oemId: '',
            groupId: '',
            dlrId: '',
            dlrCode: ''
          }
        ]
      }
    ]
  }
})

// 维修复核校验
const RepairCheckVerifier = Mock.mock({
  seBuRepairCheckVerifier: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 4,
    msg: '',
    rows: [
      {
        repairOrderStatus: [{
          repairOrderId: '',
          repairOrderStatus: '31019',
          repairOrderStatusName: '',
          isGather: '',
          isGatherName: '',
          oemCode: '',
          groupCode: '',
          oemId: '',
          groupId: '',
          dlrId: ''
        }],
        repairpartnotoutfull: [{
          repairOrderId: '',
          partNo: '',
          partName: '',
          partQty: '',
          outQty: '',
          notoutpart: '',
          oemCode: '',
          groupCode: '',
          oemId: '',
          groupId: '',
          dlrId: ''
        }]
      }]
  }
})

// 维修复核保存
const RepairCheckMutationSave = Mock.mock({
  seBuRepairCheckMutationSave: {
    result: '1',
    msg: 'success'
  }
})

export default [
  {// 维修复核详情初始化
    url: seApis.seBuRepairCheckQueryAll.APIUrl + cH + 'v=' + seApis.seBuRepairCheckQueryAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: RepairCheckQueryAll
      }
    }
  },
  {// 撤销审核
    url: seApis.seBuRepairCheckCancel.APIUrl + cH + 'v=' + seApis.seBuRepairCheckCancel.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: RepairCheckCancel
      }
    }
  },
  {// 维修复核校验
    url: seApis.seBuRepairCheckVerifier.APIUrl + cH + 'v=' + seApis.seBuRepairCheckVerifier.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: RepairCheckVerifier
      }
    }
  },
  {// 维修复核保存
    url: seApis.seBuRepairCheckMutationSave.APIUrl + cH + 'v=' + seApis.seBuRepairCheckMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: RepairCheckMutationSave
      }
    }
  }
]
