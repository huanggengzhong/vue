import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import elementFrLocale from 'element-ui/lib/locale/lang/fr'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import frLocale from './fr'
Vue.use(VueI18n)

// 定义语言配置（包括：自定义配置、ElementUI内部配置）
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  },
  fr: {
    ...frLocale,
    ...elementFrLocale
  }
}

// 获取配置语言
export function getLanguage() {
  // 从cookie中读取
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage
  // 从浏览器语言中读取
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  // 默认返回zh（中文）
  return 'zh'
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh | fr
  locale: getLanguage(),
  // set locale messages
  messages,
  silentTranslationWarn: true
})
// console.log(messages)
export default i18n
