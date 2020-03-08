/**
 * description: 整车-配置缓存
 * author: luojx
 * createdDate: 2019-08-31
*/
import { getPageConfigs } from '@/api/config'
import store from '@/store'

// 缓存配置对象
export const CacheConfig = {
  // 是否启用配置化
  useConfig: false,
  // 是否启用配置缓存（本地缓存-预留）
  useCache: false,
  // 缓存时长（秒）
  cacheSeconds: 30,
  // 最大缓存记录（页面）数
  maxCacheCount: 100,
  // 获取缓存数据（path：路由路径/页面标识，cb：callback函数，useConfig：是否读取配置(优先级比this.useConfig高)）
  initData: function(path, cb, useConfig) {
    var data = {
      pageCode: path,
      lang: store.getters.language
    }
    var that = this

    if (useConfig === false) {
      if (typeof cb === 'function') {
        cb.call()
      }
      return
    }

    // 是否读取配置（从API读数）
    if (useConfig === undefined || useConfig === null) {
      if (that.useConfig !== true) {
        if (that.cacheData[data.pageCode]) {
          delete that.cacheData[data.pageCode]
        }
        if (typeof cb === 'function') {
          cb.call()
        }
        return
      }
    }

    // 读取缓存数据
    var cacheData = that.cacheData[data.pageCode]
    if (!cacheData) {
      that.cacheData[data.pageCode] = { lang: '', cacheTime: null, tableCols: [], tableComponents: [] }
      cacheData = that.cacheData[data.pageCode]
    }

    // 检查是否过期
    var isExp = false
    var now = new Date()
    now.setSeconds(now.getSeconds() - that.cacheSeconds)
    if (cacheData.cacheTime === null || now > cacheData.cacheTime || (cacheData.tableCols.length === 0 && cacheData.tableComponents.length === 0)) {
      isExp = true
    }
    if (isExp) {
      // 已过期
      // 初始化
      cacheData.tableCols = []
      cacheData.tableComponents = []
      cacheData.formComponents = []
      try {
        // 未过期则读取API数据
        getPageConfigs(data).then(response => {
          if (response.data.proConfigInfoQueryByPage && response.data.proConfigInfoQueryByPage.rows && response.data.proConfigInfoQueryByPage.rows.length > 0) {
            response.rows = response.data.proConfigInfoQueryByPage.rows[0]
            // 语言
            cacheData.lang = data.lang
            // 时间
            cacheData.cacheTime = new Date()
            // 网格
            var tempTableCols = response.rows.cols
            for (var index in tempTableCols) {
              tempTableCols[index]['label'] = tempTableCols[index].proConfigLangExtend.langLabel
              delete tempTableCols[index]['proConfigLangExtend']
            }
            cacheData.tableCols = tempTableCols
            // debugger
            if (cacheData.tableCols.filter(o => o.isComponent === true || o.isComponent === '1').length > 0) {
              for (var j = 0; j < cacheData.tableCols.length; j++) {
                // 设置值转换
                this.setDefaultValue(cacheData.tableCols[j])
                // 网格中存在组件判断
                if (cacheData.tableCols[j]['isComponent'] && (cacheData.tableCols[j]['isComponent'] === true || cacheData.tableCols[j]['isComponent'] === '1')) {
                  cacheData.tableCols[j]['comps'] = []
                  // 网格中组件
                  var tableComps = response.rows.comps.filter(o => o.compType === 'TABLE' && o.colsId === cacheData.tableCols[j]['colsId'])
                  for (var k = 0; k < tableComps.length; k++) {
                    var compObj = tableComps[k]
                    if (compObj['component']) {
                      const attrComponent = compObj['component']
                      compObj['component'] = () => import(`@/components/${attrComponent}`)
                    }
                    // clickEvent暂未实现
                    if (compObj['clickEvent'] && compObj['clickEvent'].length > 0) {
                      compObj['clickEvent'] = () => null
                    } else {
                      compObj['clickEvent'] = () => null
                    }
                    // 设置值转换
                    this.setDefaultValue(compObj)

                    cacheData.tableCols[j]['comps'].push(compObj)
                  }
                  cacheData.tableCols[j]['isComponent'] = true
                }
              }
            }
            // 非网格组件
            var formComps = response.rows.comps.filter(o => o.compType !== 'TABLE')
            for (let i = 0; i < formComps.length; i++) {
              var formObj = formComps[i]
              const component = formComps[i].component
              formObj['component'] = () => import(`@/components/${component}`)
              // clickEvent暂未实现
              if (formObj['clickEvent'] && formObj['clickEvent'].length > 0) {
                formObj['clickEvent'] = () => null
              } else {
                formObj['clickEvent'] = () => null
              }
              // 设置值转换
              this.setDefaultValue(formObj)

              formObj['labelName'] = formObj.proConfigLangExtend.langLabel
              delete formObj['proConfigLangExtend']
              if (formComps[i].compType === 'QUERY') {
                // 查询条件组件
                cacheData.tableComponents.push(formObj)
              } else if (formComps[i].compType === 'FORM') {
                // 表单组件
                cacheData.formComponents.push(formObj)
              }
            }
          }
          // 压入队列
          that.setQueue(path)
          if (typeof cb === 'function') {
            cb.call(response)
          }
        })
      } catch (e) {
        console.log(e)
        if (typeof cb === 'function') {
          cb.call()
        }
      }
    } else {
      // 未过期
      // 回调
      // 压入队列
      that.setQueue(path)
      if (typeof cb === 'function') {
        cb.call()
      }
    }
  },
  // 设置默认值（值转换）
  setDefaultValue: function(formObj) {
    if (formObj['controlType'] && !formObj['type']) {
      formObj['type'] = formObj['controlType']
      delete formObj['controlType']
    }
    // clearable
    if (formObj['clearable'] && formObj['clearable'] === '1') {
      formObj['clearable'] = true
    } else {
      formObj['clearable'] = false
    }
    // isMul
    if (formObj['isMul'] && formObj['isMul'] === '1') {
      formObj['isMul'] = true
    } else {
      formObj['isMul'] = false
    }
    // isMust
    if (formObj['isMust'] && formObj['isMust'] === '1') {
      formObj['isMust'] = true
    } else {
      formObj['isMust'] = false
    }
    // isShowLabel
    if (formObj['isShowLabel'] && formObj['isShowLabel'] === '1') {
      formObj['isShowLabel'] = true
    } else {
      formObj['isShowLabel'] = false
    }
    // filterable
    if (formObj['filterable'] && formObj['filterable'] === '1') {
      formObj['filterable'] = true
    } else {
      formObj['filterable'] = false
    }
    // isRequire
    if (formObj['isRequire'] && formObj['isRequire'] === '1') {
      formObj['isRequire'] = true
    } else {
      formObj['isRequire'] = false
    }
    // sortable
    if (formObj['sortable'] && formObj['sortable'] === '1') {
      formObj['sortable'] = true
    } else {
      formObj['sortable'] = false
    }
    // hidden
    if (formObj['hidden'] && formObj['hidden'] === '1') {
      formObj['hidden'] = true
    } else {
      formObj['hidden'] = false
    }
    // isSys
    if (formObj['isSys'] && formObj['isSys'] === '1') {
      formObj['isSys'] = true
    } else {
      formObj['isSys'] = false
    }
    // isComponent
    if (formObj['isComponent'] && formObj['isComponent'] === '1') {
      formObj['isComponent'] = true
    } else {
      formObj['isComponent'] = false
    }
    for (const key in formObj) {
      if (formObj[key] === '' || formObj[key] === null) {
        delete formObj[key]
      }
    }
  },
  // 缓存页面列表
  // 如：采购单驳回：'/vemodule/vePurchase/vePurchaseReject': { lang: '', cacheTime: null, tableCols: [], tableComponents: [] }
  cacheData: {},
  // 热点数据队列
  cacheQueue: [],
  // 压入队列
  setQueue: function(path) {
    var index = this.cacheQueue.findIndex(o => o === path)
    if (index >= 0) {
      this.cacheQueue.splice(index, 1)
    }
    // 插入到队列最后
    this.cacheQueue.push(path)
    this.delQueue(path)
  },
  // LRU清除队列
  delQueue: function(path) {
    if (this.cacheQueue.length > this.maxCacheCount) {
      // 不删除当前访问缓存
      if (path !== this.cacheQueue[0]) {
        // 删除第一条记录对应的缓存数据
        if (this.cacheData[this.cacheQueue[0]]) {
          delete this.cacheData[this.cacheQueue[0]]
        }
        // 删除第一条记录
        if (this.cacheQueue.length > 0) {
          this.cacheQueue.splice(0, 1)
        }
      }
    }
  }
}
