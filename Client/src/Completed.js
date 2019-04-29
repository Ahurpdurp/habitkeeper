import React, {Component} from 'react'

export class Completed extends Component{
    constructor(){
        super()
        this.state = {
            completedHabits:[]
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/api/completed-habits')
        .then(response => response.json())
        .then(response => this.setState({
            completedHabits:response
        }))
    }

    render(){
        let completedHabits = this.state.completedHabits.map(row => {
            let dollarsEarnedBack = Math.floor((row.daysCompleted / row.totalDays) * row.commitment * 100)/100
            return (
                <li key = {row.id}>
                    <h1>{row.habit}</h1>
                    <h4>Pledge Amount: ${row.commitment}</h4>
                    <h5>Total Days: {row.totalDays} Days</h5>
                    <h5>You earned ${dollarsEarnedBack} back. Good habits stay for life! :)</h5>
                </li>
            )
        })

        return(
            <div>
                <ul className = 'habits'>
                {completedHabits}
                </ul>
            </div>
        )
}
}