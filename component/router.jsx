import React from 'react';
import Test from './test';
import Hoc from './HOC'
import { Route } from 'react-router-dom'
export default class Router extends React.Component{
    render(){
        return (    
            <div>
                <Route exact path='/' component={Test}/>
                <Route path='/Hoc' component={Hoc}/>
            </div>
        )
    }
}