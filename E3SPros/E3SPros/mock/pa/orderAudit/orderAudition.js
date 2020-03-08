import Mock from 'mockjs'
import { paApis } from '../../../src/api/graphQLApiList/pa'

const data7 = Mock.mock({ // 订单审核动态获取表头
  paDbOemAuditRuleQueryFindAll: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': '6',
    'msg': '成功',
    'rows': [
      {
        'auditRuleCode': '',
        'auditRuleId': '1',
        'auditRuleName': '是否使用运输方式转换+',
        'auditRuleRemark': '是否使用运输方式转换+',
        'auditRuleType': '1',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-07-18 20:37:34',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-07-18 20:37:34',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 1,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': '',
        'auditRuleId': '2',
        'auditRuleName': '是否使用替代件+',
        'auditRuleRemark': '是否使用替代件+',
        'auditRuleType': '1',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-07-19 09:49:09',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-07-19 09:49:09',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 2,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': '',
        'auditRuleId': '3',
        'auditRuleName': '是否判断库存+',
        'auditRuleRemark': '是否判断库存+',
        'auditRuleType': '1',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-08-10 14:06:15',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-08-10 14:06:15',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 3,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': '',
        'auditRuleId': '4',
        'auditRuleName': '是否判断经销商价+',
        'auditRuleRemark': '是否判断经销商价+',
        'auditRuleType': '1',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-08-10 14:06:58',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-08-10 14:06:58',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 4,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': '',
        'auditRuleId': '5',
        'auditRuleName': '是否写入可视化',
        'auditRuleRemark': '是否写入可视化',
        'auditRuleType': '1',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-08-10 14:07:36',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-08-10 14:07:36',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 5,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': '',
        'auditRuleId': '6',
        'auditRuleName': '是否产生缺件',
        'auditRuleRemark': '是否产生缺件',
        'auditRuleType': '1',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-08-10 14:08:18',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-08-10 14:08:18',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 6,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': '',
        'auditRuleId': '7',
        'auditRuleName': '分配前是否判断金额',
        'auditRuleRemark': '分配前是否判断金额',
        'auditRuleType': '1',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-08-10 14:09:26',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-08-10 14:09:26',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 7,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': '',
        'auditRuleId': '8',
        'auditRuleName': '是否判断备件流转状态',
        'auditRuleRemark': '是否判断备件流转状态',
        'auditRuleType': '1',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-08-10 14:10:10',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-08-10 14:10:10',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 8,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': 'PA0182',
        'auditRuleId': '9',
        'auditRuleName': '分配顺序',
        'auditRuleRemark': '分配顺序',
        'auditRuleType': '2',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-07-19 11:14:58',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-07-19 11:14:58',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 9,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': 'PA0155',
        'auditRuleId': '10',
        'auditRuleName': '分配仓库',
        'auditRuleRemark': '分配仓库',
        'auditRuleType': '2',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-08-10 14:12:05',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-08-10 14:12:05',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 10,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditRuleCode': 'PA0035',
        'auditRuleId': '11',
        'auditRuleName': '分配方式',
        'auditRuleRemark': '分配方式',
        'auditRuleType': '2',
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-08-10 14:13:35',
        'createdName': '1',
        'creator': '1',
        'groupCode': '1',
        'groupId': '1',
        'isEnable': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-08-10 14:13:35',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'orderNo': 11,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      }
    ]
  }

})

