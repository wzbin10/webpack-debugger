import Easydemo from './components/easydemo'

const App = function () {
  var dom = document.getElementById('app')
  var easydemo = new Easydemo()
  dom.innerHTML = easydemo.template
  document.write(easydemo.name)
}

new App()