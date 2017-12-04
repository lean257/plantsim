// Action Types
const START = 'START'
const STOP = 'STOP'

// Action Creators

export const start = () => ({ type: START })
export const stop = () => ({ type: STOP })

// Reducers

export default function gameReducer (state = false, action) {
  switch (action.type) {
    case START:
      return state
    case STOP:
      return true
    default:
      return state
  }
}