const data = Mock.mock({ // 订单审核查询
  paBuOemAuditGroupDQueryFindAll: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': '6',
    'msg': '成功',
    'rows': [
      {
        'auditGroupId': '1',
        'auditSequence': 1,
        'column1': null,
        'column10': null,
        'column2': null,
        'column3': null,
        'column4': null,
        'column5': null,
        'column6': null,
        'column7': null,
        'column8': null,
        'column9': null,
        'createdDate': '2019-07-18 11:44:06',
        'createdName': '1',
        'creator': '1',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'0','分配仓库':'0','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '1',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2019-07-18 11:44:06',
        'modifier': '1',
        'modifyName': '1',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '7',
        'purAssignTypeName': '1',
        'purOrderType': '7',
        'purOrderTypeName': '化学品订单',
        'remark': '测试',
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '1'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 10,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'1','分配仓库':'1','分配方式':'1'}",
        'groupCode': '1',
        'groupDId': '2',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '1',
        'purAssignTypeName': '????BO',
        'purOrderType': '5',
        'purOrderTypeName': '主机厂紧急订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83BD109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 20,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'2','分配仓库':'2','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '3',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '2',
        'purAssignTypeName': '????',
        'purOrderType': '5',
        'purOrderTypeName': '主机厂紧急订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83BF109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 30,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': '{"是否使用运输方式转换+":"0","是否使用替代件+":"1","是否判断库存+":"1","是否判断经销商价+":"0","是否写入可视化":"1","是否产生缺件":"1","分配前是否判断金额":"1","是否判断备件流转状态":"1","分配顺序":"3","分配仓库":"1","分配方式":"1"}',
        'groupCode': '1',
        'groupDId': '4',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '3',
        'purAssignTypeName': '?????BO',
        'purOrderType': '3',
        'purOrderTypeName': '专营店三包订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83C1109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 40,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'0','分配仓库':'2','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '5',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '7',
        'purAssignTypeName': '?????',
        'purOrderType': '3',
        'purOrderTypeName': '专营店三包订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83C9109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 50,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'0','分配仓库':'0','分配方式':'2'}",
        'groupCode': '1',
        'groupDId': '6',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '4',
        'purAssignTypeName': '?????BO',
        'purOrderType': '2',
        'purOrderTypeName': '专营店紧急订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83C3109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 60,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'1','分配仓库':'0','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '7',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '8',
        'purAssignTypeName': '?????',
        'purOrderType': '2',
        'purOrderTypeName': '专营店紧急订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83CB109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 70,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'0','分配仓库':'2','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '8',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '5',
        'purAssignTypeName': '?????BO',
        'purOrderType': '1',
        'purOrderTypeName': '专营店正常订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83C5109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 80,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'3','分配仓库':'0','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '9',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '6',
        'purAssignTypeName': '????BO',
        'purOrderType': '4',
        'purOrderTypeName': '主机厂正常订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83C7109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 90,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'0','分配仓库':'0','分配方式':'2'}",
        'groupCode': '1',
        'groupDId': '10',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '9',
        'purAssignTypeName': '?????',
        'purOrderType': '1',
        'purOrderTypeName': '专营店正常订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83CD109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 100,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'1','分配仓库':'0','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '11',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '10',
        'purAssignTypeName': '????',
        'purOrderType': '4',
        'purOrderTypeName': '主机厂正常订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83CF109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 110,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'0','分配仓库':'2','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '12',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '11',
        'purAssignTypeName': '????',
        'purOrderType': 'FK',
        'purOrderTypeName': null,
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83D1109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 120,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'3','分配仓库':'0','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '13',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '16',
        'purAssignTypeName': '???BO',
        'purOrderType': '7',
        'purOrderTypeName': '化学品订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83D3109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 130,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'0','分配仓库':'0','分配方式':'3'}",
        'groupCode': '1',
        'groupDId': '14',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '12',
        'purAssignTypeName': '???',
        'purOrderType': '7',
        'purOrderTypeName': '化学品订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83D3109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 140,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2015-01-20 22:05:16',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': "{'是否使用运输方式转换+':'1','是否使用替代件+':'1','是否判断库存+':'1','是否判断经销商价+':'1','是否写入可视化':'1','是否产生缺件':'1','分配前是否判断金额':'1','是否判断备件流转状态':'1','分配顺序':'0','分配仓库':'2','分配方式':'0'}",
        'groupCode': '1',
        'groupDId': '15',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2015-01-20 22:05:16',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '13',
        'purAssignTypeName': '????',
        'purOrderType': '6',
        'purOrderTypeName': '物流商流订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '0D16ED9E83D5109CE0530100007F4D8A'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 150,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2016-05-09 22:36:49',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': '{"是否使用运输方式转换+":"1","是否使用替代件+":"1","是否判断库存+":"0","是否判断经销商价+":"1","是否写入可视化":"1","是否产生缺件":"1","分配前是否判断金额":"1","是否判断备件流转状态":"1","分配顺序":"1","分配仓库":"0","分配方式":"0"}',
        'groupCode': '1',
        'groupDId': '16',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '1',
        'isSystem': '0',
        'lastUpdatedDate': '2016-05-09 22:36:49',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '14',
        'purAssignTypeName': '????BO',
        'purOrderType': '17',
        'purOrderTypeName': '特需订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '326ABD1F5D68F2B5E05342F01CACA76C'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 160,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2016-05-09 22:36:49',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': '{"是否使用运输方式转换+":"1","是否使用替代件+":"1","是否判断库存+":"1","是否判断经销商价+":"1","是否写入可视化":"1","是否产生缺件":"1","分配前是否判断金额":"1","是否判断备件流转状态":"1","分配顺序":"0","分配仓库":"0","分配方式":"2"}',
        'groupCode': '1',
        'groupDId': '17',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2016-05-09 22:36:49',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '15',
        'purAssignTypeName': '????',
        'purOrderType': '17',
        'purOrderTypeName': '特需订单',
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '326ABD1F5D69F2B5E05342F01CACA76C'
      },
      {
        'auditGroupId': '037A13F23C3E4947E0530100007FD95C',
        'auditSequence': 170,
        'column1': '1',
        'column10': '1',
        'column2': '1',
        'column3': '1',
        'column4': '1',
        'column5': '1',
        'column6': '1',
        'column7': '1',
        'column8': '1',
        'column9': '1',
        'createdDate': '2018-06-06 11:23:57',
        'createdName': 'DSJ',
        'creator': 'SYSTEM',
        'dynamicReturn': '{"是否使用运输方式转换+":"0","是否使用替代件+":"1","是否判断库存+":"0","是否判断经销商价+":"1","是否写入可视化":"1","是否产生缺件":"1","分配前是否判断金额":"1","是否判断备件流转状态":"1","分配顺序":"2","分配仓库":"0","分配方式":"0"}',
        'groupCode': '1',
        'groupDId': '18',
        'groupId': '1',
        'isAutoAudit': '1',
        'isEnable': '1',
        'isLackAudit': '0',
        'isSystem': '0',
        'lastUpdatedDate': '2018-06-06 11:23:57',
        'modifier': 'SYSTEM',
        'modifyName': 'DSJ',
        'mycatOpTime': null,
        'oemCode': '1',
        'oemId': '1',
        'purAssignType': '17',
        'purAssignTypeName': '?????',
        'purOrderType': 'ZY',
        'purOrderTypeName': null,
        'remark': null,
        'sdpOrgId': '2',
        'sdpUserId': '88888',
        'updateControlId': '6DF1B27EF3EC7933E0539EB919ACD109'
      }
    ]

  }
})

