import React, { Component } from 'react'
import Table from './Table'

class App extends Component {

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  state = {
     characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
        ID:1,
      },
      {
        name: 'Mac',
        job: 'Bouncer',
        ID:3,
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
        ID:2,
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }

  render() {
   
    const { characters } = this.state

    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}
export default App