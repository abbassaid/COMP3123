import React, { Component } from 'react'
import {render} from "@testing-library/react";

export default class Hello extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'NO NAME',
            city: 'TOR'
        }
    }
    onSayHelloCLick = (e) => {
        e.preventDefault()
        alert('Hello: ' + e.target.value)
        console.log(this.state)
    }

    onValueChanged = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        this.setState({
            // Keep all existing keys and update the values written
            ...this.state,
            name: event.target.value
        })
    }
    render() {
        return (
            <div>
                <h1>Data Entry</h1>
                <input
                    type='text'
                    name='txtName'
                    onChange={e => this.onValueChanged(e)}
                    placeholder='Enter Your Name' />
                <h3>{this.state.name}</h3>
                <button onClick={e => this.onSayHelloCLick(e)} value="Test">Click Me</button>
            </div>
        )
    }
}