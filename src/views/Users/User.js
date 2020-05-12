import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table ,Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
const apiUrl = 'https://cors-anywhere.herokuapp.com/http://yb-api.technow.id/api/'; 
const token = 'Bearer ' + localStorage.getItem('token')
const config = {
  headers: { "Authorization": token }
};
class User extends Component {
  constructor(props) {
      super(props);
      this.state = {
          users: []
      };
  }
  getUsersData() {
      axios.get(apiUrl + "student/" + this.props.match.params.id, config)
        .then( res => {  
              if(res.data.message === "Success"){ 
                const data = res.data.data
                const users = data[0]
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
    const user = this.state.users
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
                  <div className="form-actions">
                      <Link to="/students"><Button color="secondary">Back</Button></Link>
                  </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
