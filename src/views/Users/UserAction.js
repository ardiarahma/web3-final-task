import React, { Component } from 'react';

import Users from './Users';  
import AddUser from './AddUser';  
import axios from 'axios';  
const apiUrl = 'http://127.0.0.1:8000/api/'; 
const token = 'Bearer ' + localStorage.getItem('token');

class UserAction extends Component { 
    constructor(props) {  
        super(props);  
      
        this.state = {  
          isAddUser: false,  
          error: null,  
          response: {},  
          userData: {},  
          isEdituser: false,  
          isUserDetails:true,  
        }  
      
        this.onFormSubmit = this.onFormSubmit.bind(this);  
      
    }

    onCreate() {  
        this.setState({ isAddUser: true });  
        this.setState({ isUserDetails: false });  
    }  
    onDetails() {  
        this.setState({ isUserDetails: true });  
        this.setState({ isAddUser: false });  
    }

    onFormSubmit(data) {  
        this.setState({ isAddUser: true });  
        this.setState({ isUserDetails: false });  
        if (this.state.isEdituser) {  
            axios.put(apiUrl + 'student',data).then(result => {  
                alert(result.data);  
                this.setState({  
                    response:result,    
                    isAddUser: false,  
                    isEdituser: false  
                })  
            });  
        } else {  
            axios.post(apiUrl + 'student',data).then(result => {  
                console.data(result)
                alert(result.data.message);  
                this.setState({  
                    response:result,    
                    isAddUser: false,  
                    isEdituser: false  
                })  
            });  
        }  
    
    }

    editUser = userId => {  
        this.setState({ isUserDetails: false });  
        axios.get(apiUrl + "student/" + id).then(result => {  
            this.setState({  
              isEdituser: true,  
              isAddUser: true,  
              userData: result.data           
            });  
          },  
          (error) => {  
            this.setState({ error });  
          }  
        )  
         
    }

    render() {  
        let userForm;  
        if (this.state.isAddUser || this.state.isEditUser) {  
          userForm = <AddUser onFormSubmit={this.onFormSubmit} user={this.state.userData} />  
        }  
        return (  
          <div className="App">  
            {/* <Container>   */}
            <Card>
                    <CardHeader>
                        <h1 style={{ textAlign: 'center' }}>CURD operation in React</h1>  
                        <hr></hr>  
                        {!this.state.isUserDetails && <Button variant="primary" onClick={() => this.onDetails()}> User Details</Button>}  
                        {!this.state.isAddUser && <Button variant="primary" onClick={() => this.onCreate()}>Add User</Button>}  
                        <br></br>  
                        {!this.state.isAddUser && <Users editUser={this.editUser} />}  
                        {userForm}  

                    </CardHeader>
                    <CardBody>

                    </CardBody>
                </Card>

            {/* </Container>   */}
          </div>  
        );  
      }
}
export default UserAction;  