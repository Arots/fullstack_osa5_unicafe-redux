import {createStore} from 'redux'

const counterReducer = (state = [], action) => {
    if (action.type === 'NEW_NOTE') {
        return state.concat(action.data)
      }
    
      return state
}

const store = createStore(counterReducer)