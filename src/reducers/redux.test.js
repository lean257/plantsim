import {levelUp} from './level'
import timeReducer from './timer'

describe('Test levelUp actions',()=>{
  it('should return the correct object', () => {
      const add = levelUp(1)
      expect(add).toEqual({type:"INCREMENT", level: 1})
  })
})

describe('Test timeReducers',()=>{
  it('increments time', () => {
    let state = timeReducer(undefined,{type:"START"})
    expect(state).toEqual(1)
  })
})