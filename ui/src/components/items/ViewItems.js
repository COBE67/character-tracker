import React, { Component } from 'react'
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Paper from '@material-ui/core/Paper';

import DeleteItem from './DeleteItem'
import UpdateItem from './UpdateItem'

export default class extends Component {
    itemsQuery = gql`
        {
            items {
                id
                name
                desc
            }
        }
    `
    render () {
        return (
            <div className="flexer">
                <Query query={this.itemsQuery}>
                    {({ loading, error, data }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error :(</p>;

                        return data.items.map(({ id, name, desc }) => (
                            <Paper className="itemPaper" key={id} elevation={10}>
                                <h3>{`${name}`}</h3>
                                <h4>{`${desc}`}</h4>
                            </Paper>
                        ));
                    }}
                </Query>
            </div>
        )
    }
}

{/*<UpdateItem id={id}*/}
            {/*name={name}*/}
            {/*desc={desc}*/}
{/*/>*/}
{/*<DeleteItem id={id}/>*/}