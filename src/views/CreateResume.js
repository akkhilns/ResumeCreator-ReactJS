import React, { Component } from 'react';
import 
{
    Container,
    Row,
    Col,
    Form,
    Button,
    Spinner
}
from 'react-bootstrap';

import InputComponent from "../components/InputComponent";
import Header from '../components/Header';
import EducationComponent from '../components/Education';
import ExperienceComponent from '../components/Experience';
import Skills from '../components/Skills';
import axios from 'axios';
import Util from "../Util";

class CreateResume extends Component{

    constructor(props){
        super(props);
        this.state={
            fields: {},
            errors: {},
            isValid:{},
            errorMessage:{},
            isProcessing:false
        }
    }

    handleInputComponentChange = (event) => {
        let {fields} = this.state;
        fields[event.target.name] = event.target.value.trim();        
        this.setState({fields});
    }

    getEducationData = (event) => {
        let {fields} = this.state;
        fields['education'] = event; 
        this.setState({fields});
    }

    getExperienceData = (event) => {
        let {fields} = this.state;
        fields['experience'] = event; 
        this.setState({fields});
    }

    skillsData = (data) => {
        let {fields} = this.state;
        fields['skills'] = data; 
        this.setState({fields});
    }

    handleValidation = () => {
        let {fields, errorMessage, isValid}  = this.state;
        let errors = {};
        let formIsValid = true;



        isValid["name"] = true;
        if(!fields["name"]){
            formIsValid = false;
            errorMessage["name"] = "Name cannot be empty";
            isValid["name"] = false;
        }

        isValid["email"] = true;
        if(!fields["email"]){
            formIsValid = false;
            errorMessage["email"] = "Email cannot be empty";
            isValid["email"] = false;
        }

        if(typeof fields["email"] !== "undefined"){
        let lastAtPosition = fields["email"].lastIndexOf('@');
        let lastDotPosition = fields["email"].lastIndexOf('.');
        if (!(lastAtPosition < lastDotPosition && lastAtPosition > 0 && fields["email"].indexOf('@@') == -1 && lastDotPosition > 2 && (fields["email"].length - lastDotPosition) > 2)) {
            formIsValid = false;
            errorMessage["email"] = "Email id is not valid";
            isValid["email"] = false;
            }
        } 

        isValid["address"] = true;
        if(!fields["address"]){
            formIsValid = false;
            errorMessage["address"] = "Address cannot be empty";
            isValid["address"] = false;
        }

        isValid["phone"] = true;
        if(!fields["phone"]){
            formIsValid = false;
            errorMessage["phone"] = "Phone no cannot be empty";
            isValid["phone"] = false;
        }

        isValid["education"] = true;
        if(typeof fields.education == "undefined"){
            formIsValid = false;
            errorMessage["education"] = "Please fill the all details in the education section";
            isValid["education"] = false;
        }else{
            for(var i=0;i<fields["education"].length;i++){
                if(this.checkProperties(fields["education"][i]) == false){
                    formIsValid = false;
                    errorMessage["education"] = "Please fill the all details in the education section";
                    isValid["education"] = false;
                    break;
                }
            }
        }

        isValid["experience"] = true;
        if(typeof fields.experience == "undefined"){
            formIsValid = false;
            errorMessage["experience"] = "Please fill the all details in the experience section";
            isValid["experience"] = false;
        }else{
            for(var i=0;i<fields["experience"].length;i++){
                if(this.checkProperties(fields["experience"][i]) == false){
                    formIsValid = false;
                    errorMessage["experience"] = "Please fill the all details in the experience section";
                    isValid["experience"] = false;
                    break;
                }
            }
        }

        isValid["skills"] = true;
        if(typeof fields.skills == "undefined" || fields.skills.length == 0){
            formIsValid = false;
            errorMessage["skills"] = "Please add any one skill";
            isValid["skills"] = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    handleCreateResume = (event) => {
        event.preventDefault();
        if(this.handleValidation()){
            // console.log(JSON.stringify(this.state.fields));

            var current = this;
            var url = new Util().getBaseUrl() + '?createResume';
            const options = {
              method: 'POST',
              url,
              data:JSON.stringify(this.state.fields)
            };
            axios(options)
            .then(function (response) { 
                current.props.history.push("/list");
            })
            .catch(function (error) {
            })
            .finally(function () {
            });
        }
    }

    checkProperties(obj) { console.log('==>', obj);
        for (var key in obj) {
            if (obj[key] == null || obj[key] == ""){
                return false;
            }
        }
        return true;
    }

    render(){
        return(
            <>
            <Header title="Create Resume"/>
            
            <Container className="container">                
                <Row>
                    <Col>
                    <Form className="form">

                        <InputComponent label="Name" type="text" name="name" getInputContent={this.handleInputComponentChange} isValid={this.state.isValid.name} errorMessage={this.state.errorMessage.name}/>
                        <InputComponent label="Email" type="email" name="email" getInputContent={this.handleInputComponentChange} isValid={this.state.isValid.email} errorMessage={this.state.errorMessage.email}/>

                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" name="address" rows={3} onChange={this.handleInputComponentChange}/>
                            {
                                this.state.isValid.address == false ? 
                                <div style={{ color:"red"}} className="text-center">{this.state.errorMessage.address}</div> : 
                                ''
                            }
                        </Form.Group>

                        <InputComponent label="Phone" type="phone" name="phone" getInputContent={this.handleInputComponentChange} isValid={this.state.isValid.phone} errorMessage={this.state.errorMessage.phone}/>

                        <EducationComponent getEducationInputData={this.getEducationData}/>
                            {
                                this.state.isValid.education == false ? 
                                <div style={{ color:"red"}} className="text-center">{this.state.errorMessage.education}</div> : 
                                ''
                            }


                        <ExperienceComponent getExperienceInputData={this.getExperienceData}/>
                            {
                                this.state.isValid.experience == false ? 
                                <div style={{ color:"red"}} className="text-center">{this.state.errorMessage.experience}</div> : 
                                ''
                            }

                        <Skills getSkills={this.skillsData}/>
                        eg: PHP, HTML
                        
                            {
                                this.state.isValid.skills == false ? 
                                <div style={{ color:"red"}} className="text-center">{this.state.errorMessage.skills}</div> : 
                                ''
                            }

                        <Button className="black-btn" block type="submit" onClick={this.handleCreateResume}>Create</Button>
                    </Form>
                    </Col>
                </Row>

                <Row>
                <Col></Col>
                    <Col>
                    {
                    this.state.isProcessing ?
                    <div style={{ marginTop:10}} className="text-center"><Spinner animation="border" /></div> : ''
                    }
                    </Col>
                <Col></Col>
                </Row>

            </Container>
            </>
        );
  }
}
export default CreateResume;
