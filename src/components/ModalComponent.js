import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col, Table } from 'react-bootstrap';
import Separator from './Separator';

class ModalComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            showSingleData:this.props.showSingleData
        }
    }

    handleClose = () => {
        this.setState({
            showSingleData:false
        })
        this.props.closeDetail();
    }
    render(){
        var { showSingleData } = this.state;
        var { singleData } = this.props;
        return(
            <>
            <Modal show={showSingleData} size="lg">
                <Modal.Header>
                <Modal.Title>View Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    

                <Container style={{marginTop:0}}>
                    <h5>General</h5>
                    <Row>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone No</th>
                                <th>Address</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>{singleData.name}</td>
                                    <td>{singleData.email}</td>
                                    <td>{singleData.phoneno}</td>
                                    <td>{singleData.address}</td>
                                </tr>
      
                            </tbody>
                        </Table>
                    </Row>

                    <h5 style={{marginTop:20}}>Education</h5>
                    <Row>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Institute</th>
                                <th>Degree</th>
                                <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(singleData.education).map((key, index) => (
                                <tr>
                                    <td>{singleData.education[index].institute}</td>
                                    <td>{singleData.education[index].degree}</td>
                                    <td>{singleData.education[index].year}</td>
                                </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </Table>
                    </Row>

                    <h5 style={{marginTop:20}}>Experience</h5>
                    <Row>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                <th>Company</th>
                                <th>Designation</th>
                                <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(singleData.experience).map((key, index) => (
                                <tr>
                                    <td>{singleData.experience[index].company}</td>
                                    <td>{singleData.experience[index].designation}</td>
                                    <td>{singleData.experience[index].year}</td>
                                </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </Table>
                    </Row>

                    <h5 style={{marginTop:20}}>Skills</h5>
                    <Row>
                        <Col>
                        {
                            Object.keys(singleData.skill).map((key, index) => (
                                singleData.skill[index].skill_name + "  "
                                )
                            )
                        }
                        </Col>
                    </Row>


                    </Container>




                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        )
    }
}
export default ModalComponent;