const data8 = Mock.mock({ // 订单审核保存
  paBuOemAuditGroupDMutationSave: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const data1 = Mock.mock({ // 零件清单维护
  paDbElementMutationSave: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const data2 = Mock.mock({ // 零件清单查询
  paDbElementQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': '6',
    'msg': '成功',
    'rows|4': [
      {
        'elementId': '',
        'elementCode': '009331281A',
        'elementNameEn': 'PLUG',
        'elementNameCn': '堵塞',
        'isEnable': '启用',
        'isEnableName': '',
        'unit': '个',
        'remark': 'JA首版清单',
        'partTypeId': 3,
        'partTypeName': '',
        'partTypeCode':	'',
        'vulnerableFlag': '',
        'vulnerableNote': '',
        'elementPicture':	'',
        'updateControlId': '',
        'creator':	'',
        'createdDate':	'',
        'modifier':	'',
        'lastUpdatedDate': ''
      }
    ]
  }
})

const data3 = Mock.mock({ // 备件类别维护
  paDbAttrTypeMutationSave: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const data6 = Mock.mock({ // 备件类别查询
  paDbAttrTypeQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': '6',
    'msg': '成功',
    'rows|4': [
      {
        'partTypeId': '1',
        'partTypeName': '保养件',
        'partTypeCode': '0',
        'isEnable': '启用',
        'isEnableCn':	'',
        'isRefine':	'否',
        'isRefineCn':	'',
        'groupFlag': '',
        'safeCoefficient': '',
        'partPropertyCode':	'',
        'partPropertyName':	'常用零件',
        'remark':	'100',
        'updateControlId': ','
      }
    ]
  }
})

const data4 = Mock.mock({ // 销售开关维护中的查询
  paDbPartListQueryFindAll: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': '6',
    'msg': '成功',
    'dataInfo': '',
    'rows|4': [
      {
        'partId': '',
        'oemCode': '',
        'groupCode': '',
        'partBrandCode': 'NI',
        'partNo': '0009141030-A034',
        'partName': '螺钉',
        'supplierId': '',
        'partFlowState': '正常',
        'partTypeId': '',
        'sparePartsCategory': '非易损件',
        'stockSwitch': '开放',
        'pvPurSwitch': '开放',
        'dlrOrderSwitch': '开放',
        'applicableModels': 'U13Z[Ⅰ+Ⅱ{A+B+C+D}]',
        'lastUpdatedDateS': '',
        'lastUpdatedDateD': '',
        'PartNameEN': 'PartNameEN',
        'unit': '个',
        'SNP': '1',
        'remark': '',
        'modifyTheReason': '修改原因'
      }
    ]
  }
})

const data5 = Mock.mock({ // 销售开关维护的保存
  paDbPartListMutationSavePartOrderSwitch: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const data9 = Mock.mock({ // 备件车型关系查询
  paDbPartCartypeRfQueryCarType: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': '6',
    'msg': '成功',
    'rows|3': [
      {
        'partCartypeRfId': '3e22ed682fe84f7ca278604991a560ad',
        'partId': '226b19fcce2242abacc03cef52863861',
        'fitCarTypeId':	'500861',
        'fitCarTypeName': 'HR16',
        'carSeriesId': '10060',
        'carSeriesCode': 'G11',
        'carSeriesCn': '轩逸经典'
      }
    ]
  }
})

const data10 = Mock.mock({ // 备件车型关系查询
  paDbPartCartypeRfMutationSaveCarType: {
    'result': '1',

    'msg': '成功'

  }
})

const flowData = Mock.mock({ // 备件流动类别查询
  flowQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows|31': [
      {
        'mobileClassId': '',
        'mobileClassNumber': '1234567',
        'mobileClassName': '轴承',
        'upperStandardValue': '20',
        'lowerStandardValue': '5',
        'coefficient': '1',
        'orderModercode': '',
        'orderModeName': '手动订货',
        'monthlyPurchaseFrequency': '5',
        'availablecode': '',
        'availableName': '可用',
        'systemData': '是',
        'remark': '',
        'updateControlId': ''
      }
    ]
  }
})

const supplierData = Mock.mock({ // 备件供应商管理查询
  paDbDlrSupplierQueryFindAllWindow: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'supplierId': '',
        'supplierCode': 'PV',
        'supplierName': '东风日产乘用车公司',
        'supplierType': '专营店',
        'supplierAddress': '广东省广州市花都区风神大道8号',
        'postalCode': '510800',
        'businessContact': '赵培',
        'businessContactPhone': '15344362581',
        'financialContact': '方喵',
        'financialContactPhone': '17342085560',
        'fax': '010-20000000',
        'Email': 'Aa@aa.com',
        'rate': '0.1',
        'remark': '',
        'updateControlId': ''
      },
      {
        'supplierId': '',
        'supplierCode': 'PVPASU-00001',
        'supplierName': '河北东风南方汽车销售服务有限公司定州分公司',
        'supplierType': '非专营店',
        'supplierAddress': '河北省定州市唐河循环经济产业园区',
        'postalCode': '073000',
        'businessContact': '林高',
        'businessContactPhone': '12577689051',
        'financialContact': '戴星',
        'financialContactPhone': '18233497865',
        'fax': '010-20001234',
        'Email': 'Bb@bb.com',
        'rate': '0.2',
        'remark': '',
        'updateControlId': ''
      }
    ]
  }
})

