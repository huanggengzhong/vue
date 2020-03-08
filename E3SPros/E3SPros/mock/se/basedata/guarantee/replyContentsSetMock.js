/**
 *  批复内容个性设置
 */
import Mock from 'mockjs'
import { apiSeReply } from '../../../../src/api/graphQLApiList/se'
const cH = '/'

//查询
const seDbReplyQueryData = Mock.mock({
  replyContentsSetQuery: {
    result: '1',
    pageindex: '1',
    pages: '1',
    records: '30',
    msg: '',
    'rows|30': [{
        replyTypeName: '保修申请',
        replyTypeCode: '1',
        replyPerson: 'ZPF',
        replyContents: 'ReplyContents',
        replyOrder: '1',
        isEnable: '1',
        isEnableCode: '0000',
        replyId: 'r48rtrgjfi8brnbfh8gnbfhxn'
    }]
  }
})

//保存
const seDbReplySaveData = Mock.mock({
  replyContentsSetSave: {
    result: '1',
    msg: 'success'
  }
})

export default [
  {
    url: apiSeReply.replyContentsSetQuery.APIUrl + cH + 'v=' + apiSeReply.replyContentsSetQuery.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbReplyQueryData,
        result: '1'
      }
    }
  },
  {
    url: apiSeReply.replyContentsSetSave.APIUrl + cH + 'v=' + apiSeReply.replyContentsSetSave.ServiceCode,
    type: 'post',
    response: config => {
        return {
        code: 20000,
        data: seDbReplySaveData,
        result: '1'
      }
    }
  },
]
