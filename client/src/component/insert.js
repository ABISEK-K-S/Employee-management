import React from 'react';
import { Col, Form, Input, Label, FormGroup, Button, Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Userform = (props) => {
    return (
        <center>
            <div style={{ width: "50%" }}>
                <Alert>Add employee</Alert>
                <form onSubmit={props.getemployee} >
                    <Form><FormGroup row>
                        <Label for="exampleEmail" sm={2}>FIRST NAME</Label>
                        <Col sm={10}><Input type="text" name="first_name" style={{ backgroundColor: "white", color: "red" }} id="exampleEmail" /></Col>
                        <Label for="exampleEmail" sm={2}>LAST NAME</Label>
                        <Col sm={10}><Input type="text" name="last_name" style={{ backgroundColor: "white", color: "red" }} id="exampleEmail" /></Col>
                        <Label for="exampleEmail" sm={2}>DEPARTMENT</Label>
                        <Col sm={10}><Input type="text" name="department" style={{ backgroundColor: "white", color: "red" }} id="exampleEmail" /></Col>
                        <Label for="exampleEmail" sm={2}>PHONE</Label>
                        <Col sm={10}><Input type="number" name="phone" style={{ backgroundColor: "white", color: "red" }} id="exampleEmail" /></Col>
                        <Label for="exampleEmail" sm={2}>E-MAIL</Label>
                        <Col sm={10}><Input type="email" name="email" style={{ backgroundColor: "white", color: "red" }} id="exampleEmail" /></Col>
                    </FormGroup>
                        <Button color="primary">Submit</Button></Form>
                </form>
            </div>
        </center>
    )
}

export default Userform;

