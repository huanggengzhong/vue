import Mock from 'mockjs'
import { seApis } from '../../src/api/graphQLApiList/se'
const cH = '/'
var cloneObj = function(obj) {
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

const data = Mock.mock({
  SeChooseWiQuery: {
    'result': '1',
    'msg': '查询成功',
    'pages': '1',
    'records': '1',
    'pageindex': '1',
    'rows': [
      {
        isSelect: '1',
        wiId: '2342',
        wiCode: '15325',
        repairContent: 'WGEVWEV',
        carTypeCode: 'SDFSDFSD',
        wiCartypeId: 'GWEVD',
        saleWiQty: 'SVDSV',
        wiWorkQty: 'GEDSF',
        wiRepairQty: 'FWEDVSD',
        operatePartCode: 'SDGEWDF',
        opratePlaceName: '123q',
        rrpairSmallKindCode: '1',
        rrpairSmallKindName: '1',
        carBrandCode: '1',
        isEnable: '1',
        isSystem: '1',
        createdDate: '1',
        dlrCode: '1',
        dlrId: '1',
        oemCode: '1',
        groupCode: '1',
        oemId: '1',
        groupId: '1'

      },
      {
        isSelect: '2',
        wiId: '3',
        wiCode: '71316',
        repairContent: '1',
        carTypeCode: '1',
        wiCartypeId: '1',
        saleWiQty: '1',
        wiWorkQty: '1',
        wiRepairQty: '1',
        operatePartCode: '1',
        opratePlaceName: '1',
        rrpairSmallKindCode: '1',
        rrpairSmallKindName: '1',
        carBrandCode: '1',
        isEnable: '1',
        isSystem: '1',
        createdDate: '1',
        dlrCode: '1',
        dlrId: '1',
        oemCode: '1',
        groupCode: '1',
        oemId: '1',
        groupId: '1'
      },
      {
        isSelect: '2',
        wiId: '2',
        wiCode: '3263',
        repairContent: '1',
        carTypeCode: '1',
        wiCartypeId: '1',
        saleWiQty: '1',
        wiWorkQty: '1',
        wiRepairQty: '1',
        operatePartCode: '1',
        opratePlaceName: '1',
        rrpairSmallKindCode: '1',
        rrpairSmallKindName: '1',
        carBrandCode: '1',
        isEnable: '1',
        isSystem: '1',
        createdDate: '1',
        dlrCode: '1',
        dlrId: '1',
        oemCode: '1',
        groupCode: '1',
        oemId: '1',
        groupId: '1'
      }
    ]
  }
})

const seChooseWiSelect = Mock.mock({
  seChooseWiSelect: {
    'result': '1',
    'msg': '查询成功',
    'pages': 1,
    'records': 2,
    'pageindex': 3,
    'rows': [
      {
        wiId: '1',
        wiCode: '423523',
        wiName: '维修电动机',
        carTypeCode: '5243325',
        wiCartypeId: '5234242',
        saleWiQty: '5',
        wiWorkQty: '5',
        wiRepairQty: '5',
        operatePartCode: '32523623243',
        opratePlaceName: '维修小类1',
        repairSmallKindCode: '324232342',
        carBrandCode: '5143252',
        isEnable: '1',
        isSystem: '来源1',
        createdDate: '2019-08-07',
        dlrCode: '43252353',
        dlrId: '25234',
        oemCode: '5234235',
        groupCode: '2142342',
        oemId: '523423',
        groupId: '2352342',
        SeDbWiRelation: [
          {
            wiRelationId: '3423',
            parentWiId: '423523',
            parentWiCode: '5234235',
            wiId: '235235',
            wiCode: '1523522',
            isSystem: '来源1',
            dlrCode: '23423523',
            dlrId: '515235',
            oemId: '534534',
            groupId: '52352',
            oemCode: '2352342',
            groupCode: '152423',
            repairSmallKindCode: '532435',
            operatePartCode: '61423423'
          }
        ],
        SeDbWiPart: [
          {
            wiPartId: '34242',
            wiId: '532423',
            wiCode: '5234234',
            wiName: '工时1',
            partNo: '523523623',
            partName: '关联备件1',
            partQty: '23',
            multiCarTypeCode: '适用车型1',
            isSystem: '来源2',
            dlrCode: '21415',
            dlrId: '41232',
            oemId: '523234',
            groupId: '521414',
            oemCode: '32523',
            groupCode: '5214',
            isEnable: '1',
            partTypeCode: '423523',
            partPropertyCode: '5124326'
          }
        ]
      },
      {
        wiId: '1',
        wiCode: '32523234',
        wiName: '维修电动机B',
        carTypeCode: '4423523',
        wiCartypeId: '23543',
        saleWiQty: '5',
        wiWorkQty: '5',
        wiRepairQty: '5',
        operatePartCode: '523523',
        opratePlaceName: '维修小类1',
        repairSmallKindCode: '2435',
        carBrandCode: '325',
        isEnable: '1',
        isSystem: '来源1',
        createdDate: '2019-08-07',
        dlrCode: '43252353',
        dlrId: '25234',
        oemCode: '5234235',
        groupCode: '2142342',
        oemId: '523423',
        groupId: '2352342',
        SeDbWiRelation: [
          {
            wiRelationId: '235',
            parentWiId: '2342323',
            parentWiCode: '5234235',
            wiId: '235235',
            wiCode: '1523522',
            isSystem: '来源1',
            dlrCode: '23423523',
            dlrId: '515235',
            oemId: '534534',
            groupId: '52352',
            oemCode: '2352342',
            groupCode: '152423',
            repairSmallKindCode: '532435',
            operatePartCode: '61423423'
          }
        ],
        SeDbWiPart: [
          {
            wiPartId: '25352',
            wiId: '42342',
            wiCode: '234234',
            wiName: '工时1',
            partNo: '523523623',
            partName: '关联备件1',
            partQty: '23',
            multiCarTypeCode: '适用车型1',
            isSystem: '来源2',
            dlrCode: '21415',
            dlrId: '41232',
            oemId: '523234',
            groupId: '521414',
            oemCode: '32523',
            groupCode: '5214',
            isEnable: '1',
            partTypeCode: '423523',
            partPropertyCode: '5124326'
          }
        ]
      }
    ]
  }
})

const seOperatePart = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seOperatePart: {
      'result': '1',
      'rows': [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: 'A'
        },
        {
          value: '2',
          label: 'B'
        },
        {
          value: '3',
          label: 'C'
        }
      ]
    }
  }
})

