// Action Types
const INCREMENT_WATER = 'INCREMENT_WATER'
const RESET = 'RESET'

// Action Creators

export const increment_water = count => ({ type: INCREMENT_WATER, count })
export const reset = count => ({ type: RESET, count })

// Reducers

export default function waterReducer (count = 0, action) {
  switch (action.type) {
    case INCREMENT_WATER:
      return count + 1
    case RESET:
      return 0
    default:
      return count
  }
}
