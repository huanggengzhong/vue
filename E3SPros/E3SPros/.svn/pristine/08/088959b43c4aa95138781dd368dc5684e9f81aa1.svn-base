/**
 *  工时单价模板
 */
import Mock from 'mockjs'
import { apiSeDbWiQuery } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

const seDbWiQueryFindAllData = Mock.mock({
  seDbWiQueryFindAll: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '',
    msg: '',
    'rows|30': [{
      wiId: '001',//工时编码
      dlrCode: 'SH',//经销商编码
      repairSmallKindCode: '',//维修小类编码
      repairSmallKindName: '发动机总成',//维修小类名称
      operatePartCode: '',//维修大类编码
      opratePlaceName: 'A 引擎机械',//维修大类名称
      wiCode: 'AA1011',//工时编码
      remark: '维修',//备注
      wiName: 'A/C的附加装置',//维修内容
      wiKey: '',//关键字
      isSystem: '',
      isSystemName: '主机厂',//工时来源
      dlrId: '1',
      repairType: '30802',//维修类别
      repairName: '机电',//维修类别
      oemId: '',//厂商编码Id
      groupId: '',//集团编码Id
      oemCode: '',//厂商编码
      groupCode: '',//集团编码
      creator: '',//创建人
      createdDate: '',
      modifier: '',//修改人
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: '111',
      maxSaleWiQty: ''//最大工时数
    }]
  }
})

const seDbWiQueryFindCarTypeCodeData = Mock.mock({
  seDbWiCartypeQueryFind: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '',
    msg: '',
    'rows|30': [{
      wiCartypeId: '1',//工时车型Id
      wiId: '001',//工时Id
      wiCode: '00AA',//工时编码
      carTypeCode: '1111',//车型
      carTypeCn: 'DFL7160',//车型名称
      saleWiQty: '0.40',//销售工时数量
      workWiQty: '0.40',//派工工时数
      repairWiQty: '0.40',//作业工时数
      isSystem: '1',//工时来源
      dlrCode: 'SH',//经销商编码
      dlrId: '1',//经销商Id
      carBrandCode: '东风日产-日产',//品牌编码
      oemId: '',//厂商编码Id
      groupId: '',//集团编码Id
      oemCode: '',//厂商编码
      groupCode: '',//集团编码
      creator: '',//创建人
      createdDate: '',
      modifier: '',//修改人
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: '111'
    }]
  }
})

const seDbWiQueryFindWiRelationData = Mock.mock({
  seDbWiRelationQueryFind: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '',
    msg: '',
    'rows|3': [{
      wiRelationId: '1',//连带工时主键Id
      parentWiId: '001',//父工时Id
      parentWiCode: '00AA',//父工时编码
      wiId: '002',//连带工时Id
      wiCode: 'AA1013',//连带工时编码
      wiName: 'A/C的附加装置',//维修内容(API表上没有)
      isSystem: '主机厂',//工时来源
      dlrCode: 'SH',//经销商编码
      dlrId: '',//经销商Id
      oemId: '',//厂商编码Id
      groupId: '',//集团编码Id
      oemCode: '',//厂商编码
      groupCode: '',//集团编码
      repairSmallKindCode: '',//维修小类编码
      repairSmallKindName: '发动机总成',//维修小类名称
      operatePartCode: '',//维修大类编码
      opratePlaceName: 'A 引擎机械',//维修大类名称
      creator: '',//创建人
      createdDate: '',
      modifier: '',//修改人
      lastUpdatedDate: '',
      isEnable: '1',
      updateControlId: '111'
    }]
  }
})

//维修工时标准-保存
const saveSeDbWiMutationData = Mock.mock({
  seDbWiMutationSaveWi: {
    result: '1',
    msg: 'success'
  }
})

//维修工时标准-删除
const seDbWiMutationRemoveWiData = Mock.mock({
  seDbWiMutationRemoveWi: {
    result: '1',
    msg: 'success'
  }
})

//车型工时对应关系-保存
const saveSeDbWiCarTypeData = Mock.mock({
  seDbWiCarTypeMutationSave: {
    result: '1',
    msg: 'success',
  }  
})

//连带工时设置-保存
const saveSeDbWiRelationData = Mock.mock({
  seDbWiRelationMutationSave: {
    result: '1',
    msg: 'success'
  }
})

//导入
const importWi = Mock.mock({
  seDbWiMutationImportWi: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 10,
    msg: '',
    'rows|10': [{
      wiCode: 'SH1', 
      wiName: '上海地区1', 
      isSystemName: '华东一区1',
      dlrCode: 'A11101',
      isEnable: '上海区1',
      opratePlaceName: '2311111',
      repairSmallKindName: '上海东昌1',
      repairName: '上海东昌1',
      wiKey: '上海东昌1',
      remark: '上海东昌1'
    }]
  }
})

//车型工时对应关系删除 
const seDbWiCarTypeDeleteData = Mock.mock({
  seDbwiCarTypeMutationDelete: {
    result: '1',
    msg: 'success'
  }
})

// 连带工时设置-删除
const seDbWiRelationDeleteData = Mock.mock({
  seDbWiRelationMutationDelete: {
    result: '1',
    msg: 'success'
  }
})

export default [
  {
    url: apiSeDbWiQuery.seDbWiQueryFindAll.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbWiQueryFindAllData
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbWiCartypeQueryFind.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiCartypeQueryFind.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbWiQueryFindCarTypeCodeData
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbWiRelationQueryFind.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiRelationQueryFind.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbWiQueryFindWiRelationData
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbWiMutationSaveWi.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiMutationSaveWi.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: saveSeDbWiMutationData
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbWiMutationRemoveWi.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiMutationRemoveWi.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbWiMutationRemoveWiData
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbWiCarTypeMutationSave.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiCarTypeMutationSave.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: saveSeDbWiCarTypeData
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbWiRelationMutationSave.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiRelationMutationSave.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: saveSeDbWiRelationData
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbWiMutationImportWi.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiMutationImportWi.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: importWi
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbwiCarTypeMutationDelete.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbwiCarTypeMutationDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbWiCarTypeDeleteData
      }
    }
  },
  {
    url: apiSeDbWiQuery.seDbWiRelationMutationDelete.APIUrl + cH + 'v=' + apiSeDbWiQuery.seDbWiRelationMutationDelete.ServiceCode,
    type: 'post',
    response: config => {
      return {
        result: '1',
        msg: 'success',
        data: seDbWiRelationDeleteData
      }
    }
  }
]