const seRepairSmallKind = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seRepairSmallKind: {
      'result': '1',
      'rows': [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: 'A'
        },
        {
          value: '2',
          label: 'B'
        },
        {
          value: '3',
          label: 'C'
        }
      ]
    }
  }
})

const seIsSystem = Mock.mock({
  result: '1',
  msg: 'success',
  data: {
    seIsSystem: {
      'result': '1',
      'rows': [
        {
          value: '0',
          label: '全部'
        },
        {
          value: '1',
          label: '经销商'
        },
        {
          value: '2',
          label: '主机厂'
        }
      ]
    }
  }
})

export default [
  {
    url: seApis.SeChooseWiQuery.APIUrl + cH + 'v=' + seApis.SeChooseWiQuery.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: data
      }
    }
  },
  {
    url: seApis.seChooseWiSelect.APIUrl + cH + 'v=' + seApis.seChooseWiSelect.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seChooseWiSelect
      }
    }
  },
  {
    url: seApis.seOperatePart.APIUrl + cH + 'v=' + seApis.seOperatePart.ServiceCode,
    type: 'post',
    response: config => {
      return seOperatePart
    }
  },
  {
    url: seApis.seRepairSmallKind.APIUrl + cH + 'v=' + seApis.seRepairSmallKind.ServiceCode,
    type: 'post',
    response: config => {
      return seRepairSmallKind
    }
  },
  {
    url: seApis.seIsSystem.APIUrl + cH + 'v=' + seApis.seIsSystem.ServiceCode,
    type: 'post',
    response: config => {
      return seIsSystem
    }
  }
]
