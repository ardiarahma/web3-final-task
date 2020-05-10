import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import axios from 'axios'

const apiUrl = 'http://yb-api.technow.id/api/'; 
const token = 'Bearer ' + localStorage.getItem('token')
const config = {
  headers: { "Authorization": token }
};
const addUser = `student/create`

class Users extends Component {
  constructor(props) {
      super(props);
      this.state = {
          error:null,
          users: [],
          response: {}
      };
  }
  
  componentDidMount(){
      axios.get(apiUrl + 'student', config)
      .then(response => response.data).then(  
        (result)=>{  
            this.setState({  
                users:result.data  
            });  
        },  
        (error)=>{  
            this.setState({error});  
        }
      )
  }
  deleteUser(userId) {  
    const { users } = this.state;     
    axios.delete(apiUrl + 'student/' + userId, config).then(result=>{  
     alert(result.data.message);  
      this.setState({  
        response:result,  
        users:users.filter(user=>user.id !== userId)  
      });  
    });  
  }
  render() {
    const{error,users}=this.state;
    if(error){  
        return(  
            <div>Error:{error.message}</div>  
        )  
    }  
    else {
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
                      <Link to={addUser}><Button block color="primary" style={{marginBottom:10}}>Add Student</Button></Link>
                    </Col>
                  </Row>
                  <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (  
                          <tr key={user.id}>  
                            <td>{user.name}</td>  
                            <td>{user.address}</td>  
                            <td>{user.phone}</td>  
                            <td>
                                <Link to={"/students/" + user.id}><Button color="success">Detail</Button></Link>
                                &nbsp;<Link to={"/student/edit/" + user.id}><Button color="info">Edit</Button></Link>
                                &nbsp;<Button color="danger" onClick={() => this.deleteUser(user.id)}>Delete</Button> 
                            </td>  
                          </tr>  
                        ))} 
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
}

export default Users;
