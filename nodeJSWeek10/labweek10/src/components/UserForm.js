import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const formStyling = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

const textStyling = {
    border: '2px solid green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: 'green',
    minHeight: '200px',

    span: {
        color: 'black'
    }
}

export default class UserFormClass extends Component {
    constructor(props) {
        super(props)
        this.province = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador',
                         'Nova Scotia', 'Ontario', 'Prince Edwards Island', 'Quebec', 'Saskatchewan', 'Nunavut',
                         'Yukon', 'Northwest Territories']
        this.state = {
            email: '',
            name: '',
            address1: '',
            address2: '',
            city: '',
            province: '',
            postalCode: '',
            formSubmitted: false
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
        this.setState({ formSubmitted: true })
        console.log(this.state)
    }

    render() {
        return (
            <div className="m-5 p-3" style={formStyling}>

                <h1>User Form Class</h1>
                <Form onSubmit={(e) => this.onSubmitForm(e)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control name = 'email' type="email" placeholder="Enter Email" onChange={(e) => this.onValueChanged(e)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridFullName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name = 'name' type="text" placeholder="Full Name" onChange={(e) => this.onValueChanged(e)}/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name = 'address1' placeholder="1234 Main St" onChange={(e) => this.onValueChanged(e)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control name = 'address2' placeholder="Apartment, studio, or floor" onChange={(e) => this.onValueChanged(e)} />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control name = 'city' onChange={(e) => this.onValueChanged(e)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridProvince">
                            <Form.Label>Province</Form.Label>
                            <Form.Select name="province" defaultValue="Choose..." onChange={(e) => this.onValueChanged(e)}>
                                <option key="choose" value="Choose..." disabled>Choose...</option>
                                {this.province.map((province) => (
                                    <option key={province} value={province}>
                                        {province}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPostalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control name = 'postalCode' type="text" onChange={(e) => this.onValueChanged(e)} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Agree to the Terms & Conditions" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <br/><br/>

                {this.state.formSubmitted && (
                    <div style={textStyling}>
                        <h3>Email: <span style={textStyling.span}>{this.state.email}</span></h3>
                        <h3>Full Name: <span style={textStyling.span}>{this.state.name}</span></h3>
                        <h3>Address: <span style={textStyling.span}>{this.state.address1}</span></h3>
                        <h3>City: <span style={textStyling.span}>{this.state.city}</span></h3>
                        <h3>Province: <span style={textStyling.span}>{this.state.province}</span></h3>
                        <h3>Postal Code: <span style={textStyling.span}>{this.state.postalCode}</span></h3>
                    </div>
                )}

            </div>
        )
    }
}
