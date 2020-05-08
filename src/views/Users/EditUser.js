import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditForm from '..//Componentss/StudentForm';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class AddUser extends Component{
    render() {
        return (
          <div className="animated fadeIn">
            <Row>
              <Col xl={12}>
                <Card>
                    <CardHeader>
                        Student's Data
                    </CardHeader>
                    <CardBody>
                        <EditForm/>
                        <div className="form-actions">
                                <Button style={{marginRight:3}} type="submit" color="primary">Save changes</Button>
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