import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditForm from '..//Componentss/StudentForm';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
const apiUrl = 'http://127.0.0.1:8000/api/'; 
const token = 'Bearer ' + localStorage.getItem('token')
class AddUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    getUsersData() {
        axios.get(apiUrl + 'student/' + this.props.match.params.id,{ headers: {"Authorization" : token} })
          .then( res => {  
                if(res.data.message === "Success"){ 
                  const data = res.data.data
                  const users = data
                  this.setState({
                      users
                  })
                  console.log(this.state.users)
                } else {
                  alert('gatau')
                } 

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {
        const {users} = this.state
        return (
          <div className="animated fadeIn">
            <Row>
              <Col xl={12}>
                <Card>
                    <CardHeader>
                        Edit Student's Data
                    </CardHeader>
                    <CardBody>
                        <Form  onSubmit={this.onSubmit} className="form-horizontal">
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Name</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text"  
                                    name="name"  
                                    value={users.name}  
                                    onChange={this.onChange}  
                                    placeholder="name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="textarea-input">Address</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="textarea"  
                                    name="address"  
                                    value={users.address}  
                                    onChange={this.onChange}  
                                    placeholder="address"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Class</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text"  
                                    name="class_name"  
                                    value={users.class_name}  
                                    onChange={this.onChange}  
                                    placeholder="class_name"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Place of Birth</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text"  
                                    name="place_of_birth"  
                                    value={users.place_of_birth}  
                                    onChange={this.onChange}  
                                    placeholder="place_of_birth"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                <Label htmlFor="date-input">Date of Birth</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="date"  
                                    name="date_of_birth"  
                                    value={users.date_of_birth}  
                                    onChange={this.onChange}  
                                    placeholder="date_of_birth"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Phone Number</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="number"  
                                    name="phone"  
                                    value={users.phone}  
                                    onChange={this.onChange}  
                                    placeholder="phone"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Facebook</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text"  
                                    name="facebook"  
                                    value={users.facebook}  
                                    onChange={this.onChange}  
                                    placeholder="facebook"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Instagram</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text"  
                                    name="instagram"  
                                    value={users.instagram}  
                                    onChange={this.onChange}  
                                    placeholder="instagram"/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="text-input">Twitter</Label>
                                </Col>
                                <Col xs="12" md="9">
                                    <Input type="text"  
                                    name="twitter"  
                                    value={users.twitter}  
                                    onChange={this.onChange}  
                                    placeholder="twitter"/>
                                </Col>
                            </FormGroup>     
                            <div className="form-actions">
                                    <Button style={{marginRight:3}} type="submit" color="primary">Save</Button>
                                    <Link to="/students"><Button color="secondary">Cancel</Button></Link>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )
      }
}

export default AddUser;