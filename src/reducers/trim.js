// Action Types
const INCREMENT_TRIM = 'INCREMENT_TRIM'
const RESET = 'RESET'

// Action Creators

export const increment_trim = count => ({ type: INCREMENT_TRIM, count })
export const reset = count => ({ type: RESET, count })

// Reducers

export default function trimReducer (count = 0, action) {
  switch (action.type) {
    case INCREMENT_TRIM:
      return count + 1
    case RESET:
        return 0
    default:
      return count
  }
}
