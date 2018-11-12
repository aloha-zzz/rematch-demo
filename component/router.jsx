import React from 'react';
import Test from './test';
import Hoc from './HOC'
import Count from './count/index'
import TwoCount from './Twocount/index'
import { Route } from 'react-router-dom'
import TodoList from './todoList'

export default class Router extends React.Component{
    render(){
        return (
            <div>
                <Route exact path='/' component={Test}/>
                <Route path='/Hoc' component={Hoc}/>
                <Route path='/count' component={Count}/>
                <Route path='/TwoCount' component={TwoCount}/>
                <Route path='/todo' component={TodoList}/>
            </div>
        )
    }
}