const supplierSaveData = Mock.mock({ // 备件供应商管理保存
  paDbDlrSupplierMutationSaveById: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const agreementUnitData = Mock.mock({ // 备件收款(协议单位 + 调拨销售单)查询
  PaBuDlrFlitOrderQueryFindAll: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows|4': [
      {
        'documentId': '',
        'documentType': '调拨销售单',
        'documentCode': 'DBH290119030001',
        'agreementUnit': '广州广利',
        'referencePricesAllGold': '192.80',
        'transfersPricesAllGold': '192.80',
        'receivedAmount': '192.80',
        'makeDate': '2019-03-29',
        'contact': '方喵',
        'contactPhone': '17342085560',
        'settlementStatus': '已结算',
        'updateControlId': ''
      }
    ]
  }
})

const twoServicesData = Mock.mock({ // 备件收款(协议单位 + 服务二网备件需求)查询
  twoServicesQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows|4': [
      {
        'documentId': '',
        'documentType': '调拨销售单',
        'documentCode': 'DBH290119030001',
        'agreementUnit': '广州广利',
        'referencePricesAllGold': '192.80',
        'transfersPricesAllGold': '192.80',
        'receivedAmount': '192.80',
        'makeDate': '2019-03-29',
        'contact': '方喵',
        'contactPhone': '17342085560',
        'settlementStatus': '已结算',
        'updateControlId': ''
      }
    ]
  }
})

const internalData = Mock.mock({ // 备件收款(内部 + 全部)查询
  internalQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows|4': [
      {
        'documentId': '',
        'documentType': '调拨销售单',
        'documentCode': 'DBH290119030001',
        'recipientsDepartment': '售后服务部',
        'recipientsPersonnel': '徐军',
        'totalPrice': '192.80',
        'makeDate': '2019-03-29',
        'outboundPersonnel': '专营店管理员',
        'outboundDate': '2018-06-15',
        'settlementStatus': '已结算',
        'updateControlId': ''
      }
    ]
  }
})

const agreementUnitDetailData = Mock.mock({ // 备件收款(协议单位明细)查询
  agreementUnitDetailQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows|4': [
      {
        'sparePartNo': '11210JE23B',
        'sparePartName': '减震块-发动机悬置',
        'costPrice': '420',
        'unit': '个',
        'number': '1',
        'unitPrice': '441',
        'totalPrice': '441',
        'referenceSalesPrice': '450',
        'sparePartsBrand': 'N',
        'sparePartsAttribute': '非常用零件',
        'sparePartsCategory': '一般易损件',
        'ThreePackagesKeyParts': '是'
      }
    ]
  }
})

const internalDetailData = Mock.mock({ // 备件收款(内部明细)查询
  internalDetailQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows|4': [
      {
        'sparePartNo': '11210JE23B',
        'sparePartName': '减震块-发动机悬置',
        'unit': '个',
        'deliveryNumber': '1',
        'salePrice': '441',
        'saleTotalPrice': '441',
        'excludingTaxPrice': '376',
        'includedTaxPrice': '450',
        'sparePartsBrand': 'N',
        'sparePartsAttribute': '非常用零件',
        'sparePartsCategory': '一般易损件',
        'ThreePackagesKeyParts': '是'
      }
    ]
  }
})

