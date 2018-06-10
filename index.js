import LcCity from './src/lc-city.js'
import address from './src/address.json'

var baseInput = document.getElementById('base')
var defaultInput = document.getElementById('default')

var baseCity = new LcCity({
  json: address,
  confirm: (data) => {
    baseInput.value = `${data.province}-${data.city}-${data.district}`
  }
})

baseInput.addEventListener('click', () => {
  baseCity.show(this)
})

// 有默认选项，进行回填
var defaultCity = new LcCity({
  json: address,
  data: {
    province: '广东省',
    city: '深圳市',
    district: '南山区'
  },
  confirm: (data) => {
    defaultInput.value = `${data.province}-${data.city}-${data.district}`
  }
})
defaultInput.addEventListener('click', () => {
  defaultCity.show()
})
