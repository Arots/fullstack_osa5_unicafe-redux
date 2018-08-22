const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  palautteita: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      state = {...state, good: state.good +1, palautteita: state.palautteita +1 }
      console.log(state)
      return state
    case 'OK':
      state = {...state, ok: state.ok +1, palautteita: state.palautteita +1 }
      console.log(state)
      return state
    case 'BAD':
      state = {...state, bad: state.bad +1, palautteita: state.palautteita +1 }
      console.log(state)
      return state
    case 'ZERO':
      return initialState
  }
  return state
}

export default counterReducer