const salesOrdersSaveData = Mock.mock({ // 备件(调拨销售单)收款
  salesOrdersMutationSave: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const settlementSaveData = Mock.mock({ // 备件(结算)收款
  settlementMutationSave: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const paymentSettlementData = Mock.mock({ // 备件挂账结算查询
  paymentSettlementQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'documentId': '1',
        'documentType': '调拨销售单',
        'documentCode': 'DBH290119030001',
        'settlementStatus': '已结算',
        'agreementUnit': '启辰广州万江',
        'amountPayment': '488',
        'receivedPayment': '489',
        'differencePayment': '1',
        'differenceReason': '录入错误',
        'paymentTime': '2015-08-05 15:13:12',
        'affiliatedBranches': '广州风日',
        'updateControlId': '1'
      },
      {
        'documentId': '2',
        'documentType': '调拨销售单',
        'documentCode': 'DBH290119030001',
        'settlementStatus': '已结算',
        'agreementUnit': '启辰广州花都',
        'amountPayment': '488',
        'receivedPayment': '489',
        'differencePayment': '1',
        'differenceReason': '录入错误',
        'paymentTime': '2015-08-05 15:13:12',
        'affiliatedBranches': '广州风日',
        'updateControlId': '2'
      },
      {
        'documentId': '3',
        'documentType': '调拨销售单',
        'documentCode': 'DBH290119030001',
        'settlementStatus': '已结算',
        'agreementUnit': '启辰广州万江',
        'amountPayment': '488',
        'receivedPayment': '489',
        'differencePayment': '1',
        'differenceReason': '录入错误',
        'paymentTime': '2015-08-05 15:13:12',
        'affiliatedBranches': '广州风日',
        'updateControlId': '3'
      }
    ]
  }
})

const paymentSaveData = Mock.mock({ // 备件挂账结算收款
  paymentMutationSave: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const partServicesRefundData = Mock.mock({ // 备件退款——服务二网销售备件退款
  partServicesRefundQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'withdrawingId': '',
        'withdrawingType': '服务二网销售退款',
        'documentCode': 'DSH2901160400',
        'agreementUnit': '广州风日',
        'refundPayment': '828',
        'makeDate': '2015-10-15 10:00:23',
        'contact': '王五',
        'contactPhone': '1234566788',
        'refundStatus': '未退款',
        'updateControlId': ''
      },
      {
        'withdrawingId': '',
        'withdrawingType': '服务二网销售退款',
        'documentCode': 'DSH2901160400',
        'agreementUnit': '广州风日',
        'refundPayment': '828',
        'makeDate': '2015-10-15 10:00:23',
        'contact': '王五',
        'contactPhone': '1234566788',
        'refundStatus': '已退款',
        'updateControlId': ''
      }
    ]
  }
})

const partTransfersApplyData = Mock.mock({ // 备件退款——网点调拨退货申请
  partTransfersApplyQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'withdrawingId': '',
        'withdrawingType': '服务二网销售退款',
        'documentCode': 'DSH2901160400',
        'agreementUnit': '广州风日',
        'refundPayment': '828',
        'makeDate': '2015-10-15 10:00:23',
        'contact': '王五',
        'contactPhone': '1234566788',
        'refundStatus': '未退款',
        'updateControlId': ''
      },
      {
        'withdrawingId': '',
        'withdrawingType': '服务二网销售退款',
        'documentCode': 'DSH2901160400',
        'agreementUnit': '广州风日',
        'refundPayment': '828',
        'makeDate': '2015-10-15 10:00:23',
        'contact': '王五',
        'contactPhone': '1234566788',
        'refundStatus': '已退款',
        'updateControlId': ''
      }
    ]
  }
})

const storesCancelledData = Mock.mock({ // 备件退款——专营店间调拨取消
  storesCancelledQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'withdrawingId': '',
        'withdrawingType': '服务二网销售退款',
        'documentCode': 'DSH2901160400',
        'agreementUnit': '广州风日',
        'refundPayment': '828',
        'makeDate': '2015-10-15 10:00:23',
        'contact': '王五',
        'contactPhone': '1234566788',
        'refundStatus': '未退款',
        'updateControlId': ''
      },
      {
        'withdrawingId': '',
        'withdrawingType': '服务二网销售退款',
        'documentCode': 'DSH2901160400',
        'agreementUnit': '广州风日',
        'refundPayment': '828',
        'makeDate': '2015-10-15 10:00:23',
        'contact': '王五',
        'contactPhone': '1234566788',
        'refundStatus': '已退款',
        'updateControlId': ''
      }
    ]
  }
})

const recipientsRefundData = Mock.mock({ // 备件退款——领用退货申请
  recipientsRefundQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'withdrawingId': '',
        'withdrawingType': '服务二网销售退款',
        'documentCode': 'DSH2901160400',
        'recipientsDepartment': '售后服务',
        'recipientsPersonnel': '童文辉',
        'refundPayment': '828',
        'makeDate': '2015-10-15 10:00:23',
        'refundApplicant': '刘岩',
        'withdrawingTime': '2016/5/31',
        'refundStatus': '未退款',
        'updateControlId': ''
      },
      {
        'withdrawingId': '',
        'withdrawingType': '服务二网销售退款',
        'documentCode': 'DSH2901160400',
        'recipientsDepartment': '售后服务',
        'recipientsPersonnel': '童文辉',
        'refundPayment': '828',
        'makeDate': '2015-10-15 10:00:23',
        'refundApplicant': '刘岩',
        'withdrawingTime': '2016/5/31',
        'refundStatus': '已退款',
        'updateControlId': ''
      }
    ]
  }
})

