
import React, { useState, useEffect } from "react";
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';

import axiosWithAuth from "../axios/index";
import axios from "axios";
import { UsersForm } from "./UsersForm";



export default function UsersList(props) {
  const [friends, setFriends] = useState({ data: [] });
  const [newFriends, setNewFriends] = useState({ data: [] });
  console.log("?????: ", friends)
  console.log("?????22222: ", newFriends)


  useEffect(() => {

    axiosWithAuth().get("http://localhost:3300/api/jokes")
      .then(res => {
        // debugger
        console.log(">>>: ", res)
        setFriends(res);
      })
      .catch(error => {
        alert("Sorryyyyyyyyyy" + error.message)
      });
  }, []);

  // function onDeleteHandle(id) {
  //   console.log("ddddddd", id)

  //   setFriends({
  //     data: friends.data.filter(item => {
  //       console.log("ffff:", friends)
  //       if (item.id !== id) {
  //         return item;
  //       }
  //     })
  //   });
  // }

  // function onEditHandle(id, name, age, email) {
  //   setNewFriends({
  //     edit: true,
  //     data: [{
  //       id: id,
  //       name: name,
  //       age: age,
  //       email: email
  //     }]
  //   });
  // }

  // const changeHandler = e => {

  //   setNewFriends({
  //     ...newFriends,
  //     [e.target.name]: e.target.value
  //   });
  // };
  // function onUpdateHandle(event) {
  //   event.preventDefault();
  //   console.log("uuuuuu111:", newFriends)
  //   setFriends({
  //     data: friends.data.map(item => {
  //       console.log("uuuuuu:", friends, item.id, newFriends.data[0].id)

  //       if (item.id === newFriends.data[0].id) {

  //         item["name"] = event.target.name.value;
  //         item["age"] = event.target.age.value;
  //         item["email"] = event.target.email.value;
  //         console.log("..iii2222..: ", item)
  //         return item;
  //       }
  //       console.log("..iii..: ", item)
  //       return item;
  //     })

  //   });
  //   setNewFriends({
  //     edit: false,
  //   })
  //   console.log("uuuuuu22222:", newFriends)
  // }

  // function renderEditForm() {
  //   return (
  //     <form onSubmit={onUpdateHandle}>
  //       <input
  //         type="text"
  //         name="name"
  //         Value={newFriends.data[0].name}
  //         onChange={changeHandler}
  //       />
  //       <input
  //         type="text"
  //         name="age"
  //         Value={newFriends.data[0].age}
  //         onChange={changeHandler}
  //       />
  //       <input
  //         type="text"
  //         name="email"

  //         Value={newFriends.data[0].email}
  //         onChange={changeHandler}
  //       />
  //       <button>Update</button>
  //     </form>
  //   );

  // }


  return (
    <div>
      {/* <span>
          <NavLink exact to="/">Login</NavLink>
          <NavLink to="/friends">Friends List</NavLink>
        </span> */}
      {console.log("ffff2222:", friends)}
      {/* {renderEditForm()} */}
      {
        // friends.edit ?
        // newFriends.edit ?
          // renderEditForm() :
          friends.data.map(friend => (
            // newFriends.data.map(friend => (
            <div key={friend.id}>
              {/* {console.log(friend)} */}
              Name: {friend.name}
              <br />
              Age: {friend.age}
              <br />
              Email: {friend.email}
              <br />
              {/* <button onClick={() => onEditHandle(friend.id, friend.name, friend.age, friend.email)}>Edit</button>
              <button onClick={() => onDeleteHandle(friend.id)}>Delete</button> */}
              <br />
              <br />
            </div>
          ))
      }
      {/* <UsersForm setFriends={setFriends} /> */}
    </div>
  )
}



