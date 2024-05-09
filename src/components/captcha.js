//TODO pendiente implementar para la nueva arquitectura
const $ = kendo.jQuery

function Captcha(wrapper) {
  // Methods for internal function
  const generateText = () => {
    let captcha = ''
    for (let i = 0; i < 3; i++) {
      captcha += generateRandomChar(65, 90)
      captcha += generateRandomChar(97, 122)
      captcha += generateRandomChar(48, 57)
    }

    return captcha
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('')
  }

  const generateRandomChar = (min, max) => {
    return String.fromCharCode(
      Math.floor(Math.random() * (max - min + 1) + min)
    )
  }

  const drawOnCanvas = (ctx, captcha) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    // const textColors = ['rgb(255,255,255)', 'rgb(130,130,130)']
    const letterSpace = 275 / captcha.length

    for (let i = 0; i < captcha.length; i++) {
      const xInitialSpace = 40
      ctx.font = '40px Monospace'
      // ctx.fillStyle = textColors[Math.floor(Math.random() * 2)]
      ctx.fillStyle = 'black'
      ctx.textBaseline = 'middle'
      ctx.fillText(
        captcha[i],
        xInitialSpace + i * letterSpace,
        // Randomize Y position slightly
        Math.floor(Math.random() * 16 + 45),
        100
      )
    }
  }

  const wrapperRef = wrapper
  const inner = $('<div>').attr('id', 'innerContainer')
  wrapperRef.append(inner)

  const canvas = $('<canvas>').attr('id', 'captchaCanvas')
  canvas.attr('width', '350')
  canvas.attr('height', '100')
  inner.append(canvas)

  const context = canvas.get(0).getContext('2d')
  const initialText = generateText()

  drawOnCanvas(context, initialText)

  let actualText = initialText
  console.log('Captcha: ', actualText)

  const refreshCaptcha = () => {
    actualText = generateText()
    console.log('Captcha: ', actualText)
    drawOnCanvas(context, actualText)
  }

  const validateCaptcha = (newText) => {
    return actualText === newText
  }

  return {
    refreshCaptcha,
    validateCaptcha,
  }
}

export default Captcha
