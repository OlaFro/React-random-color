import React, { Component } from 'react'
import "./Card.css"

export default class Card extends Component {
    state ={
        number: Math.floor(Math.random()* this.props.color.length),
        // background: this.props.color[this.state.number]
    }

    change = () =>{
        let curNumber = this.state.number
        let newNumber 

        do {
            newNumber = Math.floor(Math.random()* this.props.color.length)
        }
        while (curNumber === newNumber)
        console.log(newNumber);
    this.setState({
        number: newNumber
    })
    }

    render() {
        return (
            <div onClick={this.change} className="card" style={{backgroundColor: this.props.color[this.state.number]}}>
            </div>
        )
    }
}
