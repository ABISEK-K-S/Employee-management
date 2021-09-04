import React, { Component } from 'react';
import './App.css';
import Userform from './component/insert'
import Displays from './component/display'
import Search from './component/search'
import Delete from './component/delete'
import axios from "axios";
class App extends Component
 {
  getemployee=(e)=>
      {
        e.preventDefault();
        let data ={
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        department: e.target.department.value,
        phone: e.target.phone.value,
        email: e.target.email.value };
        console.log(data)
        axios.post("http://localhost:3000/insert", data).then(() => {})
          .catch(() => {
                console.log("Something went wrong. Plase try again later");});
      }
     
      render() {
        console.log('repaint')
        return (
          <center>
          <div><br/>
            <Userform getemployee={this.getemployee}/><br/><br/>
            <Displays/><br/><br/>
            <Search getid={this.getid}/><br/><br/>
            <Delete/><br/>
          </div>
          </center>
        )}
  }
export default App;