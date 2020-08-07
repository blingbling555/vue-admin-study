import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // 英语
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// 中文
import elementKoLocale from 'element-ui/lib/locale/lang/ko'// 韩语
import elementJaLocale from 'element-ui/lib/locale/lang/ja'// 日语
import ja from './ja'
import ko from './ko'
import zh from './zh'
import en from './en'


Vue.use(VueI18n)
const messages = {
  en: {
    ...en,
    ...elementEnLocale
  },
  zh: {
    ...zh,
    ...elementZhLocale
  },
  ko: {
    ...ko,
    ...elementKoLocale
  },
  ja: {
    ...ja,
    ...elementJaLocale
  }
}

export function getLanguage() {
  const chooseLanguage = Cookies.get('language')
  if (chooseLanguage) return chooseLanguage

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase()
  const locales = Object.keys(messages)
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale
    }
  }
  return 'en'
}
const i18n = new VueI18n({
  // set locale
  // options: en | zh | es
  locale: getLanguage(),
  // set locale messages
  messages
})

export default i18n