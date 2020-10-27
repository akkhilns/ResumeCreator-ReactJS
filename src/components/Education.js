import React, { Component } from 'react';
import Separator from './Separator';
import 
{
    Container,
    Row,
    Col,
    Form,
    Button
}
from 'react-bootstrap';
import { connect } from 'react-redux';
import { addEducationInputElement, removeEducationInputElement, changeEducationInputData } from '../actions/action';

class Education extends Component{
    constructor(props){
        super(props);
    }

    handleAddmoreBtn = () =>{
        this.props.addEducationInputElement();
    }

    handleRemoveBtn = (i) =>{
        this.props.removeEducationInputElement(i)
    }

    handleAddMoreInputChange = (e,i) =>{
        const { name, value } = e.target;
        this.props.changeEducationInputData(name, value, i);
        this.props.getEducationInputData(this.props.educationInputList);
    } 

    
    render(){
        return(
            <>
                <Separator title="Education"/>
                {
                    this.props.educationInputList.map((item, i) =>
                        <Row>
                        <Col xs={3}>
                            <Form.Group>
                                <Form.Control type="text" name="institute" placeholder="Institute" value={item.institute} required onChange={(e) => this.handleAddMoreInputChange(e,i) }/>
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group>
                                <Form.Control type="text" name="degree" placeholder="Degree" value={item.degree} required onChange={(e) => this.handleAddMoreInputChange(e,i) }/>
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group>
                                <Form.Control type="date" name="year" placeholder="Year" value={item.year} required onChange={(e) => this.handleAddMoreInputChange(e,i) }/>
                            </Form.Group>
                        </Col>
                        {
                            i > 0 ?
                            <Col xs={3}>
                                <Button className="black-btn" block onClick={() => this.handleRemoveBtn(i)}>Remove</Button>
                            </Col>
                            : ''
                        }
                        </Row>
                    )
                }
                <Row>
                    <Col><Button className="black-btn" onClick={this.handleAddmoreBtn}>Add More</Button></Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = (state)  => {

console.log('state ==> ', state);
    return {
        educationInputList : state.inputControllerEducation.educationInputList
    }
};

const mapDispatchToProps = {
    addEducationInputElement,
    removeEducationInputElement,
    changeEducationInputData
};

const EducationComponent = connect( mapStateToProps, mapDispatchToProps)(Education);
export default EducationComponent;