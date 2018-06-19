import React, { Component } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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
                            <TextField type="text" placeholder="Name" required
                                   onChange={event => this.setState({ name : event.target.value})}/>
                            <br/>
                            <TextField type="number" placeholder="Level" min="1" max="50" required
                                   onChange={event => this.setState({ level : parseInt(event.target.value)})}/>
                            <br/>
                            <TextField type="text" placeholder="Backstory" required
                                   onChange={event => this.setState({ backstory : event.target.value})}/>
                            <br/>
                            <Button type="submit" size="small" variant="contained" color="primary">Submit</Button>
                        </form>
                    </div>
                )}
            </Mutation>
        )
    }
}