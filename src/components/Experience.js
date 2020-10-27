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
import { addExperienceInputElement, removeExperienceInputElement, changeExperienceInputData } from '../actions/action';

class Experience extends Component{
    constructor(props){
        super(props);
    }

    handleAddmoreBtn = () =>{
        this.props.addExperienceInputElement();
    }

    handleRemoveBtn = (i) =>{

        this.props.removeExperienceInputElement(i)
    }

    handleAddMoreInputChange = (e,i) =>{
        const { name, value } = e.target;
        this.props.changeExperienceInputData(name, value, i);
        this.props.getExperienceInputData(this.props.experienceInputList);
    } 

    
    render(){
        return(
            <>
                <Separator title="Experience"/>
                {
                    this.props.experienceInputList.map((item, i) =>
                        <Row>
                        <Col xs={3}>
                            <Form.Group>
                                <Form.Control type="text" name="company" placeholder="Company" value={item.company} required onChange={(e) => this.handleAddMoreInputChange(e,i) }/>
                            </Form.Group>
                        </Col>
                        <Col xs={3}>
                            <Form.Group>
                                <Form.Control type="text" name="designation" placeholder="Designation" value={item.designation} required onChange={(e) => this.handleAddMoreInputChange(e,i) }/>
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
        experienceInputList : state.inputControllerExperience.experienceInputList
    }
};

const mapDispatchToProps = {
    addExperienceInputElement,
    removeExperienceInputElement,
    changeExperienceInputData
};

const ExperienceComponent = connect( mapStateToProps, mapDispatchToProps)(Experience);
export default ExperienceComponent;