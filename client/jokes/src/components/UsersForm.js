import React, { useState } from "react";
import axiosWithAuth from "../axios";
export function UsersForm(props) {
  const [newFriend, setNewFriend] = useState({
    name: "",
    
  });
  const changeHandler = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };
  const submitHandler = e => {
    e.preventDefault();
    // axios
    axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
      .then(response => {
        console.log("?????: ", response);
        // setNewFriend(response.data); 
        props.setNewFriend(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (<>
    <h3>Friends Membership Form</h3>
    <form onSubmit={submitHandler}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={newFriend.name} onChange={changeHandler} />
      </div>

      <div>
        <label>Age</label>
        <input type="text" name="age" value={newFriend.age} onChange={changeHandler} />
      </div>

      <div>
        <label>Email</label>
        <input type="text" name="email" value={newFriend.email} onChange={changeHandler} />
      </div>
      <button type="submit">Submit</button>

    </form>
    <button>Update/Edit Form</button>
  </>);
}
