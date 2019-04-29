import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
//COULD ADD LIKE DIFFERENT AVATARS TO CHOOSE FROM 

export class Navbar extends Component{
    render(){
        return(
            <div>
                <ul className = 'Navbar'>
                    <li><Link to='/'><button>My Habits</button></Link></li>
                    <li><Link to='/log'><button>Daily Log</button></Link></li>
                    <li><Link to='/add-habit'><button>Add Habit</button></Link></li>
                    <li><Link to='/completed'><button>Completed Habits</button></Link></li>
                    <li><Link to='/settings'><button>Settings</button></Link></li>
                </ul>
            </div>
        ) 
    }
}