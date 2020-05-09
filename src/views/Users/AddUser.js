import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateForm from '..//Componentss/StudentForm';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import { browserHistory } from '../../store';

class AddUser extends Component{
    render() {
        return (
          <div className="animated fadeIn">
            <Row>
              <Col xl={12}>
                <Card>
                    <CardHeader>
                        Add Student's Data
                    </CardHeader>
                    <CardBody>
                        <CreateForm/>
                    </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )
      }
}

export default AddUser;