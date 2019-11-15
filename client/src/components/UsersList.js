
import React, { useState, useEffect } from "react";
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';

import axiosWithAuth from "../axios";
import axios from "axios";
import { FriendsForm } from "./FriendsForm";



export default function FriendsList(props) {
  const [friends, setFriends] = useState({ data: [] });
  const [newFriends, setNewFriends] = useState({ data: [] });
  console.log("?????: ", friends)
  console.log("?????22222: ", newFriends)


  useEffect(() => {

    axiosWithAuth().get("http://localhost:5000/api/friends")
      .then(res => {
        // debugger
        console.log(">>>: ", res)
        setFriends(res);
      })
      .catch(error => {
        alert("Sorryyyyyyyyyy")
      });
  }, []);

  function onDeleteHandle(id) {
    console.log("ddddddd", id)

    setFriends({
      data: friends.data.filter(item => {
        console.log("ffff:", friends)
        if (item.id !== id) {
          return item;
        }
      })
    });
  }


  function onEditHandle(id, name, age, email) {
    // setFriends({
    setNewFriends({
      edit: true,
      // name: name,
      // age: age,
      // email: email
      // id: id,
      //  data: friends.data
      data: [{
        id: id,
        name: name,
        age: age,
        email: email
      }]

      //  id: arguments[0],
      //   title: arguments[1]


    });
    // renderEditForm()
  }
  // const changeHandler = e => {
  //   setFriends({
  //     ...friends,
  //     [e.target.name]: e.target.value
  //   });
  // };
  const changeHandler = e => {
    // setFriends({
    //   ...friends,
    //   [e.target.name]: e.target.value
    // });
    setNewFriends({
      ...newFriends,
      [e.target.name]: e.target.value
    });
  };
  function onUpdateHandle(event) {
    event.preventDefault();
    console.log("uuuuuu111:", newFriends)
    setFriends({
      // data: friends.data.map(item => {
      // data: newFriends.data.map(item => {
      //   console.log("uuuuuu:", friends)
      //   if (item.id === friends.id) {
      //     item["name"] = event.target.name.value;
      //     item["age"] = event.target.age.value;
      //     item["email"] = event.target.email.value;
      //     console.log("..iii2222..: ", item)
      //     return item;
      //   }
      //   console.log("..iii..: ", item)
      //   return item;
      //   // data: friends
      // })
      
      // ...friends,
      data: friends.data.map(item => {
        console.log("uuuuuu:", friends, item.id, newFriends.data[0].id)
        
        if (item.id === newFriends.data[0].id) {
          
          item["name"] = event.target.name.value;
          item["age"] = event.target.age.value;
          item["email"] = event.target.email.value;
          console.log("..iii2222..: ", item)
          return item;
        }
        console.log("..iii..: ", item)
        return item;
        // data: friends
      })

    });
    setNewFriends({
      edit: false,
    })
    console.log("uuuuuu22222:", newFriends)
    // setFriends({
    //   edit: false
    // });
  }

  function renderEditForm() {
    // if (friends.edit) {
    return (
      <form onSubmit={onUpdateHandle}>
        <input
          type="text"
          name="name"
          // Value={friends.data.name}
          // Value={friends.name}
          Value={newFriends.data[0].name}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="age"
          // defaultValue={friends.name}
          // Value={friends.data.age}
          Value={newFriends.data[0].age}
          onChange={changeHandler}
        />
        <input
          type="text"
          name="email"
          // defaultValue={friends.name}
          // Value={friends.data.email}
          Value={newFriends.data[0].email}
          onChange={changeHandler}
        />
        <button>Update</button>
      </form>
    );
    // }
  }


  return (
    <div>
      {/* <span>
          <NavLink exact to="/">Login</NavLink>
          <NavLink to="/friends">Friends List</NavLink>
        </span> */}
      {console.log("ffff2222:", friends.edit)}
      {/* {renderEditForm()} */}
      {
        // friends.edit ?
        newFriends.edit ?
          renderEditForm() :
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
              <button onClick={() => onEditHandle(friend.id, friend.name, friend.age, friend.email)}>Edit</button>
              <button onClick={() => onDeleteHandle(friend.id)}>Delete</button>
              <br />
              <br />
            </div>
          ))
      }
      <FriendsForm setFriends={setFriends} />
    </div>
  )
}



