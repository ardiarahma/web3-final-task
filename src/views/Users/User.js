import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios'

import usersData from './UsersData'

class User extends Component {
  constructor(props) {
      super(props);
      this.state = {
          users: []
      };
  }
  getUsersData() {
      var token = 'Bearer ' + localStorage.getItem('token')
      axios.get('http://127.0.0.1:8000/api/student/',{ headers: {"Authorization" : token} })
        .then( res => {  
              if(res.data.message === "Success"){ 
                const data = res.data.data
                console.log(data)
                const users = data
                this.setState({
                    users
                })
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

    const user = this.state.users.find( user => user.id.toString() === this.props.match.params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        userDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
