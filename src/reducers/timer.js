// Action Types
const START = 'START'
const STOP = 'STOP'

// Action Creators

export const start = time => ({ type: START, time })
export const stop = time => ({ type: STOP, time })

// Reducers

export default function timeReducer (time = 0, action) {
  switch(action.type) {
    case START:
      return time + 1
    case STOP:
      return time
    default:
      return time
  }
}