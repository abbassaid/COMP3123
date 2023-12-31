import React, {Component} from 'react';

export default class UserFormClass extends Component {
    constructor(props) {
        super(props)
        this.countries = ['India', 'USA', 'UK', 'Canada', 'Mexico', 'Australia']
        this.state = {
            email: '',
            password: '',
            gender: '',
            country: ''
        }
    }

    onValueChanged = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>User Form CLass</h1>
                <form onSubmit={(e) => this.onSubmitForm(e)} >
                    <input
                        name='email'
                        type='text'
                        onChange={(e) => this.onValueChanged(e)}
                        placeholder="Enter Email" />

                    <input
                        name='password'
                        type='password'
                        onChange={(e) => this.onValueChanged(e)}
                        placeholder="Enter Password" />

                    <input
                        name='gender'
                        type='radio'
                        value="Male"
                        onChange={(e) => this.onValueChanged(e)} /> Male

                    <input
                        name='gender'
                        type='radio'
                        value="female"
                        onChange={(e) => this.onValueChanged(e)} /> Female

                    <select name="country" onChange={(e) => this.onValueChanged(e)}>
                        {
                            this.countries.map((country) => (
                                <option key={country} value={country}>{country}</option>
                            ))
                        }
                    </select>

                    <input
                        name="btnSubmit"
                        type="submit"
                        value="Login" />

                </form>
            </div>
        )
    }
}
