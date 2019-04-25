import React, {Component} from 'react';
import './Addhabit.css'

export class AddHabit extends Component {
    constructor(props){
        super()
        this.state = {
            newHabit:'',
            newCommitment:'',
            newStartDate:'',
            newEndDate:''
        }
    }

    onTextChange = (column, event) => {
        this.setState({
            [column]:event.target.value
        })
    }


    handlerSaveHabit = () => {
        fetch('http://localhost:8080/api/add-habit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              habit:this.state.newHabit,
              commitment: this.state.newCommitment,
              startDate: this.state.newStartDate,
              endDate: this.state.newEndDate
            })
          })
    }

    render(){
        return(
            <div className = '/api/add-habit'>
                <input onChange = {this.onTextChange.bind(this,"newHabit")} placeholder = 'Enter Habit' /> 
                <input onChange = {this.onTextChange.bind(this,"newCommitment")} placeholder = 'Enter Pledge Amount' />    
                <input onChange = {this.onTextChange.bind(this,"newStartDate")} placeholder = 'Start Date' />    
                <input onChange = {this.onTextChange.bind(this,"newEndDate")} placeholder = 'End Date' />     
                <button onClick = {this.handlerSaveHabit}>Add Habit!</button>
            </div>
        )
    }
}