import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios'
import { browserHistory } from '../../../store';

class Login extends Component {
  // sebenernya harusnya gini, ketika kamu butuh binding data (function lama yg bukan arroww function ex: f(){} )
  // itulah kenawhy saya gapake constructor
  constructor(props){ // ini serah u mau pake apa nggkgosahheehhh
    super(props)
    this.state = {
      email: '', //define email buat dinamis
      password: '',
    }
  }

  componentDidMount(){
    // cek ketika user udah login dan ga logout dia auto redirect ke dashboard
    if(localStorage.getItem('token') !== null) browserHistory.push("/")
  }

  // fungsi change data 
  onChange = (e) => { // ketika kamu pake function model arrow function gini kamu gabutuh binding lagi
    const target = e.target.name; // target input
    const value = e.target.value; // target input ini field input email mana woy
    // console.log('mari kita lihat', target, value)
    this.setState({ //buat nge set/update value dari si state
      [target]: value
    })
  }

  // fungsi buat handle submit
  onSubmit = (e) => {
    e.preventDefault(); // biar ga reload dom browsermu
    const { email, password } = this.state // deconstructuring object state
    const params = {
      email, password,
    }
    console.log(params)
    axios.post('http://127.0.0.1:8000/api/login', params) //kalo udah dideploy jan lupa diganti urlnya
    .then( res => {   
      if(res.data.status === "success"){ //kalo success datanya disimpen hehe
        // console.log(res.data)
        localStorage.setItem('token', res.data.user.token) //diset dilocal storage biar ga ilang
        localStorage.setItem('user', JSON.stringify(res.data.user)) // json stringfy biar datanya jadi string pas diset local, kalo nggk nanti jadi [object, object]
        // terun kalo sukses diarahin ke ??? dashboard
        browserHistory.push('/dashboard') // dah terus mana tampilan selanjutanya>
      } else {
        alert('gatau')
      }
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    const { email, password } = this.state // deconstructuring this.state kalo datanya dikit emang ga kerasa tapi kalo udah banyak mending diginiin aja
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
                          name="email" // name harus sama kayak define di state
                          value={email} // dipake value statenya
                          onChange={this.onChange} // fungtion onChange dipake disini
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
                            type="submit" //typenya submit buat trigger onSubmit dari form yg tadi
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
