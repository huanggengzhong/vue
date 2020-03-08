// 过滤器
import Vue from 'vue'

// 控制字体溢出样式-超过限定字数即显示“...”
Vue.filter('ellipsis', (value) => {
  const cNumber = '4'// 设置限定字数
  if (!value) return ''
  if (value.length > cNumber) {
    return value.slice(0, cNumber) + '...'
  }
  return value
})
