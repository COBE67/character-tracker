import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';

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
                        <Button type="submit" size="small" variant="contained" color="secondary">Delete</Button>

                    </form>
                )}
            </Mutation>
        )
    }
}