import * as React from 'react'
import Game from '../Game'
import './styles.css'

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div>
          <Game />
        </div>
        <div />
      </div>
    )
  }
}

export default App