import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CreateForm from '..//Componentss/StudentForm';
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
                        <CreateForm/>
                        <div className="form-actions">
                                <Button style={{marginRight:3}} type="submit" color="primary">Save</Button>
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