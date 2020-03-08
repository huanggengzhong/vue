/**
* description:通知场景模拟数据
* author: linwm
* createdDate: 2019-07-23
*/
import Mock from 'mockjs'

const cH = '/'
const mdsSysSceneSettingQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsSysSceneSettingQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 3,
      rows: [
        {
            sceneCode: 'PA043',
            sceneDesc:"备件价格设定提醒-新件未设定网点价,旧件库存为零",
            belongtoCode:"PA",
            belongto:"备件",
            sendTypeCode:"20",
            sendType:"电子邮件",
            isEnable:"1",
            updateControlId:"22caee2daceb40e7bd2601cb34893842"
        },
        {
            sceneCode: 'SE003',
            sceneDesc:"保修上账通知",
            belongtoCode:"SE",
            belongto:"服务",
            sendTypeCode:"19",
            sendType:"电话",
            isEnable:"0",
            updateControlId:"22caee2daceb40e7bd2601cb34893832"
        }
      ]
    }
  }
})

//通知场景对象查询
const mdsSysSceneSettingDQueryByPage = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsSysSceneSettingDQueryByPage: {
      result: '1',
      msg: '',
      pageindex: 1,
      pagesize: 1000,
      pages: 1,
      records: 2,
      rows: [
        {
          receiver:"CWS备用",
          receiveType:"0",
          isEnable:"1",
          updateControlId:"12caee2daceb40e7bd2601cb34893832"
        },
        {
          receiver:"二手车专员",
          receiveType:"1",
          isEnable:"0",
          updateControlId:"22caee2daceb40e7bd2601cb34893832"
        },
        {
          receiver:"CWS备用",
          receiveType:"0",
          isEnable:"1",
          updateControlId:"32caee2daceb40e7bd2601cb34893832"
        },
        {
          receiver:"二手车专员",
          receiveType:"1",
          isEnable:"0",
          updateControlId:"42caee2daceb40e7bd2601cb34893832"
        },
        {
          receiver:"CWS备用",
          receiveType:"0",
          isEnable:"1",
          updateControlId:"52caee2daceb40e7bd2601cb34893832"
        },
        {
          receiver:"二手车专员",
          receiveType:"1",
          isEnable:"0",
          updateControlId:"62caee2daceb40e7bd2601cb34893832"
        },
        {
          receiver:"CWS备用",
          receiveType:"0",
          isEnable:"1",
          updateControlId:"72caee2daceb40e7bd2601cb34893832"
        },
      ]
    }
  }
})

// 通知场景保存
const mdsSysSceneSettingMutationSave = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsSysSceneSettingMutationSave: {
      result: '1',
      msg: ''
    }
  }
})

// 通知场景对象保存
const mdsSysSceneSettingDMutation = Mock.mock({
  result: '1',
  msg: '',
  data: {
    mdsSysSceneSettingDMutation: {
      result: '1',
      msg: ''
    }
  }
})

export default [
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdsSysSceneSettingQueryByPage',
    type: 'post',
    response: config => {
      return mdsSysSceneSettingQueryByPage
    }
  },
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdsSysSceneSettingMutationSave',
    type: 'post',
    response: config => {
      return mdsSysSceneSettingMutationSave
    }
  },
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdsSysSceneSettingDMutation',
    type: 'post',
    response: config => {
      return mdsSysSceneSettingDMutation
    }
  },
  {
    url: '/ly/mp/busicen/prc/graphql.do' + cH + 'v=mdsSysSceneSettingDQueryByPage',
    type: 'post',
    response: config => {
      return mdsSysSceneSettingDQueryByPage
    }
  }
]
