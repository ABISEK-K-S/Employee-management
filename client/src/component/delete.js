import React from 'react';
import { useState } from 'react';
import { Col, Input, Label, Button, Alert, FormGroup } from 'reactstrap';
import axios from "axios";

const Delete = (props) => {
  const [employee_id, setemployee_id] = useState(0);

  const handleChange = (event) => {
    setemployee_id({
      [event.target.name]: event.target.value
    });
    console.log(employee_id)
  }

  const final = () => {

    console.log(employee_id);
    axios.post("http://localhost:3000/delete", employee_id).then((success) => {
      alert((success.data))
      console.log(success.data)
    });
  };


  return (
    <div style={{ width: "50%" }}>
      <Alert>Delete employee</Alert>
      <form>
        <FormGroup row>
          <Label sm={2}>Employee No</Label>
          <Col sm={10}><Input type="number" name="employee_id" onChange={handleChange} style={{ backgroundColor: "grey", color: "black" }} id="exampleEmail" /></Col>
        </FormGroup>
        <Button color="danger" onClick={final}>Remove</Button>
      </form>
    </div>
  )

}


export default Delete;

