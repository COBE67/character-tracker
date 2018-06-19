import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';

import Home from '../pages/Home'
import Characters from '../pages/Characters';
import Items from '../pages/Items'

export default class extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={Home}/>
                <Route path="/chars" component={Characters}/>
                <Route path="/items" component={Items}/>
            </Fragment>
        )
    }
}