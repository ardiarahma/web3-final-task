import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios'
import { browserHistory } from '../../../store';

class Login extends Component {
  constructor(props){ 
    super(props)
    this.state = {
      email: '', 
      password: '',
    }
  }

  componentDidMount(){
    if(localStorage.getItem('token') !== null) browserHistory.push("/")
  }

  // fungsi change data 
  onChange = (e) => {
    const target = e.target.name; 
    const value = e.target.value; 
    this.setState({
      [target]: value
    })
  }

  // fungsi buat handle submit
  onSubmit = (e) => {
    e.preventDefault(); 
    const { email, password } = this.state // deconstructuring object state
    const params = {
      email, password,
    }
    axios.post('https://cors-anywhere.herokuapp.com/http://yb-api.technow.id/api/login', params) 
    .then( res => {   
      if(res.data.status === "success"){ 
        localStorage.setItem('token', res.data.user.token) 
        localStorage.setItem('user', JSON.stringify(res.data.user)) 
        browserHistory.push('/dashboard') 
      } else {
        alert(res.data.message)
      }
    })
    .catch( err => {
        alert('Error')
        console.log(err)
    })
  }

  render() {
    const { email, password } = this.state 
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form
                      onSubmit={this.onSubmit} // hmmmmm
                    >
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="email"
                          placeholder="Email"
                          autoComplete="email"
                          name="email" 
                          value={email} 
                          onChange={this.onChange} 
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          name="password"
                          value={password}
                          onChange={this.onChange}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button
                            type="submit" 
                            color="primary"
                            className="px-4"
                          >Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Online Years Book</h2>
                      <p>A yearbook, also known as an annual, is a type of a book published annually. One use is to record, highlight, and commemorate the past year of a school.</p>
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Make your memory easy to access with me!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
