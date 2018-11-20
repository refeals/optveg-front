import React, { Component } from 'reactn'

class App extends Component {
  render() {
    return (
      <div className="optveg-app">
        <p>Optveg</p>
        <p>{this.global.places.length}</p>
      </div>
    )
  }
}

export default App
