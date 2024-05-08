import i18n from '../utils/useTranslate'

const $ = kendo.jQuery

const RecoverForm = () => {
  const recoverSection = $('<div>')
  recoverSection.attr('id', 'recoverSection')
  recoverSection.addClass('container')

  const recoverInner = $('<div>')
  recoverInner.attr('id', 'recover')
  recoverInner.addClass('row justify-content-center align-middle')
  recoverSection.append(recoverInner)

  const sectionInner = $('<div>')
  sectionInner.addClass('col-sm-8 col-lg-5')
  recoverInner.append(sectionInner)

  const header = $('<div>')
  header.addClass('card-header')
  sectionInner.append(header)

  const title = $('<h3>')
  title.text(`${i18n.t('recover.title')}`)
  header.append(title)
}

export default RecoverForm