const refundDetailData = Mock.mock({ // 备件退款——(全部明细)
  refundDetailQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows|4': [
      {
        'partId': '',
        'partNo': 'KGW401M162-123',
        'partName': '轴承',
        'unit': '个',
        'partBrand': 'N',
        'partAttribute': '金属件',
        'partCategory': '金属件',
        'threePackagesParts': '是',
        'updateControlId': ''
      }
    ]
  }
})

const startInventorylData = Mock.mock({ // 库存动态盘点---新建盘点单
  paBuDlrStorageQueryFindAllOne: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'partBrandName': 'N',
        'partBrandCode': '',
        'partNo': '123',
        'partId': '',
        'partName': '密封条',
        'partPropertyName': '非常用零件',
        'partPropertyCode': '',
        'partTypeName': '精品附件',
        'partTypeId': '',
        'unit': '个',
        'warehouseId': '',
        'warehouseCode': '',
        'warehouseName': '东风日产',
        'placeId': '',
        'placeCode': '1',
        'storeQty': '100'
      },
      {
        'partBrandName': 'NVI',
        'partBrandCode': '',
        'partNo': '12345',
        'partId': '',
        'partName': '海绵条',
        'partPropertyName': '常用零件',
        'partPropertyCode': '',
        'partTypeName': '精品附件',
        'partTypeId': '',
        'unit': '个',
        'warehouseId': '',
        'warehouseCode': '',
        'warehouseName': '东风日产',
        'placeId': '',
        'placeCode': '1',
        'storeQty': '100'
      },
      {
        'partBrandName': 'NVI',
        'partBrandCode': '',
        'partNo': '123456',
        'partId': '',
        'partName': '螺栓',
        'partPropertyName': '常用零件',
        'partPropertyCode': '',
        'partTypeName': '精品附件',
        'partTypeId': '',
        'unit': '个',
        'warehouseId': '',
        'warehouseCode': '',
        'warehouseName': '东风日产',
        'placeId': '',
        'placeCode': '1',
        'storeQty': '100'
      }
    ]
  }
})

