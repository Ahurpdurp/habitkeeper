import React, {Component} from 'react';
import './Addhabit.css'

const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric' };

let currentDate = new Date()
currentDate.setHours(0,0,0,0)

export class AddHabit extends Component {
    constructor(props){
        super()
        this.state = {
            newHabit:'',
            newCommitment:'',
            newStartDate:currentDate,
            newEndDate:'',
            buttonDisabled: true,
            intError:""
        }
    }

    onTextChange = (column, event) => {
        this.setState({
            [column]:event.target.value
        })
        if(this.state.newHabit !== "" && this.state.newCommitment !== "" && this.state.newEndDate !== "")
        {   
            this.setState({
                buttonDisabled:false
            })
        }

        if(column === "newCommitment")
        {   
            if(parseInt(event.target.value) === parseFloat(event.target.value) && parseFloat(event.target.value) !== 0)
            {
                this.setState({
                    intError:""
                })
            }     
            else{
                this.setState({
                    intError:"Please enter a positive number :)",
                    buttonDisabled:true
                })
            }   
        }

    }


    handlerSaveHabit = () => {
        let totalDays = Math.floor((new Date(this.state.newEndDate) - new Date(this.state.newStartDate))/(1000*60*60*24) + 1)
        fetch('http://localhost:8080/api/add-habit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              habit:this.state.newHabit,
              commitment: this.state.newCommitment,
              startDate: this.state.newStartDate,
              endDate: this.state.newEndDate,
              totalDays: totalDays
            })
          })
    }

    render(){
        return(
            <div className = 'add-habit'>
                <input onChange = {this.onTextChange.bind(this,"newHabit")} placeholder = 'Enter Habit' /> 
                <input onChange = {this.onTextChange.bind(this,"newCommitment")} placeholder = 'Enter Pledge Amount' />
                <input readonly value = {(new Date()).toLocaleDateString('en-US', DATE_OPTIONS)} />    
                <input type = 'date' onChange = {this.onTextChange.bind(this,"newEndDate")} placeholder = 'End Date' />
                <button disabled = {this.state.buttonDisabled} onClick = {this.handlerSaveHabit}>Add Habit!</button>
                <p>{this.state.intError}</p>   
            </div>
        )
    }
}