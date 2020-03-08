/**
 * description: 水印
 * author: luojx
 * createdDate: 2019-07-25
*/
import config from './config'
const watermark = {}

const setWatermark = (str, canvasId) => {
  const id = '1.23452384164.123412415'
  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }

  const can = document.createElement('canvas')
  can.width = '280'
  can.height = '280'

  const cans = can.getContext('2d')

  cans.rotate(-45 * Math.PI / 180)
  cans.font = '20px Arial'
  cans.fillStyle = 'rgba(200, 200, 200, 0.50)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(str, -100, 210)

  const div = document.createElement('div')
  div.id = id
  div.style.pointerEvents = 'none'
  div.style.top = '45px'
  div.style.left = '55px'
  div.style.bottom = '30px'
  div.style.right = '10px'
  div.style.position = 'fixed'
  div.style.zIndex = '100000'
  // div.style.width = document.documentElement.clientWidth + 'px'
  // div.style.height = document.documentElement.clientHeight + 'px'
  div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  document.body.appendChild(div)
  return id
}

// 该方法只允许调用一次
watermark.set = (str) => {
  if (config.useWaterMark) {
    let id = setWatermark(str)
    setInterval(() => {
      if (document.getElementById(id) === null) {
        id = setWatermark(str)
      }
    }, 500)
    window.onresize = () => {
      setWatermark(str)
    }
  }
}

export default watermark
