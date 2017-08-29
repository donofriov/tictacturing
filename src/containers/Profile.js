import React, { Component } from 'react'
import { Container, Name, GameListHeader, GameList, GameRecord, Column, ColumnLabels } from '../styled/Profile'

class Profile extends Component {

  static defaultProps = {
    user: {
      email: 'USER_EMAIL',
      games: [
        {
          winner: true,
          createdAt: '08/28/2017',
          id: '0001'
        },
        {
          winner: true,
          createdAt: '08/29/2017',
          id: '0002'
        },
        {
          winner: true,
          createdAt: '08/30/2017',
          id: '0003'
        }
      ]
    }
  }

  get records() {
    return this.props.user.games.map( (game, index) => {
      return (
        <GameRecord
          key={index}
          index={index}
        >
          <Column>
            {(game.winner) ? 'Won' : 'Lost'}
          </Column>
          <Column>
            "ROBOT"
          </Column>
          <Column>
            "No"
          </Column>
          <Column>
            {game.createdAt}
          </Column>
        </GameRecord>
      )
    })
  }

  render() {
    let {email} = this.props.user
    return (
      <Container>
        <Name>
          {email}
        </Name>
        <GameList>
          <GameListHeader>
            MyGames
          </GameListHeader>
          <ColumnLabels>
            <Column>
              Outcome
            </Column>
            <Column>
              Guess
            </Column>
            <Column>
              Guessed Correctly
            </Column>
            <Column>
              Date
            </Column>
          </ColumnLabels>
          {this.records}
        </GameList>
      </Container>
    )
  }
}

export default Profile
