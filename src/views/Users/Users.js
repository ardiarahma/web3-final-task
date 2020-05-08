import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'
import axios from 'axios'
function UserRow(props) {
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (action) => {
    return action === 'edit' ? 'warning' :
      action === 'delete' ? 'danger' :
        'primary'
  }

  return (
    <tr key={user.id.toString()}>
      <td>{user.name}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>
        <Link to={userLink}><Badge color={getBadge('edit')}>Edit</Badge></Link>
        <Link to={userLink}><Badge color={getBadge('delete')}>Delete</Badge></Link>
      </td>
    </tr>
  )
}
const addUser = `#`

class Users extends Component {
  constructor(props) {
      super(props);
      this.state = {
          users: []
      };
  }
  getUsersData() {
      var token = 'Bearer ' + localStorage.getItem('token')
      console.log(token)
      axios.get('http://127.0.0.1:8000/api/student',{ headers: {"Authorization" : token} })
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
    

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Student <small className="text-muted">list</small>
              </CardHeader>
              <CardBody>
                <Row className="align-items-center">
                  <Col col="6" sm="4" md="2" xl="2" className="mb-3 mb-xl-0">
                    <Link to={addUser}><Button block color="primary">Add Student</Button></Link>
                  </Col>
                </Row>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
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

export default Users;
