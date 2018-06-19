import React, { Component } from 'react'

import ViewItems from '../components/items/ViewItems'
// import CreateItem from '../components/characters/CreateCharacter'

export default class extends Component {
    render() {
        return (
            <div>
                <h2>🚀 Item Tracking System</h2>
                {/*<CreateCharacter/>*/}
                <hr/>
                <ViewItems/>
            </div>
        )
    }
}