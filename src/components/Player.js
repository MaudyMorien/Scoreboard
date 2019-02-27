import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Player.css'
import PlusButton from './PlusButton'
import MinButton from './MinButton'

export default class Player extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired
  }
  handleOnClick = () => {
    const {id, score} = this.props
    this.props.updatePlayerScore(id, score + 1)
  }
removeOnClick = () => {
  const {id, score} = this.props
    this.props.updatePlayerScore(id, score + 1111111)
    this.props.removePlayer()
    
    
}

  render() {
    return (
      <li className="player">
        <MinButton onClick={this.removeOnClick.bind(this)} />
        <p className="name">{ this.props.name }</p>
        <p className="score">{ this.props.score }</p>
        <PlusButton onClick={this.handleOnClick} />

      </li>
    )
  }
}