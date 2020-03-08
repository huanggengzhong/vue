import Mock from 'mockjs'

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
  query: {
    result: '1',
    msg: 'success',
    data: {
      sysGloableRoleQueryByPage1: {
        result: '1',
        records: 33,
        pageindex: 1,
        pages: 3,
        msg: '查询成功',
        'rows|33': [{
          'id|+1': 1,
          'brandName|1': [
            '东风日产-日产',
            '东风日产-启辰',
            '东风日产-进入尼桑'
          ],
          'carSeries|1': [
            '轩逸',
            '全新途达',
            '西玛'
          ],
          'carColor|1': [
            '银灰色',
            '白色',
            '黑色',
            '灰色'
          ],
          catType: 'DFL7200VBNL2-FJE',
          'carTypeConfig|1': [
            'BDBALJWA36EXA',
            'BDBALJWA88EXB'
          ],
          'isEnable|1': [
            '0',
            '1'
          ],
          'status|0-1': 1,
          'editDate': '@DATETIME("yyyy-MM-dd")'
        }]
      }
    }
  },
  save: {
    result: '1',
    msg: 'success',
    data: {
      sysRoleGlobalMutationSave: {
        result: '1',
        records: 33,
        pageindex: 1,
        pages: 3,
        msg: '保存成功',
        'rows|33': [{
          'id|+1': 1,
          'brandName|1': [
            '东风日产-日产',
            '东风日产-启辰',
            '东风日产-进入尼桑'
          ],
          'carSeries|1': [
            '轩逸',
            '全新途达',
            '西玛'
          ],
          'carColor|1': [
            '银灰色',
            '白色',
            '黑色',
            '灰色'
          ],
          catType: 'DFL7200VBNL2-FJE',
          'carTypeConfig|1': [
            'BDBALJWA36EXA',
            'BDBALJWA88EXB'
          ],
          'isEnable|1': [
            '0',
            '1'
          ],
          'status|0-1': 1,
          'editDate': '@DATETIME("yyyy-MM-dd")'
        }]
      }
    }
  }
})

export default [
  {
    // url:RegExp(/\/ly\/mp\/busicen\/orc\/graphql\.do\?/),
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=sysGloableRoleQueryByPage1',
    type: 'post',
    response: config => {
      // 获取查询条件
      var params = config.body.variables
      //  var query =data.query;
      var dataInfo = config.body.variables.dataInfo
      var response = []
      var str1 = config.body.query.substring(config.body.query.indexOf('{'))
      var inputType = str1.substring(1, str1.indexOf('('))
      var returnData = cloneObj(data.query)
      // 需要查询的条件 单一 没有这个条件就注释
      if (dataInfo.isEnable !== '') {
        for (var i = 0; i < returnData.data[inputType].rows.length; i++) {
          if (returnData.data[inputType].rows[i].isEnable === params.dataInfo.isEnable) {
            response.push(returnData.data[inputType].rows[i])
          }
        }
        returnData.data[inputType].rows = response
        returnData.data[inputType].records = response.length
      }

      // 分页查询
      if (params.pageIndex === 1) {
        returnData.data[inputType].rows = returnData.data[inputType].rows.slice(0, params.pageSize)
      } else if (params.pageIndex !== 1 && params.pageIndex !== returnData.data[inputType].pages + 1) {
        returnData.data[inputType].rows = returnData.data[inputType].rows.slice(parseInt(params.pageIndex * params.pageSize - params.pageSize), params.pageIndex * params.pageSize)
      } else {
        returnData.data[inputType].rows = returnData.data[inputType].rows.slice(-(returnData.data[inputType].records) % params.pageSize)
      }
      /*
        //普通查询
         var query =data.query;
      */

      return {
        ...returnData
        // ...query
      }
    }
  },
  {
    url: '/ly/mp/busicen/usc/graphql.do' + cH + 'v=sysRoleGlobalMutationSave',
    type: 'post',
    response: config => {
      var save = data.save
      return {
        ...save
      }
    }
  }
]
