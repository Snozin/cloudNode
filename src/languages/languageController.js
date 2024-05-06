import i18n from '../utils/useTranslate'
import useStorage from '../utils/useStorage'

const languageController = {
  _currentLang: new kendo.data.ObservableObject({
    lang: useStorage.get('lang'),
  }),

  init() {
    console.log('prev: ', this._currentLang.get('lang'))

    if (!this._currentLang.get('lang')) {
      const actual = 'en'
      useStorage.set('lang', actual)
      this._currentLang.set('lang', actual)
    }

    console.log('post: ', this._currentLang.get('lang'))
    // this.changeLang()
  // },
  // changeLang() {
    this._currentLang.bind('change', () => {
      console.log('Cambié!!!')
      i18n.locale = this._currentLang.get('lang')
      console.log('Actual: ', this._currentLang.get('lang'))
    })
  },
  set(newLang) {
    this._currentLang.set('lang', newLang)
  },
}

export { languageController }
