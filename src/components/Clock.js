import React, {Component} from 'react'
import { Button, Header, Icon, Menu, Modal } from 'semantic-ui-react'
import Timer from './Timer'
import {connect} from 'react-redux'
import {start} from '../reducers/timer'
import {levelUp} from '../reducers/level'
import { stop } from '../reducers/game'

const MAX_LEVEL = 3
const INIT_INTERVAL = 1000

export class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      disablePlay: false,
      timeInterval: INIT_INTERVAL
    }
    this.tick = this.tick.bind(this)
  }

  // when user hits play button...
  tick() {
    this.setState({
      disablePlay: true
    })
    // start timer
    this.timer = setInterval(this.props.increaseTimer, this.state.timeInterval)
  }

  componentWillReceiveProps(nextProps) {
    //stop timer when game ends
    if (this.props.gameStop !== nextProps.gameStop) {
      clearInterval(this.timer)
    }
    if (this.props.timer !== nextProps.timer) {
      // increase level every change of day
      if (nextProps.timer % 24 === 0 && this.props.level < MAX_LEVEL && !this.props.gameStop) {

        this.props.levelUp(this.props.level)

        this.setState({
          timeInterval: (INIT_INTERVAL/(this.props.level +1))
        })

        // update timer to be faster when user levels up
        this.timer = setInterval(this.props.increaseTimer, this.state.timeInterval)
      }
    }

  }


  render() {


    // win condition - play until level 5
    if (this.props.level === MAX_LEVEL) {
      // stop the timer
      clearInterval(this.timer)
      // stop the game once won
      this.props.stopGame()
      // return win notification
      return(
        <Modal
          open={true}
          closeOnDocumentClick={true}
          basic
          size='small'
        >
          <Header icon='game' content='Woot!' />
          <Modal.Content>
            <h3>You won!</h3>
          </Modal.Content>
        </Modal>
      )
    }

    else if (!this.state.disablePlay) {
      return (
        <Button className='play' onClick = {this.tick} content='Play' color='pink'/>
      )
    } else {
      // show timer after user clicks play
      return (
        <Menu inverted>
          <Menu.Item>
            <Icon name='clock' />
          </Menu.Item>
          <Menu.Item>
            <Header as='h2' floated='left' color='olive'>
              <Timer />
            </Header>
          </Menu.Item>
          <Menu.Item>
            Level: {this.props.level}
          </Menu.Item>
        </Menu>
      )
    }
  }
}

const mapState = ({ timer, gameStop, level }) => ({ timer, gameStop, level })
const mapDispatch = dispatch => {
  return {
    increaseTimer: function() {
      dispatch(start(0))
    },
    levelUp: function(level) {
      dispatch(levelUp(level))
    },
    stopGame: function() {
      dispatch(stop())
    }
  }
}

const clockContainer = connect(mapState, mapDispatch)(Clock)
export default clockContainer
