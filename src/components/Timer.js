import React, {Component} from 'react'
import {connect} from 'react-redux'

export class Timer extends Component {
  render() {
    const hours = this.props.timer% 24,
    days = Math.floor(this.props.timer/24),
    weeks = Math.floor(days/7)
    return (
      <div>
        {weeks} weeks : {days} days : {hours} hours
      </div>
    )
  }
}

const mapState = ({ timer }) => ({ timer })
const mapDispatch = null

const timerContainer = connect(mapState, mapDispatch)(Timer)
export default timerContainer