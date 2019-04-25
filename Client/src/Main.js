import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {MyHabits} from './Myhabits.js'
import {AddHabit} from './Addhabit.js'
import {Settings} from './Settings.js'
import {Navbar} from './Navbar.js'


export class Main extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <main>
                <Switch>
                    <Route exact path='/' component={MyHabits}/>
                    <Route path='/add-habit' component={AddHabit}/>
                    <Route path='/settings' component={Settings}/>
                </Switch>
            </main>
            </div>
        )
    }
}