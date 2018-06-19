import React, { Component } from 'react'

import CharactersView from '../components/characters/ViewCharacters'
import CreateCharacter from '../components/characters/CreateCharacter'

export default class extends Component {
    render() {
        return (
            <div>
                <h2>🚀 Character Tracking System</h2>
                <CreateCharacter/>
                <hr/>
                <CharactersView/>
            </div>
        )
    }
}