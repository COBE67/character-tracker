import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export default class extends Component {
    deleteCharacterMutation = gql`
        mutation deleteCharacter($id: ID!) {
            deleteCharacter (where: {id: $id}) {
                id
                name
            }
        }
    `
    render () {
        const id = this.props.id
        return (
            <Mutation mutation={this.deleteCharacterMutation}>
                {(deleteChar, {data}) => (
                    <form onSubmit={event => {
                        event.preventDefault()
                        deleteChar({
                            variables: {
                                id: id,
                            }
                        })
                        window.location.reload(true)
                    }}>
                        <input type="submit" value="Delete"/>
                    </form>
                )}
            </Mutation>
        )
    }
}