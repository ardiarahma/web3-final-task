import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateForm from '..//Componentss/StudentForm';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddUser extends Component{
    constructor(props) {  
      super(props);  
    
      this.initialState = {  
        id: '',  
        name: '',  
        address: '',  
        class_name: '',  
        place_of_birth: '',  
        date_of_birth: '',  
        phone: '',  
        facebook: '',  
        instagram: '',  
        twitter: '',  
      }  

    // ini diganti componentwillmount dibawah yaa -ardia-
    //   if (props.data.id) {  
    //     this.state = props.data  
    //   } else {  
    //     this.state = this.initialState;  
    //   }  
    
      this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
    
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'));
        this.setState({ id: user.id })
        
    }

    handleChange(event) {  
      const name = event.target.name;  
      const value = event.target.value;  
    
      this.setState({  
        [name]: value  
      })  
    }  
    
    handleSubmit(event) {  
      event.preventDefault();  
      // this.props.onFormSubmit(this.state);  
      this.setState(this.initialState);  
    }
    render() {
        let pageTitle;  
        let actionStatus;  
        if (this.state.id) {  
          pageTitle = <h2>Edit User</h2>  
          actionStatus = <b>Update</b>  
        } else {  
          pageTitle = <h2>Add User</h2>  
          actionStatus = <b>Save</b>  
        }
        return (
          <div className="animated fadeIn">
            <Row>
              <Col xl={12}>
                <Card>
                    <CardHeader>
                        {pageTitle}
                    </CardHeader>
                    <CardBody>
                    <Form onSubmit={this.handleSubmit} className="form-horizontal">
                        <FormGroup row>
                            <Col md="3">
                                <Label htmlFor="text-input">Name</Label>
                            </Col>
                            <Col xs="12" md="9">
                                <Input type="text"  
                                name="name"  
                                value={this.state.name}  
                                onChange={this.handleChange}  
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
                                value={this.state.address}  
                                onChange={this.handleChange}  
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
                                value={this.state.class_name}  
                                onChange={this.handleChange}  
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
                                value={this.state.place_of_birth}  
                                onChange={this.handleChange}  
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
                                value={this.state.date_of_birth}  
                                onChange={this.handleChange}  
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
                                value={this.state.phone}  
                                onChange={this.handleChange}  
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
                                value={this.state.facebook}  
                                onChange={this.handleChange}  
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
                                value={this.state.instagram}  
                                onChange={this.handleChange}  
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
                                value={this.state.twitter}  
                                onChange={this.handleChange}  
                                placeholder="twitter"/>
                            </Col>
                            <Input type="hidden" name="id" value={this.state.id}/>
                        </FormGroup>     
                    </Form>
                    <div className="form-actions">
                            <Button style={{marginRight:3}} type="submit" color="primary">{actionStatus}</Button>
                            <Button color="secondary">Cancel</Button>
                    </div>
                    </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )
      }
}

export default AddUser;