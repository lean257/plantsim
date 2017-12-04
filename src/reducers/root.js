import { combineReducers } from 'redux'
import timer from './timer'
import water from './water'
import gameStop from './game'
import trim from './trim'
import level from './level'

const rootReducer = combineReducers({
  timer,
  water,
  gameStop,
  trim,
  level
})

export default rootReducer
