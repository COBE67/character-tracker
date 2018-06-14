import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";

import DeleteCharacter from './DeleteCharacter'
import UpdateCharacter from './UpdateCharacter'

export default class extends Component {
    charactersQuery = gql`
        {
            characters {
                id
                name
                level
                backstory
            }
        }
    `
    render () {
        return (
            <Query query={this.charactersQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error :(</p>;

                    return data.characters.map(({ id, name, level, backstory }) => (
                        <div key={id}>
                            <h3>{`${name}: LVL ${level}`}</h3>
                            <p>{backstory}</p>
                            <UpdateCharacter id={id}
                                             name={name}
                                             level={level}
                                             backstory={backstory}
                            />
                            <DeleteCharacter id={id}/>
                        </div>
                    ));
                }}
            </Query>
        )
    }
}