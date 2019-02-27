import React, { Component } from 'react'
import Player from './Player'
import AddPlayer from './AddPlayer'
import './Scoreboard.css'

export default class Scoreboard extends Component {
  state = {
    players:[
      {
        id: 1,
        name: 'Krishen',
        score: 2,
      },
      {
        id: 2,
        name: 'Duc',
        score: 5
      },
      {
        id: 3,
        name: 'Alper',
        score: 4
      }
    ]
  }
  
  renderPlayer = (player) => {
    return (
      <Player
        id={player.id}
        name={player.name}
        score={player.score}
        key={player.id}
        updatePlayerScore={this.updatePlayerScore}
        removePlayer={this.removePlayer}
        />
    )
  }
  addPlayer = (name) => {
    const player = {
      id: Math.round(Math.random()*100000),
      name,
      score: 0
    }
    this.setState({
      players: this.state.players.concat(player)
    })
   
  }
  render() {
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        <ul>
          {
            this.state.players
              .sort((highest, current) => current.score - highest.score)
              .map(this.renderPlayer)
          }
        </ul>
        <AddPlayer addPlayer={this.addPlayer}/>
      </div>
    )
  }


  updatePlayerScore = (id, score) => {
   const updatedPlayers = this.state.players.map(
     player => {
        if (player.id === id) {
         return {
           ...player,
            score
           }
        }
        else {
          return player
        }
     }
   )
   this.setState({ players: updatedPlayers })
  }
  removePlayer = () =>  {
    return this.state.players.shift()
}
}