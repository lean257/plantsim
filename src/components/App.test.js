import React from 'react'
import { shallow, mount } from 'enzyme'
import App from './App'
import ClockContainer, {Clock} from './Clock'
import {Timer} from './Timer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
const mockStore = configureStore()
let store, wrapper
const initialState = {timer:0}
import {start} from '../reducers/timer'

it('renders without crashing', () => {
  shallow(<App />);
})

beforeEach(()=>{
  store = mockStore(initialState)
  wrapper = mount( <Provider store={store}><ClockContainer /></Provider> )
})
it('renders the dumb component for Clock', () => {
  const clock = shallow(<Clock />)
  expect(clock.length).toEqual(1)
})

it('render the connected(SMART) component for Clock', () => {
  expect(wrapper.find(ClockContainer).length).toEqual(1)
})

it('check action on dispatching ', () => {
  store.dispatch(start(0))
  const action = store.getActions()
  expect(action[0].type).toEqual('START')
})

it('renders the div component in Timer', () => {
  const timer = shallow(<Timer />)
  expect(timer.is('div')).toEqual(true)
})