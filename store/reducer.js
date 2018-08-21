import {createStore} from 'redux'

const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = [], action) => {
    if (action.type === 'NEW_NOTE') {
        return state.concat(action.data)
      }
    
      return state
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return state.getState().map(state => state.good +1 )
    case 'OK':
      return store.getState().map(state => state.ok +1 )
    case 'BAD':
      return state.getState().map(state => state.bad +1 )
    case 'ZERO':
      return state.getState()
  }
  return state
}

const store = createStore(counterReducer)
store.subscribe(() => {
  console.log(state.getState())
})

export default { counterReducer, store }