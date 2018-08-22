import React from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import store from './store'

const Statistiikka = () => {

  if (store.getState().palautteita === 0) {
    return (
      <div>
        <h2>stataistiikka</h2>
        <div>ei yhtään palautetta annettu</div>
      </div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
      <table>
        <tbody>
          <tr>
            <td>hyvä</td>
            <td>{store.getState().good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{store.getState().ok}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{store.getState().bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{store.getState().good - store.getState().bad}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{store.getState().good / store.getState().palautteita} </td>
          </tr>
        </tbody>
      </table>

      <button type="button" onClick={e => store.dispatch({ type: 'ZERO' })}>
        nollaa tilasto</button>
    </div >
  )
}

class App extends React.Component {
  klik = (nappi) => () => {
    switch (nappi) {
      case 'GOOD':
        store.dispatch({ type: 'GOOD' })
        break
      case 'OK':
        store.dispatch({ type: 'OK' })
        break
      case 'BAD':
        store.dispatch({ type: 'BAD' })
        break
    }
  }

  render() {
    return (
      <div>
        <h2>anna palautetta</h2>
        <button onClick={this.klik('GOOD')}>hyvä</button>
        <button onClick={this.klik('OK')}>neutraali</button>
        <button onClick={this.klik('BAD')}>huono</button>
        <Statistiikka />
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

render()
store.subscribe(render)
export default App;
