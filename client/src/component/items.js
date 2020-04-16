import React, { useState }  from 'react';
import { Alert,Button } from 'reactstrap';
import axios from "axios";
import "./styles.css";
const Items=(props)=>
{
    const {item} = props;
    const [user, setUser] = useState({
        employee_id: '',
        first_name: '',
        last_name:'',
        department:'',
        email:'',
        phone:'',
        isEdit: false
    });
    console.log('items', item)
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name] : event.target.value
            // first_name: event.target.first_name.value
        });
    }
    const editUser = () => {
        setUser({
            ...user,
            employee_id: item.employee_id,
            first_name: item.first_name,
            last_name: item.last_name,
            department: item.department,
            email: item.email,
            phone: item.phone,
            isEdit: !user.isEdit
        });
    }
    const updateUser = () => {
        
        console.log(user);
        axios.post("http://localhost:3000/update", user).then(() => {})
          .catch(() => {
                console.log("Something went wrong. Plase try again later");});
        };


    return(
        <Alert>
        <thead>
                  <tr>    
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Department</th>
                  <th>Email</th>
                  <th>Phone</th>
                  </tr>
               </thead>    
        <tr>
          <td style={{color:"red"}}><input value={item.employee_id} name="employee_id"/> </td>
          <td >
            {user.isEdit ? <input type="text" onChange={handleChange} name="first_name" defaultValue={item.first_name} style={{color:"red",backgroundColor:""}}class="blink_text"/> :
                <input type="text"  value={ item.first_name} />}   </td>
          <td>
            {user.isEdit ? <input type="text" onChange={handleChange} name="last_name" defaultValue={item.last_name} style={{color:"red",backgroundColor:""}}class="blink_text"/> :
                <input type="text"  value={ item.last_name}/>}   </td>
          <td>
            {user.isEdit ? <input type="text" onChange={handleChange} name="department" defaultValue={item.department} style={{color:"red",backgroundColor:""}}class="blink_text"/> :
                <input type="text"   value={ item.department}/>}   </td>
          <td>
            {user.isEdit ? <input type="text" onChange={handleChange} name="email" defaultValue={item.email} style={{color:"red",backgroundColor:""}}class="blink_text"/> :
                <input type="text"   value={ item.email}/>}   </td>
          <td>
            {user.isEdit ? <input type="text" onChange={handleChange} name="phone" defaultValue={item.phone} style={{color:"red",backgroundColor:""}}class="blink_text"/> :
                <input type="text"  value={ item.phone}/>}   </td>                        
          <td>{user.isEdit ? 
            <React.Fragment>
                <Button onClick={updateUser} color="success">submit</Button><br/><br/>
                <Button onClick={editUser} color="secondary">Cancel</Button>
            </React.Fragment> 
            : <Button onClick={editUser} color="danger">Edit</Button> } </td>
        </tr> 
      </Alert>  
      
    )
}
export default Items;