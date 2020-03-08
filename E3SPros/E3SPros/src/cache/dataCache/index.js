/**
 * description: 缓存数据（全局）
 * author: luojx
 * createdDate: 2019-10-17
*/
import { isEqual, globalCheckIsExp } from '@/utils/index'
// 缓存对象
const CacheObject = {
  // 是否启用缓存
  useCache: true,
  // 缓存时长（秒）
  cacheSeconds: 120,
  // 清除过期缓存阀值
  maxCacheCount: 100,
  // 读取数据
  getData(queryObj, serviceCode) {
    if (!this.cacheData[serviceCode]) {
      return null
    }
    if (this.useCache === true && !this.checkIsExp(queryObj, this.cacheData[serviceCode])) {
      return this.cacheData[serviceCode].data
    } else {
      return null
    }
  },
  // 设置数据
  setData: function(queryObj, serviceCode, data) {
    const that = this
    that.cacheData[serviceCode] = {
      queryObj: queryObj,
      cacheTime: new Date(),
      data: data
    }
    that.cacheDataName.push(serviceCode)
    // 清除数据
    setTimeout(function() {
      that.removeExp()
    }, 0)
  },
  // 是否过期（true：过期，false：未过期）
  checkIsExp: function(newObj, cacheObj) {
    var eq = isEqual(newObj, cacheObj.queryObj)
    var exp = globalCheckIsExp(cacheObj.cacheTime, this.cacheSeconds)
    // 对象不存在或已经过期都返回true
    return eq !== true || exp === true
  },
  // 移除过期数据
  removeExp: function() {
    if (this.cacheDataName.length > this.maxCacheCount) {
      var arrCodes = []
      for (var i = 0; i < this.cacheDataName.length; i++) {
        if (this.cacheData[this.cacheDataName[i]] && globalCheckIsExp(this.cacheData[this.cacheDataName[i]].cacheTime, this.cacheSeconds)) {
          arrCodes.push(this.cacheDataName[i])
        }
      }
      if (arrCodes.length > 0) {
        for (var j = 0; j < arrCodes.length; j++) {
          delete this.cacheData[arrCodes[i]]
          var index = this.cacheDataName.indexOf(arrCodes[i])
          if (index > -1) {
            this.cacheDataName.splice(index, 1)
          }
        }
      }
    }
  },
  // 数据体，格式：{serviceCode:{data:xxx, cacheTime:xxx, queryObj:xxx}}
  cacheData: {},
  cacheDataName: []
}

export default {
  // 缓存对象
  CacheObject
}
