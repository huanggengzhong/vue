import Vue from 'vue'
export function componentsInit(componentsContext){
    componentsContext.keys().forEach((component, index) => {
      // 获取文件中的 default 模块
      try {
        const componentConfig = componentsContext(component).default
        if (componentConfig.name) {
          Vue.component(componentConfig.name, componentConfig)
        } else {
          // 输出错误组件日志
          console.log(componentConfig.name +'组件:\n位置=>' +index+':'+'\n组件config=>'+JSON.stringify(componentConfig))
          return false
        }
      } catch (error) {
        console.log(error)
        return false
      }
    })
}
