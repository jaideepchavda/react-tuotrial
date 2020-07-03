import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select Traveller</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    
                </Form>
            </div>
        )
    }
}

export default Form;