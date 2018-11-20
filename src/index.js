import React, { setGlobal } from 'reactn'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

setGlobal({
  places: [],
})

ReactDOM.render(<App />, document.getElementById('root'))