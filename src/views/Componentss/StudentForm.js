import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class StudentForm extends Component{
    render() {
        return (
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="text-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="textarea-input">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="text-input">Class</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="text-input">Place of Birth</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                    <Label htmlFor="date-input">Date of Birth</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="date" id="date-input" name="date-input"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="text-input">Phone Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="text-input">Facebook</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="text-input">Instagram</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="3">
                        <Label htmlFor="text-input">Twitter</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input"/>
                    </Col>
                </FormGroup>     
            </Form>
        )
    }
}

export default StudentForm;