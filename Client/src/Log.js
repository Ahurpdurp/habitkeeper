import React, {Component} from 'react'
import "./Log.css"

export class Log extends Component {
    constructor(){
        super()
        this.state = {
            habits:[]
        }
    }

    onClickUpdate = (itemId, event) => {
        fetch('http://localhost:8080/api/update-habit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:itemId,
                completedFl:event.target.checked
            })
          })
    }

    componentDidMount(){
        fetch('http://localhost:8080/')
        .then(response => response.json())
        .then(response => this.setState({
            habits:response
        }))
    }

    render(){
        let calendarRender = this.state.habits.map((row) => {
            return (
                <li key = {row.id}>
                    <h1>{row.habit}</h1>
                    <label>Have you completed this task today?  </label>
                    <input onClick = {this.onClickUpdate.bind(this,row.id)} type = 'checkbox'/>
                </li>
            )
        })
        return(
            <div>
                <ul className = 'Logs'>
                    {calendarRender}
                </ul>
            </div>
        )
    }
}