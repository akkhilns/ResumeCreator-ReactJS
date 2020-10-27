import React, { Component } from 'react';
import 
{
    Container,
    Row,
    Col,
    Form,
    Button
}
from 'react-bootstrap';

class InputComponent extends Component{
    constructor(props){
        super(props);
    }

    handleInputChange = (event) =>{
        this.props.getInputContent(event);
    }
    render(){
        return(
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                <Form.Control type={this.props.type} name={this.props.name} onChange={this.handleInputChange}/>
                {
                    this.props.isValid == false ? 
                    <div style={{ color:"red"}} className="text-center" >{this.props.errorMessage}</div> : 
                    ''
                }
            </Form.Group>
        )
    }
}
export default InputComponent;