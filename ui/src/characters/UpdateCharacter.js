import React, { Component, Fragment } from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
// 1. Pass in Character as Props
// 2. Build pre-populated form that updates state
// 3. Configure Update/Submit component swapping
// 4. Setup Graphql updateCharacter Mutation
// 5. Connect Mutation Form with Mutation Statement
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
        mutation updateCharacter($id: ID!, $name: String!, $level: Int!, $backstory: String!) {
            updateCharacter (
                where: {id: $id},
                data: {name: $name, level: $level, backstory: $backstory}
            ) {
                id
                name
            }
        }
    `
    updateComp = () => {
        return (
            <Fragment>
                <input type="text" value={this.state.name} onChange={event => this.setState({name : event.target.value})}/>
                <input type="number" value={this.state.level} onChange={event => this.setState({level : parseInt(event.target.value)})}/>
                <input type="text" value={this.state.backstory} onChange={event => this.setState({backstory : event.target.value})}/>
            </Fragment>
        )
    }
    render () {
        const update = this.updateComp()
        return (
            <Mutation mutation={this.updateCharacterMutation}>
                {(updateChar, {data}) => (
                    <form onSubmit={event => {
                        event.preventDefault()
                        if(this.state.isUpdating){
                            updateChar({
                                variables: {
                                    id: this.state.id,
                                    name: this.state.name,
                                    level: this.state.level,
                                    backstory: this.state.backstory
                                }
                            })
                            this.setState({buttonText: "Update"})
                            window.location.reload(true)
                        }else {
                            this.setState({buttonText: "Submit"})
                        }
                        this.setState({isUpdating: !this.state.isUpdating })
                    }}>
                        {this.state.isUpdating ? update : null}
                        <input type="submit" value={this.state.buttonText}/>
                    </form>
                )}
            </Mutation>
        )
    }
}


