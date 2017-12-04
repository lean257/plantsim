import React, { Component } from 'react'
import { Button, Icon, Modal, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { increment_water, reset } from '../reducers/water'
import { stop } from '../reducers/game'

export class Water extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false,
      clickCount: 0,
      alertOpen: false,
      lostCon: false
    }
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.lostClose = this.lostClose.bind(this)
  }

  componentWillReceiveProps(nextProps) {

    // only check condition if game hasn't ended
    if (!this.props.gameStop) {

      var lostCon = false
      // It's midnight, check the conditions
      if (this.props.timer % 24 === 0 && this.props.timer > 1) {

        // Got too much water or not enough
        lostCon = this.props.water >= 3 || this.props.water === 0

        // Resetting at midnight
        this.props.reset()
      }


      if (lostCon) {
        this.setState({
          modalOpen: false,
          alertOpen: true,
          lostCon: lostCon
        })
      }
    }
  }

  handleOpen() {
    this.setState({
      modalOpen: true,
     // increment the local water click count
      clickCount: this.state.clickCount + 1
    })
    // update water count to store
    this.props.increment()
  }

  lostClose() {
    this.setState({
      alertOpen: false,
      modalOpen: false,
      lostCon: false
    })
    // stop the game once lost
    this.props.stopGame()
  }

  handleClose() {
    this.setState({ modalOpen: false })
  }

  render() {
    // lost alert
    if (this.state.lostCon) {
      return (
        <Modal
          open={this.state.alertOpen}
          onClose={this.lostClose}
          basic
          size='small'
        >
          <Header icon='frown' content="I got too much or too little water!" />
          <Modal.Content>
            <h3>Game Over!</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.lostClose} inverted>
              <Icon name='thumbs down' /> Ok
            </Button>
          </Modal.Actions>
        </Modal>
      )
      // normal alert for watering
    } else {
      return (
        <Modal
          trigger={<Button size="small" onClick={this.handleOpen} color="blue" >Water</Button>}
          open={this.state.modalOpen}
          onClose={this.handleClose}
          size='mini'
        >
          <Modal.Content>
            <Icon name='theme' />
            Woot I love water!
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleClose} content='Yay!' color='blue'/>
          </Modal.Actions>
        </Modal>
      )
    }
  }
}
const mapState = ({ timer, water, gameStop }) => ({ timer, water, gameStop })
// dispatch actions to update store
const mapDispatch = dispatch => {
  return {
    increment: function() {
      dispatch(increment_water(0))
    },
    reset: function() {
      dispatch(reset(0))
    },
    stopGame: function() {
      dispatch(stop())
    }
  }
}

export default connect(mapState, mapDispatch)(Water)
