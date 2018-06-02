import LcCity from './src/lc-city.js'
// var LcCity = require('./src/lc-city.js')

var baseInput = document.getElementById('base')
var defaultInput = document.getElementById('default')

var baseCity = new LcCity({
  confirm: (data) => {
    baseInput.value = data
  }
})

baseInput.addEventListener('click', () => {
  baseCity.show(this)
})

// 有默认选项，进行回填
var defaultCity = new LcCity({
  data: {
    province: '江西省',
    city: '南昌市',
    district: '青山湖区'
  },
  confirm: (data) => {
    defaultInput.value = data
  }
})
defaultInput.addEventListener('click', () => {
  defaultCity.show()
})
