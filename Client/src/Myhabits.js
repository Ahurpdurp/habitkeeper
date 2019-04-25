import React, {Component} from 'react';
import Calendar from 'simple-react-calendar'
import './Myhabits.css'


export class MyHabits extends Component {
    constructor(){
        super()
        this.state = {
            habits:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(response => this.setState({
            habits:response
        }))
    }

    render(){
        let calendarRender = this.state.habits.map(row => {
        let totalDays = Math.floor((new Date(row.endDate) - new Date(row.startDate))/(1000*60*60*24) + 1)
        let daysPassed = Math.floor((Date.now() - new Date(row.startDate))/(1000*60*60*24))
        let dollarsEarnedBack = Math.floor((daysPassed / totalDays) * row.commitment * 100)/100

            return (
                <li>
                    <h1>{row.habit}</h1>
                    <div className = 'calendars'>
                      <Calendar maxDate = {'2000-01-01'} activeMonth = {new Date(row.startDate)} mode = {'range'} selected = {{start: new Date(row.startDate), end: new Date(row.startDate)}} weekStartsOn = {0} />
                      <Calendar maxDate = {'2000-01-01'} activeMonth = {new Date(row.endDate)} mode = {'range'} selected = {{start: new Date(row.endDate), end: new Date(row.endDate)}} weekStartsOn = {0} />
                    </div>
                    <h4>Pledge Amount: ${row.commitment}</h4>
                    <h5>Total Days: {totalDays} Days</h5>
                    <h5>Days Completed: {daysPassed} Days</h5>
                    <h5>You've earned ${dollarsEarnedBack} back. Keep it up!</h5>
                </li>
            )
        })

        return(
            <div>
                <ul className = 'habits'>
                {calendarRender}
                </ul>
            </div>
        )
    }
}