import React, { Component } from 'react';
import { Button, Alert,Table } from 'reactstrap';
import Items from './items';
class Displays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      users: [],
    };

  }
  dis() {
    let self = this;
    fetch('http://localhost:3000/display/', {
      method: 'POST',
    }).then(function (response) {
      console.log((response));
      return response.json();
    }).then((success) => {
      console.log(JSON.stringify(success));
      self.setState(() => {
        return {
          users: success,
          console: JSON.stringify(success)
        };
      });
    });
  }
  render() {
    return (
      <div>
        <br />
        <Alert style={{ width: "50%" }}>Display</Alert>
        <Button onClick={() => this.dis()}>Show all employees</Button><br /><br />
        <div>
          <Table >
            <tbody >
              {this.state.users.map((item, key) => {
                return <Items key={key} item={item} />
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default Displays;




















/*import React, { Component }  from 'react';
import { Button, Alert } from 'reactstrap';
const Displays = () =>
{
    function sayHello() {
        fetch('http://localhost:3000/display', {
            method: 'get'

        })
        .then(function(response) {
            //alert(response);
             console.log(response.data);
             return response.json();
          })
        }


    return (


            <Button color="success" onClick={sayHello}> show all employees</Button>

    )
}

export default Displays;

import React from 'react';

import axios from 'axios';

export default class Displays extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/display`)
      .then(res => {
          console.log(res.data)
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}*/