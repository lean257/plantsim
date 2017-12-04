// Action Types
const INCREMENT = 'INCREMENT'

// Action Creators

export const levelUp = level => ({ type: INCREMENT, level })

// Reducers

export default function levelReducer (level = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return level + 1
    default:
      return level
  }
}
