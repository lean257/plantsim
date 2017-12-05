// Action Types
const INCREMENT_WATER = 'INCREMENT_WATER'
const RESET = 'RESET'

// Action Creators

export const increment_water = count => ({ type: INCREMENT_WATER, count })
export const reset = count => ({ type: RESET, count })

// Reducers
//keep track of time intervals
export default function waterReducer (count = [], action) {
  switch (action.type) {
    case INCREMENT_WATER:
      console.log('new count arr', [...count, Date.now()])
      return [...count, Date.now()]
    case RESET:
      return []
    default:
      return count
  }
}
