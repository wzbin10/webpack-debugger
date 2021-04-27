import Easydemo from './components/easydemo'
import RateCanvas from './components/ratecanvas.js'

const App = function () {
  var dom = document.getElementById('app')
  var easydemo = new Easydemo()
  var rateCanvas = new RateCanvas()
  dom.innerHTML = easydemo.template
  rateCanvas.init(dom.querySelector("#rateCanvas"),[{currentNum:60,totalNum:100,currentName:"12"}])
}

new App()