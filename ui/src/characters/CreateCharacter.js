import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

export default class extends Component {
    state = {
        name: "",
        level: 1,
        backstory: ""
    }
    createCharacterMutation = gql`
        mutation createCharacter($name: String!, $level: Int!, $backstory: String!) {
            createCharacter(data: {name: $name, level: $level, backstory: $backstory }) {
                id
                name
                level
                backstory
            }
        }
    `;

    render () {
        return (
            <Mutation mutation={this.createCharacterMutation}>
                {(createChar, {data}) => (
                    <div>
                        <form onSubmit={event => {
                            event.preventDefault()
                            createChar({variables: {
                                    name: this.state.name,
                                    level: this.state.level,
                                    backstory: this.state.backstory
                                }})
                            window.location.reload(true)
                        }}>
                            <input type="text" placeholder="Name" onChange={event => this.setState({ name : event.target.value})}/>
                            <input type="number" placeholder="Level" min="1" max="50" onChange={event => this.setState({ level : parseInt(event.target.value)})}/>
                            <input type="text" placeholder="Backstory" onChange={event => this.setState({ backstory : event.target.value})}/>
                            <input type="submit" />
                        </form>
                    </div>
                )}
            </Mutation>
        )
    }
}