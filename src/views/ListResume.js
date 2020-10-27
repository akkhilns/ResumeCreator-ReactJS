import React, { Component } from 'react';
import 
{
    Container,
    Row,
    Col,
    Form,
    Button,
    Spinner,
    Table
}
from 'react-bootstrap';
import axios from 'axios';
import Util from "../Util";
import Header from '../components/Header';
import ModalComponent from '../components/ModalComponent';

class CreateResume extends Component{

    constructor(props){
        super(props);
        this.state={
            resumeData:[],
            isDataLoaded:false,
            singleData:null,
            showSingleData:false
        }
    }

    componentDidMount(){
        this.getResumeList();
    }

    getResumeList = () => {
        var current = this;
        var url = new Util().getBaseUrl() + '?listResume';
        const options = {
          method: 'GET',
          url,
        };
        axios(options)
        .then(function (response) { console.log('response', response);
          current.setState(
            {
              resumeData:response.data.data,
              isDataLoaded:true
            }
          );
        })
        .catch(function (error) {
        })
        .finally(function () {
        });
    }

    showDetails = (singleData) => {
        this.setState({
            singleData:singleData,
            showSingleData:true
        })
    }
    closeDetailModal = () => {
        this.setState({
            showSingleData:false
        })   
    }

    render(){
        var {resumeData, showSingleData, singleData } = this.state;
        return(
            <>
            <Header title="List Resume"/>
            
            <Container className="container">                

                <Row style={{ marginTop:50}}>
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        Object.keys(resumeData).map((key, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{resumeData[index].name}</td>
                            <td>{resumeData[index].email}</td>
                            <td>{resumeData[index].phoneno}</td>
                            <td><Button className="black-btn" onClick={() => this.showDetails(resumeData[index])}>View</Button></td>
                        </tr>
                            )
                        )
                        }
                    </tbody>
                    </Table>
                </Row>



                <Row>
                <Col></Col>
                    <Col>
                    {
                    this.state.isDataLoaded == false ?
                    <div style={{ marginTop:10}} className="text-center"><Spinner animation="border" /></div> : ''
                    }
                    </Col>
                <Col></Col>
                </Row>

                    {
                        showSingleData == true ? 
                        <ModalComponent singleData={singleData} showSingleData={showSingleData} closeDetail={this.closeDetailModal}/>
                        : ''
                    }
                    
            </Container>
            </>
        );
  }
}
export default CreateResume;