const newInventorySaveData = Mock.mock({ // 库存动态盘点---新建盘点单保存
  paBuDlrStoreCheckSaveMutation: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const delInventorySaveData = Mock.mock({ // 库存动态盘点---删除盘点单
  paBuDlrStoreCheckDelMutation: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const endInventorySaveData = Mock.mock({ // 库存动态盘点---结束盘点
  paBuDlrStoreCheckEndMutation: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const inventoryModifiySaveData = Mock.mock({ // 库存动态盘点---盘点录入修改
  paBuDlrStoreCheckEditMutation: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const approvedSaveData = Mock.mock({ // 库存动态盘点---财务审核---审核通过
  paBuDlrStoreCheckAuditMutation: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const rejectedSaveData = Mock.mock({ // 库存动态盘点---财务审核---驳回
  paBuDlrStoreCheckBoMutation: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

const appliyClaimData = Mock.mock({ // 经销商索赔管理---经销商索赔申请---查询
  applyClaimQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'A1': '123',
        'A2': '43254431',
        'A3': '1234567889',
        'A4': '螺钉',
        'A5': '2019/08/30',
        'A6': ''
      },
      {
        'A1': '124',
        'A2': '43254433',
        'A3': '1234567889',
        'A4': '轴承',
        'A5': '2019/08/31',
        'A6': ''
      }
    ]
  }
})

const appliyClaimChooseData = Mock.mock({ // 经销商索赔管理---经销商索赔申请---选择
  applyClaimChooseQueryList: {
    'result': '1',
    'pageindex': '5',
    'pages': '10',
    'records': 6,
    'msg': '成功',
    'rows': [
      {
        'A1': 'N',
        'A2': '123456',
        'A3': '轴承',
        'A4': '个',
        'A5': '50',
        'A6': '47',
        'A7': '100.00',
        'A8': '3',
        'A9': '300.00',
        'A10': '1',
        'A11': ''
      },
      {
        'A1': 'N',
        'A2': '1234567',
        'A3': '螺母',
        'A4': '个',
        'A5': '50',
        'A6': '47',
        'A7': '10.00',
        'A8': '3',
        'A9': '30.00',
        'A10': '2',
        'A11': ''
      },
      {
        'A1': 'N',
        'A2': '123456',
        'A3': '轴承',
        'A4': '个',
        'A5': '50',
        'A6': '47',
        'A7': '100.00',
        'A8': '3',
        'A9': '300.00',
        'A10': '1',
        'A11': ''
      },
      {
        'A1': 'N',
        'A2': '1234567',
        'A3': '螺母',
        'A4': '个',
        'A5': '50',
        'A6': '47',
        'A7': '10.00',
        'A8': '3',
        'A9': '30.00',
        'A10': '2',
        'A11': ''
      }
    ]
  }
})

const appliyClaimSaveData = Mock.mock({ // 库存动态盘点---财务审核---保存(审核、驳回)
  appliyClaimSaveMutation: {
    'result': '1',
    'msg': '成功',
    'rows': ''
  }
})

export default [
  //    订单审核动态获取表头
  {
    url: paApis.paDbOemAuditRuleQueryFindAll.APIUrl + '/' + 'v=' + paApis.paDbOemAuditRuleQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data7,
        result: '1'
      }
    }
  },
  //   订单审核查询
  {
    url: paApis.paBuOemAuditGroupDQueryFindAll.APIUrl + '/' + 'v=' + paApis.paBuOemAuditGroupDQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data,
        result: '1'
      }
    }
  },
  //    订单审核保存
  {
    url: paApis.paBuOemAuditGroupDMutationSave.APIUrl + '/' + 'v=' + paApis.paBuOemAuditGroupDMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data8,
        'result': '1'
      }
    }
  },
  //     零件清单维护
  {
    url: paApis.paDbElementMutationSave.APIUrl + '/' + 'v=' + paApis.paDbElementMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data1,
        'result': '1'
      }
    }
  },
  //     零件清单查询
  {
    url: paApis.paDbElementQueryList.APIUrl + '/' + 'v=' + paApis.paDbElementQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data2,
        'result': '1'
      }
    }
  },
  //    备件类别维护
  {
    url: paApis.paDbAttrTypeMutationSave.APIUrl + '/' + 'v=' + paApis.paDbAttrTypeMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data3,
        'result': '1'
      }
    }
  },
  //    备件类别查询
  {
    url: paApis.paDbAttrTypeQueryList.APIUrl + '/' + 'v=' + paApis.paDbAttrTypeQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data6,
        'result': '1'
      }
    }
  },
  //    销售开关维护中的查询
  {
    url: paApis.paDbPartListQueryFindAll.APIUrl + '/' + 'v=' + paApis.paDbPartListQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data4,
        'result': '1'
      }
    }
  },
  //    销售开关维护中的保存
  {
    url: paApis.paDbPartListMutationSavePartOrderSwitch.APIUrl + '/' + 'v=' + paApis.paDbPartListMutationSavePartOrderSwitch.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data5,
        'result': '1'
      }
    }
  },
  // 备件车型关系查询
  {
    url: paApis.paDbPartCartypeRfQueryCarType.APIUrl + '/' + 'v=' + paApis.paDbPartCartypeRfQueryCarType.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data9,
        'result': '1'
      }
    }
  },
  // 备件车型关系保存
  {
    url: paApis.paDbPartCartypeRfMutationSaveCarType.APIUrl + '/' + 'v=' + paApis.paDbPartCartypeRfMutationSaveCarType.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: data10

      }
    }
  },
  // 备件流动类别查询
  {
    url: paApis.flowQueryList.APIUrl + '/' + 'v=' + paApis.flowQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: flowData,
        'result': '1'
      }
    }
  },
  // 备件供应商管理查询
  {
    url: paApis.paDbDlrSupplierQueryFindAllWindow.APIUrl + '/' + 'v=' + paApis.paDbDlrSupplierQueryFindAllWindow.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: supplierData,
        'result': '1'
      }
    }
  },
  // 备件供应商管理保存
  {
    url: paApis.paDbDlrSupplierMutationSaveById.APIUrl + '/' + 'v=' + paApis.paDbDlrSupplierMutationSaveById.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: supplierSaveData,
        'result': '1'
      }
    }
  },
  // 备件收款(协议单位 + 调拨销售单)查询
  {
    url: paApis.PaBuDlrFlitOrderQueryFindAll.APIUrl + '/' + 'v=' + paApis.PaBuDlrFlitOrderQueryFindAll.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: agreementUnitData,
        'result': '1'
      }
    }
  },
  // 备件收款(协议单位 + 服务二网备件需求)查询
  {
    url: paApis.twoServicesQueryList.APIUrl + '/' + 'v=' + paApis.twoServicesQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: twoServicesData,
        'result': '1'
      }
    }
  },
  // 备件收款(内部 + 全部)查询
  {
    url: paApis.internalQueryList.APIUrl + '/' + 'v=' + paApis.internalQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: internalData,
        'result': '1'
      }
    }
  },
  // 备件收款(协议单位明细)查询
  {
    url: paApis.agreementUnitDetailQueryList.APIUrl + '/' + 'v=' + paApis.agreementUnitDetailQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: agreementUnitDetailData,
        'result': '1'
      }
    }
  },
  // 备件收款(内部明细)查询
  {
    url: paApis.internalDetailQueryList.APIUrl + '/' + 'v=' + paApis.internalDetailQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: internalDetailData,
        'result': '1'
      }
    }
  },
  // 备件(调拨销售单)收款
  {
    url: paApis.salesOrdersMutationSave.APIUrl + '/' + 'v=' + paApis.salesOrdersMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: salesOrdersSaveData,
        'result': '1'
      }
    }
  },
  // 备件(结算)收款
  {
    url: paApis.settlementMutationSave.APIUrl + '/' + 'v=' + paApis.settlementMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: settlementSaveData,
        'result': '1'
      }
    }
  },
  // 备件挂账结算查询
  {
    url: paApis.paymentSettlementQueryList.APIUrl + '/' + 'v=' + paApis.paymentSettlementQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: paymentSettlementData,
        'result': '1'
      }
    }
  },
  // 备件挂账结算收款
  {
    url: paApis.paymentMutationSave.APIUrl + '/' + 'v=' + paApis.paymentMutationSave.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: paymentSaveData,
        'result': '1'
      }
    }
  },
  // 备件退款——服务二网销售备件退款
  {
    url: paApis.partServicesRefundQueryList.APIUrl + '/' + 'v=' + paApis.partServicesRefundQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: partServicesRefundData,
        'result': '1'
      }
    }
  },
  // 备件退款——网点调拨退货申请
  {
    url: paApis.partTransfersApplyQueryList.APIUrl + '/' + 'v=' + paApis.partTransfersApplyQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: partTransfersApplyData,
        'result': '1'
      }
    }
  },
  // 备件退款——专营店间调拨取消
  {
    url: paApis.storesCancelledQueryList.APIUrl + '/' + 'v=' + paApis.storesCancelledQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: storesCancelledData,
        'result': '1'
      }
    }
  },
  // 备件退款——领用退货申请
  {
    url: paApis.recipientsRefundQueryList.APIUrl + '/' + 'v=' + paApis.recipientsRefundQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: recipientsRefundData,
        'result': '1'
      }
    }
  },
  // 备件退款——(全部明细)
  {
    url: paApis.refundDetailQueryList.APIUrl + '/' + 'v=' + paApis.refundDetailQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: refundDetailData,
        'result': '1'
      }
    }
  },
  // 库存动态盘点---新建盘点单查询
  {
    url: paApis.paBuDlrStorageQueryFindAllOne.APIUrl + '/' + 'v=' + paApis.paBuDlrStorageQueryFindAllOne.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: startInventorylData,
        'result': '1'
      }
    }
  },
  // 库存动态盘点---新建盘点单保存
  {
    url: paApis.paBuDlrStoreCheckSaveMutation.APIUrl + '/' + 'v=' + paApis.paBuDlrStoreCheckSaveMutation.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: newInventorySaveData,
        'result': '1'
      }
    }
  },
  // 库存动态盘点---删除盘点单
  {
    url: paApis.paBuDlrStoreCheckDelMutation.APIUrl + '/' + 'v=' + paApis.paBuDlrStoreCheckDelMutation.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: delInventorySaveData,
        'result': '1'
      }
    }
  },
  // 库存动态盘点---结束盘点
  {
    url: paApis.paBuDlrStoreCheckEndMutation.APIUrl + '/' + 'v=' + paApis.paBuDlrStoreCheckEndMutation.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: endInventorySaveData,
        'result': '1'
      }
    }
  },
  // 库存动态盘点---盘点录入修改
  {
    url: paApis.paBuDlrStoreCheckEditMutation.APIUrl + '/' + 'v=' + paApis.paBuDlrStoreCheckEditMutation.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: inventoryModifiySaveData,
        'result': '1'
      }
    }
  },
  // 库存动态盘点---财务审核---审核通过
  {
    url: paApis.paBuDlrStoreCheckAuditMutation.APIUrl + '/' + 'v=' + paApis.paBuDlrStoreCheckAuditMutation.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: approvedSaveData,
        'result': '1'
      }
    }
  },
  // 库存动态盘点---财务审核---驳回
  {
    url: paApis.paBuDlrStoreCheckBoMutation.APIUrl + '/' + 'v=' + paApis.paBuDlrStoreCheckBoMutation.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: rejectedSaveData,
        'result': '1'
      }
    }
  },
  // 经销商索赔管理---经销商索赔申请---查询
  {
    url: paApis.applyClaimQueryList.APIUrl + '/' + 'v=' + paApis.applyClaimQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: appliyClaimData,
        'result': '1'
      }
    }
  },
  // 经销商索赔管理---经销商索赔申请---选择
  {
    url: paApis.applyClaimChooseQueryList.APIUrl + '/' + 'v=' + paApis.applyClaimChooseQueryList.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: appliyClaimChooseData,
        'result': '1'
      }
    }
  },
  // 经销商索赔管理---经销商索赔申请---保存(审核、驳回)
  {
    url: paApis.appliyClaimSaveMutation.APIUrl + '/' + 'v=' + paApis.appliyClaimSaveMutation.ServiceCode,
    type: 'post',
    response: config => {
      return {
        data: appliyClaimSaveData,
        'result': '1'
      }
    }
  }
]

