import React, { Component, Fragment } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export default class extends Component {
    state = {
        id: this.props.id,
        name: this.props.name,
        level: this.props.level,
        backstory: this.props.backstory,
        isUpdating: false,
        buttonText: "Update"
    }
    updateCharacterMutation = gql`
        mutation updateCharacter($id: ID!) {
            updateCharacter (where: {id: $id}) {
                id
                name
            }
        }
    `
    updateComp = () => {
        return (
            <Fragment>
                <input type="" value={this.state}/>
                <input type="" value={this.state}/>
                <input type="" value={this.state}/>
            </Fragment>
        )
    }
    render () {
        const update = updateComp()
        return (
            <Mutation mutation={this.updateCharacterMutation}>
                {(updateChar, {data}) => (
                    <form onSubmit={event => {
                        event.preventDefault()
                        updateChar({
                            variables: {
                                id: this.state.id,
                            }
                        })
                        window.location.reload(true)
                    }}>
                        {isUpdating ? update : null}
                        <input type="submit" value={this.state.buttonText}/>
                    </form>
                )}
            </Mutation>
        )
    }
}

// 1. Pass in Character as Props
// 2. Build pre-populated form that updates state
// 3. Configure Update/Submit component swapping
// 4. Setup Graphql updateCharacter Mutation
// 5. Connect Mutation Form with Mutation Statement
