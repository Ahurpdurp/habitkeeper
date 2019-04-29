import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {MyHabits} from './Myhabits.js'
import {AddHabit} from './Addhabit.js'
import {Settings} from './Settings.js'
import {Navbar} from './Navbar.js'
import {Log} from './Log.js'
import {Completed} from './Completed.js'


export class Main extends Component {
    render(){
        return(
            <div>
            <Navbar />
            <main>
                <Switch>
                    <Route exact path='/' component={MyHabits}/>
                    <Route path='/log' component={Log}/>
                    <Route path='/add-habit' component={AddHabit}/>
                    <Route path='/completed' component={Completed}/>
                    <Route path='/settings' component={Settings}/>
                </Switch>
            </main>
            </div>
        )
    }
}