import React, { Component } from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, Input, Label, Button, Alert, FormGroup, Userform, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { func } from 'prop-types';
import axios from "axios";

const Search = (props) => {
  const {
    buttonLabel,
    className
  } = props;


  const [modal, setModal] = useState(false);
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    department: "",
    phone: "",
    email: ""
  })

  const toggle = () => setModal(!modal);
  const getid = (s) => {
    s.preventDefault();
    let data = { employee_id: s.target.employee_id.value };
    console.log(data)
    axios.post("http://localhost:3000/search", data)
      .then(function (response) {
        let x = response.data[0];
        setEmployee({
          first_name: x.first_name,
          last_name: x.last_name,
          department: x.department,
          phone: x.phone,
          email: x.email
        })
      })
      .catch(() => {
        console.log("Something went wrong. Please try again later");
      });
  }

  return (
    <div style={{ width: "50%" }}>
      <Alert>Search employee</Alert>
      <form onSubmit={getid} >
        <FormGroup row>
          <Label sm={2}>Employee No</Label>
          <Col sm={10}><Input type="number" name="employee_id" style={{ backgroundColor: "grey", color: "black" }} id="exampleEmail" /></Col>
        </FormGroup>
        <Button color="primary" type="submit" onClick={toggle}>{buttonLabel}Search</Button>
        <div>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle} style={{ backgroundColor: "" }}>Employee Details</ModalHeader>
            <ModalBody>
              <Container>
                <Row xs="2">
                  <Col>First name</Col><Col>{employee.first_name}</Col>
                  <Col>Last name</Col><Col>{employee.last_name}</Col>
                  <Col>Department</Col><Col>{employee.department}</Col>
                  <Col>Email</Col><Col>{employee.email}</Col>
                  <Col>Phone</Col><Col>{employee.phone}</Col>
                </Row>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>Back</Button>
            </ModalFooter>
          </Modal>
        </div>
      </form>
    </div>
  );
}
export default Search;

































// const [user, setUser] = useState({
  //   username: ''
  // });
  // const [product, setProduct] = useState({
  //   qty: 0
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // setUser({
  //   ...user,
  //   username: 'daf'
  // })
  // setIsLoading(true);
  // useEffect(() => {
  //   const somdfunction = () =>{

  //   };
  //   return () => {
  //     somdfunction();
  //   };
  // }, []); 




// class Search extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       users:[],
//     };
//   }

//   dis() {

//     let self = this;
//     fetch('http://localhost:3000/search',{
//       method: 'POST',
//     }).then(function(response) {
//         console.log((response));
//         return response.json();
//     }).then((success) => {
//       console.log(JSON.stringify(success));
//       self.setState(() => {
//         return {
//           users: success,
//           console: JSON.stringify(success)
//         };
//       });
//     });    

//   }

//   render(props)  {
