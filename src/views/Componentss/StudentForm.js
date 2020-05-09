import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import { browserHistory } from '../../store';
import { Link } from 'react-router-dom';

const apiUrl = 'http://127.0.0.1:8000/api/'; 
const token = 'Bearer ' + localStorage.getItem('token')
class StudentForm extends Component{
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
  
        this.state = this.initialState;  
      }
  
      onChange = (e) => { 
          const target = e.target.name; 
          const value = e.target.value; 
          // console.log('mari kita lihat', target, value)
          this.setState({ 
            [target]: value
          })
      }
      onSubmit = (e) => {
          e.preventDefault();
          const { name, address, class_name, place_of_birth, date_of_birth, phone, facebook,instagram,twitter } = this.state 
          const params = {
              name, address, class_name, place_of_birth, date_of_birth, phone, facebook,instagram,twitter
          }
          const config = {
              headers: { "Authorization": token }
          };
          console.log(params)
          axios.post(apiUrl + 'student', params, config)
          // axios.post('http://127.0.0.1:8000/api/student', params) 
          .then( res => {   
            if(res.data.status === "success"){ 
              alert(res.data.message)
              // console.log(res.data)
              browserHistory.push('/students')
            } else {
              alert(res.data.error[0])
            }
          })
          .catch( err => {
            console.log(err)
          })
      } 

    render() {
        let actionStatus;  
        actionStatus = <b>Save</b>  
        const { name, address, class_name, place_of_birth, date_of_birth, phone, facebook,instagram,twitter } = this.state

        return (
            <Form  onSubmit={this.onSubmit} className="form-horizontal">
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="text"  
                        name="name"  
                        value={name}  
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
                        value={address}  
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
                        value={class_name}  
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
                        value={place_of_birth}  
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
                        value={date_of_birth}  
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
                        value={phone}  
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
                        value={facebook}  
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
                        value={instagram}  
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
                        value={twitter}  
                        onChange={this.onChange}  
                        placeholder="twitter"/>
                    </Col>
                </FormGroup>     
                <div className="form-actions">
                        <Button style={{marginRight:3}} type="submit" color="primary">{actionStatus}</Button>
                        <Link to="/students"><Button color="secondary">Cancel</Button></Link>
                </div>
            </Form>
        )
    }
}

export default StudentForm;