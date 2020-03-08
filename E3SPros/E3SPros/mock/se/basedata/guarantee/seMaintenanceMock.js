import Mock from 'mockjs'
import {
  apiMaintenance
} from '../../../../src/api/graphQLApiList/se'
const cH = '/'

// 保养维护_____查询
const seDbEngCarTypeMaintaQueryFindAll = Mock.mock({
  seDbEngCarTypeMaintaQueryFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 1,
    msg: 'success',
    'rows|10': [{                          //返回的字段
      createdName: 'createdName',
      modifyName: 'modifyName',
      enableDate: 'enableDate',
      lastUpdatedDate: 'lastUpdatedDate',
      enginType: 'enginType',
      maintaId: 'maintaId',
      updateControlId: 'updateControlId',
      enableDate: 'enableDate',
      isEnable: 'isEnable',
      isEnableCn: 'isEnableCn',
      carBrandCode: 'carBrandCode',
      carBrandCn: 'carBrandCn',
      carSeriesCode: 'carSeriesCode',
      carSeriesCn: 'carSeriesCn',
      sCarseriesCode: 'sCarseriesCode',
      sCarseriesDesc: 'sCarseriesDesc',
      serviceCarType: 'serviceCarType',
      maintaNo: 'maintaNo',
    }]
  }

})

// 保养维护明细____查询
const seDbEngCarTypeMaintaQueryInfoFindAll = Mock.mock({
  seDbEngCarTypeMaintaQueryInfoFindAll: {
    result: '1',
    pageindex: 1,
    pages: 1,
    records: 1,
    msg: 'success',
    'rows|5': [{                  //返回的字段
      maintaNo:"maintaNo",		
      maintaName:"maintaName",		
      maintaPrice:"maintaPrice",		
      begMailage:"begMailage",		
      endMailage:"endMailage",		
      fmaintaMaxMonth:"fmaintaMaxMonth",		
      createdName:"createdName",		
      modifyName:"modifyName",		
      createdDate:"createdDate",		
      lastUpdatedDate:"lastUpdatedDate",		
      maintaInfoId:"maintaInfoId",		
      maintaId:"maintaId",		
      updateControlId:"updateControlId",		
      isEnable:"isEnable",		
      isEnableCn:"isEnableCn",		
    }]
  }

})
// 保养维护___保存
const SeDbEngCarTypeMaintaMutationSave = Mock.mock({
  SeDbEngCarTypeMaintaMutationSave: {
      result: '1',
      msg: 'success'
  }
})

// 保养维护明细___保存
const SeDbEngCarTypeMaintaMutationInfoSave = Mock.mock({
  SeDbEngCarTypeMaintaMutationInfoSave: {
      result: '1',
      msg: 'success'
  }
})

//保养维护___删除
const SeDbEngCarTypeMaintaMutationDelete = Mock.mock({
  SeDbEngCarTypeMaintaMutationDelete:{
    result:'1',
    msg: 'success',
  }
})


//保养维护明细___删除
const SeDbEngCarTypeMaintaMutationInfoDelete = Mock.mock({
  SeDbEngCarTypeMaintaMutationInfoDelete:{
    result:'1',
    msg: 'success',
  }
})




export default [
  {
  //保养维护---查询
  url: apiMaintenance.seDbEngCarTypeMaintaQueryFindAll.APIUrl + cH + 'v=' + apiMaintenance.seDbEngCarTypeMaintaQueryFindAll.ServiceCode,
  type: 'post',
  response: config => {
    return {
      result: '1',
      msg: 'success',
      data: seDbEngCarTypeMaintaQueryFindAll
    }
  }
},
{
  //保养明细维护---查询
  url: apiMaintenance.seDbEngCarTypeMaintaQueryInfoFindAll.APIUrl + cH + 'v=' + apiMaintenance.seDbEngCarTypeMaintaQueryInfoFindAll.ServiceCode,
  type: 'post',
  response: config => {
    return {
      result: '1',
      msg: 'success',
      data: seDbEngCarTypeMaintaQueryInfoFindAll
    }
  }
},
{
  //保养维护---保存
  url: apiMaintenance.SeDbEngCarTypeMaintaMutationSave.APIUrl + cH + 'v=' + apiMaintenance.SeDbEngCarTypeMaintaMutationSave.ServiceCode,
  type: 'post',
  response: config => {
    return {
      result: '1',
      msg: 'success',
      data: SeDbEngCarTypeMaintaMutationSave
    }
  }
},
{
  //保养维护明细---保存
  url: apiMaintenance.SeDbEngCarTypeMaintaMutationInfoSave.APIUrl + cH + 'v=' + apiMaintenance.SeDbEngCarTypeMaintaMutationInfoSave.ServiceCode,
  type: 'post',
  response: config => {
    return {
      result: '1',
      msg: 'success',
      data: SeDbEngCarTypeMaintaMutationInfoSave
    }
  }
},
{
  //保养维护---删除
  url: apiMaintenance.SeDbEngCarTypeMaintaMutationDelete.APIUrl + cH + 'v=' + apiMaintenance.SeDbEngCarTypeMaintaMutationDelete.ServiceCode,
  type: 'post',
  response: config => {
    return {
      result: '1',
      msg: 'success',
      data: SeDbEngCarTypeMaintaMutationDelete
    }
  }
},{
  //保养维护明细---删除
  url: apiMaintenance.SeDbEngCarTypeMaintaMutationInfoDelete.APIUrl + cH + 'v=' + apiMaintenance.SeDbEngCarTypeMaintaMutationInfoDelete.ServiceCode,
  type: 'post',
  response: config => {
    return {
      result: '1',
      msg: 'success',
      data: SeDbEngCarTypeMaintaMutationInfoDelete
    }
  }
}
]
