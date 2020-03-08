/**
* description: 搬入地设置模拟数据
* author: linwm
* createdDate: 2019-07-23
*/
import Mock from 'mockjs'

const cH = '/'
const mdsSysPositionQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsSysPositionQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 40,
      'rows|20': [
        {
          stationCode: 'X0010701',
          stationName: "充电桩管理部",
          orgId: "14",
          orgType: "总部",
          isEnable: '是',
          isEnableCode:"1",
          isInside: "是",
          updateControlId: "22caee2daceb40e7bd2601cb34893842"
        },
        {
          stationCode: 'SE-DLR-036',
          stationName: "专营店财务",
          orgType: "专营店",
          orgId: "15",
          isEnable: '是',
          isEnableCode:"1",
          isInside: "是",
          updateControlId: "22caee2daceb40e7bd2601cb34893832"
        }
      ]
    }
  }
})

//系统岗位对应业务岗位查询
const SysStation01 = Mock.mock({
  result: '1',
  msg: '',
  data: {
    SysStation01: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
          stationName: "服务总监",
          stationCode: "3801",
          orgTypeName:"售后服务部",
          isSelected:"1",
          updateControlId: "22caee2daceb40e7bd2601cb34893842"
        },
        {
          stationName: "服务顾问",
          stationCode: "3802",
          orgTypeName:"售后服务部",
          isSelected:"0",
          updateControlId: "32caee2daceb40e7bd2601cb34893832"
        },
        {
          stationName: "服务信息主管",
          stationCode: "5085",
          orgTypeName:"售后服务部",
          isSelected:"1",
          updateControlId: "42caee2daceb40e7bd2601cb34893832"
        },
        {
          stationName: "服务接待经理",
          stationCode: "5132",
          orgTypeName:"售后服务部",
          isSelected:"0",
          updateControlId: "52caee2daceb40e7bd2601cb34893832"
        }
      ]
    }
  }
})

// 岗位保存
const mdsSysPositionSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsSysPositionSave: {
      result: '1',
      msg: ''
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=mdsSysPositionQueryByPage',
    type: 'post',
    response: config => {
      return mdsSysPositionQueryByPage
    }
  },
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=mdsSysPositionSave',
    type: 'post',
    response: config => {
      return mdsSysPositionSave
    }
  },
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=SysStation01',
    type: 'post',
    response: config => {
      return SysStation01
    }
  }
]
